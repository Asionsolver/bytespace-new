"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Google } from "@/icons";
import { AUTH_CONTENT } from "@/lib/constants";

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsLoggedIn(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const config = AUTH_CONTENT.login;

  return (
    <div className="bg-white rounded-xl  p-7 sm:p-10 lg:px-15.75 lg:pt-15.25 lg:pb-10 transition-all w-full">
      {/* Eyebrow badge */}
      <span className="text-primary-700 text-body-l">
        {config.badge}
      </span>

      {/* Main Title */}
      <h2 className="font-heading text-neutral-950 text-[28px] sm:text-[34px] lg:text-heading-m tracking-[-1%] mb-7 sm:mb-10">
        {config.title}
      </h2>

      {isLoggedIn ? (
        <div className="py-8 text-center flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#CBFC01] flex items-center justify-center text-neutral-950 font-bold text-xl shadow-sm">
            ✓
          </div>
          <h3 className="font-heading font-semibold text-lg text-neutral-900">
            Welcome Back!
          </h3>
          <p className="text-sm text-neutral-500 font-body max-w-[280px]">
            You have successfully signed in to ByteSpace.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center justify-center bg-[#CBFC01] hover:bg-[#bbf000] text-neutral-950 font-semibold px-7 py-2.5 rounded-full text-sm transition-all"
          >
            Go to Home
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-label-s text-neutral-800 mb-2 font-body"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="designer@example.com"
              className="w-full px-6 py-3 rounded-[12px]  outline outline-neutral-100 bg-white text-neutral-400  transition-all text-body-l font-body"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-label-s text-neutral-800 mb-2 font-body"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-6 py-3 rounded-[12px]  outline outline-neutral-100 bg-white text-neutral-400  transition-all text-body-l font-body"
            />
          </div>

          {/* Sign In Button (Aligned to the Right) */}
          <div className="flex justify-end ">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center bg-secondary-400 text-neutral-950 rounded-full text-label-l transition-all duration-200 cursor-pointer px-6 py-3"
            >
              {isSubmitting ? "Signing in..." : config.submitText}
            </button>
          </div>

          {/* "or" Divider */}
          <div className="relative mt-18.25 mb-10 flex items-center justify-center">
            <div className="w-full border-t border-[#D1D1D1]" />
            <span className="absolute bg-white px-3 body-l lowercase text-[#888888]">
              or
            </span>
          </div>

          {/* Social Logins: Facebook & Google */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Sign in with Facebook"
              className="w-18 h-18 rounded-xl border border-[#D1D1D1] flex items-center justify-center "
            >
              <Facebook
                size={40}
                color="#000000"

              />
            </button>
            <button
              type="button"
              aria-label="Sign in with Google"
              className="w-18 h-18 rounded-xl border border-[#D1D1D1] flex items-center justify-center "
            >
              <Google
                size={40}
                color="#000000"
              />
            </button>
          </div>
        </form>
      )}

      {/* Switch to Register Link */}
      <div className="mt-10 sm:mt-18.25 text-center text-body-m font-body text-[#888888]">
        {config.switchPrompt}{" "}
        <Link
          href={config.switchHref}
          className="text-primary-800 ml-1"
        >
          {config.switchLinkText}
        </Link>
      </div>
    </div>
  );
}
