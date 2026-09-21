import {
  ArrowDownRight,
  ArrowUpRight,
  BedDouble,
  CalendarCheck,
  DollarSign,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$48,920",
    change: "+12.5%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Total Bookings",
    value: "284",
    change: "+8.2%",
    positive: true,
    icon: CalendarCheck,
  },
  {
    title: "Total Guests",
    value: "1,248",
    change: "+6.4%",
    positive: true,
    icon: Users,
  },
  {
    title: "Available Rooms",
    value: "18",
    change: "72% occupied",
    positive: true,
    icon: BedDouble,
  },
];

function StatCard({
  title,
  value,
  change,
  positive,
  icon: Icon,
}: {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-900">{value}</h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fed700]/15 text-[#b89a00]">
          <Icon size={20} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 text-sm">
        {positive ? (
          <ArrowUpRight size={16} className="text-green-600" />
        ) : (
          <ArrowDownRight size={16} className="text-red-600" />
        )}

        <span className={positive ? "text-green-600" : "text-red-600"}>
          {change}
        </span>

        {title !== "Available Rooms" && (
          <span className="text-gray-400">from last month</span>
        )}
      </div>
    </div>
  );
}

export default function DashboardStats() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
