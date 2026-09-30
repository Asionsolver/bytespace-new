import React from "react";
import Link from "next/link";

export function ErrorHero() {
  return (
    <section className="relative min-h-[680px] sm:min-h-[740px] lg:min-h-[820px] bg-[#0043ff] overflow-hidden flex flex-col items-center justify-center pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 select-none">
      {/* 1. Coordinate Grid Background Pattern (120px crisp grid matching Figma) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.14) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      {/* 2. Main Content Stack */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[900px] mx-auto text-center">
        {/* Giant Gradient "404" */}
        <div
          className="font-heading font-black text-[170px] sm:text-[250px] md:text-[320px] lg:text-[360px] leading-[0.82] tracking-tighter select-none pointer-events-none bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #D4FB20 0%, #8EDB4B 50%, rgba(69, 168, 130, 0.15) 100%)",
          }}
        >
          404
        </div>

        {/* Overlapping Headline */}
        <h1 className="font-heading font-bold text-[30px] sm:text-[44px] lg:text-[54px] text-white tracking-tight leading-[1.12] -mt-8 sm:-mt-14 md:-mt-18 lg:-mt-12 relative z-10 max-w-[720px]">
          The page you are looking
          <br />
          for doesn’t exist
        </h1>

        {/* Supportive text */}
        <p className="font-body text-[14px] sm:text-[16px] text-white/80 max-w-[480px] mt-4 sm:mt-6 leading-relaxed relative z-10">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Back to Home CTA */}
        <div className="mt-7 sm:mt-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#cbfc01] hover:bg-[#bbf000] text-neutral-950 font-medium px-8 sm:px-9 py-3 sm:py-3.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer text-[15px] shadow-sm hover:shadow"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
