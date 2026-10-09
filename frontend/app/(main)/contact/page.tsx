"use client";

import Hero from "@/components/main/hero";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { SubmitEvent } from "react";

export default function SendEmail() {
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send email
  };

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}

      <Hero
        heroImage="/static/images/rooms/rooms-hero.png"
        heroSubtitle="Get In Touch"
        heroTitle="Contact Us"
        heroDescription="Whether you have a question about your stay, need assistance with a booking, or simply want to learn more about our hotel, we are here to help."
      />

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#b08a20]">
                Contact Information
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold text-gray-900">
                We would love to hear from you
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Reach out to our team anytime. We are committed to making your
                experience with us as comfortable and seamless as possible.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#b08a20] shadow-sm">
                  <MapPin size={20} />
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">Our Address</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    25 Coastal Avenue
                    <br />
                    Alexandria, Egypt
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#b08a20] shadow-sm">
                  <Phone size={20} />
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-sm text-gray-500">+20 123 456 7890</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Available 24 hours
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#b08a20] shadow-sm">
                  <Mail size={20} />
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    reservations@luxuryhotel.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#b08a20] shadow-sm">
                  <Clock3 size={20} />
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">Front Desk</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Open 24 hours a day
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="John"
                    className="w-full rounded-lg border border-gray-200 bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d5ae3d] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full rounded-lg border border-gray-200 bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d5ae3d] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-200 bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d5ae3d] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+20 123 456 7890"
                    className="w-full rounded-lg border border-gray-200 bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d5ae3d] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-gray-200 bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d5ae3d] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-[#faf9f7] px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#d5ae3d] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b08a20]"
              >
                <Send size={17} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="h-[420px] w-full">
            <iframe
              title="Luxury Hotel Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=29.88%2C31.16%2C29.96%2C31.24&layer=mapnik&marker=31.2001%2C29.9187"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-100 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-serif text-xl font-semibold text-gray-900">
                Luxury Hotel
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                25 Coastal Avenue, Alexandria, Egypt
              </p>
            </div>

            <a
              href="https://www.openstreetmap.org/?mlat=31.2001&mlon=29.9187#map=15/31.2001/29.9187"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b08a20]"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
