import Link from "next/link";
import {
  Plus,
  Search,
  SlidersHorizontal,
  MoreVertical,
  BedDouble,
  Users,
  Pencil,
  Trash2,
} from "lucide-react";

const rooms = [
  {
    id: "1",
    roomNumber: "101",
    type: "Deluxe Room",
    capacity: 2,
    adults: 2,
    children: 0,
    price: 180,
    status: "Available",
  },
  {
    id: "2",
    roomNumber: "102",
    type: "Deluxe Room",
    capacity: 3,
    adults: 2,
    children: 1,
    price: 220,
    status: "Occupied",
  },
  {
    id: "3",
    roomNumber: "201",
    type: "Executive Suite",
    capacity: 4,
    adults: 2,
    children: 2,
    price: 350,
    status: "Available",
  },
  {
    id: "4",
    roomNumber: "202",
    type: "Executive Suite",
    capacity: 4,
    adults: 3,
    children: 1,
    price: 380,
    status: "Maintenance",
  },
  {
    id: "5",
    roomNumber: "301",
    type: "Presidential Suite",
    capacity: 6,
    adults: 4,
    children: 2,
    price: 650,
    status: "Available",
  },
];

export default function RoomsPage() {
  return (
    <main className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Rooms</h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your hotel rooms, pricing, and availability.
          </p>
        </div>

        <Link
          href="/admin/rooms/new"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-yellow-500 px-5 text-sm font-semibold text-black transition hover:bg-yellow-400"
        >
          <Plus size={18} />
          Add New Room
        </Link>
      </div>

      {/* Statistics */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
              <BedDouble size={21} className="text-gray-700" />
            </div>

            <span className="text-xs font-medium text-gray-400">TOTAL</span>
          </div>

          <p className="text-2xl font-semibold text-gray-900">48</p>

          <p className="mt-1 text-sm text-gray-500">Total rooms</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
              <BedDouble size={21} className="text-green-600" />
            </div>

            <span className="text-xs font-medium text-green-600">
              AVAILABLE
            </span>
          </div>

          <p className="text-2xl font-semibold text-gray-900">31</p>

          <p className="mt-1 text-sm text-gray-500">Ready for booking</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Users size={21} className="text-blue-600" />
            </div>

            <span className="text-xs font-medium text-blue-600">OCCUPIED</span>
          </div>

          <p className="text-2xl font-semibold text-gray-900">14</p>

          <p className="mt-1 text-sm text-gray-500">Currently occupied</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
              <BedDouble size={21} className="text-red-500" />
            </div>

            <span className="text-xs font-medium text-red-500">
              MAINTENANCE
            </span>
          </div>

          <p className="text-2xl font-semibold text-gray-900">3</p>

          <p className="mt-1 text-sm text-gray-500">Under maintenance</p>
        </div>
      </div>

      {/* Rooms Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-gray-200 p-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by room number or type..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-500 focus:bg-white"
            />
          </div>

          {/* Filters */}
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Room
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Type
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Capacity
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Guests
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Price / Night
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {rooms.map((room) => (
                <tr key={room.id} className="transition hover:bg-gray-50">
                  {/* Room */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50">
                        <BedDouble size={19} className="text-yellow-600" />
                      </div>

                      <span className="font-semibold text-gray-900">
                        #{room.roomNumber}
                      </span>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="px-6 py-5">
                    <span className="text-sm text-gray-700">{room.type}</span>
                  </td>

                  {/* Capacity */}
                  <td className="px-6 py-5">
                    <span className="text-sm text-gray-700">
                      {room.capacity} guests
                    </span>
                  </td>

                  {/* Guests */}
                  <td className="px-6 py-5">
                    <div className="text-sm text-gray-700">
                      <span>{room.adults} adults</span>
                      <span className="mx-1 text-gray-300">•</span>
                      <span>{room.children} children</span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5">
                    <span className="font-semibold text-gray-900">
                      ${room.price}
                    </span>

                    <span className="ml-1 text-xs text-gray-400">/ night</span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <StatusBadge status={room.status} />
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        title="Edit room"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        title="Delete room"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>

                      <button
                        title="More"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                      >
                        <MoreVertical size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-3 border-t border-gray-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-900">1</span> to{" "}
            <span className="font-medium text-gray-900">5</span> of{" "}
            <span className="font-medium text-gray-900">48</span> rooms
          </p>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500 transition hover:bg-gray-50">
              Previous
            </button>

            <button className="rounded-lg bg-yellow-500 px-3 py-2 text-sm font-semibold text-black">
              1
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">
              2
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">
              3
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500 transition hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Available: "bg-green-50 text-green-700",
    Occupied: "bg-blue-50 text-blue-700",
    Maintenance: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}
