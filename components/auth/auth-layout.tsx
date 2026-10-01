import Link from "next/link";
import Image from "next/image";
import { AUTH_CONTENT } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "../ui/card";
import { SignalLevel, Rate } from "@/icons";
import { AvatarGroup } from "../ui/avatar";
const STUDENT_AVATARS = [
  "/avatar/student-1.png",
  "/avatar/student-2.png",
  "/avatar/student-3.png",
  "/avatar/student-4.png",
  "/avatar/student-5.png",
  "/avatar/student-6.png",
  "/avatar/student-7.png",
];

interface AuthLayoutProps {
  mode: "login" | "register";
  children: React.ReactNode;
}

interface Course {
  title: string;
  author: string;
  image: string;
  lessons: number;
  duration?: string;
  comments?: number;
  level: string;
  students: number;
  price: number;
  priceLabel: string;
  rating?: number;
}

export const COURSES_FRONT: Course[] = [
  {
    title: "The Power of Big Data",
    author: "purepearl studio",
    image: "/courses/courses-three.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    priceLabel: "/lifetime",
    rating: 4.5,
  },
];

export const COURSE_BACK: Course[] = [
  {
    title: "Build Digital Asset",
    author: "purepearl studio",
    image: "/courses/courses-one.jpg",
    lessons: 17,
    level: "Beginner",
    students: 26,
    price: 25,
    priceLabel: "/lifetime",
  },
];

