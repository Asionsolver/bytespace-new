"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Source, Videocam, Certificate, Consultation, Check } from "@/icons";
import { CourseDetailData } from "@/lib/constants";

interface CourseDetailsSidebarProps {
  course: CourseDetailData;
}

export function CourseDetailsSidebar({ course }: CourseDetailsSidebarProps) {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <aside className="w-full lg:max-w-103 shrink-0 bg-white outline outline-neutral-200 rounded-xl p-6 sm:p-8 lg:p-10 ">
      {/* 1. Lessons Preview Section */}
      <div>
        <h3 className="font-heading text-heading-xs font-semibold text-neutral-950">
          {course.lessonsCount} Lessons ({course.totalDuration})
        </h3>

        <div className="flex flex-col gap-3 mt-6">
          {course.lessons.map((lesson) => (
            <div
              key={lesson.number}
              className="flex items-start justify-between gap-3 text-neutral-950"
            >
              <div className="flex items-start gap-2 min-w-0">
                <span className="font-body text-label-m font-medium text-neutral-950 shrink-0">
                  {lesson.number}
                </span>
                <span className="font-body text-label-m font-medium text-neutral-950">
                  {lesson.title}
                </span>
              </div>
              <span className="font-body text-body-m text-primary-800 shrink-0">
                {lesson.duration}
              </span>
            </div>
          ))}

          <button
            type="button"
            className="text-left font-body text-body-m text-neutral-700 hover:text-primary-800 hover:underline transition-colors cursor-pointer"
          >
            {course.moreVideosCount} more videos
          </button>
        </div>
      </div>

      {/* 2. Enroll Pitch & Action */}
      <div className="pt-6">
        <p className="font-body text-body-m text-neutral-700 leading-relaxed">
          {course.enrollPitch}
        </p>

        {/* Price Row */}
        <div className="flex items-baseline mt-6 h-[38px]">
          <span className="font-body text-heading-s text-primary-800 ">
            ${course.price}
          </span>
          <span className="font-body text-body-m text-neutral-700 ">
            {course.priceLabel}
          </span>
        </div>

        {/* Enroll Button */}
        <button
          type="button"
          onClick={() => setEnrolled(true)}
          className={`w-full mt-6 py-3 rounded-full font-body text-label-l font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2  ${enrolled
            ? "bg-primary-800 text-white"
            : "bg-secondary-400 hover:bg-secondary-500 text-neutral-950 active:scale-[0.99]"
            }`}
        >
          {enrolled ? (
            <>
              <Check size={20} color="#FFFFFF" />
              <span>Enrolled Successfully!</span>
            </>
          ) : (
            <span>Enroll Now</span>
          )}
        </button>
      </div>

      {/* 3. This Course Includes */}
      <div className=" pt-6">
        <h4 className="font-heading text-heading-xs font-semibold text-neutral-950">
          This course include
        </h4>

        <ul className="flex flex-col gap-3 mt-3">
          <li className="flex items-center gap-3 font-body text-body-m text-neutral-700">
            <Source size={22} color="#003BE2" className="shrink-0" />
            <span>Learning Resources</span>
          </li>
          <li className="flex items-center gap-3 font-body text-body-m text-neutral-700">
            <Videocam size={22} color="#003BE2" className="shrink-0" />
            <span>Quality Lesson Videos</span>
          </li>
          <li className="flex items-center gap-3 font-body text-body-m text-neutral-700">
            <Certificate size={22} color="#003BE2" className="shrink-0" />
            <span>Certificate of Completion</span>
          </li>
          <li className="flex items-center gap-3 font-body text-body-m text-neutral-700">
            <Consultation size={22} color="#003BE2" className="shrink-0" />
            <span>Private Consultation</span>
          </li>
        </ul>
      </div>

      {/* 4. Creator Profile Card */}
      <div className="mt-6 pt-6 border-t border-neutral-200">
        <div className="flex items-center gap-3">
          <Link
            href="/creators/purepearl-studio"
            className="relative w-[52px] h-[52px] rounded-full overflow-hidden bg-neutral-100 shrink-0 hover:opacity-90 transition-opacity"
          >
            <Image
              src={course.creator.avatar}
              alt={course.creator.name}
              fill
              className="object-cover"
            />
          </Link>
          <div className="min-w-0">
            <Link
              href="/creators/purepearl-studio"
              className="font-heading text-label-l font-medium text-neutral-950 truncate hover:text-primary-800 transition-colors block"
            >
              {course.creator.name}
            </Link>
            <p className="font-body text-body-m text-neutral-700">
              {course.creator.role}
            </p>
          </div>
        </div>

        <p className="font-body text-body-m text-neutral-700 mt-6 leading-relaxed">
          {course.creator.bio}
        </p>

        <Link
          href="/creators/purepearl-studio"
          className="inline-flex items-center justify-center w-full sm:w-auto mt-6 px-4 py-2 outline outline-neutral-200 rounded-full font-body text-label-m font-medium text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-all text-center"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
