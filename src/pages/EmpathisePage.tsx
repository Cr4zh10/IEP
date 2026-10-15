import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ScrollHint } from '../components/ScrollHint';
import { RainbowDiagram } from '../components/RainbowDiagram';
import { STAKEHOLDERS, Level } from '../data/stakeholders';
import { ArtefactNote } from '../components/ArtefactNote';
import { ArtefactLabel } from '../components/ArtefactLabel';

const INFLUENCE: Record<Level, string> = {
  most: 'Most influence',
  moderate: 'Moderate influence',
  least: 'Least influence',
};
const AFFECTED: Record<Level, string> = {
  most: 'most affected',
  moderate: 'moderately affected',
  least: 'least affected',
};

interface EmpathisePageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * PAGE 3: EMPATHISE
 * No new abbreviations are written out here. YAC, EWB, TMR, ADWG and NWGA are already defined.
 */
export const EmpathisePage: React.FC<EmpathisePageProps> = ({ onNavigate }) => {
  const stages = ['Daily life', 'Maintenance', 'Testing and usage'];
  const journey: { row: string; cells: string[] }[] = [
    {
      row: 'Emotional experience',
      cells: [
        'Disgust at the smell and condition of the water.',
        'Frustration when maintenance attempts fail.',
        'Distress when the clean water output is not enough for the community.',
      ],
    },
    {
      row: 'Events',
      cells: [
        'Relies on stored water and an inconsistent supply.',
        'Checks iron contamination in the system.',
        'Tests the output at taps connected to the main source.',
      ],
    },
    {
      row: 'Breakthrough',
      cells: [
        'Learns that better filtration systems exist.',
        'Sees the flaws in the current system.',
        'Identifies the core problems with the system.',
      ],
    },
    {
      row: 'Pain points',
      cells: [
        'Cannot use most of the water because of contamination.',
        'The wet season makes it hard to work on the system.',
        'The output does not meet expectations.',
      ],
    },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={3}
        title="Empathise: Research and Journey Map"
        subtitle="What we found from desktop research, and what daily life with the water supply looks like for the person who looks after it."
        assignedAuthor="Tan Dong & Huy Truong"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">What the research told us</h2>
        <p className="text-slate-700 leading-relaxed">
          We could not visit Port Stewart, so our research was desktop research: the EWB design brief, EWB project pages
          and blog posts about Arup's design, the EWB Challenge forum, and published guidelines. Four findings shaped the rest of the
          project.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">1. Iron is the main problem</h3>
            <p>
              Two bores measured iron at 1.01 mg/L and 1.25 mg/L, above the ADWG guideline of 0.3 mg/L (Todio, 2026).
              Dissolved iron turns into solid particles when it meets oxygen, and a filter has to catch them and be
              backwashed (Swistock et al., 2025).
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">2. The existing filter is not working</h3>
            <p>
              A reply on the EWB Challenge forum says the iron filter installed in 2018 has been bypassed for most of
              the time since, and that it is not clear which part is broken (Todio, 2026). We treat it as not working.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">3. Rainwater does not cover every use</h3>
            <p>
              Rainwater covers drinking but not other household uses (EWB, 2026). The forum asks teams to assume about
              40 people (Todio, 2026), and a news report says the Lama Lama population can double to nearly 100 people
              in the dry season (Prestipino, 2024).
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">4. Seasons and distance make repairs hard</h3>
            <p>
              The river level drops in the dry season (EWB, n.d.), and wet-season floods can close the roads for months
              (TMR, 2023). Parts and technicians can take a long time to arrive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Stakeholder rainbow diagram</h2>
        <p className="text-slate-700 leading-relaxed">
          Before we wrote requirements we asked who this project touches. A rainbow diagram sorts stakeholders in two
          ways at once (Chevalier & Buckles, 2008). The three sectors show how much influence a stakeholder has over
          the project. The three rings show how much the project affects them, with the most affected in the centre. We
          placed each stakeholder using what we found in our research.
        </p>
        <div id="rainbow-export" className="space-y-3 bg-white">
          <ArtefactLabel label="Figure 3" title="Stakeholder Rainbow Diagram for Water Treatment at Port Stewart" />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-5">
            <div className="grid xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-5 xl:gap-8 items-center">
              <div className="w-full max-w-3xl mx-auto xl:max-w-none">
                <RainbowDiagram />
                <p className="sm:hidden mt-3 text-sm text-slate-700 leading-snug">
                  <span className="font-semibold text-[#21295C]">How to read it:</span> the left wedge has the most
                  influence, the middle wedge moderate influence and the right wedge the least. The closer a number is
                  to the centre, the more the project affects that stakeholder.
                </p>
              </div>
              <div>
                <div className="font-bold text-[#21295C] mb-3">Key</div>
                <ol className="space-y-3">
                  {STAKEHOLDERS.map((st) => (
                    <li key={st.n} className="flex gap-3 items-start">
                      <span className="w-8 h-8 rounded-full bg-[#21295C] text-white text-sm font-bold flex items-center justify-center shrink-0">
                        {st.n}
                      </span>
                      <span className="leading-snug">
                        <span className="font-semibold text-[#21295C] block">{st.name}</span>
                        <span className="text-xs text-slate-600">
                          {INFLUENCE[st.influence]} · {AFFECTED[st.affected]}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Created by the project team using the rainbow diagram format in Chevalier and Buckles (2008). The positions
            are the team's judgement from the sources under "Why we placed each stakeholder where we did".
          </p>
        </div>
        <ArtefactNote
          why="Before writing requirements, we wanted to know who the project affects and who can decide whether it goes ahead."
          tells="The people most affected (Elders, the Land Trust, YAC, the Rangers and residents) are also the ones whose agreement is needed or who would run the unit. Funders and EWB have influence but are little affected by water quality. So the unit has to be simple to run, the community has to agree to it first, and the Rangers and local operators need training."
        />

        <h3 className="font-bold text-[#21295C] text-lg pt-2">Why we placed each stakeholder where we did</h3>
        <ol className="space-y-3">
          {STAKEHOLDERS.map((st) => (
            <li key={st.n} className="flex gap-3 items-start rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span className="w-8 h-8 rounded-full bg-[#21295C] text-white text-sm font-bold flex items-center justify-center shrink-0">
                {st.n}
              </span>
              <span className="text-slate-700 leading-relaxed">
                <span className="font-semibold text-[#21295C]">{st.name}.</span> {st.why}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">User journey map: Geoff today</h2>
        <p className="text-slate-700 leading-relaxed">
          Geoff is our persona, a local technician at Port Stewart. He stands for the kind of person who would operate
          and look after our system, so we followed his day through three stages. The map describes how the current
          system affects him. It is based on our research, not on an interview.
        </p>
        <ArtefactLabel label="Table 2" title="Geoff's Journey Map With the Current Water System" />
        <ScrollHint />
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className="p-3 w-44" />
                {stages.map((s) => (
                  <th key={s} className="p-3">
                    {s}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {journey.map((r) => (
                <tr key={r.row} className="align-top">
                  <td className="p-3 font-semibold text-[#21295C] bg-slate-50">{r.row}</td>
                  {r.cells.map((c, i) => (
                    <td key={i} className="p-3">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. The persona and the stages come from our desktop research.
        </p>
        <ArtefactNote
          why="Water chemistry tells only half the story, so we followed the person who would look after the system."
          tells="Geoff's biggest problems are repairs that fail and a supply that cannot be trusted. That is why backwashing has to be simple, and why we draw his day again after installation on the Implementation page."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Four things the design must respect</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Low energy and low maintenance</h3>
            <p>
              Advanced treatment can use a lot of chemicals and energy (Molloy, 2022). The option EWB and Arup prefer
              needs no power or chemicals, and EWB describes the design as within the technical and financial capacity of YAC to operate and maintain (EWB, n.d.). We
              avoid electrical equipment and chemical dosing.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Little harm to the environment</h3>
            <p>No chemicals discharged to the river. Iron solids from backwashing are drained away from the supply.</p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Community ownership</h3>
            <p>
              Rangers and local operators should be able to understand, test and look after the unit themselves.
              Community members are due to receive training for the new rainwater system (EWB, 2025).
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Low running costs</h3>
            <p>The community is small, so parts and consumables must be cheap and few.</p>
          </div>
        </div>
      </section>

      <PagePagination currentPageId="empathise" onNavigate={onNavigate} />
    </div>
  );
};
