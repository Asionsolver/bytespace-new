import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative bg-[#003BE2] py-[85px] overflow-hidden min-h-[488px] flex items-center justify-center">
      {/* Background Blue Grid Pattern from Figma */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/cta/cta-grid.svg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Floating 3D Ornaments from Figma */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-10">
        <div className="relative w-[1300px] sm:w-[1550px] lg:w-[1714px] h-[650px] sm:h-[750px] lg:h-[803px] flex-shrink-0">
          <Image
            src="/cta/cta-ornaments.png"
            alt=""
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-10 mx-auto max-w-[964px] px-5 text-center">
        <h2 className="font-heading text-3xl sm:text-heading-m font-semibold leading-[1.2] text-[#F5F5F6] tracking-[-0.01em] max-w-[710px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="font-body text-base sm:text-body-l text-[#F5F5F6] max-w-[964px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button
          variant="primary"
          className="h-[48px] px-6 py-3 text-label-l font-medium text-[#242528] bg-[#CBFC01] hover:bg-[#D4FB20] rounded-full shadow-lg"
        >
          Join as Creator
        </Button>
      </div>
    </section>
  );
}
