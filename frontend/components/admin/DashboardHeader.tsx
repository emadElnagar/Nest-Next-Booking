import Link from "next/link";
import { Plus } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back. Here&apos;s what&apos;s happening at your hotel.
        </p>
      </div>

      <Link
        href="/admin/rooms/new"
        className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#fed700] px-4 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-[#e8c300]"
      >
        <Plus size={18} />
        Add New Room
      </Link>
    </div>
  );
}
