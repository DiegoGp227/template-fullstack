import { Request, Response, NextFunction } from "express";
import { AppError, InternalServerError } from "../errors/appError";
import { logger } from "../utils/logger";

export const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  logger.error("Unhandled error", error);

  if (error instanceof AppError) {
    res.status(error.statusCode).json(error.toJSON());
    return;
  }

  const internalError = new InternalServerError("Internal server error");
  res.status(internalError.statusCode).json(internalError.toJSON());
};
