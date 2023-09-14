import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/MongoDb/dbConnect";

export async function GET(req: NextRequest) {
  const client = await connectDB;
  const db = client.db("test");
  const result = await db.collection("nextApi").find().toArray();

  return NextResponse.json(result);
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const client = await connectDB;
  const db = client.db("test");
  await db.collection("nextApi").deleteOne({ name: body.name });

  return NextResponse.json("delete");
}
