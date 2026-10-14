import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ArtefactNote } from '../components/ArtefactNote';

interface TestResultsPageProps {
  onNavigate: (pageId: PageId) => void;
}

/** PAGE 7: TEST AND RESULTS */
export const TestResultsPage: React.FC<TestResultsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={7}
        title="Test and Results"
        subtitle="What the Venturi simulation and the comparison with real treatment plants tell us, and what they do not."
        assignedAuthor="Ethan Illidge"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Summary</h2>
        <p className="text-slate-700 leading-relaxed">
          Our tests support the idea that the design is technically feasible. They are desktop tests, so they do not
          prove it will work at Port Stewart. Site-specific testing is needed before full-scale building.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Test 1: Can the pump flow pull in air?</h3>
            <p>
              Method: computational fluid dynamics (CFD) simulation of the Venturi in SimScale (SimScale GmbH, 2026).
              Result: at 33.3 L/min the water speeds up from 1.13 m/s to 8.17 m/s at the throat, and the pressure
              drops there. That drop is what draws air in through the side port.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Test 2: Is 76% iron removal realistic?</h3>
            <p>
              Method: compared with published results from three aeration and filtration plants (Hiiob & Karro, 2012).
              Result: they removed 92.4%, 97.6% and 98.0% of iron. We need at least 76% (NHMRC, 2025a).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Test 1: Venturi simulation</h2>
        <p className="text-slate-700 leading-relaxed">
          We modelled the Venturi at the design flow of 33.3 L/min. Figure 7 shows pressure and Figure 8 shows
          velocity along the aerator.
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <ImagePlaceholder
              figureNumber="Figure 7"
              figureTitle="Venturi Pressure Distribution at 33.3 L/min"
              imageFile="figure-3-pressure.png"
              noteText="Simulation by Ethan Illidge using SimScale (SimScale GmbH, 2026)."
              altText="Simulation showing pressure falling at the Venturi throat"
              heightClass="min-h-[200px]"
            />
            <ArtefactNote
              why="To see whether the flow rate creates a low-pressure zone at the air port."
              tells="Pressure is highest at the inlet and drops at the throat, where air would be drawn in."
            />
          </div>
          <div>
            <ImagePlaceholder
              figureNumber="Figure 8"
              figureTitle="Venturi Velocity Distribution at 33.3 L/min"
              imageFile="figure-4-velocity.png"
              noteText="Simulation by Ethan Illidge using SimScale (SimScale GmbH, 2026)."
              altText="Simulation showing water speeding up through the Venturi throat"
              heightClass="min-h-[200px]"
            />
            <ArtefactNote
              why="To check how fast the water moves through the throat, because speed is linked to the pressure drop."
              tells="Water speeds up from 1.13 m/s to a maximum of 8.17 m/s through the narrow throat."
            />
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-semibold text-[#21295C]">Limits.</span> The simulation shows the pressure and speed of
          the water. It does not tell us how much air is drawn in, and it assumes a flow of 33.3 L/min. The real pump
          flow and pressure still have to be measured on site.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Test 2: Iron removal in comparable plants</h2>
        <p className="text-slate-700 leading-relaxed">
          The highest iron reading we have for Port Stewart is 1.25 mg/L and the target is 0.30 mg/L or less (NHMRC, 2025a; EWB
          Challenge, n.d.). That means removing at least 76%. Hiiob and Karro (2012) studied water treatment plants in
          Võru County, Estonia, that use aeration followed by filtration. Figure 9 shows the three plants that are
          most similar to our design.
        </p>
        <ImagePlaceholder
          figureNumber="Figure 9"
          figureTitle="Iron-Removal Performance of Three Comparable Treatment Plants"
          imageFile="figure-5-iron-removal.png"
          noteText="Data from Hiiob and Karro (2012). The dashed line is the 76% removal Port Stewart needs. Only comparable plants are plotted."
          altText="Bar chart of iron removal at three plants, all above the 76% requirement"
        />
        <ArtefactNote
          why="We could not test real Stewart River water, so we looked for evidence that the same treatment steps work elsewhere."
          tells="All three plants are well above the 76% we need. The plants treat a different water source, so this shows that it is possible, not that it is certain."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">What we still need to test</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed">
          <li>Take a water sample at Port Stewart, test iron before and after a trial of the treatment steps, and check whether other substances (such as manganese) matter (NHMRC, 2025b).</li>
          <li>Measure the real pump flow and pressure, and check that the Venturi still works at those values.</li>
          <li>Run the unit with operators and learn how often the filters need backwashing.</li>
        </ul>
      </section>

      <PagePagination currentPageId="test-results" onNavigate={onNavigate} />
    </div>
  );
};
