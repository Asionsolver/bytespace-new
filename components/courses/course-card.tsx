import Image from "next/image";
import { AvatarGroup } from "@/components/ui/avatar";
import { SignalLevel, Star } from "@/icons";

export interface CourseCardProps {
  id?: number | string;
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
  category?: string;
}

const DEFAULT_AVATARS = [
  "/avatar/avatar-one.png",
  "/avatar/avatar-two.png",
  "/avatar/avatar-three.png",
  "/avatar/student-1.png",
];

export function CourseCard({
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
  return (
    <article className="group flex flex-col bg-white border border-[#CED0D3] rounded-[24px] p-4 w-full max-w-[373px] mx-auto hover:shadow-xl hover:border-primary-800/40 transition-all duration-300">
      {/* Thumbnail with overlay badges */}
      <div className="relative w-full aspect-[341/195.14] rounded-[12px] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 373px"
        />
        {/* Badges overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 flex-wrap">
          <span className="bg-[#F6F6F6]/60 backdrop-blur-[4px] rounded-full px-3 py-1.5 text-label-xs font-medium text-[#4F4F4F]">
            {lessons} Lessons
          </span>
          <span className="bg-[#F6F6F6]/60 backdrop-blur-[4px] rounded-full px-3 py-1.5 text-label-xs font-medium text-[#4F4F4F]">
            {duration}
          </span>
          <span className="bg-[#F6F6F6]/60 backdrop-blur-[4px] rounded-full px-3 py-1.5 text-label-xs font-medium text-[#4F4F4F]">
            {comments} Comments
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 pt-4">
        {/* Title, Author & Rating */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col min-w-0">
            <h3 className="font-heading text-heading-xs font-semibold text-black leading-snug line-clamp-1 group-hover:text-primary-800 transition-colors">
              {title}
            </h3>
            <p className="font-body text-body-xs text-[#4F4F4F] mt-1">
              by <span className="text-primary-800 font-normal">{author}</span>
            </p>
          </div>

          {rating != null && (
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              <span className="font-body text-body-l text-[#4F4F4F] leading-none">
                {rating}
              </span>
              <Star size={20} color="#CED0D3" />
            </div>
          )}
        </div>

        {/* Level & Student Avatars */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-1 bg-neutral-50 px-3 py-1.5 rounded-full">
            <SignalLevel size={20} color="#4B4C53" />
            <span className="font-body text-label-xs font-medium text-neutral-700">
              {level}
            </span>
          </div>
          <AvatarGroup
            avatars={DEFAULT_AVATARS}
            size={32}
            max={4}
            extraCount={students}
            className="h-full"
          />
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mt-4">
          <span className="font-heading text-heading-xs font-semibold text-primary-800">
            ${price}
          </span>
          <span className="font-body text-body-xs text-[#4F4F4F]">
            {priceLabel}
          </span>
        </div>
      </div>
    </article>
  );
}
