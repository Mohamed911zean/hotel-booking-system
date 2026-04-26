"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { amenities } from "@/lib/data";

const amenityImages = [
  "/hotel_spa.jpg",
  "/hotel_restaurant.jpg",
  "/hotel_pool.jpg",
  "/hotel_ballroom.jpg",
];

export default function AmenitiesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = amenities.slice(0, 4);

  return (
    <>
      {/* Desktop */}
      <div className="hidden gap-3 md:flex md:h-[620px]">
        {items.map((amenity, i) => {
          const isActive = activeIndex === i;

          return (
            <motion.button
              key={amenity.title}
              type="button"
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              animate={{
                flex: isActive ? 2.6 : 1,
                borderColor: isActive ? "rgba(196,155,91,0.45)" : "rgba(255,255,255,0.08)",
                boxShadow: isActive
                  ? "0 24px 60px rgba(0,0,0,0.28)"
                  : "0 10px 30px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-w-0 overflow-hidden rounded-none border bg-[#111111] text-left"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="absolute inset-0">
                <Image
                  src={amenityImages[i]}
                  alt={amenity.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  style={{
                    objectFit: "cover",
                    transform: isActive ? "scale(1.06)" : "scale(1)",
                    transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isActive
                      ? "linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.78) 72%)"
                      : "linear-gradient(180deg, rgba(0,0,0,0.22), rgba(0,0,0,0.82) 88%)",
                    transition: "all 0.45s ease",
                  }}
                />
              </div>

              <div className="relative flex h-full flex-col justify-between p-6 lg:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.56)",
                    }}
                  >
                    0{i + 1}
                  </span>

                  <div
                    style={{
                      fontSize: "1.9rem",
                      color: "#c49b5b",
                      opacity: isActive ? 1 : 0.7,
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    {amenity.icon}
                  </div>
                </div>

                <div>
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.72,
                      y: isActive ? 0 : 8,
                    }}
                    transition={{ duration: 0.45 }}
                  >
                    <p
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#c49b5b",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Signature Experience
                    </p>

                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: isActive ? "2.35rem" : "1.45rem",
                        lineHeight: 1.02,
                        color: "#fff",
                        transition: "font-size 0.45s ease",
                      }}
                    >
                      {amenity.title}
                    </h3>
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.42, delay: 0.08 }}
                      >
                        <p
                          style={{
                            marginTop: "1rem",
                            maxWidth: "34ch",
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "0.88rem",
                            color: "rgba(255,255,255,0.72)",
                            lineHeight: 1.85,
                            fontWeight: 300,
                          }}
                        >
                          {amenity.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="grid gap-3 md:hidden">
        {items.map((amenity, i) => {
          const isActive = activeIndex === i;

          return (
            <motion.button
              key={amenity.title}
              type="button"
              layout
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              className="relative overflow-hidden border text-left"
              animate={{
                height: isActive ? 320 : 108,
                borderColor: isActive ? "rgba(196,155,91,0.45)" : "rgba(255,255,255,0.08)",
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: "#111111",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src={amenityImages[i]}
                  alt={amenity.title}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    transform: isActive ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isActive
                      ? "linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.82) 76%)"
                      : "linear-gradient(180deg, rgba(0,0,0,0.24), rgba(0,0,0,0.86) 100%)",
                  }}
                />
              </div>

              <div className="relative flex h-full flex-col justify-end p-4">
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      fontSize: "1.45rem",
                      color: "#c49b5b",
                      flexShrink: 0,
                    }}
                  >
                    {amenity.icon}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.52)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      0{i + 1}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.7rem",
                        lineHeight: 1.05,
                        color: "#fff",
                      }}
                    >
                      {amenity.title}
                    </h3>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.35, delay: 0.05 }}
                      style={{
                        marginTop: "0.95rem",
                        maxWidth: "32ch",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.84rem",
                        color: "rgba(255,255,255,0.72)",
                        lineHeight: 1.8,
                        fontWeight: 300,
                      }}
                    >
                      {amenity.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          );
        })}
      </div>
    </>
  );
}
