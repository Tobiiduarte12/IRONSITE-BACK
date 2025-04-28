import { Model, model, Schema } from "mongoose";

export interface ICamadas {
  name: number;
  trainingFrequency: string;
  trainingObjective: string;
  level: string;
}

const CamadaSchema = new Schema<ICamadas>({
  name: {
    type: Number,
    required: true,
    unique: true,
  },
  trainingFrequency: {
    type: String,
    required: false,
  },
  trainingObjective: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
});

const Camada: Model<ICamadas> = model<ICamadas>("Camada", CamadaSchema);

export default Camada;
