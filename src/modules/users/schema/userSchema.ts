import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../user.types";

const userSchema = new mongoose.Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);


userSchema.pre("save", async function (next) {
  const user = this as IUser & mongoose.Document;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

export default userSchema;
