import Image from "next/image";
import Link from "next/link";
import { Room } from "@/lib/data";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="room-card group">
      {/* Image */}
      <div className="room-img" style={{ position: "relative", height: "300px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)" }} className="group-hover:scale-110">
          <Image src={room.image} alt={room.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
        </div>

        {/* Dark gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />

        {/* Badge */}
        {room.badge && (
          <span
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              backgroundColor: "#c49b5b",
              color: "#000",
              fontFamily: "'Montserrat',sans-serif",
              fontSize: "0.55rem",
              fontWeight: 700,
              padding: "0.3rem 0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              zIndex: 1,
            }}
          >
            {room.badge}
          </span>
        )}

        {/* Price overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            textAlign: "right",
          }}
        >
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.75rem", fontWeight: 600, color: "#c49b5b", lineHeight: 1 }}>
            ${room.pricePerNight}
          </div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
            per night
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Thin gold rule */}
        <div style={{ width: "32px", height: "1px", background: "#c49b5b", marginBottom: "1rem", opacity: 0.6 }} />

        <h3
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "0.5rem",
            letterSpacing: "0.02em",
          }}
        >
          {room.name}
        </h3>

        <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: "1.8", marginBottom: "1.5rem", flex: 1, fontWeight: 300 }}>
          {room.description}
        </p>

        {/* Room meta */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            marginBottom: "1.5rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid rgba(196,155,91,0.15)",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "◻", label: `${room.size} sq ft` },
            { icon: "◆", label: `${room.maxGuests} guests` },
            { icon: "◈", label: room.beds },
          ].map((d) => (
            <div key={d.label} style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span style={{ fontSize: "0.45rem", color: "#c49b5b" }}>{d.icon}</span>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>{d.label}</span>
            </div>
          ))}
        </div>

        <Link href={`/rooms/${room.slug}`} className="btn-gold" style={{ textAlign: "center", display: "block" }}>
          View Details
        </Link>
      </div>
    </div>
  );
}
