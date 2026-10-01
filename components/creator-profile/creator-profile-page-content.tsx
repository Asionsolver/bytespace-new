"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CreatorProfileHero } from "./creator-profile-hero";
import { CreatorProfileCourses } from "./creator-profile-courses";
import { CreatorProfileData } from "@/lib/constants";
import { CourseCardProps } from "@/components/courses/course-card";

interface CreatorProfilePageContentProps {
  creator: CreatorProfileData;
  courses: CourseCardProps[];
}

export function CreatorProfilePageContent({
  creator,
  courses,
}: CreatorProfilePageContentProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-body">
      {/* 1. ByteSpace Top Header */}
      <Header />

      {/* 2. Creator Profile Hero Section (Figma node 60:2155) */}
      <main className="flex-1">
        <CreatorProfileHero creator={creator} />

        {/* 3. Creator Courses Section with Filters & Cards (Figma node 60:1928) */}
        <CreatorProfileCourses courses={courses} />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
