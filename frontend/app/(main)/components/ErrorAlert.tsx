import { X } from "lucide-react";

type AlertProps = {
  message: string;
};

export default function Alert({ message }: AlertProps) {
  return (
    <div
      className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm"
      role="alert"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
        <X />
      </div>

      <div>
        <h3 className="font-semibold text-red-700">Error</h3>

        <p className="mt-1 text-sm text-red-600">{message}</p>
      </div>
    </div>
  );
}
