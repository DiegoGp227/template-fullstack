import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/appError";
import { env } from "../config/env";
import { asyncHandler } from "./asyncHandler";

export const authMiddleware = asyncHandler(async (req: Request, _res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError("No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as { id: string; email: string };
    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch {
    throw new UnauthorizedError("Invalid or expired token");
  }
});
