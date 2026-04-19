import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="est">Established 1892</div>
        <h1>Banking built on a century of trust.</h1>
        <p className="lead">
          For more than a hundred and thirty years, International Bank has helped families,
          businesses, and institutions protect and grow their wealth across generations.
        </p>
        <div className="hero-actions">
          <Link href="/login" className="btn-primary">Access Online Banking</Link>
          <Link href="/search" className="btn-ghost">Explore Services</Link>
        </div>
      </section>

      <section className="stats">
        <div className="stat"><strong>$847B</strong><span>Assets under management</span></div>
        <div className="stat"><strong>42</strong><span>Countries served</span></div>
        <div className="stat"><strong>1.8M</strong><span>Active clients</span></div>
        <div className="stat"><strong>AA+</strong><span>S&amp;P credit rating</span></div>
      </section>

      <div className="section-title">
        <h2>Our Services</h2>
        <div className="divider" />
        <p>Comprehensive financial solutions, delivered with discretion.</p>
      </div>

      <section className="features">
        <div className="feature">
          <div className="icon">P</div>
          <h3>Personal Banking</h3>
          <p>Checking, savings, and certificates of deposit with competitive rates and no hidden fees.</p>
        </div>
        <div className="feature">
          <div className="icon">W</div>
          <h3>Private Wealth</h3>
          <p>Dedicated advisors for high-net-worth families, trusts, and estate planning.</p>
        </div>
        <div className="feature">
          <div className="icon">C</div>
          <h3>Commercial Lending</h3>
          <p>Working capital, equipment finance, and commercial real estate loans for growing businesses.</p>
        </div>
        <div className="feature">
          <div className="icon">M</div>
          <h3>Mortgage &amp; Loans</h3>
          <p>Fixed and adjustable-rate mortgages, jumbo loans, and home equity lines of credit.</p>
        </div>
      </section>

      <div className="section-title">
        <h2>What Our Clients Say</h2>
        <div className="divider" />
      </div>

      <section>
        <div className="testimonial">
          "International Bank has managed our family's finances for three generations. Their
          discretion and long-term thinking is unmatched in the industry."
          <cite>— Margaret H., Private Wealth Client since 2009</cite>
        </div>
        <div className="testimonial">
          "When we expanded into Europe, International Bank's commercial team had the
          relationships and expertise we needed. They've been indispensable partners."
          <cite>— Robert A., Chief Financial Officer, Avalon Industries</cite>
        </div>
        <div className="testimonial">
          "I've been a client for twenty-two years. The service, the stability, the people —
          everything about this bank is exceptional."
          <cite>— Dr. Elena V., Personal Banking Client</cite>
        </div>
      </section>
    </>
  );
}
