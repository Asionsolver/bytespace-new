import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CoursesContent } from "@/components/courses/courses-content";

export const metadata: Metadata = {
  title: "Courses | ByteSpace - Find Your Next Course",
  description:
    "Explore our wide range of courses across design, development, marketing, data, and more. Learn from industry experts and elevate your skills.",
};

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CoursesContent />
      </main>
      <Footer />
    </>
  );
}
