"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { value: 150, suffix: "+", label: "Luxury Rooms" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 12, suffix: "", label: "Dining Options" },
  { value: 4.9, suffix: "★", label: "Guest Rating" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax on bg
    if (bgRef.current && sectionRef.current) {
      gsap.to(bgRef.current, {
        y: "28%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Counter animation - run immediately on mount since they are in the hero
    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      const stat = stats[i];
      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.value,
        duration: 2.2,
        delay: 1.5,
        ease: "power2.out",
        onUpdate() {
          if (el) {
            el.textContent =
              stat.value % 1 !== 0
                ? obj.val.toFixed(1) + stat.suffix
                : Math.floor(obj.val) + stat.suffix;
          }
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: ease as any } },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{ position: "relative", height: "100vh", minHeight: "680px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Parallax bg */}
      <div ref={bgRef} style={{ position: "absolute", inset: "-20%", zIndex: 0 }}>
        <Image src="/hotel_hero.jpg" alt="Royal Palace Hotel" fill priority style={{ objectFit: "cover", objectPosition: "center 30%" }} />
      </div>

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.75) 100%)", zIndex: 1 }} />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 1.5rem", maxWidth: "860px" }}
      >
        <motion.p variants={item} style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#c49b5b", marginBottom: "1.25rem" }}>
          ✦ &nbsp; Five-Star Luxury &nbsp;·&nbsp; Manhattan, New York &nbsp; ✦
        </motion.p>

        <motion.h1 variants={item} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.08, letterSpacing: "0.02em", marginBottom: 0 }}>
          Royal Palace
        </motion.h1>

        <motion.div variants={item} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, color: "#c49b5b", lineHeight: 1.08, letterSpacing: "0.02em", marginBottom: "0.5rem" }}>
          Hotel
        </motion.div>

        {/* Ornament line */}
        <motion.div variants={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "center", margin: "0.75rem 0" }}>
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.7, ease: ease as any }} style={{ display: "block", width: "40px", height: "1px", background: "#c49b5b", opacity: 0.6, transformOrigin: "left" }} />
          <span style={{ color: "#c49b5b", fontSize: "0.55rem", opacity: 0.7 }}>✦</span>
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.7, ease: ease as any }} style={{ display: "block", width: "40px", height: "1px", background: "#c49b5b", opacity: 0.6, transformOrigin: "right" }} />
        </motion.div>

        <motion.p variants={item} style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.9, marginBottom: "2.5rem", maxWidth: "520px", margin: "0 auto 2.5rem", fontWeight: 300, letterSpacing: "0.05em" }}>
          Where timeless elegance and modern luxury converge — a landmark experience in the heart of Manhattan since 1998.
        </motion.p>

        <motion.div variants={item} style={{ display: "flex", gap: "1.25rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/rooms" id="hero-book-now" className="btn-gold-filled">Reserve a Room</Link>
          <Link href="/rooms" id="hero-view-rooms" className="btn-gold">Explore Rooms</Link>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8, ease: ease as any }}
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, backgroundColor: "rgba(8,8,8,0.88)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(196,155,91,0.2)" }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1rem" }}>
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.75rem", fontWeight: 600, color: "#c49b5b" }}>
                <span ref={(el) => { counterRefs.current[i] = el; }}>0{stat.suffix}</span>
              </div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
