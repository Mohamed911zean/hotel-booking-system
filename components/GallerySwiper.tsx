"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/data";
import { motion } from "framer-motion";

export default function GallerySwiper() {
  return (
    <div style={{ position: "relative" }}>
      {/* Custom styles injected */}
      <style>{`
        .gallery-swiper .swiper-pagination-bullet {
          background: rgba(196,155,91,0.4);
          width: 6px; height: 6px;
          opacity: 1;
          transition: all 0.3s;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #c49b5b;
          width: 24px;
          border-radius: 3px;
        }
        .g-prev, .g-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 52px; height: 52px;
          border: 1px solid rgba(196,155,91,0.5);
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          color: #c49b5b;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .g-prev { left: 1.5rem; }
        .g-next { right: 1.5rem; }
        .g-prev:hover, .g-next:hover {
          background: #c49b5b;
          color: #000;
          border-color: #c49b5b;
        }
      `}</style>

      <Swiper
        className="gallery-swiper"
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{ prevEl: ".g-prev", nextEl: ".g-next" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        style={{ height: "520px" }}
      >
        {galleryImages.map((img) => (
          <SwiperSlide key={img.src}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src={img.src} alt={img.alt} fill sizes="100vw" style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", padding: "2.5rem 3rem" }}>
                <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(196,155,91,0.75)", marginBottom: "0.5rem" }}>Royal Palace Hotel</span>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 600, color: "#ffffff", letterSpacing: "0.03em" }}>{img.alt}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="g-prev">‹</button>
      <button className="g-next">›</button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        <Link href="/gallery" id="view-gallery" className="btn-gold">View Full Gallery</Link>
      </motion.div>
    </div>
  );
}
