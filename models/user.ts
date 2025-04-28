import { model, Model, ObjectId, Schema } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  camada: ObjectId;
  role: string;
  level: string;
  cellphoneNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    camada: {
      type: Schema.Types.ObjectId,
      ref: "Camada",
      required: true,
    },
    cellphoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const User: Model<IUser> = model<IUser>("User", UserSchema);
export default User;
