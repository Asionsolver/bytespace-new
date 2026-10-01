"use client";

import { useState, useMemo } from "react";
import { CourseCard } from "@/components/courses/course-card";
import { CoursesFilterBar } from "@/components/courses/courses-filter-bar";
import { CourseCardProps } from "@/components/courses/course-card";

interface CreatorProfileCoursesProps {
  courses: CourseCardProps[];
}

export function CreatorProfileCourses({ courses }: CreatorProfileCoursesProps) {
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedSort, setSelectedSort] = useState("Most relevant");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");

  const handleResetFilters = () => {
    setSelectedLevel("All Levels");
    setSelectedSort("Most relevant");
    setSelectedCategory("All Categories");
    setSelectedPrice("All");
    setSelectedRating("All");
  };

  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        // Category Filter
        if (
          selectedCategory !== "All Categories" &&
          selectedCategory !== "Featured"
        ) {
          if (course.category !== selectedCategory) {
            return false;
          }
        }

        // Level Filter
        if (selectedLevel !== "All Levels") {
          if (course.level.toLowerCase() !== selectedLevel.toLowerCase()) {
            return false;
          }
        }

        // Price Filter
        if (selectedPrice !== "All") {
          if (selectedPrice === "Under $25" && course.price >= 25) return false;
          if (
            selectedPrice === "$25 - $35" &&
            (course.price < 25 || course.price > 35)
          )
            return false;
          if (selectedPrice === "$35+" && course.price < 35) return false;
        }

        // Rating Filter
        if (selectedRating !== "All") {
          if (selectedRating === "4.5+" && (course.rating ?? 0) < 4.5) return false;
          if (selectedRating === "4.8+" && (course.rating ?? 0) < 4.8) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (selectedSort === "Highest rated") {
          return (b.rating ?? 0) - (a.rating ?? 0);
        }
        if (selectedSort === "Price: Low to High") {
          return a.price - b.price;
        }
        if (selectedSort === "Price: High to Low") {
          return b.price - a.price;
        }
        if (selectedSort === "Newest") {
          return Number(b.id) - Number(a.id);
        }
        return 0;
      });
  }, [
    courses,
    selectedCategory,
    selectedLevel,
    selectedPrice,
    selectedRating,
    selectedSort,
  ]);

  return (
    <section className="w-full bg-white pb-10 lg:pb-15.25">
      <div className="w-full max-w-300 mx-auto px-5 sm:px-10 lg:px-0">
        {/* Filter & Sort Bar (Matching Figma #60:1930) */}
        <CoursesFilterBar
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
          selectedRating={selectedRating}
          onRatingChange={setSelectedRating}
          onResetFilters={handleResetFilters}
        />

        {/* Courses Cards Grid (Matching Figma #78:2503) */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center py-16 bg-neutral-50 rounded-2xl outline outline-neutral-200">
            <h3 className="font-heading text-heading-s font-semibold text-neutral-950">
              No courses found
            </h3>
            <p className="font-body text-body-m text-neutral-700 mt-2 max-w-md mx-auto">
              We couldn&apos;t find any courses matching your filter criteria. Try adjusting or clearing your filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 px-6 py-2.5 bg-primary-800 text-white rounded-full font-body text-label-m font-medium hover:bg-primary-900 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
