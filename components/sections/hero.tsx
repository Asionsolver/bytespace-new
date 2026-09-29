import Image from "next/image";
import { Search } from "@/icons";

const STUDENT_AVATARS = [
  "/avatar/student-1.png",
  "/avatar/student-2.png",
  "/avatar/student-3.png",
  "/avatar/student-4.png",
  "/avatar/student-5.png",
  "/avatar/student-6.png",
  "/avatar/student-7.png",
];

export function Hero() {
  return (
    <section className="relative min-h-256 h-256 bg-surface-hero overflow-hidden select-none">
      {/* 1. Background Grid (Coordinate Grid Pattern from Figma) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/doodle/hero-grid.svg"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* 2. Centered Content: Header text & Search bar */}
      <div className="relative z-20 flex flex-col items-center pt-42.25 mx-auto max-w-300 px-5">
        {/* Headline & Description */}
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-heading text-heading-s sm:text-heading-m lg:text-[72px] font-semibold text-text-white text-center max-w-233.75">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="font-body text-body-l text-text-on-brand-secondary text-center ">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 sm:mt-15 w-full max-w-145 justify-center">
          <div className="flex items-center gap-2 bg-surface-white rounded-xl px-6 py-3 w-full sm:w-115.25 h-13 shadow-sm">
            <Search size={24} color="var(--color-icon-secondary)" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="flex-1 bg-transparent text-body-l text-text-primary placeholder:text-text-muted outline-none font-body"
            />
          </div>
          <button
            type="button"
            className="px-6 py-3 bg-cta-secondary hover:opacity-90 text-text-primary font-medium text-label-l rounded-xl transition-opacity cursor-pointer w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>

      {/* 3. 1440px Fixed Canvas Container for Pixel-Perfect Figma Alignment */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-360 h-256 pointer-events-none">
        {/* --- 3D DOODLE ORNAMENTS (Exact Figma Coordinates from Group #2003:607) --- */}

        {/* Top-Left: Lime Wavy Spring (Figma x: -118, y: 221, w: 385, h: 385) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: "-118px", top: "221px", width: "385px", height: "385px" }}
        >
          <Image
            src="/doodle/doodle-two.svg"
            alt=""
            width={385}
            height={385}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Mid-Left: White Small Zigzag (Figma x: 183, y: 477, w: 175, h: 175) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: "183px", top: "477px", width: "175px", height: "175px" }}
        >
          <Image
            src="/doodle/doodle-one.svg"
            alt=""
            width={175}
            height={175}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Bottom-Left: White Torus / Donut (Figma x: 18, y: 682, w: 342, h: 342) */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{ left: "18px", top: "682px", width: "342px", height: "342px" }}
        >
          <Image
            src="/doodle/doodle-four.svg"
            alt=""
            width={342}
            height={342}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Top-Right: Lime Tilted Cylinder (Figma x: 1231, y: 221, w: 370, h: 370) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: "1231px", top: "221px", width: "370px", height: "370px" }}
        >
          <Image
            src="/doodle/doodle-three.svg"
            alt=""
            width={370}
            height={370}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Mid-Right: White Floating Pyramid (Figma x: 1106, y: 464, w: 188, h: 188) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: "1106px", top: "464px", width: "188px", height: "188px" }}
        >
          <Image
            src="/doodle/doodle-seven.svg"
            alt=""
            width={188}
            height={188}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Bottom-Right: White Squiggle Spring (Figma x: 1127, y: 672, w: 330, h: 330) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: "1127px", top: "672px", width: "330px", height: "330px" }}
        >
          <Image
            src="/doodle/doodle-six.svg"
            alt=""
            width={330}
            height={330}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* --- LIME ACCENT CIRCLE (Figma #2003:549, x: 145, y: 582, w: 1149, h: 1149, stroke 320px) --- */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: "145px", top: "582px", width: "1149px", height: "1149px" }}
        >
          <Image
            src="/doodle/doodle-five.svg"
            alt=""
            width={1149}
            height={1149}
            className="w-full h-full"
            priority
          />
        </div>

        {/* --- STUDENT HERO IMAGE (Figma #2003:572, x: 431, y: 512, w: 578, h: 541) --- */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{ left: "431px", top: "512px", width: "578px", height: "541px" }}
        >
          <Image
            src="/hero-student.png"
            alt="Student learning on ByteSpace platform"
            width={578}
            height={541}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* --- FLOATING CARD 1: UI/UX Design (Figma #2003:638, x: 404, y: 639) --- */}
        <div
          className="absolute z-30 pointer-events-auto bg-surface-white/95 backdrop-blur-[10px] rounded-lg p-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col gap-1"
          style={{ left: "404px", top: "639px" }}
        >
          <span className="font-body text-label-m text-text-primary">
            UI/UX Design
          </span>
          <div className="flex items-center gap-2 text-[12px] leading-[120%] text-text-muted">
            <span>200 Courses</span>
            <span className="text-[10px] leading-none">•</span>
            <span>1000+ Students</span>
          </div>
        </div>

        {/* --- FLOATING CARD 2: Learning Progress (Figma #2003:573, x: 842, y: 651) --- */}
        <div
          className="absolute z-30 pointer-events-auto bg-surface-white/95 backdrop-blur-[10px] rounded-lg p-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col gap-2"
          style={{ left: "842px", top: "651px" }}
        >
          <span className="font-body text-label-s text-text-primary">
            Learning Progress
          </span>
          <span className="font-heading text-5xl font-semibold leading-[120%] text-text-primary">
            55%
          </span>
          <div className="w-50 h-2 bg-surface-track rounded-full overflow-hidden">
            <div className="h-full w-[55%] bg-cta-secondary rounded-full" />
          </div>
        </div>

        {/* --- FLOATING CARD 3: Happy Students (Figma #2003:580, x: 328, y: 837, w: 258) --- */}
        <div
          className="absolute w-full z-30 max-w-64.5 pointer-events-auto bg-surface-white/95 backdrop-blur-[10px] rounded-lg p-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col gap-2"
          style={{ left: "328px", top: "837px" }}
        >
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
                  fill="var(--color-cta-secondary)"
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
            <div className="w-10.75 h-10.75 rounded-full bg-cta-secondary flex items-center justify-center shrink-0 shadow-xs z-10">
              <span className="text-[12px] leading-[150%] font-bold text-text-primary">2K+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
