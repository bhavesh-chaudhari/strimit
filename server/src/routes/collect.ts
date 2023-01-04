import express from "express";
import { prisma } from "../utils/prisma";
import { StatusCodes } from "http-status-codes";
import { ensureAuth } from "../middlewares/auth";

const router = express.Router();
const TrackType = prisma.track_type;

router.patch("/contact-info", async (req, res) => {
  try {
    const track = await TrackType.update({
      where: {
        type: "contact_visited",
      },
      data: {
        users: {
          connectOrCreate: {
            where: {
              userId_track_typeId: {
                track_typeId: 1,
                userId: Number(req.user.id),
              },
            },
            create: {
              userId: Number(req.user.id),
            },
          },
        },
      },
    });

    res.status(StatusCodes.OK).json({ message: "collected" });
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
});

export default router;
