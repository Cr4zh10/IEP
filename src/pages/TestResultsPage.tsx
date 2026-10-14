import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Gauge, TrendingDown, ShieldCheck } from 'lucide-react';

interface TestResultsPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 7: TEST AND RESULTS
 * ----------------------------------------------------------------------------
 * Content:
 * - Technical feasibility banner
 * - Two Result Cards:
 *   1. Venturi Aeration Simulation (SimScale GmbH, 2026)
 *   2. Iron-Removal Efficacy (NHMRC, 2025a; Hiiob & Karro, 2012)
 * - Figure 3: Venturi Pressure Distribution at 33.3 L/min
 * - Figure 4: Venturi Velocity Distribution at 33.3 L/min
 * - Figure 5: Iron-Removal Performance of Three Comparable Treatment Plants
 * ============================================================================
 */
export const TestResultsPage: React.FC<TestResultsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={7}
        title="Test and Results"
        subtitle="Computational fluid dynamics (CFD) simulation of the venturi aerator and peer-reviewed benchmark analysis of aeration-filtration plants."
        assignedAuthor="Ethan Illidge"
        lastUpdated="October 2026"
      />

      {/* Overall Feasibility Outcome Banner */}
      <section className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#21295C] to-[#065A82] text-white shadow-lg border border-cyan-500/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
            <ShieldCheck size={28} />
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-cyan-300">
              Technical Verification Summary
            </span>
            <p className="text-xl sm:text-2xl font-bold leading-snug">
              “Testing supports the prototype&apos;s technical feasibility. Further site-specific testing is required before full-scale implementation.”
            </p>
          </div>
        </div>
      </section>

      {/* Two Detailed Result Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Venturi Outcome */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#065A82] flex items-center justify-center">
                <Gauge size={22} />
              </div>
              <span className="text-xs font-bold text-[#065A82] bg-[#E2EDF3] px-3 py-1 rounded-full">
                CFD Simulation
              </span>
            </div>

            <h2 className="text-xl font-bold text-[#21295C] mb-3">
              Venturi Aeration Simulation
            </h2>

            <div className="space-y-3 mb-6">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-600">Design Flow Rate:</span>
                <span className="font-bold text-[#21295C]">33.3 L/min</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-600">Inlet Velocity → Throat Velocity:</span>
                <span className="font-bold text-[#065A82]">1.13 m/s → 8.17 m/s</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-600">Throat Static Pressure:</span>
                <span className="font-bold text-emerald-700">Pronounced vacuum drop</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
              <strong>Outcome:</strong> The venturi geometry gives the pressure reduction and velocity increase needed for passive air induction without an external air compressor (SimScale GmbH, 2026).
            </div>
          </div>
        </div>

        {/* Card 2: Iron Removal Outcome */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#1C7293] flex items-center justify-center">
                <TrendingDown size={22} />
              </div>
              <span className="text-xs font-bold text-[#1C7293] bg-[#E2EDF3] px-3 py-1 rounded-full">
                Empirical Benchmark
              </span>
            </div>

            <h2 className="text-xl font-bold text-[#21295C] mb-3">
              Iron-Removal Efficacy
            </h2>

            <div className="space-y-3 mb-6">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-600">Initial Stewart River Iron:</span>
                <span className="font-bold text-red-600">1.25 mg/L</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-600">Target Standard (ADWG):</span>
                <span className="font-bold text-emerald-700">≤ 0.30 mg/L</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-600">Minimum Removal Required:</span>
                <span className="font-bold text-[#065A82]">76%</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-600">Comparable Systems Achieved:</span>
                <span className="font-bold text-emerald-700">92.4% – 98.0%</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
              <strong>Outcome:</strong> Published testing supports the feasibility of reaching the required iron reduction to satisfy the Australian Drinking Water Guidelines (Hiiob & Karro, 2012; National Health and Medical Research Council [NHMRC], 2025a).
            </div>
          </div>
        </div>
      </section>

      {/* Figures 3 & 4: CFD Simulations */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div>
          <h2 className="text-xl font-bold text-[#21295C] mb-1">
            Venturi Computational Fluid Dynamics (SimScale)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Simulations verify that the pump flow rate generates sufficient suction pressure at the air intake port without a compressor (SimScale GmbH, 2026), as illustrated in Figure 3 and Figure 4.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          <div>
            <ImagePlaceholder
              figureNumber="Figure 3"
              figureTitle="Venturi Pressure Distribution at 33.3 L/min"
              imageFile="figure-3-pressure.png"
              noteText="Simulation by Ethan Illidge using SimScale (SimScale GmbH, 2026)."
              altText="Figure 3. Venturi pressure distribution contour plot showing suction vacuum drop at 33.3 L/min design flow in SimScale. Simulation by Ethan Illidge."
              heightClass="min-h-[260px]"
            />
          </div>

          <div>
            <ImagePlaceholder
              figureNumber="Figure 4"
              figureTitle="Venturi Velocity Distribution at 33.3 L/min"
              imageFile="figure-4-velocity.png"
              noteText="Simulation by Ethan Illidge using SimScale (SimScale GmbH, 2026)."
              altText="Figure 4. Venturi velocity distribution showing throat velocity rise from 1.13 m/s to 8.17 m/s in SimScale. Simulation by Ethan Illidge."
              heightClass="min-h-[260px]"
            />
          </div>
        </div>
      </section>

      {/* Figure 5: Comparable Plants Benchmark */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div>
          <h2 className="text-xl font-bold text-[#21295C] mb-1">
            Comparable Treatment Plant Validation
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Empirical data from operational aeration and filtration plants treating high-iron source water (Hiiob & Karro, 2012), as documented in Figure 5.
          </p>
        </div>

        <ImagePlaceholder
          figureNumber="Figure 5"
          figureTitle="Iron-Removal Performance of Three Comparable Treatment Plants"
          imageFile="figure-5-iron-removal.png"
          noteText="Data from Hiiob and Karro (2012)."
          altText="Figure 5. Iron-removal performance chart of three comparable aeration and filtration treatment plants demonstrating 92.4% to 98.0% removal efficiencies. Data from Hiiob and Karro (2012)."
          heightClass="min-h-[280px]"
        />

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <strong>Literature Confirmation:</strong> Across three municipal groundwater and surface water treatment facilities studied by Hiiob and Karro (2012), two-stage aeration followed by granular media filtration consistently reduced raw iron concentrations exceeding 1.5 mg/L down to well below 0.1 mg/L, exceeding the minimum 76% threshold required for Port Stewart (NHMRC, 2025a).
        </div>
      </section>

      <PagePagination currentPageId="test-results" onNavigate={onNavigate} />
    </div>
  );
};
