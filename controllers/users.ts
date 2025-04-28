import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import Camada from "../models/camadas";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, username, email, cellphoneNumber, camada } = req.body;
    console.log(req.body);

    const camadaData = await Camada.findOne({ name: camada });

    const user = new User({
      username,
      name,
      email,
      cellphoneNumber,
      camada: camadaData?._id,
    });

    await user.save();

    res.json({
      msg: "Usuario creado",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Error al crear usuario",
      error,
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const condicion = {
    role: "USER",
  };

  const users = await User.find(condicion).populate("camada", "name");

  res.json({
    users,
  });
};

export const getUserByUsuario = async (req: Request, res: Response) => {
  const { username } = req.params;

  const user: IUser | null = await User.findOne({
    username: username,
  }).populate("camada", "name");

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
