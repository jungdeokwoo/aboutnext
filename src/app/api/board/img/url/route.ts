import { connectDB } from "@/lib/MongoDb/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const client = await connectDB;
  const db = client.db("test");
  const result = await db.collection("nextImg").find().toArray();

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const url = await req.text();

  const client = await connectDB;
  const db = client.db("test");
  await db.collection("nextImg").insertOne({ url });

  return NextResponse.json("postComplete");
}

export async function DELETE(req: NextRequest) {
  const url = await req.text();

  const client = await connectDB;
  const db = client.db("test");
  await db.collection("nextImg").deleteOne({ url: url });

  return NextResponse.json("delete Success");
}
