import { QuestionType } from "@prisma/client";

export const errorMessages = {
  INVALID_QUESTION_ID: "Invalid question ID",
  QUESTION_NOT_FOUND: "Question not found",
  NO_ANSWERS_FOUND: "No answers found for this question",
  INVALID_YES_NO_ANSWER: "Invalid answer for YES_NO question. Must be 0 or 1.",
  INVALID_SCALE_ANSWER:
    "Invalid answer for SCALE question. Must be between 0 and 3.",
};

export const getErrorMessage = (key: keyof typeof errorMessages): string => {
  return errorMessages[key] || "An unexpected error occurred.";
};

export class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
