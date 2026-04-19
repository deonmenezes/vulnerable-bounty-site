import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "International Bank — Trusted Worldwide Since 1892",
  description: "Private banking, commercial lending, and wealth management for clients in over 40 countries."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="announce">
          Member FDIC · Equal Housing Lender · Serving clients in 42 countries
        </div>
        <header className="top">
          <Link href="/" className="brand">
            <span className="crest">IB</span>
            <span>
              International Bank
              <span className="brand-sub">Est. 1892</span>
            </span>
          </Link>
          <nav>
            <Link href="/search">Services</Link>
            <Link href="/comments">Clients</Link>
            <Link href="/tools">Support</Link>
            <Link href="/login" className="cta">Online Banking</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-inner">
            <div>
              <h4>International Bank</h4>
              <p style={{ margin: 0, color: "#5a6778", fontSize: "0.85rem" }}>
                Private and commercial banking services for individuals, families, and institutions since 1892.
              </p>
            </div>
            <div>
              <h4>Services</h4>
              <Link href="/search">Personal Banking</Link>
              <Link href="/search">Private Wealth</Link>
              <Link href="/search">Commercial</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/comments">Community</Link>
              <Link href="/tools">Contact Support</Link>
              <Link href="/bounty">Security</Link>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/.well-known/security.txt">security.txt</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} International Bank, N.A. All rights reserved.</span>
            <span>Deposits insured by the FDIC up to $250,000. NMLS #123456.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
