export default function Search({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? "";
  const products = [
    { name: "Heritage Checking", desc: "Premium checking for individual clients, with a dedicated relationship manager." },
    { name: "Legacy Savings", desc: "High-yield savings earning 4.25% APY on balances above $10,000." },
    { name: "Platinum Reserve Card", desc: "Concierge services, travel insurance, and 2% cashback on all purchases." },
    { name: "Private Wealth Advisory", desc: "Bespoke portfolio management for clients with $2M+ in investable assets." },
    { name: "Commercial Credit Line", desc: "Flexible working-capital financing for established businesses." },
    { name: "Global Treasury", desc: "Multi-currency accounts and international wire services for institutional clients." }
  ];
  const filtered = q ? products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase())) : products;

  return (
    <>
      <h1>Our Services</h1>
      <p style={{ color: "#5a6778", fontStyle: "italic", maxWidth: 680 }}>
        From everyday banking to bespoke wealth management, International Bank offers a full
        range of services tailored to the needs of each client.
      </p>

      <form method="get" style={{ margin: "2rem 0" }}>
        <input name="q" defaultValue={q} placeholder="Search services, products, and help articles..." style={{ width: "70%", marginRight: "0.5rem" }} />
        <button type="submit">Search</button>
      </form>

      {q && (
        <div className="card" style={{ background: "#f4ecd8", borderTop: "3px solid #b8860b" }}>
          <p style={{ margin: 0, color: "#4a5568" }}>
            Showing results for: <strong><span dangerouslySetInnerHTML={{ __html: q }} /></strong>
          </p>
        </div>
      )}

      <div>
        {filtered.map((p) => (
          <div key={p.name} className="card">
            <h3 style={{ margin: "0 0 0.5rem" }}>{p.name}</h3>
            <p style={{ margin: 0, color: "#4a5568" }}>{p.desc}</p>
            <p style={{ marginTop: "0.75rem", marginBottom: 0 }}>
              <a href="#">Learn more →</a>
            </p>
          </div>
        ))}
        {filtered.length === 0 && <p style={{ color: "#5a6778", fontStyle: "italic" }}>No services matched your search.</p>}
      </div>
    </>
  );
}
