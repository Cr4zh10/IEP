import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ArtefactNote } from '../components/ArtefactNote';
import {
  EQUIPMENT,
  LABOUR,
  TRAVEL,
  LABOUR_TOTAL,
  TRAVEL_TOTAL,
  SUBTOTAL,
  CONTINGENCY_LOW,
  CONTINGENCY_HIGH,
  TOTAL_LOW,
  TOTAL_HIGH,
  RANGE_TEXT,
  lineTotal,
  money,
} from '../data/costs';

interface CostsPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * PAGE 8: COSTS
 * All numbers come from src/data/costs.ts so the totals always add up.
 * New abbreviations defined here: ATO, CfAT, LLLT.
 */
export const CostsPage: React.FC<CostsPageProps> = ({ onNavigate }) => {
  const th = 'p-3 font-bold';
  const td = 'p-3 align-top';

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={8}
        title="Costs and Budget"
        subtitle="What the project is likely to cost, how we worked it out, and where the money could come from."
        assignedAuthor="Huy Truong"
      />

      <section className="rounded-2xl bg-gradient-to-br from-[#21295C] to-[#065A82] text-white p-6 sm:p-8 shadow-lg space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">Estimated total</p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{RANGE_TEXT}</h2>
        <p className="text-cyan-100 leading-relaxed max-w-3xl">
          The five cost groups below add up to {money(SUBTOTAL)}. We then add a contingency of 20–25% (
          {money(CONTINGENCY_LOW)}–{money(CONTINGENCY_HIGH)}) for price changes and delays at a remote site, which gives{' '}
          {money(TOTAL_LOW)}–{money(TOTAL_HIGH)}. We round this to the range above. These are estimates. They must be checked against
          supplier quotes before anyone relies on them.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Costs we do not need to pay</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <h3 className="font-bold text-emerald-900">Existing pump: $0 for now</h3>
            <p className="mt-1">
              We reuse the pump at the intake instead of buying a new one (EWB, n.d.). This is a saving for now, not a
              promise of supply. See the scope box on the Define page.
            </p>
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <h3 className="font-bold text-emerald-900">Existing header tanks and pipes: $0</h3>
            <p className="mt-1">
              The elevated tanks and distribution pipes installed through the Arup and EWB project are kept as they are
              (AWA, 2018; EWB, 2019).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Cost summary</h2>
        <div className="text-left">
          <div className="font-bold text-sm text-[#21295C]">Table 7</div>
          <div className="italic text-sm text-slate-800 font-medium">Estimated Capital Cost by Category</div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className={th}>Category</th>
                <th className={th + ' text-right w-32'}>Amount (AUD)</th>
                <th className={th}>What is included and how we estimated it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Treatment parts</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.treatment)}</td>
                <td className={td}>
                  Two Filox filter tanks, a 1,000 L settling tank, a Venturi aerator, pipes, valves and gauges (Clark
                  Tanks, 2025; Oz Filter Warehouse, n.d.). For scale, one packaged iron-removal unit with a 40 L/min
                  flow is listed at $4,869.68 including GST (Puretec, n.d.).
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Testing and spares</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.testing)}</td>
                <td className={td}>Iron and turbidity test kits, spare seals, valves and fittings. Team allowance.</td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Protection and groundworks</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.protection)}</td>
                <td className={td}>
                  Concrete slab, cyclone tie-downs, stainless anchors, shade roof and vermin mesh, to suit Queensland
                  cyclone guidance (QRA, 2019). Team allowance.
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Freight</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.freight)}</td>
                <td className={td}>
                  Road freight from Cairns or Townsville to Port Stewart in the dry season. Team estimate. See Best Rated
                  Transport (2026) for the factors that affect remote freight costs.
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Labour</td>
                <td className={td + ' text-right'}>{money(LABOUR_TOTAL)}</td>
                <td className={td}>Plumber and commissioning engineer. See Table 8.</td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Travel and accommodation</td>
                <td className={td + ' text-right'}>{money(TRAVEL_TOTAL)}</td>
                <td className={td}>Two people for 10 days. See Table 9.</td>
              </tr>
              <tr className="bg-slate-50 font-semibold">
                <td className={td}>Subtotal</td>
                <td className={td + ' text-right'}>{money(SUBTOTAL)}</td>
                <td className={td} />
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Contingency (20–25%)</td>
                <td className={td + ' text-right'}>
                  {money(CONTINGENCY_LOW)}–{money(CONTINGENCY_HIGH)}
                </td>
                <td className={td}>
                  Covers price rises, a longer stay if the road is closed, or extra parts. Team allowance.
                </td>
              </tr>
              <tr className="bg-[#E2EDF3] font-bold text-[#21295C]">
                <td className={td}>Total</td>
                <td className={td + ' text-right'}>{RANGE_TEXT.replace(' AUD', '')}</td>
                <td className={td}>Rounded to the nearest $1,000.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ArtefactNote
          why="To show every cost in one place and make it clear which amounts come from supplier information and which are our own allowances."
          tells="Labour and travel are now the largest part of the budget, because Port Stewart is a long way from the nearest trades and suppliers."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Labour and travel in detail</h2>
        <p className="text-slate-700 leading-relaxed">
          We costed labour by role, and we included getting people to Port Stewart and keeping them there. The team is
          two people: a licensed plumber and a commissioning engineer. They work on site for 6 days. They spend 4 more
          days travelling, because Cairns to Coen alone is about 639 km (NRMA, 2018), and the road to Port Stewart
          continues on unsealed roads. That is 10 days away and 9 nights. Accommodation, meal and incidentals rates are
          the Australian Taxation Office (ATO) reasonable amounts for 2025–26 (ATO, 2025).
        </p>

        <div className="text-left">
          <div className="font-bold text-sm text-[#21295C]">Table 8</div>
          <div className="italic text-sm text-slate-800 font-medium">Labour Cost Breakdown</div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className={th}>Role and tasks</th>
                <th className={th}>Hours</th>
                <th className={th}>Rate per hour</th>
                <th className={th + ' text-right'}>Cost</th>
                <th className={th}>Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {LABOUR.map((l) => (
                <tr key={l.item}>
                  <td className={td}>
                    <span className="font-semibold text-[#21295C]">{l.item}.</span> {l.detail}
                  </td>
                  <td className={td}>{l.qty}</td>
                  <td className={td}>{money(l.rate)}</td>
                  <td className={td + ' text-right'}>{money(lineTotal(l))}</td>
                  <td className={td}>{l.basis}</td>
                </tr>
              ))}
              <tr className="bg-slate-50 font-semibold">
                <td className={td} colSpan={3}>Labour total</td>
                <td className={td + ' text-right'}>{money(LABOUR_TOTAL)}</td>
                <td className={td} />
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600">
          <span className="italic font-semibold">Note.</span> Hourly rates are the team's assumption of what a
          contractor would charge, including tools, insurance and overheads. They are higher than award wages and must
          be replaced with real quotes.
        </p>

        <div className="text-left pt-2">
          <div className="font-bold text-sm text-[#21295C]">Table 9</div>
          <div className="italic text-sm text-slate-800 font-medium">Travel, Accommodation and Food Cost Breakdown</div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className={th}>Item</th>
                <th className={th}>Quantity</th>
                <th className={th}>Rate</th>
                <th className={th + ' text-right'}>Cost</th>
                <th className={th}>Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {TRAVEL.map((t) => (
                <tr key={t.item}>
                  <td className={td}>
                    <span className="font-semibold text-[#21295C]">{t.item}.</span> {t.detail}
                  </td>
                  <td className={td}>
                    {t.qty} {t.unit}
                  </td>
                  <td className={td}>{money(t.rate)}</td>
                  <td className={td + ' text-right'}>{money(lineTotal(t))}</td>
                  <td className={td}>{t.basis}</td>
                </tr>
              ))}
              <tr className="bg-slate-50 font-semibold">
                <td className={td} colSpan={3}>Travel total</td>
                <td className={td + ' text-right'}>{money(TRAVEL_TOTAL)}</td>
                <td className={td} />
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          <span className="italic font-semibold">Note.</span> We used the ATO (2025) general country centre rate for
          accommodation, because Port Stewart is not listed. Where the crew sleeps (in Coen, or on site) still has to
          be arranged with YAC.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 leading-relaxed">
          <li>
            <span className="font-semibold">Could be lower:</span> EWB and Arup volunteers have given engineering time
            for free on this project (AWA, 2018). We costed the engineer as if paid, to be safe.
          </li>
          <li>
            <span className="font-semibold">Not included:</span> an electrician (needed only if the pump check finds
            electrical faults), heavy equipment hire, and any time lost to road closures beyond the contingency.
          </li>
        </ul>
        <ArtefactNote
          why="Our tutor pointed out that the first labour figure looked too cheap. We broke it down by role, days, travel, accommodation and food to see what it really costs."
          tells="Getting two people to Port Stewart for 10 days costs about as much as the labour itself. A longer stay would add to the cost quickly."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Where could the money come from?</h2>
        <p className="text-slate-700 leading-relaxed">
          There are two kinds of source: private philanthropy and organisations, and government grants. The ones below
          are possible sources. We have not confirmed any funding for this project.
        </p>
        <div className="text-left">
          <div className="font-bold text-sm text-[#21295C]">Table 10</div>
          <div className="italic text-sm text-slate-800 font-medium">Possible Funding Sources for the Port Stewart Water Project</div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className={th}>Source</th>
                <th className={th}>Examples and amounts</th>
                <th className={th}>Status</th>
                <th className={th}>Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Private philanthropy and organisations</td>
                <td className={td}>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The Yaru Foundation gave $40,000 in 2024 for materials for the pump, solar power and filtration
                      unit, delivered with YAC and the Lama Lama Land Trust (LLLT).</li>
                    <li>Arup, the Centre for Appropriate Technology (CfAT) and EWB have given engineering time. This is
                      not a cash amount.</li>
                    <li>Other EWB project supporters include Airbus, BMT, Bindy and David Koadlow, and Epiroc. Amounts
                      are not stated.</li>
                  </ul>
                </td>
                <td className={td}>
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    Has supported the wider project. Not confirmed for our design.
                  </span>
                </td>
                <td className={td}>(National Indigenous Times, 2024; EWB, 2025; AWA, 2018)</td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Government grant: National Water Grid Fund, First Nations water</td>
                <td className={td}>
                  $150 million allocated for First Nations water infrastructure in regional and remote Australia. It
                  can fund construction such as installing water treatment systems. Proposals must show engagement with
                  the First Nations communities involved, manage cultural heritage impacts and show broad community
                  support (NWGA, n.d.).
                </td>
                <td className={td}>
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                    Possible. We have not confirmed who could apply.
                  </span>
                </td>
                <td className={td}>(NWGA, n.d.; NWGA, 2023)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ArtefactNote
          why="To show the project could realistically be paid for, and that there are different kinds of funders with different requirements."
          tells="Philanthropy has already supported this site, and a government grant exists for exactly this type of water work. Both would need the community and YAC to be involved."
        />
        <div className="rounded-xl bg-[#E2EDF3]/60 border border-[#1C7293]/30 p-4 text-sm text-slate-700 leading-relaxed">
          <span className="font-bold text-[#21295C]">Keeping the community in control. </span>
          Some Lama Lama locals are already trained in water quality testing and system maintenance (National
          Indigenous Times, 2024). Training operators for our system builds on this and reduces the need to fly
          technicians in for every problem.
        </div>
      </section>

      <PagePagination currentPageId="costs" onNavigate={onNavigate} />
    </div>
  );
};
