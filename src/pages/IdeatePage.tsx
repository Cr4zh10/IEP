import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { Trophy, Check, X, Award } from 'lucide-react';

interface IdeatePageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 5: IDEATE AND SCREEN
 * ----------------------------------------------------------------------------
 * Content:
 * - Four concept cards (Filtration, Chemical, New Plant, Aeration + Settling + Backwash)
 * - Table 3: Multi-Criteria Decision Matrix for Water Treatment Concepts
 * - Why Concept 4 was selected (AWA, 2018; EWB, 2019)
 * ============================================================================
 */
export const IdeatePage: React.FC<IdeatePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={5}
        title="Ideate and Screen"
        subtitle="Exploring engineering design concepts, systematic multi-criteria evaluation, and selecting the optimal treatment pathway."
        assignedAuthor="Natalia Tran"
        lastUpdated="October 2026"
      />

      {/* Four Concept Cards */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Four Engineering Design Concepts
          </h2>
          <span className="text-xs text-slate-500">
            Screened against remote-site constraints and community fit (Australian Water Association [AWA], 2018; Engineers Without Borders Australia [EWB], 2019)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Concept 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Concept 01
              </div>
              <h3 className="text-lg font-bold text-[#21295C] mb-2">
                Filtration Only
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Direct inline particulate and cartridge filtration placed immediately on the raw river supply without pre-treatment.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-1.5 text-emerald-700">
                  <Check size={14} className="shrink-0 mt-0.5" />
                  <span>Lowest installation cost.</span>
                </div>
                <div className="flex items-start gap-1.5 text-rose-700">
                  <X size={14} className="shrink-0 mt-0.5" />
                  <span>High fouling risk: dissolved iron chokes filter cartridges rapidly.</span>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
              Score: 81 / 140
            </div>
          </div>

          {/* Concept 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Concept 02
              </div>
              <h3 className="text-lg font-bold text-[#21295C] mb-2">
                Chemical Iron Treatment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Dosing chlorine, potassium permanganate, or ozone to rapidly oxidize dissolved iron into insoluble ferric floc.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-1.5 text-emerald-700">
                  <Check size={14} className="shrink-0 mt-0.5" />
                  <span>Effective at oxidising dissolved iron.</span>
                </div>
                <div className="flex items-start gap-1.5 text-rose-700">
                  <X size={14} className="shrink-0 mt-0.5" />
                  <span>Needs ongoing chemical supply; more complex and hazardous to operate.</span>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
              Score: 79 / 140
            </div>
          </div>

          {/* Concept 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Concept 03
              </div>
              <h3 className="text-lg font-bold text-[#21295C] mb-2">
                Complete New Treatment Plant
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Containerised package plant (coagulation, flocculation, DAF, RO) replacing all existing water infrastructure.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-1.5 text-emerald-700">
                  <Check size={14} className="shrink-0 mt-0.5" />
                  <span>Comprehensive industrial-grade treatment.</span>
                </div>
                <div className="flex items-start gap-1.5 text-rose-700">
                  <X size={14} className="shrink-0 mt-0.5" />
                  <span>Highest capital cost; discards existing assets completely.</span>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
              Score: 78 / 140
            </div>
          </div>

          {/* Concept 4 - Winner */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#1C7293] shadow-md relative overflow-hidden flex flex-col justify-between ring-2 ring-[#065A82]/10">
            <div className="absolute top-0 right-0 bg-[#065A82] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
              Selected Design
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#065A82] mb-1">
                Concept 04 (Selected)
              </div>
              <h3 className="text-lg font-bold text-[#21295C] mb-2">
                Aeration + Settling + Backwashable Filtration
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Venturi aerator injects free air; 1,000 L settling tank drops heavy precipitates; dual media filters trap residual iron and backwash clean.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-1.5 text-emerald-700">
                  <Check size={14} className="shrink-0 mt-0.5 font-bold" />
                  <span className="font-medium">Removes iron effectively without chemicals.</span>
                </div>
                <div className="flex items-start gap-1.5 text-emerald-700">
                  <Check size={14} className="shrink-0 mt-0.5 font-bold" />
                  <span className="font-medium">Easier maintenance with simple backwashing.</span>
                </div>
                <div className="flex items-start gap-1.5 text-emerald-700">
                  <Check size={14} className="shrink-0 mt-0.5 font-bold" />
                  <span className="font-medium">Reuses existing pump and header tanks ($0).</span>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-[#065A82] flex items-center justify-between">
              <span>Winning Score</span>
              <span className="text-base font-extrabold text-[#21295C]">136 / 140</span>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Matrix Table & Table 3 */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-[#065A82] mb-1">
          <Award size={24} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Decision Matrix Evaluation
          </h2>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Concepts were evaluated on a 1–5 scale across six weighted criteria (weights shown in brackets), as detailed in Table 3. The maximum possible weighted score is 140. Concept 4 is highlighted as the clear winning design.
        </p>

        {/* APA Table 3 */}
        <div>
          <div className="mb-2 text-left">
            <div className="font-bold text-sm text-[#21295C]">Table 3</div>
            <div className="italic text-sm text-slate-800 font-medium">
              Multi-Criteria Decision Matrix for Water Treatment Concepts
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#21295C] text-white text-xs sm:text-sm">
                  <th className="p-3.5 font-bold uppercase tracking-wider">Criteria (Weight)</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-center w-28">
                    Concept 1: Filtration Only
                  </th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-center w-28">
                    Concept 2: Chemical Dosing
                  </th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-center w-28">
                    Concept 3: New Plant
                  </th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-center w-36 bg-[#065A82] border-x border-[#1C7293]">
                    Concept 4: Aeration + Settling + Backwash
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    Iron removal effectiveness (5)
                  </td>
                  <td className="p-3.5 text-center">2 (10)</td>
                  <td className="p-3.5 text-center">4 (20)</td>
                  <td className="p-3.5 text-center">5 (25)</td>
                  <td className="p-3.5 text-center font-bold bg-[#E2EDF3]/50 text-[#065A82] border-x border-[#1C7293]/30">
                    5 (25)
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    Ease of maintenance (5)
                  </td>
                  <td className="p-3.5 text-center">2 (10)</td>
                  <td className="p-3.5 text-center">2 (10)</td>
                  <td className="p-3.5 text-center">3 (15)</td>
                  <td className="p-3.5 text-center font-bold bg-[#E2EDF3]/50 text-[#065A82] border-x border-[#1C7293]/30">
                    5 (25)
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    Cost effectiveness (4)
                  </td>
                  <td className="p-3.5 text-center">5 (20)</td>
                  <td className="p-3.5 text-center">3 (12)</td>
                  <td className="p-3.5 text-center">1 (4)</td>
                  <td className="p-3.5 text-center font-bold bg-[#E2EDF3]/50 text-[#065A82] border-x border-[#1C7293]/30">
                    4 (16)
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    Reuse existing infrastructure (4)
                  </td>
                  <td className="p-3.5 text-center">4 (16)</td>
                  <td className="p-3.5 text-center">3 (12)</td>
                  <td className="p-3.5 text-center">1 (4)</td>
                  <td className="p-3.5 text-center font-bold bg-[#E2EDF3]/50 text-[#065A82] border-x border-[#1C7293]/30">
                    5 (20)
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    Remote community suitability (5)
                  </td>
                  <td className="p-3.5 text-center">3 (15)</td>
                  <td className="p-3.5 text-center">2 (10)</td>
                  <td className="p-3.5 text-center">2 (10)</td>
                  <td className="p-3.5 text-center font-bold bg-[#E2EDF3]/50 text-[#065A82] border-x border-[#1C7293]/30">
                    5 (25)
                  </td>
                </tr>

                {/* Row 6 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    Reliability (5)
                  </td>
                  <td className="p-3.5 text-center">2 (10)</td>
                  <td className="p-3.5 text-center">3 (15)</td>
                  <td className="p-3.5 text-center">4 (20)</td>
                  <td className="p-3.5 text-center font-bold bg-[#E2EDF3]/50 text-[#065A82] border-x border-[#1C7293]/30">
                    5 (25)
                  </td>
                </tr>

                {/* Totals Row */}
                <tr className="bg-slate-100 font-bold text-sm">
                  <td className="p-4 text-[#21295C]">
                    Weighted Totals (out of 140)
                  </td>
                  <td className="p-4 text-center text-slate-600">81</td>
                  <td className="p-4 text-center text-slate-600">79</td>
                  <td className="p-4 text-center text-slate-600">78</td>
                  <td className="p-4 text-center bg-[#065A82] text-white border-x border-[#065A82] text-base font-extrabold shadow-inner">
                    136 (Winner)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
            <span className="italic font-semibold">Note.</span> Concepts scored from 1 (poor) to 5 (excellent) across weighted criteria (shown in brackets). Maximum total score is 140. Evaluation criteria derived from community priorities and technical recommendations (AWA, 2018; EWB, 2019). Concept 4 is highlighted as the selected solution.
          </div>
        </div>
      </section>

      {/* Why Concept 4 Was Selected */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-[#065A82]">
          <Trophy size={24} className="text-amber-500" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Why Concept 4 Was Selected
          </h2>
        </div>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Concept 4 scored 136 out of 140 in Table 3, well ahead of the other three concepts. It was selected because it directly aligns with the lived realities and infrastructure at Port Stewart (AWA, 2018; EWB, 2019):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#21295C]">
                Targets the Main Problem (Iron)
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Naturally converts dissolved ferrous iron (Fe²⁺) into insoluble ferric iron (Fe³⁺) flocs using free atmospheric air.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#21295C]">
                Builds on Previous EWB/Arup Recommendations
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Honors over a decade of field research and technical scoping performed by Arup and EWB Australia since 2015 (AWA, 2018; EWB, 2019).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#21295C]">
                Reuses Existing Infrastructure
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Slots directly between the existing Stewart River river pump and the elevated header tanks with no major civil restructuring.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              4
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#21295C]">
                Cheaper Than a New Plant
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Estimated at $26,000–$40,000 AUD rather than hundreds of thousands required for industrial containerised treatment plants.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              5
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#21295C]">
                Backwashable Filters Make Cleaning Easier
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Local rangers can quickly rinse captured iron solids out through backwash ports without tools or replacement cartridges.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              6
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#21295C]">
                Reduces Risk of Earlier Filter-Fouling Failures
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Settling removes large iron particles first, ensuring media filters only polish the remaining water without choking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PagePagination currentPageId="ideate" onNavigate={onNavigate} />
    </div>
  );
};
