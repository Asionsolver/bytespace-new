import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/container";

export function Testimonials() {
  return (
    <section className="relative pb-14.25 pt-18.5 bg-white overflow-hidden px-5 sm:px-10  lg:px-[118PX]">
      {/* Decorative gradient glow 1: Top-Right Lime Radial */}
      <div
        className="absolute left-210.5 -top-60.25 w-284.25 h-284.25 rounded-full pointer-events-none z-0 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* Decorative gradient glow 2: Top-Center Lime Radial */}
      <div
        className="absolute left-98.75 -top-34.5 w-168 h-168 rounded-full pointer-events-none z-0 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.006) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* Decorative gradient glow 3: Bottom-Left Blue Radial */}
      <div
        className="absolute -left-110.5 top-37.25 w-284.25 h-284.25 rounded-full pointer-events-none z-0 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      <Container className="relative z-10">
        {/* Heading + Subtitle Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-10.75 mb-12 lg:mb-18">
          <h2 className="font-heading text-3xl sm:text-heading-m font-semibold leading-[1.2] text-[#040819] max-w-145 shrink-0 tracking-[-0.01em]">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-body text-base sm:text-body-l text-[#4F4F4F] max-w-145">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[41px]">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col gap-6 rounded-xl bg-white p-6 "
            >
              {/* Avatar (80x80px from Figma) */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>

              {/* Name + Role */}
              <div className="flex flex-col">
                <h3 className="font-heading text-heading-xs  text-[#040819]">
                  {testimonial.name}
                </h3>
                <span className="font-body text-body-l text-primary-800">
                  {testimonial.role}
                </span>
              </div>

              {/* Quote */}
              <p className="font-body text-body-l text-[#4F4F4F] ">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
