import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { AlertCircle, Droplets } from 'lucide-react';

interface RecommendationsPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 10: RECOMMENDATIONS
 * ----------------------------------------------------------------------------
 * Five Core Recommendations:
 * 1) Keep the aeration + settling + backwashable filtration design (AWA, 2018; EWB, n.d.; NHMRC, 2025a).
 * 2) Reuse the old pump and tanks to save money (EWB, n.d.).
 * 3) Keep the system simple, so it is easy to clean and fix.
 * 4) Build it strong for cyclones and rust (QRA, 2019).
 * 5) Budget $26,000–$40,000 and confirm after a site visit (YAC, n.d.-a).
 *
 * Future Consideration:
 * - Water storage capacity in the dry season (outside this project's scope) (EWB, 2026).
 * ============================================================================
 */
export const RecommendationsPage: React.FC<RecommendationsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={10}
        title="Recommendations"
        subtitle="Actionable engineering guidance for project delivery, stakeholder sign-off, and future long-term water planning."
        assignedAuthor="Huy Truong"
        lastUpdated="October 2026"
      />

      {/* Main 5 Recommendations */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
          Five Key Recommendations
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm">
          Based on hydraulic calculations, CFD simulations, and remote-community constraints, the student team recommends the following five actions:
        </p>

        <div className="space-y-4 pt-2">
          {/* Rec 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-[#1C7293] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#065A82] flex items-center justify-center font-bold text-base shrink-0">
              1
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-[#21295C]">
                Keep the aeration + settling + backwashable filtration design
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This multi-barrier physical process is expected to lower the Stewart River iron level (1.25 mg/L) below the 0.30 mg/L guideline, based on comparable treatment plants, without requiring chemical consumables, hazardous acids, or fragile electrical dosing pumps (Australian Water Association [AWA], 2018; Engineers Without Borders Australia [EWB], n.d.; National Health and Medical Research Council [NHMRC], 2025a).
              </p>
            </div>
          </div>

          {/* Rec 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-[#1C7293] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-base shrink-0">
              2
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-[#21295C]">
                Reuse the old pump and tanks to save money
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Retaining the existing Stewart River pump, intake piping, and community elevated header tanks saves thousands of dollars ($0 capital cost for existing assets) and avoids unnecessary waste (EWB, n.d.).
              </p>
            </div>
          </div>

          {/* Rec 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-[#1C7293] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#1C7293] flex items-center justify-center font-bold text-base shrink-0">
              3
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-[#21295C]">
                Keep the system simple, so it is easy to clean and fix
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Avoid complex computer controls, solenoid timers, or single-use cartridge housings. Valve-actuated backwashing allows Geoff and Lama Lama Rangers to maintain clean media autonomously in minutes (AWA, 2018; EWB, n.d.).
              </p>
            </div>
          </div>

          {/* Rec 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-[#1C7293] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-base shrink-0">
              4
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-[#21295C]">
                Build it strong for cyclones and rust
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Install all new components onto a reinforced concrete slab above flood lines, bolt down all tanks with certified cyclone tie-down strapping, and specify corrosion-resistant UV-stabilised polymers and marine-grade stainless hardware (Queensland Reconstruction Authority [QRA], 2019).
              </p>
            </div>
          </div>

          {/* Rec 5 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-[#1C7293] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-base shrink-0">
              5
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-[#21295C]">
                Budget $26,000–$40,000 and confirm after a site visit
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Allocate the estimated budget with full 20–25% contingency, and finalize exact plumbing fittings, pipe lengths, and soil bearing capacity during a preliminary dry-season ground inspection with Yintjingga Aboriginal Corporation (Yintjingga Aboriginal Corporation [YAC], n.d.-a).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Consideration: Dry Season Storage Capacity */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-[#065A82]">
          <Droplets size={24} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Future Consideration (Beyond Current Scope)
          </h2>
        </div>

        <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 flex items-start gap-3">
          <AlertCircle size={22} className="text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <h3 className="font-bold text-amber-900">
              Water Storage Capacity in the Dry Season
            </h3>
            <p className="text-amber-900/90 leading-relaxed">
              <strong>Future consideration:</strong> Water storage capacity in the dry season (outside this project&apos;s scope). While this project addresses the water quality and iron removal challenge, future engineering works should investigate expanding total raw water storage to buffer against low river flow periods during protracted dry seasons (EWB, 2026).
            </p>
          </div>
        </div>
      </section>

      <PagePagination currentPageId="recommendations" onNavigate={onNavigate} />
    </div>
  );
};
