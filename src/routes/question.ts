import { Router } from "express";
import {
  getAllQuestions,
  getQuestionStatistics,
  submitAnswer,
} from "../controllers/questionsController";

const questionRouter: Router = Router();
questionRouter.get("/", getAllQuestions);
questionRouter.post("/:id/answer", submitAnswer);
questionRouter.get("/:id/statistics", getQuestionStatistics);

export default questionRouter;
