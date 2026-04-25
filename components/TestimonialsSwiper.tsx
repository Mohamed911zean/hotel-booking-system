"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import { testimonials } from "@/lib/data";

export default function TestimonialsSwiper() {
  return (
    <div style={{ position: "relative", maxWidth: "860px", margin: "0 auto" }}>
      <style>{`
        .testi-swiper .swiper-pagination-bullet {
          background: rgba(196,155,91,0.35);
          width: 6px; height: 6px;
          opacity: 1;
          transition: all 0.3s;
        }
        .testi-swiper .swiper-pagination-bullet-active {
          background: #c49b5b;
          width: 20px;
          border-radius: 3px;
        }
        .t-prev, .t-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px; height: 44px;
          border: 1px solid rgba(196,155,91,0.35);
          background: transparent;
          color: #c49b5b;
          font-size: 1.25rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .t-prev { left: -60px; }
        .t-next { right: -60px; }
        .t-prev:hover, .t-next:hover {
          background: #c49b5b;
          color: #000;
        }
        @media (max-width: 900px) {
          .t-prev { left: 0; }
          .t-next { right: 0; }
        }
        .testi-swiper .swiper-slide {
          height: auto;
        }
      `}</style>

      <Swiper
        className="testi-swiper"
        modules={[Navigation, Pagination, Autoplay, EffectCards]}
        effect="cards"
        grabCursor={true}
        navigation={{ prevEl: ".t-prev", nextEl: ".t-next" }}
        pagination={{ clickable: true, el: ".testi-dots" }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        style={{ paddingBottom: "3rem", maxWidth: "420px", height: "auto", overflow: "visible" }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name} style={{ borderRadius: "16px", overflow: "hidden" }}>
            <div style={{ padding: "2.25rem 2rem", background: "#0d0d0d", border: "1px solid rgba(196,155,91,0.15)", height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#c49b5b", fontSize: "0.85rem", marginBottom: "1.25rem", letterSpacing: "0.08em" }}>{"★".repeat(t.rating)}</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.75)", lineHeight: "1.75", marginBottom: "1.75rem", flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", borderTop: "1px solid rgba(196,155,91,0.1)", paddingTop: "1.25rem" }}>
                <div style={{ width: "42px", height: "42px", border: "1px solid #c49b5b", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontWeight: 600, color: "#c49b5b", flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "#fff" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.62rem", color: "rgba(196,155,91,0.55)", letterSpacing: "0.08em", marginTop: "2px" }}>{t.country}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="testi-dots" style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px", zIndex: 5 }} />

      <button className="t-prev">‹</button>
      <button className="t-next">›</button>
    </div>
  );
}
