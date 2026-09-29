import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative bg-primary-800 py-[85px] overflow-hidden">
      {/* Background SVG pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/doodle/doodle-two.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-10 mx-auto max-w-[964px] px-5">
        <h2 className="font-heading text-3xl sm:text-heading-m font-semibold leading-[1.2] text-neutral-50 text-center max-w-[710px]">
          Unlock Your Potential as a{" "}
          <span className="text-secondary-400">Creator</span> with ByteSpace
        </h2>
        <p className="font-body text-base sm:text-body-l text-neutral-50 text-center max-w-[964px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button variant="primary" size="lg" className="text-label-l font-medium">
          Join as Creator
        </Button>
      </div>

      {/* 3D Ornaments */}
      <div className="absolute right-[80px] top-0 w-[188px] h-[188px] opacity-40 pointer-events-none">
        <Image src="/doodle/doodle-five.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute left-[-50px] bottom-[-50px] w-[342px] h-[342px] opacity-30 pointer-events-none">
        <Image src="/doodle/doodle-five.svg" alt="" fill className="object-contain" />
      </div>
    </section>
  );
}
