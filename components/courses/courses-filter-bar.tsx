"use client";

import { useState, useRef, useEffect } from "react";
import { Filter, SignalLevel, Category, Sort, Check, Star } from "@/icons";

interface CoursesFilterBarProps {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedPrice?: string;
  onPriceChange?: (price: string) => void;
  selectedRating?: string;
  onRatingChange?: (rating: string) => void;
  onResetFilters?: () => void;
}

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const SORT_OPTIONS = [
  "Most relevant",
  "Highest rated",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];
const CATEGORY_OPTIONS = [
  "All Categories",
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];
const PRICE_OPTIONS = ["All", "Under $25", "$25 - $35", "$35+"];
const RATING_OPTIONS = ["All", "4.5+", "4.8+"];

export function CoursesFilterBar({
  selectedLevel,
  onLevelChange,
  selectedSort,
  onSortChange,
  selectedCategory,
  onCategoryChange,
  selectedPrice = "All",
  onPriceChange,
  selectedRating = "All",
  onRatingChange,
  onResetFilters,
}: CoursesFilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Dedicated refs for each dropdown wrapper
  const filterRef = useRef<HTMLDivElement>(null);
  const levelRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Close active dropdown when clicking outside anywhere on the page
  useEffect(() => {
    if (!openDropdown) return;

    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;

      if (
        openDropdown === "filter" &&
        filterRef.current &&
        !filterRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      } else if (
        openDropdown === "level" &&
        levelRef.current &&
        !levelRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      } else if (
        openDropdown === "category" &&
        categoryRef.current &&
        !categoryRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      } else if (
        openDropdown === "sort" &&
        sortRef.current &&
        !sortRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [openDropdown]);

  const activeFilterCount =
    (selectedLevel !== "All Levels" ? 1 : 0) +
    (selectedCategory !== "All Categories" && selectedCategory !== "Featured" ? 1 : 0) +
    (selectedPrice !== "All" ? 1 : 0) +
    (selectedRating !== "All" ? 1 : 0);

  const hasActiveFilters = activeFilterCount > 0 || selectedSort !== "Most relevant";

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-300 mx-auto pt-18 relative z-20">
      {/* Left Filters Group */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Filter Dropdown */}
        <div ref={filterRef} className="relative">
          <button
            type="button"
            onClick={() => toggleDropdown("filter")}
            style={{ cursor: "pointer" }}
            className={`flex items-center justify-center gap-1 px-4 py-3 bg-white outline rounded-full transition-all cursor-pointer ${selectedPrice !== "All" || selectedRating !== "All"
              ? "outline-primary-800 text-primary-800 font-medium shadow-xs"
              : "outline-neutral-200 text-neutral-700 hover:outline-neutral-400 hover:bg-neutral-50"
              }`}
          >
            <Filter size={20} color="currentColor" />
            <span className="font-body text-label-m font-medium">Filter</span>
            {activeFilterCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-full bg-primary-800 text-white text-xs font-semibold">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Filter Popover Menu */}
          {openDropdown === "filter" && (
            <div className="absolute left-0 top-[calc(100%+8px)] w-72 bg-white rounded-lg shadow-xl shadow-neutral-900/10 outline outline-neutral-200 p-4 z-50">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-3">
                <span className="font-heading text-sm font-medium text-neutral-950">
                  Filters
                </span>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={() => {
                      onResetFilters?.();
                      setOpenDropdown(null);
                    }}
                    style={{ cursor: "pointer" }}
                    className="text-xs font-medium text-primary-800 hover:underline cursor-pointer"
                  >
                    Reset all
                  </button>
                )}
              </div>

              {/* Price Filter */}
              <div className="mb-4">
                <span className="font-body text-xs font-medium text-neutral-500 uppercase tracking-wider block mb-2">
                  Price Range
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {PRICE_OPTIONS.map((price) => {
                    const isSelected = selectedPrice === price;
                    return (
                      <button
                        key={price}
                        type="button"
                        onClick={() => onPriceChange?.(price)}
                        style={{ cursor: "pointer" }}
                        className={`px-2.5 py-1.5 rounded-md  text-xs outline outline-transparent font-medium transition-all text-center cursor-pointer ${isSelected
                          ? "bg-primary-50 text-primary-800  outline-primary-800! font-semibold"
                          : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                          }`}
                      >
                        {price}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <span className="font-body text-xs font-medium text-neutral-500 uppercase tracking-wider block mb-2">
                  Minimum Rating
                </span>
                <div className="flex gap-2">
                  {RATING_OPTIONS.map((rating) => {
                    const isSelected = selectedRating === rating;
                    return (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => onRatingChange?.(rating)}
                        style={{ cursor: "pointer" }}
                        className={`flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all outline outline-transparent cursor-pointer ${isSelected
                          ? "bg-primary-50 text-primary-800  outline-primary-800! font-semibold"
                          : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                          }`}
                      >
                        <span>{rating}</span>
                        {rating !== "All" && (
                          <Star
                            size={12}
                            color={isSelected ? "#003BE2" : "#CED0D3"}
                            className={isSelected ? "text-primary-800" : "text-neutral-200"}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Level Dropdown */}
        <div ref={levelRef} className="relative">
          <button
            type="button"
            onClick={() => toggleDropdown("level")}
            style={{ cursor: "pointer" }}
            className={`flex items-center justify-center gap-1.5 px-4 py-3 bg-white border rounded-full transition-all cursor-pointer ${selectedLevel !== "All Levels"
              ? "border-primary-800 text-primary-800 font-medium shadow-xs"
              : "border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50"
              }`}
          >
            <SignalLevel size={20} color="currentColor" />
            <span className="font-body text-label-m font-medium">
              {selectedLevel !== "All Levels" ? selectedLevel : "Level"}
            </span>
          </button>

          {openDropdown === "level" && (
            <div className="absolute left-0 top-[calc(100%+8px)] w-52 bg-white rounded-lg shadow-xl shadow-neutral-900/10 border border-neutral-200 p-1.5 z-50">
              <div className="flex flex-col gap-0.5">
                {LEVEL_OPTIONS.map((lvl) => {
                  const isSelected = selectedLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        onLevelChange(lvl);
                        setOpenDropdown(null);
                      }}
                      style={{ cursor: "pointer" }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[12px] font-body text-label-m text-left transition-all cursor-pointer ${isSelected
                        ? "bg-primary-50 text-primary-800 font-semibold"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 active:bg-neutral-200"
                        }`}
                    >
                      <span>{lvl}</span>
                      {isSelected && <Check size={16} color="var(--color-primary-800)" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Category Dropdown */}
        <div ref={categoryRef} className="relative">
          <button
            type="button"
            onClick={() => toggleDropdown("category")}
            style={{ cursor: "pointer" }}
            className={`flex items-center justify-center gap-1.5 px-4 py-3 bg-white border rounded-full transition-all cursor-pointer ${selectedCategory !== "All Categories" && selectedCategory !== "Featured"
              ? "border-primary-800 text-primary-800 font-medium shadow-xs"
              : "border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50"
              }`}
          >
            <Category size={20} color="currentColor" />
            <span className="font-body text-label-m font-medium">
              {selectedCategory !== "All Categories" && selectedCategory !== "Featured"
                ? selectedCategory
                : "Category"}
            </span>
          </button>

          {openDropdown === "category" && (
            <div className="absolute left-0 top-[calc(100%+8px)] w-60 bg-white rounded-lg shadow-xl shadow-neutral-900/10 border border-neutral-200 p-1.5 z-50">
              <div className="flex flex-col gap-0.5 max-h-64 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                {CATEGORY_OPTIONS.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        onCategoryChange(cat);
                        setOpenDropdown(null);
                      }}
                      style={{ cursor: "pointer" }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[12px] font-body text-label-m text-left transition-all cursor-pointer ${isSelected
                        ? "bg-primary-50 text-primary-800 font-semibold"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 active:bg-neutral-200"
                        }`}
                    >
                      <span className="truncate">{cat}</span>
                      {isSelected && (
                        <Check size={16} color="var(--color-primary-800)" className="shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sort Dropdown */}
      <div ref={sortRef} className="relative">
        <button
          type="button"
          onClick={() => toggleDropdown("sort")}
          style={{ cursor: "pointer" }}
          className="flex items-center justify-center gap-1.5 px-4 py-3 bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 rounded-full transition-all cursor-pointer"
        >
          <Sort size={20} color="currentColor" />
          <span className="font-body text-label-m font-medium">
            {selectedSort}
          </span>
        </button>

        {openDropdown === "sort" && (
          <div className="absolute right-0 top-[calc(100%+8px)] w-56 bg-white rounded-lg shadow-xl shadow-neutral-900/10 border border-neutral-200 p-1.5 z-50">
            <div className="flex flex-col gap-0.5">
              {SORT_OPTIONS.map((sort) => {
                const isSelected = selectedSort === sort;
                return (
                  <button
                    key={sort}
                    type="button"
                    onClick={() => {
                      onSortChange(sort);
                      setOpenDropdown(null);
                    }}
                    style={{ cursor: "pointer" }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[12px] font-body text-label-m text-left transition-all cursor-pointer ${isSelected
                      ? "bg-primary-50 text-primary-800 font-semibold"
                      : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 active:bg-neutral-200"
                      }`}
                  >
                    <span>{sort}</span>
                    {isSelected && <Check size={16} color="var(--color-primary-800)" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
