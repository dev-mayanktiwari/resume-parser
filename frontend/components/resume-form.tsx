"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Upload } from "lucide-react";
import { parseResume } from "@/lib/actions";
import type { ResumeData } from "@/lib/types";
import { GetResumeTextSchema } from "@/lib/schema";

interface ResumeFormProps {
  onParseStart: () => void;
  onParseComplete: (data: ResumeData) => void;
  onParseError: (error: string) => void;
  isLoading: boolean;
}

export function ResumeForm({
  onParseStart,
  onParseComplete,
  onParseError,
  isLoading,
}: ResumeFormProps) {
  const [resumeText, setResumeText] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setValidationError("");

    // Validate using Zod schema
    try {
      GetResumeTextSchema.parse({ text: resumeText });
    } catch (error) {
      if (error instanceof Error) {
        // If it's a Zod error, it will have a message property
        setValidationError(error.message);
      } else {
        setValidationError("Resume text must be at least 100 characters long");
      }
      onParseError(validationError);
      return;
    }

    onParseStart();

    try {
      const data = await parseResume(resumeText);
      onParseComplete(data);
    } catch (err) {
      onParseError("Failed to parse resume. Please try again.");
      console.error(err);
    }
  };

  // Calculate remaining characters needed
  const charactersNeeded = Math.max(0, 100 - resumeText.length);
  const isValid = resumeText.length >= 100;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="resume-text" className="block text-sm font-medium mb-2">
          Resume Text
        </label>
        <Textarea
          id="resume-text"
          placeholder="Paste your resume text here..."
          className={`min-h-[400px] ${
            !isValid && resumeText.length > 0
              ? "border-orange-300 focus-visible:ring-orange-300"
              : ""
          }`}
          value={resumeText}
          onChange={(e) => {
            setResumeText(e.target.value);
            setValidationError("");
          }}
        />

        {/* Character count indicator */}
        <div className="mt-2 text-sm flex justify-between">
          <div>
            {resumeText.length > 0 && !isValid && (
              <p className="text-orange-500">
                {charactersNeeded} more character
                {charactersNeeded !== 1 ? "s" : ""} needed
              </p>
            )}
            {isValid && (
              <p className="text-green-500">✓ Minimum length reached</p>
            )}
          </div>
          <div className="text-gray-500">{resumeText.length} characters</div>
        </div>

        {validationError && (
          <p className="text-red-500 text-sm mt-1">{validationError}</p>
        )}
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isLoading || !isValid}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Parsing...
            </>
          ) : (
            "Parse Resume"
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={true}
          className="gap-2"
        >
          <Upload className="h-4 w-4" />
          Upload PDF (Coming Soon)
        </Button>
      </div>
    </form>
  );
}
