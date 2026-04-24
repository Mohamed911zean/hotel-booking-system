import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center", backgroundColor: "#0a0a0a" }}>
      <div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "7rem", fontWeight: 300, color: "rgba(196,155,91,0.15)", lineHeight: 1, marginBottom: "1rem" }}>404</div>
        <div style={{ width: "48px", height: "1px", background: "#c49b5b", margin: "0 auto 1.5rem", opacity: 0.5 }} />
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 300, color: "#ffffff", marginBottom: "0.75rem" }}>Page Not Found</h1>
        <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", marginBottom: "2.5rem", lineHeight: "1.8" }}>
          We couldn&apos;t find what you were looking for. Let&apos;s take you back.
        </p>
        <Link href="/" className="btn-gold">Return to Homepage</Link>
      </div>
    </div>
  );
}
