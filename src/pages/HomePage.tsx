import React from 'react';
import { PageId, PAGES } from '../types';
import { PagePagination } from '../components/PagePagination';
import { ArrowRight, DollarSign, Activity, RefreshCw, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 1: HOME PAGE
 * ----------------------------------------------------------------------------
 * Project: Stewart River Iron-Removal System: Design Area 6.2 Water Quality and Treatment
 * Subtitle: EWB Challenge, Port Stewart, Lama Lama Country, Cape York, Queensland
 * Authors: Ethan Illidge, Truong Huy, Natalia Tran, Tan Dong
 * Note for team: Edit the text content below directly for your sections.
 * ============================================================================
 */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#21295C] via-[#065A82] to-[#1C7293] text-white p-8 sm:p-12 lg:p-16 shadow-xl">
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-cyan-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            EWB Challenge 2026 · Design Area 6.2 Water Quality and Treatment
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Stewart River Iron-Removal System
          </h1>

          <p className="text-lg sm:text-xl font-medium text-cyan-100 max-w-2xl leading-relaxed">
            EWB Challenge, Port Stewart, Lama Lama Country, Cape York, Queensland.
          </p>

          {/* One-Sentence Summary as requested */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-base sm:text-lg leading-relaxed">
            <span className="text-cyan-300 font-bold block text-xs uppercase tracking-wider mb-1">
              Project Summary
            </span>
            “A low-maintenance system that removes iron from Stewart River water, by reusing the community&apos;s existing pump and tanks.”
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-cyan-100">
            <span className="font-semibold text-white">Project Engineering Team:</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Ethan Illidge</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Huy Truong</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Natalia Tran</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Tan Dong</span>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('context')}
              className="inline-flex items-center gap-2 bg-white text-[#21295C] hover:bg-cyan-50 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <span>Explore Project Report</span>
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('prototype')}
              className="inline-flex items-center gap-2 bg-[#065A82]/80 hover:bg-[#065A82] text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all border border-white/20"
            >
              <span>View Prototype Design</span>
            </button>
          </div>
        </div>
      </section>

      {/* Three Key-Number Cards */}
      <section aria-labelledby="key-numbers-heading">
        <h2 id="key-numbers-heading" className="sr-only">
          Key Project Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <DollarSign size={26} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#21295C] mb-2 tracking-tight">
              $26,000–$40,000 AUD
            </div>
            <div className="text-sm font-bold text-[#065A82] mb-1">
              Estimated Total Cost
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Includes full equipment purchase, freight to remote Cape York, installation labour, and a 20–25% remote contingency allowance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#065A82] flex items-center justify-center mb-4">
              <Activity size={26} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#21295C] mb-2 tracking-tight">
              76%
            </div>
            <div className="text-sm font-bold text-[#065A82] mb-1">
              Minimum Iron Removal Needed
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Lowers high natural iron from ~1.25 mg/L down to ≤ 0.30 mg/L to meet the Australian Drinking Water Guidelines (NHMRC, 2025a).
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#1C7293] flex items-center justify-center mb-4">
              <RefreshCw size={26} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#21295C] mb-2 tracking-tight">
              $0
            </div>
            <div className="text-sm font-bold text-[#065A82] mb-1">
              Reused Pump and Header Tanks
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Reuses the community&apos;s functional Stewart River pump, existing intake pipes, and elevated storage tanks to save budget and avoid waste.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview Cards */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-[#21295C] mb-3">
            Why This Design Matters
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The Lama Lama community at Port Stewart requires safe, clean water for domestic use. Stewart River water contains naturally high dissolved iron, causing red staining, foul metallic taste, and severe filter fouling. Our engineering solution introduces a passive venturi aerator, a 1,000 L settling tank, and backwashable media filters to oxidise and capture iron before it reaches the community header tanks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 font-bold text-sm text-[#21295C] mb-2">
              <CheckCircle2 size={18} className="text-[#1C7293]" />
              <span>Simple, Off-Grid Operation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Passive aeration injects atmospheric air using river pump pressure alone. No continuous chemical dosing or expensive recurring reagents needed.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 font-bold text-sm text-[#21295C] mb-2">
              <ShieldCheck size={18} className="text-[#1C7293]" />
              <span>Easy Local Maintenance</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Backwashable filters allow local operators and Lama Lama Rangers to flush captured iron particles in minutes without replacing expensive filter cartridges.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 font-bold text-sm text-[#21295C] mb-2">
              <RefreshCw size={18} className="text-[#1C7293]" />
              <span>Cyclone & Wet Season Ready</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Engineered with corrosion-resistant fittings, concrete anchoring slab, and dry-season freight staging for extreme remote tropical conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation: All Project Pages */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Explore Project Sections
          </h2>
          <span className="text-xs text-slate-500">
            Click any section below to view full details
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAGES.filter((p) => p.id !== 'home').map((page) => (
            <button
              key={page.id}
              type="button"
              onClick={() => onNavigate(page.id)}
              className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-[#1C7293] hover:shadow-md text-left transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span className="px-2 py-0.5 rounded bg-slate-100 group-hover:bg-[#E2EDF3] group-hover:text-[#065A82] transition-colors">
                    Section {page.number}
                  </span>
                  <ChevronRight
                    size={16}
                    className="text-slate-300 group-hover:text-[#065A82] group-hover:translate-x-1 transition-all"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#21295C] group-hover:text-[#065A82] transition-colors mb-1.5">
                  {page.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {page.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#1C7293] flex items-center gap-1 group-hover:underline">
                <span>Read Section</span>
                <ArrowRight size={12} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Pagination Footer */}
      <PagePagination currentPageId="home" onNavigate={onNavigate} />
    </div>
  );
};
