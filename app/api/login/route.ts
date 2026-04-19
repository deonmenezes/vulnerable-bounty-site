import { NextRequest, NextResponse } from "next/server";
import { users } from "@/lib/db";

// Intentionally vulnerable: SQL-injection-style string eval against an array.
// Patterns like `' OR '1'='1` match because we `eval` a constructed expression.
export async function GET(req: NextRequest) {
  const u = req.nextUrl.searchParams.get("u") ?? "";
  const p = req.nextUrl.searchParams.get("p") ?? "";

  try {
    const expr = `users.find(x => x.username == '${u}' && x.password == '${p}')`;
    // eslint-disable-next-line no-eval
    const match = eval(expr);
    if (match) {
      // "JWT" with alg:none — base64(header).base64(payload).
      const header = Buffer.from(JSON.stringify({ alg: "none", typ: "JWT" })).toString("base64url");
      const payload = Buffer.from(JSON.stringify({ sub: match.id, role: match.role })).toString("base64url");
      const token = `${header}.${payload}.`;
      return NextResponse.json({ ok: true, user: match, token });
    }
    return NextResponse.json({ ok: false, reason: "bad credentials", tried: { u, p } }, { status: 401 });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message, stack: err.stack }, { status: 500 });
  }
}
