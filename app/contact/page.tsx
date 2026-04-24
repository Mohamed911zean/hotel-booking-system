"use client";

import { useState } from "react";
import { hotelInfo } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1400);
  };

  const whatsappUrl = `https://wa.me/${hotelInfo.whatsapp}?text=Hello%20Royal%20Palace%20Hotel%2C%20I%20would%20like%20to%20inquire%20about%20a%20reservation.`;

  return (
    <>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#080808",
          borderBottom: "1px solid rgba(196,155,91,0.15)",
          padding: "9rem 2rem 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "6rem", left: "2rem", width: "50px", height: "50px", borderTop: "1px solid rgba(196,155,91,0.3)", borderLeft: "1px solid rgba(196,155,91,0.3)" }} />
        <div style={{ position: "absolute", top: "6rem", right: "2rem", width: "50px", height: "50px", borderTop: "1px solid rgba(196,155,91,0.3)", borderRight: "1px solid rgba(196,155,91,0.3)" }} />

        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c49b5b" }}>Get In Touch</span>
        <div style={{ width: "48px", height: "1px", background: "#c49b5b", margin: "1rem auto", opacity: 0.5 }} />
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#ffffff", marginBottom: "1.25rem", letterSpacing: "0.02em" }}>
          Contact <em style={{ color: "#c49b5b" }}>Us</em>
        </h1>
        <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", maxWidth: "420px", margin: "0 auto", lineHeight: "1.9", fontWeight: 300 }}>
          Our team is always at your service. Reach out for reservations, event planning, or any queries about your stay.
        </p>
      </div>

      <div style={{ backgroundColor: "#0a0a0a" }}>
      <main
        className="contact-grid"
        style={{ maxWidth: "1320px", margin: "0 auto", padding: "5rem 2rem 7rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start", backgroundColor: "#0a0a0a" }}
      >
        {/* Left: Info */}
        <div>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c49b5b" }}>Our Information</span>
          <div style={{ width: "32px", height: "1px", background: "#c49b5b", margin: "0.75rem 0 2rem", opacity: 0.5 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", marginBottom: "2.5rem", background: "rgba(196,155,91,0.1)" }}>
            {[
              { icon: "📍", title: "Address", content: hotelInfo.address, sub: "Midtown Manhattan" },
              { icon: "📞", title: "Phone", content: hotelInfo.phone, sub: "Available 24 / 7" },
              { icon: "✉️", title: "Email", content: hotelInfo.email, sub: "Reply within 2 hours" },
              { icon: "🕐", title: "Hours", content: `Check-in: ${hotelInfo.checkIn} · Check-out: ${hotelInfo.checkOut}`, sub: "Front desk open 24 hours" },
            ].map(item => (
              <div key={item.title} className="info-card">
                <div style={{ width: "44px", height: "44px", border: "1px solid rgba(196,155,91,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0, backgroundColor: "#0d0d0d" }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(196,155,91,0.5)", marginBottom: "3px" }}>{item.title}</div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", marginBottom: "2px" }}>{item.content}</div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.3)" }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" id="whatsapp-contact" className="whatsapp-btn" style={{ marginBottom: "2rem" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>

          {/* Map placeholder */}
          <div style={{ border: "1px solid rgba(196,155,91,0.2)", height: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", backgroundColor: "#0d0d0d" }}>
            <span style={{ fontSize: "1.75rem", opacity: 0.6 }}>📍</span>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", color: "rgba(255,255,255,0.6)" }}>12 Grand Boulevard, Manhattan</p>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>New York, NY 10001</p>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.62rem", color: "#c49b5b", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginTop: "0.25rem" }}>
              View on Map →
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c49b5b" }}>Send a Message</span>
          <div style={{ width: "32px", height: "1px", background: "#c49b5b", margin: "0.75rem 0 2rem", opacity: 0.5 }} />

          {submitted ? (
            <div style={{ padding: "3rem 2rem", textAlign: "center", border: "1px solid rgba(196,155,91,0.25)", backgroundColor: "#0d0d0d" }}>
              <div style={{ width: "56px", height: "56px", border: "1px solid #c49b5b", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "1.5rem", color: "#c49b5b" }}>✓</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.75rem" }}>Message Received</h3>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: "1.8", marginBottom: "1.5rem", fontWeight: 300 }}>
                Thank you, <span style={{ color: "#c49b5b" }}>{form.name}</span>. We will respond to <span style={{ color: "#c49b5b" }}>{form.email}</span> within 2 hours.
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" }); }} className="btn-gold" style={{ width: "100%", border: "none" }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="contact-name-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label htmlFor="contact-name" className="form-label">Full Name *</label>
                  <input id="contact-name" name="name" type="text" required placeholder="John Smith" value={form.name} onChange={handleChange} className="form-input" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="form-label">Email *</label>
                  <input id="contact-email" name="email" type="email" required placeholder="john@email.com" value={form.email} onChange={handleChange} className="form-input" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-phone" className="form-label">Phone</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} className="form-input" />
              </div>

              <div>
                <label htmlFor="contact-subject" className="form-label">Subject *</label>
                <select id="contact-subject" name="subject" value={form.subject} onChange={handleChange} className="form-input" style={{ backgroundColor: "#0d0d0d", cursor: "pointer" }}>
                  {["General Inquiry", "Room Reservation", "Event Planning", "Dining Reservation", "Spa & Wellness", "Feedback"].map(o => (
                    <option key={o} style={{ background: "#111" }}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="form-label">Message *</label>
                <textarea id="contact-message" name="message" required rows={5} placeholder="How may we assist you?" value={form.message} onChange={handleChange} className="form-input" style={{ resize: "vertical", lineHeight: "1.7" }} />
              </div>

              <button type="submit" id="contact-submit" disabled={submitting} className="btn-gold-filled" style={{ border: "none", fontFamily: "'Montserrat',sans-serif", opacity: submitting ? 0.6 : 1, cursor: submitting ? "not-allowed" : "pointer" }}>
                {submitting ? "Sending..." : "Send Message"}
              </button>

              <p style={{ fontFamily: "'Montserrat',sans-serif", textAlign: "center", fontSize: "0.62rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>
                🔒 Your information is secure and will never be shared.
              </p>
            </form>
          )}
        </div>
      </main>
      </div>
    </>
  );
}
