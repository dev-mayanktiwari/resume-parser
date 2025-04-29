import type { ResumeData } from "@/lib/types"
import { NotAvailable } from "@/components/ui/not-available"

interface SummarySectionProps {
  resume: ResumeData
}

export function SummarySection({ resume }: SummarySectionProps) {
  const hasHonors = resume.candidate_honors_and_awards && resume.candidate_honors_and_awards.length > 0
  const hasCertifications =
    resume.candidate_courses_and_certifications && resume.candidate_courses_and_certifications.length > 0
  const hasLanguages = resume.candidate_spoken_languages && resume.candidate_spoken_languages.length > 0

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <p className="text-sm">{resume.candidate_summary || <NotAvailable />}</p>
      </div>

      {hasHonors && (
        <div>
          <h4 className="font-semibold text-purple-600 mb-2">Honors & Awards</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            {resume.candidate_honors_and_awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>
        </div>
      )}

      {hasCertifications && (
        <div>
          <h4 className="font-semibold text-purple-600 mb-2">Certifications</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            {resume.candidate_courses_and_certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>
      )}

      {(resume.candidate_language || hasLanguages) && (
        <div>
          <h4 className="font-semibold text-purple-600 mb-2">Languages</h4>
          <p className="text-sm">
            Programming: {resume.candidate_language || <NotAvailable />}
            {hasLanguages && (
              <>
                <br />
                Spoken: {resume.candidate_spoken_languages.join(", ")}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  )
}
