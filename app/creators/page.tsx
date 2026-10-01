import type { Metadata } from "next";
import { CreatorProfilePageContent } from "@/components/creator-profile/creator-profile-page-content";
import { getCreatorById, getCoursesByCreator } from "@/lib/constants";

export const metadata: Metadata = {
  title: "PurePearl Studio - Creator Profile | ByteSpace",
  description:
    "Explore courses, digital products and design tutorials created by PurePearl Studio on ByteSpace.",
};

export default function CreatorsPage() {
  const creator = getCreatorById("purepearl-studio");
  const courses = getCoursesByCreator("purepearl-studio");

  return <CreatorProfilePageContent creator={creator} courses={courses} />;
}
