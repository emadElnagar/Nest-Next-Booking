"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  "All",
  "Rooms & Suites",
  "Reception",
  "Dining",
  "Pool & Leisure",
  "Hotel Views",
];

const galleryImages = [
  {
    src: "/images/gallery/room-1.jpg",
    title: "Deluxe Sea View",
    category: "Rooms & Suites",
  },
  {
    src: "/images/gallery/room-2.jpg",
    title: "Elegant Suite",
    category: "Rooms & Suites",
  },
  {
    src: "/images/gallery/room-3.jpg",
    title: "Luxury Bedroom",
    category: "Rooms & Suites",
  },
  {
    src: "/images/gallery/reception-1.jpg",
    title: "Grand Reception",
    category: "Reception",
  },
  {
    src: "/images/gallery/reception-2.jpg",
    title: "Welcome Lounge",
    category: "Reception",
  },
  {
    src: "/images/gallery/dining-1.jpg",
    title: "Fine Dining",
    category: "Dining",
  },
  {
    src: "/images/gallery/dining-2.jpg",
    title: "Elegant Restaurant",
    category: "Dining",
  },
  {
    src: "/images/gallery/pool-1.jpg",
    title: "Infinity Pool",
    category: "Pool & Leisure",
  },
  {
    src: "/images/gallery/pool-2.jpg",
    title: "Poolside Retreat",
    category: "Pool & Leisure",
  },
  {
    src: "/images/gallery/view-1.jpg",
    title: "Coastal Panorama",
    category: "Hotel Views",
  },
  {
    src: "/images/gallery/view-2.jpg",
    title: "Golden Hour",
    category: "Hotel Views",
  },
  {
    src: "/images/gallery/room-4.jpg",
    title: "Premium Comfort",
    category: "Rooms & Suites",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const closeLightbox = () => setSelectedImage(null);

  const showPrevious = useCallback(() => {
    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage - 1 + filteredImages.length) % filteredImages.length,
    );
  }, [selectedImage, filteredImages.length]);

  const showNext = useCallback(() => {
    if (selectedImage === null) return;

    setSelectedImage((selectedImage + 1) % filteredImages.length);
  }, [selectedImage, filteredImages.length]);

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, showNext, showPrevious]);

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#172a35] px-6 py-24 text-white sm:py-32">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-12 h-60 w-60 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d5b56b]">
            A Visual Journey
          </p>

          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            Discover the Beauty
            <span className="mt-2 block text-[#d5b56b]">of Every Moment.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Explore our rooms, welcoming spaces, dining experiences, and
            peaceful surroundings. Take a closer look at what awaits you.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
            <Images size={19} className="text-[#d5b56b]" />
            <span>{galleryImages.length} moments to discover</span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b08a35]">
              The Gallery
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-gray-900 sm:text-4xl">
              A Glimpse Into Luxury
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-gray-500">
              Browse the spaces and experiences that make every stay special.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredImages.length}
            </span>{" "}
            {filteredImages.length === 1 ? "image" : "images"}
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-9 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setSelectedImage(null);
              }}
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-[#172a35] bg-[#172a35] text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[#c5a45b] hover:text-[#947322]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`View ${image.title}`}
              className={`group relative block w-full overflow-hidden rounded-2xl bg-gray-200 text-left ${
                index % 5 === 0
                  ? "sm:row-span-2 sm:min-h-[490px]"
                  : "min-h-[235px]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-80 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e4c67f]">
                  {image.category}
                </p>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl font-medium text-white">
                    {image.title}
                  </h3>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition group-hover:border-[#c5a45b] group-hover:bg-[#c5a45b] group-hover:text-[#172a35]">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="py-20 text-center text-gray-500">
            No images found in this category.
          </p>
        )}
      </section>

      {/* Booking CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-2xl bg-white p-8 shadow-sm sm:p-12 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b08a35]">
              Make It Your Experience
            </p>

            <h2 className="mt-3 font-serif text-3xl font-medium text-gray-900">
              Your Next Getaway Starts Here
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-gray-500">
              Find your ideal room and experience the comfort and hospitality of
              Luxury Hotel for yourself.
            </p>
          </div>

          <Link
            href="/rooms"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#172a35] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c5a45b] hover:text-[#172a35]"
          >
            Explore Rooms
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && filteredImages[selectedImage] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={23} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={25} />
          </button>

          <div
            className="relative flex h-[75vh] w-full max-w-6xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-0 flex-1">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>

            <div className="pt-4 text-center">
              <p className="font-serif text-xl text-white">
                {filteredImages[selectedImage].title}
              </p>
              <p className="mt-1 text-sm text-white/50">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={25} />
          </button>
        </div>
      )}
    </main>
  );
}
