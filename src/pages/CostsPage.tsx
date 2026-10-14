import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { DollarSign, Truck, Wrench, Shield, CheckCircle2, Info, PackageCheck, Users } from 'lucide-react';

interface CostsPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 8: COSTS AND BUDGET BREAKDOWN
 * ----------------------------------------------------------------------------
 * Content:
 * - Total Estimate: $26,000–$40,000 AUD (including 20–25% remote contingency)
 * - Reused Items ($0 savings): Stewart River pump ($0), header tanks & pipes ($0)
 * - Five Cost Cards with supplier citations:
 *   1. Treatment parts: ~$8,000 (Oz Filter Warehouse, n.d.; Clark Tanks, 2025)
 *   2. Testing and spares: ~$1,500 (Puretec, n.d.)
 *   3. Protection: ~$5,500 (Queensland Reconstruction Authority [QRA], 2019)
 *   4. Freight: ~$5,000 (Best Rated Transport, 2026)
 *   5. Labour: ~$6,500 (installation, plumbing, commissioning, operator training)
 * - Funding Section: "Where could the money come from?"
 * - Table 4: Existing and Potential Funding Sources
 * - Figure 6: Horizontal Comparison Graphic (Estimated Project Cost vs. Yaru Donation)
 * - Community Control Paragraph
 * ============================================================================
 */
