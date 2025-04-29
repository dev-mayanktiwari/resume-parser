import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { AppConfig } from '../config';

const google = createGoogleGenerativeAI({
  apiKey: String(AppConfig.get('GEMINI_API_KEY')),
});

const aiModel = google("gemini-2.5-pro-exp-03-25")

export default aiModel;