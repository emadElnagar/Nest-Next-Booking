"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  User,
  Lock,
  Search,
  ChevronDown,
  Settings,
  Heart,
  LogOut,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  useGetCurrentUserQuery,
  useLogoutUserMutation,
} from "@/lib/services/authApi";
import { usersApi } from "@/lib/services/authApi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Amenities", href: "/amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { data: currentUser } = useGetCurrentUserQuery();
  const [logoutUser, { isLoading: logoutLoading }] = useLogoutUserMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown & search outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setUserOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle logout
  const handleLogout = async () => {
    await logoutUser().unwrap();
    setUserOpen(false);
    dispatch(usersApi.util.resetApiState());
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <Image
              src="/logo.png"
              alt="Hotel Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-wide text-yellow-400">
              Royal Crescent
            </h1>
            <p className="text-xs uppercase tracking-[4px] text-gray-400">
              Luxury Hotel
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 transition hover:text-yellow-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side (Actions for Mobile & Desktop) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* SEARCH BUTTON & DROPDOWN (Mobile & Desktop) */}
          <div ref={searchRef} className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 transition hover:border-yellow-400 hover:text-yellow-400 cursor-pointer"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>

            {/* Expanding Search Input */}
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "260px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 sm:right-14 top-14 sm:top-1/2 overflow-hidden sm:-translate-y-1/2 z-50 shadow-2xl"
                >
                  <div className="flex h-12 items-center rounded-2xl sm:rounded-full border border-yellow-500/30 bg-black/90 px-4 sm:px-5 backdrop-blur-xl">
                    <Search
                      size={18}
                      className="mr-3 text-yellow-400 shrink-0"
                    />

                    <input
                      autoFocus
                      type="text"
                      placeholder="Search rooms..."
                      className="w-full bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* USER DROPDOWN (Mobile & Desktop) */}
          {currentUser ? (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setUserOpen(!userOpen)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 text-gray-200 transition hover:border-yellow-400 hover:text-yellow-400 cursor-pointer"
              >
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-yellow-500 text-black">
                  <User size={16} />
                </div>
                <span className="hidden sm:inline-block px-1 text-sm font-medium">
                  {currentUser.firstName}
                </span>
                <ChevronDown
                  size={16}
                  className={`hidden sm:block mr-1 transition ${userOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {userOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-4 w-72 overflow-hidden rounded-3xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-2xl z-50"
                  >
                    <div className="border-b border-white/10 p-5">
                      <p className="text-lg font-semibold text-white">
                        {currentUser.firstName} {currentUser.lastName}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">
                        {currentUser.email}
                      </p>
                    </div>

                    <div className="p-3">
                      <DropdownItem
                        icon={<User size={18} />}
                        label="My Profile"
                        href="/profile"
                        onClick={() => setUserOpen(false)}
                      />

                      {currentUser.role === "admin" && (
                        <DropdownItem
                          icon={<Lock size={18} />}
                          label="Dashboard"
                          href="/admin"
                          onClick={() => setUserOpen(false)}
                        />
                      )}

                      <DropdownItem
                        icon={<Heart size={18} />}
                        label="Saved Rooms"
                        href="/saved"
                        onClick={() => setUserOpen(false)}
                      />

                      <DropdownItem
                        icon={<Settings size={18} />}
                        label="Settings"
                        href="/settings"
                        onClick={() => setUserOpen(false)}
                      />

                      <div className="my-3 border-t border-white/10" />

                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-red-400 transition hover:bg-red-500/10 cursor-pointer"
                      >
                        <LogOut size={18} />
                        <span className="text-sm font-medium">
                          {logoutLoading ? "Logging out..." : "Logout"}
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setUserOpen(!userOpen)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 text-gray-200 transition hover:border-yellow-400 hover:text-yellow-400 cursor-pointer"
              >
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10">
                  <User size={16} />
                </div>
                <span className="hidden sm:inline-block px-1 text-sm font-medium">
                  Account
                </span>
                <ChevronDown
                  size={16}
                  className={`hidden sm:block mr-1 transition ${userOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {userOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-4 w-80 overflow-hidden rounded-3xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-2xl z-50"
                  >
                    <div className="border-b border-white/10 p-6">
                      <h3 className="text-2xl font-semibold text-white">
                        Welcome
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        Sign in to manage bookings, save rooms, and access
                        exclusive luxury offers.
                      </p>
                    </div>

                    <div className="space-y-3 p-4">
                      <Link
                        href="/users/login"
                        onClick={() => setUserOpen(false)}
                        className="flex items-center justify-center rounded-2xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
                      >
                        Sign In
                      </Link>

                      <Link
                        href="/users/register"
                        onClick={() => setUserOpen(false)}
                        className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-yellow-400 hover:text-yellow-400"
                      >
                        Create Account
                      </Link>
                    </div>

                    <div className="border-t border-white/10 p-3">
                      <DropdownItem
                        icon={<Settings size={18} />}
                        label="Help Center"
                        href="/help"
                        onClick={() => setUserOpen(false)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Book Now Button (Desktop only) */}
          <Link
            href="/booking"
            className="hidden md:inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Book Now
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-white md:hidden hover:bg-white/5 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-black/95 md:hidden"
        >
          <div className="space-y-2 px-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-3 text-gray-200 transition hover:bg-white/5 hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-4 block rounded-full bg-yellow-500 px-5 py-3 text-center font-semibold text-black"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function DropdownItem({
  icon,
  label,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-200 transition hover:bg-white/5 hover:text-yellow-400"
    >
      {icon}

      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
