
import mongoose from "mongoose"

export interface User  {
  email: string,
  password: string,
  _id?:mongoose.Types.ObjectId,
  createdAt?:Date,
  updatedAt?:Date,
}

