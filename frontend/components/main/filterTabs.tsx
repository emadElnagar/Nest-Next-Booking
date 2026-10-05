const filters = ["All Rooms", "Deluxe", "Luxury", "Suite", "Family"];

export default function FilterTabs({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => setActiveFilter(filter)}
          className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
            activeFilter === filter
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
