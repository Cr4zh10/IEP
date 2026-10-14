import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { Target, CheckSquare, Sparkles } from 'lucide-react';

interface DefinePageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 4: DEFINE - USER NEEDS & DESIGN REQUIREMENTS
 * ----------------------------------------------------------------------------
 * Problem Statement:
 * "The Stewart River water supply contains naturally high levels of dissolved iron.
 * Previous treatment systems became ineffective due to iron fouling and maintenance difficulties,
 * resulting in poor water quality and increased operational challenges. Therefore, the solution
 * must improve water quality while remaining practical, reliable and easy to maintain in a remote
 * community setting."
 *
 * Five User Needs:
 * 1. Safe and acceptable drinking water (NHMRC, 2025a)
 * 2. Simple maintenance (EWB, 2026)
 * 3. Reliable performance
 * 4. Reuse existing infrastructure
 * 5. Remote community suitability (QRA, 2019)
 *
 * Design Goal:
 * "Create a low-maintenance iron treatment system that improves water quality while
 * preventing the maintenance failures of previous systems."
 *
 * Table 2:
 * - Engineering Design Requirements and Priority Matrix
 * ============================================================================
 */
export const DefinePage: React.FC<DefinePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={4}
        title="Define: User Needs and Design Requirements"
        subtitle="Formulating the engineering problem statement, translating human needs into technical criteria, and establishing measurable priorities."
        assignedAuthor="Natalia Tran"
        lastUpdated="October 2026"
      />

      {/* Problem Statement Card */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#065A82]" />
        <div className="flex items-center gap-3 text-[#065A82] mb-3">
          <Target size={24} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Problem Statement
          </h2>
        </div>
        <blockquote className="p-5 sm:p-6 rounded-xl bg-[#F4F8FA] border-l-4 border-[#065A82] text-slate-800 text-base sm:text-lg italic font-medium leading-relaxed my-2">
          “The Stewart River water supply contains naturally high levels of dissolved iron. Previous treatment systems became ineffective due to iron fouling and maintenance difficulties, resulting in poor water quality and increased operational challenges. Therefore, the solution must improve water quality while remaining practical, reliable and easy to maintain in a remote community setting.” (Engineers Without Borders Australia [EWB], 2026)
        </blockquote>
      </section>

      {/* Design Goal Card */}
      <section className="bg-gradient-to-r from-[#21295C] to-[#065A82] text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex items-center gap-3 mb-2 text-cyan-200">
          <Sparkles size={22} />
          <h2 className="text-xs uppercase tracking-wider font-bold">
            Project Design Goal
          </h2>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
          “Create a low-maintenance iron treatment system that improves water quality while preventing the maintenance failures of previous systems.”
        </p>
      </section>

      {/* Five User-Need Cards */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Five Core User Needs
          </h2>
          <span className="text-xs text-slate-500">
            Synthesized from community consultations and technical briefs (EWB, 2026)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Need 1 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1C7293] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#065A82] flex items-center justify-center font-bold text-sm mb-3">
                01
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-2">
                Safe and Acceptable Drinking Water
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Remove dissolved iron and associated mineral aesthetic contaminants to clear metallic taste, eliminate red staining, and meet Australian Drinking Water Guidelines (≤ 0.30 mg/L) (National Health and Medical Research Council [NHMRC], 2025a, 2025b).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#1C7293]">
              Health & Aesthetics
            </div>
          </div>

          {/* Need 2 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1C7293] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                02
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-2">
                Simple Maintenance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Routine servicing must not require specialist technicians, delicate cartridge replacements, or complicated chemical mixing (EWB, 2026).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700">
              Operability
            </div>
          </div>

          {/* Need 3 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1C7293] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-[#1C7293] flex items-center justify-center font-bold text-sm mb-3">
                03
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-2">
                Reliable Performance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deliver clean water continuously without sudden filter chokes or downtime, even as seasonal flow rates fluctuate (EWB, 2026).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#1C7293]">
              Robustness
            </div>
          </div>

          {/* Need 4 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1C7293] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm mb-3">
                04
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-2">
                Reuse Existing Infrastructure
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Leverage the working Stewart River intake pump, existing piping, and elevated header tanks to preserve capital and respect past work (EWB, 2026).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-indigo-700">
              Asset Preservation
            </div>
          </div>

          {/* Need 5 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1C7293] transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm mb-3">
                05
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-2">
                Remote Community Suitability
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Survive harsh monsoonal conditions, high humidity, cyclone wind loadings, and prolonged wet-season isolation (Queensland Reconstruction Authority [QRA], 2019).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-amber-700">
              Context Fit
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Design Requirements Table & Table 2 */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-[#065A82] mb-1">
          <CheckSquare size={24} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Design Requirements and Priority Matrix
          </h2>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          The engineering design criteria are prioritized below in Table 2 according to their direct impact on system longevity and community adoption:
        </p>

        {/* APA Table 2 */}
        <div>
          <div className="mb-2 text-left">
            <div className="font-bold text-sm text-[#21295C]">Table 2</div>
            <div className="italic text-sm text-slate-800 font-medium">
              Engineering Design Requirements and Priority Matrix
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-[#21295C] text-white text-xs sm:text-sm">
                  <th className="p-4 font-bold uppercase tracking-wider w-16">No.</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Design Requirement</th>
                  <th className="p-4 font-bold uppercase tracking-wider w-32">Priority</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Engineering Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                {/* Req 1 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#065A82]">REQ-01</td>
                  <td className="p-4 font-semibold text-[#21295C]">
                    Remove dissolved iron from Stewart River water
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
                      High
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">
                    Target ≥ 76% iron removal (1.25 mg/L to ≤ 0.30 mg/L) to prevent staining and taste issues (NHMRC, 2025a).
                  </td>
                </tr>

                {/* Req 2 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#065A82]">REQ-02</td>
                  <td className="p-4 font-semibold text-[#21295C]">
                    Include simple cleaning / backwashing
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
                      High
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">
                    Enables rapid flushing of solid iron precipitates without replacing expensive single-use media cartridges (EWB, 2026).
                  </td>
                </tr>

                {/* Req 3 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#065A82]">REQ-03</td>
                  <td className="p-4 font-semibold text-[#21295C]">
                    Reuse existing pump and header tanks
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
                      High
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">
                    Saves substantial capital budget ($0 cost for existing assets) and minimizes installation complexity (EWB, 2026).
                  </td>
                </tr>

                {/* Req 4 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#065A82]">REQ-04</td>
                  <td className="p-4 font-semibold text-[#21295C]">
                    Minimise maintenance
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
                      High
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">
                    Operates passively without daily monitoring, motorized mixers, or automated dosing pumps that break down.
                  </td>
                </tr>

                {/* Req 5 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#065A82]">REQ-05</td>
                  <td className="p-4 font-semibold text-[#21295C]">
                    Allow local operator training and maintenance
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
                      High
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">
                    Ensures Lama Lama Rangers and community members have complete autonomy to inspect and operate the system (EWB, 2026).
                  </td>
                </tr>

                {/* Req 6 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#065A82]">REQ-06</td>
                  <td className="p-4 font-semibold text-[#21295C]">
                    Use corrosion-resistant materials
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                      Medium
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">
                    All components must withstand maritime coastal humidity, airborne salt spray, and tropical temperatures.
                  </td>
                </tr>

                {/* Req 7 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono font-bold text-[#065A82]">REQ-07</td>
                  <td className="p-4 font-semibold text-[#21295C]">
                    Withstand wet season and cyclone conditions
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                      Medium
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">
                    Requires concrete foundation slab and certified cyclone tie-down anchoring to withstand Category 3–5 cyclonic winds (QRA, 2019).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
            <span className="italic font-semibold">Note.</span> Requirements established to satisfy Australian Drinking Water Guidelines (National Health and NHMRC, 2025a) and remote site constraints (EWB, 2026). Structural anchoring complies with Queensland Reconstruction Authority (QRA, 2019).
          </div>
        </div>
      </section>

      <PagePagination currentPageId="define" onNavigate={onNavigate} />
    </div>
  );
};
