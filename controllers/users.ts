import { Request, Response } from "express";
import User, { IUser } from "../models/user";

export const createUser = async (req: Request, res: Response) => {
  const userData: IUser = req.body;

  const user = new User(userData);

  await user.save();

  res.json({
    msg: "Usuario creado",
    user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const condicion = {
    role: "USER",
  };

  const users = await User.find(condicion);

  res.json({
    users,
  });
};

export const getUserByUsuario = async (req: Request, res: Response) => {
  const { usuario } = req.params;

  const user: IUser | null = await User.findOne({ usuario: usuario });

  res.json({
    user,
  });
};

export const getAdmins = async (req: Request, res: Response) => {
  const condicionAdmin = {
    role: "ADMIN",
  };

  const users = await User.find(condicionAdmin);

  res.json({
    users,
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const { usuario } = req.params;
  const { role, ...data } = req.body;

  const user = await User.findOneAndUpdate({ usuario: usuario }, data, {
    new: true,
  });

  res.json({
    msg: "Usuario actualizado",
    user,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { usuario } = req.params;

  const user = await User.findOneAndDelete({ usuario: usuario });

  res.json({
    msg: "Usuario eliminado",
    user,
  });
};
