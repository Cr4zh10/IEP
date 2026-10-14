import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ArtefactNote } from '../components/ArtefactNote';

interface PrototypePageProps {
  onNavigate: (pageId: PageId) => void;
}

type Status = 'Tested' | 'Partly tested' | 'Not tested yet';

const statusStyle: Record<Status, string> = {
  Tested: 'bg-emerald-100 text-emerald-800',
  'Partly tested': 'bg-amber-100 text-amber-800',
  'Not tested yet': 'bg-slate-200 text-slate-700',
};

/**
 * PAGE 6: PROTOTYPE
 * New abbreviations defined here: CFD, P&ID.
 */
export const PrototypePage: React.FC<PrototypePageProps> = ({ onNavigate }) => {
  const rows: { id: string; req: string; how: string; result: string; status: Status; next: string }[] = [
    {
      id: 'REQ-01',
      req: 'Remove dissolved iron',
      how: 'Compared the required removal with results from published aeration and filtration plants.',
      result: 'We need at least 76%. Three comparable plants achieved 92.4–98.0% (Figure 9).',
      status: 'Partly tested',
      next: 'Test real Stewart water on site, because published plants used different water.',
    },
    {
      id: 'REQ-02',
      req: 'Simple backwashing',
      how: 'Checked the design against supplier information.',
      result: 'The Filox filter is a backwashable tank that comes with a manual control valve option (Oz Filter Warehouse, n.d.).',
      status: 'Not tested yet',
      next: 'Have an operator try the backwash on a real unit.',
    },
    {
      id: 'REQ-03',
      req: 'Reuse the existing pump',
      how: 'Computational fluid dynamics (CFD) simulation of the Venturi at the 33.3 L/min design flow.',
      result: 'Water speeds up from 1.13 to 8.17 m/s at the throat and the pressure drops, which is what pulls air in (Figures 7 and 8).',
      status: 'Partly tested',
      next: 'Measure the real pump flow and pressure. The simulation assumed 33.3 L/min.',
    },
    {
      id: 'REQ-04',
      req: 'Minimise maintenance',
      how: 'Design review: no powered parts, no dosing.',
      result: 'The treatment train has no motors, chemical dosing or electronics.',
      status: 'Not tested yet',
      next: 'Trial with operators over several months.',
    },
    {
      id: 'REQ-05',
      req: 'Local operator training',
      how: 'Planned in the implementation plan.',
      result: 'No test yet.',
      status: 'Not tested yet',
      next: 'Run training with Rangers and operators, and get their feedback.',
    },
    {
      id: 'REQ-06',
      req: 'Corrosion-resistant materials',
      how: 'Material selection from supplier information.',
      result: 'Polyethylene and stainless steel parts were chosen.',
      status: 'Not tested yet',
      next: 'Confirm with supplier data sheets.',
    },
    {
      id: 'REQ-07',
      req: 'Wet season and cyclones',
      how: 'Followed Queensland cyclone guidance (QRA, 2019) for slab and tie-downs.',
      result: 'No structural test was done.',
      status: 'Not tested yet',
      next: 'Engineer to check the footing and tie-down design.',
    },
  ];

  const stages = [
    { n: '1', title: 'Existing pump', text: 'Sends raw river water into the unit at about 33.3 L/min. We are reusing it for now.' },
    { n: '2', title: 'Venturi aerator', text: 'Water speeding up through a narrow throat pulls air in without electricity, so dissolved iron becomes solid particles (Mazzei Injector Company, n.d.).' },
    { n: '3', title: '1,000 L settling tank', text: 'At 33.3 L/min the water stays in the tank for about 30 minutes, so heavy particles sink to the bottom drain (Clark Tanks, 2025; Penn State Extension, 2024).' },
    { n: '4', title: 'Two backwashable filters', text: 'Catch the fine iron. Backwashable tanks that can be cleaned with a manual valve (Oz Filter Warehouse, n.d.).' },
    { n: '5', title: 'Existing header tanks', text: 'Treated water flows to the tanks the community already uses.' },
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
          Diagrams are not prototypes on their own. A prototype is something we use to test an idea. We have not built
          a physical unit, so our prototype is a virtual one with two parts:
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

        <div className="text-left">
          <div className="font-bold text-sm text-[#21295C]">Table 6</div>
          <div className="italic text-sm text-slate-800 font-medium">Which Design Requirements the Prototype Tests</div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[860px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className="p-3 w-24">No.</th>
                <th className="p-3">Requirement</th>
                <th className="p-3">What we did</th>
                <th className="p-3">What we found</th>
                <th className="p-3 w-32">Status</th>
                <th className="p-3">Still to do</th>
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
        <ArtefactNote
          why="Our tutor asked which design requirements we are testing. This table answers that, and it is honest about what is still untested."
          tells="We have partly tested the two technical risks (iron removal and air suction). Everything about operation, materials and cyclones still needs checking before building."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">How the treatment train works</h2>
        <p className="text-slate-700 leading-relaxed">
          Aeration followed by filtration is an established way to remove iron (Penn State Extension, 2024). Our unit
          has five stages (Figure 5).
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
        <ImagePlaceholder
          figureNumber="Figure 5"
          figureTitle="Prototype Treatment Schematic"
          imageFile="figure-2-schematic.png"
          noteText="Piping and instrumentation diagram (P&ID) drawn by Ethan Illidge. It shows the pipe route, the Venturi aerator, the settling tank, two filters in parallel and the existing header tanks."
          altText="Schematic of the treatment train from the existing river pump to the existing header tanks"
        />
        <ArtefactNote
          why="To have one clear drawing of what we propose, so that the cost, installation and testing are all about the same system."
          tells="The unit is small: about 4.0 m by 3.0 m, with a design flow of 33.3 L/min and two filters in parallel so that one can be cleaned while the other works."
        />
        <ImagePlaceholder
          figureNumber="Figure 6"
          figureTitle="Concept Render of the Proposed Treatment System"
          imageFile="concept-render.png"
          noteText="Concept image generated with ChatGPT (OpenAI, 2026) from the team's schematic. It is an illustration of what the unit could look like, not a photograph or an engineered drawing."
          altText="Concept render of the proposed iron removal system on a concrete slab under a shade roof"
        />
        <ArtefactNote
          why="To help the community and our tutors picture the finished unit on a slab with a roof."
          tells="The overall layout and the size of the equipment. Details such as the exact fittings are not final."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Key components</h2>
        <div className="space-y-3 text-slate-700 leading-relaxed">
          <p>
            <span className="font-semibold text-[#21295C]">Venturi aerator.</span> Water is forced through a narrow
            throat. It speeds up and its pressure drops, which draws air in through a side port with no motor
            (Mazzei Injector Company, n.d.).
          </p>
          <p>
            <span className="font-semibold text-[#21295C]">Settling tank.</span> A 1,000 L polyethylene tank (Clark Tanks,
            2025). At 33.3 L/min, 1,000 L takes about 30 minutes to pass through. That gives heavier iron particles time
            to sink instead of loading the filters.
          </p>
          <p>
            <span className="font-semibold text-[#21295C]">Backwashable filters.</span> Two filter vessels that can be
            cleaned by backwashing, which sends the captured iron to a drain. The supplier offers a manual valve or an
            automatic valve (Oz Filter Warehouse, n.d.). We chose to plan for the manual valve, so that no electronics
            are needed. How often backwashing is needed depends on the real iron load, which we have not measured.
          </p>
        </div>
      </section>

      <PagePagination currentPageId="prototype" onNavigate={onNavigate} />
    </div>
  );
};
