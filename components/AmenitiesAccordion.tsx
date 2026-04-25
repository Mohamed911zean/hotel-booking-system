"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { amenities } from "@/lib/data";

const amenityImages = [
  "/hotel_spa.jpg",
  "/hotel_dining.jpg",
  "/hotel_pool.jpg",
  "/hotel_ballroom.jpg",
];

export default function AmenitiesAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", width: "100%", height: isMobile ? "80vh" : "60vh", minHeight: "450px", gap: "10px" }}>
      {amenities.slice(0, 4).map((amenity, i) => {
        const isActive = hoveredIndex === i;
        
        return (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onClick={() => setHoveredIndex(i)}
            animate={{ 
              flex: isActive ? 4 : 1,
              filter: isActive ? "grayscale(0%)" : "grayscale(80%)"
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
              position: "relative",
              height: isMobile ? "auto" : "100%", 
              width: isMobile ? "100%" : "auto",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              border: isActive ? "1px solid rgba(196,155,91,0.5)" : "1px solid rgba(255,255,255,0.05)"
            }}
          >
            {/* Background Image */}
            <Image 
              src={amenityImages[i]} 
              alt={amenity.title} 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", transition: "transform 0.8s ease", transform: isActive ? "scale(1.05)" : "scale(1)" }} 
            />
            
            {/* Dark overlay */}
            <div style={{ position: "absolute", inset: 0, background: isActive ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)" : "rgba(0,0,0,0.6)", transition: "background 0.5s ease" }} />

            {/* Content Container */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}>
              
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: isActive ? "1rem" : "0", transition: "all 0.5s ease" }}>
                <div style={{ fontSize: "2rem", color: "#c49b5b" }}>{amenity.icon}</div>
                
                {/* Horizontal Title - Only fully visible when active or partially rotated when inactive on desktop */}
                <h3 
                  style={{ 
                    fontFamily: "'Cormorant Garamond',serif", 
                    fontSize: "1.75rem", 
                    fontWeight: 600, 
                    color: "#fff", 
                    whiteSpace: "nowrap",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(-20px)",
                    transition: "all 0.5s ease 0.1s"
                  }}
                >
                  {amenity.title}
                </h3>
              </div>

              {/* Description - only visible when active */}
              <AnimatePresence>
                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    style={{ 
                      fontFamily: "'Montserrat',sans-serif", 
                      fontSize: "0.85rem", 
                      color: "rgba(255,255,255,0.7)", 
                      lineHeight: "1.8", 
                      maxWidth: "400px",
                      fontWeight: 300 
                    }}
                  >
                    {amenity.description}
                  </motion.p>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
