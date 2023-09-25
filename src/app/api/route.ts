import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/MongoDb/dbConnect";

export async function GET(req: NextRequest) {
  const client = await connectDB;
  const db = client.db("test");
  const result = await db.collection("nextImg").find().toArray();

  return NextResponse.json(result);
}
