"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ParallaxMask() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !textRef.current || !bgRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // Pin for 200% of viewport height
        scrub: 1,      // Smooth scrubbing
        pin: true,     // This pins the section while zooming
      }
    });

    tl.to(textRef.current, {
      scale: 80, // Massive scale to ensure we zoom completely through the letter hole
      opacity: 0,
      ease: "power2.in",
    });

    // We can also scale the background up slightly as we zoom in
    gsap.to(bgRef.current, {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        scrub: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      style={{ 
        height: "100vh", 
        backgroundColor: "#080808",
        position: "relative",
      }}
    >
      <div 
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        {/* Background that will be revealed/parallaxed */}
        <div 
          ref={bgRef}
          style={{
            position: "absolute",
            inset: "-20%",
            backgroundImage: "url('/hotel_ballroom.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0
          }}
        />

        {/* SVG Mask overlay */}
        <svg 
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="text-mask">
              <rect width="100%" height="100%" fill="white" />
              <g ref={textRef} style={{ transformOrigin: "50% 50%" }}>
                <text 
                  x="50%" 
                  y="50%" 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  fill="black"
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "25vw",
                    fontWeight: 700,
                    letterSpacing: "0.05em"
                  }}
                >
                  LUXURY
                </text>
              </g>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="#080808" mask="url(#text-mask)" />
        </svg>
      </div>
    </section>
  );
}
