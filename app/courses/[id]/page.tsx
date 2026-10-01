import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CourseDetailsPageContent } from "@/components/course-details/course-details-page-content";
import { ALL_COURSES, getCourseById } from "@/lib/constants";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ALL_COURSES.map((course) => ({
    id: String(course.id),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);

  return {
    title: `${course.title} | ByteSpace Courses`,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = getCourseById(id);

  return (
    <>
      <Header />
      <CourseDetailsPageContent course={course} />
      <Footer />
    </>
  );
}
