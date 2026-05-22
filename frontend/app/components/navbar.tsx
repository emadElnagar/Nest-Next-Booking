"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, User, Search } from "lucide-react";
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

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 transition hover:border-yellow-400 hover:text-yellow-400 cursor-pointer">
            <User size={18} />
          </button>

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
