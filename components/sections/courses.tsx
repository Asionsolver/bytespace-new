import Image from "next/image";
import { COURSES, COURSE_TABS } from "@/lib/constants";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { AvatarGroup } from "@/components/ui/avatar";
import { SignalLevel, Rate } from "@/icons";

export function Courses() {
  return (
    <section className="pb-18 pt-18 bg-white sm:px-5  md:px-10 lg:px-30">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-4 mb-10.5">
          <h2 className="font-heading text-heading-m  text-[#040819] text-center max-w-147">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="font-body text-body-l text-neutral-400 text-center max-w-229.25">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-5.25">
          {COURSE_TABS.slice(0, 8).map((tab) => (
            <Badge
              key={tab.label}
              variant={tab.active ? "active" : "default"}
              className="h-fit"
            >
              {tab.label}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-5.25">
          {COURSE_TABS.slice(8, 14).map((tab) => (
            <Badge key={tab.label} variant="default">
              {tab.label}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mb-19.25">
          {COURSE_TABS.slice(14).map((tab) => (
            <Badge key={tab.label} variant="default">
              {tab.label}
            </Badge>
          ))}
          <span className="text-label-m font-medium text-primary-800 cursor-pointer hover:underline">
            + More
          </span>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSES.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CourseCard (internal to this section)                                      */
/* -------------------------------------------------------------------------- */
interface CourseCardProps {
  title: string;
  author: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  students: number;
  price: number;
  priceLabel: string;
  rating?: number;
}

function CourseCard({
  title,
  author,
  image,
  lessons,
  duration,
  comments,
  level,
  students,
  price,
  priceLabel,
  rating = 4.5,
}: CourseCardProps) {
  const avatarSrcs = ["/avatar/avatar-one.png", "/avatar/avatar-two.png", "/avatar/avatar-three.png"];

  return (
    <Card className="flex flex-col px-4  pt-4 rounded-xl w-full max-w-93.25 mx-auto">
      {/* Image */}
      <CardHeader>
        <div className="relative w-full aspect-341/200 overflow-hidden rounded-[12px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 373px"
          />
          {/* Badges overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-3">
            <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-label-xs text-[#4F4F4F]">
              {lessons} Lessons
            </span>
            <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-label-xs text-[#4F4F4F]">
              {duration}
            </span>
            <span className="bg-surface-track/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-label-xs text-[#4F4F4F]">
              {comments} Comments
            </span>
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1 px-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <h3
              title={title}
              className="font-heading text-heading-xs font-semibold leading-[1.2] text-black truncate"
            >
              {title}
            </h3>
            <p className="font-body text-body-xs text-[#4F4F4F]">
              by <span className="text-surface-hero">{author}</span>
            </p>
          </div>

          {rating != null && (
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              <span className="font-body text-body-l text-[#4F4F4F] leading-none">
                {rating}
              </span>
              <Rate size={16} color="#CED0D3" />
            </div>
          )}
        </div>

        {/* Level + Avatars */}
        <div className="flex items-center  gap-3 mt-2">
          <div className="flex items-center gap-1 bg-neutral-50 px-3 py-1.5 rounded-xl">
            <SignalLevel size={20} color="#4B4C53" />
            <span className="font-body text-label-xs text-neutral-700">
              {level}
            </span>
          </div>
          <AvatarGroup
            avatars={avatarSrcs}
            size={32}
            max={4}
            extraCount={students}
            className="h-full"
          />
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mt-2">
          <span className="font-heading text-heading-xs text-surface-hero">
            ${price}
          </span>
          <span className="font-body text-body-xs text-[#4F4F4F]">
            {priceLabel}
          </span>
        </div>
      </CardContent>


    </Card>
  );
}
