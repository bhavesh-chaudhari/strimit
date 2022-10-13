import express from "express";
import { Request, Response, Application } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import authRoutes from "./routes/auth"
import { StatusCodes } from "http-status-codes";

const app: Application = express();
app.use(express.json());

// configure dotenv
dotenv.config();

// configure cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ status: "ok" }); // test route
});
app.use("/api/v1/auth", authRoutes)


// read PORT from environment 
const PORT = process.env.PORT || 5000;

// start server on given PORT
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));