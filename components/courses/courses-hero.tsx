"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Check } from "@/icons";

interface CoursesHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedScope?: string;
  onScopeChange?: (scope: string) => void;
}

const SEARCH_SCOPES = ["Courses", "Creators", "Topics", "All"];

export function CoursesHero({
  searchQuery,
  onSearchChange,
  selectedScope = "Courses",
  onScopeChange,
}: CoursesHeroProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isDropdownOpen) return;

    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const getPlaceholder = (scope: string) => {
    switch (scope) {
      case "Creators":
        return "Search by creator (e.g. purepearl studio)...";
      case "Topics":
        return "Search by topic (e.g. UI/UX, Design, Marketing)...";
      case "All":
        return "Search courses, creators, topics...";
      default:
        return "Search courses...";
    }
  };

  const handleSelectScope = (scope: string) => {
    onScopeChange?.(scope);
    setIsDropdownOpen(false);
    // Automatically focus the search input so the user can immediately type
    inputRef.current?.focus();
  };

  return (
    <section className="relative z-40 h-auto min-h-[360px] pb-10 md:pb-0 md:h-[360px] bg-primary-800 overflow-visible select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/courses/courses-hero-bg.svg"
          alt=""
          fill
          className="object-cover object-top opacity-12"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-50 flex flex-col items-center pt-[148px] px-5 max-w-[1200px] mx-auto">
        <h1 className="font-heading text-heading-s font-semibold text-neutral-50 text-center tracking-[-0.01em]">
          Find Your Next Course
        </h1>

        {/* Search & Scope Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full max-w-[620px] justify-center">
          {/* Search Input Box */}
          <div className="flex items-center gap-2 bg-white rounded-full px-6 h-[52px] w-full sm:w-[461px] shadow-sm">
            <Search size={24} color="#82868E" className="shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={getPlaceholder(selectedScope)}
              className="w-full bg-transparent font-body text-body-l text-neutral-950 placeholder:text-neutral-400 outline-none"
            />
          </div>

          {/* Scope Dropdown Button */}
          <div ref={dropdownRef} className="relative shrink-0 z-50">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{ cursor: "pointer" }}
              className="flex items-center justify-center gap-2 bg-secondary-400 hover:bg-secondary-500 active:scale-[0.98] text-neutral-950 font-body text-label-l font-medium h-[52px] px-6 rounded-full transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>{selectedScope}</span>
              <ChevronDown
                size={24}
                color="#242528"
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Scope Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-48 bg-white rounded-lg shadow-2xl shadow-neutral-900/20 border border-neutral-200 p-1.5 z-50 pointer-events-auto">
                <div className="flex flex-col gap-0.5">
                  {SEARCH_SCOPES.map((scope) => {
                    const isSelected = selectedScope === scope;
                    return (
                      <button
                        key={scope}
                        type="button"
                        onClick={() => handleSelectScope(scope)}
                        style={{ cursor: "pointer" }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[12px] font-body text-label-m text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-primary-50 text-primary-800 font-semibold"
                            : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 active:bg-neutral-200"
                        }`}
                      >
                        <span>{scope}</span>
                        {isSelected && (
                          <Check size={16} color="var(--color-primary-800)" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
