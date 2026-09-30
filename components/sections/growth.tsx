import Image from "next/image";
import { GROWTH_STATS, CREATOR_FEATURES } from "@/lib/constants";
import { Container } from "@/components/container";
import { CheckCircle, SignalLevel, Rate } from "@/icons";

export function Growth() {
  return (
    <section className="relative py-30 bg-[#FAFAFA] overflow-hidden">
      {/* 1. Top-Center Lime Glow (Figma Circle 2) */}
      <div
        className="absolute left-[15%] sm:left-[28%] -top-45 sm:-top-60 w-175 sm:w-250 h-175 sm:h-250 rounded-full pointer-events-none z-0 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(203, 252, 1, 0.42) 0%, rgba(203, 252, 1, 0.12) 53%, rgba(203, 252, 1, 0.03) 75%, transparent 100%)",
        }}
      />

      {/* 2. Top-Right Subtle Blue Glow (Figma Circle 4) */}
      <div
        className="absolute -right-55 sm:-right-80 -top-30 sm:-top-45 w-150 sm:w-212.5 h-150 sm:h-212.5 rounded-full pointer-events-none z-0 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.02) 53%, transparent 100%)",
        }}
      />

      {/* 3. Middle-Left Atmospheric Blue Glow (Figma Circle 3) */}
      <div
        className="absolute -left-70 sm:-left-95 top-[32%] sm:top-[38%] w-175 sm:w-237.5 h-175 sm:h-237.5 rounded-full pointer-events-none z-0 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.04) 53%, rgba(0, 59, 226, 0.01) 75%, transparent 100%)",
        }}
      />

      {/* 4. Bottom-Left Vibrant Lime Glow (Figma Node #2003:717) */}
      <div
        className="absolute -left-40 sm:-left-60 -bottom-30 sm:-bottom-40 w-125 sm:w-168 h-125 sm:h-168 rounded-full pointer-events-none z-0 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(203, 252, 1, 0.58) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, transparent 100%)",
        }}
      />

      {/* 5. Bottom-Right Soft Blue Glow (Figma Circle 1) */}
      <div
        className="absolute -right-60 sm:-right-87.5 -bottom-45 sm:-bottom-65 w-175 sm:w-250 h-175 sm:h-250 rounded-full pointer-events-none z-0 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.22) 0%, rgba(0, 59, 226, 0.05) 53%, rgba(0, 59, 226, 0.01) 75%, transparent 100%)",
        }}
      />

      <Container className="relative z-10">
        {/* ================================================================= */}
        {/* ROW 1: Text + Stats (Left) | Visual Composite (Right)            */}
        {/* ================================================================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-15.75 mb-20 lg:mb-18 ml-2">
          {/* Left: Text & Stats */}
          <div className="flex flex-col gap-10 w-full min-w-143.25!">
            <h2 className="font-heading text-heading-m tracking-[-2%]  text-neutral-950 ">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-body text-body-l text-[#4F4F4F] max-w-119.25">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-end gap-10 sm:gap-14 pt-2">
              {GROWTH_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading text-[32px] sm:text-[36px] font-medium leading-11 tracking-[-0.01em] text-surface-hero">
                    {stat.value}
                  </span>
                  <span className="font-body text-body-l text-[#4F4F4F]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Composite (Course Card + Student Man + 55% Progress + Doodle) */}
          <div className="relative w-full max-w-155.25 h-120 sm:h-138 shrink-0">
            {/* 3D Spring Doodle (Top-Right) */}
            <div className="absolute right-0 sm:right-1.25 top-5  w-40 sm:w-53.75 h-40 sm:h-53.75 pointer-events-none z-40">
              <Image
                src="/growth/growth-spring-1.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Behind: Course Card Preview */}
            <div className="absolute left-0 top-0 w-72.5 sm:w-93.25 bg-white rounded-3xl outline outline-neutral-200 p-4 shadow-xl ">
              {/* Image with Badges */}
              <div className="relative w-full h-37.5 sm:h-48.75 rounded-[12px] overflow-hidden">
                <Image
                  src="/courses/courses-one.jpg"
                  alt="Learn Figma from Basic"
                  fill
                  className="object-cover "
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-3">
                  <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-label-xs text-[#4F4F4F]">
                    17 Lessons
                  </span>
                  <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-label-xs text-[#4F4F4F]">
                    2 hours 16 mins
                  </span>

                  <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-label-xs text-[#4F4F4F]">
                    59 comments
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-3 sm:pt-4 flex flex-col gap-2.5 sm:gap-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col">
                    <h3 className="font-heading text-sm sm:text-heading-xs font-semibold leading-[1.2] text-black">
                      Learn Figma from Basic
                    </h3>
                    <p className="font-body text-xs text-[#4F4F4F]">
                      by <span className="text-primary-800">purepearl studio</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="font-body text-sm font-medium text-[#4F4F4F]">
                      4.5
                    </span>
                    <Rate size={16} color="#CED0D3" />
                  </div>
                </div>

                {/* Level + Avatars */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-neutral-50 px-2.5 py-1 rounded-xl">
                    <SignalLevel size={18} color="#4B4C53" />
                    <span className="font-body text-[12px] font-medium text-neutral-700">
                      Beginner
                    </span>
                  </div>
                  <div className="flex items-center -space-x-2">
                    {[
                      "/avatar/avatar-one.png",
                      "/avatar/avatar-two.png",
                      "/avatar/avatar-three.png",
                    ].map((src, i) => (
                      <div
                        key={i}
                        className="relative w-6 h-6 rounded-full border-2 border-white overflow-hidden"
                      >
                        <Image src={src} alt="" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-black border-2 border-white flex items-center justify-center">
                      <span className="text-[9px] text-white font-medium">26+</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-heading-xs text-primary-800">
                    $25
                  </span>
                  <span className="font-body text-xs text-[#4F4F4F]">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Front: Student Man with Laptop */}
            <div className="absolute right-0   bottom-0 w-105 sm:w-135 lg:w-144.25 h-110 sm:h-125 lg:h-135 pointer-events-none ">
              <Image
                src="/growth/growth-man.webp"
                alt="Student smiling with laptop"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Overlay: Learning Progress 55% Card */}
            <div className="absolute right-0 sm:right-11.25  sm:top-42.5 bg-white rounded-lg p-4 flex flex-col gap-2 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] max-w-58 w-full">
              <span className="font-body text-[14px] font-medium leading-[24px] text-neutral-950">
                Learning Progress
              </span>
              <span className="font-heading text-[4xl sm:text-[48px] font-semibold  text-neutral-950 tracking-[-0.01em] leading-[120%]">
                55%
              </span>
              <div className="relative w-full h-[8px] rounded-full bg-[#F6F6F6] overflow-hidden">
                <div className="w-[55%] h-full bg-secondary-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* ROW 2: Visual Composite (Left) | Text + Features (Right)         */}
        {/* ================================================================= */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-19.75">
          {/* Left: Visual Composite (Woman + Revenue Cards + Happy Students + Doodle) */}
          <div className="relative w-full max-w-135.25 h-130 sm:h-149 shrink-0">
            {/* 3D Spring Doodle (Center-Right) */}
            <div className="absolute right-15 top-23.5 w-45 sm:w-53.75 h-45 sm:h-48.75 pointer-events-none z-11">
              <Image
                src="/growth/growth-spring-2.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Main Woman Image */}
            <div className="absolute left-0 sm:left-15.75 top-0 z-10 pointer-events-none">
              <Image
                src="/growth/growth-woman.webp"
                alt="Course creator woman"
                width={435}
                height={596}
                className="object-contain object-bottom h-149"
                priority
              />
            </div>

            {/* Floating Card 1: Total Revenue (Top-Left) */}
            <div className="absolute left-[8px] top-5 sm:top-17.5 bg-primary-800 rounded-lg p-4 flex flex-col gap-2 shadow-[0px_15px_35px_rgba(0,59,226,0.25)]  w-45 sm:w-58">
              <div className="flex flex-col">
                <span className="font-body text-[16px] leading-[120%] font-medium text-neutral-50">
                  Total Revenue
                </span>
                <span className="font-body text-[10px] leading-[120%] text-neutral-50">
                  July 1-28
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-heading text-[24px] leading-[32px] font-semibold text-neutral-50">
                  $120.29
                </span>
                <span className="bg-secondary-500 text-neutral-950 font-body text-[10px] leading-5 px-2 py-0.5 rounded-xl">
                  +12$
                </span>
              </div>
              <div className="relative w-full h-[8px] bg-[#F6F6F6] rounded-full overflow-hidden mt-1">
                <div className="h-full w-[45%] bg-secondary-400 rounded-full"></div>
              </div>
            </div>

            {/* Floating Card 2: Year to Date (Middle-Left) */}
            <div className="absolute left-[8px] top-42.5 sm:top-56 bg-primary-800 rounded-lg p-4 flex flex-col gap-2  shadow-[0px_15px_35px_rgba(0,59,226,0.25)]  w-31 sm:w-33.5">
              <span className="flex flex-col">
                <span className="font-body text-[16px] leading-[120%] font-medium text-neutral-50">
                  Year to Date
                </span>
                <span className="font-body text-[10px] leading-[120%] text-neutral-50">
                  2023
                </span>
              </span>
              <span className="font-heading text-[24px] leading-[32px] font-semibold text-white mt-1">
                $1,200.38
              </span>

              <span className="w-fit  bg-secondary-500 text-neutral-950 font-body text-[10px] leading-5 px-2 py-0.5 rounded-xl">
                +12$
              </span>

            </div>

            {/* Floating Card 3: Happy Students (Bottom-Right) */}
            <div className="absolute right-0 bottom-5 sm:bottom-32.5 bg-white rounded-lg p-4 flex flex-col gap-2 shadow-[0px_15px_35px_rgba(0,0,0,0.08)] z-20 w-60 sm:w-64.5">
              <div className="flex flex-col">
                <span className="font-body text-[16px] leading-[24px] font-medium text-neutral-950">
                  Happy Students
                </span>
                <div className="flex items-center">
                  <span className="font-body text-[10px] leading-[150%] text-neutral-400">
                    <strong className="text-neutral-950 font-bold">4.5</strong> (240)
                  </span>
                  <Rate color="#D4FB20" size={16} />

                </div>
              </div>

              {/* Student Avatars + 2K+ */}
              <div className="flex items-center -space-x-2.5 sm:-space-x-4">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <div
                    key={num}
                    className="relative w-10.75 sm:w-10.75 h-10.75 sm:h-10.75 rounded-full overflow-hidden shrink-0"
                  >
                    <Image
                      src={`/avatar/student-${num}.png`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="relative w-10.75 sm:w-10.75 h-10.75 sm:h-10.75 rounded-full bg-secondary-500 flex items-center justify-center shrink-0">
                  <span className="font-body text-[12px] font-bold text-neutral-950 leading-[150%]">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text + Features */}
          <div className="flex flex-col gap-10 max-w-145 w-full">
            <h2 className="font-heading  sm:text-heading-m font-semibold  text-neutral-950">
              Create & Manage Courses Easily.
            </h2>
            <p className="font-body text-body-l text-neutral-700 max-w-143.5">
              <strong className="font-bold text-neutral-950">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {CREATOR_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle size={24} color="#003BE2" />
                  <span className="font-body text-label-l text-neutral-950">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
