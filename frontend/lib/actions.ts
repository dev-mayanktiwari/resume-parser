"use server";

import type { ResumeData } from "./types";
import axios from "axios";
// This is a mock implementation - replace with your actual API call

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";
export async function parseResume(resumeText: string): Promise<ResumeData> {
  const res = await axios.post(`${apiUrl}/parse/text`, {
    text: resumeText,
  });

  return res.data.data;
  // Return mock data that matches the schema
  // return {
  //   candidate_name: "John Doe",
  //   candidate_email: "john.doe@example.com",
  //   candidate_phone: ["+1 (555) 123-4567"],
  //   candidate_address: "San Francisco, CA",
  //   candidate_summary:
  //     "Experienced software engineer with 5+ years of experience in full-stack development. Passionate about creating scalable web applications and solving complex problems.",
  //   candidate_skills: [
  //     "JavaScript",
  //     "TypeScript",
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "AWS",
  //     "Docker",
  //     "GraphQL",
  //     "REST API",
  //     "Git",
  //     "CI/CD",
  //     "Agile",
  //   ],
  //   candidate_language: "JavaScript, TypeScript, Python",
  //   candidate_spoken_languages: ["English (Native)", "Spanish (Intermediate)"],
  //   candidate_honors_and_awards: [
  //     "Best Developer Award 2022",
  //     "Hackathon Winner 2021",
  //   ],
  //   candidate_courses_and_certifications: [
  //     "AWS Certified Developer",
  //     "MongoDB Certified Developer",
  //     "React Advanced Patterns",
  //   ],
  //   education_qualifications: [
  //     {
  //       start_date: "2015",
  //       end_date: "2019",
  //       degree_type: "Bachelor's Degree or equivalent",
  //       school_name: "University of California, Berkeley",
  //       specialization_subjects: "Computer Science",
  //     },
  //   ],
  //   projects: [
  //     {
  //       project_name: "E-commerce Platform",
  //       project_description:
  //         "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented features like user authentication, product catalog, shopping cart, and payment processing.",
  //       project_source_code: "https://github.com/johndoe/ecommerce",
  //       project_url: "https://ecommerce-demo.example.com",
  //       skills_used: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
  //     },
  //     {
  //       project_name: "Task Management App",
  //       project_description:
  //         "Developed a task management application with drag-and-drop functionality, user authentication, and real-time updates.",
  //       project_source_code: "https://github.com/johndoe/taskmanager",
  //       project_url: "https://taskmanager-demo.example.com",
  //       skills_used: ["React", "Firebase", "Material UI", "Redux"],
  //     },
  //   ],
  //   positions: [
  //     {
  //       position_name: "Senior Software Engineer",
  //       company_name: "Tech Innovations Inc.",
  //       start_date: "Jan 2021",
  //       end_date: "Present",
  //       job_details:
  //         "Led a team of 5 developers in building and maintaining a SaaS platform. Implemented CI/CD pipelines, improved application performance by 40%, and reduced bug reports by 60%.",
  //       skills: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
  //     },
  //     {
  //       position_name: "Software Engineer",
  //       company_name: "WebDev Solutions",
  //       start_date: "Jun 2019",
  //       end_date: "Dec 2020",
  //       job_details:
  //         "Developed and maintained multiple client websites and web applications. Collaborated with designers and product managers to deliver high-quality products on time.",
  //       skills: ["JavaScript", "React", "Express", "MongoDB"],
  //     },
  //   ],
  // };
}
