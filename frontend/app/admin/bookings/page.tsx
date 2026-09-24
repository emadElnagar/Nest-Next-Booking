"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  MoreVertical,
  Search,
  Trash2,
} from "lucide-react";

const bookings = [
  {
    id: "BK-1024",
    guest: "John Smith",
    email: "john.smith@email.com",
    room: "Deluxe Suite",
    checkIn: "Sep 20, 2026",
    checkOut: "Sep 24, 2026",
    guests: "2 Adults",
    total: "$1,240",
    status: "Confirmed",
    payment: "Paid",
  },
  {
    id: "BK-1023",
    guest: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    room: "Ocean View",
    checkIn: "Sep 19, 2026",
    checkOut: "Sep 22, 2026",
    guests: "2 Adults, 1 Child",
    total: "$890",
    status: "Confirmed",
    payment: "Paid",
  },
  {
    id: "BK-1022",
    guest: "Michael Brown",
    email: "michael.brown@email.com",
    room: "Executive Room",
    checkIn: "Sep 18, 2026",
    checkOut: "Sep 20, 2026",
    guests: "1 Adult",
    total: "$520",
    status: "Pending",
    payment: "Pending",
  },
  {
    id: "BK-1021",
    guest: "Emily Davis",
    email: "emily.davis@email.com",
    room: "Deluxe Suite",
    checkIn: "Sep 17, 2026",
    checkOut: "Sep 21, 2026",
    guests: "2 Adults",
    total: "$1,120",
    status: "Checked In",
    payment: "Paid",
  },
  {
    id: "BK-1020",
    guest: "David Wilson",
    email: "david.wilson@email.com",
    room: "Presidential Suite",
    checkIn: "Sep 15, 2026",
    checkOut: "Sep 19, 2026",
    guests: "2 Adults",
    total: "$2,480",
    status: "Checked Out",
    payment: "Paid",
  },
  {
    id: "BK-1019",
    guest: "Jessica Taylor",
    email: "jessica.taylor@email.com",
    room: "Ocean View",
    checkIn: "Sep 14, 2026",
    checkOut: "Sep 17, 2026",
    guests: "2 Adults",
    total: "$780",
    status: "Cancelled",
    payment: "Refunded",
  },
  {
    id: "BK-1018",
    guest: "Robert Anderson",
    email: "robert.anderson@email.com",
    room: "Executive Room",
    checkIn: "Sep 13, 2026",
    checkOut: "Sep 16, 2026",
    guests: "1 Adult",
    total: "$690",
    status: "Checked Out",
    payment: "Paid",
  },
];

const statusOptions = [
  "All Statuses",
  "Pending",
  "Confirmed",
  "Checked In",
  "Checked Out",
  "Cancelled",
];

export default function BookingsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Statuses");

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesSearch =
        booking.id.toLowerCase().includes(search.toLowerCase()) ||
        booking.guest.toLowerCase().includes(search.toLowerCase()) ||
        booking.email.toLowerCase().includes(search.toLowerCase()) ||
        booking.room.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All Statuses" || booking.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <main className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Bookings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage all hotel reservations and booking details.
          </p>
        </div>

        <button className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#fed700] px-4 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-[#e8c300]">
          <CalendarDays size={18} />
          Create Booking
        </button>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Bookings"
          value="284"
          description="All reservations"
        />
        <StatCard
          title="Pending"
          value="18"
          description="Awaiting confirmation"
        />
        <StatCard
          title="Checked In"
          value="36"
          description="Currently staying"
        />
        <StatCard
          title="This Month"
          value="126"
          description="September bookings"
        />
      </div>

      {/* Filters */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by booking ID, guest, email or room..."
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#fed700]"
            />
          </div>

          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-[#fed700] lg:w-48"
            >
              {statusOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/70 text-left">
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Booking
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Guest
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Room
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Stay
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Guests
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Total
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Payment
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">
                      #{booking.id}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">
                      {booking.guest}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {booking.email}
                    </p>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {booking.room}
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-700">{booking.checkIn}</p>
                    <p className="mt-1 text-xs text-gray-400">
                      to {booking.checkOut}
                    </p>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {booking.guests}
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {booking.total}
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={booking.status} />
                  </td>

                  <td className="px-6 py-4">
                    <PaymentBadge status={booking.payment} />
                  </td>

                  <td className="px-6 py-4">
                    <BookingActions />
                  </td>
                </tr>
              ))}

              {filteredBookings.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    className="px-6 py-12 text-center text-sm text-gray-500"
                  >
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-700">
              {filteredBookings.length}
            </span>{" "}
            of <span className="font-medium text-gray-700">284</span> bookings
          </p>

          <div className="flex items-center gap-1">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
              <ChevronLeft size={17} />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fed700] text-sm font-medium text-gray-900">
              1
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
              2
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
              3
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <p className="text-sm text-gray-500">{title}</p>

      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>

      <p className="mt-2 text-xs text-gray-400">{description}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Pending: "bg-yellow-50 text-yellow-700",
    Confirmed: "bg-green-50 text-green-700",
    "Checked In": "bg-blue-50 text-blue-700",
    "Checked Out": "bg-gray-100 text-gray-600",
    Cancelled: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] ?? "bg-gray-50 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

function PaymentBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Paid: "bg-green-50 text-green-700",
    Pending: "bg-yellow-50 text-yellow-700",
    Refunded: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] ?? "bg-gray-50 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

function BookingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
        title="View booking"
      >
        <Eye size={16} />
      </button>

      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        title="Delete booking"
      >
        <Trash2 size={16} />
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
        >
          <MoreVertical size={16} />
        </button>

        {open && (
          <div className="absolute right-0 top-10 z-20 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            <button
              type="button"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
            >
              View Details
            </button>

            <button
              type="button"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
            >
              Booking History
            </button>

            <button
              type="button"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
            >
              Guest Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