export function AuthLayout({ mode, children }: AuthLayoutProps) {
  const content = AUTH_CONTENT[mode];
  const avatarSrcs = [
    "/avatar/avatar-four.webp",
    "/avatar/avatar-five.webp",
    "/avatar/avatar-one.png",
    "/avatar/avatar-six.webp",
  ];
  const {
    title,
    author,
    image: courseImage,
    lessons,
    duration,
    comments,
    level,
    students,
    price,
    priceLabel,
    rating,
  } = COURSES_FRONT[0];

  const {
    title: titleBack,
    author: authorBack,
    image: courseImageBack,
    lessons: lessonsBack,
    level: levelBack,
    students: studentsBack,
    price: priceBack,
    priceLabel: priceLabelBack,
  } = COURSE_BACK[0];
  return (
    <div className="relative min-h-screen bg-primary-700 overflow-x-hidden flex flex-col ">
      {/* 1. Background Coordinate Grid (matches Figma & Hero) */}
      <div className=" pointer-events-none z-0  ">
        <Image
          src="/doodle/hero-grid.svg"
          alt=""
          fill
          className="object-cover object-top opacity-85"
          priority
        />
      </div>

      {/* 2. Main Content Container (Figma 1440px Canvas Alignment) */}
      <div className="relative z-10 w-full max-w-340 mx-auto px-5 sm:px-10 lg:px-22.25 xl:px-18 py-6 sm:py-8 flex flex-col min-h-screen gap-12">
        {/* Top Header: ByteSpace Brand Mark */}
        <header className="w-full flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 group transition-transform hover:scale-105"
            aria-label="Back to home"
          >
            <div className="relative w-8.5 h-9.5 transition-transform group-hover:-translate-y-0.5">
              <Image
                src="/brand-icon.svg"
                alt="ByteSpace"
                width={34}
                height={38}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>
        </header>

        {/* 3. Central Two-Column Grid */}
        <main className="w-full flex  gap-10  items-center pb-6 sm:pb-10">
          {/* Left Column: Visual Showcase & Copy */}
          <div className="flex flex-col flex-1 justify-center text-left gap-14.5">
            <div>
              <h1 className="font-heading font-semibold text-white text-[32px] sm:text-[38px] lg:text-heading-xs">
                {content.heroTitle}
              </h1>
              <p className="font-body text-white/85 text-[14px] sm:text-body-l  max-w-118.75 mt-3 sm:mt-4">
                {content.heroDescription}
              </p>
            </div>

            {/* Visual Showcase: Stacked Cards & 3D Doodles (Figma 1440px specification) */}
            <div className="relative w-full max-w-122.5 h-130 select-none scale-[0.75] xs:scale-[0.85] sm:scale-100 origin-top sm:origin-top-left transition-transform mx-auto sm:mx-0">
              {/* Doodle 1: Lime Torus Ring (Top-Left, above Back Card, behind Front Card) */}
              <div className="absolute left-6 top-4.75 w-36.5 h-36.5 z-25 pointer-events-none ">
                <Image
                  src="/auth/auth-doodle-one.png"
                  alt=""
                  width={146}
                  height={146}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Back Card: "Build Digital..." */}
              <Card className="absolute left-0 bottom-10.75 z-10  w-full sm:w-93.25 flex flex-col p-3.5 sm:p-4 rounded-[22px] bg-white  outline outline-neutral-200 pointer-events-none">
                {/* Image */}
                <CardHeader>
                  <div className="relative w-full aspect-341/200 overflow-hidden rounded-[14px]">
                    <Image
                      src={courseImageBack}
                      alt={titleBack}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                    {/* Badges overlay */}
                    <div className="absolute bottom-2.5 left-2.5 flex items-center gap-2">
                      <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] sm:text-label-xs text-[#4F4F4F]">
                        {lessonsBack} Lessons
                      </span>
                    </div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="flex-1 p-0! pt-5! ">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-heading text-heading-xs text-black truncate">
                      {titleBack}
                    </h3>
                    <p className="font-body text-body-xs text-[#4F4F4F]">
                      by <span className="text-surface-hero">{authorBack}</span>
                    </p>
                  </div>

                  {/* Level + Avatars */}
                  <div className="flex items-center  gap-2 mt-2">
                    <div className="flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-xl">
                      <SignalLevel size={18} color="#4B4C53" />
                      <span className="font-body text-label-xs leading-5 text-neutral-700">
                        {level}
                      </span>
                    </div>
                    <AvatarGroup
                      avatars={avatarSrcs}
                      size={28}
                      max={4}
                      extraCount={students}
                      className="h-full"
                    />
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-heading text-heading-xs text-surface-hero">
                      ${priceBack}
                    </span>
                    <span className="font-body text-body-xs text-[#4F4F4F]">
                      {priceLabelBack}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Front Card: "The Power of Big Data" */}
              <Card className="absolute left-23.75 sm:left-25.75 top-0 z-20 w-full sm:w-93.25  p-4 rounded-xl bg-white outline outline-neutral-200">
                {/* Image */}
                <CardHeader>
                  <div className="relative w-full aspect-341/200 overflow-hidden rounded-[14px]">
                    <Image
                      src={courseImage}
                      alt={title}
                      fill
                      className="object-cover w-85.25 h-50"
                      sizes="350px"
                      priority
                    />
                    {/* Badges overlay */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] sm:text-label-xs text-[#4F4F4F]">
                        {lessons} Lessons
                      </span>
                      <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] sm:text-label-xs text-[#4F4F4F]">
                        {duration}
                      </span>
                      <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] sm:text-label-xs text-[#4F4F4F]">
                        {comments} Comments
                      </span>
                    </div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="flex-1 p-0! pt-5! ">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col">
                      <h3 className="font-heading text-heading-xs leading-7 text-black">
                        {title}
                      </h3>
                      <p className="font-body text-body-xs leading-5 text-[#4F4F4F]">
                        by <span className="text-surface-hero">{author}</span>
                      </p>
                    </div>

                    {rating != null && (
                      <div className="flex items-center gap-1 shrink-0 pt-0.5">
                        <span className="font-body text-body-m font-bold text-neutral-900 leading-none">
                          {rating}
                        </span>
                        <Rate size={15} color="#D4FB20" />
                      </div>
                    )}
                  </div>

                  {/* Level + Avatars */}
                  <div className="flex items-center  gap-2 mt-2">
                    <div className="flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-xl">
                      <SignalLevel size={18} color="#4B4C53" />
                      <span className="font-body text-label-xs leading-[20px] text-neutral-700">
                        {level}
                      </span>
                    </div>
                    <AvatarGroup
                      avatars={avatarSrcs}
                      size={28}
                      max={4}
                      extraCount={students}
                      className="h-full"
                    />
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-heading text-heading-xs text-surface-hero">
                      ${price}
                    </span>
                    <span className="font-body text-body-xs text-[#4F4F4F]">
                      {priceLabel}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Doodle 2: Lime Pyramid (Bottom-Left of Back Card) */}
              <div className="absolute -left-5 -bottom-16.75  w-47 h-47 z-30 pointer-events-none">
                <Image
                  src="/auth/auth-doodle-two.png"
                  alt=""
                  width={188}
                  height={188}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Floating Card 3: Happy Students (Bottom-Right, overlapping Front Card) */}
              <div className="absolute  right-3.5 -bottom-10.75 z-25 w-62.5 sm:w-66.25 bg-secondary-500 rounded-[22px] p-3.5 sm:p-4  flex flex-col gap-2.5">
                <div className="flex flex-col">
                  <span className="font-body text-label-m font-medium text-text-primary">
                    Happy Students
                  </span>
                  <div className="flex items-center">
                    <span className="font-body text-body-xs text-text-muted">
                      <span className="text-text-primary">4.5</span> (240)
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 0.5L10.35 5.27L15.61 6.03L11.8 9.74L12.7 14.98L8 12.5L3.3 14.98L4.2 9.74L0.39 6.03L5.65 5.27L8 0.5Z"
                        fill="#003BE2"
                      />
                    </svg>
                  </div>
                </div>

                {/* 7 Avatars + 2K+ Badge */}
                <div className="flex items-center -space-x-4">
                  {STUDENT_AVATARS.map((src, i) => (
                    <div
                      key={src}
                      className="relative w-10.75 h-10.75 rounded-full overflow-hidden shrink-0 shadow-xs"
                    >
                      <Image
                        src={src}
                        alt={`Student ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="43px"
                      />
                    </div>
                  ))}
                  <div className="w-10.75 h-10.75 rounded-full bg-neutral-950 flex items-center justify-center shrink-0 shadow-xs z-10">
                    <span className="text-[12px] leading-[150%] font-bold text-neutral-50">2K+</span>
                  </div>
                </div>
              </div>

              {/* Doodle 3: White Squiggle Spring (Bottom-Right, overlapping Front & Happy Students Card) */}
              <div className="absolute -right-7 bottom-5 w-43.75 h-43.75 z-30 pointer-events-none">
                <Image
                  src="/auth/auth-doodle-three.png"
                  alt=""
                  width={175}
                  height={175}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

          </div>

          {/* Right Column: White Auth Card Form */}
          <div className="flex flex-1 w-full">
            <div className="w-full">
              {children}
            </div>
          </div>
        </main>


      </div>
    </div>
  );
}
