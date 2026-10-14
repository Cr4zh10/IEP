import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { HeartHandshake } from 'lucide-react';

interface ImplementationPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 9: IMPLEMENTATION AND CONSIDERATIONS
 * ----------------------------------------------------------------------------
 * Content:
 * - First Step:
 *   Work with Yintjingga Aboriginal Corporation, the Lama Lama Rangers and Elders.
 *   Agree on each step together. All ground works follow the Aboriginal Cultural
 *   Heritage Act 2003 (Qld) duty of care (Queensland Government, 2003; YAC, n.d.-a).
 *
 * - Four Steps Timeline:
 *   1) Reuse the existing pump and tanks (EWB, 2026).
 *   2) Build strong for storms: cyclone anchoring, corrosion-resistant materials,
 *      concrete slab (QRA, 2019).
 *   3) Plan delivery in the dry season because freight to Port Stewart is slow
 *      and costly (Best Rated Transport, 2026; RDA Tropical North, 2023).
 *   4) Train local people to clean the filters; leave spare parts on site.
 *
 * - Considerations:
 *   * The problem: cyclone destroyed the old intake in 2006; river water has high iron.
 *   * Proven idea: Arup recommended aeration plus filtration (AWA, 2018; EWB, 2019).
 *   * Our design: air turns iron into solid bits, filters catch them, backwashing keeps clean.
 * ============================================================================
 */
export const ImplementationPage: React.FC<ImplementationPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={9}
        title="Implementation and Considerations"
        subtitle="Community co-design governance, phased delivery timeline, and site-specific environmental engineering factors."
        assignedAuthor="Huy Truong"
        lastUpdated="October 2026"
      />

      {/* Mandatory First Step: Community Governance & Heritage Duty of Care */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#1C7293]/40 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-[#065A82]">
          <HeartHandshake size={26} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            First Step: Community Partnership and Cultural Duty of Care
          </h2>
        </div>

        <div className="p-5 rounded-xl bg-[#E2EDF3]/60 border border-[#1C7293]/20 space-y-3">
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
            Work with <strong>Yintjingga Aboriginal Corporation</strong>, the <strong>Lama Lama Rangers</strong>, and <strong>Elders</strong>. Agree on each step together (Yintjingga Aboriginal Corporation [YAC], n.d.-a).
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            All ground works must strictly follow the <strong>Aboriginal Cultural Heritage Act 2003 (Qld) s 23 duty of care</strong> guidelines. No earthmoving, slab pouring, or trenching will proceed without prior cultural heritage clearance and direct Traditional Owner supervision (Queensland Government, 2003; YAC, n.d.-a).
          </p>
        </div>
      </section>

      {/* Four Steps as a Timeline */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C] mb-1">
            Four Implementation Steps Timeline
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Structured chronologically to ensure safety, cost control, and lasting community ownership.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1C7293]/30 space-y-8 my-4">
          {/* Step 1 */}
          <div className="relative group">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#065A82] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow">
              1
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#065A82]">
              Phase 1 · Asset Verification
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#21295C] mt-1 mb-1">
              Reuse the existing pump and tanks
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Inspect the working Stewart River riverbed pump, power cabling, and elevated community storage header tanks. Test hydraulic flow rates to confirm 33.3 L/min design capacity before connecting the new treatment train (Engineers Without Borders Australia [EWB], 2026).
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#065A82] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow">
              2
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#065A82]">
              Phase 2 · Civil Resilience
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#21295C] mt-1 mb-1">
              Build strong for storms: cyclone anchoring, corrosion-resistant materials, concrete slab
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Pour a reinforced concrete pad above flood inundation levels. Secure the 1,000 L settling tank and filtration columns with heavy-duty cyclone tie-down strapping (Queensland Reconstruction Authority [QRA], 2019). Use marine-grade stainless steel hardware and UV-stabilised fittings to withstand coastal humidity.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#065A82] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow">
              3
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#065A82]">
              Phase 3 · Seasonal Logistics
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#21295C] mt-1 mb-1">
              Plan delivery in the dry season because freight to Port Stewart is slow and costly
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Consolidate all equipment purchases in Cairns/Townsville and ship along unsealed Peninsula tracks between June and September. Avoid wet-season road washouts, unpassable creek crossings, and excessive emergency air-freight surcharges (Best Rated Transport, 2026; RDA Tropical North, 2023).
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative group">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#065A82] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow">
              4
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#065A82]">
              Phase 4 · Capacity Building & Handover
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#21295C] mt-1 mb-1">
              Train local people to clean the filters; leave spare parts on site
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Conduct practical, hands-on workshops with Geoff, local operators, and Lama Lama Rangers demonstrating backwash valve sequencing and field test kits. Provide laminated visual quick-guides and a weatherproof storage chest stocked with spare seals, gaskets, and replacement ball valves (EWB, 2026).
            </p>
          </div>
        </div>
      </section>

      {/* Core Engineering Considerations */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C] mb-2">
          Key Engineering Considerations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-sm text-[#21295C] mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A cyclone destroyed the old intake in 2006, and the river water has naturally high iron (EWB, 2026). Past cartridge filtration attempts quickly choked because iron fouled the media before water could reach community homes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-sm text-[#21295C] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#065A82]"></span>
              <span>Proven Idea</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Arup has worked on this site since 2015 and recommended aeration plus filtration as the most resilient, appropriate water treatment pathway for remote Indigenous communities (Australian Water Association [AWA], 2018; EWB, 2019).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-sm text-[#21295C] mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Our Design</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Air turns iron into solid bits, a settling tank drops heavy flakes, filters catch the rest, and backwashing keeps filters clean without buying replacement cartridges.
            </p>
          </div>
        </div>
      </section>

      <PagePagination currentPageId="implementation" onNavigate={onNavigate} />
    </div>
  );
};
