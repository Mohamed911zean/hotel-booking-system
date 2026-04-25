"use client";

import { useState } from "react";
import { rooms } from "@/lib/data";
import RoomCard from "@/components/RoomCard";
import { StaggerContainer, StaggerChild, FadeUp } from "@/components/AnimatedElements";

export default function RoomsClient() {
  const categories = ["All", ...Array.from(new Set(rooms.map((r) => r.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Recommended");

  let filteredRooms = rooms;
  if (activeCategory !== "All") {
    filteredRooms = rooms.filter((r) => r.category === activeCategory);
  }

  if (sortOrder === "Price: Low to High") {
    filteredRooms = [...filteredRooms].sort((a, b) => a.pricePerNight - b.pricePerNight);
  } else if (sortOrder === "Price: High to Low") {
    filteredRooms = [...filteredRooms].sort((a, b) => b.pricePerNight - a.pricePerNight);
  } else if (sortOrder === "Room Size") {
    filteredRooms = [...filteredRooms].sort((a, b) => parseInt(b.size) - parseInt(a.size));
  }

  return (
    <>
      <style>{`
        .filter-pill:hover, .filter-pill.active {
          border-color: #c49b5b;
          color: #c49b5b;
        }
        .rooms-select {
          padding: 0.45rem 0.875rem;
          border: 1px solid rgba(196,155,91,0.25);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 0.72rem;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.06em;
          cursor: pointer;
          outline: none;
        }
        .rooms-select option { background: #111; }
      `}</style>

      {/* Page Header */}
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
        {/* Corner ornaments */}
        <div style={{ position: "absolute", top: "6rem", left: "2rem", width: "50px", height: "50px", borderTop: "1px solid rgba(196,155,91,0.3)", borderLeft: "1px solid rgba(196,155,91,0.3)" }} />
        <div style={{ position: "absolute", top: "6rem", right: "2rem", width: "50px", height: "50px", borderTop: "1px solid rgba(196,155,91,0.3)", borderRight: "1px solid rgba(196,155,91,0.3)" }} />

        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c49b5b" }}>
          Accommodations
        </span>
        <div style={{ width: "48px", height: "1px", background: "#c49b5b", margin: "1rem auto", opacity: 0.5 }} />
        <h1
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "#ffffff",
            marginBottom: "1.25rem",
            letterSpacing: "0.02em",
          }}
        >
          Rooms &amp; <em style={{ color: "#c49b5b" }}>Suites</em>
        </h1>
        <p
          style={{
            fontFamily: "'Montserrat',sans-serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
            maxWidth: "440px",
            margin: "0 auto",
            lineHeight: "1.9",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          Every room is a sanctuary of comfort, designed with meticulous attention
          to detail and curated for your complete enjoyment.
        </p>
      </div>

      {/* Filter bar */}
      <div
        style={{
          backgroundColor: "#0a0a0a",
          borderBottom: "1px solid rgba(196,155,91,0.1)",
          padding: "1.25rem 2rem",
          display: "flex",
          justifyContent: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`filter-pill${activeCategory === cat ? " active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Room Grid */}
      <div style={{ backgroundColor: "#0a0a0a", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "1.5rem 2rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>
            Showing <span style={{ color: "#c49b5b" }}>{filteredRooms.length}</span> rooms
          </p>
          <select 
            className="rooms-select" 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="Recommended">Sort by: Recommended</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Room Size">Room Size</option>
          </select>
        </div>
        
        <main style={{ maxWidth: "1320px", margin: "0 auto", padding: "2.5rem 2rem 7rem" }}>
          {filteredRooms.length > 0 ? (
            <StaggerContainer 
              key={`${activeCategory}-${sortOrder}`} 
              stagger={0.1} 
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))", gap: "1.5rem" }}
            >
              {filteredRooms.map((room) => (
                <StaggerChild key={room.id}>
                  <RoomCard room={room} />
                </StaggerChild>
              ))}
            </StaggerContainer>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <p style={{ fontFamily: "'Montserrat',sans-serif", color: "rgba(255,255,255,0.5)" }}>
                No rooms found matching your criteria.
              </p>
              <button 
                onClick={() => { setActiveCategory("All"); setSortOrder("Recommended"); }}
                className="btn-gold" 
                style={{ marginTop: "1.5rem" }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
