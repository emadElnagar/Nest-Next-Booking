"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import {
  ArrowLeft,
  BedDouble,
  Check,
  ImagePlus,
  Plus,
  Trash2,
  Users,
} from "lucide-react";

const amenities = [
  "Free Wi-Fi",
  "Air Conditioning",
  "TV",
  "Mini Bar",
  "Room Service",
  "Breakfast",
  "Sea View",
  "Balcony",
  "Bathtub",
  "Swimming Pool",
];

export default function CreateRoomPage() {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const [images, setImages] = useState<string[]>([]);

  const handleImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file),
    );

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity],
    );
  };

  return (
    <main className="min-h-screen bg-[#f8f6f2] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-8">
          <Link
            href="/admin/rooms"
            className="mb-3 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-yellow-600"
          >
            <ArrowLeft size={16} />
            Back to Rooms
          </Link>

          <h1 className="text-3xl font-semibold text-gray-900">
            Create New Room
          </h1>

          <p className="mt-2 text-gray-500">Add a new room to your hotel.</p>
        </div>

        <form className="space-y-6">
          {/* BASIC INFORMATION */}
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Basic Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Enter the main details of the room.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* ROOM NUMBER */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Room Number
                </label>

                <input
                  type="text"
                  placeholder="e.g. 301"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white"
                />
              </div>

              {/* ROOM TYPE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Room Type
                </label>

                <div className="relative">
                  <BedDouble
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600"
                  />

                  <select
                    defaultValue=""
                    className="h-14 w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 text-gray-900 outline-none transition focus:border-yellow-500 focus:bg-white"
                  >
                    <option value="" disabled>
                      Select room type
                    </option>

                    <option value="single">Single Room</option>

                    <option value="double">Double Room</option>

                    <option value="deluxe">Deluxe Room</option>

                    <option value="suite">Suite</option>

                    <option value="family">Family Room</option>

                    <option value="presidential">Presidential Suite</option>
                  </select>
                </div>
              </div>

              {/* CAPACITY */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Capacity
                </label>

                <div className="relative">
                  <Users
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600"
                  />

                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 4"
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white"
                  />
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Maximum number of guests.
                </p>
              </div>

              {/* PRICE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Price Per Night
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-yellow-600">
                    $
                  </span>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="e.g. 250.00"
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* ADULTS */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Adults
                </label>

                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 2"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Maximum number of adults allowed.
                </p>
              </div>

              {/* CHILDREN */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Children
                </label>

                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 2"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Maximum number of children allowed.
                </p>
              </div>

              {/* ROOM SIZE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Room Size
                </label>

                <div className="flex gap-3">
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 45"
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white"
                  />

                  <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-5 text-sm text-gray-500">
                    m²
                  </div>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Description
              </label>

              <textarea
                rows={5}
                placeholder="Describe the room, its atmosphere, view, and features..."
                className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white"
              />
            </div>
          </section>

          {/* AMENITIES */}
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Amenities</h2>

              <p className="mt-1 text-sm text-gray-500">
                Select everything available in this room.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity) => {
                const selected = selectedAmenities.includes(amenity);

                return (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => toggleAmenity(amenity)}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition ${
                      selected
                        ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                        : "border-gray-200 bg-gray-50 text-gray-600 hover:border-yellow-300"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                        selected
                          ? "border-yellow-500 bg-yellow-500 text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {selected && <Check size={13} />}
                    </span>

                    {amenity}
                  </button>
                );
              })}
            </div>
          </section>

          {/* IMAGES */}
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Room Images
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Upload high-quality images of the room.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {/* ADD IMAGE */}
              <label className="flex aspect-[4/3] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 text-gray-400 transition hover:border-yellow-500 hover:bg-yellow-50 hover:text-yellow-600">
                <ImagePlus size={28} />

                <span className="mt-2 text-sm font-medium">Add Images</span>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImages}
                  className="hidden"
                />
              </label>

              {/* IMAGE PREVIEWS */}
              {images.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
                >
                  <Image
                    src={image}
                    alt={`Room image ${index + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />

                  {/* DELETE BUTTON */}
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm cursor-pointer transition hover:bg-red-500 group-hover:opacity-100"
                    aria-label="Delete image"
                  >
                    <Trash2 size={17} />
                  </button>

                  {/* MAIN IMAGE */}
                  {index === 0 && (
                    <div className="absolute bottom-3 left-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
                      Main Image
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ACTIONS */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/admin/rooms"
              className="flex h-14 items-center justify-center rounded-2xl border border-gray-200 bg-white px-8 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-8 text-sm font-semibold text-black cursor-pointer transition hover:bg-yellow-400"
            >
              <Plus size={18} />
              Create Room
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
