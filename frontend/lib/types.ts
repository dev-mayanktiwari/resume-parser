import type { z } from "zod"
import type { ResumeSchema } from "./schema"

export type ResumeData = z.infer<typeof ResumeSchema>

export type Education = {
  start_date: string
  end_date: string
  degree_type: string
  school_name: string
  specialization_subjects: string
}

export type Project = {
  project_name: string
  project_description: string
  project_source_code: string
  project_url: string
  skills_used: string[]
}

export type Position = {
  position_name: string
  company_name: string
  start_date: string
  end_date: string
  job_details: string
  skills: string[]
}


