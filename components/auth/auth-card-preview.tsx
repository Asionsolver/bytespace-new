import Image from "next/image";
import { SignalLevel, Rate } from "@/icons";

interface AuthCardPreviewProps {
  showDoodles?: boolean;
}

const PREVIEW_AVATARS = [
  "/avatar/student-2.png",
  "/avatar/avatar-one.png",
  "/avatar/student-4.png",
  "/avatar/student-3.png",
];

export function AuthCardPreview({ showDoodles = true }: AuthCardPreviewProps) {
  return (
    <div className="relative w-full max-w-130 h-92.5 xs:h-105 sm:h-127.5 select-none scale-[0.68] xs:scale-[0.78] sm:scale-100 origin-top sm:origin-top-left transition-transform mx-auto sm:mx-0">
      {/* 1. 3D DOODLE ORNAMENTS */}
      {showDoodles && (
        <>
          {/* Top-Left: Lime 3D Torus Ring */}
          <div className="absolute left-17.5 sm:left-21.25 top-0 w-20.5 h-20.5 z-30 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <Image
              src="/doodle/doodle-torus-lime.webp"
              alt=""
              width={82}
              height={82}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Bottom-Left: Lime 3D Pyramid */}
          <div className="absolute -left-3 sm:-left-5 top-67.5 sm:top-71.25 w-25 h-25 z-30 pointer-events-none drop-shadow-[0_14px_28px_rgba(0,0,0,0.35)]">
            <Image
              src="/doodle/doodle-pyramid-lime.webp"
              alt=""
              width={100}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Bottom-Right: White Squiggle Spring */}
          <div className="absolute left-90 sm:left-98.75 top-61.25 sm:top-63.75 w-20 h-22.5 z-30 pointer-events-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <Image
              src="/doodle/doodle-white-spring.webp"
              alt=""
              width={80}
              height={90}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </>
      )}

      {/* 2. BACKGROUND STACKED CARD ("Build Digit..." with courses-one.jpg) */}
      <div
        className="absolute left-0 top-15 sm:top-17.5 w-67.5 sm:w-73.75 bg-white rounded-[24px] p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.16)] border border-white/60 pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg">
          <Image
            src="/courses/courses-one.jpg"
            alt="Build Digital Products"
            fill
            className="object-cover"
            sizes="295px"
          />
          <div className="absolute bottom-2.5 left-2.5">
            <span className="bg-white/70 backdrop-blur-md text-neutral-900 text-[10px] font-medium px-2.5 py-0.5 rounded-full shadow-xs">
              17 Lessons
            </span>
          </div>
        </div>

        <div className="mt-3">
          <h4 className="font-heading font-semibold text-neutral-900 text-sm sm:text-[15px] truncate">
            Build Digit...
          </h4>
          <p className="text-[11px] text-neutral-500 mt-0.5">
            by <span className="text-primary-700 font-medium">purepearl studio</span>
          </p>

          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex items-center gap-1 bg-neutral-100 px-2.5 py-1 rounded-lg text-[10px] font-medium text-neutral-700">
              <SignalLevel size={13} color="#4B4C53" />
              <span>Beginner</span>
            </div>
            <div className="flex items-center -space-x-1.5">
              {PREVIEW_AVATARS.slice(0, 3).map((src, i) => (
                <div
                  key={i}
                  className="w-5.5 h-5.5 rounded-full overflow-hidden border border-white relative shrink-0"
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="22px" />
                </div>
              ))}
              <span className="w-5.5 h-5.5 rounded-full bg-neutral-950 text-white text-[8px] font-bold flex items-center justify-center border border-white shrink-0">
                26+
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-1 mt-2">
            <span className="font-heading font-bold text-primary-700 text-[15px] sm:text-[16px]">
              $25
            </span>
            <span className="text-[10px] text-neutral-400 font-body">
              /lifetime
            </span>
          </div>
        </div>
      </div>

      {/* 3. FOREGROUND MAIN CARD ("the Power of Big Data") */}
      <div className="absolute left-27.5 sm:left-32.5 top-3.75 z-20 w-77.5 sm:w-85 bg-white rounded-[26px] p-4 sm:p-4.5 shadow-[0_22px_50px_rgba(0,0,0,0.22)] border border-white/70">
        {/* Card Image with overlay badges */}
        <div className="relative w-full aspect-303/175 overflow-hidden rounded-[18px] bg-neutral-900">
          <Image
            src="/courses/courses-three.jpg"
            alt="the Power of Big Data"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 310px, 340px"
            priority
          />
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 flex-nowrap overflow-hidden">
            <span className="bg-white/70 backdrop-blur-md text-neutral-900 text-[10px] font-medium px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap">
              17 Lessons
            </span>
            <span className="bg-white/70 backdrop-blur-md text-neutral-900 text-[10px] font-medium px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap">
              2 hours 16 mins
            </span>
            <span className="bg-white/70 backdrop-blur-md text-neutral-900 text-[10px] font-medium px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap">
              59 Comments
            </span>
          </div>
        </div>

        {/* Course Info */}
        <div className="mt-3.5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-heading font-bold text-neutral-950 text-[15px] sm:text-[16px] leading-tight">
                the Power of Big Data
              </h3>
              <p className="font-body text-[11px] text-neutral-500 mt-0.5">
                by{" "}
                <span className="text-primary-700 font-medium">
                  purepearl studio
                </span>
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              <span className="font-body text-[12px] font-bold text-neutral-900 leading-none">
                4.5
              </span>
              <Rate size={14} color="#CBFC01" />
            </div>
          </div>

          {/* Level & Student Avatars */}
          <div className="flex items-center justify-between gap-2 mt-3">
            <div className="flex items-center gap-1.5 bg-neutral-100 px-2.5 py-1 rounded-lg text-[11px] font-medium text-neutral-700">
              <SignalLevel size={13} color="#4B4C53" />
              <span>Beginner</span>
            </div>

            <div className="flex items-center -space-x-1.5">
              {PREVIEW_AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full overflow-hidden border border-white relative shrink-0 shadow-xs"
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="24px" />
                </div>
              ))}
              <div className="w-6 h-6 rounded-full bg-neutral-950 text-white text-[8px] font-bold flex items-center justify-center border border-white shadow-xs shrink-0">
                26+
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1 mt-2.5 pb-0.5">
            <span className="font-heading font-bold text-primary-700 text-[17px] sm:text-[18px]">
              $25
            </span>
            <span className="font-body text-[10px] text-neutral-400">
              /lifetime
            </span>
          </div>
        </div>
      </div>

      {/* 4. "Happy Students" Floating Lime Badge */}
      <div className="absolute left-50 sm:left-58.75 top-76.25 sm:top-81.25 z-25 bg-secondary-500 rounded-[22px] p-3.5 sm:p-4 shadow-[0_14px_32px_rgba(0,0,0,0.22)] w-51.25 sm:w-56.25">
        <div className="flex flex-col gap-0.5">
          <h4 className="font-heading font-bold text-neutral-950 text-[13px] sm:text-[14px] leading-tight">
            Happy Students
          </h4>
          <div className="flex items-center gap-1">
            <span className="text-neutral-900 text-[11px] font-bold">
              4.5 (240)
            </span>
            <Rate size={11} color="#0043ff" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="w-8.5 h-8.5 rounded-full overflow-hidden border border-white/40 relative shrink-0 shadow-xs">
            <Image
              src="/avatar/student-2.png"
              alt="Happy student"
              fill
              className="object-cover"
              sizes="34px"
            />
          </div>
          <span className="w-8.5 h-8.5 rounded-full bg-neutral-950 text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}
