import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative bg-primary-800 py-21.25 overflow-hidden min-h-122 flex items-center justify-center">
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
        <div className="relative w-325 sm:w-[1550px] lg:w-[1714px] h-162.5 sm:h-187.5 lg:h-200.75 shrink-0">
          <Image
            src="/cta/cta-ornaments.webp"
            alt=""
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-10 mx-auto max-w-241 px-5 text-center">
        <h2 className="font-heading text-heading-m font-semibold leading-[1.2] text-neutral-50 tracking-[-0.01em] max-w-177.5">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="font-body  text-body-l text-neutral-50 max-w-241">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button
          variant="primary"
          className=" px-6 py-3 text-label-l font-medium text-neutral-950 bg-secondary-400 rounded-xl"
        >
          Join as Creator
        </Button>
      </div>
    </section>
  );
}
