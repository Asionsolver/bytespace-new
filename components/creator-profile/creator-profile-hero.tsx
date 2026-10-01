"use client";

import Image from "next/image";
import { useState } from "react";
import { CreatorProfileData } from "@/lib/constants";

interface CreatorProfileHeroProps {
  creator: CreatorProfileData;
}

export function CreatorProfileHero({ creator }: CreatorProfileHeroProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(creator.followersCount);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => {
      const next = !prev;
      setFollowersCount((count) => (next ? count + 1 : count - 1));
      return next;
    });
  };

  return (
    <section className="relative w-full bg-primary-800 overflow-hidden select-none">
      {/* Background SVG Grid Pattern (Opacity 12% matching Figma #60:2454) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/courses/courses-hero-bg.svg"
          alt=""
          fill
          className="object-cover object-top opacity-12"
          priority
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-300 mx-auto px-5 sm:px-10 lg:px-0 pt-36 sm:pt-43 pb-14 sm:pb-20.5">
        {/* Creator Info: Avatar + Title & Tagline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Avatar (96x96, rounded-[24px]) */}
          <div className="relative w-24 h-24 rounded-3xl overflow-hidden shrink-0 bg-neutral-900">
            <Image
              src={creator.avatar}
              alt={creator.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name, Badge & Tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <h1 className="font-heading text-heading-s text-neutral-50 ">
                {creator.name}
              </h1>
              <span className="px-6 py-2 rounded-full bg-secondary-400 text-neutral-950 font-body text-label-m">
                {creator.role}
              </span>
            </div>
            <p className="font-body text-body-l text-neutral-50">
              {creator.tagline}
            </p>
          </div>
        </div>

        {/* Bio Description (Figma #60:2185) */}
        <div className="mt-8 sm:mt-10 max-w-300 font-body text-body-l text-neutral-50">
          {creator.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Stats and Action Row (Figma #60:2186) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4">
          {/* Stats Pills (Left) */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Products Stat Pill */}
            <div className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-xs backdrop-blur-md">
              <span className="font-body text-label-l font-medium text-primary-800">
                {creator.productsCount}
              </span>
              <span className="font-body text-label-l font-medium text-neutral-950">
                Products
              </span>
            </div>

            {/* Followers Stat Pill */}
            <div className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-xs backdrop-blur-md">
              <span className="font-body text-label-l font-medium text-primary-800">
                {followersCount}
              </span>
              <span className="font-body text-label-l font-medium text-neutral-950">
                Followers
              </span>
            </div>
          </div>

          {/* Follow Button (Right) */}
          <button
            type="button"
            onClick={handleFollowToggle}
            className={`px-6 py-3 rounded-full font-body text-label-l  outline outline-transparent font-medium transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${isFollowing
              ? "bg-white/20 hover:bg-white/30 text-neutral-50 outline-white/40"
              : "bg-secondary-400 hover:bg-secondary-500 text-neutral-950"
              }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </section>
  );
}
