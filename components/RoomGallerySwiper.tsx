"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

interface RoomGallerySwiperProps {
  gallery: string[];
  name: string;
  badge?: string;
}

export default function RoomGallerySwiper({ gallery, name, badge }: RoomGallerySwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div style={{ marginBottom: "3rem" }}>
      <style>{`
        .room-main-swiper .swiper-button-next,
        .room-main-swiper .swiper-button-prev {
          color: #c49b5b;
          width: 44px; height: 44px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(196,155,91,0.35);
        }
        .room-main-swiper .swiper-button-next::after,
        .room-main-swiper .swiper-button-prev::after {
          font-size: 0.9rem;
          font-weight: 700;
        }
        .room-main-swiper .swiper-button-next:hover,
        .room-main-swiper .swiper-button-prev:hover {
          background: #c49b5b;
          color: #000;
        }
        .room-thumb-swiper .swiper-slide {
          opacity: 0.45;
          transition: opacity 0.3s;
          cursor: pointer;
        }
        .room-thumb-swiper .swiper-slide-thumb-active {
          opacity: 1;
          outline: 1px solid #c49b5b;
        }
      `}</style>

      {/* Main Swiper */}
      <Swiper
        className="room-main-swiper"
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        style={{ aspectRatio: "16/9", marginBottom: "4px" }}
      >
        {gallery.map((img, i) => (
          <SwiperSlide key={img}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src={img} alt={`${name} — view ${i + 1}`} fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} priority={i === 0} />
              {/* Corner frames */}
              <div style={{ position: "absolute", top: "1rem", left: "1rem", width: "36px", height: "36px", borderTop: "1px solid rgba(196,155,91,0.55)", borderLeft: "1px solid rgba(196,155,91,0.55)" }} />
              <div style={{ position: "absolute", bottom: "1rem", right: "1rem", width: "36px", height: "36px", borderBottom: "1px solid rgba(196,155,91,0.55)", borderRight: "1px solid rgba(196,155,91,0.55)" }} />
              {i === 0 && badge && (
                <span style={{ position: "absolute", top: "1rem", right: "1rem", backgroundColor: "#c49b5b", color: "#000", fontFamily: "'Montserrat',sans-serif", fontSize: "0.55rem", fontWeight: 700, padding: "0.3rem 0.75rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  {badge}
                </span>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Swiper */}
      <Swiper
        className="room-thumb-swiper"
        modules={[Thumbs, FreeMode]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={4}
        freeMode
        watchSlidesProgress
      >
        {gallery.map((img, i) => (
          <SwiperSlide key={img} style={{ height: "72px" }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src={img} alt="" fill sizes="120px" style={{ objectFit: "cover" }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
