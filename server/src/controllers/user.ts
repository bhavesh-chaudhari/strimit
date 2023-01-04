import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../utils/prisma";

const User = prisma.user;

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    const { password, updatedAt, createdAt, ...modifiedUser } = user!;

    res.status(StatusCodes.OK).json({ ...modifiedUser });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.update({
      data: req.body,
      where: {
        id: Number(req.params.id),
      },
    });

    const { password, updatedAt, ...userWithoutPassword } = user;

    res.status(StatusCodes.OK).json({ ...userWithoutPassword });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};