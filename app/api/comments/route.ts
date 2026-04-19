import { NextRequest, NextResponse } from "next/server";
import { comments } from "@/lib/db";

export async function GET() {
  return NextResponse.json(comments);
}

// No CSRF protection, no auth, accepts arbitrary HTML in body.
export async function POST(req: NextRequest) {
  const { author, body } = await req.json();
  const id = comments.length + 1;
  comments.push({ id, author: author || "anon", body: body || "" });
  return NextResponse.json({ ok: true, id });
}
