"use client";

import { useEffect, useRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ease = [0.22, 1, 0.36, 1];

/* ── FadeUp ──────────────────────────────────────────────── */
interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  distance?: number;
}
export function FadeUp({ children, delay = 0, duration = 0.75, distance = 40, ...props }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── FadeIn ──────────────────────────────────────────────── */
export function FadeIn({ children, delay = 0, duration = 0.75, ...props }: Omit<FadeUpProps, "distance">) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── SlideIn ─────────────────────────────────────────────── */
interface SlideInProps extends HTMLMotionProps<"div"> {
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
}
export function SlideIn({ children, direction = "left", delay = 0, duration = 0.85, ...props }: SlideInProps) {
  const x = direction === "left" ? -60 : 60;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── ScaleIn ─────────────────────────────────────────────── */
export function ScaleIn({ children, delay = 0, duration = 0.7, ...props }: Omit<FadeUpProps, "distance">) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger Container ───────────────────────────────────── */
interface StaggerProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function StaggerContainer({ children, stagger = 0.1, delay = 0, className, style }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger Child ───────────────────────────────────────── */
export function StaggerChild({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ── Gold Line Reveal ────────────────────────────────────── */
export function GoldLineReveal({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease }}
      style={{
        height: "1px",
        background: "#c49b5b",
        marginBottom: "0.75rem",
        width: "40px",
        opacity: 0.6,
      }}
    />
  );
}

/* ── Split Text Reveal ───────────────────────────────────── */
export function SplitTextReveal({ text, delay = 0, style, className }: { text: string; delay?: number; style?: React.CSSProperties; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", ...style }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em" }}>
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { duration: 0.8, ease } },
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

/* ── Highlight Text (Scroll Scrub) ───────────────────────── */
export function HighlightText({ text, style, highlightColor = "#ffffff", baseColor = "rgba(255,255,255,0.2)" }: { text: string; style?: React.CSSProperties; highlightColor?: string; baseColor?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;
    
    const chars = containerRef.current.querySelectorAll(".h-char");
    
    gsap.fromTo(
      chars,
      { color: baseColor },
      {
        color: highlightColor,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [baseColor, highlightColor]);

  return (
    <div ref={containerRef} style={{ display: "flex", flexWrap: "wrap", ...style }}>
      {text.split(" ").map((word, wordIndex) => (
        <div key={wordIndex} style={{ display: "inline-flex", marginRight: "0.25em" }}>
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className="h-char" style={{ color: baseColor }}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

