const revenueData = [
  { month: "Apr", value: 52 },
  { month: "May", value: 68 },
  { month: "Jun", value: 61 },
  { month: "Jul", value: 78 },
  { month: "Aug", value: 72 },
  { month: "Sep", value: 88 },
];

export default function RevenueOverview() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Revenue Overview
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Revenue performance over the last 6 months
          </p>
        </div>

        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 outline-none">
          <option>Last 6 months</option>
          <option>Last 12 months</option>
          <option>This year</option>
        </select>
      </div>

      <div className="mt-8 flex h-64 items-end justify-between gap-4">
        {revenueData.map((item) => (
          <div
            key={item.month}
            className="flex h-full flex-1 flex-col items-center justify-end gap-3"
          >
            <div className="flex h-full w-full items-end">
              <div
                className="w-full rounded-t-md bg-[#fed700] transition-opacity hover:opacity-80"
                style={{ height: `${item.value}%` }}
              />
            </div>

            <span className="text-xs text-gray-500">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
