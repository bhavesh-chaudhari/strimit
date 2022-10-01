import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { Request, Response, Application } from "express";

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

// test route
app.get("/", (req: Request, res: Response) => {
  res.send("it works");
});

// read PORT from environment 
const PORT = process.env.PORT || 5000;

// start server on given PORT
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));