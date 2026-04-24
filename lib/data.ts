// ============================================================
// HOTEL DATA CONFIG — edit this file to update site content
// ============================================================

export const hotelInfo = {
  name: "Royal Palace Hotel",
  tagline: "Where Elegance Meets Comfort",
  description:
    "A landmark of refined hospitality nestled in the heart of the city. Royal Palace Hotel offers an unparalleled experience blending timeless architecture with modern luxury.",
  phone: "+1 (555) 234-5678",
  whatsapp: "+15552345678",
  email: "reservations@royalpalacehotel.com",
  address: "12 Grand Boulevard, Manhattan, New York, NY 10001",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  stars: 5,
};

export type Room = {
  id: string;
  name: string;
  slug: string;
  category: string;
  pricePerNight: number;
  size: number; // sq ft
  maxGuests: number;
  beds: string;
  view: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  badge?: string;
};

export const rooms: Room[] = [
  {
    id: "1",
    slug: "deluxe-king",
    name: "Deluxe King Room",
    category: "Deluxe",
    pricePerNight: 320,
    size: 480,
    maxGuests: 2,
    beds: "1 King Bed",
    view: "City View",
    description:
      "A spacious retreat with city views, premium bedding, and elegant furnishings.",
    longDescription:
      "Immerse yourself in understated luxury. The Deluxe King Room features a plush king-size bed dressed in 500-thread-count Egyptian cotton linens, floor-to-ceiling windows framing the city skyline, and a marble-clad en-suite bathroom with a rain shower and soaking tub. A dedicated workspace and high-speed Wi-Fi ensure seamless productivity, while an in-room espresso machine and curated minibar offer comfort at every hour.",
    image: "/room_deluxe.jpg",
    gallery: ["/room_deluxe.jpg", "/hotel_lobby.jpg", "/hotel_pool.jpg"],
    badge: "Most Popular",
    features: [
      "King-size bed",
      "City view",
      "Rain shower & soaking tub",
      "65″ Smart TV",
      "In-room espresso machine",
      "High-speed Wi-Fi",
      "Curated minibar",
      "24-hour room service",
    ],
  },
  {
    id: "2",
    slug: "junior-suite",
    name: "Junior Suite",
    category: "Suite",
    pricePerNight: 520,
    size: 720,
    maxGuests: 3,
    beds: "1 King Bed",
    view: "Garden & City View",
    description:
      "A refined suite with a separate living area, garden views, and butler service.",
    longDescription:
      "The Junior Suite elevates your stay with a generously proportioned living room, a private dining area, and sweeping garden-meets-skyline vistas. Designed in a warm neutral palette, the suite features custom furniture, original artwork, and a bathroom stocked with L'Occitane amenities. Dedicated butler service ensures every detail of your stay is perfected.",
    image: "/room_junior.jpg",
    gallery: ["/room_junior.jpg", "/hotel_restaurant.jpg", "/hotel_spa.jpg"],
    features: [
      "Separate living room",
      "Garden & city view",
      "Butler service",
      "Walk-in wardrobe",
      "Dual vanity marble bathroom",
      "Nespresso machine",
      "Premium minibar",
      "Priority reservations",
    ],
  },
  {
    id: "3",
    slug: "presidential-suite",
    name: "Presidential Suite",
    category: "Suite",
    pricePerNight: 1200,
    size: 1800,
    maxGuests: 4,
    beds: "1 King Bed + 1 Queen Bed",
    view: "Panoramic City View",
    description:
      "Our crown jewel — a full-floor suite with panoramic views and unrivaled service.",
    longDescription:
      "The Presidential Suite is the pinnacle of Royal Palace hospitality. Spanning the entire top floor, the suite features two elegantly appointed bedrooms, a grand living room, a formal dining room for eight, a fully equipped kitchen, and a private terrace overlooking the city. A dedicated team of a personal butler, chef, and concierge are available around the clock.",
    image: "/room_presidential.jpg",
    gallery: [
      "/room_presidential.jpg",
      "/hotel_lobby.jpg",
      "/hotel_ballroom.jpg",
    ],
    badge: "Exclusive",
    features: [
      "Two bedrooms",
      "Private panoramic terrace",
      "Personal butler, chef & concierge",
      "Formal dining room (seats 8)",
      "Private kitchen",
      "Home cinema system",
      "Jacuzzi & steam room",
      "Complimentary airport transfer",
    ],
  },
  {
    id: "4",
    slug: "classic-double",
    name: "Classic Double Room",
    category: "Classic",
    pricePerNight: 210,
    size: 320,
    maxGuests: 2,
    beds: "2 Double Beds",
    view: "Garden View",
    description:
      "Comfortable and elegantly appointed with twin double beds and garden views.",
    longDescription:
      "Perfect for business travelers and couples, the Classic Double Room offers two comfortable double beds, refined décor, and peaceful garden views. The room includes all the essentials for a restful stay: high-speed Wi-Fi, a spacious work desk, a flat-screen TV, and a well-appointed bathroom with premium toiletries.",
    image: "/hotel_lobby.jpg",
    gallery: ["/hotel_lobby.jpg", "/room_deluxe.jpg", "/hotel_pool.jpg"],
    features: [
      "Two double beds",
      "Garden view",
      "Dedicated work desk",
      "55″ Smart TV",
      "Premium toiletries",
      "High-speed Wi-Fi",
      "In-room safe",
      "Daily housekeeping",
    ],
  },
];

