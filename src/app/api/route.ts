import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/MongoDb/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req: NextRequest) {
  const client = await connectDB;
  const db = client.db("test");
  const result = await db.collection("nextApi").find().toArray();

  return NextResponse.json(result);
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  console.log(body, "?");
  const client = await connectDB;
  const db = client.db("test");
  await db.collection("nextApi").deleteOne({ _id: new ObjectId(body._id) });

  return NextResponse.json("delete");
}
