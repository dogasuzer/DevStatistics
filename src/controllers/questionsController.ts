import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await prisma.question.findMany();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

export const getQuestionStatistics = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
}; //TODO: create the controller fnc

export const submitAnswer = async (req: Request, res: Response) => {
  try {
    const { answer, role } = req.body;
    const questionId = parseInt(req.params.id);

    if (!answer || !role) {
      res.status(400).json({ error: "form validation error" });
    }

    const question = await prisma.question.findUnique({
      where: {
        id: questionId,
      },
    });

    if (!question) {
      res.status(404).json({ error: "Question not found" });
    }

    const newAnswer = await prisma.answer.create({
      data: {
        value: answer,
        questionId,
        role,
      },
    });

    res.status(200).json(newAnswer);
    //calculate and send the average
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};
