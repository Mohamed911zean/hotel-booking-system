import Image from "next/image";
import Link from "next/link";
import { rooms, amenities } from "@/lib/data";
import type { Metadata } from "next";
import RoomCard from "@/components/RoomCard";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import GallerySwiper from "@/components/GallerySwiper";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import { FadeUp, FadeIn, SlideIn, StaggerContainer, StaggerChild, GoldLineReveal } from "@/components/AnimatedElements";

export const metadata: Metadata = {
  title: "Royal Palace Hotel — Manhattan's Premier Luxury Hotel",
  description: "Experience five-star luxury at Royal Palace Hotel, Manhattan.",
};

function Ornament() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "center", margin: "1rem 0" }}>
      <span style={{ display: "block", width: "40px", height: "1px", background: "#c49b5b", opacity: 0.5 }} />
      <span style={{ color: "#c49b5b", fontSize: "0.55rem", opacity: 0.7 }}>✦</span>
      <span style={{ display: "block", width: "40px", height: "1px", background: "#c49b5b", opacity: 0.5 }} />
    </div>
  );
}

export default function HomePage() {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────── */}
      <HeroSection />

      {/* ── MARQUEE ──────────────────── */}
      <MarqueeStrip />

      {/* ── FEATURED ROOMS ───────────── */}
      <section id="featured-rooms" style={{ padding: "7rem 2rem", backgroundColor: "#0a0a0a" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <FadeUp>
              <span className="gold-label">Accommodations</span>
              <Ornament />
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 300, marginBottom: "1.5rem" }}>
                Featured Rooms &amp; <em style={{ color: "#c49b5b" }}>Suites</em>
              </h2>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", maxWidth: "460px", margin: "0 auto", lineHeight: "1.9", fontWeight: 300 }}>
                Thoughtfully designed sanctuaries balancing comfort, elegance, and every modern amenity.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer
            stagger={0.12}
            delay={0.1}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))", gap: "1.5rem" }}
          >
            {featuredRooms.map((room) => (
              <StaggerChild key={room.id}>
                <RoomCard room={room} />
              </StaggerChild>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.3} style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/rooms" id="view-all-rooms" className="btn-gold">View All Rooms</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── ABOUT ────────────────────── */}
      <section id="about" style={{ padding: "7rem 2rem", backgroundColor: "#0d0d0d" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "5rem", alignItems: "center" }}>
          {/* Image */}
          <SlideIn direction="left">
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
                <Image src="/hotel_lobby.jpg" alt="Royal Palace Hotel grand lobby" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", top: "1rem", left: "1rem", width: "50px", height: "50px", borderTop: "1px solid #c49b5b", borderLeft: "1px solid #c49b5b", opacity: 0.6 }} />
                <div style={{ position: "absolute", bottom: "1rem", right: "1rem", width: "50px", height: "50px", borderBottom: "1px solid #c49b5b", borderRight: "1px solid #c49b5b", opacity: 0.6 }} />
              </div>
              <div style={{ position: "absolute", bottom: "-2rem", right: "-1.5rem", backgroundColor: "#c49b5b", padding: "1.5rem 2rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.75rem", fontWeight: 600, color: "#000", lineHeight: 1 }}>25</div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000", marginTop: "4px" }}>Years of<br />Excellence</div>
              </div>
            </div>
          </SlideIn>

          {/* Text */}
          <SlideIn direction="right" delay={0.1}>
            <div>
              <span className="gold-label">Our Story</span>
              <GoldLineReveal delay={0.2} />
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, marginBottom: "1.75rem", lineHeight: 1.2 }}>
                A Legacy of<br /><em style={{ color: "#c49b5b" }}>Refinement</em> Since 1998
              </h2>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.84rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.9", marginBottom: "1.25rem", fontWeight: 300 }}>
                Nestled at the heart of Manhattan, Royal Palace Hotel has welcomed distinguished guests for over two decades. Our commitment to excellence is reflected in every detail.
              </p>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.84rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.9", marginBottom: "2.5rem", fontWeight: 300 }}>
                We believe that true luxury anticipates your every need, personalises every interaction, and creates memories that endure far beyond your stay.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", marginBottom: "2.5rem", background: "rgba(196,155,91,0.15)" }}>
                {[{ num: "150+", label: "Luxury Rooms" }, { num: "8", label: "Dining Venues" }, { num: "25k", label: "Guests per Year" }, { num: "5 ★", label: "Forbes Rating" }].map((item) => (
                  <div key={item.label} style={{ padding: "1.5rem", backgroundColor: "#0d0d0d" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 600, color: "#c49b5b" }}>{item.num}</div>
                    <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>{item.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/rooms" className="btn-gold" id="about-book">Book Your Stay</Link>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── AMENITIES ────────────────── */}
      <section id="amenities" style={{ padding: "7rem 2rem", backgroundColor: "#080808" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <FadeUp style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="gold-label">World-Class Facilities</span>
            <Ornament />
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 300 }}>
              Hotel <em style={{ color: "#c49b5b" }}>Amenities</em>
            </h2>
          </FadeUp>

          <StaggerContainer
            stagger={0.07}
            delay={0.1}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: "1px", background: "rgba(196,155,91,0.1)" }}
          >
            {amenities.map((amenity) => (
              <StaggerChild key={amenity.title}>
                <div className="amenity-card">
                  <div style={{ fontSize: "1.75rem", marginBottom: "1.25rem" }}>{amenity.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", fontWeight: 600, color: "#fff", marginBottom: "0.625rem" }}>{amenity.title}</h3>
                  <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: "1.75", fontWeight: 300 }}>{amenity.description}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── GALLERY SWIPER ───────────── */}
      <section id="gallery-preview" style={{ padding: "7rem 2rem", backgroundColor: "#0a0a0a" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <FadeUp style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="gold-label">Photo Gallery</span>
            <Ornament />
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 300 }}>
              Explore the <em style={{ color: "#c49b5b" }}>Hotel</em>
            </h2>
          </FadeUp>
          <FadeIn delay={0.2}>
            <GallerySwiper />
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIALS SWIPER ──────── */}
      <section id="testimonials" style={{ padding: "7rem 2rem", backgroundColor: "#0d0d0d" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <FadeUp style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="gold-label">Guest Reviews</span>
            <Ornament />
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 300 }}>
              What Our <em style={{ color: "#c49b5b" }}>Guests</em> Say
            </h2>
          </FadeUp>
          <FadeIn delay={0.2}>
            <TestimonialsSwiper />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────── */}
      <section id="cta" style={{ position: "relative", padding: "9rem 2rem", overflow: "hidden" }}>
        <Image src="/hotel_pool.jpg" alt="Royal Palace Hotel rooftop pool" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(5,5,5,0.78)" }} />
        <div style={{ position: "absolute", top: "2.5rem", left: "2.5rem", width: "60px", height: "60px", borderTop: "1px solid rgba(196,155,91,0.4)", borderLeft: "1px solid rgba(196,155,91,0.4)" }} />
        <div style={{ position: "absolute", bottom: "2.5rem", right: "2.5rem", width: "60px", height: "60px", borderBottom: "1px solid rgba(196,155,91,0.4)", borderRight: "1px solid rgba(196,155,91,0.4)" }} />

        <FadeUp style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <span className="gold-label">Limited Availability</span>
          <Ornament />
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 300, color: "#fff", marginBottom: "1.25rem", lineHeight: 1.15 }}>
            Plan Your <em style={{ color: "#c49b5b" }}>Perfect</em> Stay
          </h2>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", lineHeight: "1.9", marginBottom: "2.75rem", fontWeight: 300, letterSpacing: "0.04em" }}>
            Book directly with us for the finest rates, complimentary amenities, and a truly personalised welcome to Royal Palace.
          </p>
          <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/rooms" id="cta-book-now" className="btn-gold-filled">Reserve Now</Link>
            <Link href="/contact" id="cta-contact" className="btn-gold">Contact Us</Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
