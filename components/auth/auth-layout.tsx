import Link from "next/link";
import Image from "next/image";
import { AUTH_CONTENT } from "@/lib/constants";
interface AuthLayoutProps {
  mode: "login" | "register";
  children: React.ReactNode;
}

export function AuthLayout({ mode, children }: AuthLayoutProps) {
  const content = AUTH_CONTENT[mode];
  const isRegister = mode === "register";

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
      <div className="relative z-10 w-full max-w-340 mx-auto px-5 sm:px-10 lg:px-[89px] xl:px-18 py-6 sm:py-8 flex flex-col min-h-screen gap-12">
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

            <Image
              src="/auth.webp"
              alt="auth-banner"
              width={500}
              height={500}
              className="w-full h-full object-contain max-w-137 max-h-146.25 pointer-events-none"
              priority
            />

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
