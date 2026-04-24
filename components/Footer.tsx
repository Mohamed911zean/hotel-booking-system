import Link from "next/link";
import { hotelInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(196,155,91,0.2)" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "5rem 2rem 2.5rem" }}>

        {/* Top: Logo + tagline centered */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 600, color: "#c49b5b", letterSpacing: "0.04em" }}>
            Royal Palace Hotel
          </div>
          <div style={{ width: "48px", height: "1px", background: "#c49b5b", margin: "1rem auto", opacity: 0.5 }} />
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Manhattan · New York · Est. 1998
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "3rem", marginBottom: "4rem" }}>

          {/* Column 1 */}
          <div>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c49b5b", marginBottom: "1.25rem" }}>The Hotel</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[{ href: "/", label: "Home" }, { href: "/rooms", label: "Rooms & Suites" }, { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Contact" }].map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c49b5b", marginBottom: "1.25rem" }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Address", val: hotelInfo.address },
                { label: "Phone", val: hotelInfo.phone },
                { label: "Email", val: hotelInfo.email },
                { label: "Check-in", val: `${hotelInfo.checkIn} / ${hotelInfo.checkOut}` },
              ].map(i => (
                <div key={i.label}>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(196,155,91,0.5)", marginBottom: "2px" }}>{i.label}</div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.5" }}>{i.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c49b5b", marginBottom: "1.25rem" }}>Stay Connected</p>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: "1.7", marginBottom: "1.25rem" }}>
              Receive exclusive offers, seasonal packages, and curated experiences directly to your inbox.
            </p>
            <form action="#" method="post" style={{ display: "flex" }}>
              <input type="email" name="email" placeholder="Your email address" className="footer-email-input" />
              <button type="submit" className="footer-subscribe-btn">Join</button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(196,155,91,0.1)", paddingTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
            © {year} Royal Palace Hotel &amp; Resorts. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.75rem" }}>
            {["Privacy Policy", "Terms", "Cookies"].map(t => (
              <Link key={t} href="#" className="footer-link" style={{ fontSize: "0.72rem" }}>{t}</Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
