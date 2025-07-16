
import { connectToDatabase } from "../../../database/db";

import { NextRequest,NextResponse } from "next/server";

import User from "@/modules/users/model/userModel";



export async function POST(req: NextRequest){
  try{
      const {email,password} = await req.json();
      if(!email || !password){
        return NextResponse.json(
             {error:"unable to fetch maybe somethings wrong tho "},
             {status:500}
        );
      }
      await connectToDatabase();

      const existingUser = await User.findOne({email})  
      if(existingUser){
        return NextResponse.json(
             {error:"user already exists"},
             {status:500}
        );
      }

      await User.create({
        email,
        password
      });

      return NextResponse.json(
        {message:"user registered successfylly"},
        {status:200}
      );
  }catch(error){
       console.log("error while regustering of new user",error);
       return NextResponse.json(
        {error:"failed to register user"},
        {status:400}
       )
  }
}