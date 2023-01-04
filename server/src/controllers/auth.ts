import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../utils/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
import { oAuth2Client } from "../utils/oauthClient";
import { UserRefreshClient } from "google-auth-library";

const User = prisma.user;

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const signup = async (req: Request, res: Response) => {
  try {
    const user = await User.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await User.create({
      data: { ...req.body, password: hashedPassword },
    });

    const { password, createdAt, updatedAt, ...userWithoutPassword } = newUser;

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: userWithoutPassword.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "30d" }
    );

    res.status(StatusCodes.OK).json({ ...userWithoutPassword, token });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error);
    console.log(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // console.log(req.body);

    if (!email || !password) {
      return res
        .status(401)
        .json({ error: "Please provide email and password" });
    }

    const user = await User.findUnique({
      where: {
        email: email,
      },
    });

    // console.log(user)
    
    if (!user || !user.password) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password as string
    );

    if (!isPasswordCorrect || user.password === null) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "30d" }
    );

    const key = "password";
    delete (user as any)[key];

    const {createdAt, updatedAt, ...userToSend} = user

    res.status(200).json({ ...userToSend, token });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens

    // Authenticating the user involves obtaining an ID token and validating it.
    const user = jwtDecode((tokens as any).id_token) as any;

    const alreadyRegisteredUser = await User.findUnique({
      where: {
        email: user.email,
      },
    });

    if (alreadyRegisteredUser) {
      const token = jwt.sign(
        {
          id: alreadyRegisteredUser.id,
          email: alreadyRegisteredUser.email,
          role: alreadyRegisteredUser.role,
        },
        process.env.JWT_SECRET as string,
        { expiresIn: "30d" }
      );

      return res.status(200).json({
        email: alreadyRegisteredUser.email,
        id: alreadyRegisteredUser.id,
        role: alreadyRegisteredUser.role,
        token: token,
      });
    }

    const newUser = await User.create({
      data: {
        email: user.email,
        role: req.body.role ? req.body.role : undefined,
      },
    });

    // console.log(newUser)

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "30d" }
    );

    return res.status(200).json({
      token: token,
      email: newUser.email,
      id: newUser.id,
      role: newUser.role,
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

// export const refreshToken = (req: Request, res: Response) => {
//   try {
//   } catch (error) {}
// };

export const checkAuth = (req: Request, res: Response) => {
  try {
    // console.log(req.user);
    res.status(200).json({ role: req.user.role });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
