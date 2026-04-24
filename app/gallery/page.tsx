"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll(".g-item");
    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          delay: (i % 4) * 0.08,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const close = () => setSelected(null);
  const prev = () => setSelected((s) => s !== null ? (s - 1 + galleryImages.length) % galleryImages.length : null);
  const next = () => setSelected((s) => s !== null ? (s + 1) % galleryImages.length : null);

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{ backgroundColor: "#080808", borderBottom: "1px solid rgba(196,155,91,0.15)", padding: "9rem 2rem 4rem", textAlign: "center", position: "relative" }}
      >
        <div style={{ position: "absolute", top: "6rem", left: "2rem", width: "50px", height: "50px", borderTop: "1px solid rgba(196,155,91,0.3)", borderLeft: "1px solid rgba(196,155,91,0.3)" }} />
        <div style={{ position: "absolute", top: "6rem", right: "2rem", width: "50px", height: "50px", borderTop: "1px solid rgba(196,155,91,0.3)", borderRight: "1px solid rgba(196,155,91,0.3)" }} />
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c49b5b" }}>
          Visual Tour
        </motion.span>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.7 }} style={{ width: "48px", height: "1px", background: "#c49b5b", margin: "1rem auto", opacity: 0.5, transformOrigin: "center" }} />
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#fff", marginBottom: "1.25rem" }}>
          Hotel <em style={{ color: "#c49b5b" }}>Gallery</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", maxWidth: "400px", margin: "0 auto", lineHeight: "1.9", fontWeight: 300 }}>
          A glimpse into the spaces, moments, and details that define the Royal Palace experience.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <div style={{ backgroundColor: "#0a0a0a" }}>
        <main style={{ maxWidth: "1320px", margin: "0 auto", padding: "3.5rem 2rem 7rem" }}>
          <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: "3px" }}>
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className="gallery-item g-item"
                onClick={() => setSelected(i)}
                style={{
                  position: "relative",
                  aspectRatio: i % 5 === 0 ? "4/3" : "3/2",
                  gridColumn: i % 7 === 0 ? "span 2" : undefined,
                  cursor: "pointer",
                }}
              >
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 600px) 100vw, 400px" style={{ objectFit: "cover" }} />
                <div className="gallery-overlay">
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", fontWeight: 600, color: "#c49b5b" }}>{img.alt}</span>
                </div>
                <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", width: "28px", height: "28px", borderTop: "1px solid rgba(196,155,91,0.45)", borderLeft: "1px solid rgba(196,155,91,0.45)" }} />
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={close}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.96)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <button onClick={close} style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none", color: "#c49b5b", fontSize: "2.5rem", cursor: "pointer", zIndex: 10, fontFamily: "'Cormorant Garamond',serif", lineHeight: 1 }}>×</button>

            <button onClick={e => { e.stopPropagation(); prev(); }} style={{ position: "absolute", left: "1.5rem", background: "none", border: "1px solid rgba(196,155,91,0.35)", color: "#c49b5b", width: "52px", height: "52px", cursor: "pointer", fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>‹</button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              style={{ position: "relative", width: "min(90vw,1100px)", height: "min(80vh,700px)" }}
            >
              <Image src={galleryImages[selected].src} alt={galleryImages[selected].alt} fill style={{ objectFit: "contain" }} />
            </motion.div>

            <button onClick={e => { e.stopPropagation(); next(); }} style={{ position: "absolute", right: "1.5rem", background: "none", border: "1px solid rgba(196,155,91,0.35)", color: "#c49b5b", width: "52px", height: "52px", cursor: "pointer", fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>

            <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", fontFamily: "'Montserrat',sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(196,155,91,0.6)" }}>
              {galleryImages[selected].alt} &nbsp;·&nbsp; {selected + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
