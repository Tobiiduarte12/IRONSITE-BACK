import { Request, Response } from "express";
import Camada, { ICamadas } from "../models/camadas";

export const createCamada = async (req: Request, res: Response) => {
  const camadaData: ICamadas = req.body;

  const { name, trainingFrequency, trainingObjective } = camadaData;

  const camada = new Camada(camadaData);

  await camada.save();

  res.json({
    msg: "camada creada",
    camada,
  });
};
