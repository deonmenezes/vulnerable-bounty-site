# BuggyBank — Intentionally Vulnerable Demo

⚠️ **WARNING:** This application is deliberately insecure. It is built for security
education and bug bounty practice. Do **not** deploy alongside real data, real users,
or real infrastructure. Do **not** reuse any code from it in production.

## What's baked in

| Endpoint | Flaw |
|---|---|
| `/login` + `/api/login` | Injection-style auth bypass (`' OR '1'=='1`), `alg:none` JWT, plaintext passwords, non-HttpOnly cookie |
| `/search` | Reflected XSS (`dangerouslySetInnerHTML`) |
| `/comments` | Stored XSS, no CSRF tokens, no auth |
| `/profile/[id]` | IDOR — any user's data by ID |
| `/api/users` | Full PII + credentials dump |
| `/api/secrets` | Exposed config/secrets endpoint |
| `/api/ping` | Simulated command injection |

Default response headers include `Access-Control-Allow-Origin: *` and permissive `X-Frame-Options` — misconfigurations on purpose.

## Bounty

Up to **$2,000 USD** per qualifying report. See `/bounty` and `/.well-known/security.txt`.

Contact: **deonmenezes04@gmail.com**

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

Push to GitHub, then import the repo on [vercel.com/new](https://vercel.com/new). No env vars required.

## Safety

This repo is marked as intentionally vulnerable. Host only on an isolated domain,
and never connect it to any real database, real auth provider, or real user data.
