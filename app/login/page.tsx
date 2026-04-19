"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<string>("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/login?u=${encodeURIComponent(username)}&p=${encodeURIComponent(password)}`);
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
    if (data.token) document.cookie = `session=${data.token}; path=/`;
  }

  return (
    <>
      <h1>Login</h1>
      <div className="card">
        <form onSubmit={submit}>
          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div style={{ marginTop: "1rem" }}>
            <button type="submit">Sign in</button>
          </div>
        </form>
        {result && <pre>{result}</pre>}
      </div>
      <p className="bug">Hint: credentials are checked with a string-concatenated query. The session cookie is not httpOnly.</p>
    </>
  );
}
