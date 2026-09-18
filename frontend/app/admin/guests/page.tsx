"use client";

import { useMemo, useState } from "react";
import {
  Search,
  MoreVertical,
  Pencil,
  Trash2,
  Users,
  UserCheck,
  UserPlus,
  CalendarCheck,
  Eye,
  History,
  CalendarDays,
} from "lucide-react";

interface Guest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bookings: number;
}

const mockGuests: Guest[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@gmail.com",
    phone: "+1 555 123 4567",
    bookings: 8,
  },
  {
    id: 2,
    firstName: "Emma",
    lastName: "Johnson",
    email: "emma.johnson@gmail.com",
    phone: "+1 555 234 5678",
    bookings: 5,
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@gmail.com",
    phone: "+1 555 345 6789",
    bookings: 12,
  },
  {
    id: 4,
    firstName: "Sophia",
    lastName: "Williams",
    email: "sophia.williams@gmail.com",
    phone: "+1 555 456 7890",
    bookings: 3,
  },
  {
    id: 5,
    firstName: "James",
    lastName: "Davis",
    email: "james.davis@gmail.com",
    phone: "+1 555 567 8901",
    bookings: 0,
  },
  {
    id: 6,
    firstName: "Olivia",
    lastName: "Miller",
    email: "olivia.miller@gmail.com",
    phone: "+1 555 678 9012",
    bookings: 7,
  },
  {
    id: 7,
    firstName: "Daniel",
    lastName: "Wilson",
    email: "daniel.wilson@gmail.com",
    phone: "+1 555 789 0123",
    bookings: 2,
  },
  {
    id: 8,
    firstName: "Ava",
    lastName: "Moore",
    email: "ava.moore@gmail.com",
    phone: "+1 555 890 1234",
    bookings: 10,
  },
];

function GuestActions({}: { guest: Guest }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-end gap-2">
      <button
        className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        title="Edit Guest"
      >
        <Pencil size={17} />
      </button>

      <button
        className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
        title="Delete Guest"
      >
        <Trash2 size={17} />
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        title="More"
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-50 w-48 rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <Eye size={16} />
            View Profile
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <CalendarDays size={16} />
            View Bookings
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <History size={16} />
            Booking History
          </button>
        </div>
      )}
    </div>
  );
}

export default function GuestsPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredGuests = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return mockGuests;

    return mockGuests.filter((guest) =>
      [
        guest.firstName,
        guest.lastName,
        `${guest.firstName} ${guest.lastName}`,
        guest.email,
        guest.phone,
      ]
        .join(" ")
        .toLowerCase()
        .includes(value),
    );
  }, [search]);

  return (
    <main className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Guests</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your hotel guests and their bookings.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Guests"
          value="1,248"
          icon={<Users size={21} />}
        />

        <StatCard
          title="Active Guests"
          value="1,102"
          icon={<UserCheck size={21} />}
        />

        <StatCard title="New Guests" value="86" icon={<UserPlus size={21} />} />

        <StatCard
          title="Total Bookings"
          value="2,847"
          icon={<CalendarCheck size={21} />}
        />
      </div>

      {/* Search */}
      <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4">
        <div className="relative max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search guests..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d4af37] focus:bg-white"
          />
        </div>
      </div>

      {/* Guests Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Guest
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Contact
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Bookings
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredGuests.map((guest) => {
                const initials = `${guest.firstName[0]}${guest.lastName[0]}`;

                return (
                  <tr key={guest.id} className="transition hover:bg-gray-50/70">
                    {/* Guest */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e7b3] text-sm font-semibold text-[#8a701d]">
                          {initials}
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {guest.firstName} {guest.lastName}
                          </p>

                          <p className="text-xs text-gray-500">
                            Guest #{guest.id.toString().padStart(4, "0")}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-gray-900">{guest.email}</p>

                        <p className="mt-0.5 text-xs text-gray-500">
                          {guest.phone}
                        </p>
                      </div>
                    </td>

                    {/* Bookings */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">
                        {guest.bookings}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <GuestActions guest={guest} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredGuests.length === 0 && (
          <div className="px-6 py-16 text-center">
            <Users className="mx-auto mb-3 text-gray-300" size={40} />

            <h3 className="text-sm font-medium text-gray-900">
              No guests found
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredGuests.length > 0 && (
          <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-900">
                {filteredGuests.length}
              </span>{" "}
              guests
            </p>

            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              <button className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                {currentPage}
              </button>

              <button
                onClick={() => setCurrentPage((page) => page + 1)}
                className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-lg bg-[#f8f1d8] p-2.5 text-[#9a7b20]">
          {icon}
        </div>
      </div>

      <p className="text-sm text-gray-500">{title}</p>

      <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
