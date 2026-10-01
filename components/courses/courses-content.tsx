"use client";

import { useState, useMemo, useRef } from "react";
import { ALL_COURSES } from "@/lib/constants";
import { CoursesHero } from "./courses-hero";
import { CoursesFilterBar } from "./courses-filter-bar";
import { CategoryTabs } from "./category-tabs";
import { CourseCard } from "./course-card";
import { Pagination } from "./pagination";

export function CoursesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchScope, setSearchScope] = useState("Courses");
  const [selectedCategoryTab, setSelectedCategoryTab] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const gridSectionRef = useRef<HTMLDivElement>(null);

  // Reset page when any filter changes
  const handleCategoryTabSelect = (tab: string) => {
    setSelectedCategoryTab(tab);
    setCurrentPage(1);
  };

  const handleLevelChange = (lvl: string) => {
    setSelectedLevel(lvl);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat !== "All Categories") {
      setSelectedCategoryTab(cat);
    }
    setCurrentPage(1);
  };

  const handleScopeChange = (scope: string) => {
    setSearchScope(scope);
    setCurrentPage(1);
    if (scope === "All") {
      setSelectedCategoryTab("Featured");
      setSelectedCategory("All Categories");
      setSelectedLevel("All Levels");
      setSelectedPrice("All");
      setSelectedRating("All");
      setSearchQuery("");
    }
  };

  const handleResetFilters = () => {
    setSelectedLevel("All Levels");
    setSelectedCategory("All Categories");
    setSelectedCategoryTab("Featured");
    setSelectedSort("Most relevant");
    setSelectedPrice("All");
    setSelectedRating("All");
    setSearchScope("Courses");
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Filtered & Sorted Courses
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      // 1. Search Query with Scope
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesAuthor = course.author.toLowerCase().includes(query);
        const matchesCategory = course.category?.toLowerCase().includes(query);

        if (searchScope === "Courses") {
          if (!matchesTitle) return false;
        } else if (searchScope === "Creators") {
          if (!matchesAuthor) return false;
        } else if (searchScope === "Topics") {
          if (!matchesCategory) return false;
        } else {
          // "All"
          if (!matchesTitle && !matchesAuthor && !matchesCategory) {
            return false;
          }
        }
      }

      // 2. Category Tab Filter (if not Featured, filter by category)
      if (selectedCategoryTab !== "Featured") {
        if (course.category !== selectedCategoryTab) {
          return false;
        }
      }

      // 3. Dropdown Category Filter (if specified and not All Categories)
      if (
        selectedCategory !== "All Categories" &&
        selectedCategory !== "Featured"
      ) {
        if (course.category !== selectedCategory) {
          return false;
        }
      }

      // 4. Level Filter
      if (selectedLevel !== "All Levels") {
        if (course.level.toLowerCase() !== selectedLevel.toLowerCase()) {
          return false;
        }
      }

      // 5. Price Filter
      if (selectedPrice !== "All") {
        if (selectedPrice === "Under $25" && course.price >= 25) return false;
        if (selectedPrice === "$25 - $35" && (course.price < 25 || course.price > 35)) return false;
        if (selectedPrice === "$35+" && course.price < 35) return false;
      }

      // 6. Rating Filter
      if (selectedRating !== "All") {
        if (selectedRating === "4.5+" && (course.rating ?? 0) < 4.5) return false;
        if (selectedRating === "4.8+" && (course.rating ?? 0) < 4.8) return false;
      }

      return true;
    }).sort((a, b) => {
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
      return 0; // Most relevant default order
    });
  }, [
    searchQuery,
    searchScope,
    selectedCategoryTab,
    selectedCategory,
    selectedLevel,
    selectedPrice,
    selectedRating,
    selectedSort,
  ]);

  // Dynamic pagination based on active products (24 items per page)
  const ITEMS_PER_PAGE = 24;
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const displayedCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    gridSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Search Section */}
      <CoursesHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedScope={searchScope}
        onScopeChange={handleScopeChange}
      />

      {/* 2. Main Page Container (1200px max width matching Figma) */}
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-0">
        {/* Filter & Sort Bar */}
        <CoursesFilterBar
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedPrice={selectedPrice}
          onPriceChange={(price) => {
            setSelectedPrice(price);
            setCurrentPage(1);
          }}
          selectedRating={selectedRating}
          onRatingChange={(rating) => {
            setSelectedRating(rating);
            setCurrentPage(1);
          }}
          onResetFilters={handleResetFilters}
        />

        {/* Tab Categories */}
        <CategoryTabs
          activeTab={selectedCategoryTab}
          onSelectTab={handleCategoryTabSelect}
        />

        {/* Courses Cards Grid */}
        <section ref={gridSectionRef} className="pt-19.25 pb-4 scroll-mt-24">
          {displayedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {displayedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-heading text-heading-xs text-neutral-700">
                No courses found matching your criteria.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-4 px-6 py-2.5 bg-secondary-400 hover:bg-secondary-500 rounded-full font-body text-label-m text-neutral-950 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* Pagination: only shown if there are products and more than 1 page. If 1 page, provide bottom spacing before footer */}
        {filteredCourses.length > 0 && totalPages > 1 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        ) : (
          <div className="pb-24" />
        )}
      </div>
    </div>
  );
}
