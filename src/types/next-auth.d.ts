
// src/types/next-auth.d.ts

// eslint-disable-next-line @typescript-eslint/no-unused-vars


 import NextAuth,{DefaultSession} from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      role?: string;
    } & DefaultSession["user"] 
  }
}
