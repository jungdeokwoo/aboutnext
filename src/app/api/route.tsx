import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const result = { value: "main" };

  return NextResponse.json(result);
}
