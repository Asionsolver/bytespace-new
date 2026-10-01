import type { Metadata } from "next";
import { CreatorProfilePageContent } from "@/components/creator-profile/creator-profile-page-content";
import { getCreatorById, getCoursesByCreator } from "@/lib/constants";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [
    { id: "purepearl-studio" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const creator = getCreatorById(id);

  return {
    title: `${creator.name} - Creator Profile | ByteSpace`,
    description: `Explore courses, digital products and insights by ${creator.name} on ByteSpace.`,
  };
}

export default async function CreatorDetailPage({ params }: PageProps) {
  const { id } = await params;
  const creator = getCreatorById(id);
  const courses = getCoursesByCreator(id);

  return <CreatorProfilePageContent creator={creator} courses={courses} />;
}
