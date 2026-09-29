import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/container";

export function Testimonials() {
  return (
    <section className="relative py-[74px] overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute right-[-200px] top-[-241px] w-[1137px] h-[1137px] rounded-full bg-[radial-gradient(circle,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0)_75%)] blur-xl pointer-events-none" />
      <div className="absolute left-[395px] top-[-138px] w-[672px] h-[672px] rounded-full bg-[radial-gradient(circle,rgba(0,59,226,0.15)_0%,rgba(0,59,226,0)_70%)] blur-xl pointer-events-none" />
      <div className="absolute left-[-442px] top-[149px] w-[1137px] h-[1137px] rounded-full bg-[radial-gradient(circle,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0)_75%)] blur-xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Heading row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-[43px] mb-12 lg:mb-[72px]">
          <h2 className="font-heading text-3xl sm:text-heading-m font-semibold leading-[1.2] text-neutral-950 max-w-[580px] shrink-0">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-body text-base sm:text-body-l text-neutral-700 max-w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic
            learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[41px]">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-8"
            >
              {/* Avatar */}
              <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              {/* Name + Role */}
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-heading-xs font-semibold text-neutral-950">
                  {testimonial.name}
                </h3>
                <span className="font-body text-body-l text-primary-800">
                  {testimonial.role}
                </span>
              </div>

              {/* Quote */}
              <p className="font-body text-body-l text-neutral-700 leading-[1.6]">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
