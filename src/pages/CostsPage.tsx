import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ScrollHint } from '../components/ScrollHint';
import { ArtefactNote } from '../components/ArtefactNote';
import { ArtefactLabel } from '../components/ArtefactLabel';
import { CrossLink } from '../components/CrossLink';
import {
  CostLine,
  EQUIPMENT,
  LABOUR,
  TRAVEL,
  VISIT_LABOUR,
  VISIT_TRAVEL,
  LABOUR_TOTAL,
  TRAVEL_TOTAL,
  SITE_VISIT_TOTAL,
  SITE_VISIT_PERCENT,
  VISIT_DAYS_AWAY,
  VISIT_ON_SITE_DAYS,
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
  EXTRA_DAY_WAITING,
  DAYS_AWAY,
  NIGHTS,
  ON_SITE_DAYS,
  TRAVEL_DAYS,
  TEST_KIT_PRICE,
  TESTS_PER_KIT,
  TEST_KITS_PER_YEAR,
  TEST_KITS_COST,
  MEDIA_BAG_PRICE,
  MEDIA_BAGS_PER_FILTER,
  MEDIA_LIFE_YEARS,
  MEDIA_CHANGE_COST,
  MEDIA_PER_YEAR,
  SPARES_PER_YEAR,
  MIN_WAGE,
  OPERATOR_HOURS_PER_WEEK,
  OPERATOR_TANK_HOURS_PER_MONTH,
  OPERATOR_HOURS_PER_YEAR,
  OPERATOR_COST,
  OPERATOR_PERCENT,
  RUNNING_CASH,
  RUNNING_TOTAL,
  RUNNING_ROUNDED,
  RUNNING_PER_PERSON,
  RUNNING_TEN_YEARS,
  RUNNING_WITH_CHECKUPS,
  PEOPLE_SERVED,
  CHECKUP_COST,
  CHECKUP_PER_YEAR,
  CHECKUP_DAYS_AWAY,
  CHECKUP_ON_SITE_DAYS,
  lineTotal,
  money,
  moneyExact,
} from '../data/costs';

