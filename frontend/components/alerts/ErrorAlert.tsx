import { X } from "lucide-react";
import { useState } from "react";

type AlertProps = {
  message: string;
};

export default function Alert({ message }: AlertProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;
  return (
    <div
      className="fixed flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm"
      role="alert"
    >
      <button
        onClick={() => setIsOpen(false)}
        className="text-red-500 transition hover:text-red-700 cursor-pointer absolute top-2 right-2"
        aria-label="Close alert"
      >
        <X size={18} />
      </button>

      <div>
        <h3 className="font-semibold text-red-700">Error</h3>

        <p className="mt-1 text-sm text-red-600">{message}</p>
      </div>
    </div>
  );
}
