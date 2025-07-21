import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // dummy response
  return NextResponse.json({ message: "Login route active" });
}
