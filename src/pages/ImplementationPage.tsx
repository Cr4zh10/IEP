import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ArtefactNote } from '../components/ArtefactNote';
import { ArtefactLabel } from '../components/ArtefactLabel';
import { CrossLink } from '../components/CrossLink';
import { ScrollHint } from '../components/ScrollHint';
import { MONTHS } from '../data/rainfall';
import {
  ON_SITE_DAYS,
  TRAVEL_DAYS,
  DAYS_AWAY,
  VISIT_ON_SITE_DAYS,
  VISIT_DAYS_AWAY,
  PLUMBER_HOURS_PER_DAY,
  ENGINEER_HOURS_PER_DAY,
  ENGINEER_DAYS,
  EXTRA_DAY_COST,
  EXTRA_DAY_WAITING,
  EXTRA_DAY_WORKING,
  CONTINGENCY_LOW,
  CONTINGENCY_HIGH,
  CONTINGENCY_WAITING_DAYS,
  CONTINGENCY_WORKING_DAYS,
  CONTINGENCY_HIGH_WORKING_DAYS,
  PERMIT_EXTRA_DAYS,
  ENGINEER_FULL_STAY_EXTRA,
  EXTRA_DRIVING_DAYS_COST,
  OPERATOR_HOURS_PER_WEEK,
  money,
} from '../data/costs';

interface ImplementationPageProps {
  onNavigate: (pageId: PageId, anchor?: string) => void;
}

// Wet season months (index 0 = Jan): Dec, Jan, Feb, Mar, Apr (from BOM rainfall, Figure 2)
const WET = [true, true, true, true, false, false, false, false, false, false, false, true];

interface Task {
  name: string;
  who: string;
  start: number; // month index 0-11
  end: number; // inclusive
  color: string;
  note?: string;
}

/**
 * PAGE 9: IMPLEMENTATION
 * The Gantt chart assumes the project starts in January. Change start/end below to move the bars.
 * No new abbreviations are written out here. YAC, EWB, BOM, QRA and TMR are already defined.
 */
const TASKS: Task[] = [
  { name: 'Agree the plan with YAC, Rangers and Elders', who: 'Team, YAC', start: 0, end: 11, color: 'bg-violet-500', note: 'Runs all year' },
  { name: 'Ask YAC for permission to enter and stay, agree the dates and get camping permits', who: 'Team, YAC', start: 2, end: 5, color: 'bg-violet-500', note: 'Dates confirmed by the end of June' },
  { name: 'Apply for funding', who: 'Team, EWB, YAC', start: 0, end: 3, color: 'bg-sky-600' },
  { name: 'Get supplier and plumber quotes and confirm the budget', who: 'Team', start: 2, end: 4, color: 'bg-sky-600', note: 'The plumber quote also tests our six-day estimate' },
  { name: 'Site visit, cultural heritage check and slab pour', who: 'Engineer, YAC, local contractor', start: 6, end: 6, color: 'bg-amber-600', note: '2 days on site. The slab then cures for weeks.' },
  { name: 'Buy materials and send to Cairns', who: 'Team', start: 6, end: 7, color: 'bg-emerald-600', note: 'After the site visit confirms the design' },
  { name: 'Freight to Port Stewart', who: 'Freight company', start: 7, end: 7, color: 'bg-emerald-600' },
  { name: 'Installation trip: install, pressure test and train operators', who: 'Plumber, engineer', start: 8, end: 8, color: 'bg-rose-600', note: '6 days on site' },
  { name: 'Reserve month if a trip is delayed', who: 'Team, YAC', start: 9, end: 9, color: 'bg-slate-400', note: 'Used only if needed' },
  { name: 'Monitoring: local iron tests and backwash log', who: 'Operators, Rangers', start: 9, end: 11, color: 'bg-teal-600' },
  { name: 'Review with the community', who: 'Team, YAC', start: 10, end: 10, color: 'bg-teal-600' },
];

/** "Mar–Jun", or just "Jul" when the task lasts one month. */
const monthRange = (t: Task) => (t.start === t.end ? MONTHS[t.start] : `${MONTHS[t.start]}–${MONTHS[t.end]}`);

