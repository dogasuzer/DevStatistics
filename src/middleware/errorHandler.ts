import { Request, Response, NextFunction } from "express";
import { CustomError } from "../helpers/error";

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: "Internal server error." });
};
