import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ArtefactNote } from '../components/ArtefactNote';

interface EmpathisePageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * PAGE 3: EMPATHISE
 * New abbreviation defined here: CSIRO.
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
          We could not visit Port Stewart, so our research was desktop research: the EWB design brief, EWB and Arup
          project pages, the EWB Challenge forum, and published guidelines. Four findings shaped the rest of the
          project.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">1. Iron is the main problem</h3>
            <p>
              Iron measured at two bores was 1.01 mg/L and 1.25 mg/L, above the ADWG guideline of 0.30 mg/L (EWB
              Challenge, n.d.). Iron blocks filters, which is why earlier treatment stopped working (EWB, 2026).
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">2. The existing filter is not working</h3>
            <p>
              The iron filter installed in 2018 has mostly been bypassed, and EWB is not sure which part is broken
              (EWB Challenge, n.d.). We treat it as non-operational.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">3. Clean water is not enough</h3>
            <p>
              The river supply does not provide enough clean water for domestic use, and rainwater is only enough for
              drinking (EWB, 2026). The community is about 40 people (EWB Challenge, n.d.).
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">4. Seasons and distance make repairs hard</h3>
            <p>
              The river level drops in the dry season (EWB, n.d.) and roads can be cut in the wet season (RDA Tropical
              North, 2023). Parts and technicians cannot arrive quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Rainbow diagram</h2>
        <p className="text-slate-700 leading-relaxed">
          We drew a rainbow diagram to organise what we learned from the research and to check that we had not
          missed anything before moving on.
        </p>
        <ImagePlaceholder
          figureNumber="Figure 3"
          figureTitle="Rainbow Diagram for Water Treatment at Port Stewart"
          imageFile="figure-3-rainbow.png"
          noteText="Produced by the project team in class. Add the team's own diagram as public/images/figure-3-rainbow.png."
          altText="Rainbow diagram produced by the project team"
        />
        <ArtefactNote
          why="To organise the research findings in the way we learned in class, so that the design requirements come from evidence."
          tells="Team to complete: say in one sentence what the diagram showed, for example which groups or needs it linked together."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">User journey map: Geoff today</h2>
        <p className="text-slate-700 leading-relaxed">
          Geoff is a local technician at Port Stewart. He is the kind of person who would operate and look after our
          system, so we followed his day through three stages. The map describes how the current system affects him.
          It is a persona based on our research, not an interview.
        </p>
        <div className="text-left">
          <div className="font-bold text-sm text-[#21295C]">Table 2</div>
          <div className="italic text-sm text-slate-800 font-medium">Geoff's Journey Map With the Current Water System</div>
        </div>
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
        <p className="text-xs text-slate-600">
          <span className="italic font-semibold">Note.</span> Persona and stages developed by the project team from the
          design brief (EWB, 2026).
        </p>
        <ArtefactNote
          why="To see the problem through the eyes of the person who would use and maintain the system, not only through water chemistry."
          tells="Geoff's biggest problems are repairs that fail and a supply that cannot be trusted. That is why backwashing has to be simple, and why we tell the story of after installation on the Implementation page."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Four things the design must respect</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Low energy and low maintenance</h3>
            <p>
              Treatment can use a lot of energy and chemicals, so energy efficiency matters in remote designs
              (Commonwealth Scientific and Industrial Research Organisation [CSIRO], 2022). We avoid electrical
              equipment and chemical dosing.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Little harm to the environment</h3>
            <p>No chemicals discharged to the river. Iron solids from backwashing are drained away from the supply.</p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Community ownership</h3>
            <p>
              Rangers and local operators must be able to understand, test and look after the system themselves (EWB,
              2026).
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
