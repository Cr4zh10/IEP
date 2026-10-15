import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ScrollHint } from '../components/ScrollHint';
import { Figure } from '../components/Figure';
import { ArtefactNote } from '../components/ArtefactNote';
import { ArtefactLabel } from '../components/ArtefactLabel';

interface PrototypePageProps {
  onNavigate: (pageId: PageId) => void;
}

type Status = 'Simulated' | 'Compared with published results' | 'Design check only';

const statusStyle: Record<Status, string> = {
  Simulated: 'bg-emerald-100 text-emerald-800',
  'Compared with published results': 'bg-amber-100 text-amber-800',
  'Design check only': 'bg-slate-200 text-slate-700',
};

/**
 * PAGE 6: PROTOTYPE
 * Abbreviations written out here for the first time: CFD, P&ID.
 */
export const PrototypePage: React.FC<PrototypePageProps> = ({ onNavigate }) => {
  const rows: { id: string; req: string; how: string; result: string; status: Status; next: string }[] = [
    {
      id: 'REQ-01',
      req: 'Remove dissolved iron',
      how: 'Compared the removal we need with four published plants that aerate and then filter (Hiiob & Karro, 2012).',
      result: 'We need at least 76%. Three of the plants removed 92.4–98.0% and one removed 43.3% (Figure 9).',
      status: 'Compared with published results',
      next: 'Test water from the site, because the published plants treat different water.',
    },
    {
      id: 'REQ-02',
      req: 'Simple backwashing',
      how: 'Checked the design against supplier information.',
      result: 'The Alpine Pure Filox filter can be backwashed, and it comes with a manual control valve option (Oz Filter Warehouse, n.d.-a).',
      status: 'Design check only',
      next: 'Have an operator try the backwash on a built unit.',
    },
    {
      id: 'REQ-03',
      req: 'Reuse the existing pump',
      how: 'Computational fluid dynamics (CFD) simulation of the Venturi at the 33.3 L/min design flow.',
      result: 'Water speeds up from 1.13 to 8.17 m/s at the throat and the pressure drops, which is what pulls air in (Figures 7 and 8).',
      status: 'Simulated',
      next: 'Measure the real pump flow and pressure on site. The simulation assumed 33.3 L/min.',
    },
    {
      id: 'REQ-04',
      req: 'Minimise maintenance',
      how: 'Design review: no powered parts and no dosing in the unit.',
      result: 'The treatment train adds no motors, chemical dosing or electronics. The existing pump sits outside the unit.',
      status: 'Design check only',
      next: 'Trial with operators over several months.',
    },
    {
      id: 'REQ-05',
      req: 'Local operator training',
      how: 'Planned in the implementation plan.',
      result: 'A paper check cannot test this.',
      status: 'Design check only',
      next: 'Run training with Rangers and operators on a built unit, and ask for their feedback.',
    },
    {
      id: 'REQ-06',
      req: 'Corrosion-resistant materials',
      how: 'Material selection from supplier information.',
      result: 'The Filox vessels are polyethylene-lined fibreglass-reinforced plastic (Oz Filter Warehouse, n.d.-a) and the settling tank is polyethylene (Clark Tanks, n.d.). Pipework and fittings would be specified with the supplier.',
      status: 'Design check only',
      next: 'Confirm with supplier data sheets.',
    },
    {
      id: 'REQ-07',
      req: 'Wet season and cyclones',
      how: 'Used Queensland cyclone guidance for homes (QRA, 2019) as a guide to tie-downs and corrosion protection.',
      result: 'The guidance was written for houses, not treatment units, and no structural check was done.',
      status: 'Design check only',
      next: 'An engineer checks the footing and tie-down design.',
    },
  ];

  const stages = [
    { n: '1', title: 'Existing pump', text: 'Sends raw river water into the unit at about 33.3 L/min. We are reusing it for now.' },
    {
      n: '2',
      title: 'Venturi aerator',
      text: 'Water speeding through a narrow throat loses pressure and pulls air in with no motor (Britannica Editors, 2026). The oxygen turns dissolved iron into solid particles (SUEZ, n.d.).',
    },
    {
      n: '3',
      title: '2,000 L settling tank',
      text: 'At 33.3 L/min the water stays in the tank for about an hour, so the particles can sink to the bottom drain. Handbooks add a settling step when the iron level is high (SUEZ, n.d.).',
    },
    {
      n: '4',
      title: 'Two backwashable filters',
      text: 'Catch the fine iron. Each filter is rated for 25 L/min and has a manual valve option (Oz Filter Warehouse, n.d.-a).',
    },
    { n: '5', title: 'Existing header tanks', text: 'Treated water flows to the elevated tanks the community already uses (EWB, n.d.).' },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={6}
        title="Prototype"
        subtitle="What our prototype is, what it can and cannot tell us, and which design requirements it tests."
        assignedAuthor="Ethan Illidge"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">What is our prototype?</h2>
        <p className="text-slate-700 leading-relaxed">
          A diagram is not a prototype on its own. A prototype is something we use to test an idea. We have not built a
          physical unit, so our prototype is a virtual one with two parts:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-700 leading-relaxed">
          <li>
            <span className="font-semibold">A simulation of the Venturi aerator</span> in SimScale, which tests whether the
            existing pump flow can pull air into the water without a compressor.
          </li>
          <li>
            <span className="font-semibold">A comparison with real treatment plants</span> that use aeration and
            filtration, which tests whether the iron removal we need is realistic.
          </li>
        </ol>
        <p className="text-slate-700 leading-relaxed">
          The schematic and the concept render further down are design drawings. They show what we would build, but
          they do not test it.
        </p>

        <ArtefactLabel label="Table 6" title="Which Design Requirements the Prototype Tests" />
        <ScrollHint />
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[860px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className="p-3 w-24">No.</th>
                <th className="p-3">Requirement</th>
                <th className="p-3">What we did</th>
                <th className="p-3">What we found</th>
                <th className="p-3 w-40">Status</th>
                <th className="p-3">How it would be tested on site</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {rows.map((r) => (
                <tr key={r.id} className="align-top">
                  <td className="p-3 font-semibold text-[#21295C]">{r.id}</td>
                  <td className="p-3">{r.req}</td>
                  <td className="p-3">{r.how}</td>
                  <td className="p-3">{r.result}</td>
                  <td className="p-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${statusStyle[r.status]}`}>{r.status}</span>
                  </td>
                  <td className="p-3">{r.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. Simulated means tested in a computer model. Compared means checked against
          published results. Design check only means reviewed on paper, with no test.
        </p>
        <ArtefactNote
          why="This table says plainly which requirements the prototype tests and which it does not."
          tells="The prototype tests two technical risks, air suction and iron removal, and only on paper. Everything about operation, materials and cyclones needs a built unit or an engineer's check."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">How the treatment train works</h2>
        <p className="text-slate-700 leading-relaxed">
          Aeration followed by filtration is an established way to remove iron (Swistock et al., 2025). Our unit has
          five stages (Figure 5).
        </p>
        <ol className="grid md:grid-cols-5 gap-3">
          {stages.map((s) => (
            <li key={s.n} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="w-7 h-7 rounded-full bg-[#21295C] text-white text-sm font-bold flex items-center justify-center mb-2">{s.n}</div>
              <h3 className="font-bold text-[#21295C] text-sm">{s.title}</h3>
              <p className="text-xs text-slate-700 leading-relaxed mt-1">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Design drawings</h2>
        <Figure
          number="Figure 5"
          title="Prototype Treatment Schematic"
          file="figure-2-schematic.png"
          alt="Schematic of the treatment train from the existing river pump to the existing header tanks"
          credit="Created by Ethan Illidge. The piping and instrumentation diagram (P&ID) shows the pipe route, the Venturi aerator, the 2,000 L settling tank, two filters in parallel and the existing header tanks."
        />
        <ArtefactNote
          why="The cost, installation plan and tests all need to describe the same system, so we drew it once."
          tells="The unit is small. The treatment area is about 4.0 m by 3.0 m and the tallest equipment is about 2.3 m. The design flow is 33.3 L/min, shared by two filters in parallel."
        />
        <Figure
          number="Figure 6"
          title="Concept Render of the Proposed Treatment System"
          file="concept-render.png"
          alt="Concept render of the proposed iron removal system on a platform under a roof, with the settling tank, two filters and the existing pump"
          credit="Image generated with ChatGPT (OpenAI, 2026) from the team's schematic. It is an illustration, not a photograph or an engineered drawing. It adds details that are not in our design, such as lighting and an electrical box."
        />
        <ArtefactNote
          why="A picture helps the community and other readers imagine the finished unit under a roof."
          tells="The overall layout and the size of the equipment. The render shows a cone-bottom tank, but the 2,000 L Clark tank we priced is a standard round tank, so the final tank type would be agreed with the supplier."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Key components</h2>
        <div className="space-y-3 text-slate-700 leading-relaxed">
          <p>
            <span className="font-semibold text-[#21295C]">Venturi aerator.</span> Water is forced through a narrow
            throat. It speeds up and its pressure drops, which draws air in through a side port with no motor
            (Britannica Editors, 2026). Commercial venturi injectors work this way and have no moving parts (Mazzei
            Injector Company, n.d.).
          </p>
          <p>
            <span className="font-semibold text-[#21295C]">Settling tank.</span> A 2,000 L polyethylene tank (Clark
            Tanks, n.d.). At 33.3 L/min, 2,000 L takes about an hour to pass through. That gives the heavier iron
            particles time to sink instead of loading the filters. We chose this time ourselves, because we did not find
            a published figure for it. It would be checked with Stewart River water.
          </p>
          <p>
            <span className="font-semibold text-[#21295C]">Backwashable filters.</span> Two filter vessels that can be
            cleaned by backwashing, which sends the captured iron to a drain. The supplier offers a manual valve or an
            automatic valve (Oz Filter Warehouse, n.d.-a). We chose the manual valve, so that no electronics are needed.
            Each filter is rated for 25 L/min, so the two together can take the 33.3 L/min design flow. While one filter
            is being backwashed the other carries the whole flow, which is above its rating, so backwashing should be
            done when demand is low. How often backwashing is needed depends on the real iron load, which we have not
            measured.
          </p>
        </div>
      </section>

      <PagePagination currentPageId="prototype" onNavigate={onNavigate} />
    </div>
  );
};
