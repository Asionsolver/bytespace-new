"use client";

import Image from "next/image";
import { useState } from "react";
import { SignalLevel, Star, People, Share, Play } from "@/icons";
import { CourseDetailData } from "@/lib/constants";

import { CourseDetailsSidebar } from "./course-details-sidebar";

interface CourseDetailsHeroProps {
  course: CourseDetailData;
}

export function CourseDetailsHero({ course }: CourseDetailsHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative bg-primary-800 text-neutral-50 overflow-visible pt-28 pb-14 lg:pb-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/courses/courses-hero-bg.svg"
          alt=""
          fill
          className="object-cover object-top opacity-12"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-0">
        {/* Top Header Row: Course Title & Share */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mt-15">
          <div className="max-w-[1040px]">
            <h1 className="font-heading text-heading-s sm:text-[36px] font-semibold text-neutral-50">
              {course.title}
            </h1>
            <p className="font-heading text-heading-xs text-neutral-50 mt-2">
              {course.subtitle}
            </p>
            <p className="font-body text-label-l text-[#F1F4FE] mt-6">
              by{" "}
              <span className="text-secondary-400 font-medium">
                {course.author}
              </span>
            </p>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
              {/* Level Badge */}
              <div className="flex items-center gap-2 px-6 py-2 bg-white rounded-full text-neutral-950 font-body text-label-m">
                <SignalLevel size={24} color="#003BE2" />
                <span>{course.level}</span>
              </div>

              {/* Rating Badge */}
              <div className="flex items-center gap-2 px-5 py-2 bg-white rounded-full text-neutral-950 font-body text-label-m font-medium shadow-sm">
                <Star size={24} color="#003BE2" />
                <span>
                  {course.rating} ({course.reviewsCount} reviews)
                </span>
              </div>

              {/* Students Badge */}
              <div className="flex items-center gap-2 px-5 py-2 bg-white rounded-full text-neutral-950 font-body text-label-m font-medium shadow-sm">
                <People size={24} color="#003BE2" />
                <span>{course.studentsCount} Students</span>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div className="self-start">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-2.5 bg-secondary-400 hover:bg-secondary-500 text-neutral-950 rounded-full font-body text-label-m font-medium transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <Share size={20} color="#242528" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* Video Preview Card & Sidebar Row (Aligned at top level like Figma) */}
        <div className="mt-10 lg:mt-14.75 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left: Video Preview Card */}
          <div className="w-full lg:max-w-180 flex-1">
            <div className="relative w-full aspect-720/479 rounded-xl overflow-hidden bg-neutral-900 outline outline-neutral-700/40 shadow-2xl group">
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/GTNgiTK-ic8?autoplay=1"
                  title={course.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={course.videoPreview}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Center Play Button with glassmorphic styling */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play video preview"
                    className="absolute inset-0 m-auto w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[rgba(61,61,61,0.28)] backdrop-blur-xl border border-white/20 flex items-center justify-center cursor-pointer shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[rgba(61,61,61,0.4)] active:scale-95"
                  >
                    <Play size={64} color="#F5F2FF" className="translate-x-0.5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right: Sidebar Card (starts in hero next to video player and hangs down into white section) */}
          <div className="w-full lg:w-[416px] shrink-0 lg:-mb-[440px] relative z-30">
            <CourseDetailsSidebar course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
