"use client";

import { COURSES_PAGE_TABS } from "@/lib/constants";

interface CategoryTabsProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export function CategoryTabs({ activeTab, onSelectTab }: CategoryTabsProps) {
  return (
    <div className="w-full max-w-[1200px] mx-auto pt-8">
      <div className="flex items-center justify-start lg:justify-between gap-3 overflow-x-auto no-scrollbar py-1">
        {COURSES_PAGE_TABS.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onSelectTab(tab)}
              className={`shrink-0 px-4 py-3 rounded-full font-body text-label-m font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-secondary-400 text-neutral-950 shadow-sm"
                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
