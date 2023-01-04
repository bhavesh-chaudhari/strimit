import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { prisma } from "../utils/prisma";

export const ensureOwnership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "no token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    const { id, role, email } = decoded as any;

    console.log(id, role, email)

    if (Number(id) === Number(req.params.id) || role === "admin") {
      return next();
    } else {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "Access Denied" });
    }
  } catch (error) {
    return res.status(400).json({ error: "Not authorized to access this route" });
  }
};
