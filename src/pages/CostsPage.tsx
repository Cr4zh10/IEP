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
  LABOUR_AND_TRAVEL,
  LABOUR_TRAVEL_PERCENT,
  PUBLISHED_TOTAL,
  PUBLISHED_PERCENT,
  SUBTOTAL,
  CONTINGENCY_LOW,
  CONTINGENCY_HIGH,
  TOTAL_LOW,
  TOTAL_HIGH,
  RANGE_TEXT,
  FILTER_PRICE,
  FILTER_COUNT,
  TANK_PRICE,
  TREATMENT_PRICED,
  TREATMENT_ALLOWANCE,
  EXTRA_DAY_COST,
  lineTotal,
  money,
  moneyExact,
} from '../data/costs';

interface CostsPageProps {
  onNavigate: (pageId: PageId) => void;
}

type BasisKind = 'published' | 'mixed' | 'allowance';

const basisStyle: Record<BasisKind, string> = {
  published: 'bg-emerald-100 text-emerald-800',
  mixed: 'bg-sky-100 text-sky-800',
  allowance: 'bg-amber-100 text-amber-800',
};

const Basis: React.FC<{ kind: BasisKind; children: React.ReactNode }> = ({ kind, children }) => (
  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${basisStyle[kind]}`}>{children}</span>
);

/**
 * PAGE 8: COSTS
 * All numbers come from src/data/costs.ts so the totals always add up.
 * Abbreviation written out here for the first time: ATO. (CfAT is no longer used on this page.)
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
          The six cost lines in Table 7 add up to {money(SUBTOTAL)}. We then add a contingency of 20–25% (
          {money(CONTINGENCY_LOW)}–{money(CONTINGENCY_HIGH)}), which gives {money(TOTAL_LOW)}–{money(TOTAL_HIGH)}, and round
          that to the range above. Only about {PUBLISHED_PERCENT}% of the subtotal ({money(PUBLISHED_TOTAL)}) comes from
          published prices or rates. The rest is our own allowance, so supplier quotes are needed before anyone relies
          on this estimate.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Existing equipment we keep</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <h3 className="font-bold text-emerald-900">Existing pump: not in this budget</h3>
            <p className="mt-1">
              We reuse the diesel pump the community already uses to take water from the river (EWB, n.d.), so no new
              pump is in the budget. Its fuel and repairs are running costs the community already has. This is a saving
              for now, not a promise of supply. See the scope box on the Define page.
            </p>
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <h3 className="font-bold text-emerald-900">Existing header tanks and pipes: not in this budget</h3>
            <p className="mt-1">
              The community's elevated tanks and distribution pipes are kept as they are (EWB, n.d.; EWB, 2019).
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
          <table className="w-full text-left border-collapse min-w-[820px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className={th}>Category</th>
                <th className={th + ' text-right w-32'}>Amount (AUD)</th>
                <th className={th}>What is included and how we estimated it</th>
                <th className={th + ' w-44'}>Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Treatment parts</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.treatment)}</td>
                <td className={td}>
                  Two Filox MP 940M filters with manual valves at {money(FILTER_PRICE)} each (
                  {money(FILTER_PRICE * FILTER_COUNT)}; Oz Filter Warehouse, n.d.) and one 2,000 L round polyethylene
                  tank at {money(TANK_PRICE)} (Clark Tanks, n.d.). These listed prices come to {money(TREATMENT_PRICED)}.
                  The other {money(TREATMENT_ALLOWANCE)} is our allowance for the Venturi aerator, pipework, valves and
                  gauges, which we have not priced. For scale, a packaged iron-removal unit with auto-backwash and a
                  40 L/min flow is listed at $4,869.68 including goods and services tax (GST) (Puretec, n.d.).
                </td>
                <td className={td}>
                  <Basis kind="mixed">Part supplier price, part allowance</Basis>
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Testing and spares</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.testing)}</td>
                <td className={td}>Iron and turbidity test kits, spare seals, valves and fittings. We have not priced these items.</td>
                <td className={td}>
                  <Basis kind="allowance">Team allowance</Basis>
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Protection and groundworks</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.protection)}</td>
                <td className={td}>
                  Concrete slab, cyclone tie-downs, stainless anchors, a roof and vermin mesh. We used Queensland cyclone
                  guidance for homes (QRA, 2019) as a guide to what is needed. An engineer would check the final design.
                </td>
                <td className={td}>
                  <Basis kind="allowance">Team allowance</Basis>
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Freight</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.freight)}</td>
                <td className={td}>
                  Road freight from Cairns to Port Stewart in the dry season. Remote Cape York surcharges can add
                  30–80% to standard freight rates, and the wet season can add two to five business days or more (Best Rated
                  Transport, 2026).
                </td>
                <td className={td}>
                  <Basis kind="allowance">Team allowance</Basis>
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Labour</td>
                <td className={td + ' text-right'}>{money(LABOUR_TOTAL)}</td>
                <td className={td}>Plumber and commissioning engineer. See Table 8.</td>
                <td className={td}>
                  <Basis kind="allowance">Team assumption</Basis>
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Travel and accommodation</td>
                <td className={td + ' text-right'}>{money(TRAVEL_TOTAL)}</td>
                <td className={td}>
                  Two people for 10 days. Accommodation and meals use the reasonable amounts set by the Australian
                  Taxation Office (ATO, 2025). Vehicle and flights are our allowances. See Table 9.
                </td>
                <td className={td}>
                  <Basis kind="mixed">ATO rates and team allowance</Basis>
                </td>
              </tr>
              <tr className="bg-slate-50 font-semibold">
                <td className={td}>Subtotal</td>
                <td className={td + ' text-right'}>{money(SUBTOTAL)}</td>
                <td className={td} />
                <td className={td} />
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Contingency (20–25%)</td>
                <td className={td + ' text-right'}>
                  {money(CONTINGENCY_LOW)}–{money(CONTINGENCY_HIGH)}
                </td>
                <td className={td}>Covers price rises, a longer stay if the road is closed, or extra parts.</td>
                <td className={td}>
                  <Basis kind="allowance">Team allowance</Basis>
                </td>
              </tr>
              <tr className="bg-[#E2EDF3] font-bold text-[#21295C]">
                <td className={td}>Total</td>
                <td className={td + ' text-right'}>{RANGE_TEXT.replace(' AUD', '')}</td>
                <td className={td}>Rounded to the nearest $1,000.</td>
                <td className={td} />
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. The Basis column shows which amounts come from published prices or rates and which
          are our own allowances. We read the supplier prices on 14 October 2026. The Oz Filter Warehouse page lists the
          manual-valve filter at $1,499 in its model table, but the price shown at the top of the same page ($1,799,
          GST included) matches the automatic-valve model, so this price needs a quote. The Clark Tanks page showed the
          tank as sold out and does not say whether its price includes GST.
        </p>
        <ArtefactNote
          why="Every cost sits in one table, and each line says whether the amount comes from a published price or from our own allowance."
          tells={`Labour and travel are about half of the subtotal (${money(LABOUR_AND_TRAVEL)} of ${money(SUBTOTAL)}, or ${LABOUR_TRAVEL_PERCENT}%), because Port Stewart is a long way from the nearest trades and suppliers. Only ${money(PUBLISHED_TOTAL)} of the subtotal traces to published prices or rates.`}
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Labour and travel in detail</h2>
        <p className="text-slate-700 leading-relaxed">
          We costed labour by role, and we included the cost of getting people to Port Stewart and keeping them there.
          The crew is two people, a licensed plumber and a commissioning engineer, travelling together in one vehicle.
          We assumed 6 days on site and 4 days of travel, which is 10 days away and 9 nights. The travel time is our
          assumption. For scale, the day legs on NRMA's trip page add up to about 639 km from Cairns to Coen alone
          (NRMA, 2018).
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
                  <td className={td}>{moneyExact(l.rate)}</td>
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
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. Hourly rates are our assumptions of what a contractor would charge, including tools,
          insurance and overheads. They are not quotes.
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
                  <td className={td}>{moneyExact(t.rate)}</td>
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
          Created by the project team using rates from ATO (2025). The ATO does not list Port Stewart, so we used its rate
          for other country centres, $141 a night, for every night. The ATO lists Cairns at $175 a night, so nights spent
          in Cairns would cost more.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 leading-relaxed">
          <li>
            <span className="font-semibold">Could be lower:</span> Arup has given pro bono engineering support to this
            project since 2015 (EWB, 2025), so the engineer's time might be free. We costed it as if paid.
          </li>
          <li>
            <span className="font-semibold">Not included:</span> an electrician (needed only if the pump check finds
            electrical faults), heavy equipment hire, and any time lost to road closures beyond the contingency.
          </li>
        </ul>
        <ArtefactNote
          why="A single labour figure would hide the cost of getting to Port Stewart, so we broke it down by role, days, travel, accommodation and food."
          tells={`Travel and accommodation (${money(TRAVEL_TOTAL)}) cost nearly as much as the labour itself (${money(LABOUR_TOTAL)}). Each extra day away adds about ${money(EXTRA_DAY_COST)} for accommodation, meals and incidentals alone.`}
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Where could the money come from?</h2>
        <p className="text-slate-700 leading-relaxed">
          There are two kinds of source: private donors and organisations, and government grants. The ones below are
          possible sources. No funding has been confirmed for this project.
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
                <td className={td + ' font-semibold text-[#21295C]'}>Private donors and organisations</td>
                <td className={td}>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      The Yaru Foundation donated $40,000 towards the material costs of the rainwater system's pump,
                      solar power supply and filtration unit.
                    </li>
                    <li>Arup has given pro bono engineering support since 2015. This is not a cash amount.</li>
                    <li>
                      BMT and Epiroc helped fund construction of the rainwater system, Airbus supported the community
                      co-design and water quality testing, and private donors have given ongoing support since 2012. No
                      amounts are stated.
                    </li>
                  </ul>
                </td>
                <td className={td}>
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    Has supported the wider project. Not confirmed for our design.
                  </span>
                </td>
                <td className={td}>(EWB, 2025; Prestipino, 2024)</td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Government grant: National Water Grid Fund, First Nations water</td>
                <td className={td}>
                  $150 million for First Nations water infrastructure (NWGA, n.d.), to be delivered across four years
                  (NWGA, 2023). It can fund construction such as installing water treatment systems. Proposals must show
                  engagement with the First Nations communities involved, manage impacts on cultural heritage and show
                  broad community support (NWGA, n.d.). The 2023 announcement says the proposals must be brought forward
                  by state and territory governments (NWGA, 2023).
                </td>
                <td className={td}>
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                    Possible. Proposals come through state and territory governments. We have not checked whether the
                    fund is still open.
                  </span>
                </td>
                <td className={td}>(NWGA, n.d.; NWGA, 2023)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team from the sources in the Reference column. Amounts are as stated in those sources.
        </p>
        <ArtefactNote
          why="We looked at who might pay for the project and what the government fund would ask of us."
          tells="Private donors have already supported this site, and a government fund exists for this type of work. The fund asks for engagement with the community and evidence of broad community support (NWGA, n.d.)."
        />
        <div className="rounded-xl bg-[#E2EDF3]/60 border border-[#1C7293]/30 p-4 text-sm text-slate-700 leading-relaxed">
          <span className="font-bold text-[#21295C]">Keeping the community in control. </span>
          Some Lama Lama locals are due to be trained in water quality testing and system maintenance for the rainwater
          system (Prestipino, 2024). Training operators for our unit could build on that and reduce the need to bring in
          technicians for every problem.
        </div>
      </section>

      <PagePagination currentPageId="costs" onNavigate={onNavigate} />
    </div>
  );
};
