import { NextFunction, Request, Response } from "express";
import asyncErrorHandler from "../utils/asyncErrorHandler";
import httpResponse from "../utils/httpResponse";
import {
  EErrorStatusCode,
  EResponseStatusCode,
} from "../constants/application";
import httpError from "../utils/httpError";
import { resumeParser } from "../utils/resumeParser";

export default {
  self: asyncErrorHandler(async (req: Request, res: Response) => {
    httpResponse(req, res, EResponseStatusCode.OK, "Hello World", {
      name: "Mayank Tiwari",
    });
  }),

  text: asyncErrorHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { text } = req.body;
      if (!text) {
        return httpError(
          next,
          new Error("Text is required"),
          req,
          EErrorStatusCode.BAD_REQUEST
        );
      }

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
