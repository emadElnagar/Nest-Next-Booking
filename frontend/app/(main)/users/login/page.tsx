"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useLoginUserMutation } from "@/lib/services/authApi";
import { useForm } from "react-hook-form";
import { UserLogin } from "@/types/user";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userLogin, { isLoading, isError, error }] = useLoginUserMutation();
  const { register, handleSubmit, reset } = useForm<UserLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // Handle form submission
  const onSubmit = async (data: UserLogin) => {
    await userLogin(data).unwrap();
    reset();
  };

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
                Welcome Back to
                <span className="block font-semibold text-yellow-600">
                  Royal Crescent
                </span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-600">
                Access your luxury stays, premium reservations, and exclusive
                offers.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
              <p className="text-sm leading-relaxed text-gray-600">
                “Luxury is not about excess — it&apos;s about timeless comfort
                and unforgettable experiences.”
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-md">
              {/* TOP */}
              <div className="mb-10 text-center">
                <h2 className="text-4xl font-semibold text-gray-900">
                  Sign In
                </h2>

                <p className="mt-3 text-gray-500">
                  Continue your luxury experience
                </p>
              </div>

              {/* FORM */}
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
                      {...register("email", {
                        required: "Please enter your email",
                      })}
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
                      placeholder="Enter your password"
                      className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                      {...register("password", {
                        required: "Please enter your password",
                      })}
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

                {/* OPTIONS */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    Remember me
                  </label>

                  <Link
                    href="/users/forgot-password"
                    className="text-yellow-600 transition hover:text-yellow-500"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-14 w-full rounded-2xl bg-yellow-500 text-sm font-semibold text-black transition hover:bg-yellow-400 cursor-pointer disabled:cursor-not-allowed disabled:bg-yellow-300"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
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

              {/* REGISTER */}
              <p className="mt-8 text-center text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/users/register"
                  className="font-medium text-yellow-600 hover:text-yellow-500"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