interface DayRow {
  day: string;
  where: string;
  what: string;
  who: string;
}

interface Trip {
  title: string;
  rows: DayRow[];
}

const PLUMBER = `Plumber ${PLUMBER_HOURS_PER_DAY} h`;
const ENGINEER = `Engineer ${ENGINEER_HOURS_PER_DAY} h`;

/** Table 13. The on-site days and hours match Tables 8 and 10 on the Costs page. */
const TRIPS: Trip[] = [
  {
    title: `Trip 1: site visit and slab pour, July (one engineer, ${VISIT_DAYS_AWAY} days away, ${VISIT_ON_SITE_DAYS} on site)`,
    rows: [
      { day: 'Day 1', where: 'On the road', what: 'Drive north from Cairns and stay overnight on the way.', who: 'Engineer driving' },
      {
        day: 'Day 2',
        where: 'Port Stewart',
        what: 'Turn off at Musgrave Station onto the Marina Plains Road, then the Lilyvale–Port Stewart Road (YAC, n.d.-c). Check in at the Ranger Base before 4.30 pm and camp where YAC has agreed.',
        who: 'Engineer driving',
      },
      {
        day: 'Day 3',
        where: 'On site',
        what: 'Walk the site with YAC and the Rangers. Do the cultural heritage check before any digging. Measure the pump flow and pressure and test iron in the water. Mark out the slab.',
        who: ENGINEER,
      },
      { day: 'Day 4', where: 'On site', what: 'Supervise the slab pour. Agree who keeps the slab damp for the next 7 days.', who: ENGINEER },
      { day: `Days 5–${VISIT_DAYS_AWAY}`, where: 'On the road', what: 'Drive back to Cairns.', who: 'Engineer driving' },
    ],
  },
  {
    title: `Trip 2: installation, September (plumber and engineer, ${DAYS_AWAY} days away, ${ON_SITE_DAYS} on site)`,
    rows: [
      { day: 'Day 1', where: 'On the road', what: 'Drive north from Cairns with the tools and stay overnight on the way.', who: 'Plumber and engineer' },
      {
        day: 'Day 2',
        where: 'Port Stewart',
        what: 'Check in at the Ranger Base before 4.30 pm (YAC, n.d.-c). The freight has arrived at the delivery point agreed with YAC, confirmed by phone before we leave Cairns.',
        who: 'Plumber and engineer',
      },
      {
        day: 'Day 3',
        where: 'On site',
        what: 'Unpack and check every part against the packing list. Walk the site with YAC and confirm where each part goes.',
        who: `${PLUMBER}, ${ENGINEER.toLowerCase()}`,
      },
      {
        day: 'Day 4',
        where: 'On site',
        what: 'Set the tank and the two filters on the cured slab. Connect the pipework to the existing pump and header tanks.',
        who: PLUMBER,
      },
      { day: 'Day 5', where: 'On site', what: 'Fit the Venturi aerator, valves and gauges. Finish the pipework.', who: PLUMBER },
      {
        day: 'Day 6',
        where: 'On site',
        what: 'Flush the system, check for leaks and pressure test it.',
        who: `${PLUMBER}, ${ENGINEER.toLowerCase()}`,
      },
      {
        day: 'Day 7',
        where: 'On site',
        what: 'Commissioning: run the unit at the design flow of 33.3 L/min, test iron before and after treatment, and adjust.',
        who: `${PLUMBER}, ${ENGINEER.toLowerCase()}`,
      },
      {
        day: 'Day 8',
        where: 'On site',
        what: 'Train the Rangers and operators. Hand over the quick guide and the spare parts box. Tidy the site.',
        who: `${PLUMBER}, ${ENGINEER.toLowerCase()}`,
      },
      { day: `Days 9–${DAYS_AWAY}`, where: 'On the road', what: 'Drive back to Cairns.', who: 'Plumber and engineer' },
    ],
  },
];

