export default function Bounty() {
  return (
    <>
      <h1>Security &amp; Responsible Disclosure</h1>
      <p style={{ color: "#4a5568", fontSize: "1.05rem", maxWidth: 720 }}>
        International Bank takes the security of our clients' data and assets with the utmost
        seriousness. We welcome reports from independent security researchers who help us
        identify and remediate vulnerabilities in our systems.
      </p>
      <p style={{ color: "#4a5568", maxWidth: 720 }}>
        Researchers who act in good faith and comply with our disclosure policy may receive a
        reward of up to <strong>$2,000 USD</strong> per qualifying report.
      </p>

      <h2>Scope</h2>
      <div className="card">
        <ul>
          <li>Our public web properties, including all <code>/api/*</code> endpoints.</li>
          <li>Classes of issue we care about: authentication bypass, authorization flaws, injection, cross-site scripting, server-side request forgery, insecure deserialization, misconfiguration, and sensitive information disclosure.</li>
        </ul>
      </div>

      <h2>Out of Scope</h2>
      <div className="card">
        <ul>
          <li>Denial-of-service and volumetric attacks.</li>
          <li>Social engineering, physical attacks, and attacks against our vendors or hosting providers.</li>
          <li>Automated scanner output submitted without a working proof-of-concept.</li>
          <li>Issues that require a compromised device, out-of-date browser, or man-in-the-middle position on the victim's local network.</li>
        </ul>
      </div>

      <h2>Reward Schedule</h2>
      <div className="card">
        <table>
          <thead>
            <tr><th>Severity</th><th>Example Finding</th><th>Reward</th></tr>
          </thead>
          <tbody>
            <tr><td>Critical</td><td>Remote code execution, full authentication bypass, mass PII exposure</td><td>up to $2,000</td></tr>
            <tr><td>High</td><td>Privilege escalation, stored XSS leading to account takeover</td><td>up to $750</td></tr>
            <tr><td>Medium</td><td>IDOR, reflected XSS, sensitive information disclosure</td><td>up to $250</td></tr>
            <tr><td>Low</td><td>Best-practice deviations, low-impact misconfiguration</td><td>Hall of Fame</td></tr>
          </tbody>
        </table>
        <p style={{ color: "#5a6778", fontSize: "0.9rem", fontStyle: "italic" }}>
          Rewards are at the discretion of International Bank and are determined by the quality
          of the report and the demonstrated impact of the vulnerability.
        </p>
      </div>

      <h2>How to Submit a Report</h2>
      <div className="card">
        <p>Please send your report by email to <a href="mailto:deonmenezes04@gmail.com">deonmenezes04@gmail.com</a> including:</p>
        <ol>
          <li>A concise summary and the affected URL or endpoint.</li>
          <li>Step-by-step reproduction instructions.</li>
          <li>Your assessment of the vulnerability's impact.</li>
          <li>Suggested remediation, where possible.</li>
        </ol>
        <p style={{ fontSize: "0.9rem", color: "#5a6778" }}>
          Machine-readable contact information is published at <a href="/.well-known/security.txt">/.well-known/security.txt</a>.
        </p>
      </div>

      <h2>Safe Harbor</h2>
      <div className="card">
        <p>
          International Bank will not pursue legal action against researchers who act in good
          faith, stay within the scope defined above, and make a reasonable effort to avoid
          privacy violations, data destruction, or service interruption. Please do not access,
          modify, or retain client data, and do not pivot to systems outside this application.
        </p>
      </div>
    </>
  );
}
