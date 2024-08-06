import { Request, Response } from "express";
import { login, logout } from "../services/authService";

export const loginController = (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const result = login(username, password);
    res.json(result);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(401).json({ message: errorMessage });
  }
};

export const logoutController = (_req: Request, res: Response) => {
  const result = logout();
  res.json(result);
};
