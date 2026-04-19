"use client";
import { useState } from "react";

export default function Tools() {
  const [host, setHost] = useState("127.0.0.1");
  const [out, setOut] = useState("");

  async function run() {
    const res = await fetch(`/api/ping?host=${encodeURIComponent(host)}`);
    setOut(await res.text());
  }

  return (
    <>
      <h1>Network Tools</h1>
      <div className="card">
        <label>Host</label>
        <input value={host} onChange={(e) => setHost(e.target.value)} />
        <div style={{ marginTop: "0.5rem" }}><button onClick={run}>Ping</button></div>
        {out && <pre>{out}</pre>}
      </div>
      <p className="bug">The host value is passed to a shell. Try <code>127.0.0.1; whoami</code> (simulated).</p>
    </>
  );
}
