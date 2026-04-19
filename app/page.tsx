export default function Home() {
  return (
    <>
      <h1>🐛 BuggyBank</h1>
      <div className="warn">
        <strong>WARNING:</strong> This application contains deliberate security flaws for educational
        and bug-bounty-practice purposes. Do not host with real data. Do not connect to real systems.
      </div>

      <h2>Scope & Endpoints</h2>
      <div className="card">
        <div className="bug"><strong>/login</strong> — authentication (try classic auth bypass tricks)</div>
        <div className="bug"><strong>/search?q=</strong> — reflected user input</div>
        <div className="bug"><strong>/comments</strong> — user-generated content rendered to the page</div>
        <div className="bug"><strong>/profile/[id]</strong> — view any user's profile by ID</div>
        <div className="bug"><strong>/tools</strong> — network diagnostic tool</div>
        <div className="bug"><strong>/api/users</strong> — JSON listing</div>
        <div className="bug"><strong>/api/secrets</strong> — configuration endpoint</div>
        <div className="bug"><strong>/api/ping?host=</strong> — ping backend</div>
      </div>

      <h2>Bounty Program</h2>
      <div className="card">
        <p>Find a real, reproducible vulnerability? Up to <strong>$2,000</strong> per qualifying report.</p>
        <p>See <a href="/bounty">/bounty</a> for rules and how to submit.</p>
      </div>
    </>
  );
}
