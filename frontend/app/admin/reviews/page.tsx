"use client";

import { useMemo, useState } from "react";
import {
  Search,
  MoreVertical,
  Eye,
  Trash2,
  Star,
  MessageSquare,
} from "lucide-react";

interface Review {
  id: number;
  guest: string;
  room: string;
  rating: number;
  comment: string;
  date: string;
}

const mockReviews: Review[] = [
  {
    id: 1,
    guest: "John Smith",
    room: "Deluxe Sea View",
    rating: 5,
    comment:
      "Absolutely beautiful room with an amazing sea view. The staff were excellent and everything was clean.",
    date: "Sep 18, 2026",
  },
  {
    id: 2,
    guest: "Emma Johnson",
    room: "Executive Suite",
    rating: 5,
    comment:
      "Wonderful experience from check-in to check-out. The room was spacious and very comfortable.",
    date: "Sep 16, 2026",
  },
  {
    id: 3,
    guest: "Michael Brown",
    room: "Premium Room",
    rating: 4,
    comment:
      "Great hotel and friendly staff. The room was very nice, although breakfast could have had more options.",
    date: "Sep 14, 2026",
  },
  {
    id: 4,
    guest: "Sophia Williams",
    room: "Deluxe Room",
    rating: 5,
    comment:
      "Everything was perfect. The room was elegant, quiet, and very clean.",
    date: "Sep 12, 2026",
  },
  {
    id: 5,
    guest: "James Davis",
    room: "Standard Room",
    rating: 3,
    comment:
      "The room was clean and comfortable, but the check-in process took longer than expected.",
    date: "Sep 10, 2026",
  },
  {
    id: 6,
    guest: "Olivia Miller",
    room: "Luxury Suite",
    rating: 5,
    comment:
      "One of the best hotel experiences I've had. Beautiful design and excellent service.",
    date: "Sep 8, 2026",
  },
  {
    id: 7,
    guest: "Daniel Wilson",
    room: "Deluxe Sea View",
    rating: 4,
    comment:
      "Beautiful view and comfortable bed. Would definitely consider staying here again.",
    date: "Sep 6, 2026",
  },
  {
    id: 8,
    guest: "Ava Moore",
    room: "Executive Suite",
    rating: 5,
    comment:
      "Amazing stay. The staff were professional and the suite was absolutely beautiful.",
    date: "Sep 4, 2026",
  },
];

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={
            index < rating ? "fill-[#d4af37] text-[#d4af37]" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

function ReviewActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-end gap-2">
      <button
        className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        title="View Review"
      >
        <Eye size={17} />
      </button>

      <button
        className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
        title="Delete Review"
      >
        <Trash2 size={17} />
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        title="More"
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-50 w-44 rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <Eye size={16} />
            View Review
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <MessageSquare size={16} />
            View Guest
          </button>
        </div>
      )}
    </div>
  );
}

export default function ReviewsPage() {
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("All");

  const filteredReviews = useMemo(() => {
    return mockReviews.filter((review) => {
      const matchesSearch =
        review.guest.toLowerCase().includes(search.toLowerCase()) ||
        review.room.toLowerCase().includes(search.toLowerCase()) ||
        review.comment.toLowerCase().includes(search.toLowerCase());

      const matchesRating =
        ratingFilter === "All" || review.rating === Number(ratingFilter);

      return matchesSearch && matchesRating;
    });
  }, [search, ratingFilter]);

  const averageRating =
    mockReviews.reduce((sum, review) => sum + review.rating, 0) /
    mockReviews.length;

  return (
    <main className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reviews</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage guest reviews and feedback.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Reviews"
          value="1,284"
          icon={<MessageSquare size={21} />}
        />

        <StatCard
          title="Average Rating"
          value={averageRating.toFixed(1)}
          icon={<Star size={21} />}
        />

        <StatCard
          title="5 Star Reviews"
          value="842"
          icon={<Star size={21} />}
        />

        <StatCard
          title="This Month"
          value="126"
          icon={<MessageSquare size={21} />}
        />
      </div>

      {/* Search & Filter */}
      <div className="mb-5 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search reviews..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d4af37] focus:bg-white"
          />
        </div>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-[#d4af37]"
        >
          <option value="All">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>

      {/* Reviews Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Guest
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Room
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Rating
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Review
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Date
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredReviews.map((review) => (
                <tr key={review.id} className="transition hover:bg-gray-50/70">
                  {/* Guest */}
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">
                      {review.guest}
                    </p>
                  </td>

                  {/* Room */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{review.room}</span>
                  </td>

                  {/* Rating */}
                  <td className="px-6 py-4">
                    <Rating rating={review.rating} />
                  </td>

                  {/* Review */}
                  <td className="max-w-md px-6 py-4">
                    <p className="truncate text-sm text-gray-600">
                      {review.comment}
                    </p>
                  </td>

                  {/* Date */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {review.date}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <ReviewActions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredReviews.length === 0 && (
          <div className="px-6 py-16 text-center">
            <MessageSquare className="mx-auto mb-3 text-gray-300" size={40} />

            <h3 className="text-sm font-medium text-gray-900">
              No reviews found
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or rating filter.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredReviews.length > 0 && (
          <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-900">
                {filteredReviews.length}
              </span>{" "}
              reviews
            </p>

            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-400">
                Previous
              </button>

              <button className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                1
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-lg bg-[#f8f1d8] p-2.5 text-[#9a7b20]">
          {icon}
        </div>
      </div>

      <p className="text-sm text-gray-500">{title}</p>

      <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
