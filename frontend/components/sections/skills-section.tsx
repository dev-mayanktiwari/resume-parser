import { NotAvailable } from "@/components/ui/not-available"

interface SkillsSectionProps {
  skills: string[] | undefined
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) {
    return <NotAvailable message="No skills information available" />
  }

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}
