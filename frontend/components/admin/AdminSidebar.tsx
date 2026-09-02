"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BedDouble,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Users,
  X,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Rooms",
    href: "/admin/rooms",
    icon: BedDouble,
  },
  {
    label: "Bookings",
    href: "/admin/bookings",
    icon: CalendarCheck,
  },
  {
    label: "Guests",
    href: "/admin/guests",
    icon: Users,
  },
  {
    label: "Reviews",
    href: "/admin/reviews",
    icon: MessageSquare,
  },
  {
    label: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
];

type AdminSidebarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

export default function AdminSidebar({
  collapsed,
  setCollapsed,
}: AdminSidebarProps) {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* MOBILE BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm lg:hidden"
      >
        <Menu size={21} />
      </button>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen flex-col
          border-r border-gray-200 bg-white
          transition-all duration-300
          ${collapsed ? "w-20" : "w-72"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* HEADER */}
        <div
          className={`flex h-24 items-center border-b border-gray-100 ${
            collapsed ? "justify-center px-3" : "justify-between px-6"
          }`}
        >
          {!collapsed && (
            <Link href="/admin" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500">
                <BedDouble size={22} className="text-black" />
              </div>

              <div>
                <h1 className="font-semibold text-gray-900">Royal Crescent</h1>

                <p className="text-xs uppercase tracking-[3px] text-gray-400">
                  Admin
                </p>
              </div>
            </Link>
          )}

          {collapsed && (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500">
              <BedDouble size={22} className="text-black" />
            </div>
          )}

          {/* MOBILE CLOSE */}
          <button
            onClick={() => setMobileOpen(false)}
            className="text-gray-500 lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-3 py-6">
          {!collapsed && (
            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[2px] text-gray-400">
              Management
            </p>
          )}

          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                title={collapsed ? item.label : undefined}
                className={`
                  group relative flex items-center rounded-xl
                  transition
                  ${collapsed ? "justify-center px-3 py-3" : "gap-3 px-3 py-3"}
                  ${
                    isActive
                      ? "bg-yellow-50 text-yellow-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                {/* ACTIVE INDICATOR */}
                {isActive && (
                  <span className="absolute left-0 h-6 w-1 rounded-r-full bg-yellow-500" />
                )}

                <Icon
                  size={20}
                  className={`
                    shrink-0
                    ${
                      isActive
                        ? "text-yellow-600"
                        : "text-gray-400 group-hover:text-gray-700"
                    }
                  `}
                />

                {!collapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}

          {!collapsed && (
            <p className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-[2px] text-gray-400">
              System
            </p>
          )}

          <Link
            href="/admin/settings"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? "Settings" : undefined}
            className={`
              group relative flex items-center rounded-xl
              text-gray-600 transition
              ${collapsed ? "justify-center px-3 py-3" : "gap-3 px-3 py-3"}
              ${
                pathname.startsWith("/admin/settings")
                  ? "bg-yellow-50 text-yellow-700"
                  : "hover:bg-gray-50 hover:text-gray-900"
              }
            `}
          >
            <Settings
              size={20}
              className="shrink-0 text-gray-400 group-hover:text-gray-700"
            />

            {!collapsed && (
              <span className="text-sm font-medium">Settings</span>
            )}
          </Link>
        </nav>

        {/* BOTTOM */}
        <div className="border-t border-gray-100 p-3">
          {/* ADMIN PROFILE */}
          {!collapsed ? (
            <div className="mb-3 flex items-center gap-3 rounded-xl bg-gray-50 p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-yellow-400">
                A
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900">
                  Admin
                </p>

                <p className="truncate text-xs text-gray-500">
                  admin@royalcrescent.com
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-3 flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-yellow-400">
                A
              </div>
            </div>
          )}

          {/* LOGOUT */}
          <button
            title={collapsed ? "Logout" : undefined}
            className={`
              flex w-full items-center rounded-xl
              text-red-500 transition hover:bg-red-50
              ${collapsed ? "justify-center px-3 py-3" : "gap-3 px-3 py-3"}
            `}
          >
            <LogOut size={20} />

            {!collapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>

        {/* COLLAPSE BUTTON */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-28 hidden h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-yellow-400 hover:text-yellow-600 lg:flex"
        >
          {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </button>
      </aside>
    </>
  );
}