export const ImplementationPage: React.FC<ImplementationPageProps> = ({ onNavigate }) => {
  const stages = ['Daily life', 'Maintenance', 'Testing and usage'];
  const after: { row: string; cells: string[] }[] = [
    {
      row: 'Emotional experience',
      cells: [
        'Relief. The water looks clearer and tastes less of metal.',
        'Confident. He has a simple routine and has been trained in it.',
        'Reassured. The test kit shows iron is below the guideline.',
      ],
    },
    {
      row: 'Events',
      cells: [
        'Taps run from the header tanks and fewer people complain about stained basins and laundry.',
        `Backwashes the filters by opening valves (about ${OPERATOR_HOURS_PER_WEEK} hour a week), checks the gauges and uses spare parts from the storage chest.`,
        'Tests the treated water with the iron test kit and records the result. Rangers share results.',
      ],
    },
    {
      row: 'Breakthrough',
      cells: [
        'The community starts to trust the tap water.',
        'He fixes a small leak with the spare parts, without waiting for outside help.',
        'A reading above the limit warns him early that the filter needs attention.',
      ],
    },
    {
      row: 'What could still go wrong',
      cells: [
        'In the dry season the river level can still limit how much water the pump delivers.',
        'Wet season access, spare parts running out, and backwash water draining to the wrong place.',
        'Test kit supplies run out, or the trained person leaves and no one is trained to replace them.',
      ],
    },
  ];

  const permission = [
    {
      when: 'March',
      title: 'Ask YAC first',
      text: 'We write to YAC and ask to meet the Rangers and Elders. YAC takes enquiries at its Coen and Cairns offices (YAC, n.d.-c). It says its Rangers may be able to arrange small-group tours and asks visitors to make arrangements in advance (YAC, n.d.-c). Our visit is not a tour, but we follow the same rule for both trips.',
    },
    {
      when: 'By May',
      title: 'Agree the dates and the length of stay',
      text: `We agree dates for the July site visit and the September installation. We ask for permission to stay up to ${PERMIT_EXTRA_DAYS} days longer than planned. Days we do not use cost nothing.`,
    },
    {
      when: 'By June',
      title: 'Get the camping permit',
      text: 'Permits come from the Ranger Base and camping fees apply, but YAC\'s visitor page does not give an amount (YAC, n.d.-c). We have not costed the fee.',
    },
    {
      when: 'Before July',
      title: 'Confirm access and the road',
      text: 'The Queensland Parks page for Lama Lama National Park says the park is typically closed from 1 December to 30 June, and that the dates may vary with the weather and the roads (Queensland Department of the Environment, Tourism, Science and Innovation, 2024). That page does not say whether the same dates apply at Port Stewart, so we ask YAC for the real access dates and the state of the road. We plan no fieldwork before July.',
    },
    {
      when: 'On arrival',
      title: 'Check in and stay where we are told',
      text: 'The Ranger Base is attended daily from 8 am to 4.30 pm (YAC, n.d.-c), so the crew must arrive before 4.30 pm on the second day. Living areas are private property (YAC, n.d.-c), so we go only where YAC invites us. The Warokutal Safari Camp at Port Stewart has water that is not drinkable (YAC, n.d.-c), so we carry our own drinking water.',
    },
  ];

  const steps = [
    {
      n: '1',
      title: 'Check what is already there',
      text: 'During the July site visit, inspect the pump, cables and header tanks. Measure the real flow and pressure to check the 33.3 L/min design flow.',
    },
    {
      n: '2',
      title: 'Build for storms',
      text: 'A concrete slab above flood level, poured in July so it has cured before the equipment arrives. Tie-downs and corrosion-resistant fittings, using Queensland cyclone guidance for homes as a guide (QRA, 2019). An engineer would check the final design.',
    },
    {
      n: '3',
      title: 'Deliver in the dry season',
      text: 'Have the parts delivered to Cairns first, then send them north in August. In the wet season freight can take two to five business days longer, and when roads close carriers may switch to barge or air freight (Best Rated Transport, 2026). Road closures can last up to five months a year (TMR, 2023).',
    },
    {
      n: '4',
      title: 'Train the local operators',
      text: 'Hands-on training for the Rangers and local operators on backwashing and the test kits. Leave a quick guide and a box of spare parts on site. Training for the rainwater system is already planned (EWB, 2025), so ours could be run alongside it.',
    },
  ];

  const card = 'rounded-xl bg-slate-50 border border-slate-200 p-4';

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={9}
        title="Implementation and Considerations"
        subtitle="When things happen, whether ten days is enough, how we ask permission to stay, and what life looks like after the system is installed."
        assignedAuthor="Huy Truong"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Working with the community first</h2>
        <p className="text-slate-700 leading-relaxed">
          This is Lama Lama Country, so we do not start building until we have agreed each step with YAC, the Lama
          Lama Rangers and the Elders (YAC, n.d.-b). Any digging, slab pouring or trenching has to follow the cultural
          heritage duty of care in the <em>Aboriginal Cultural Heritage Act 2003</em> (Qld) s 23, which requires anyone
          carrying out an activity to take reasonable and practicable measures to avoid harming Aboriginal cultural
          heritage.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Permission to enter and stay</h2>
        <p className="text-slate-700 leading-relaxed">
          Port Stewart is Lama Lama Country, so the crew can only work there with the community's agreement. The Lama
          Lama Land Trust authorises decisions about what happens on Country, and YAC manages projects on behalf of the
          Lama Lama people (YAC, n.d.-b). The crew cannot simply arrive and start work. We treat permission as a step
          with a date, and the work does not start without it. This is our plan for asking. We have not yet contacted
          YAC about these dates.
        </p>
        <ol className="space-y-3">
          {permission.map((p) => (
            <li key={p.title} className="flex flex-col sm:flex-row gap-1 sm:gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span className="shrink-0 sm:w-28 text-sm font-bold text-[#065A82] sm:pt-0.5">{p.when}</span>
              <div>
                <h3 className="font-bold text-[#21295C]">{p.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed mt-1">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-slate-700 leading-relaxed">
          If YAC does not agree, we do not build. If only the dates do not work, the reserve month in October holds the
          trip.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Timeline</h2>
        <p className="text-slate-700 leading-relaxed">
          Figure 10 shows a one-year plan that starts in January. The weather decides the order of the work. Funding,
          quotes and permission are office tasks, so they happen in the wet season, when the roads may be cut. The two
          trips wait for the dry season (June to October), when each month gets less than 60 mm of rain on average
          (BOM, 2026): the site visit in July and the installation in September. October is kept free as a reserve.
        </p>

        <figure className="w-full">
          <ArtefactLabel label="Figure 10" title="Gantt Chart for the Implementation Plan" className="mb-2" />
          {/* Phone: one card per task. From tablet width: the full chart below. */}
          <ol className="md:hidden space-y-2">
            {TASKS.map((t) => (
              <li key={t.name} className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-[#21295C] text-sm leading-snug">{t.name}</span>
                  <span className="shrink-0 text-xs font-bold text-slate-700 whitespace-nowrap">{monthRange(t)}</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{t.who}</div>
                <div className="mt-2 grid grid-cols-12 h-4 rounded overflow-hidden border border-slate-200">
                  {MONTHS.map((m, i) => (
                    <div key={m} className={WET[i] ? 'bg-sky-50' : 'bg-white'}>
                      {i >= t.start && i <= t.end && <div className={`h-full ${t.color}`} />}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-12 text-xs text-slate-500 leading-none mt-1" aria-hidden="true">
                  {MONTHS.map((m) => (
                    <span key={m} className="text-center">
                      {m[0]}
                    </span>
                  ))}
                </div>
                {t.note && <div className="text-xs text-slate-600 mt-2">{t.note}</div>}
              </li>
            ))}
          </ol>
          <div className="hidden md:block">
            <ScrollHint />
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <div className="min-w-[980px]">
                {/* header */}
                <div className="grid grid-cols-[300px_repeat(12,minmax(0,1fr))] text-xs font-semibold text-slate-600 border-b border-slate-200">
                  <div className="p-2">Task</div>
                  {MONTHS.map((m, i) => (
                    <div key={m} className={`p-2 text-center ${WET[i] ? 'bg-sky-50 text-sky-800' : ''}`}>
                      {m}
                    </div>
                  ))}
                </div>
                {/* rows */}
                {TASKS.map((t) => (
                  <div
                    key={t.name}
                    className="grid grid-cols-[300px_repeat(12,minmax(0,1fr))] items-stretch border-b border-slate-100 text-xs"
                  >
                    <div className="p-2 pr-3 self-center">
                      <div className="font-semibold text-[#21295C] leading-snug">{t.name}</div>
                      <div className="text-slate-500">{t.who}</div>
                    </div>
                    {MONTHS.map((m, i) => {
                      const inBar = i >= t.start && i <= t.end;
                      return (
                        <div key={m} className={`min-h-11 flex items-center ${WET[i] ? 'bg-sky-50' : ''}`}>
                          {inBar && (
                            <div
                              className={`h-5 w-full ${t.color} ${i === t.start ? 'rounded-l' : ''} ${i === t.end ? 'rounded-r' : ''}`}
                              title={t.note || t.name}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 bg-sky-100 border border-sky-200" /> Wet season (December to April)
            </span>
            <span>
              Violet = community agreement and permission · blue = funding and quotes · amber = site visit · green =
              buying and freight · red = installation · grey = reserve month · teal = monitoring and review
            </span>
          </div>
          <figcaption className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
            Created by the project team. Wet season shading is based on mean monthly rainfall at Lockhart River Airport
            (BOM, 2026), used as a regional guide. The start month is our assumption. If funding or permission arrives
            late, the trips move to the next dry season, not into the wet season.
          </figcaption>
        </figure>
        <ArtefactNote
          why="The order of the work depends on the seasons and on permission to enter Country, so the chart shows when each step happens and who is involved."
          tells="Permission has to be agreed by the end of June, and funding has to be confirmed before the equipment is ordered. If either slips past October, the trips wait for the next dry season."
        />

        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed pt-2">
          <div className={card}>
            <h3 className="font-bold text-[#21295C] mb-1">When do we get the money?</h3>
            <p>
              Funding applications run from January to April and supplier quotes from March to May. Funding needs to be
              confirmed by June, because the July site visit is the first money we spend. The equipment is ordered
              after that visit. How long a grant decision takes depends on the funder, and we do not have a figure.
            </p>
          </div>
          <div className={card}>
            <h3 className="font-bold text-[#21295C] mb-1">When does the labour come in?</h3>
            <p>
              The engineer travels twice: in July for the site visit ({VISIT_ON_SITE_DAYS} days on site) and in September
              for the installation. The plumber travels once, in September, and works on site for about {ON_SITE_DAYS}{' '}
              days. The engineer is costed for {ENGINEER_DAYS} of those days. Training happens at the end of the visit,
              so the operators learn on the finished unit.
            </p>
          </div>
          <div className={card}>
            <h3 className="font-bold text-[#21295C] mb-1">What if the weather turns?</h3>
            <p>
              If the wet season starts early or a road closes, freight can be delayed (Best Rated Transport, 2026), and
              the crew might have to stay longer. That is one reason for the 20–25% contingency. The plan keeps October
              free as a reserve, before the rain gets heavier in November and December (BOM, 2026).
            </p>
          </div>
          <div className={card}>
            <h3 className="font-bold text-[#21295C] mb-1">What about the pump in the dry season?</h3>
            <p>
              The site visit in July checks the pump and the intake. In each dry season the river level can fall below
              the sand in the riverbed (EWB, n.d.). If the level is too low to supply the unit, the project would wait
              for the new intake that Arup designed, whose construction funding was still being sought on EWB's project
              page (EWB, n.d.).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Is ten days enough?</h2>
        <p className="text-slate-700 leading-relaxed">
          The installation trip takes {DAYS_AWAY} days from Cairns and back: {TRAVEL_DAYS} days of driving and{' '}
          {ON_SITE_DAYS} days at Port Stewart. We think {ON_SITE_DAYS} days on site is enough, because the slab is already
          poured and cured when the crew arrives. The crew only has to set the equipment on it, connect it, test it and
          train the operators. This is our estimate. We have not asked a plumber how long the job takes, so the plumber
          quote in Figure 10 (March to May) is the first check.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Table 13 shows what happens on each day, and where the plan is tight. Every on-site day has a job in it, so
          there is no spare day. The crew also has to reach the Ranger Base before it closes at 4.30 pm on the second
          day (YAC, n.d.-c). If they are late, check-in moves to the next morning. We have not found a published driving
          time from Cairns to Port Stewart, so two driving days each way is our assumption. For scale, NRMA's Cape York
          road trip drives from Cairns to Coen through Cooktown in three legs of 244, 175 and 220 km, with 6, 2 and 5
          hours of driving (NRMA, 2018). Adding those legs gives 639 km and 13 hours. The road to Port Stewart is a
          different route, so this is only a rough guide.
        </p>

        <ArtefactLabel label="Table 13" title="Day-by-Day Plan for the Site Visit and the Installation Trip" />
        {/* Phone: one card per trip, one row per day. From tablet width: the table below. */}
        <div className="md:hidden space-y-4">
          {TRIPS.map((trip) => (
            <div key={trip.title} className="rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-[#E2EDF3] p-3 text-sm font-bold text-[#21295C]">{trip.title}</div>
              <ol className="divide-y divide-slate-200">
                {trip.rows.map((r) => (
                  <li key={trip.title + r.day} className="p-3 text-sm text-slate-700">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-bold text-[#21295C]">{r.day}</span>
                      <span className="text-xs font-semibold text-slate-600">{r.where}</span>
                    </div>
                    <p className="mt-1 leading-relaxed">{r.what}</p>
                    <p className="mt-1 text-xs text-slate-600">
                      <span className="font-semibold">Who works: </span>
                      {r.who}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <ScrollHint />
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[860px]">
              <thead>
                <tr className="bg-[#21295C] text-white text-sm">
                  <th className="p-3 w-28">Day</th>
                  <th className="p-3 w-36">Where</th>
                  <th className="p-3">What happens</th>
                  <th className="p-3 w-52">Who works (hours costed)</th>
                </tr>
              </thead>
              {TRIPS.map((trip) => (
                <tbody key={trip.title} className="divide-y divide-slate-200 text-sm text-slate-700">
                  <tr className="bg-[#E2EDF3]">
                    <th colSpan={4} className="p-3 font-bold text-[#21295C] text-left">
                      {trip.title}
                    </th>
                  </tr>
                  {trip.rows.map((r) => (
                    <tr key={trip.title + r.day} className="align-top">
                      <td className="p-3 font-semibold text-[#21295C] whitespace-nowrap">{r.day}</td>
                      <td className="p-3 whitespace-nowrap">{r.where}</td>
                      <td className="p-3">{r.what}</td>
                      <td className="p-3">{r.who}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. The on-site hours match Tables 8 and 10. Driving days carry travel costs but no
          labour cost. The two driving days each way are our assumption. The route and the Ranger Base opening hours come
          from YAC (n.d.-c).
        </p>
        <ArtefactNote
          why="We wanted to check that the job fits into the days we have costed, and to see which days have no room to slip."
          tells="Every on-site day has a job in it, so ten days is enough only if nothing goes wrong. The plan depends on three protections: the slab is poured earlier, we ask for extra days of permission, and October is kept free."
        />

        <div className="grid md:grid-cols-2 gap-4 pt-2 text-sm text-slate-700 leading-relaxed">
          <div className={card}>
            <h3 className="font-bold text-[#21295C] mb-1">What a delay costs</h3>
            <p>
              Each extra day away costs about {money(EXTRA_DAY_COST)} for the two people's accommodation, meals and
              incidentals, or {money(EXTRA_DAY_WAITING)} with the vehicle. If both people are also working that day, it
              costs about {money(EXTRA_DAY_WORKING)}. The contingency in{' '}
              <CrossLink page="costs" anchor="table-7" onNavigate={onNavigate}>
                Table 7
              </CrossLink>{' '}
              is {money(CONTINGENCY_LOW)}–{money(CONTINGENCY_HIGH)}. At the low end it pays for about{' '}
              {CONTINGENCY_WAITING_DAYS} extra days of waiting, or {CONTINGENCY_WORKING_DAYS} extra days of work
              ({CONTINGENCY_HIGH_WORKING_DAYS} at the high end), if nothing else uses it.
            </p>
          </div>
          <div className={card}>
            <h3 className="font-bold text-[#21295C] mb-1">Two changes that would cost more</h3>
            <p>
              If the engineer stays on site for all {ON_SITE_DAYS} days and not only the {ENGINEER_DAYS} we costed, we add{' '}
              {money(ENGINEER_FULL_STAY_EXTRA)}. If the drive north and the drive back each need one more day, we add{' '}
              {money(EXTRA_DRIVING_DAYS_COST)}. Each fits inside the contingency, but they would use it up quickly
              together with any other delay.
            </p>
          </div>
          <div className={card}>
            <h3 className="font-bold text-[#21295C] mb-1">What protects the schedule</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The slab is poured on the July visit, so it is not on the critical path in September.</li>
              <li>We ask YAC for {PERMIT_EXTRA_DAYS} extra days of permission. Unused days cost nothing.</li>
              <li>October is free for a trip that a road closure or late freight has cancelled.</li>
            </ul>
          </div>
          <div className={card}>
            <h3 className="font-bold text-[#21295C] mb-1">If the delay is longer than that</h3>
            <p>
              We stop, tell YAC and agree what to do next. We do not add working days we cannot pay for. We have also not
              planned the slab pour in detail (where the concrete comes from, and who mixes it). It sits inside the{' '}
              <CrossLink page="costs" anchor="table-7" onNavigate={onNavigate}>
                groundworks allowance
              </CrossLink>
              , and it is the largest unknown in the schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Four steps on the ground</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#21295C] text-white flex items-center justify-center font-bold text-sm shrink-0">{s.n}</div>
              <div>
                <h3 className="font-bold text-[#21295C]">{s.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed mt-1">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
          After installation: Geoff's journey map
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Geoff is the persona from the Empathise page. This is his journey map redrawn for after the system is
          installed. It is what we expect to happen, not something we have measured. We also list what could still go
          wrong.
        </p>
        <ArtefactLabel label="Table 14" title="Geoff's Expected Journey Map After Installation" />
        {/* Phone: one card per stage. From tablet width: the table below. */}
        <div className="md:hidden space-y-3">
          {stages.map((stage, si) => (
            <div key={stage} className="rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-[#21295C] p-3 text-sm font-bold text-white">{stage}</div>
              <dl className="divide-y divide-slate-200 text-sm text-slate-700">
                {after.map((r) => (
                  <div key={r.row} className="p-3">
                    <dt className="font-semibold text-[#21295C]">{r.row}</dt>
                    <dd className="mt-0.5 leading-relaxed">{r.cells[si]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <ScrollHint />
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#21295C] text-white text-sm">
                  <th className="p-3 w-44" />
                  {stages.map((s) => (
                    <th key={s} className="p-3">{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                {after.map((r) => (
                  <tr key={r.row} className="align-top">
                    <td className="p-3 font-semibold text-[#21295C] bg-slate-50">{r.row}</td>
                    {r.cells.map((c, i) => (
                      <td key={i} className="p-3">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. The persona and the expected events come from our desktop research and design
          choices, not from interviews. The hour a week for backwashing is our assumption (Table 11 on the Costs page).
        </p>
        <ArtefactNote
          why="We wanted to test whether the design improves Geoff's day, and to look for problems the system might create."
          tells="Most of the improvement depends on training and spare parts, not only on the equipment. The biggest risks left are the dry-season river level and losing the trained operator."
        />
      </section>

      <PagePagination currentPageId="implementation" onNavigate={onNavigate} />
    </div>
  );
};
