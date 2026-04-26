import Image from "next/image";
import Link from "next/link";
import { rooms, amenities } from "@/lib/data";
import type { Metadata } from "next";
import RoomCard from "@/components/RoomCard";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import GallerySwiper from "@/components/GallerySwiper";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import ParallaxMask from "@/components/ParallaxMask";
import AmenitiesAccordion from "@/components/AmenitiesAccordion";
import { 
  FadeUp, 
  FadeIn, 
  SlideIn, 
  StaggerContainer, 
  StaggerChild, 
  GoldLineReveal,
  SplitTextReveal,
  HighlightText
} from "@/components/AnimatedElements";

export const metadata: Metadata = {
  title: "Royal Palace Hotel — Manhattan's Premier Luxury Hotel",
  description: "Experience five-star luxury at Royal Palace Hotel, Manhattan.",
};

function Ornament({ align = "left" }: { align?: "left" | "center" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        gap: "0.85rem",
        marginTop: "1rem",
      }}
    >
      <span
        style={{
          display: "block",
          width: "56px",
          height: "1px",
          background: "linear-gradient(90deg, rgba(196,155,91,0.08), rgba(196,155,91,0.7))",
        }}
      />
      <span
        style={{
          color: "#c49b5b",
          fontSize: "0.7rem",
          lineHeight: 1,
          opacity: 0.9,
        }}
      >
        ✦
      </span>
      <span
        style={{
          display: "block",
          width: "56px",
          height: "1px",
          background: "linear-gradient(90deg, rgba(196,155,91,0.7), rgba(196,155,91,0.08))",
        }}
      />
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

     

      {/* ── INTRO / HIGHLIGHT TEXT ───── */}
      <section style={{ padding: "8rem 2rem", backgroundColor: "#0a0a0a", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeUp>
            <span className="gold-label">The Vision</span>
            <Ornament />
          </FadeUp>
          <div style={{ marginTop: "2rem", fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.2, fontWeight: 300 }}>
            <HighlightText 
              text="This isn’t just about luxury. It’s about identity. Progress. Getting unstuck. You’re not just looking for a place to stay. You’re looking for alignment. That’s what we help you find."
              highlightColor="#c49b5b"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURED ROOMS ───────────── */}
      <section
  id="featured-rooms"
  style={{
    padding: "clamp(5rem, 8vw, 7rem) 1.25rem",
    background:
      "radial-gradient(circle at top left, rgba(196,155,91,0.08), transparent 28%), #080808",
  }}
>
  <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
        alignItems: "end",
        marginBottom: "4rem",
      }}
    >
      <div style={{ maxWidth: "720px" }}>
        <FadeUp>
          <span className="gold-label">Accommodations</span>
          <Ornament />
        </FadeUp>

        <SplitTextReveal
          text="Featured Rooms & Suites"
          className="section-title"
          style={{
            fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)",
            fontWeight: 400,
            lineHeight: 1.02,
            marginTop: "1.5rem",
            marginBottom: "1.25rem",
            maxWidth: "11ch",
          }}
        />

        <FadeUp delay={0.2}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.92rem",
              color: "rgba(255,255,255,0.58)",
              maxWidth: "560px",
              lineHeight: "1.9",
              fontWeight: 300,
            }}
          >
            Discover a collection of refined rooms and signature suites, each shaped
            with quiet elegance, tailored comfort, and the thoughtful details expected
            from a truly distinguished stay.
          </p>
        </FadeUp>
      </div>

      <FadeUp delay={0.25}>
        <div
          style={{
            justifySelf: "stretch",
            border: "1px solid rgba(196,155,91,0.18)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
            padding: "1.5rem",
            display: "grid",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "0.75rem",
            }}
          >
            {[
              { value: "150+", label: "Luxury Rooms" },
              { value: "24/7", label: "Concierge" },
              { value: "5-Star", label: "Experience" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "0.85rem 0.75rem",
                  border: "1px solid rgba(196,155,91,0.14)",
                  background: "rgba(255,255,255,0.02)",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.8rem",
                    lineHeight: 1,
                    color: "#c49b5b",
                    fontWeight: 600,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    marginTop: "0.45rem",
                    fontSize: "0.62rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.42)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.42)",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Spacious interiors, elevated materials, and a seamless booking path for guests
            who value comfort without compromise.
          </p>
        </div>
      </FadeUp>
    </div>

    <StaggerContainer
      stagger={0.12}
      delay={0.1}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {featuredRooms.map((room) => (
        <StaggerChild key={room.id}>
          <RoomCard room={room} />
        </StaggerChild>
      ))}
    </StaggerContainer>

    <FadeUp
      delay={0.3}
      style={{
        textAlign: "center",
        marginTop: "3.75rem",
      }}
    >
      <Link
        href="/rooms"
        id="view-all-rooms"
        className="btn-gold"
        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
      >
        View All Rooms
      </Link>
    </FadeUp>
  </div>
</section>

      {/* ── ABOUT ────────────────────── */}
      <section
  id="about"
  style={{
    padding: "clamp(5rem, 8vw, 7rem) 1.25rem",
    background:
      "radial-gradient(circle at top left, rgba(196,155,91,0.08), transparent 30%), #0d0d0d",
    overflow: "hidden",
  }}
>
  <div
    className="about-grid"
    style={{
      maxWidth: "1320px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "clamp(2.5rem, 6vw, 5rem)",
      alignItems: "center",
    }}
  >
    <SlideIn direction="left">
      <div style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "4 / 5",
            border: "1px solid rgba(196,155,91,0.18)",
            backgroundColor: "#111111",
          }}
        >
          <Image
            src="/hotel_lobby.jpg"
            alt="Royal Palace Hotel grand lobby"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
            style={{ objectFit: "cover" }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.38))",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              width: "56px",
              height: "56px",
              borderTop: "1px solid rgba(196,155,91,0.8)",
              borderLeft: "1px solid rgba(196,155,91,0.8)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              width: "56px",
              height: "56px",
              borderBottom: "1px solid rgba(196,155,91,0.8)",
              borderRight: "1px solid rgba(196,155,91,0.8)",
            }}
          />
        </div>

        <div
          style={{
            marginTop: "-2.25rem",
            marginLeft: "auto",
            width: "min(100%, 260px)",
            position: "relative",
            zIndex: 2,
            background: "linear-gradient(180deg, #d4b47a, #c49b5b)",
            padding: "1.2rem 1.35rem",
            textAlign: "center",
            boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 600,
              color: "#050505",
              lineHeight: 1,
            }}
          >
            25
          </div>
          <div
            style={{
              marginTop: "0.45rem",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#111111",
              lineHeight: 1.7,
            }}
          >
            Years of Excellence
          </div>
        </div>
      </div>
    </SlideIn>

    <div style={{ overflow: "hidden" }}>
      <FadeUp>
        <span className="gold-label">Our Story</span>
        <GoldLineReveal delay={0.2} />
      </FadeUp>

      <SplitTextReveal
        text="A Legacy of Quiet Prestige Since 1998"
        delay={0.1}
        className="section-title"
        style={{
          fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
          fontWeight: 400,
          marginBottom: "1.4rem",
          lineHeight: 1.08,
          maxWidth: "11ch",
        }}
      />

      <SlideIn direction="right" delay={0.2}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.58)",
            lineHeight: "1.95",
            marginBottom: "1.15rem",
            fontWeight: 300,
            maxWidth: "58ch",
          }}
        >
          In the heart of Manhattan, Royal Palace Hotel has spent more than two
          decades refining the art of hospitality through elegant spaces,
          intuitive service, and a deeply personal sense of welcome.
        </p>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.58)",
            lineHeight: "1.95",
            marginBottom: "2rem",
            fontWeight: 300,
            maxWidth: "58ch",
          }}
        >
          Every suite, dining room, and guest interaction is shaped to feel
          seamless, calm, and considered, creating a stay that is memorable for
          its precision as much as its beauty.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1px",
            marginBottom: "2rem",
            background: "rgba(196,155,91,0.14)",
            border: "1px solid rgba(196,155,91,0.14)",
          }}
        >
          {[
            { num: "150+", label: "Luxury Rooms" },
            { num: "8", label: "Dining Venues" },
            { num: "25k", label: "Guests per Year" },
            { num: "5 ★", label: "Forbes Rating" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "1.25rem 1rem",
                backgroundColor: "#0d0d0d",
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                  fontWeight: 600,
                  color: "#c49b5b",
                  lineHeight: 1,
                }}
              >
                {item.num}
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.64rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.38)",
                  marginTop: "0.45rem",
                  lineHeight: 1.6,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.9rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Link
            href="/rooms"
            className="btn-gold"
            id="about-book"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Book Your Stay
          </Link>

          <span
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.34)",
            }}
          >
            Five-star hospitality, tailored to every stay
          </span>
        </div>
      </SlideIn>
    </div>
  </div>
