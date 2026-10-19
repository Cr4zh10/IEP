import React, { useEffect, useRef, useState } from 'react';
import { Droplet, ChevronDown, Check, Layers } from 'lucide-react';
import { PAGES, PageId } from '../types';

interface NavbarProps {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
}

/**
 * Top bar with a drop-down list of all pages (the numbers 1 to 13), for phones, tablets and small laptops.
 * On wide screens (the `side` size, 1440 px and up, set at the top of src/index.css) the drop-down is hidden,
 * because the list of pages is shown down the left side instead (SideNav.tsx).
 * The list of pages comes from PAGES in src/types.ts, so a new page only needs to be added there.
 *
 * How it works: the button shows the page you are on. Click it (or press Enter, Space or the down arrow)
 * to open the list. Up and down arrows move through it, Esc closes it, and clicking outside it closes it too.
 */
export const Navbar: React.FC<NavbarProps> = ({ currentPageId, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const activeIndex = Math.max(
    0,
    PAGES.findIndex((p) => p.id === currentPageId),
  );
  const activePage = PAGES[activeIndex];

  // Close the list whenever the page changes (a click in the list, a link in the text, or the browser's Back button).
  useEffect(() => {
    setOpen(false);
  }, [currentPageId]);

  // When the list opens, put the keyboard focus on the page you are on, so the arrow keys work straight away.
  useEffect(() => {
    if (open) itemRefs.current[activeIndex]?.focus();
  }, [open, activeIndex]);

  // While the list is open, close it when you click or tab to something outside it.
  useEffect(() => {
    if (!open) return;
    const isOutside = (target: EventTarget | null) =>
      !!wrapperRef.current && target instanceof Node && !wrapperRef.current.contains(target);
    const onPointerDown = (e: PointerEvent) => {
      if (isOutside(e.target)) setOpen(false);
    };
    const onFocusIn = (e: FocusEvent) => {
      if (isOutside(e.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('focusin', onFocusIn);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('focusin', onFocusIn);
    };
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && open) {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }
    if (!open) {
      if (e.key === 'ArrowDown' && e.target === triggerRef.current) {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    const items = itemRefs.current.filter((el): el is HTMLAnchorElement => el !== null);
    const here = items.indexOf(document.activeElement as HTMLAnchorElement);
    let next = -1;
    if (e.key === 'ArrowDown') next = here < 0 ? 0 : (here + 1) % items.length;
    else if (e.key === 'ArrowUp') next = here < 0 ? items.length - 1 : (here - 1 + items.length) % items.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = items.length - 1;
    if (next >= 0) {
      e.preventDefault();
      items[next].focus();
    }
  };

  const handleLinkClick = (e: React.MouseEvent, id: PageId) => {
    // Let the browser handle Ctrl/Cmd/Shift-click and middle-click, so "open in a new tab" still works.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#21295C] text-white shadow-md border-b border-[#1C7293]/30">
      <div className="max-w-7xl side:max-w-[97rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-3 h-16 sm:h-18">
          {/* Logo / Title */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 min-w-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C7293] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C7293] to-[#065A82] flex items-center justify-center text-white shadow-inner shrink-0">
              <Droplet size={22} className="fill-cyan-200 stroke-white" />
            </div>
            <div className="min-w-0">
              <div className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight line-clamp-2 sm:line-clamp-1">
                Stewart River Iron-Removal System
              </div>
              <div className="text-xs text-slate-300 font-normal line-clamp-1">
                EWB Challenge · Port Stewart, Lama Lama Country · Area 6.2
              </div>
            </div>
          </button>

          {/* Page drop-down */}
          <div ref={wrapperRef} onKeyDown={handleKeyDown} className="flex items-center gap-2 shrink-0">
            <span className="hidden side:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#065A82] text-cyan-100 border border-[#1C7293]/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Design Area 6.2: Water Quality & Treatment
            </span>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="page-menu"
              className="inline-flex side:hidden items-center gap-2 rounded-lg border border-[#1C7293]/60 bg-[#065A82] py-1.5 pl-2 pr-2 sm:pr-3 text-sm font-semibold text-white hover:bg-[#1C7293]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span className="sr-only">Pages menu. Current page:</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-xs font-bold text-[#21295C]">
                {activePage.number}
              </span>
              <span className="hidden sm:inline">{activePage.shortTitle}</span>
              <span className="sr-only sm:hidden">{activePage.shortTitle}</span>
              <ChevronDown size={18} aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
              <div
                id="page-menu"
                className="menu-pop side:hidden absolute right-0 top-full mt-1.5 w-[min(25rem,calc(100vw-2rem))] max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain rounded-xl bg-white text-slate-800 shadow-2xl ring-1 ring-slate-900/10"
              >
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Layers size={14} className="text-[#1C7293]" aria-hidden="true" /> All pages
                  </span>
                  <span>
                    Page {activePage.number} of {PAGES.length}
                  </span>
                </div>
                <nav aria-label="All pages">
                  <ul className="space-y-0.5 p-2">
                    {PAGES.map((page, i) => {
                      const isActive = page.id === currentPageId;
                      return (
                        <li key={page.id}>
                          <a
                            ref={(el) => {
                              itemRefs.current[i] = el;
                            }}
                            href={`#${page.id}`}
                            onClick={(e) => handleLinkClick(e, page.id)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm leading-snug focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C7293] ${
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
                            <span className="flex-1">{page.title}</span>
                            {isActive && <Check size={16} aria-hidden="true" />}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
