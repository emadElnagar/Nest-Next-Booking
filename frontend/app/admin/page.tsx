import DashboardHeader from "@/components/admin/DashboardHeader";
import DashboardStats from "@/components/admin/DashboardStats";
import PopularRooms from "@/components/admin/PopularRooms";
import QuickActions from "@/components/admin/QuickActions";
import RecentBookings from "@/components/admin/RecentBookings";
import RecentReviews from "@/components/admin/RecentReviews";
import RevenueOverview from "@/components/admin/RevenueOverview";
import RoomOccupancy from "@/components/admin/RoomOccupancy";

export default function AdminDashboard() {
  return (
    <main className="p-6 lg:p-8">
      <DashboardHeader />

      <DashboardStats />

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueOverview />
        </div>

        <RoomOccupancy />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <RecentBookings />
        <PopularRooms />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <RecentReviews />
        <QuickActions />
      </div>
    </main>
  );
}
