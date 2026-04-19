import { users } from "@/lib/db";

export default function Profile({ params }: { params: { id: string } }) {
  const user = users.find((u) => u.id === Number(params.id));
  if (!user) return <><h1>Account not found</h1><p style={{ color: "#5a6778" }}>We could not locate the account you requested.</p></>;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="avatar" style={{ width: 64, height: 64, fontSize: "1.5rem" }}>
          {user.username[0].toUpperCase()}
        </div>
        <div>
          <h1 style={{ margin: 0 }}>{user.username}</h1>
          <div style={{ color: "#5a6778", fontSize: "0.95rem", fontFamily: "Helvetica Neue, Arial, sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            {user.role === "admin" ? "Institutional Account" : "Personal Account"}
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Client Profile</h3>
        <table>
          <tbody>
            <tr><th>Registered email</th><td>{user.email}</td></tr>
            <tr><th>Tax identifier (SSN)</th><td>{user.ssn}</td></tr>
            <tr><th>Account type</th><td>{user.role === "admin" ? "Institutional" : "Personal"}</td></tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Developer &amp; API Access</h3>
        <p style={{ color: "#4a5568", fontSize: "0.95rem" }}>
          API credentials for third-party integrations with authorized financial software.
        </p>
        <table>
          <tbody>
            <tr><th>API key</th><td><code>{user.apiKey}</code></td></tr>
            <tr><th>Password hash</th><td><code>{user.password}</code></td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
