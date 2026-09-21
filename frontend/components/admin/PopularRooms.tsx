import Link from "next/link";
import { ArrowRight, BedDouble } from "lucide-react";

const rooms = [
  {
    number: "204",
    type: "Deluxe Suite",
    bookings: 42,
    revenue: "$12,480",
  },
  {
    number: "301",
    type: "Ocean View",
    bookings: 38,
    revenue: "$10,920",
  },
  {
    number: "105",
    type: "Executive Room",
    bookings: 31,
    revenue: "$8,370",
  },
  {
    number: "402",
    type: "Presidential Suite",
    bookings: 24,
    revenue: "$7,680",
  },
];

export default function PopularRooms() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 p-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Popular Rooms</h2>
          <p className="mt-1 text-sm text-gray-500">
            Most booked rooms this month
          </p>
        </div>

        <Link
          href="/admin/rooms"
          className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="divide-y divide-gray-100">
        {rooms.map((room) => (
          <div
            key={room.number}
            className="flex items-center justify-between p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fed700]/15 text-[#a88d00]">
                <BedDouble size={20} />
              </div>

              <div>
                <p className="font-medium text-gray-900">Room {room.number}</p>
                <p className="mt-1 text-sm text-gray-500">{room.type}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-medium text-gray-900">{room.revenue}</p>
              <p className="mt-1 text-xs text-gray-400">
                {room.bookings} bookings
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
