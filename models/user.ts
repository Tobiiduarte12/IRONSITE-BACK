import { model, Model, Schema } from "mongoose";

export interface IUser {
  id: string;
  name: string;
  usuario: string;
  email: string;
  password: string;
  role: string;
  experience: string;
  level: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    usuario: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      role: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const User: Model<IUser> = model<IUser>("User", UserSchema);
export default User;
