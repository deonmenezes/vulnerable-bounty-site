import { NextResponse } from "next/server";
import { SECRETS } from "@/lib/db";

// Intentionally exposed config endpoint.
export async function GET() {
  return NextResponse.json(SECRETS);
}
