"use client";

import { ChevronLeft, ChevronRight } from "@/icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // If there is only 1 page or 0 pages, do not render pagination
  if (totalPages <= 1) {
    return null;
  }

  // Generate page numbers
  const pages: (number | string)[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Show sliding window for larger page counts
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
  }

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-6 py-18 select-none"
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
        className="flex items-center justify-center px-4 py-3 bg-white outline outline-neutral-200 rounded-full transition-all hover:outline-primary-600 group disabled:opacity-30 disabled:hover:bg-white disabled:hover:outline-neutral-200"
      >
        <ChevronLeft size={24} className="text-neutral-950 group-hover:text-primary-600 disabled:text-neutral-400" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-4 sm:gap-6">
        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="font-heading text-heading-xs text-neutral-400 px-1"
              >
                ...
              </span>
            );
          }

          const pageNum = Number(p);
          const isActive = currentPage === pageNum;

          return (
            <button
              key={pageNum}
              type="button"
              onClick={() => onPageChange(pageNum)}
              style={{ cursor: "pointer" }}
              aria-current={isActive ? "page" : undefined}
              className={`font-heading text-heading-xs font-semibold px-2 py-1 transition-all cursor-pointer ${isActive
                ? "text-neutral-200 hover:text-neutral-400 font-bold mb-0.5"
                : "text-neutral-950 hover:text-primary-600"
                }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        style={{ cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
        className="flex items-center justify-center px-4 py-3 bg-white outline outline-neutral-200 rounded-full transition-all hover:outline-primary-600 group disabled:opacity-30 disabled:hover:bg-white disabled:hover:outline-neutral-200"
      >
        <ChevronRight size={24} className="text-neutral-950 group-hover:text-primary-600" />
      </button>
    </nav>
  );
}
