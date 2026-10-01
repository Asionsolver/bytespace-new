"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle, Videocam, Star } from "@/icons";
import { CourseDetailData } from "@/lib/constants";

interface CourseDetailsMainContentProps {
  course: CourseDetailData;
}

const TABS = ["About", "Lesson", "Reviews"] as const;

// Figma Lesson Modules (node 60:102)
const LESSON_MODULES = [
  {
    id: 1,
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    id: 2,
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    id: 3,
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    id: 4,
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    id: 5,
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    id: 6,
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

// Figma Reviews Rating Distribution (node 60:681)
const RATING_DISTRIBUTION = [
  { stars: 5, count: 720, percentage: 80 },
  { stars: 4, count: 120, percentage: 45 },
  { stars: 3, count: 21, percentage: 15 },
  { stars: 2, count: 12, percentage: 8 },
  { stars: 1, count: 16, percentage: 10 },
];

// Figma Individual Reviews (node 60:681)
const INDIVIDUAL_REVIEWS = [
  {
    id: 1,
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "/course-details/reviewer-1.png",
    rating: 5,
    date: "a year ago",
    comment:
      '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "/course-details/reviewer-2.png",
    rating: 5,
    date: "a year ago",
    comment:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "/course-details/reviewer-3.png",
    rating: 5,
    date: "a year ago",
    comment:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "/course-details/reviewer-4.png",
    rating: 5,
    date: "a year ago",
    comment:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const RATING_FILTERS = [
  { label: "All rating", value: "all" },
  { label: "5", value: 5 },
  { label: "4", value: 4 },
  { label: "3", value: 3 },
  { label: "2", value: 2 },
  { label: "1", value: 1 },
];

export function CourseDetailsMainContent({
  course,
}: CourseDetailsMainContentProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("About");
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | "all">("all");

  const filteredReviews =
    selectedRatingFilter === "all"
      ? INDIVIDUAL_REVIEWS
      : INDIVIDUAL_REVIEWS.filter((r) => r.rating === selectedRatingFilter);

  return (
    <div className="w-full max-w-181.25">
      {/* 1. Main Navigation Tabs: About | Lesson | Reviews */}
      <div className="flex items-center gap-4">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-body text-label-m font-medium transition-all duration-200 cursor-pointer ${isActive
                ? "bg-secondary-400 text-neutral-950 shadow-xs"
                : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: ABOUT                                                              */}
      {/* ========================================================================= */}
      {activeTab === "About" && (
        <div className="flex flex-col gap-10 mt-10">
          {/* Description Section */}
          <section>
            <h2 className="font-heading text-heading-xs font-semibold text-neutral-950">
              Description
            </h2>
            <div className="flex flex-col gap-4 mt-6 font-body text-body-m text-neutral-700">
              {course.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Sneak Peak Section */}
          <section>
            <h2 className="font-heading text-heading-xs font-semibold text-neutral-950">
              Sneak Peak
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {course.sneakPeekImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-167/125 rounded-lg overflow-hidden bg-neutral-100 group"
                >
                  <Image
                    src={imgSrc}
                    alt={`Course Sneak Peek ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 167px"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Key Points Section */}
          <section>
            <h2 className="font-heading text-heading-xs font-semibold text-neutral-950">
              Key Points
            </h2>
            <div className="flex flex-col gap-3 mt-6">
              {course.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle
                    size={24}
                    color="#003BE2"
                    className="shrink-0"
                  />
                  <span className="font-body text-body-m text-neutral-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: LESSON (Figma Node 60:102)                                         */}
      {/* ========================================================================= */}
      {activeTab === "Lesson" && (
        <div className="flex flex-col gap-6 mt-10">
          {/* Explore the Modules */}
          <section>
            <h2 className="font-heading text-heading-xs font-semibold text-neutral-950">
              Explore the Modules
            </h2>
            <p className="font-body text-body-m text-neutral-700 mt-6">
              Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
            </p>
          </section>

          {/* Lesson List */}
          <section>
            <h2 className="font-heading text-heading-xs font-semibold text-neutral-950 mb-6">
              Lesson List
            </h2>
            <div className="flex flex-col gap-6">
              {LESSON_MODULES.map((module) => (
                <div
                  key={module.id}
                  className="flex items-start gap-3.25"
                >
                  {/* Lime Rounded Icon Box */}
                  <div className="p-4 shrink-0 rounded-xl bg-secondary-400 flex items-center justify-center ">
                    <Videocam size={40} color="#242528" />
                  </div>

                  {/* Module Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="font-heading text-label-m font-semibold text-neutral-950 ">
                      {module.title}
                    </h3>
                    <p className="font-body text-body-m text-neutral-700 mt-1 ">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lesson Content */}
          <section>
            <h2 className="font-heading text-heading-xs font-semibold text-neutral-950">
              Lesson Content
            </h2>
            <p className="font-body text-body-m text-neutral-700 mt-6 ">
              Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
            </p>
          </section>

          {/* Lesson Progress Tracking */}
          <section>
            <h2 className="font-heading text-heading-xs font-semibold text-neutral-950">
              Lesson Progress Tracking
            </h2>
            <p className="font-body text-body-m text-neutral-700 mt-6 ">
              Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
            </p>

            {/* Progress Card */}
            <div className="mt-6 p-4 rounded-lg outline outline-neutral-200 bg-white">
              <span className="font-body text-label-s font-medium text-neutral-950 block">
                Learning Progress
              </span>
              <span className="font-heading text-heading-s font-semibold text-neutral-950 block mt-1">
                55%
              </span>

              {/* Progress Bar Track */}
              <div className="w-full h-2 rounded-xl bg-neutral-100 overflow-hidden mt-3">
                <div
                  className="h-full bg-secondary-400 rounded-full transition-all duration-500"
                  style={{ width: "55%" }}
                />
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: REVIEWS (Figma Node 60:681)                                        */}
      {/* ========================================================================= */}
      {activeTab === "Reviews" && (
        <div className="flex flex-col gap-6 mt-10">
          {/* What Learners Are Saying */}
          <section>
            <h2 className="font-heading text-heading-xs  text-neutral-950">
              What Learners Are Saying
            </h2>
            <p className="font-body text-body-m text-neutral-700 mt-6 ">
              Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
            </p>

            {/* Ratings Summary Card */}
            <div className="mt-6 p-6 sm:p-10 rounded-lg outline outline-neutral-200 bg-white flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* Left: Electric Lime Big Rating Box */}
              <div className="p-10 shrink-0 rounded-xl bg-secondary-400 flex flex-col items-center justify-center text-center  backdrop-blur-2xl">
                <span className="font-body text-label-s font-medium text-neutral-950">
                  Ratings
                </span>
                <span className="font-heading text-4xl sm:text-[40px] font-semibold text-neutral-950 mt-1 leading-none">
                  4.7
                </span>
              </div>

              {/* Right: Star Distribution Bars */}
              <div className="flex-1 w-full flex flex-col gap-1">
                {RATING_DISTRIBUTION.map((row) => (
                  <div
                    key={row.stars}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    {/* Progress Bar */}
                    <div className="flex-1 h-2 rounded-full bg-neutral-100 overflow-hidden">
                      <div
                        className="h-full bg-secondary-400 rounded-full"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>

                    {/* 5 Stars Icons */}
                    <div className="flex items-center gap-1 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} color="#242528" />
                      ))}
                    </div>

                    {/* Count */}
                    <span className="w-10 text-right font-body text-body-m text-neutral-700 shrink-0">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Individual Reviews Section */}
          <section>
            <h2 className="font-heading text-heading-xs font-semibold text-neutral-950 mb-4">
              Individual Reviews:
            </h2>

            {/* Rating Filter Pills */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {RATING_FILTERS.map((filter) => {
                const isSelected = selectedRatingFilter === filter.value;
                return (
                  <button
                    key={filter.label}
                    type="button"
                    onClick={() => setSelectedRatingFilter(filter.value as any)}
                    className={`flex items-center gap-1.5 px-4 py-3 rounded-xl font-body text-label-m font-medium transition-all duration-200 cursor-pointer ${isSelected
                      ? "bg-secondary-400 text-neutral-950"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                      }`}
                  >
                    {filter.value !== "all" && (
                      <Star
                        size={24}
                        color={isSelected ? "#242528" : "#4B4C53"}
                      />
                    )}
                    <span>{filter.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Reviews Cards List */}
            <div className="flex flex-col gap-6">
              {filteredReviews.length > 0 ? (
                filteredReviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-6 sm:p-10 rounded-xl outline outline-neutral-200 bg-white flex flex-col gap-6 "
                  >
                    {/* User Header */}
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-center gap-3">
                        <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden bg-neutral-100 shrink-0">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-heading text-label-l font-semibold text-neutral-950 ">
                            {review.name}
                          </h3>
                          <p className="font-body text-body-m text-neutral-700">
                            {review.role}
                          </p>
                        </div>
                      </div>

                      <span className="font-body text-body-m text-neutral-700 shrink-0">
                        {review.date}
                      </span>
                    </div>

                    {/* 5 Stars Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={24} color="#242528" />
                      ))}
                    </div>

                    {/* Review Comment Quote */}
                    <p className="font-body text-body-m leading-6 text-neutral-700">
                      {review.comment}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center bg-neutral-50 rounded-2xl">
                  <p className="font-body text-neutral-600">
                    No reviews found for this rating filter.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
