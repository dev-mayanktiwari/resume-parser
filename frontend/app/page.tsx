"use client"

import { useState } from "react"
import { ResumeForm } from "@/components/resume-form"
import { ResumeDisplay } from "@/components/resume-display"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import type { ResumeData } from "@/lib/types"

export default function ResumeParsePage() {
  const [parsedResume, setParsedResume] = useState<ResumeData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Resume Parser
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Paste your resume text below and get a structured, formatted version
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="h-full">
            <CardContent className="p-6">
              <ResumeForm
                onParseStart={() => setIsLoading(true)}
                onParseComplete={(data) => {
                  setParsedResume(data)
                  setIsLoading(false)
                }}
                onParseError={(errorMsg) => {
                  setError(errorMsg)
                  setIsLoading(false)
                }}
                isLoading={isLoading}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardContent className="p-6">
              {parsedResume ? (
                <div className="space-y-6" id="resume-content">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-purple-600">Parsed Resume</h2>
                  </div>

                  <ResumeDisplay resume={parsedResume} />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-gray-500">
                  <div className="text-center">
                    <p className="mb-2">No resume data yet</p>
                    <p className="text-sm">Paste your resume text and click "Parse Resume"</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm py-4 border-t">
        <p>Made with ❤️ by Mayank</p>
      </footer>
    </main>
  )
}
