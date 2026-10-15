import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { CrossLink } from '../components/CrossLink';
import { DAYS_AWAY, OPERATOR_PERCENT, PERMIT_EXTRA_DAYS, PUBLISHED_PERCENT, RANGE_TEXT, RUNNING_ROUNDED } from '../data/costs';

interface RecommendationsPageProps {
  onNavigate: (pageId: PageId, anchor?: string) => void;
}

/**
 * PAGE 10: RECOMMENDATIONS
 * Abbreviation written out here for the first time: CSIRO.
 */
export const RecommendationsPage: React.FC<RecommendationsPageProps> = ({ onNavigate }) => {
  const recs: { title: string; text: React.ReactNode }[] = [
    {
      title: 'Use aeration, settling and backwashable filtration',
      text: 'Three of the four published plants that aerate and then filter removed 92.4–98.0% of the iron, and we need at least 76% (Hiiob & Karro, 2012; Todio, 2026; NHMRC, 1996). The fourth removed 43.3%, and the authors think low oxygen is the likely reason, so the Venturi has to add enough oxygen. Aeration followed by filtration is also the option EWB and Arup prefer for this site (EWB, n.d.). Our unit adds no powered parts or chemicals. All of this has to be confirmed with Stewart River water.',
    },
    {
      title: 'Reuse the pump and tanks, but check the pump first',
      text: 'Reusing them avoids the cost of new equipment. In the dry season the river level can fall below the sand in the riverbed (EWB, n.d.), so the site visit has to check that the pump and intake can supply about 33.3 L/min, which is our design flow and not a measured value. If they cannot, the unit would have to wait for the new intake that Arup designed, which still needed construction funding according to the EWB project page (EWB, n.d.).',
    },
    {
      title: 'Keep the system simple',
      text: 'Use manual valves for backwashing, with no controllers or dosing pumps, so that local operators can look after it. EWB describes aeration and filtration as needing very limited maintenance (EWB, n.d.).',
    },
    {
      title: 'Build for cyclones and rust',
      text: 'A concrete slab, tie-downs and corrosion-resistant parts, using Queensland cyclone guidance for homes as a guide (QRA, 2019). An engineer should check the final design.',
    },
    {
      title: 'Ask for permission first, and plan two trips',
      text: (
        <>
          The crew can only work at Port Stewart with the community's agreement (YAC, n.d.-b), so permission comes first
          and has a date. We plan a short site visit in July to check the pump and pour the slab, then a {DAYS_AWAY}-day
          installation in September, with October kept as a reserve month. Ask YAC for up to {PERMIT_EXTRA_DAYS} extra
          days of permission on each trip. Days we do not use cost nothing.{' '}
          <CrossLink page="implementation" anchor="table-13" onNavigate={onNavigate}>
            Table 13
          </CrossLink>{' '}
          shows each day.
        </>
      ),
    },
    {
      title: `Plan for ${RANGE_TEXT} to build and ${RUNNING_ROUNDED} a year to run, and confirm both with quotes`,
      text: (
        <>
          The build range includes labour, travel for both trips and a 20–25% contingency, but only about{' '}
          {PUBLISHED_PERCENT}% of the subtotal comes from published prices or rates (
          <CrossLink page="costs" anchor="table-7" onNavigate={onNavigate}>
            Table 7
          </CrossLink>
          ). The yearly running cost is mostly the operator's paid time ({OPERATOR_PERCENT}%), and it depends on our
          assumptions about hours, filter media life and spare parts (
          <CrossLink page="costs" anchor="table-11" onNavigate={onNavigate}>
            Table 11
          </CrossLink>
          ). Get supplier and contractor quotes, and look at private donors and the National Water Grid Fund as possible
          sources (NWGA, n.d.). Agree the plan with YAC before applying.
        </>
      ),
    },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={10}
        title="Recommendations"
        subtitle="What we recommend, and what should be checked before building."
        assignedAuthor="Huy Truong"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Six recommendations</h2>
        <ol className="space-y-3">
          {recs.map((r, i) => (
            <li key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#21295C] text-white flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
              <div>
                <h3 className="font-bold text-[#21295C]">{r.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed mt-1">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Before building</h2>
        <p className="text-slate-700 leading-relaxed">
          These checks deal with the limits of our desktop tests. They should happen before any equipment is bought.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed">
          <li>
            Take a water sample at Port Stewart and test it for iron and manganese, before and after a trial of the
            treatment steps. Researchers at the Commonwealth Scientific and Industrial Research Organisation (CSIRO)
            who work on treatment for remote communities start by analysing water samples from the site (Molloy,
            2022), and manganese has its own guideline values (NHMRC, 2025).
          </li>
          <li>
            Measure the dissolved oxygen after the Venturi. Low oxygen is the likely reason one published plant removed
            only 43% of the iron (Hiiob & Karro, 2012).
          </li>
          <li>Measure the real pump flow and pressure at the intake in the dry season, on the July site visit.</li>
          <li>
            Agree the plan with YAC, the Rangers and the Elders (YAC, n.d.-b). That includes permission to enter and
            stay, the dates and the camping permits. Follow the cultural heritage duty of care in the{' '}
            <em>Aboriginal Cultural Heritage Act 2003</em> (Qld) s 23.
          </li>
          <li>Replace our cost allowances with real quotes.</li>
        </ul>
      </section>

      <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 space-y-2">
        <h2 className="text-lg font-bold text-amber-900">Outside our scope: water supply and storage</h2>
        <p className="text-slate-800 leading-relaxed">
          Our project treats the water that reaches the unit. It does not add water or storage. In the dry season the
          river level falls below the sand in the riverbed (EWB, n.d.), so a future project should look at supply and
          storage, including the new intake that Arup designed.
        </p>
      </section>

      <PagePagination currentPageId="recommendations" onNavigate={onNavigate} />
    </div>
  );
};
