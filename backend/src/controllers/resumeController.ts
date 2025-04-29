import { NextFunction, Request, Response } from "express";
import asyncErrorHandler from "../utils/asyncErrorHandler";
import httpResponse from "../utils/httpResponse";
import {
  EErrorStatusCode,
  EResponseStatusCode,
} from "../constants/application";
import httpError from "../utils/httpError";
import { resumeParser } from "../utils/resumeParser";
import { GetResumeTextSchema } from "../types/resumeSchema";

export default {
  self: asyncErrorHandler(async (req: Request, res: Response) => {
    httpResponse(req, res, EResponseStatusCode.OK, "Hello World", {
      name: "Mayank Tiwari",
    });
  }),

  text: asyncErrorHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const safeparese = GetResumeTextSchema.safeParse(req.body);

      if (!safeparese.success) {
        return httpError(
          next,
          new Error(safeparese.error.message),
          req,
          EErrorStatusCode.BAD_REQUEST
        );
      }

      const text = safeparese.data.text;

      const extractedData = await resumeParser(text);

      if (!extractedData) {
        return httpError(
          next,
          new Error("Failed to extract data"),
          req,
          EErrorStatusCode.INTERNAL_SERVER_ERROR
        );
      }

      return httpResponse(
        req,
        res,
        EResponseStatusCode.OK,
        "Resume data extracted successfully",
        extractedData
      );
    }
  ),
};
