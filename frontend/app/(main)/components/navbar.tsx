"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Search,
  ChevronDown,
  Settings,
  Heart,
  LogOut,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Suites", href: "/suites" },
  { name: "Amenities", href: "/amenities" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setUserOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 w-14">
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

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            {/* Search Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 transition hover:border-yellow-400 hover:text-yellow-400 cursor-pointer"
            >
              {isOpen ? <X size={18} /> : <Search size={18} />}
            </button>

            {/* Expanding Search */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 320, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-14 top-1/2 overflow-hidden -translate-y-1/2"
                >
                  <div className="flex h-12 items-center rounded-full border border-yellow-500/30 bg-black/80 px-5 backdrop-blur-xl">
                    <Search size={18} className="mr-3 text-yellow-400" />

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

          {/* USER DROPDOWN */}
          {/* <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setUserOpen(!userOpen)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 text-gray-200 transition hover:border-yellow-400 hover:text-yellow-400 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-black">
                <User size={16} />
              </div>

              <span className="px-1 text-sm font-medium">Emad</span>

              <ChevronDown
                size={16}
                className={`mr-1 transition ${userOpen ? "rotate-180" : ""}`}
              />
            </button> */}

          {/* <AnimatePresence>
              {userOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.96,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-4 w-72 overflow-hidden rounded-3xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-2xl"
                > */}
          {/* TOP */}
          {/* <div className="border-b border-white/10 p-5">
                    <p className="text-lg font-semibold text-white">
                      Emad Elnagar
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      emad@example.com
                    </p>
                  </div> */}

          {/* MENU */}
          {/* <div className="p-3">
                    <DropdownItem
                      icon={<User size={18} />}
                      label="My Profile"
                      href="/profile"
                    />

                    <DropdownItem
                      icon={<Heart size={18} />}
                      label="Saved Rooms"
                      href="/saved"
                    />

                    <DropdownItem
                      icon={<Settings size={18} />}
                      label="Settings"
                      href="/settings"
                    />

                    <div className="my-3 border-t border-white/10" />

                    <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-red-400 transition hover:bg-red-500/10 cursor-pointer">
                      <LogOut size={18} />

                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          {/* Non logged in user Button */}
          <div className="relative">
            <button
              onClick={() => setUserOpen(!userOpen)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 text-gray-200 transition hover:border-yellow-400 hover:text-yellow-400 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <User size={16} />
              </div>

              <span className="px-1 text-sm font-medium">Account</span>

              <ChevronDown
                size={16}
                className={`mr-1 transition ${userOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {userOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.96,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-4 w-80 overflow-hidden rounded-3xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-2xl"
                >
                  {/* TOP */}
                  <div className="border-b border-white/10 p-6">
                    <h3 className="text-2xl font-semibold text-white">
                      Welcome
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Sign in to manage bookings, save rooms, and access
                      exclusive luxury offers.
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="space-y-3 p-4">
                    <Link
                      href="/login"
                      className="flex items-center justify-center rounded-2xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
                    >
                      Sign In
                    </Link>

                    <Link
                      href="/register"
                      className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-yellow-400 hover:text-yellow-400"
                    >
                      Create Account
                    </Link>
                  </div>

                  {/* EXTRA LINKS */}
                  <div className="border-t border-white/10 p-3">
                    <DropdownItem
                      icon={<Settings size={18} />}
                      label="Help Center"
                      href="/help"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/booking"
            className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
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
              className="mt-4 block rounded-full bg-yellow-500 px-5 py-3 text-center font-semibold text-black"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-200 transition hover:bg-white/5 hover:text-yellow-400"
    >
      {icon}

      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
