import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalInfoSection } from "@/components/sections/personal-info-section";
import { SummarySection } from "@/components/sections/summary-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import type { ResumeData } from "@/lib/types";

interface ResumeDisplayProps {
  resume: ResumeData;
}

export function ResumeDisplay({ resume }: ResumeDisplayProps) {
  return (
    <div className="space-y-6">
      <PersonalInfoSection resume={resume} />

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <SummarySection resume={resume} />
        </TabsContent>

        <TabsContent value="experience">
          <ExperienceSection positions={resume.positions} />
        </TabsContent>

        <TabsContent value="education">
          <EducationSection educations={resume.education_qualifications} />
        </TabsContent>

        <TabsContent value="skills">
          <SkillsSection skills={resume.candidate_skills} />
        </TabsContent>

        <TabsContent value="projects">
          <ProjectsSection projects={resume.projects} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
