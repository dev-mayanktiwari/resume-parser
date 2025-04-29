import dotenv from "dotenv";
dotenv.config();

type ConfigKeys =
  | "PORT"
  | "DATABASE_URL"
  | "SERVER_URL"
  | "ENV"
  | "GEMINI_API_KEY";

const _config: Record<ConfigKeys, string | undefined> = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  SERVER_URL: process.env.SERVER_URL,
  ENV: process.env.ENV,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};

export const AppConfig = {
  get(key: ConfigKeys): string | number {
    const value = _config[key];
    if (value === undefined) {
      process.exit(1);
    }

    if (key === "PORT") {
      return Number(value);
    }

    return value;
  },
};
