"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect this to your newsletter API later.
    console.log("Newsletter subscription:", email);
    setEmail("");
  }

  return (
    <footer className="bg-[#172a35] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b56b]">
              Stay Connected
            </p>

            <h2 className="mt-3 font-serif text-2xl font-medium sm:text-3xl">
              A Little Luxury in Your Inbox
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Subscribe for hotel updates, exclusive offers, and inspiration for
              your next getaway.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md gap-2"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#c5a45b]"
            />

            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#c5a45b] px-4 py-3 text-sm font-semibold text-[#172a35] transition hover:bg-[#d8bb78] sm:px-5"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-8 lg:py-16">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block">
            <span className="font-serif text-3xl font-medium tracking-wide">
              Luxury
              <span className="text-[#d5b56b]"> Hotel</span>
            </span>
          </Link>

          <div className="mt-3 h-px w-16 bg-[#c5a45b]" />

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            Where timeless elegance meets exceptional hospitality. Discover a
            stay designed around your comfort.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-serif text-xl font-medium">Explore</h3>
          <div className="mt-3 h-px w-10 bg-[#c5a45b]" />

          <ul className="mt-6 space-y-4">
            {[
              { label: "Home", href: "/" },
              { label: "Our Rooms", href: "/rooms" },
              { label: "Amenities", href: "/amenities" },
              { label: "Gallery", href: "/gallery" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/60 transition hover:text-[#d5b56b]"
                >
                  <ArrowRight
                    size={13}
                    className="-ml-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100"
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Guest services */}
        <div>
          <h3 className="font-serif text-xl font-medium">Guest Services</h3>
          <div className="mt-3 h-px w-10 bg-[#c5a45b]" />

          <ul className="mt-6 space-y-4">
            {[
              { label: "Book a Room", href: "/rooms" },
              { label: "View Amenities", href: "/amenities" },
              { label: "Explore Gallery", href: "/gallery" },
              { label: "Get in Touch", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/60 transition hover:text-[#d5b56b]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif text-xl font-medium">Get in Touch</h3>
          <div className="mt-3 h-px w-10 bg-[#c5a45b]" />

          <ul className="mt-6 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin size={19} className="mt-0.5 shrink-0 text-[#d5b56b]" />
              <span className="text-sm leading-6 text-white/60">
                25 Coastal Avenue,
                <br />
                Alexandria, Egypt
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-[#d5b56b]" />
              <a
                href="tel:+201234567890"
                className="text-sm text-white/60 transition hover:text-[#d5b56b]"
              >
                +20 123 456 7890
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-[#d5b56b]" />
              <a
                href="mailto:reservations@luxuryhotel.com"
                className="break-all text-sm text-white/60 transition hover:text-[#d5b56b]"
              >
                reservations@luxuryhotel.com
              </a>
            </li>
          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d5b56b] transition hover:text-white"
          >
            Contact our team
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-white/45">
            © {new Date().getFullYear()} Luxury Hotel. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="text-white/45 transition hover:text-[#d5b56b]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-white/45 transition hover:text-[#d5b56b]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
