import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/constants";

export function Partners() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-[1200px] ">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-[72px]">
          {PARTNER_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="w-auto h-auto max-h-10.25 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
