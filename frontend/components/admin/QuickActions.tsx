import Link from "next/link";
import { CalendarCheck, MessageSquare, Plus, Users } from "lucide-react";

const actions = [
  {
    label: "Add New Room",
    href: "/admin/rooms/new",
    icon: Plus,
  },
  {
    label: "View Guests",
    href: "/admin/guests",
    icon: Users,
  },
  {
    label: "Manage Bookings",
    href: "/admin/bookings",
    icon: CalendarCheck,
  },
  {
    label: "View Reviews",
    href: "/admin/reviews",
    icon: MessageSquare,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
        <p className="mt-1 text-sm text-gray-500">
          Frequently used admin actions
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.label}
              href={action.href}
              className="group flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-[#fed700] hover:bg-[#fed700]/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition group-hover:bg-[#fed700]/20 group-hover:text-gray-900">
                <Icon size={19} />
              </div>

              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {action.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
