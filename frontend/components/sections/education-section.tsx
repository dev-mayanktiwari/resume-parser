import type { Education } from "@/lib/types"
import { NotAvailable } from "@/components/ui/not-available"

interface EducationSectionProps {
  educations: Education[] | undefined
}

export function EducationSection({ educations }: EducationSectionProps) {
  if (!educations || educations.length === 0) {
    return <NotAvailable message="No education information available" />
  }

  return (
    <div className="space-y-4">
      {educations.map((edu, i) => (
        <div key={i} className="border-l-2 border-blue-500 pl-4 pb-4">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <h4 className="font-semibold">{edu.school_name || <NotAvailable />}</h4>
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              {edu.start_date || "N/A"} - {edu.end_date || "N/A"}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{edu.degree_type || <NotAvailable />}</p>
          <p className="text-sm mt-1">{edu.specialization_subjects || <NotAvailable />}</p>
        </div>
      ))}
    </div>
  )
}
