import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/MongoDb/dbConnect";

let url: string = "";

export async function GET(req: NextRequest) {
  return NextResponse.json(url);
}

export async function POST(req: NextRequest) {
  const data = req.formData();
  console.log(data, "<???");
  const url = "https://robohash.org/1?set=set${1}";
  return NextResponse.json("success");
}
