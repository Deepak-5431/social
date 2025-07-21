import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";
import { connectToDatabase } from "@/database/db"; 

const handler = async (req: Request) => {
  try {
    await connectToDatabase(); 
  } catch (err) {
    console.error(" DB connection failed in [...nextauth]", err);
    throw new Error("Failed to connect to DB");
  }

  return NextAuth(authOptions)(req);
};

export { handler as GET, handler as POST };