export const CostsPage: React.FC<CostsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={8}
        title="Costs and Budget Breakdown"
        subtitle="Itemised capital expenditure, remote-area logistical freight allocations, and infrastructure savings."
        assignedAuthor="Huy Truong"
        lastUpdated="October 2026"
      />

      {/* Hero Budget Banner */}
      <section className="bg-gradient-to-br from-[#21295C] via-[#065A82] to-[#1C7293] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-cyan-200">
            Total Capital Expenditure
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            $26,000 – $40,000 AUD
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 leading-relaxed">
            Total estimate includes all physical components, delivery to remote Cape York, professional contractor installation, local training, and a <strong>20–25% remote-site contingency</strong> allowance. The five cost categories below add up to about $26,500. The contingency is held on top of this subtotal to cover price changes and remote-site delays. All amounts are team estimates and must be confirmed with supplier quotes.
          </p>
        </div>
      </section>

      {/* Reused Infrastructure Highlights ($0 Cost) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Reused Infrastructure Assets ($0 Savings)
          </h2>
          <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Major Capital Avoidance
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border-2 border-emerald-500/30 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-base text-[#21295C]">
                  Existing Stewart River Pump
                </h3>
                <span className="font-extrabold text-base text-emerald-700">$0</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Reusing the existing Stewart River pump already installed at the intake saves thousands in purchase, marine cabling, and intake station setup costs (Engineers Without Borders Australia [EWB], 2026).
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-emerald-500/30 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-base text-[#21295C]">
                  Existing Header Tanks and Pipes
                </h3>
                <span className="font-extrabold text-base text-emerald-700">$0</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The community&apos;s elevated storage header tanks and downstream poly distribution pipes installed through Arup and EWB are structurally sound and retained without modification (Australian Water Association [AWA], 2018; EWB, 2019).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Cost Cards */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
          Five Primary Cost Categories (Approximate)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#1C7293] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#065A82] flex items-center justify-center">
                  <PackageCheck size={20} />
                </div>
                <span className="text-lg font-bold text-[#21295C]">~$8,000</span>
              </div>
              <h3 className="font-bold text-base text-[#21295C] mb-2">
                Treatment Parts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dual Filox backwashable media filter tanks, 1,000 L polyethylene settling tank, Mazzei venturi aerator unit, UV-resistant PVC/poly piping, ball valves, and pressure gauges (Clark Tanks, 2025; Oz Filter Warehouse, n.d.).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
              Source: Clark Tanks (2025); Oz Filter Warehouse (n.d.)
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#1C7293] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#1C7293] flex items-center justify-center">
                  <DollarSign size={20} />
                </div>
                <span className="text-lg font-bold text-[#21295C]">~$1,500</span>
              </div>
              <h3 className="font-bold text-base text-[#21295C] mb-2">
                Testing and Spares
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Colorimetric iron and turbidity test kits for local rangers, spare replacement seals, bypass valves, sampling spigots, and emergency backup fittings stored on site. This is a team allowance and must be confirmed with supplier quotes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
              Team allowance (to be confirmed)
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#1C7293] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                  <Shield size={20} />
                </div>
                <span className="text-lg font-bold text-[#21295C]">~$5,500</span>
              </div>
              <h3 className="font-bold text-base text-[#21295C] mb-2">
                Protection & Groundworks
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engineered concrete slab footing, cyclone hold-down strapping, certified stainless steel anchoring, shade cover, and vermin exclusion mesh (QRA, 2019).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
              Per QRA (2019) cyclone standard
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#1C7293] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Truck size={20} />
                </div>
                <span className="text-lg font-bold text-[#21295C]">~$5,000</span>
              </div>
              <h3 className="font-bold text-base text-[#21295C] mb-2">
                Remote Freight
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Long-distance haulage from Cairns/Townsville across the unsealed Peninsula Development Road to Port Stewart during the dry season. This is a team estimate; guidance on remote Queensland freight is in Best Rated Transport (2026).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
              Team estimate; guidance: Best Rated Transport (2026)
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#1C7293] transition-colors lg:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Wrench size={20} />
                </div>
                <span className="text-lg font-bold text-[#21295C]">~$6,500</span>
              </div>
              <h3 className="font-bold text-base text-[#21295C] mb-2">
                Installation & Commissioning Labour
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Licensed plumbing connection, pump integration, hydraulic pressure testing, flow balancing, commissioning, and on-site operator training for Lama Lama community members and Rangers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
              Community co-installation & skills transfer
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3 mt-3">
          <Info size={18} className="text-[#065A82] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Supplier Basis Note:</strong> Prices for the filters and the tank are based on published Australian supplier information (Oz Filter Warehouse, n.d.; Clark Tanks, 2025). The other categories (testing and spares, protection, freight and labour) are team allowances. The whole budget must be confirmed with supplier quotes.
          </p>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION A: FUNDING SECTION */}
      {/* ==================================================================== */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C] mb-2">
            Where could the money come from?
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Our estimate is $26,000–$40,000 AUD. Funding has been given to the wider Port Stewart water project, but it was given to the main EWB and Arup project, not to our student prototype. The sources below show where money could come from. They are not confirmed funding for our design.
          </p>
        </div>

        {/* APA Table 4 */}
        <div>
          <div className="mb-2 text-left">
            <div className="font-bold text-sm text-[#21295C]">Table 4</div>
            <div className="italic text-sm text-slate-800 font-medium">
              Existing and Potential Funding Sources for the Port Stewart Water Supply Project
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-[#21295C] text-white text-xs sm:text-sm">
                  <th className="p-3.5 font-bold uppercase tracking-wider w-1/4">Source</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider w-1/4">Type</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider w-28">Amount</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider w-40">Status</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    Yaru Foundation
                  </td>
                  <td className="p-3.5 text-slate-600">
                    Philanthropic donation (2024)
                  </td>
                  <td className="p-3.5 font-bold text-[#065A82]">
                    $40,000
                  </td>
                  <td className="p-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                      Confirmed (for the Port Stewart water project)
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-600">
                    (National Indigenous Times, 2024; EWB, 2025)
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    Arup, Centre for Appropriate Technology (CfAT) and EWB
                  </td>
                  <td className="p-3.5 text-slate-600">
                    Pro bono engineering and in-kind support
                  </td>
                  <td className="p-3.5 text-slate-500 italic">
                    Not a cash amount
                  </td>
                  <td className="p-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      Confirmed
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-600">
                    (AWA, 2018; EWB, 2025)
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    Other EWB project supporters (Airbus, BMT, Bindy and David Koadlow, Epiroc)
                  </td>
                  <td className="p-3.5 text-slate-600">
                    Corporate and private support
                  </td>
                  <td className="p-3.5 text-slate-500 italic">
                    Not stated
                  </td>
                  <td className="p-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      Confirmed support for the wider program
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-600">
                    (EWB, 2025)
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-semibold text-[#21295C]">
                    National Water Grid Fund, First Nations water infrastructure
                  </td>
                  <td className="p-3.5 text-slate-600">
                    Australian Government funding
                  </td>
                  <td className="p-3.5 font-bold text-slate-800">
                    $150 million nationally over four years
                  </td>
                  <td className="p-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                      Possible future source (not confirmed for this project)
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-600">
                    (National Water Grid Authority [NWGA], 2023)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
            <span className="italic font-semibold">Note.</span> The Yaru Foundation donation helps pay for materials for the pump, solar power supply and filtration unit of the main project, delivered with Yintjingga Aboriginal Corporation (YAC) and the Lama Lama Land Trust (LLLT; National Indigenous Times, 2024). The Yaru Foundation is the philanthropic arm of the social enterprise Yaru Water (EWB, 2025). National Water Grid Fund proposals must come from state or territory governments, and First Nations communities must be engaged (NWGA, 2023).
          </div>
        </div>

        {/* Figure 6: Horizontal Comparison Graphic */}
        <div className="pt-4 border-t border-slate-200">
          <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
            As shown in Figure 6, the estimated student prototype budget range ($26,000–$40,000 AUD) is similar in size to the $40,000 donation given to the wider community water project. The donation was not given to our student prototype, so this comparison only shows the scale of the money involved.
          </p>

          <figure className="w-full">
            {/* APA Label above figure */}
            <div className="mb-2 text-left">
              <div className="font-bold text-sm text-[#21295C]">Figure 6</div>
              <div className="italic text-sm text-slate-800 font-medium">
                Estimated Project Cost Compared With the Yaru Foundation Donation
              </div>
            </div>

            {/* Horizontal comparison visual chart */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-6">
              {/* Bar 1: Our Estimate Range */}
              <div>
                <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-[#21295C]">
                    Prototype Estimated Cost Range: $26,000 – $40,000 AUD
                  </span>
                  <span className="text-[#065A82]">
                    65% – 100% of Benchmark
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-8 p-1 flex items-center relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#1C7293] to-[#065A82] h-full rounded-full transition-all flex items-center justify-end pr-3"
                    style={{ width: '100%' }}
                  >
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      $26,000 (Min) – $40,000 (Max)
                    </span>
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>$0</span>
                  <span>$26,000 (Lower Estimate)</span>
                  <span>$40,000 (Upper Estimate)</span>
                </div>
              </div>

              {/* Bar 2: Yaru Foundation Donation */}
              <div>
                <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-emerald-900">
                    Yaru Foundation Confirmed Water Project Donation: $40,000 AUD
                  </span>
                  <span className="text-emerald-700">
                    Given to the wider project
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-8 p-1 flex items-center relative overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full rounded-full transition-all flex items-center justify-end pr-3 shadow-xs"
                    style={{ width: '100%' }}
                  >
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      $40,000 Philanthropic Funding
                    </span>
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>$0</span>
                  <span className="text-emerald-700 font-medium">Not confirmed for our prototype</span>
                  <span>$40,000</span>
                </div>
              </div>
            </div>

            {/* APA Note below figure */}
            <figcaption className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
              <span className="italic font-semibold">Note.</span> Cost range is the team&apos;s estimate. Donation amount from National Indigenous Times (2024).
            </figcaption>
          </figure>
        </div>

        {/* Short "How the community stays in control" paragraph */}
        <div className="pt-4 border-t border-slate-200">
          <div className="p-5 rounded-2xl bg-[#E2EDF3]/60 border border-[#1C7293]/30 flex items-start gap-3.5">
            <Users size={22} className="text-[#065A82] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#21295C]">
                How the community stays in control
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                Some Lama Lama locals are trained in water quality testing and system maintenance so the system keeps working long term (National Indigenous Times, 2024). This local training supports long-term operation, supports community self-determination, and reduces reliance on fly-in fly-out technicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PagePagination currentPageId="costs" onNavigate={onNavigate} />
    </div>
  );
};
