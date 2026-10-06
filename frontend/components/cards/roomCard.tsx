import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Users, Wifi } from "lucide-react";
import { UUID } from "crypto";

export default function RoomCard({
  room,
}: {
  room: {
    image: string;
    name: string;
    type: string;
    description: string;
    price: number;
    guests: number;
    bedType: string;
    amenities: string[];
    id: UUID;
  };
}) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-800">
          {room.type}
        </div>

        <div className="absolute bottom-4 right-4 rounded-lg bg-black/70 px-3 py-2 text-white backdrop-blur-sm">
          <span className="text-lg font-semibold">${room.price}</span>
          <span className="ml-1 text-xs text-white/70">/ night</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-gray-900">
          {room.name}
        </h3>

        <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Users size={16} />
            {room.guests} Guests
          </span>

          <span className="flex items-center gap-1.5">
            <BedDouble size={16} />
            {room.bedType}
          </span>
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="mt-5 flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="flex items-center gap-1.5 rounded-md bg-[#f8f6f2] px-2.5 py-1.5 text-xs text-gray-600"
            >
              {amenity === "Free Wi-Fi" && <Wifi size={13} />}
              {amenity}
            </span>
          ))}

          {room.amenities.length > 3 && (
            <span className="rounded-md bg-[#f8f6f2] px-2.5 py-1.5 text-xs text-gray-500">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Action */}
        <Link
          href={`/main/rooms/${room.id}`}
          className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 text-sm font-semibold text-gray-900 transition hover:text-[#b08a20]"
        >
          View Room
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
