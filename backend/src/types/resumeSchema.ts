import { z } from "zod";

export const ResumeSchema = z.object({
  candidate_name: z.string(),
  candidate_email: z.string(),
  candidate_phone: z.array(z.string()),
  candidate_address: z.string(),
  candidate_summary: z.string(),
  candidate_skills: z.array(z.string()),
  candidate_language: z.string(),
  candidate_spoken_languages: z.array(z.string()),
  candidate_honors_and_awards: z.array(z.string()),
  candidate_courses_and_certifications: z.array(z.string()),
  education_qualifications: z.array(
    z.object({
      start_date: z.string(),
      end_date: z.string(),
      degree_type: z.enum([
        "Doctorate/PhD or equivalent",
        "Master's Degree or equivalent",
        "Bachelor's Degree or equivalent",
        "Diploma or equivalent",
        "High School/Secondary School Diploma or equivalent",
        "Professional Certificate or equivalent",
        "N/A",
      ]),
      school_name: z.string(),
      specialization_subjects: z.string(),
    })
  ),
  projects: z.array(
    z.object({
      project_name: z.string(),
      project_description: z.string(),
      project_source_code: z.string(),
      project_url: z.string(),
      skills_used: z.array(z.string()),
    })
  ),
  positions: z.array(
    z.object({
      position_name: z.string(),
      company_name: z.string(),
      start_date: z.string(),
      end_date: z.string(),
      job_details: z.string(),
      skills: z.array(z.string()),
    })
  ),
});
