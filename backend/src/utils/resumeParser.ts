import { generateObject } from "ai";
import aiModel from "../ai/model";
import { ResumeSchema } from "../types/resumeSchema";
import { resumeParserPrompt } from "../prompts";

export const resumeParser = async (resumeData: string) => {
  const { object } = await generateObject({
    model: aiModel,
    schemaName: "ResumeSchema",
    schemaDescription: "Schema for parsing the resume.",
    schema: ResumeSchema,
    messages: [
      {
        role: "system",
        content: resumeParserPrompt,
      },
      {
        role: "user",
        content: "My resume data is " + resumeData,
      },
    ],
  });

  return object;
};
