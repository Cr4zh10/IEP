import React, { useState } from 'react';
import { Menu, X, Droplet, ChevronRight, Layers } from 'lucide-react';
import { PAGES, PageId } from '../types';

interface NavbarProps {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPageId, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectPage = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activePage = PAGES.find((p) => p.id === currentPageId);

  return (
    <header className="sticky top-0 z-50 bg-[#21295C] text-white shadow-md border-b border-[#1C7293]/30">
      {/* Top branding bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Title */}
          <button
            type="button"
            onClick={() => handleSelectPage('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#1C7293] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C7293] to-[#065A82] flex items-center justify-center text-white shadow-inner shrink-0">
              <Droplet size={22} className="fill-cyan-200 stroke-white" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight line-clamp-1">
                Stewart River Iron-Removal System
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-normal line-clamp-1">
                EWB Challenge · Port Stewart, Lama Lama Country · Area 6.2
              </div>
            </div>
          </button>

          {/* Quick status badge / Menu trigger */}
          <div className="flex items-center gap-2">
            <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#065A82] text-cyan-100 border border-[#1C7293]/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Design Area 6.2: Water Quality & Treatment
            </span>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#065A82] focus:outline-none focus:ring-2 focus:ring-[#1C7293]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Navigation (Scrollable list with clean indicators) */}
      <div className="hidden xl:block bg-[#065A82] border-t border-[#1C7293]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-1 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-slate-400">
            {PAGES.map((page) => {
              const isActive = page.id === currentPageId;
              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => handleSelectPage(page.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-[#21295C] shadow-sm font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-[#1C7293]/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span
                    className={`text-[10px] w-4 h-4 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-[#21295C] text-white' : 'bg-[#21295C]/40 text-slate-300'
                    }`}
                  >
                    {page.number}
                  </span>
                  <span>{page.shortTitle}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#21295C] border-t border-[#1C7293]/40 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-3 bg-[#065A82]/50 border-b border-[#1C7293]/30 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1 font-medium">
              <Layers size={14} className="text-cyan-300" /> All Project Sections (12 Pages)
            </span>
            <span>Current: {activePage?.number}. {activePage?.shortTitle}</span>
          </div>
          <div className="py-2 px-3 space-y-1">
            {PAGES.map((page) => {
              const isActive = page.id === currentPageId;
              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => handleSelectPage(page.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-left font-medium transition-colors ${
                    isActive
                      ? 'bg-white text-[#21295C] font-bold shadow'
                      : 'text-slate-200 hover:bg-[#065A82] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                        isActive
                          ? 'bg-[#21295C] text-white'
                          : 'bg-[#065A82] text-cyan-200'
                      }`}
                    >
                      {page.number}
                    </span>
                    <div>
                      <div className="leading-tight">{page.title}</div>
                      <div
                        className={`text-[11px] ${
                          isActive ? 'text-slate-500' : 'text-slate-400'
                        }`}
                      >
                        {page.description}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={isActive ? 'text-[#21295C]' : 'text-slate-400'}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
