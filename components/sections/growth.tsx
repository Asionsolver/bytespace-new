import Image from "next/image";
import { GROWTH_STATS, CREATOR_FEATURES } from "@/lib/constants";
import { Container } from "@/components/container";
import { CheckCircle, SignalLevel, Rate } from "@/icons";

export function Growth() {
  return (
    <section className="relative py-[120px] bg-[#FAFAFA] overflow-hidden">
      {/* Background Gradient Mesh from Figma */}
      <div className="absolute -left-[508px] -top-[466px] w-[2456px] h-[2391px] pointer-events-none opacity-80 z-0">
        <Image
          src="/growth/growth-bg-mesh.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Decorative Radial Glow from Figma */}
      <div
        className="absolute -left-[287px] bottom-[200px] w-[672px] h-[672px] rounded-full pointer-events-none z-0 blur-[20px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      <Container className="relative z-10">
        {/* ================================================================= */}
        {/* ROW 1: Text + Stats (Left) | Visual Composite (Right)            */}
        {/* ================================================================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[63px] mb-20 lg:mb-[72px]">
          {/* Left: Text & Stats */}
          <div className="flex flex-col gap-10 w-full min-w-[573px]!">
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
                  <span className="font-heading text-[32px] sm:text-[36px] font-medium leading-[44px] tracking-[-0.01em] text-surface-hero">
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
          <div className="relative w-full max-w-[621px] h-[480px] sm:h-[552px] flex-shrink-0">
            {/* 3D Spring Doodle (Top-Right) */}
            <div className="absolute right-0 sm:right-[5px] top-[20px]  w-[160px] sm:w-[215px] h-[160px] sm:h-[215px] pointer-events-none z-40">
              <Image
                src="/growth/growth-spring-1.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Behind: Course Card Preview */}
            <div className="absolute left-0 top-0 w-[290px] sm:w-[373px] bg-white rounded-3xl outline outline-[#CED0D3] p-4 shadow-xl ">
              {/* Image with Badges */}
              <div className="relative w-full h-[150px] sm:h-[195px] rounded-[12px] overflow-hidden">
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
                      by <span className="text-[#003BE2]">purepearl studio</span>
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
                  <div className="flex items-center gap-1 bg-[#F5F5F6] px-2.5 py-1 rounded-xl">
                    <SignalLevel size={18} color="#4B4C53" />
                    <span className="font-body text-[12px] font-medium text-[#4B4C53]">
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
            <div className="absolute right-0   bottom-0 w-[420px] sm:w-[540px] lg:w-[577px] h-[440px] sm:h-[500px] lg:h-[540px] pointer-events-none ">
              <Image
                src="/growth/growth-man.png"
                alt="Student smiling with laptop"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Overlay: Learning Progress 55% Card */}
            <div className="absolute right-0 sm:right-[45px]  sm:top-[170px] bg-white rounded-lg p-4 flex flex-col gap-2 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] max-w-[232px] w-full">
              <span className="font-body text-[14px] font-medium leading-[24px] text-neutral-950">
                Learning Progress
              </span>
              <span className="font-heading text-[4xl sm:text-[48px] font-semibold  text-[#242528] tracking-[-0.01em] leading-[120%]">
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
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[79px]">
          {/* Left: Visual Composite (Woman + Revenue Cards + Happy Students + Doodle) */}
          <div className="relative w-full max-w-[541px] h-[520px] sm:h-[596px] flex-shrink-0">
            {/* 3D Spring Doodle (Center-Right) */}
            <div className="absolute right-[20px] top-[114px] w-[180px] sm:w-[215px] h-[180px] sm:h-[215px] pointer-events-none z-11">
              <Image
                src="/growth/growth-spring-2.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Main Woman Image */}
            <div className="absolute left-[15px] sm:left-[78px] top-0 w-[340px] sm:w-[435px] h-[500px] sm:h-[596px] z-10 pointer-events-none">
              <Image
                src="/growth/growth-woman.png"
                alt="Course creator woman"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Floating Card 1: Total Revenue (Top-Left) */}
            <div className="absolute left-0 top-[20px] sm:top-[70px] bg-[#003BE2] rounded-lg p-4 flex flex-col gap-2 shadow-[0px_15px_35px_rgba(0,59,226,0.25)]  w-[180px] sm:w-[232px]">
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
                <span className="bg-[#CBFC01] text-[#242528] font-body text-[10px] leading-5 px-2 py-0.5 rounded-xl">
                  +12$
                </span>
              </div>
              <div className="relative w-full h-[8px] bg-[#F6F6F6] rounded-full overflow-hidden mt-1">
                <div className="h-full w-[45%] bg-secondary-400 rounded-full"></div>
              </div>
            </div>

            {/* Floating Card 2: Year to Date (Middle-Left) */}
            <div className="absolute left-0 top-[170px] sm:top-[224px] bg-[#003BE2] rounded-lg p-4 flex flex-col gap-1 shadow-[0px_15px_35px_rgba(0,59,226,0.25)]  w-[124px] sm:w-[134px]">
              <span className="font-body text-[16px] leading-[120%] font-medium text-neutral-50">
                Year to Date
              </span>
              <span className="font-body text-[10px] leading-[120%] text-neutral-50">
                2023
              </span>
              <span className="font-heading text-[24px] leading-[32px] font-semibold text-white mt-1">
                $1,200.38
              </span>
              <div className="mt-1">
                <span className="inline-block bg-[#CBFC01] text-[#242528] font-body text-[10px] leading-5 px-2 py-0.5 rounded-xl">
                  +12$
                </span>
              </div>
            </div>

            {/* Floating Card 3: Happy Students (Bottom-Right) */}
            <div className="absolute right-0 bottom-[20px] sm:bottom-[30px] bg-white rounded-2xl p-4 flex flex-col gap-2 shadow-[0px_15px_35px_rgba(0,0,0,0.08)] border border-neutral-100 z-20 w-[240px] sm:w-[258px]">
              <div className="flex flex-col gap-0.5">
                <span className="font-body text-[15px] sm:text-base font-medium text-[#242528]">
                  Happy Students
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="font-body text-xs text-[#82868E]">
                    <strong className="text-[#242528] font-bold">4.5</strong> (240)
                  </span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 0.5L10.3 5.4L15.6 6.1L11.8 9.8L12.7 15.1L8 12.6L3.3 15.1L4.2 9.8L0.4 6.1L5.7 5.4L8 0.5Z"
                      fill="#CBFC01"
                    />
                  </svg>
                </div>
              </div>

              {/* Student Avatars + 2K+ */}
              <div className="flex items-center -space-x-2.5 sm:-space-x-3 mt-1">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <div
                    key={num}
                    className="relative w-[30px] sm:w-[34px] h-[30px] sm:h-[34px] rounded-full border-2 border-white overflow-hidden shrink-0"
                  >
                    <Image
                      src={`/avatar/student-${num}.png`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="relative w-[30px] sm:w-[34px] h-[30px] sm:h-[34px] rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center shrink-0">
                  <span className="font-body text-[10px] sm:text-[11px] font-bold text-[#242528]">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text + Features */}
          <div className="flex flex-col gap-10 max-w-[580px] w-full">
            <h2 className="font-heading text-3xl sm:text-heading-m font-semibold leading-[1.2] text-[#242528] max-w-[391px]">
              Create & Manage Courses Easily.
            </h2>
            <p className="font-body text-body-l text-[#4B4C53] max-w-[574px]">
              <strong className="font-bold text-[#242528]">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {CREATOR_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle size={24} color="#003BE2" />
                  <span className="font-body text-label-l text-[#242528]">
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
