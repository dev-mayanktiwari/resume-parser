import type { Project } from "@/lib/types"
import { NotAvailable } from "@/components/ui/not-available"

interface ProjectsSectionProps {
  projects: Project[] | undefined
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) {
    return <NotAvailable message="No projects information available" />
  }

  return (
    <div className="space-y-4">
      {projects.map((project, i) => (
        <div key={i} className="border-l-2 border-green-500 pl-4 pb-4">
          <h4 className="font-semibold">{project.project_name || <NotAvailable />}</h4>
          <p className="text-sm mt-1">{project.project_description || <NotAvailable />}</p>

          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
            )}
            {project.project_source_code && (
              <a
                href={project.project_source_code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Source Code
              </a>
            )}
          </div>

          {project.skills_used && project.skills_used.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {project.skills_used.map((skill, j) => (
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
