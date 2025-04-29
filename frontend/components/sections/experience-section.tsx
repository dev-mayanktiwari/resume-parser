import type { Position } from "@/lib/types"
import { NotAvailable } from "@/components/ui/not-available"

interface ExperienceSectionProps {
  positions: Position[] | undefined
}

export function ExperienceSection({ positions }: ExperienceSectionProps) {
  if (!positions || positions.length === 0) {
    return <NotAvailable message="No experience information available" />
  }

  return (
    <div className="space-y-4">
      {positions.map((position, i) => (
        <div key={i} className="border-l-2 border-purple-500 pl-4 pb-4">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <h4 className="font-semibold">{position.position_name || <NotAvailable />}</h4>
            <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
              {position.start_date || "N/A"} - {position.end_date || "N/A"}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{position.company_name || <NotAvailable />}</p>
          <p className="text-sm mt-2">{position.job_details || <NotAvailable />}</p>
          {position.skills && position.skills.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {position.skills.map((skill, j) => (
                <span key={j} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
