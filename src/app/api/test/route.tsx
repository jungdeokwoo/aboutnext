import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const result = { value: "hello" };

  return NextResponse.json(result);
}
