import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { Figure } from '../components/Figure';
import { ArtefactNote } from '../components/ArtefactNote';

interface TestResultsPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * PAGE 7: TEST AND RESULTS
 * CFD is written out on the Prototype page, so it is used in short form here.
 * Figure 9 numbers come from Table 3 in Hiiob and Karro (2012): removal = (before - after) / before.
 */
export const TestResultsPage: React.FC<TestResultsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={7}
        title="Test and Results"
        subtitle="What the Venturi simulation and the comparison with published treatment plants tell us, and what they cannot."
        assignedAuthor="Ethan Illidge"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Summary</h2>
        <p className="text-slate-700 leading-relaxed">
          Both tests are desktop tests. They show that the idea is reasonable, but they cannot show that it will work
          with Stewart River water.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Test 1: Can the pump flow pull in air?</h3>
            <p>
              A CFD simulation of the Venturi in SimScale (SimScale GmbH, 2026). At 33.3 L/min the water speeds up from
              1.13 m/s in the pipe to 8.17 m/s at the throat, and the pressure falls there. A pressure drop at the throat
              is what draws air in through the side port.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Test 2: Is 76% iron removal realistic?</h3>
            <p>
              A comparison with four plants in Estonia that aerate water and then filter it (Hiiob & Karro, 2012). Three
              removed 92.4% to 98.0% of the iron. The fourth removed 43.3%.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Test 1: Venturi simulation</h2>
        <p className="text-slate-700 leading-relaxed">
          We modelled the Venturi at the design flow of 33.3 L/min, which is our own assumption and not a measured pump
          flow. Figure 7 shows pressure and Figure 8 shows velocity along the aerator.
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <Figure
              number="Figure 7"
              title="Venturi Pressure Distribution at 33.3 L/min"
              file="figure-3-pressure.png"
              alt="Simulation of the Venturi. Pressure is highest in the inlet pipe on the left and falls at the throat in the middle, where the side port joins."
              credit="Created by Ethan Illidge using SimScale (SimScale GmbH, 2026)."
            />
            <ArtefactNote
              why="We wanted to know whether the flow creates a low-pressure zone at the air port."
              tells="Pressure is highest at the inlet and lowest at and just after the throat. The colour scale runs from about −17.4 kPa to 22.4 kPa."
            />
          </div>
          <div>
            <Figure
              number="Figure 8"
              title="Venturi Velocity Distribution at 33.3 L/min"
              file="figure-4-velocity.png"
              alt="Simulation of the Venturi. Water moves slowly in the inlet pipe on the left and fastest through the narrow throat in the middle."
              credit="Created by Ethan Illidge using SimScale (SimScale GmbH, 2026)."
            />
            <ArtefactNote
              why="Speed and pressure change together, so we also checked how fast the water moves through the throat."
              tells="The water speeds up from 1.13 m/s in the pipe to a maximum of 8.17 m/s in the throat."
            />
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-semibold text-[#21295C]">Limits.</span> The simulation shows the pressure and speed of
          the water. It does not show how much air is drawn in. It also assumes a flow of 33.3 L/min, and we do not know
          the real pump flow or pressure.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Test 2: Iron removal in published plants</h2>
        <p className="text-slate-700 leading-relaxed">
          The highest iron reading we have is 1.25 mg/L (Todio, 2026) and the guideline value is 0.3 mg/L (NHMRC, 1996),
          so the unit has to remove at least 76% of the iron. Hiiob and Karro (2012) measured iron before and after
          treatment at 20 water treatment plants in Võru County, Estonia. Four of the plants aerate the water in the open
          and then pass it through a Birm iron filter. That is the same two-step idea as our design, although our filters
          are a different product. Figure 9 shows how much iron each of the four removed.
        </p>
        <Figure
          number="Figure 9"
          title="Iron Removal at Four Plants That Aerate and Then Filter"
          file="figure-5-iron-removal.png"
          alt="Bar chart of iron removal at four plants: Krabi 2 92.4 percent, Antsla 97.6 percent, Lasva 98.0 percent and Pässa 43.3 percent. A dashed line marks the 76 percent needed at Port Stewart. The first three bars are above the line and the Pässa bar is below it."
          credit="Created by the team using data from Hiiob and Karro (2012, Table 3). Removal is the iron before treatment minus the iron after treatment, divided by the iron before treatment. The dashed line is the 76% needed at Port Stewart."
        />
        <ArtefactNote
          why="We could not test Stewart River water, so we looked for evidence from plants that use the same two steps."
          tells="Three plants removed more than the 76% we need. The fourth, Pässa, removed far less, and the authors think the likely reason is the low oxygen content of its water. So the Venturi has to add enough oxygen, which our simulation cannot show."
        />
        <div className="text-sm text-slate-700 leading-relaxed space-y-2">
          <p>
            Two more points from the study. Across all 20 plants, the authors report that only 13 brought iron down to
            the drinking water requirement of 0.2 mg/L (Hiiob & Karro, 2012). Krabi 2 ended at 0.27 mg/L, which is above
            that 0.2 mg/L limit but below the ADWG guideline value of 0.3 mg/L.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Limits of these tests</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed">
          <li>
            No test used Stewart River water. The only iron readings we have are 1.01 and 1.25 mg/L from two bores
            (Todio, 2026).
          </li>
          <li>
            We have no manganese reading for Port Stewart. Manganese has its own guideline values (NHMRC, 2025).
          </li>
          <li>
            The Estonian plants treat groundwater with different chemistry, so their results show that the method can
            work, not that ours will.
          </li>
          <li>
            Nobody has run the unit with operators, so we do not know how often the filters will need backwashing.
          </li>
        </ul>
        <p className="text-sm text-slate-600">The Recommendations page sets out how we would deal with these limits.</p>
      </section>

      <PagePagination currentPageId="test-results" onNavigate={onNavigate} />
    </div>
  );
};
