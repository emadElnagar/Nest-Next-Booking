"use client";

import Link from "next/link";
import {
  Wifi,
  Wind,
  Tv,
  GlassWater,
  BellRing,
  Coffee,
  Waves,
  Sun,
  Bath,
  Dumbbell,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import Hero from "@/components/main/hero";

const amenities = [
  {
    name: "Free Wi-Fi",
    description:
      "Stay connected throughout your stay with complimentary high-speed internet.",
    icon: Wifi,
    category: "In Your Room",
  },
  {
    name: "Air Conditioning",
    description:
      "Enjoy personalized temperature control for your comfort in every season.",
    icon: Wind,
    category: "In Your Room",
  },
  {
    name: "Smart TV",
    description:
      "Relax with your favorite entertainment after a day of exploring.",
    icon: Tv,
    category: "In Your Room",
  },
  {
    name: "Mini Bar",
    description:
      "Keep your favorite refreshments close at hand whenever you need them.",
    icon: GlassWater,
    category: "In Your Room",
  },
  {
    name: "Room Service",
    description:
      "Enjoy the convenience of having selected meals and refreshments delivered to your room.",
    icon: BellRing,
    category: "Dining",
  },
  {
    name: "Breakfast",
    description:
      "Start your morning with a delicious selection of breakfast favorites.",
    icon: Coffee,
    category: "Dining",
  },
  {
    name: "Sea View",
    description:
      "Wake up to beautiful coastal scenery from selected guest rooms.",
    icon: Waves,
    category: "Room Features",
  },
  {
    name: "Private Balcony",
    description:
      "Take a quiet moment outdoors and enjoy the fresh sea breeze in selected rooms.",
    icon: Sun,
    category: "Room Features",
  },
  {
    name: "Bathtub",
    description:
      "Unwind after a long day with a relaxing bath in selected rooms.",
    icon: Bath,
    category: "Room Features",
  },
  {
    name: "Swimming Pool",
    description: "Refresh yourself with a relaxing swim during your stay.",
    icon: Waves,
    category: "Hotel Facilities",
  },
  {
    name: "Fitness Center",
    description:
      "Keep up with your workout routine while enjoying your time away.",
    icon: Dumbbell,
    category: "Hotel Facilities",
  },
  {
    name: "Premium Comfort",
    description:
      "Thoughtful details and elegant surroundings designed to make your stay special.",
    icon: Sparkles,
    category: "Hotel Facilities",
  },
];

const categories = [
  "All Amenities",
  "In Your Room",
  "Dining",
  "Room Features",
  "Hotel Facilities",
];

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <Hero
        heroImage="/static/images/amenities-hero.png"
        heroSubtitle="The Luxury Experience"
        heroTitle="Thoughtful Amenities. Exceptional Comfort."
        heroDescription="Every detail matters. Discover the facilities and thoughtful touches designed to make your stay relaxing, effortless, and unforgettable."
      />

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b08a35]">
            Designed Around You
          </span>

          <h2 className="mt-4 font-serif text-3xl font-medium text-gray-900 sm:text-4xl">
            Everything You Need to Feel at Home
          </h2>

          <p className="mt-5 leading-8 text-gray-500">
            From everyday essentials to moments of pure relaxation, our
            amenities bring convenience and comfort together throughout your
            stay.
          </p>
        </div>

        {/* Category navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <a
              key={category}
              href={
                index === 0
                  ? "#amenities"
                  : `#${category.toLowerCase().replaceAll(" ", "-")}`
              }
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                index === 0
                  ? "border-[#172a35] bg-[#172a35] text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[#c5a45b] hover:text-[#947322]"
              }`}
            >
              {category}
            </a>
          ))}
        </div>

        {/* Amenities */}
        <div id="amenities" className="mt-12 space-y-14">
          {categories.slice(1).map((category) => {
            const categoryAmenities = amenities.filter(
              (amenity) => amenity.category === category,
            );

            return (
              <section
                key={category}
                id={category.toLowerCase().replaceAll(" ", "-")}
                className="scroll-mt-24"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-7 w-1 rounded-full bg-[#c5a45b]" />
                  <h3 className="font-serif text-2xl font-medium text-gray-900">
                    {category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryAmenities.map((amenity) => {
                    const Icon = amenity.icon;

                    return (
                      <article
                        key={amenity.name}
                        className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d9c58e] hover:shadow-lg sm:p-7"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f8f4e9] text-[#a98632] transition group-hover:bg-[#c5a45b] group-hover:text-white">
                          <Icon size={25} strokeWidth={1.6} />
                        </div>

                        <h4 className="mt-6 text-lg font-semibold text-gray-900">
                          {amenity.name}
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-gray-500">
                          {amenity.description}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gray-400">
                          <Check size={15} className="text-[#b08a35]" />
                          Designed for your comfort
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#172a35] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b56b]">
            Your Stay Awaits
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-medium text-white sm:text-4xl">
            Experience Comfort in Every Detail
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/65">
            Find the room that suits you and discover a more relaxing way to
            stay.
          </p>

          <Link
            href="/rooms"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#c5a45b] px-6 py-3.5 text-sm font-semibold text-[#172a35] transition hover:bg-[#d8bb78]"
          >
            Find Your Room
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
