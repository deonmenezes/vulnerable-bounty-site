import { NextResponse } from "next/server";
import { users } from "@/lib/db";

// Intentionally open: returns full user records including plaintext passwords, SSNs, API keys.
export async function GET() {
  return NextResponse.json({ count: users.length, users });
}
