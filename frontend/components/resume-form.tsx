"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Upload } from "lucide-react"
import { parseResume } from "@/lib/actions"
import type { ResumeData } from "@/lib/types"

interface ResumeFormProps {
  onParseStart: () => void
  onParseComplete: (data: ResumeData) => void
  onParseError: (error: string) => void
  isLoading: boolean
}

export function ResumeForm({ onParseStart, onParseComplete, onParseError, isLoading }: ResumeFormProps) {
  const [resumeText, setResumeText] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!resumeText.trim()) {
      onParseError("Please enter resume text")
      return
    }

    onParseStart()

    try {
      const data = await parseResume(resumeText)
      onParseComplete(data)
    } catch (err) {
      onParseError("Failed to parse resume. Please try again.")
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="resume-text" className="block text-sm font-medium mb-2">
          Resume Text
        </label>
        <Textarea
          id="resume-text"
          placeholder="Paste your resume text here..."
          className="min-h-[400px]"
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isLoading}
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
        <Button type="button" variant="outline" disabled={true} className="gap-2">
          <Upload className="h-4 w-4" />
          Upload PDF (Coming Soon)
        </Button>
      </div>
    </form>
  )
}
