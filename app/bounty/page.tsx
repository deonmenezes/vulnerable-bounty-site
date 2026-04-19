export default function Bounty() {
  return (
    <>
      <h1>Bug Bounty Program — up to $2,000</h1>
      <div className="card">
        <p>This site is an experimental, intentionally vulnerable playground. If you find a real, reproducible security issue, report it and you may qualify for a reward.</p>
      </div>

      <h2>Scope</h2>
      <div className="card">
        <ul>
          <li>The deployed domain of this project (and its <code>/api/*</code> endpoints).</li>
          <li>Authentication, authorization, injection, XSS, SSRF, deserialization, misconfiguration, information disclosure.</li>
        </ul>
      </div>

      <h2>Out of Scope</h2>
      <div className="card">
        <ul>
          <li>DoS / volumetric attacks. Do not degrade the service for other testers.</li>
          <li>Social engineering, physical attacks, attacks against Vercel/GitHub infrastructure.</li>
          <li>Automated scanner output without a working proof-of-concept.</li>
          <li>Issues requiring a rooted device, outdated browser, or MITM on the victim's LAN.</li>
        </ul>
      </div>

      <h2>Rewards</h2>
      <div className="card">
        <ul>
          <li>Critical (RCE, full auth bypass, mass data exposure): up to <strong>$2,000</strong></li>
          <li>High (privilege escalation, stored XSS with account takeover): up to <strong>$750</strong></li>
          <li>Medium (IDOR, reflected XSS, sensitive disclosure): up to <strong>$250</strong></li>
          <li>Low / informational: hall of fame mention</li>
        </ul>
        <p>Rewards are discretionary and based on quality/impact of the report.</p>
      </div>

      <h2>How to Report</h2>
      <div className="card">
        <p>Email <a href="mailto:deonmenezes04@gmail.com">deonmenezes04@gmail.com</a> with:</p>
        <ol>
          <li>Vulnerability summary + affected URL/endpoint</li>
          <li>Step-by-step reproduction</li>
          <li>Impact assessment</li>
          <li>Suggested remediation (optional but appreciated)</li>
        </ol>
        <p>Machine-readable contact details: <a href="/.well-known/security.txt">/.well-known/security.txt</a></p>
      </div>

      <h2>Safe Harbor</h2>
      <div className="card">
        <p>Good-faith testing within this scope will not result in legal action. Do not access data that is not yours in real systems, and do not pivot outside this application's surface.</p>
      </div>
    </>
  );
}
