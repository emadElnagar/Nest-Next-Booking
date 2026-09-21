import { BedDouble, Wrench } from "lucide-react";

const occupancy = 72;

export default function RoomOccupancy() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Room Occupancy</h2>
        <p className="mt-1 text-sm text-gray-500">Current room availability</p>
      </div>

      <div className="mt-8 flex justify-center">
        <div
          className="relative flex h-44 w-44 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(#fed700 ${occupancy}%, #f1f1f1 ${occupancy}% 100%)`,
          }}
        >
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white">
            <span className="text-3xl font-semibold text-gray-900">
              {occupancy}%
            </span>
            <span className="text-xs text-gray-500">Occupied</span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <OccupancyItem
          icon={BedDouble}
          label="Occupied"
          value="36 rooms"
          indicator="bg-[#fed700]"
        />

        <OccupancyItem
          icon={BedDouble}
          label="Available"
          value="18 rooms"
          indicator="bg-gray-300"
        />

        <OccupancyItem
          icon={Wrench}
          label="Maintenance"
          value="4 rooms"
          indicator="bg-gray-500"
        />
      </div>
    </div>
  );
}

function OccupancyItem({
  icon: Icon,
  label,
  value,
  indicator,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  indicator: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${indicator}`} />

        <Icon size={17} className="text-gray-500" />

        <span className="text-sm text-gray-700">{label}</span>
      </div>

      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
}
