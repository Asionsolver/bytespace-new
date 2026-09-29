import Image from "next/image";
import { COURSES, COURSE_TABS } from "@/lib/constants";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { AvatarGroup } from "@/components/ui/avatar";
import { SignalLevel, ArrowRight } from "@/icons";

export function Courses() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <h2 className="font-heading text-heading-m font-semibold leading-[1.2] text-neutral-950 text-center max-w-[588px]">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="font-body text-body-l text-neutral-400 text-center max-w-[820px]">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {COURSE_TABS.slice(0, 8).map((tab) => (
            <Badge
              key={tab.label}
              variant={tab.active ? "active" : "default"}
            >
              {tab.label}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {COURSE_TABS.slice(8, 14).map((tab) => (
            <Badge key={tab.label} variant="default">
              {tab.label}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          {COURSE_TABS.slice(14).map((tab) => (
            <Badge key={tab.label} variant="default">
              {tab.label}
            </Badge>
          ))}
          <span className="text-base font-medium text-primary-800 cursor-pointer hover:underline">
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
}: CourseCardProps) {
  const avatarSrcs = ["/avatar/avatar-one.png", "/avatar/avatar-two.png", "/avatar/avatar-three.png"];

  return (
    <Card className="flex flex-col">
      {/* Image */}
      <CardHeader>
        <div className="relative h-[200px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-3xl"
            sizes="(max-width: 810px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Badges overlay */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
              {lessons} Lessons
            </span>
            <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
              {duration}
            </span>
            <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
              {comments} Comments
            </span>
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="font-heading text-heading-xs font-semibold leading-[1.2] text-neutral-950">
            {title}
          </h3>
          <p className="font-body text-body-xs text-neutral-700">
            by <span className="underline">{author}</span>
          </p>
        </div>

        {/* Level + Avatars */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <SignalLevel size={16} color="#82868E" />
            <span className="font-body text-xs font-medium text-neutral-700">
              {level}
            </span>
          </div>
          <AvatarGroup
            avatars={avatarSrcs}
            size={24}
            max={4}
            extraCount={students}
          />
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mt-2">
          <span className="font-heading text-heading-xs font-semibold text-primary-950">
            <span className="text-sm">$</span>{price}
          </span>
          <span className="font-body text-body-xs text-neutral-700">
            {priceLabel}
          </span>
        </div>
      </CardContent>

      {/* Footer CTA */}
      <CardFooter>
        <span className="font-body text-sm font-medium text-primary-800 cursor-pointer hover:underline">
          View Course
        </span>
        <ArrowRight size={20} color="#003BE2" />
      </CardFooter>
    </Card>
  );
}
