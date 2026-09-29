import { EXPLORE_CATEGORIES } from "@/lib/constants";
import { Container } from "@/components/container";
import { Pen, PhoneCode, Laptop, Organization, AnyShare, Photography } from "@/icons";
import type { IconProps } from "@/icons";
import type { ComponentType } from "react";

const ICON_MAP: Record<string, ComponentType<IconProps>> = {
  Pen,
  PhoneCode,
  Laptop,
  Organization,
  AnyShare,
  Photography,
};

export function Explore() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <h2 className="font-heading text-heading-s font-semibold leading-[1.2] text-neutral-950 text-center">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-body text-body-l text-neutral-400 text-center max-w-[964px]">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there&apos;s
            something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {EXPLORE_CATEGORIES.map((category) => {
            const IconComponent = ICON_MAP[category.icon];
            return (
              <div
                key={category.name}
                className="flex flex-col items-center gap-3 rounded-3xl bg-neutral-50 py-9 px-6 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white">
                  {IconComponent && <IconComponent size={36} color="#242528" />}
                </div>
                <span className="font-body text-xl font-medium leading-[1.2] text-neutral-950 text-center">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
