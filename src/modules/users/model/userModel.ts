
import mongoose from "mongoose";
import userSchema from "../schema/userSchema";
import { IUser } from "../user.types";

const User = mongoose.models?.User || mongoose.model<IUser>("User",userSchema)

export default User;