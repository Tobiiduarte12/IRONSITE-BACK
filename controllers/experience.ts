import { Request, Response } from "express";
import Experience, { IExperience } from "../models/experience";

export const createExperience = async (req: Request, res: Response) => {
  const experienceData: IExperience = req.body;

  const { name, trainingFrequency, targetUser } = experienceData;

  const experience = new Experience(experienceData);

  await experience.save();

  res.json({
    msg: "Usuario con experiencia creada",
    experience,
  });
};
