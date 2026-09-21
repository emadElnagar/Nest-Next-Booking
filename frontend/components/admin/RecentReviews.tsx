import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    guest: "John Smith",
    room: "Deluxe Suite",
    rating: 5,
    review:
      "Amazing stay. The room was beautiful and the service was excellent.",
    date: "2 hours ago",
  },
  {
    guest: "Sarah Johnson",
    room: "Ocean View",
    rating: 5,
    review: "Beautiful hotel with an incredible view. Highly recommended.",
    date: "5 hours ago",
  },
  {
    guest: "Michael Brown",
    room: "Executive Room",
    rating: 4,
    review: "Very comfortable room and friendly staff.",
    date: "Yesterday",
  },
];

export default function RecentReviews() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 p-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Reviews
          </h2>
          <p className="mt-1 text-sm text-gray-500">Latest guest feedback</p>
        </div>

        <Link
          href="/admin/reviews"
          className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="divide-y divide-gray-100">
        {reviews.map((review) => (
          <div key={`${review.guest}-${review.date}`} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-gray-900">{review.guest}</p>
                <p className="mt-1 text-xs text-gray-400">{review.room}</p>
              </div>

              <div className="flex items-center gap-0.5">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="fill-[#fed700] text-[#fed700]"
                  />
                ))}
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {review.review}
            </p>

            <p className="mt-2 text-xs text-gray-400">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
