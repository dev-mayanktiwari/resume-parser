import type { ResumeData } from "@/lib/types"
import { NotAvailable } from "@/components/ui/not-available"

interface PersonalInfoSectionProps {
  resume: ResumeData
}

export function PersonalInfoSection({ resume }: PersonalInfoSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-purple-600">{resume.candidate_name || <NotAvailable />}</h3>
      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
        <p>{resume.candidate_email || <NotAvailable />}</p>
        <p>
          {resume.candidate_phone && resume.candidate_phone.length > 0 ? (
            resume.candidate_phone.join(" | ")
          ) : (
            <NotAvailable />
          )}
        </p>
        <p>{resume.candidate_address || <NotAvailable />}</p>
      </div>
    </div>
  )
}
