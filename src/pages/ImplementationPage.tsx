import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ArtefactNote } from '../components/ArtefactNote';
import { MONTHS } from '../data/rainfall';

interface ImplementationPageProps {
  onNavigate: (pageId: PageId) => void;
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
  { name: 'Apply for funding', who: 'Team, EWB, YAC', start: 0, end: 3, color: 'bg-sky-600' },
  { name: 'Get supplier quotes and confirm the budget', who: 'Team', start: 2, end: 4, color: 'bg-sky-600' },
  { name: 'Dry-season site visit and cultural heritage check', who: 'Engineer, YAC', start: 5, end: 5, color: 'bg-amber-600', note: 'Check pump, intake and slab site' },
  { name: 'Buy materials and send to Cairns', who: 'Team', start: 5, end: 5, color: 'bg-emerald-600', note: 'After the site visit confirms the design' },
  { name: 'Freight to Port Stewart', who: 'Freight company', start: 6, end: 6, color: 'bg-emerald-600' },
  { name: 'Slab, installation and pressure test', who: 'Plumber, engineer', start: 7, end: 7, color: 'bg-rose-600', note: '6 days on site' },
  { name: 'Commissioning and operator training', who: 'Engineer, operators', start: 7, end: 7, color: 'bg-rose-600' },
  { name: 'Monitoring: local iron tests and backwash log', who: 'Operators, Rangers', start: 8, end: 10, color: 'bg-teal-600' },
  { name: 'Review with the community', who: 'Team, YAC', start: 10, end: 10, color: 'bg-teal-600' },
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
        'Backwashes the filters by opening valves, checks the gauges and uses spare parts from the storage chest.',
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

  const steps = [
    {
      n: '1',
      title: 'Check what is already there',
      text: 'During the dry-season visit, inspect the pump, cables and header tanks. Measure the real flow and pressure to check the 33.3 L/min design flow.',
    },
    {
      n: '2',
      title: 'Build for storms',
      text: 'A concrete slab above flood level, tie-downs and corrosion-resistant fittings, using Queensland cyclone guidance for homes as a guide (QRA, 2019). An engineer would check the final design.',
    },
    {
      n: '3',
      title: 'Deliver in the dry season',
      text: 'Have the parts delivered to Cairns first, then send them north in the dry months. In the wet season freight can take two to five business days longer, and when roads close carriers may switch to barge or air freight (Best Rated Transport, 2026). Road closures can last up to five months a year (TMR, 2023).',
    },
    {
      n: '4',
      title: 'Train the local operators',
      text: 'Hands-on training for the Rangers and local operators on backwashing and the test kits. Leave a quick guide and a box of spare parts on site. Training for the rainwater system is already planned (EWB, 2025), so ours could be run alongside it.',
    },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={9}
        title="Implementation and Considerations"
        subtitle="When things happen, how the weather changes the plan, and what life looks like after the system is installed."
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
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Timeline</h2>
        <p className="text-slate-700 leading-relaxed">
          Figure 10 shows a one-year plan that starts in January. The weather decides the order of the work. Funding,
          quotes and ordering are office tasks, so they happen in the wet season, when the roads may be cut. Freight
          and building wait for the dry season (June to October), when each month gets less than 60 mm of rain on
          average (BOM, 2026).
        </p>

        <figure className="w-full">
          <div className="mb-2 text-left">
            <div className="font-bold text-sm text-[#21295C]">Figure 10</div>
            <div className="italic text-sm text-slate-800 font-medium">Gantt Chart for the Implementation Plan</div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <div className="min-w-[860px]">
              {/* header */}
              <div className="grid grid-cols-[260px_repeat(12,1fr)] text-xs font-semibold text-slate-600 border-b border-slate-200">
                <div className="p-2">Task</div>
                {MONTHS.map((m, i) => (
                  <div key={m} className={`p-2 text-center ${WET[i] ? 'bg-sky-50 text-sky-800' : ''}`}>
                    {m}
                  </div>
                ))}
              </div>
              {/* rows */}
              {TASKS.map((t) => (
                <div key={t.name} className="grid grid-cols-[260px_repeat(12,1fr)] items-center border-b border-slate-100 text-xs">
                  <div className="p-2 pr-3">
                    <div className="font-semibold text-[#21295C] leading-snug">{t.name}</div>
                    <div className="text-slate-500">{t.who}</div>
                  </div>
                  {MONTHS.map((m, i) => {
                    const inBar = i >= t.start && i <= t.end;
                    return (
                      <div key={m} className={`h-9 flex items-center ${WET[i] ? 'bg-sky-50' : ''}`}>
                        {inBar && (
                          <div
                            className={`h-4 w-full ${t.color} ${i === t.start ? 'rounded-l' : ''} ${i === t.end ? 'rounded-r' : ''}`}
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
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 bg-sky-100 border border-sky-200" /> Wet season (December to April)
            </span>
            <span>
              Violet = community agreement · blue = funding and quotes · amber = site visit · green = buying and freight ·
              red = building and training · teal = monitoring and review
            </span>
          </div>
          <figcaption className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
            Created by the project team. Wet season shading is based on mean monthly rainfall at Lockhart River Airport
            (BOM, 2026), used as a regional guide. The start month is our assumption. If funding arrives late, the
            dry-season tasks move to the next dry season, not into the wet season.
          </figcaption>
        </figure>
        <ArtefactNote
          why="The order of the work depends on the seasons, so the chart shows when each step happens and who is involved."
          tells="Funding and ordering must be finished by about June. If they are not, the project loses the dry season and waits another year."
        />

        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed pt-2">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">When do we get the money?</h3>
            <p>
              Funding applications run from January to April and supplier quotes from March to May. Funding needs to be
              confirmed before materials are ordered in June, after the site visit. How long a grant decision takes
              depends on the funder, and we do not have a figure.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">When does the labour come in?</h3>
            <p>
              The plumber and engineer travel in August. The plumber works on site for about six days and the engineer for
              four. Training happens at the end of the visit, so the operators learn on the finished unit.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">What if the weather turns?</h3>
            <p>
              If the wet season starts early or a road closes, freight can be delayed (Best Rated Transport, 2026), and
              the crew might have to stay longer. That is one reason for the 20–25% contingency, and the plan leaves a
              few months between installation in August and the start of the wet season.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">What about the pump in the dry season?</h3>
            <p>
              The site visit in June checks the pump and the intake. In each dry season the river level can fall below the
              sand in the riverbed (EWB, n.d.). If the level is too low to supply the unit, the project would wait for the
              new intake that Arup designed, whose construction funding was still being sought on EWB's project page
              (EWB, n.d.).
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
        <div className="text-left">
          <div className="font-bold text-sm text-[#21295C]">Table 11</div>
          <div className="italic text-sm text-slate-800 font-medium">Geoff's Expected Journey Map After Installation</div>
        </div>
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
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. The persona and the expected events come from our desktop research and design
          choices, not from interviews.
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
