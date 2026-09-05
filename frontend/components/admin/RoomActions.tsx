import {
  MoreVertical,
  Pencil,
  Trash2,
  CalendarDays,
  Eye,
  RotateCcwIcon,
} from "lucide-react";
import { useRef, useState } from "react";

function RoomActions({}: {
  roomId: string;
  openMenu: string | null;
  setOpenMenu: (id: string | null) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    right: 0,
  });

  const handleToggle = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      setMenuPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          title="Edit room"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <Pencil size={16} />
        </button>

        <button
          type="button"
          title="Delete room"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-500"
        >
          <Trash2 size={16} />
        </button>

        <button
          ref={buttonRef}
          type="button"
          title="More actions"
          onClick={handleToggle}
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
            isOpen
              ? "bg-gray-100 text-gray-900"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          <MoreVertical size={17} />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed z-[9999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg"
          style={{
            top: menuPosition.top,
            right: menuPosition.right,
          }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            <Eye size={16} />
            View Room Details
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            <CalendarDays size={16} />
            View Bookings
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            <RotateCcwIcon size={16} />
            Booking History
          </button>
        </div>
      )}
    </>
  );
}

export default RoomActions;
