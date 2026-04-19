"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<any>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch(`/api/login?u=${encodeURIComponent(username)}&p=${encodeURIComponent(password)}`);
    const data = await res.json();
    if (data.ok && data.token) {
      document.cookie = `session=${data.token}; path=/`;
      setUser(data.user);
    } else {
      setError("The credentials you entered are incorrect.");
    }
  }

  if (user) {
    return (
      <>
        <h1>Welcome back, {user.username}.</h1>
        <div className="card">
          <p>You are now signed in to International Bank Online Banking.</p>
          <table>
            <tbody>
              <tr><th>Account holder</th><td>{user.username}</td></tr>
              <tr><th>Registered email</th><td>{user.email}</td></tr>
              <tr><th>Account type</th><td>{user.role === "admin" ? "Institutional" : "Personal"}</td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: "1.25rem" }}>
            <a href={`/profile/${user.id}`}>View account details →</a>
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="locked-page">
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <div className="crest" style={{ width: 56, height: 56, fontSize: "1.3rem", margin: "0 auto 1rem" }}>IB</div>
        <h1 style={{ margin: 0 }}>Online Banking</h1>
        <p style={{ color: "#5a6778", fontStyle: "italic", margin: "0.5rem 0 0" }}>
          Please sign in to access your accounts.
        </p>
      </div>
      <div className="form-wrap">
        <form onSubmit={submit}>
          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" style={{ width: "100%" }} />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" style={{ width: "100%" }} />
          <div style={{ marginTop: "1.5rem" }}>
            <button type="submit" style={{ width: "100%", padding: "0.75rem" }}>Sign In</button>
          </div>
          {error && <p style={{ color: "#9b1c1c", marginTop: "1rem", fontSize: "0.9rem", textAlign: "center" }}>{error}</p>}
        </form>
        <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid #e6e0d0", textAlign: "center", fontSize: "0.85rem" }}>
          <a href="#">Forgot your username?</a> &nbsp;·&nbsp; <a href="#">Reset password</a>
        </div>
      </div>
      <p style={{ textAlign: "center", color: "#5a6778", fontSize: "0.85rem", marginTop: "1.5rem" }}>
        Not a client yet? <a href="#">Schedule a consultation</a>
      </p>
    </div>
  );
}
