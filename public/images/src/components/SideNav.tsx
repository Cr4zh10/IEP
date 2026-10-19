import React from 'react';
import { Layers } from 'lucide-react';
import { PAGES, PageId } from '../types';

interface SideNavProps {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
}

/**
 * The list of all pages (1 to 13) down the left side of the screen.
 * It stays in view while you scroll, and the page you are on is highlighted.
 *
 * It only shows on wide screens (the `side` size, 1440 px and up, set at the top of src/index.css).
 * On narrower screens the drop-down in the top bar (Navbar.tsx) is used instead.
 *
 * The list of pages comes from PAGES in src/types.ts.
 */
export const SideNav: React.FC<SideNavProps> = ({ currentPageId, onNavigate }) => {
  const handleClick = (e: React.MouseEvent, id: PageId) => {
    // Let the browser handle Ctrl/Cmd/Shift-click and middle-click, so "open in a new tab" still works.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <aside className="hidden side:block w-60 shrink-0 sticky top-24 self-start">
      <nav
        aria-label="All pages"
        className="max-h-[calc(100vh-9rem)] overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"
      >
        <div className="flex items-center gap-1.5 px-3 pb-1.5 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <Layers size={14} className="text-[#1C7293]" aria-hidden="true" /> All pages
        </div>
        <ul className="space-y-0.5">
          {PAGES.map((page) => {
            const isActive = page.id === currentPageId;
            return (
              <li key={page.id}>
                <a
                  href={`#${page.id}`}
                  onClick={(e) => handleClick(e, page.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-3 rounded-lg px-3 py-1.5 text-sm leading-snug focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C7293] ${
                    isActive
                      ? 'bg-[#21295C] font-bold text-white'
                      : 'font-medium text-slate-700 hover:bg-[#E3EEF3] focus-visible:bg-[#E3EEF3]'
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                      isActive ? 'bg-white text-[#21295C]' : 'bg-[#21295C]/10 text-[#21295C]'
                    }`}
                  >
                    {page.number}
                  </span>
                  <span>{page.shortTitle}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
