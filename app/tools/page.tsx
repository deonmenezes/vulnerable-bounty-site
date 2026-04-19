"use client";
import { useState } from "react";

export default function Tools() {
  const [host, setHost] = useState("online.internationalbank.example");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const res = await fetch(`/api/ping?host=${encodeURIComponent(host)}`);
    setOut(await res.text());
    setLoading(false);
  }

  return (
    <>
      <h1>Client Support</h1>
      <p style={{ color: "#5a6778", fontStyle: "italic", maxWidth: 680 }}>
        Our support team is available around the clock to assist with your banking needs.
      </p>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Service Reachability Check</h3>
        <p style={{ color: "#4a5568", fontSize: "0.95rem" }}>
          Verify that International Bank's online services are reachable from your network.
        </p>
        <label>Hostname</label>
        <input value={host} onChange={(e) => setHost(e.target.value)} style={{ width: "70%", marginRight: "0.5rem" }} />
        <button onClick={run} disabled={loading}>{loading ? "Checking…" : "Check"}</button>
        {out && <pre style={{ marginTop: "1rem" }}>{out}</pre>}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Speak with a Representative</h3>
        <table>
          <tbody>
            <tr><th>Personal Banking</th><td>1-800-INTL-BNK (available 24/7)</td></tr>
            <tr><th>Private Wealth</th><td>1-800-INTL-PWT (Mon–Fri, 8am–8pm ET)</td></tr>
            <tr><th>Commercial Clients</th><td>1-800-INTL-COM (Mon–Fri, 8am–6pm ET)</td></tr>
            <tr><th>Email</th><td><a href="mailto:support@internationalbank.example">support@internationalbank.example</a></td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
