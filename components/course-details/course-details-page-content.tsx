"use client";

import { CourseDetailData } from "@/lib/constants";
import { CourseDetailsHero } from "./course-details-hero";
import { CourseDetailsMainContent } from "./course-details-main-content";

interface CourseDetailsPageContentProps {
  course: CourseDetailData;
}

export function CourseDetailsPageContent({
  course,
}: CourseDetailsPageContentProps) {
  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Hero Blue Section with Title, Badges, and Video Player */}
      <CourseDetailsHero course={course} />

      {/* 2. Content & Sidebar Section */}
      <div className="w-full max-w-300 mx-auto px-5 sm:px-10 lg:px-0 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Column: Tabs, Description, Sneak Peak, Key Points */}
          <main className="w-full lg:max-w-181.25 flex-1">
            <CourseDetailsMainContent course={course} />
          </main>

          {/* Right Column Spacer (reserves 416px space for the sidebar card hanging from hero) */}
          <div className="hidden lg:block w-full lg:w-104 shrink-0 pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