interface CostsPageProps {
  onNavigate: (pageId: PageId, anchor?: string) => void;
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

const th = 'p-3 font-bold';
const td = 'p-3 align-top';

/** A table of cost lines: item and detail, quantity, rate, cost and basis. Used for Tables 8, 9 and 10. */
const CostTable: React.FC<{
  lines: CostLine[];
  qtyHeader: string;
  rateHeader: string;
  showUnit: boolean;
  totalLabel: string;
  total: number;
  minWidth: string;
}> = ({ lines, qtyHeader, rateHeader, showUnit, totalLabel, total, minWidth }) => (
  <>
    <ScrollHint />
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className={`w-full text-left border-collapse ${minWidth}`}>
        <thead>
          <tr className="bg-[#21295C] text-white text-sm">
            <th className={th}>Item</th>
            <th className={th}>{qtyHeader}</th>
            <th className={th}>{rateHeader}</th>
            <th className={th + ' text-right'}>Cost</th>
            <th className={th}>Basis</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
          {lines.map((l) => (
            <tr key={l.item + l.detail}>
              <td className={td}>
                <span className="font-semibold text-[#21295C]">{l.item}.</span> {l.detail}
              </td>
              <td className={td}>
                {l.qty}
                {showUnit ? ` ${l.unit}` : ''}
              </td>
              <td className={td}>{moneyExact(l.rate)}</td>
              <td className={td + ' text-right'}>{money(lineTotal(l))}</td>
              <td className={td}>{l.basis}</td>
            </tr>
          ))}
          <tr className="bg-slate-50 font-semibold">
            <td className={td} colSpan={3}>
              {totalLabel}
            </td>
            <td className={td + ' text-right'}>{money(total)}</td>
            <td className={td} />
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

/**
 * PAGE 8: COSTS
 * All numbers come from src/data/costs.ts so the totals always add up.
 * Abbreviation written out here for the first time: ATO. (YAC, EWB and GST are explained earlier on the site.)
 */
export const CostsPage: React.FC<CostsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={8}
        title="Costs and Budget"
        subtitle="What the project is likely to cost to build and to run, how we worked it out, and where the money could come from."
        assignedAuthor="Huy Truong"
      />

      <section className="rounded-2xl bg-gradient-to-br from-[#21295C] to-[#065A82] text-white p-6 sm:p-8 shadow-lg">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Estimated cost to build and install
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{RANGE_TEXT}</h2>
            <p className="text-cyan-100 leading-relaxed">
              The seven cost lines in Table 7 add up to {money(SUBTOTAL)}. We then add a contingency of 20–25% (
              {money(CONTINGENCY_LOW)}–{money(CONTINGENCY_HIGH)}), which gives {money(TOTAL_LOW)}–{money(TOTAL_HIGH)},
              and round that to the range above. Only about {PUBLISHED_PERCENT}% of the subtotal (
              {money(PUBLISHED_TOTAL)}) comes from published prices or rates. The rest is our own allowance, so supplier
              quotes are needed before anyone relies on this estimate.
            </p>
          </div>
          <div className="space-y-3 md:border-l md:border-white/25 md:pl-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Estimated operation and maintenance cost, each year
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">About {RUNNING_ROUNDED}</h2>
            <p className="text-cyan-100 leading-relaxed">
              Test kits, filter media, spare parts and about {OPERATOR_HOURS_PER_YEAR} hours of operator time (Table 11).
              Only {money(RUNNING_CASH)} of it is cash. If we also need an outside check-up every second year, it rises
              to about {money(Math.round(RUNNING_WITH_CHECKUPS / 100) * 100)}.
            </p>
          </div>
        </div>
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
        <ArtefactLabel label="Table 7" title="Estimated Capital Cost by Category" />
        <ScrollHint />
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className={th}>Category</th>
                <th className={th + ' text-right w-36'}>Amount (AUD)</th>
                <th className={th}>What is included and how we estimated it</th>
                <th className={th + ' w-48'}>Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Treatment parts</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.treatment)}</td>
                <td className={td}>
                  Two Filox MP 940M filters with manual valves at {money(FILTER_PRICE)} each (
                  {money(FILTER_PRICE * FILTER_COUNT)}; Oz Filter Warehouse, n.d.-a) and one 2,000 L round polyethylene
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
                <td className={td}>
                  Iron and turbidity test kits, spare seals, valves and fittings to start with. We have not priced
                  these items. Table 11 prices the yearly refills.
                </td>
                <td className={td}>
                  <Basis kind="allowance">Team allowance</Basis>
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Protection and groundworks</td>
                <td className={td + ' text-right'}>{money(EQUIPMENT.protection)}</td>
                <td className={td}>
                  Concrete slab (poured by a local contractor during the site visit, so it has time to cure), cyclone
                  tie-downs, stainless anchors, a roof and vermin mesh. We have not priced the contractor. We used
                  Queensland cyclone guidance for homes (QRA, 2019) as a guide to what is needed. An engineer would check
                  the final design.
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
                  30–80% to standard freight rates, and the wet season can add two to five business days or more (Best
                  Rated Transport, 2026).
                </td>
                <td className={td}>
                  <Basis kind="allowance">Team allowance</Basis>
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Labour, installation trip</td>
                <td className={td + ' text-right'}>{money(LABOUR_TOTAL)}</td>
                <td className={td}>Plumber and commissioning engineer. See Table 8.</td>
                <td className={td}>
                  <Basis kind="allowance">Team assumption</Basis>
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Travel and accommodation, installation trip</td>
                <td className={td + ' text-right'}>{money(TRAVEL_TOTAL)}</td>
                <td className={td}>
                  Two people for {DAYS_AWAY} days. Accommodation and meals use the reasonable amounts set by the
                  Australian Taxation Office (ATO, 2025). Vehicle and flights are our allowances. See Table 9.
                </td>
                <td className={td}>
                  <Basis kind="mixed">ATO rates and team allowance</Basis>
                </td>
              </tr>
              <tr>
                <td className={td + ' font-semibold text-[#21295C]'}>Site visit before ordering</td>
                <td className={td + ' text-right'}>{money(SITE_VISIT_TOTAL)}</td>
                <td className={td}>
                  One engineer for {VISIT_DAYS_AWAY} days away. The visit checks the pump and intake and supervises the
                  slab pour, before any equipment is bought. See Table 10.
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
                <td className={td}>
                  Covers price rises, extra days if a road is closed or the work runs late (see Table 13), or extra
                  parts.
                </td>
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
          tells={`Labour and travel on the two trips are more than half of the subtotal (${money(LABOUR_AND_TRAVEL)} of ${money(SUBTOTAL)}, or ${LABOUR_TRAVEL_PERCENT}%), because Port Stewart is a long way from the nearest trades and suppliers. Only ${money(PUBLISHED_TOTAL)} of the subtotal traces to published prices or rates.`}
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Labour and travel on the installation trip</h2>
        <p className="text-slate-700 leading-relaxed">
          We costed labour by role, and we included the cost of getting people to Port Stewart and keeping them there.
          The installation crew is two people, a licensed plumber and a commissioning engineer, travelling together in
          one vehicle. We assumed {ON_SITE_DAYS} days on site and {TRAVEL_DAYS} days of travel, which is {DAYS_AWAY} days
          away and {NIGHTS} nights. We have not found a published driving time from Cairns to Port Stewart, so the travel
          time is our assumption. For scale, NRMA's Cape York road trip drives from Cairns to Coen through Cooktown in
          three legs of 244, 175 and 220 km, with 6, 2 and 5 hours of driving (NRMA, 2018). Adding those legs gives 639
          km and 13 hours. The road to Port Stewart is a different route, so this is only a rough guide.{' '}
          <CrossLink page="implementation" anchor="table-13" onNavigate={onNavigate}>
            Table 13
          </CrossLink>{' '}
          on the Implementation page shows what happens on each day.
        </p>

        <ArtefactLabel label="Table 8" title="Labour Cost Breakdown" />
        <CostTable
          lines={LABOUR}
          qtyHeader="Hours"
          rateHeader="Rate per hour"
          showUnit={false}
          totalLabel="Labour total"
          total={LABOUR_TOTAL}
          minWidth="min-w-[760px]"
        />
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. Hourly rates are our assumptions of what a contractor would charge, including tools,
          insurance and overheads. They are not quotes.
        </p>

        <div className="pt-2">
          <ArtefactLabel label="Table 9" title="Travel, Accommodation and Food Cost Breakdown for the Installation Trip" />
        </div>
        <CostTable
          lines={TRAVEL}
          qtyHeader="Quantity"
          rateHeader="Rate"
          showUnit
          totalLabel="Travel total"
          total={TRAVEL_TOTAL}
          minWidth="min-w-[760px]"
        />
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team using rates from ATO (2025). The ATO does not list Port Stewart, so we used its rate
          for other country centres, $141 a night, for every night. The ATO lists Cairns at $175 a night, so nights spent
          in Cairns would cost more. At Port Stewart the Lama Lama Ranger Base issues camping permits and camping fees
          apply, but YAC's visitor page does not give an amount (YAC, n.d.-c), so the $141 rate stands in for motels on the road
          and for camping at Port Stewart.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 leading-relaxed">
          <li>
            <span className="font-semibold">Could be lower:</span> Arup has given pro bono engineering support to this
            project since 2015 (EWB, 2025), so the engineer's time might be free. We costed it as if paid.
          </li>
          <li>
            <span className="font-semibold">Not included:</span> an electrician (needed only if the pump check finds
            electrical faults), heavy equipment hire, camping permit fees, paid time for the driving days (we charge
            labour for the days on site only), and any time lost to road closures beyond the contingency.
          </li>
        </ul>
        <ArtefactNote
          why="A single labour figure would hide the cost of getting to Port Stewart, so we broke it down by role, days, travel, accommodation and food."
          tells={`Travel and accommodation (${money(TRAVEL_TOTAL)}) cost nearly as much as the labour itself (${money(LABOUR_TOTAL)}). Each extra day away adds about ${money(EXTRA_DAY_COST)} for accommodation, meals and incidentals alone, or about ${money(EXTRA_DAY_WAITING)} with the vehicle.`}
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">The site visit before we order</h2>
        <p className="text-slate-700 leading-relaxed">
          The pump and the intake decide whether the design can work, and we have only assumed their flow. So one
          engineer visits Port Stewart in July, before any equipment is bought. They walk the site with YAC, check the
          pump and intake, measure the real flow and pressure, test iron in the water, and supervise a local contractor
          pouring the slab. A new slab needs time to cure. The national clause in the 2019 edition of the National
          Construction Code only says concrete must be cured in line with good building practice. The South Australian
          variation is more specific: 7 days of moist curing, and no stacked materials or building plant on a slab for
          at least 7 days (Australian Building Codes Board, 2019). We use that as a guide, and the engineer would
          confirm what the site needs. Pouring in July leaves weeks before the equipment arrives. The visit is a
          separate trip, so it has its own cost.
        </p>

        <ArtefactLabel label="Table 10" title="Cost of the Site Visit Before Ordering Equipment" />
        <CostTable
          lines={[VISIT_LABOUR, ...VISIT_TRAVEL]}
          qtyHeader="Quantity"
          rateHeader="Rate"
          showUnit
          totalLabel="Site visit total"
          total={SITE_VISIT_TOTAL}
          minWidth="min-w-[760px]"
        />
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team using rates from ATO (2025). The engineer's rate, the vehicle and the flight are our
          allowances, not quotes. We have not priced the local contractor for the slab. It sits inside the{' '}
          {money(EQUIPMENT.protection)} groundworks allowance in Table 7.
        </p>
        <ArtefactNote
          why="The pump and intake decide whether the design can work, so we check them before we buy anything. That trip costs money, so it needs its own line."
          tells={`The visit costs ${money(SITE_VISIT_TOTAL)} for ${VISIT_DAYS_AWAY} days away (${VISIT_ON_SITE_DAYS} on site), which is ${SITE_VISIT_PERCENT}% of the subtotal. It is cheaper to find out about the pump now than after the equipment has been freighted to Port Stewart.`}
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Operation and maintenance costs after installation</h2>
        <p className="text-slate-700 leading-relaxed">
          The unit has no powered parts and uses no chemicals, so most of its running cost is people's time. Table 11
          sets out the operation and maintenance cost each year, which is what it costs to keep the unit working once it
          is built. The pump is the community's existing pump, so its fuel and repairs are not in this table.
        </p>

        <ArtefactLabel label="Table 11" title="Estimated Operation and Maintenance Cost per Year" />
        <ScrollHint />
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[860px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className={th}>Item</th>
                <th className={th}>Quantity each year</th>
                <th className={th + ' text-right'}>Cost each year</th>
                <th className={th}>Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              <tr>
                <td className={td}>
                  <span className="font-semibold text-[#21295C]">Iron test kit.</span> Reagents to test the treated water
                  and keep a log.
                </td>
                <td className={td}>
                  {TEST_KITS_PER_YEAR} kit of about {TESTS_PER_KIT} tests, at {moneyExact(TEST_KIT_PRICE)}
                </td>
                <td className={td + ' text-right'}>{money(TEST_KITS_COST)}</td>
                <td className={td}>
                  <Basis kind="published">Supplier price</Basis>
                  <span className="block mt-1">
                    Hanna HI38040 kit, 0.0–5.0 mg/L in steps of 0.1 mg/L, including GST (Instrument Choice, n.d.). One
                    kit is about two tests a week. Our target is 0.3 mg/L.
                  </span>
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold text-[#21295C]">Filter media, saved up.</span> Replacing the media in
                  both filters.
                </td>
                <td className={td}>
                  {FILTER_COUNT * MEDIA_BAGS_PER_FILTER} bags at {money(MEDIA_BAG_PRICE)} ={' '}
                  {money(MEDIA_CHANGE_COST)}, every {MEDIA_LIFE_YEARS} years
                </td>
                <td className={td + ' text-right'}>{money(MEDIA_PER_YEAR)}</td>
                <td className={td}>
                  <Basis kind="mixed">Supplier price, team assumptions</Basis>
                  <span className="block mt-1">
                    {money(MEDIA_BAG_PRICE)} for one bag of Filox media, including GST (Oz Filter Warehouse, n.d.-b). The
                    page gives the bag as 25 kg in its description and 27.2 kg in its unit field, and says the price is by
                    enquiry only, so it needs a quote. The supplier does not say how many bags a filter takes, so we assume{' '}
                    {MEDIA_BAGS_PER_FILTER}. It also gives no rated life. It says it has units still working with the same
                    media after more than 7 years, so we assume {MEDIA_LIFE_YEARS}. The cost is spread over those years so
                    the money is there when it is needed.
                  </span>
                </td>
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold text-[#21295C]">Spare parts, seals and freight.</span> Refilling the
                  spares box and sending parts to Port Stewart.
                </td>
                <td className={td}>Allowance</td>
                <td className={td + ' text-right'}>{money(SPARES_PER_YEAR)}</td>
                <td className={td}>
                  <Basis kind="allowance">Team allowance</Basis>
                  <span className="block mt-1">We have not priced these items.</span>
                </td>
              </tr>
              <tr className="bg-slate-50 font-semibold">
                <td className={td} colSpan={2}>
                  Cash cost each year
                </td>
                <td className={td + ' text-right'}>{money(RUNNING_CASH)}</td>
                <td className={td} />
              </tr>
              <tr>
                <td className={td}>
                  <span className="font-semibold text-[#21295C]">Operator time.</span> Backwashing both filters, testing
                  the water and walking round the unit, and draining the contact tank.
                </td>
                <td className={td}>
                  {OPERATOR_HOURS_PER_YEAR} hours at {moneyExact(MIN_WAGE)}
                </td>
                <td className={td + ' text-right'}>{money(OPERATOR_COST)}</td>
                <td className={td}>
                  <Basis kind="mixed">Published rate, team assumption</Basis>
                  <span className="block mt-1">
                    We assume {OPERATOR_HOURS_PER_WEEK} hour a week and {OPERATOR_TANK_HOURS_PER_MONTH} hour a month. The
                    rate is the National Minimum Wage from 1 July 2026 (Fair Work Commission, 2026). It is a floor, and
                    the Rangers' pay may be higher. If they do this as part of their paid work there may be no new cash
                    cost, but the time still has to be found.
                  </span>
                </td>
              </tr>
              <tr className="bg-[#E2EDF3] font-bold text-[#21295C]">
                <td className={td} colSpan={2}>
                  Total each year, with operator time
                </td>
                <td className={td + ' text-right'}>{money(RUNNING_TOTAL)}</td>
                <td className={td}>About {RUNNING_ROUNDED} a year.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. We read the supplier prices on 15 October 2026. Hours, bag numbers, media life and
          the spares amount are our assumptions, not quotes.
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">What it means for the community</h3>
            <p>
              For about {PEOPLE_SERVED} people (Todio, 2026) the running cost is about {money(RUNNING_PER_PERSON)} per
              person a year. Over ten years it adds up to about {money(Math.round(RUNNING_TEN_YEARS / 100) * 100)}.
            </p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-bold text-amber-900 mb-1">If we need an outside check-up</h3>
            <p>
              One plumber for {CHECKUP_ON_SITE_DAYS} days on site and {CHECKUP_DAYS_AWAY} days away would cost about{' '}
              {money(CHECKUP_COST)} a visit, using the same rates and method as Table 10. A visit every second year adds
              about {money(CHECKUP_PER_YEAR)} a year and takes the running cost to about{' '}
              {money(Math.round(RUNNING_WITH_CHECKUPS / 100) * 100)}. That is not in the total above, because the design
              aims for the community to run the unit itself.
            </p>
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 leading-relaxed">
          <li>
            <span className="font-semibold">Not included:</span> extra diesel for the existing pump when it runs longer
            for backwashing (we do not know its fuel use), laboratory tests, replacing long-life parts such as the tank
            and the Venturi, and price rises over the years.
          </li>
        </ul>
        <ArtefactNote
          why="A unit that is cheap to build but expensive to run would fail in a small community, so we priced the running costs as well as the build."
          tells={`Running the unit costs about ${RUNNING_ROUNDED} a year, and about ${OPERATOR_PERCENT}% of that is operator time. Only ${money(RUNNING_CASH)} a year is cash. An outside check-up would cost far more than the supplies, which is why training local operators matters.`}
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Where could the money come from?</h2>
        <p className="text-slate-700 leading-relaxed">
          There are two kinds of source: private donors and organisations, and government grants. The ones below are
          possible sources. No funding has been confirmed for this project.
        </p>
        <ArtefactLabel label="Table 12" title="Possible Funding Sources for the Port Stewart Water Project" />
        <ScrollHint />
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[800px]">
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
        <p className="text-sm text-slate-600">
          Where this leaves the plan: the Implementation page sets out the order of the work, what happens on each day
          of both trips and what we do if a trip runs long.{' '}
          <button
            type="button"
            onClick={() => onNavigate('implementation', 'table-13')}
            className="font-semibold text-[#065A82] hover:underline"
          >
            Go to the day-by-day plan (Table 13)
          </button>
          .
        </p>
      </section>

      <PagePagination currentPageId="costs" onNavigate={onNavigate} />
    </div>
  );
};
