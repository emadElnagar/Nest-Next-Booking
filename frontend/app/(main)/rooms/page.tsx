"use client";

import Hero from "@/components/main/hero";
import SelectFilter from "@/components/main/selectFilter";
import { useState } from "react";
import RoomCard from "@/components/cards/roomCard";
import { BedDouble, ChevronDown, SlidersHorizontal } from "lucide-react";
import FilterTabs from "@/components/main/filterTabs";
import { UUID } from "crypto";

const sortOptions = [
  {
    label: "Recommended",
    value: "recommended",
  },
  {
    label: "Price: Low to High",
    value: "Price: Low to High",
  },
  {
    label: "Price: High to Low",
    value: "Price: High to Low",
  },
];

type Room = {
  id: UUID;
  name: string;
  type: string;
  image: string;
  description: string;
  price: number;
  guests: number;
  bedType: string;
  amenities: string[];
};

const rooms: Room[] = [
  {
    id: "00000000-0000-4000-8000-000000000001",
    name: "Deluxe Sea View",
    type: "Deluxe",
    image: "/images/rooms/deluxe-sea-view.jpg",
    description:
      "A spacious room with a beautiful sea view, elegant interiors, and everything you need for a relaxing stay.",
    price: 180,
    guests: 2,
    bedType: "King Bed",
    amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Sea View"],
  },
  {
    id: "00000000-0000-4000-8000-000000000002",
    name: "Executive Suite",
    type: "Suite",
    image: "/images/rooms/executive-suite.jpg",
    description:
      "Experience refined comfort in our elegant executive suite with a separate living area.",
    price: 280,
    guests: 3,
    bedType: "Queen Bed",
    amenities: ["Free Wi-Fi", "Mini Bar", "Room Service", "Balcony"],
  },
  {
    id: "00000000-0000-4000-8000-000000000003",
    name: "Luxury King Room",
    type: "Luxury",
    image: "/images/rooms/luxury-king.jpg",
    description:
      "A sophisticated king room combining modern luxury with a warm and comfortable atmosphere.",
    price: 220,
    guests: 2,
    bedType: "King Bed",
    amenities: ["Free Wi-Fi", "Air Conditioning", "TV", "Bathtub"],
  },
  {
    id: "00000000-0000-4000-8000-000000000004",
    name: "Family Room",
    type: "Family",
    image: "/images/rooms/family-room.jpg",
    description:
      "A comfortable and spacious room designed for families looking for a convenient stay.",
    price: 240,
    guests: 4,
    bedType: "Double Bed",
    amenities: ["Free Wi-Fi", "TV", "Mini Bar", "Breakfast"],
  },
  {
    id: "00000000-0000-4000-8000-000000000005",
    name: "Premium Sea View",
    type: "Premium",
    image: "/images/rooms/premium-sea-view.jpg",
    description:
      "Wake up to breathtaking sea views from this beautifully designed premium room.",
    price: 260,
    guests: 2,
    bedType: "King Bed",
    amenities: ["Sea View", "Balcony", "Free Wi-Fi", "Room Service"],
  },
  {
    id: "00000000-0000-4000-8000-000000000006",
    name: "Presidential Suite",
    type: "Suite",
    image: "/images/rooms/presidential-suite.jpg",
    description:
      "Our most exclusive accommodation, offering exceptional space, privacy, and luxury.",
    price: 450,
    guests: 4,
    bedType: "Twin Beds",
    amenities: ["Sea View", "Bathtub", "Mini Bar", "Room Service"],
  },
];

export default function RoomsPage() {
  const [activeFilter, setActiveFilter] = useState("All Rooms");
  const [sortBy, setSortBy] = useState("Recommended");

  const filteredRooms =
    activeFilter === "All Rooms"
      ? rooms
      : rooms.filter((room) => room.type === activeFilter);

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    return rooms.indexOf(a) - rooms.indexOf(b);
  });

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <Hero
        heroImage="/static/images/rooms/rooms-hero.png"
        heroSubtitle="Stay With Us"
        heroTitle="Find Your Perfect Room"
        heroDescription="Discover elegant rooms and suites designed to make your stay comfortable, peaceful, and unforgettable."
      />

      {/* Rooms */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#b08a20]">
              Our Accommodation
            </p>

            <h2 className="font-serif text-3xl font-semibold text-gray-900 md:text-4xl">
              Rooms & Suites
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Choose from our collection of thoughtfully designed rooms and
              suites.
            </p>
          </div>

          <div className="relative">
            <SelectFilter
              value={sortBy}
              onChange={setSortBy}
              options={sortOptions}
            />

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-col gap-4 border-b border-gray-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <FilterTabs
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sortedRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {sortedRooms.length === 0 && (
          <div className="rounded-2xl bg-white py-20 text-center">
            <BedDouble className="mx-auto text-gray-300" size={42} />
            <h3 className="mt-4 font-serif text-2xl font-semibold text-gray-900">
              No rooms found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try selecting a different room type.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
