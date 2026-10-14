import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { Users, Search, AlertCircle, Wrench, HeartHandshake } from 'lucide-react';

interface EmpathisePageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 3: EMPATHISE - DESKTOP RESEARCH & USER JOURNEY MAP
 * ----------------------------------------------------------------------------
 * Key findings & Citations:
 * - High iron contamination causes water quality and maintenance problems.
 * - Stewart River supply does not give enough clean water for domestic use (EWB, 2026).
 * - Dry season water levels are low while wet season limits access to the region.
 * - Reliability depends on community capacity (CSIRO, 2022; EWB, 2026).
 *
 * Design considerations:
 * - Durable, low-maintenance off-grid systems.
 * - Minimal environmental harm.
 * - Community ownership.
 * - Low operating costs because of low population and economic output.
 *
 * Table 1:
 * - Geoff's User Journey Map Across Operational Stages
 * ============================================================================
 */
export const EmpathisePage: React.FC<EmpathisePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={3}
        title="Empathise: Desktop Research and User Journey Map"
        subtitle="Understanding user pain points, operational hurdles, and human realities through desktop research and a technician journey map."
        assignedAuthor="Tan Dong & Huy Truong"
        lastUpdated="October 2026"
      />

      {/* Key Desktop Research Findings */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-[#065A82] mb-1">
          <Search size={24} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Key Desktop Research Findings
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Through secondary research, EWB challenge forum notes (EWB Challenge, n.d.), and community technical reports, we identified four critical challenges governing water supply at Port Stewart (Commonwealth Scientific and Industrial Research Organisation [CSIRO], 2022; Engineers Without Borders Australia [EWB], 2026):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-red-100 text-red-700 shrink-0 mt-0.5">
                <AlertCircle size={18} />
              </span>
              <div>
                <h3 className="font-bold text-sm text-[#21295C] mb-1">
                  High Iron Contamination Problems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High iron contamination causes severe water quality and maintenance problems. It produces orange-red stains on basins and laundry, generates an unpalatable metallic taste, and quickly coats and chokes fine filter membranes (iron fouling) (EWB, 2026).
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-blue-100 text-[#065A82] shrink-0 mt-0.5">
                <AlertCircle size={18} />
              </span>
              <div>
                <h3 className="font-bold text-sm text-[#21295C] mb-1">
                  Insufficient Domestic Clean Water
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The Stewart River supply does not give enough clean water for domestic use (EWB, 2026). Rainwater catchment is only adequate for limited drinking purposes, leaving families without dependable clean water for personal hygiene, cooking, and washing.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0 mt-0.5">
                <AlertCircle size={18} />
              </span>
              <div>
                <h3 className="font-bold text-sm text-[#21295C] mb-1">
                  Seasonal Environmental Extremes
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dry season water levels are low, concentrating dissolved minerals. In contrast, the wet season cuts off road access to the region for months, preventing technical call-outs, parts delivery, and fuel resupply (CSIRO, 2022; EWB, 2026).
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                <AlertCircle size={18} />
              </span>
              <div>
                <h3 className="font-bold text-sm text-[#21295C] mb-1">
                  Reliance on Community Capacity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  System reliability depends directly on community capacity (CSIRO, 2022). Complex treatment systems requiring specialized municipal operators or frequent chemical mixing inevitably fail when outside technicians cannot travel to site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-[#065A82]">
          <HeartHandshake size={24} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Design Considerations for Lama Lama
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          From these findings, four foundational engineering principles were developed:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#1C7293] uppercase tracking-wider block mb-1">
                Principle 1
              </span>
              <h3 className="font-bold text-sm text-[#21295C] mb-1">
                Durable, Low-Maintenance Off-Grid Systems
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Must function without continuous high electricity demand, automated computer racks, or fragile sensor networks that fail in tropical heat (CSIRO, 2022).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#1C7293] uppercase tracking-wider block mb-1">
                Principle 2
              </span>
              <h3 className="font-bold text-sm text-[#21295C] mb-1">
                Minimal Environmental Harm
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Avoid toxic chemical discharges or large volumes of hazardous chemical sludge into Stewart River&apos;s sensitive coastal ecosystems.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#1C7293] uppercase tracking-wider block mb-1">
                Principle 3
              </span>
              <h3 className="font-bold text-sm text-[#21295C] mb-1">
                Community Ownership & Agency
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Lama Lama Rangers and local operators must be able to understand, maintain, test, and troubleshoot the treatment system autonomously (EWB, 2026).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#1C7293] uppercase tracking-wider block mb-1">
                Principle 4
              </span>
              <h3 className="font-bold text-sm text-[#21295C] mb-1">
                Low Operating Costs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Low permanent population and limited economic output mean recurring operational expenses must remain minimal to ensure long-term viability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Map Section & Table 1 */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          <div className="flex items-center gap-3 text-[#065A82] mb-1">
            <Users size={24} className="text-[#1C7293]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
              User Journey Map
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E2EDF3] text-[#065A82]">
              User Persona: Geoff
            </span>
            <span className="text-xs text-slate-500">
              Local technician & maintenance operator at Lama Lama, Port Stewart
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            This journey map (presented in Table 1) traces Geoff&apos;s lived experience across three operational phases of his role: daily water provision, routine maintenance, and water quality testing/usage.
          </p>
        </div>

        {/* APA Table 1 */}
        <div>
          <div className="mb-2 text-left">
            <div className="font-bold text-sm text-[#21295C]">Table 1</div>
            <div className="italic text-sm text-slate-800 font-medium">
              Geoff&apos;s User Journey Map Across Operational Stages
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#21295C] text-white text-xs sm:text-sm">
                  <th className="p-4 font-bold uppercase tracking-wider w-1/4">
                    Journey Stage
                  </th>
                  <th className="p-4 font-bold uppercase tracking-wider w-1/4">
                    Daily Life
                  </th>
                  <th className="p-4 font-bold uppercase tracking-wider w-1/4">
                    Maintenance
                  </th>
                  <th className="p-4 font-bold uppercase tracking-wider w-1/4">
                    Testing / Usage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                {/* Row 1: Emotional experience */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#21295C] bg-slate-50/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      <span>Emotional Experience</span>
                    </div>
                  </td>
                  <td className="p-4 text-red-900 bg-red-50/30">
                    Disgust at the foul smell and condition of the water.
                  </td>
                  <td className="p-4 text-amber-900 bg-amber-50/30">
                    Frustration when maintenance attempts fail.
                  </td>
                  <td className="p-4 text-purple-900 bg-purple-50/30">
                    Distress when clean water output is not enough for the community.
                  </td>
                </tr>

                {/* Row 2: Events */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#21295C] bg-slate-50/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <span>Events</span>
                    </div>
                  </td>
                  <td className="p-4">
                    Relies on stored water and inconsistent supply.
                  </td>
                  <td className="p-4">
                    Checks iron contamination in the system.
                  </td>
                  <td className="p-4">
                    Tests output at taps connected to the main source.
                  </td>
                </tr>

                {/* Row 3: Breakthrough */}
                <tr className="hover:bg-slate-50 transition-colors bg-emerald-50/20">
                  <td className="p-4 font-bold text-[#21295C] bg-slate-50/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Breakthrough</span>
                    </div>
                  </td>
                  <td className="p-4 text-emerald-900 font-medium">
                    Growing awareness of better filtration systems.
                  </td>
                  <td className="p-4 text-emerald-900 font-medium">
                    Realising the flaws in the current system.
                  </td>
                  <td className="p-4 text-emerald-900 font-medium">
                    Identifying the core issues.
                  </td>
                </tr>

                {/* Row 4: Pain points */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#21295C] bg-slate-50/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span>Pain Points</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-800">
                    Cannot use most of the water because of contamination.
                  </td>
                  <td className="p-4 text-slate-800">
                    Wet season makes working on the system difficult.
                  </td>
                  <td className="p-4 text-slate-800">
                    Output does not meet expectations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
            <span className="italic font-semibold">Note.</span> Based on user research and project brief (EWB, 2026).
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
          <Wrench size={18} className="text-[#065A82] shrink-0 mt-0.5" />
          <p>
            <strong>Engineering Takeaway:</strong> Geoff needs an intuitive system. Backwashing should be done by simply opening a ball valve rather than disassembling sealed filter housings or mixing caustic reagents.
          </p>
        </div>
      </section>

      <PagePagination currentPageId="empathise" onNavigate={onNavigate} />
    </div>
  );
};
