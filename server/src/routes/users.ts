import express from "express";
import * as usersController from "../controllers/user";
import { ensureOwnership } from "../middlewares/esnureOwnership";

const router = express.Router();

router.get("/:id", ensureOwnership, usersController.getUser);
router.patch("/:id", ensureOwnership, usersController.updateUser);

export default router;
