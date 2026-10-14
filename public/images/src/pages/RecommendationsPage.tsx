import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { RANGE_TEXT } from '../data/costs';

interface RecommendationsPageProps {
  onNavigate: (pageId: PageId) => void;
}

/** PAGE 10: RECOMMENDATIONS */
export const RecommendationsPage: React.FC<RecommendationsPageProps> = ({ onNavigate }) => {
  const recs = [
    {
      title: 'Use aeration, settling and backwashable filtration',
      text: 'Comparable plants removed 92.4–98.0% of iron, and we need at least 76% (Hiiob & Karro, 2012; NHMRC, 2025a). The same approach is the one EWB and Arup prefer for this site (EWB, n.d.). It needs no chemicals. This is based on other plants, so it has to be confirmed with Stewart River water.',
    },
    {
      title: 'Reuse the pump and tanks, but check the pump first',
      text: 'Reusing them avoids the cost of new equipment. In the dry season the river can fall below the bed sand (EWB, n.d.), so the site visit must check that the pump and intake can supply about 33.3 L/min. If not, the unit should be connected to the new intake that EWB and Arup have planned.',
    },
    {
      title: 'Keep the system simple',
      text: 'Use manual valves for backwashing, with no controllers or dosing pumps, so that local operators can look after it (EWB, 2026).',
    },
    {
      title: 'Build for cyclones and rust',
      text: 'A concrete slab, tie-downs and corrosion-resistant parts, following Queensland guidance (QRA, 2019).',
    },
    {
      title: `Plan for ${RANGE_TEXT} and confirm it with quotes`,
      text: 'This range includes labour, travel and a 20–25% contingency. Get supplier and contractor quotes, and look at private philanthropy and the National Water Grid Fund as possible sources (NWGA, n.d.). Agree the plan with YAC before applying.',
    },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={10}
        title="Recommendations"
        subtitle="What we recommend, and what still has to be checked before building."
        assignedAuthor="Huy Truong"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Five recommendations</h2>
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
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Before building, we must</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed">
          <li>
            Take and test a water sample at Port Stewart. Researchers working on remote treatment systems start each
            site with water sampling to find the local issues (CSIRO, 2022).
          </li>
          <li>Measure the real pump flow and pressure at the intake in the dry season.</li>
          <li>Get cultural heritage clearance and agreement from YAC, the Rangers and Elders (YAC, n.d.-a).</li>
          <li>Replace our cost allowances with real quotes.</li>
        </ul>
      </section>

      <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 space-y-2">
        <h2 className="text-lg font-bold text-amber-900">Outside our scope: water storage</h2>
        <p className="text-slate-800 leading-relaxed">
          Our project treats the water that reaches the unit. It does not add water. The community may need more
          storage to get through the dry season, and a future project should look at that (EWB, 2026).
        </p>
      </section>

      <PagePagination currentPageId="recommendations" onNavigate={onNavigate} />
    </div>
  );
};
