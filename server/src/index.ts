import express from "express";
import { Request, Response, Application } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import collectRoutes from "./routes/collect"
import { StatusCodes } from "http-status-codes";
import rateLimit from "express-rate-limit";
import { ensureAuth } from "./middlewares/auth";

const app: Application = express();
app.use(express.json());

// configure dotenv
dotenv.config();

// configure cors
app.use(
  cors({
    origin: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.strimit.in",
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150, // Limit each IP to 150 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// Routes
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ status: "running" }); // test route
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", ensureAuth, userRoutes);
app.use("/api/v1/collect", ensureAuth, collectRoutes);

// read PORT from environment 
const PORT = process.env.PORT || 5000;

// start server on given PORT
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));