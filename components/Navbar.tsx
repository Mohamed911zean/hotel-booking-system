"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        backgroundColor: transparent ? "transparent" : "rgba(8,8,8,0.97)",
        borderBottom: transparent ? "none" : "1px solid rgba(196,155,91,0.15)",
        backdropFilter: transparent ? "none" : "blur(12px)",
      }}
    >
      <nav
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ lineHeight: 1.1 }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#c49b5b",
                  letterSpacing: "0.04em",
                }}
              >
                Royal Palace
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(196,155,91,0.6)",
                  marginTop: "2px",
                }}
              >
                Hotel &amp; Resorts
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "#c49b5b",
                    }}
                  />
                )}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/rooms" className="btn-gold" id="navbar-book-now">
              Book Now
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
                y: menuOpen && i === 0 ? 6 : menuOpen && i === 2 ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                backgroundColor: "#c49b5b",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <motion.div
        className="mobile-menu"
        animate={{
          maxHeight: menuOpen ? "360px" : "0",
        }}
        transition={{ duration: 0.35 }}
        style={{
          overflow: "hidden",
          backgroundColor: "rgba(8,8,8,0.98)",
          borderTop: menuOpen ? "1px solid rgba(196,155,91,0.15)" : "none",
        }}
      >
        <div style={{ padding: "1.5rem 2rem" }}>
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "0.875rem 0",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: pathname === link.href ? "#c49b5b" : "rgba(255,255,255,0.7)",
                  borderBottom: "1px solid rgba(196,155,91,0.1)",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            style={{ marginTop: "1.25rem" }}
            initial={{ opacity: 0, y: 10 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              href="/rooms"
              className="btn-gold"
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", textAlign: "center" }}
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
