import { Model, model, Schema } from "mongoose";

export interface IExperience {
  name: string;
  trainingFrequency: string;
  targetUser?: string;
}

const ExperienceSchema = new Schema<IExperience>({
  name: {
    type: String,
    required: true,
  },
  trainingFrequency: {
    type: String,
    required: true,
  },
  targetUser: {
    type: String,
    required: false,
    
  },
});

const Experience: Model<IExperience> = model<IExperience>(
  "Experience",
  ExperienceSchema
);

export default Experience;
