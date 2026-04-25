"use client";

import { useState } from "react";
import Link from "next/link";
import { rooms } from "@/lib/data";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import RoomGallerySwiper from "@/components/RoomGallerySwiper";

const ease = [0.22, 1, 0.36, 1];

export default function RoomDetailClient() {
  const params = useParams();
  const slug = params?.slug as string;
  const room = rooms.find((r) => r.slug === slug);

  // Get local date string for min date (YYYY-MM-DD)
  const today = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!room) return notFound();

  const nights =
    checkIn && checkOut
      ? Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
      : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500);
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Montserrat',sans-serif",
    fontSize: "0.6rem",
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#c49b5b",
    marginBottom: "0.4rem",
  };

  return (
    <>
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ backgroundColor: "#080808", borderBottom: "1px solid rgba(196,155,91,0.12)", padding: "5.5rem 2rem 1.25rem" }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <nav style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ color: "#c49b5b", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(196,155,91,0.3)" }}>›</span>
            <Link href="/rooms" style={{ color: "#c49b5b", textDecoration: "none" }}>Rooms</Link>
            <span style={{ color: "rgba(196,155,91,0.3)" }}>›</span>
            <span>{room.name}</span>
          </nav>
        </div>
      </motion.div>

      <div style={{ backgroundColor: "#0a0a0a" }}>
        <main style={{ maxWidth: "1320px", margin: "0 auto", padding: "3rem 2rem 7rem" }}>
          <div className="room-detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "4rem", alignItems: "start" }}>

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease }}
            >
              {/* Swiper Gallery */}
              <RoomGallerySwiper gallery={room.gallery} name={room.name} badge={room.badge} />

              {/* Room title */}
              <div style={{ width: "40px", height: "1px", background: "#c49b5b", marginBottom: "1rem", opacity: 0.6 }} />
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#fff", marginBottom: "1.5rem", letterSpacing: "0.02em" }}>{room.name}</h1>

              {/* Specs */}
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(196,155,91,0.12)" }}>
                {[
                  { label: "Size", val: `${room.size} sq ft` },
                  { label: "Guests", val: `Up to ${room.maxGuests}` },
                  { label: "Bed", val: room.beds },
                  { label: "View", val: room.view },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(196,155,91,0.55)", marginBottom: "3px" }}>{s.label}</div>
                    <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{s.val}</div>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 600, color: "#c49b5b", marginBottom: "1rem" }}>About This Room</h2>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.83rem", color: "rgba(255,255,255,0.45)", lineHeight: "1.9", marginBottom: "2.5rem", fontWeight: 300 }}>{room.longDescription}</p>

              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 600, color: "#c49b5b", marginBottom: "1.25rem" }}>Room Features</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: "0.75rem" }}>
                {room.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.5 }}
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                  >
                    <span style={{ width: "16px", height: "16px", border: "1px solid #c49b5b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", color: "#c49b5b", flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Booking card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease }}
              style={{ position: "sticky", top: "100px", backgroundColor: "#0d0d0d", border: "1px solid rgba(196,155,91,0.2)", overflow: "hidden" }}
            >
              <div style={{ padding: "1.75rem 1.75rem 1.25rem", borderBottom: "1px solid rgba(196,155,91,0.12)", background: "#111" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", marginBottom: "0.25rem" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.5rem", fontWeight: 600, color: "#c49b5b", lineHeight: 1 }}>${room.pricePerNight}</span>
                  <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>/ NIGHT</span>
                </div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>Inclusive of taxes · Free cancellation</div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ padding: "2.5rem", textAlign: "center" }}
                >
                  <div style={{ width: "56px", height: "56px", border: "1px solid #c49b5b", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "1.5rem", color: "#c49b5b" }}>✓</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>Reservation Confirmed</h3>
                  <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", lineHeight: "1.8", marginBottom: "1.5rem", fontWeight: 300 }}>
                    Your booking for the <span style={{ color: "#c49b5b" }}>{room.name}</span> has been received.
                  </p>
                  <button onClick={() => { setSubmitted(false); setCheckIn(""); setCheckOut(""); setGuests(1); }} className="btn-gold" style={{ width: "100%" }}>
                    New Reservation
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  <div>
                    <label style={labelStyle}>Check-in Date</label>
                    <input type="date" required min={today} value={checkIn} onChange={e => { setCheckIn(e.target.value); if (checkOut && e.target.value >= checkOut) setCheckOut(""); }} className="booking-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Check-out Date</label>
                    <input type="date" required min={checkIn ? new Date(new Date(checkIn).getTime() + 86400000).toISOString().split("T")[0] : today} value={checkOut} onChange={e => setCheckOut(e.target.value)} className="booking-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Guests</label>
                    <select value={guests} onChange={e => setGuests(Number(e.target.value))} className="booking-input">
                      {Array.from({ length: room.maxGuests }, (_, i) => i + 1).map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input type="text" required placeholder="Your full name" className="booking-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" required placeholder="your@email.com" className="booking-input" />
                  </div>

                  {nights > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      style={{ border: "1px solid rgba(196,155,91,0.15)", padding: "1rem", overflow: "hidden" }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.4)" }}>${room.pricePerNight} × {nights} nights</span>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.4)" }}>${(room.pricePerNight * nights).toLocaleString()}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(196,155,91,0.12)", paddingTop: "0.5rem", marginTop: "0.5rem" }}>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.68rem", color: "#c49b5b" }}>Total</span>
                        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", fontWeight: 600, color: "#c49b5b" }}>${(room.pricePerNight * nights).toLocaleString()}</span>
                      </div>
                    </motion.div>
                  )}

                  <button type="submit" disabled={submitting || !checkIn || !checkOut || nights <= 0} className="btn-gold-filled" style={{ width: "100%", border: "none", fontFamily: "'Montserrat',sans-serif", opacity: (submitting || !checkIn || !checkOut || nights <= 0) ? 0.5 : 1, cursor: (submitting || !checkIn || !checkOut || nights <= 0) ? "not-allowed" : "pointer" }}>
                    {submitting ? "Processing..." : "Confirm Reservation"}
                  </button>
                  <p style={{ fontFamily: "'Montserrat',sans-serif", textAlign: "center", fontSize: "0.62rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>
                    🔒 Secure booking · No payment required now
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
