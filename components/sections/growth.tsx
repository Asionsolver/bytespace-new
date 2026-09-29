import Image from "next/image";
import { GROWTH_STATS, CREATOR_FEATURES } from "@/lib/constants";
import { Container } from "@/components/container";
import { CheckCircle } from "@/icons";

export function Growth() {
  return (
    <section className="relative py-[120px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white" />

      {/* Decorative gradients */}
      <div className="absolute -left-[287px] bottom-0 w-[672px] h-[672px] rounded-full bg-[radial-gradient(circle,rgba(203,252,1,0.3)_0%,rgba(203,252,1,0)_70%)] blur-3xl" />

      <Container className="relative z-10">
        {/* Row 1: Text + Stats | Course Preview */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16 lg:mb-[72px]">
          {/* Left: Text + Stats */}
          <div className="flex flex-col gap-8 lg:gap-10 max-w-[574px]">
            <h2 className="font-heading text-3xl sm:text-heading-m font-semibold leading-[1.2] text-neutral-950">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-body text-body-l text-neutral-700 max-w-[477px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-end gap-8 sm:gap-14">
              {GROWTH_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-heading text-[32px] sm:text-[36px] font-semibold leading-[1.2] text-primary-800">
                    {stat.value}
                  </span>
                  <span className="font-body text-body-l text-neutral-700">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Course Preview Image */}
          <div className="relative w-full max-w-[577px] min-h-[460px] sm:min-h-[552px] flex-1">
            {/* Main course card preview */}
            <div className="absolute top-0 left-0 w-[300px] sm:w-[373px] h-[340px] sm:h-[384px] rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-lg z-10">
              <div className="relative h-[140px] sm:h-[160px]">
                <Image
                  src="/courses/courses-one.jpg"
                  alt="Learn Figma from Basic course preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-neutral-950">Learn Figma from Basic</h3>
                <p className="font-body text-xs text-neutral-700">by <span className="underline">purepearl studio</span></p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-heading text-base sm:text-lg font-semibold text-primary-950">
                    <span className="text-sm">$</span>25
                  </span>
                  <span className="font-body text-xs text-neutral-700">/lifetime</span>
                </div>
              </div>
            </div>

            {/* Behind image */}
            <div className="absolute top-[12px] left-[60px] sm:left-[100px] w-[340px] sm:w-[477px] h-[360px] sm:h-[440px] z-0">
              <Image
                src="/Image-one.webp"
                alt="Professional growth illustration"
                fill
                className="object-cover"
                style={{
                  boxShadow:
                    "0.5px 0.7px 3px rgba(0,0,0,0.04), 2.2px 3.2px 5.7px rgba(0,0,0,0.06), 5.4px 7.7px 9.6px rgba(0,0,0,0.07), 10.2px 14.6px 16.1px rgba(0,0,0,0.08), 16.9px 24.2px 24px rgba(0,0,0,0.09)",
                }}
              />
            </div>

            {/* Learning Progress floating card */}
            <div className="absolute right-0 top-[200px] sm:top-[213px] z-20 bg-white/90 backdrop-blur-[10px] rounded-2xl p-4 flex flex-col gap-2 shadow-md">
              <span className="font-body text-sm font-medium text-neutral-950">Learning Progress</span>
              <span className="font-body text-2xl font-semibold text-neutral-950">78%</span>
              <div className="w-[120px] h-1 bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-primary-800 rounded-full" />
              </div>
            </div>

            {/* 3D ornament */}
            <div className="absolute right-[10px] top-[67px] w-[215px] h-[215px] z-0 opacity-60 hidden sm:block">
              <Image src="/doodle/doodle-five.svg" alt="" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Row 2: Image + Cards | Text + Features */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Image composite */}
          <div className="relative w-full max-w-[541px] min-h-[520px] sm:min-h-[596px] flex-1">
            {/* Revenue card */}
            <div className="absolute top-[20px] sm:top-[44px] left-0 z-20 bg-primary-800 backdrop-blur-[10px] rounded-2xl p-3 sm:p-4 flex flex-col gap-2 shadow-lg">
              <div className="flex flex-col">
                <span className="font-body text-xs sm:text-sm font-medium text-neutral-50">Total Revenue</span>
                <span className="font-body text-[10px] sm:text-xs text-neutral-300">July 1-28</span>
              </div>
              <div className="flex items-center justify-between w-[160px] sm:w-[200px]">
                <span className="font-heading text-lg sm:text-heading-s font-semibold text-neutral-50">$120.29</span>
                <span className="text-xs text-green-400">↑ 12%</span>
              </div>
              <div className="w-[160px] sm:w-[200px] h-1 bg-primary-700 rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-secondary-400 rounded-full" />
              </div>
            </div>

            {/* Year to date card */}
            <div className="absolute top-[160px] sm:top-[194px] left-0 z-20 bg-primary-800 backdrop-blur-[10px] rounded-2xl p-3 sm:p-4 w-[110px] sm:w-[134px] shadow-lg">
              <div className="flex flex-col">
                <span className="font-body text-xs sm:text-sm font-medium text-neutral-50">Year to Date</span>
                <span className="font-body text-[10px] sm:text-xs text-neutral-300">2023</span>
              </div>
              <span className="font-heading text-base sm:text-heading-s font-semibold text-neutral-50 mt-1 sm:mt-2 block">$1,200.38</span>
              <span className="text-xs text-green-400 mt-1 block">↑ 8%</span>
            </div>

            {/* Main image */}
            <div className="absolute top-0 left-[20px] sm:left-[28px] w-[300px] sm:w-[435px] h-[480px] sm:h-[596px] z-0">
              <Image
                src="/Image-one.webp"
                alt="Course creation and management"
                fill
                className="object-cover object-top"
                style={{
                  boxShadow:
                    "0.5px 0.7px 3px rgba(0,0,0,0.04), 2.2px 3.2px 5.7px rgba(0,0,0,0.06), 5.4px 7.7px 9.6px rgba(0,0,0,0.07)",
                }}
              />
            </div>

            {/* Happy Students card */}
            <div className="absolute right-[0px] bottom-[30px] z-20 bg-white/90 backdrop-blur-[10px] rounded-2xl p-4 w-[258px]">
              <div className="flex flex-col gap-1">
                <span className="font-body text-base font-medium text-neutral-950">Happy Students</span>
                <div className="flex items-center gap-1">
                  <span className="font-body text-xs text-neutral-400">
                    <span className="font-bold text-neutral-950">4.5</span> (240)
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 0L7.76 3.58L11.71 4.15L8.855 6.93L9.52 10.86L6 9L2.48 10.86L3.145 6.93L0.29 4.15L4.24 3.58L6 0Z" fill="#FACC15" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center -space-x-2 mt-2">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className="w-[28px] h-[28px] rounded-full border-2 border-white"
                    style={{ backgroundColor: `hsl(${i * 40}, 60%, 70%)` }}
                  />
                ))}
                <div className="w-[28px] h-[28px] rounded-full bg-neutral-950 border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] text-white font-medium">20+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text + Features */}
          <div className="flex flex-col gap-10 max-w-[580px]">
            <h2 className="font-heading text-heading-m font-semibold leading-[1.2] text-neutral-950 max-w-[391px]">
              Create & Manage Courses Easily.
            </h2>
            <p className="font-body text-body-l text-neutral-700 max-w-[574px]">
              <span className="font-bold">ByteSpace</span> supports individuals
              or entities in the creation, publication, and administration of
              educational courses.
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
