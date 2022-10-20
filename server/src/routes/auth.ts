import express from "express"
import * as authController from "../controllers/auth"
import { ensureAuth } from "../middlewares/auth"

const router = express.Router()

// @route   POST /signup
// @desc    Signup User
// @access  Public
router.post("/signup", authController.signup)

// @route   POST /login
// @desc    Login User
// @access  Public
router.post("/login", authController.login)

router.get("/protected", ensureAuth, (req, res)=>{
    res.send("You have the access")
})

// @route   GET /google
// @desc    Google Auth
// @access  Public
router.post("/google", authController.googleLogin)

router.post("/google", authController.refreshToken);

export default router 