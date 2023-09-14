import { connectDB } from "@/lib/MongoDb/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const client = await connectDB;
  const db = client.db("test");
  const result = await db.collection("nextApi").find().toArray();

  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body, "<<?");
  if (!body.name || !body.username || !body.email) {
    return NextResponse.json({ error: "data is Empty" }, { status: 500 });
  } else if (body.length > 5) {
    return NextResponse.json({ error: "data is too many" }, { status: 500 });
  }
  const client = await connectDB;
  const db = client.db("test");
  await db.collection("nextApi").insertOne({
    name: body.name,
    email: body.email,
    username: body.username,
  });
  return NextResponse.json("complete");
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  console.log(body, "?");
  const client = await connectDB;
  const db = client.db("test");
  await db.collection("nextApi").deleteOne({ _id: new ObjectId(body._id) });

  return NextResponse.json("delete");
}
