import { z } from "zod";

export const ResumeSchema = z.object({
  candidate_name: z.string().optional().nullable(),
  candidate_email: z.string().optional().nullable(),
  candidate_phone: z.array(z.string()).optional().nullable(),
  candidate_address: z.string().optional().nullable(),
  candidate_summary: z.string().optional().nullable(),
  candidate_skills: z.array(z.string()).optional().nullable(),
  candidate_language: z.string().optional().nullable(),
  candidate_spoken_languages: z.array(z.string()).optional().nullable(),
  candidate_honors_and_awards: z.array(z.string()).optional().nullable(),
  candidate_courses_and_certifications: z
    .array(z.string())
    .optional()
    .nullable(),
  education_qualifications: z
    .array(
      z.object({
        start_date: z.string().optional().nullable(),
        end_date: z.string().optional().nullable(),
        degree_type: z.string().optional().nullable(),
        school_name: z.string().optional().nullable(),
        specialization_subjects: z.string().optional().nullable(),
      })
    )
    .optional()
    .nullable(),
  projects: z
    .array(
      z.object({
        project_name: z.string().optional().nullable(),
        project_description: z.string().optional().nullable(),
        project_source_code: z.string().optional().nullable(),
        project_url: z.string().optional().nullable(),
        skills_used: z.array(z.string()).optional().nullable(),
      })
    )
    .optional()
    .nullable(),
  positions: z
    .array(
      z.object({
        position_name: z.string().optional().nullable(),
        company_name: z.string().optional().nullable(),
        start_date: z.string().optional().nullable(),
        end_date: z.string().optional().nullable(),
        job_details: z.string().optional().nullable(),
        skills: z.array(z.string()).optional().nullable(),
      })
    )
    .optional()
    .nullable(),
});

export const GetResumeTextSchema = z.object({
  text: z.string().min(100, "Resume text must be at least 100 characters long"),
});

export type TGetResumeTextSchema = z.infer<typeof GetResumeTextSchema>;
