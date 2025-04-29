import { Router } from "express";
import resumeController from "../controllers/resumeController";

const resumeRouter = Router();

resumeRouter.get("/self", resumeController.self);
resumeRouter.post("/text", resumeController.text);

export default resumeRouter;
