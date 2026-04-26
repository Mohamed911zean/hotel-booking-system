"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const suiteHighlights = [
  {
    label: "Private suites",
    description: "Large rooms, layered lighting, and quiet comfort designed for guests who want calm without sacrificing service.",
  },
  {
    label: "Wellness access",
    description: "Spa, rooftop pool, and restorative amenities positioned as part of the stay instead of an afterthought.",
  },
  {
    label: "Fast planning",
    description: "Clear next steps for comparing rooms, contacting the team, and reserving with confidence.",
  },
];

const stayFacts = [
  { label: "Arrival", value: "24/7 reception" },
  { label: "Transfer", value: "Private pickup" },
  { label: "Location", value: "Central Manhattan" },
];

export default function ParallaxMask() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !mediaRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) return;

      gsap.from("[data-showcase-copy]", {
        y: 26,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.from("[data-showcase-card]", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      mm.add("(min-width: 1024px)", () => {
        gsap.to(mediaRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#080808",
        padding: "clamp(5rem, 8vw, 8rem) 1.25rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(196,155,91,0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 28%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]"
      >
        <div style={{ display: "grid", gap: "1.5rem" }}>
          <div style={{ maxWidth: "640px" }}>
            <span className="gold-label" data-showcase-copy>
              Curated Stay Experience
            </span>
            <div className="gold-rule gold-rule-left" data-showcase-copy />

            <h2
              className="section-title"
              data-showcase-copy
              style={{
                fontSize: "clamp(2.3rem, 5vw, 4.8rem)",
                lineHeight: 0.98,
                maxWidth: "12ch",
              }}
            >
              Luxury that feels effortless from discovery to reservation.
            </h2>

            <p
              data-showcase-copy
              style={{
                marginTop: "1.25rem",
                maxWidth: "560px",
                color: "var(--gray)",
                fontSize: "0.96rem",
                lineHeight: 1.9,
              }}
            >
              This section is built to convert better on real devices: guests see the atmosphere, understand the offer,
              and get direct paths to browse rooms or contact your team without decoding a heavy fullscreen effect.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stayFacts.map((fact) => (
              <div
                key={fact.label}
                data-showcase-copy
                style={{
                  border: "1px solid var(--border-gold)",
                  background: "rgba(255,255,255,0.03)",
                  padding: "1rem",
                  minHeight: "88px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  {fact.label}
                </p>
                <p style={{ marginTop: "0.55rem", fontSize: "0.92rem", color: "var(--off-white)" }}>{fact.value}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gap: "0.9rem" }}>
            {suiteHighlights.map((item, index) => (
              <article
                key={item.label}
                data-showcase-card
                className="grid gap-4 sm:grid-cols-[auto_1fr]"
                style={{
                  alignItems: "start",
                  padding: "1.25rem",
                  border: "1px solid var(--border-gold)",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid var(--border-gold)",
                    color: "var(--gold)",
                    background: "rgba(196,155,91,0.08)",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    lineHeight: 1,
                  }}
                >
                  0{index + 1}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.9rem",
                      lineHeight: 1.05,
                      color: "var(--off-white)",
                    }}
                  >
                    {item.label}
                  </h3>
                  <p style={{ marginTop: "0.55rem", color: "var(--gray)", lineHeight: 1.8, fontSize: "0.92rem" }}>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div data-showcase-copy style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
            <Link href="/rooms" className="btn-gold-filled inline-flex items-center justify-center">
              Explore Suites
            </Link>
            <Link href="/contact" className="btn-gold inline-flex items-center justify-center">
              Contact Concierge
            </Link>
          </div>
        </div>

        <div ref={mediaRef} style={{ position: "relative" }}>
          <div className="grid gap-4 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:items-stretch">
            <div
              data-showcase-card
              style={{
                position: "relative",
                minHeight: "420px",
                overflow: "hidden",
                border: "1px solid var(--border-gold)",
                background: "var(--bg-card)",
              }}
              className="sm:min-h-[520px]"
            >
              <Image
                src="/hotel_ballroom.jpg"
                alt="Royal Palace Hotel lounge"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.7))",
                }}
              />
              <div style={{ position: "absolute", left: "1.4rem", right: "1.4rem", bottom: "1.4rem" }}>
                <p
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  Signature arrival
                </p>
                <p
                  style={{
                    marginTop: "0.7rem",
                    maxWidth: "12ch",
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 3vw, 3rem)",
                    lineHeight: 1.02,
                    color: "var(--white)",
                  }}
                >
                  Elegant, calm, and easy to trust at a glance.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gap: "1rem" }}>
              <div
                data-showcase-card
                style={{
                  position: "relative",
                  minHeight: "220px",
                  overflow: "hidden",
                  border: "1px solid var(--border-gold)",
                  background: "var(--bg-card)",
                }}
                className="sm:min-h-[248px]"
              >
                <Image
                  src="/room_presidential.jpg"
                  alt="Presidential suite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 24vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62))",
                  }}
                />
                <div style={{ position: "absolute", left: "1.1rem", right: "1.1rem", bottom: "1.1rem" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--white)" }}>Refined suites</p>
                  <p style={{ marginTop: "0.3rem", color: "var(--off-white)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                    Spacious rooms presented with clear visual hierarchy.
                  </p>
                </div>
              </div>

              <div
                data-showcase-card
                style={{
                  border: "1px solid var(--border-gold)",
                  background: "linear-gradient(180deg, rgba(17,17,17,0.98), rgba(17,17,17,0.9))",
                  padding: "1.4rem",
                  display: "grid",
                  gap: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    Guest-first planning
                  </p>
                  <h3
                    style={{
                      marginTop: "0.7rem",
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.2rem",
                      lineHeight: 1.05,
                      color: "var(--white)",
                    }}
                  >
                    Simple next steps
                  </h3>
                </div>

                <p style={{ color: "var(--gray)", lineHeight: 1.85, fontSize: "0.92rem" }}>
                  Guests should immediately know where to go next. This layout keeps the visual richness but adds cleaner
                  decision points for room browsing and direct inquiries.
                </p>

                <div style={{ borderTop: "1px solid var(--border-gold)", paddingTop: "1rem", display: "grid", gap: "0.7rem" }}>
                  {["Airport chauffeur available", "Private dining on request", "Late checkout by suite type"].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        color: "var(--off-white)",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "999px",
                          background: "var(--gold)",
                          flexShrink: 0,
                        }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            data-showcase-card
            className="md:-mt-8 md:mr-4"
            style={{
              position: "relative",
              marginLeft: "auto",
              marginTop: "1rem",
              marginRight: "0",
              width: "min(100%, 300px)",
              border: "1px solid var(--border-gold)",
              background: "rgba(10,10,10,0.92)",
              padding: "1rem",
              boxShadow: "0 18px 40px rgba(0,0,0,0.32)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", border: "1px solid var(--border-gold)" }}>
              <Image
                src="/hotel_spa.jpg"
                alt="Hotel spa"
                fill
                sizes="300px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p
              style={{
                marginTop: "0.9rem",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              Best for couples
            </p>
            <p style={{ marginTop: "0.45rem", fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--white)" }}>
              Spa evenings
            </p>
            <p style={{ marginTop: "0.45rem", color: "var(--gray)", lineHeight: 1.75, fontSize: "0.9rem" }}>
              An extra visual layer that still stays readable and stable on smaller screens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
