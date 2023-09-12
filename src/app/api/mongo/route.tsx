import { connectDB } from "@/lib/MongoDb/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await connectDB;
  const db = client.db("test");
  const result = await db.collection("nextApi").find().toArray();

  return NextResponse.json(result);
}
