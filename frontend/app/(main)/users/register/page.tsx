"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f6f2]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/hotel-bg.png"
          alt="Luxury Hotel"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-2xl lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="hidden flex-col justify-between bg-gradient-to-br from-yellow-100 to-white p-10 lg:flex">
            <div>
              <h1 className="text-5xl font-light leading-tight text-gray-900">
                Join
                <span className="block font-semibold text-yellow-600">
                  Royal Crescent
                </span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-600">
                Create your luxury account and unlock exclusive stays, premium
                services, and unforgettable experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
              <p className="text-sm leading-relaxed text-gray-600">
                “Where timeless elegance meets modern luxury in every detail.”
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-md">
              {/* TOP */}
              <div className="mb-10 text-center">
                <h2 className="text-4xl font-semibold text-gray-900">
                  Create Account
                </h2>

                <p className="mt-3 text-gray-500">Begin your luxury journey</p>
              </div>

              {/* FORM */}
              <form className="space-y-5">
                {/* FULL NAME */}
                <div>
                  <label className="mb-2 block text-sm text-gray-700">
                    Full Name
                  </label>

                  <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-yellow-500 focus-within:bg-white">
                    <User size={18} className="mr-3 text-yellow-600" />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm text-gray-700">
                    Email Address
                  </label>

                  <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-yellow-500 focus-within:bg-white">
                    <Mail size={18} className="mr-3 text-yellow-600" />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="mb-2 block text-sm text-gray-700">
                    Password
                  </label>

                  <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-yellow-500 focus-within:bg-white">
                    <Lock size={18} className="mr-3 text-yellow-600" />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 transition hover:text-yellow-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div>
                  <label className="mb-2 block text-sm text-gray-700">
                    Confirm Password
                  </label>

                  <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-yellow-500 focus-within:bg-white">
                    <Lock size={18} className="mr-3 text-yellow-600" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="text-gray-400 transition hover:text-yellow-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* TERMS */}
                <label className="flex items-start gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-gray-300"
                  />

                  <span>
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-yellow-600 hover:text-yellow-500"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-yellow-600 hover:text-yellow-500"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="h-14 w-full rounded-2xl bg-yellow-500 text-sm font-semibold text-black transition hover:bg-yellow-400"
                >
                  Create Account
                </button>
              </form>

              {/* DIVIDER */}
              <div className="my-8 flex items-center">
                <div className="h-px flex-1 bg-gray-200" />

                <span className="px-4 text-sm text-gray-400">OR</span>

                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* SOCIAL */}
              <div className="space-y-3">
                <button className="flex h-14 w-full items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-800 transition hover:border-yellow-500 hover:bg-yellow-50">
                  Continue with Google
                </button>

                <button className="flex h-14 w-full items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-800 transition hover:border-yellow-500 hover:bg-yellow-50">
                  Continue with Apple
                </button>
              </div>

              {/* LOGIN */}
              <p className="mt-8 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/users/login"
                  className="font-medium text-yellow-600 hover:text-yellow-500"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
