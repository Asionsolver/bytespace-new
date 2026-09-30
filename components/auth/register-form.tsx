"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AUTH_CONTENT } from "@/lib/constants";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const config = AUTH_CONTENT.register;

  return (
    <div className="bg-white rounded-xl  p-7 sm:p-10 lg:px-15.75 lg:pt-15.25 lg:pb-12.75 transition-all w-full">
      {/* Eyebrow badge */}
      <div className="text-primary-700 text-body-l">
        {config.badge}
      </div>

      {/* Main Title */}
      <h2 className="font-heading text-neutral-950 text-[28px] sm:text-[34px] lg:text-heading-m tracking-[-1%] mb-7 sm:mb-10">
        {config.title}
      </h2>

      {isSubmitted ? (
        <div className="py-8 text-center flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#CBFC01] flex items-center justify-center text-neutral-950 font-bold text-xl shadow-sm">
            ✓
          </div>
          <h3 className="font-heading font-semibold text-lg text-neutral-900">
            Account Created!
          </h3>
          <p className="text-sm text-neutral-500 font-body max-w-[280px]">
            Welcome to ByteSpace! Check your email to verify your account.
          </p>
          <Link
            href="/signin"
            className="mt-4 inline-flex items-center justify-center bg-[#CBFC01] hover:bg-[#bbf000] text-neutral-950 font-semibold px-7 py-2.5 rounded-full text-sm transition-all"
          >
            Go to Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Full Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-label-s text-neutral-800 mb-2 font-body"

            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jamie Davis"
              className="w-full px-6 py-3 rounded-[12px]  outline outline-neutral-100 bg-white text-neutral-400  transition-all text-body-l font-body"
            />
          </div>

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

          {/* Continue Button (Aligned to the Right) */}
          <div className="flex justify-end ">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center bg-secondary-400 text-neutral-950 rounded-full text-label-l transition-all duration-200 cursor-pointer px-6 py-3"
            >
              {isSubmitting ? "Creating..." : config.submitText}
            </button>
          </div>
        </form>
      )}

      {/* Switch to Login Link */}
      <div className="mt-12 sm:mt-30.5 text-center text-body-m font-body text-neutral-600">
        {config.switchPrompt}{" "}
        <Link
          href={config.switchHref}
          className="text-primary-800 hover:underline transition-colors ml-1"
        >
          {config.switchLinkText}
        </Link>
      </div>
    </div>
  );
}
