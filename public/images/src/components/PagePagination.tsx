import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PAGES, PageId } from '../types';

interface PagePaginationProps {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
}

export const PagePagination: React.FC<PagePaginationProps> = ({
  currentPageId,
  onNavigate,
}) => {
  const currentIndex = PAGES.findIndex((p) => p.id === currentPageId);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <nav
      aria-label="Document pagination"
      className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
    >
      {prevPage ? (
        <button
          type="button"
          onClick={() => onNavigate(prevPage.id)}
          className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white hover:border-[#1C7293] hover:bg-slate-50 transition-all text-left w-full sm:w-auto sm:max-w-xs shadow-xs"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#E2EDF3] flex items-center justify-center text-[#065A82] shrink-0 transition-colors">
            <ArrowLeft size={16} />
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Previous Page
            </div>
            <div className="text-sm font-semibold text-[#21295C] line-clamp-1">
              {prevPage.title}
            </div>
          </div>
        </button>
      ) : (
        <div className="hidden sm:block" />
      )}

      {nextPage && (
        <button
          type="button"
          onClick={() => onNavigate(nextPage.id)}
          className="group flex items-center justify-between sm:justify-end gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white hover:border-[#1C7293] hover:bg-slate-50 transition-all text-right w-full sm:w-auto sm:max-w-xs shadow-xs ml-auto"
        >
          <div className="text-left sm:text-right">
            <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Next Page
            </div>
            <div className="text-sm font-semibold text-[#21295C] line-clamp-1">
              {nextPage.title}
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#E2EDF3] flex items-center justify-center text-[#065A82] shrink-0 transition-colors">
            <ArrowRight size={16} />
          </div>
        </button>
      )}
    </nav>
  );
};
