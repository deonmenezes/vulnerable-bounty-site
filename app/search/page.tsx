// Reflected XSS: the query parameter is injected into the DOM via dangerouslySetInnerHTML.
export default function Search({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? "";
  return (
    <>
      <h1>Search</h1>
      <form method="get">
        <input name="q" defaultValue={q} placeholder="Search..." style={{ width: "60%" }} />
        <button type="submit">Go</button>
      </form>
      <div className="card">
        <p>You searched for:</p>
        <div dangerouslySetInnerHTML={{ __html: q }} />
      </div>
      <p className="bug">Try <code>?q=&lt;img src=x onerror=alert(1)&gt;</code></p>
    </>
  );
}
