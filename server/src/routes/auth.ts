import express from "express"
import * as authController from "../controllers/auth"

const router = express.Router()

// @route   POST /signup
// @desc    Signup User
// @access  Public
router.post("/signup", authController.signup)

// @route   POST /login
// @desc    Login
// @access  Public
router.post("/login", authController.login)

export default router 