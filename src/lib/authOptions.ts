



import { connectToDatabase } from "@/database/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/modules/users/model/userModel";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("emial and password missing")
        }
        try {
          await connectToDatabase()
          const user = await User.findOne({ email: credentials.email })

          if (!user) {
            throw new Error("no user found out")
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          )

          if(!isValid){
            throw new Error("invalid password")
          }

          return {
            id : user._id.toString(),
            email: user.email 
          }

        } catch (error) {
          console.error("error is",error)
          throw Error
        }
      },
    }),
  ],
  callbacks:{
    async jwt({token,user}){
      if(user){
        token.id = user.id
      }
      return token;
    },
    async session({session,token,user}){
      if(session.user){
        session.user.id = token.id as string
      }
      return session;
    },   
  },
  pages:{
    signIn:'/login',
    error:'/login'
  },
  session:{
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