export const amenities = [
  {
    icon: "🏊",
    title: "Rooftop Infinity Pool",
    description: "Open year-round with panoramic city views and poolside service.",
  },
  {
    icon: "🧖",
    title: "Royal Spa & Wellness",
    description:
      "A full-service spa offering massages, facials, sauna, and a hammam.",
  },
  {
    icon: "🍽️",
    title: "Fine Dining Restaurant",
    description: "Award-winning cuisine by our executive chef. Open for breakfast, lunch & dinner.",
  },
  {
    icon: "🏋️",
    title: "Fitness Center",
    description: "State-of-the-art equipment open 24 hours, with personal training available.",
  },
  {
    icon: "🎉",
    title: "Grand Ballroom",
    description: "1,200 m² event space for weddings, galas, and corporate events.",
  },
  {
    icon: "🚗",
    title: "Valet Parking",
    description: "Complimentary valet parking for all in-house guests.",
  },
  {
    icon: "✈️",
    title: "Airport Transfer",
    description: "Private chauffeur service to and from major airports.",
  },
  {
    icon: "🛎️",
    title: "24/7 Concierge",
    description: "Our team is always available to fulfill any request, day or night.",
  },
];

export const galleryImages = [
  { src: "/hotel_hero.jpg", alt: "Hotel Exterior" },
  { src: "/hotel_lobby.jpg", alt: "Grand Lobby" },
  { src: "/room_deluxe.jpg", alt: "Deluxe King Room" },
  { src: "/hotel_pool.jpg", alt: "Rooftop Pool" },
  { src: "/hotel_restaurant.jpg", alt: "Fine Dining" },
  { src: "/hotel_spa.jpg", alt: "Royal Spa" },
  { src: "/room_junior.jpg", alt: "Junior Suite" },
  { src: "/hotel_ballroom.jpg", alt: "Grand Ballroom" },
  { src: "/room_presidential.jpg", alt: "Presidential Suite" },
];

export const testimonials = [
  {
    name: "Alexandra Chen",
    country: "New York, USA",
    rating: 5,
    text: "An absolutely flawless stay. The Presidential Suite exceeded every expectation — the butler service alone was worth every penny. We will be back.",
    initials: "AC",
  },
  {
    name: "James Whitmore",
    country: "London, UK",
    rating: 5,
    text: "I've stayed in luxury hotels across four continents, and Royal Palace stands in a class of its own. The attention to detail is remarkable.",
    initials: "JW",
  },
  {
    name: "Sophie Leclerc",
    country: "Paris, France",
    rating: 5,
    text: "The rooftop pool at sunset is something I'll never forget. The staff went above and beyond at every turn. Truly a 5-star experience.",
    initials: "SL",
  },
];
