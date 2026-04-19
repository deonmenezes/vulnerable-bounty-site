import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "BuggyBank — Intentionally Vulnerable Demo",
  description: "A deliberately insecure playground for bug bounty practice."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="top">
          <Link href="/" className="brand">BuggyBank</Link>
          <nav>
            <Link href="/login">Login</Link>
            <Link href="/search">Search</Link>
            <Link href="/comments">Comments</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/bounty">Bounty</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>⚠️ This site is intentionally vulnerable. Do not enter real credentials.</p>
          <p>Report bugs: <a href="mailto:deonmenezes04@gmail.com">deonmenezes04@gmail.com</a> · <a href="/.well-known/security.txt">security.txt</a></p>
        </footer>
      </body>
    </html>
  );
}