</section>

      {/* ── AMENITIES ────────────────── */}
     <section
  id="amenities"
  style={{
    padding: "clamp(5rem, 8vw, 7rem) 1.25rem",
    background:
      "radial-gradient(circle at top center, rgba(196,155,91,0.08), transparent 30%), #080808",
  }}
>
  <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
      <FadeUp>
        <span className="gold-label">World-Class Facilities</span>
        <Ornament />
      </FadeUp>

      <SplitTextReveal
        text="Hotel Amenities"
        className="section-title"
        style={{
          fontSize: "clamp(2.3rem, 4.5vw, 3.8rem)",
          fontWeight: 400,
          lineHeight: 1.05,
          marginBottom: "1rem",
        }}
      />

      <FadeUp delay={0.2}>
        <p
          style={{
            maxWidth: "620px",
            margin: "0 auto",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.92rem",
            color: "rgba(255,255,255,0.52)",
            lineHeight: "1.9",
            fontWeight: 300,
          }}
        >
          Wellness, dining, and private guest experiences presented in a cleaner,
          more premium interactive layout across desktop and mobile.
        </p>
      </FadeUp>
    </div>

    <FadeIn delay={0.2}>
      <AmenitiesAccordion />
    </FadeIn>
  </div>
</section>

      {/* ── GALLERY SWIPER ───────────── */}
      <section id="gallery-preview" style={{ padding: "7rem 2rem", backgroundColor: "#0a0a0a" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <FadeUp>
              <span className="gold-label">Photo Gallery</span>
              <Ornament />
            </FadeUp>
            <SplitTextReveal 
              text="Explore the Hotel"
              className="section-title"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 300 }}
            />
          </div>
          <FadeIn delay={0.2}>
            <GallerySwiper />
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIALS SWIPER ──────── */}
      <section id="testimonials" style={{ padding: "7rem 2rem", backgroundColor: "#0d0d0d" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <FadeUp>
              <span className="gold-label">Guest Reviews</span>
              <Ornament />
            </FadeUp>
            <SplitTextReveal 
              text="What Our Guests Say"
              className="section-title"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 300 }}
            />
          </div>
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