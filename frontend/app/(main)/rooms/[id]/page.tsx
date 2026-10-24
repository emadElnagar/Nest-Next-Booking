"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  Star,
  Users,
  Waves,
  Wifi,
  Wind,
  Tv,
  GlassWater,
  Sparkles,
} from "lucide-react";

const rooms = [
  {
    id: "1",
    roomNumber: "101",
    name: "Deluxe Sea View",
    type: "Deluxe",
    description:
      "Experience a relaxing escape in our Deluxe Sea View room, where elegant interiors meet beautiful coastal scenery. Thoughtfully designed with refined finishes, comfortable furnishings, and modern essentials, it offers the perfect setting for a peaceful stay.",
    price: 180,
    capacity: 2,
    adults: 2,
    children: 1,
    bedType: "King Bed",
    images: [
      "/images/rooms/deluxe-sea-view.jpg",
      "/images/rooms/room-interior-2.jpg",
      "/images/rooms/room-bathroom.jpg",
      "/images/rooms/room-view.jpg",
    ],
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "TV",
      "Mini Bar",
      "Room Service",
      "Breakfast",
      "Sea View",
      "Balcony",
      "Bathtub",
    ],
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: "2",
    roomNumber: "201",
    name: "Luxury King Room",
    type: "Luxury",
    description:
      "Discover understated elegance in a beautifully appointed room featuring sophisticated furnishings, a comfortable king bed, and thoughtful details for a memorable stay.",
    price: 240,
    capacity: 2,
    adults: 2,
    children: 0,
    bedType: "King Bed",
    images: [
      "/images/rooms/luxury-king.jpg",
      "/images/rooms/room-interior-2.jpg",
      "/images/rooms/room-bathroom.jpg",
      "/images/rooms/room-view.jpg",
    ],
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "TV",
      "Mini Bar",
      "Room Service",
      "Breakfast",
      "Balcony",
    ],
    rating: 4.8,
    reviewCount: 96,
  },
  {
    id: "3",
    roomNumber: "301",
    name: "Executive Suite",
    type: "Suite",
    description:
      "Enjoy extra space and an elevated level of comfort in our Executive Suite. Elegant design and carefully selected amenities create a welcoming retreat for your next getaway.",
    price: 320,
    capacity: 4,
    adults: 2,
    children: 2,
    bedType: "King Bed",
    images: [
      "/images/rooms/executive-suite.jpg",
      "/images/rooms/room-interior-2.jpg",
      "/images/rooms/room-bathroom.jpg",
      "/images/rooms/room-view.jpg",
    ],
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "TV",
      "Mini Bar",
      "Room Service",
      "Breakfast",
      "Sea View",
      "Balcony",
      "Bathtub",
    ],
    rating: 5.0,
    reviewCount: 74,
  },
];

const amenityIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  "Free Wi-Fi": Wifi,
  "Air Conditioning": Wind,
  TV: Tv,
  "Mini Bar": GlassWater,
  "Room Service": Coffee,
  Breakfast: Coffee,
  "Sea View": Waves,
  Balcony: Sparkles,
  Bathtub: Bath,
};

