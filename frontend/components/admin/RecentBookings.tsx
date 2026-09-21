import Link from "next/link";
import { ArrowRight } from "lucide-react";

const bookings = [
  {
    id: "#BK-1024",
    guest: "John Smith",
    room: "Deluxe Suite",
    dates: "Sep 20 - Sep 24",
    amount: "$1,240",
    status: "Confirmed",
  },
  {
    id: "#BK-1023",
    guest: "Sarah Johnson",
    room: "Ocean View",
    dates: "Sep 19 - Sep 22",
    amount: "$890",
    status: "Confirmed",
  },
  {
    id: "#BK-1022",
    guest: "Michael Brown",
    room: "Executive Room",
    dates: "Sep 18 - Sep 20",
    amount: "$520",
    status: "Pending",
  },
  {
    id: "#BK-1021",
    guest: "Emily Davis",
    room: "Deluxe Suite",
    dates: "Sep 17 - Sep 21",
    amount: "$1,120",
    status: "Checked In",
  },
];

export default function RecentBookings() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 p-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Bookings
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Latest reservations at your hotel
          </p>
        </div>

        <Link
          href="/admin/bookings"
          className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="px-6 py-4 text-xs font-medium uppercase text-gray-400">
                Booking
              </th>
              <th className="px-6 py-4 text-xs font-medium uppercase text-gray-400">
                Guest
              </th>
              <th className="px-6 py-4 text-xs font-medium uppercase text-gray-400">
                Room
              </th>
              <th className="px-6 py-4 text-xs font-medium uppercase text-gray-400">
                Amount
              </th>
              <th className="px-6 py-4 text-xs font-medium uppercase text-gray-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {booking.id}
                  <p className="mt-1 text-xs font-normal text-gray-400">
                    {booking.dates}
                  </p>
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {booking.guest}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {booking.room}
                </td>

                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {booking.amount}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={booking.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Confirmed: "bg-green-50 text-green-700",
    Pending: "bg-yellow-50 text-yellow-700",
    "Checked In": "bg-blue-50 text-blue-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] ?? "bg-gray-50 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}