export default function RoomDetailsPage() {
  const params = useParams<{ id: string }>();
  const room = rooms.find((item) => item.id === params.id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [saved, setSaved] = useState(false);

  if (!room) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f8f6f2] px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b08a35]">
            Room Not Found
          </p>
          <h1 className="mt-4 font-serif text-3xl text-gray-900">
            This room is unavailable.
          </h1>
          <p className="mt-3 text-gray-500">
            The room may have been removed or the link may be incorrect.
          </p>
          <Link
            href="/main/rooms"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#172a35] px-6 py-3 font-semibold text-white transition hover:bg-[#c5a45b] hover:text-[#172a35]"
          >
            <ArrowLeft size={18} />
            Browse All Rooms
          </Link>
        </div>
      </main>
    );
  }

  const nights =
    checkIn && checkOut && new Date(checkOut) > new Date(checkIn)
      ? Math.ceil(
          (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
            (1000 * 60 * 60 * 24),
        )
      : 0;

  const totalPrice = nights * room.price;

  const today = new Date().toISOString().split("T")[0];

  const handleBooking = () => {
    const query = new URLSearchParams({
      roomId: room.id,
      ...(checkIn && { checkIn }),
      ...(checkOut && { checkOut }),
      adults: String(adults),
      children: String(children),
    });

    // eslint-disable-next-line react-hooks/immutability
    window.location.href = `/main/bookings/new?${query.toString()}`;
  };

  const changeImage = (direction: number) => {
    setSelectedImage(
      (current) =>
        (current + direction + room.images.length) % room.images.length,
    );
  };

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Link
          href="/main/rooms"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#a98632]"
        >
          <ArrowLeft size={16} />
          Back to all rooms
        </Link>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#f0e8d3] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#947322]">
                {room.type}
              </span>

              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <Star size={15} className="fill-[#c5a45b] text-[#c5a45b]" />
                <span className="font-semibold text-gray-900">
                  {room.rating.toFixed(1)}
                </span>
                ({room.reviewCount} reviews)
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl font-medium text-gray-900 sm:text-4xl lg:text-5xl">
              {room.name}
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setSaved(!saved)}
            className={`inline-flex w-fit items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
              saved
                ? "border-rose-200 bg-rose-50 text-rose-600"
                : "border-gray-200 bg-white text-gray-600 hover:border-rose-200 hover:text-rose-500"
            }`}
          >
            <Heart size={18} className={saved ? "fill-current" : ""} />
            {saved ? "Saved" : "Save Room"}
          </button>
        </div>
      </div>

      {/* Photo gallery */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-3 overflow-hidden rounded-2xl sm:grid-cols-4 sm:grid-rows-2">
          <div className="relative min-h-[280px] overflow-hidden sm:col-span-2 sm:row-span-2 sm:min-h-[490px]">
            <Image
              src={room.images[selectedImage]}
              alt={room.name}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition duration-500"
            />

            <button
              type="button"
              onClick={() => changeImage(-1)}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => changeImage(1)}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <ChevronRight size={22} />
            </button>

            <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              {selectedImage + 1} / {room.images.length}
            </span>
          </div>

          {room.images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`relative hidden min-h-[180px] overflow-hidden sm:block ${
                selectedImage === index
                  ? "ring-2 ring-inset ring-[#c5a45b]"
                  : ""
              }`}
              aria-label={`View room photo ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${room.name} photo ${index + 1}`}
                fill
                sizes="25vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
              {index === room.images.length - 1 && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-sm font-semibold text-white">
                  View all photos
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Main content and booking card */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-10 lg:col-span-2">
            {/* Highlights */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-gray-900">
                Room Highlights
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4">
                  <BedDouble size={22} className="shrink-0 text-[#b08a35]" />
                  <div>
                    <p className="text-xs text-gray-500">Bed Type</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {room.bedType}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4">
                  <Users size={22} className="shrink-0 text-[#b08a35]" />
                  <div>
                    <p className="text-xs text-gray-500">Capacity</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {room.capacity} guests
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4">
                  <Sparkles size={22} className="shrink-0 text-[#b08a35]" />
                  <div>
                    <p className="text-xs text-gray-500">Room Type</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {room.type}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Description */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900">
                About This Room
              </h2>

              <p className="mt-4 text-base leading-8 text-gray-600">
                {room.description}
              </p>
            </section>

            {/* Amenities */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900">
                Room Amenities
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Everything you need for a comfortable stay.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {room.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] ?? Check;

                  return (
                    <div key={amenity} className="flex items-center gap-3">
                      <Icon size={19} className="text-[#b08a35]" />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Guest information */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f8f4e9] text-[#a98632]">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-medium text-gray-900">
                    Plan Your Stay With Confidence
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    Review your dates and guest details before proceeding to
                    booking. Final availability, pricing, and applicable
                    policies should be confirmed during checkout.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Booking panel */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-sm text-gray-500">Starting from</p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-semibold text-gray-900">
                  ${room.price}
                </span>
                <span className="text-sm text-gray-500">/ night</span>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-6">
                <h2 className="font-serif text-xl font-medium text-gray-900">
                  Reserve Your Stay
                </h2>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="checkIn"
                      className="mb-2 block text-xs font-semibold text-gray-700"
                    >
                      Check-in
                    </label>
                    <div className="relative">
                      <CalendarDays
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        id="checkIn"
                        type="date"
                        min={today}
                        value={checkIn}
                        onChange={(event) => {
                          setCheckIn(event.target.value);
                          if (checkOut && event.target.value >= checkOut) {
                            setCheckOut("");
                          }
                        }}
                        className="w-full min-w-0 rounded-lg border border-gray-200 bg-white py-3 pl-9 pr-2 text-xs text-gray-700 outline-none focus:border-[#c5a45b]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="checkOut"
                      className="mb-2 block text-xs font-semibold text-gray-700"
                    >
                      Check-out
                    </label>
                    <div className="relative">
                      <CalendarDays
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        id="checkOut"
                        type="date"
                        min={checkIn || today}
                        value={checkOut}
                        onChange={(event) => setCheckOut(event.target.value)}
                        className="w-full min-w-0 rounded-lg border border-gray-200 bg-white py-3 pl-9 pr-2 text-xs text-gray-700 outline-none focus:border-[#c5a45b]"
                      />
                    </div>
                  </div>
                </div>

                {/* Adults */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users size={19} className="text-[#b08a35]" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Adults
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        Ages 13 or above
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Remove adult"
                      disabled={adults <= 1}
                      onClick={() =>
                        setAdults((value) => Math.max(1, value - 1))
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#c5a45b] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-4 text-center text-sm font-semibold">
                      {adults}
                    </span>
                    <button
                      type="button"
                      aria-label="Add adult"
                      disabled={adults + children >= room.capacity}
                      onClick={() => setAdults((value) => value + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#c5a45b] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users size={19} className="text-[#b08a35]" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Children
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">Ages 0–12</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Remove child"
                      disabled={children <= 0}
                      onClick={() =>
                        setChildren((value) => Math.max(0, value - 1))
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#c5a45b] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-4 text-center text-sm font-semibold">
                      {children}
                    </span>
                    <button
                      type="button"
                      aria-label="Add child"
                      disabled={
                        children >= room.children ||
                        adults + children >= room.capacity
                      }
                      onClick={() => setChildren((value) => value + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#c5a45b] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {children === 0 && room.children === 0 && (
                  <p className="mt-3 text-xs text-gray-500">
                    Children are not permitted in this room.
                  </p>
                )}

                {/* Price summary */}
                {nights > 0 && (
                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>
                        ${room.price} × {nights}{" "}
                        {nights === 1 ? "night" : "nights"}
                      </span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                      <span className="font-semibold text-gray-900">
                        Estimated total
                      </span>
                      <span className="text-xl font-semibold text-gray-900">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleBooking}
                  disabled={
                    !checkIn ||
                    !checkOut ||
                    nights <= 0 ||
                    adults + children > room.capacity
                  }
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#172a35] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#c5a45b] hover:text-[#172a35] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continue to Booking
                  <ArrowRight size={18} />
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                  You can review your booking details before confirming.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Explore more */}
      <section className="border-t border-gray-200 bg-white px-6 py-14 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b08a35]">
              More to Discover
            </p>
            <h2 className="mt-3 font-serif text-2xl font-medium text-gray-900">
              Find Your Perfect Room
            </h2>
          </div>

          <Link
            href="/main/rooms"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#c5a45b] hover:text-[#947322]"
          >
            Browse All Rooms
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
