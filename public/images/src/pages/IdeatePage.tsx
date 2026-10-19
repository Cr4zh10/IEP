import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ScrollHint } from '../components/ScrollHint';
import { ArtefactNote } from '../components/ArtefactNote';
import { ArtefactLabel } from '../components/ArtefactLabel';

interface IdeatePageProps {
  onNavigate: (pageId: PageId) => void;
}

type Rating = 'Poor' | 'Fair' | 'Good' | 'Very good';

const chip: Record<Rating, string> = {
  Poor: 'bg-rose-100 text-rose-800',
  Fair: 'bg-amber-100 text-amber-800',
  Good: 'bg-lime-100 text-lime-800',
  'Very good': 'bg-emerald-100 text-emerald-800',
};

/**
 * PAGE 5: IDEATE AND SCREEN
 * No scores before the matrix. The matrix uses words (Poor / Fair / Good / Very good), with no totals.
 * New abbreviation defined here: TRIZ.
 */
export const IdeatePage: React.FC<IdeatePageProps> = ({ onNavigate }) => {
  const concepts = [
    {
      n: 1,
      name: 'Filtration only',
      what: 'Filter the raw river water directly, with no treatment before the filter.',
      pro: 'Cheapest and simplest to install.',
      con: 'All the iron load goes onto the filter media, so we expect it to need more frequent backwashing. Oxidising filters need regular backwashing (Swistock et al., 2025).',
    },
    {
      n: 2,
      name: 'Chemical iron treatment',
      what: 'Add a chemical (such as chlorine or permanganate) to turn dissolved iron into solid particles (Swistock et al., 2025).',
      pro: 'Works on dissolved iron.',
      con: 'Needs a regular chemical supply and careful handling, which is hard to keep up in a remote community.',
    },
    {
      n: 3,
      name: 'New treatment plant',
      what: 'Replace the whole system with a packaged treatment plant.',
      pro: 'Strong treatment.',
      con: 'We expect it to cost the most, and it would replace the pump and tanks that already exist. We have not costed it.',
    },
    {
      n: 4,
      name: 'Aeration, settling and backwashable filtration',
      what: 'A Venturi aerator adds air, a settling tank lets the iron particles sink, and backwashable filters catch the rest.',
      pro: 'No chemicals. Easy to clean. Reuses the pump and tanks.',
      con: 'More parts than filtration only. Its performance on Stewart River water has not been measured.',
      selected: true,
    },
  ];

  const criteria: { name: string; why: string; ratings: Rating[] }[] = [
    { name: 'Iron removal', why: 'REQ-01', ratings: ['Poor', 'Good', 'Very good', 'Very good'] },
    { name: 'Ease of maintenance', why: 'REQ-02, REQ-04', ratings: ['Poor', 'Poor', 'Fair', 'Very good'] },
    { name: 'Cost', why: 'Budget', ratings: ['Very good', 'Fair', 'Poor', 'Good'] },
    { name: 'Reuses existing assets', why: 'REQ-03', ratings: ['Good', 'Fair', 'Poor', 'Very good'] },
    { name: 'Suits a remote community', why: 'REQ-05, REQ-07', ratings: ['Fair', 'Poor', 'Poor', 'Very good'] },
    { name: 'Reliability', why: 'Need 3', ratings: ['Poor', 'Fair', 'Good', 'Very good'] },
  ];

  const triz = [
    {
      contradiction: 'We want strong iron removal, but strong treatment usually means more equipment and more upkeep.',
      principle: 'Segmentation (principle 1) and Preliminary action (principle 10)',
      how: 'Split the job into stages. Aeration and settling do the heavy work first, so the filters only have to polish the water.',
    },
    {
      contradiction: 'We want to reuse the existing pump, but we do not want a powered air compressor to add air.',
      principle: 'Self-service (principle 25)',
      how: 'The water flowing through a Venturi creates its own suction and pulls air in, so no compressor is needed.',
    },
    {
      contradiction: 'Fine filter media catches fine iron, but fine media blocks quickly.',
      principle: 'Discarding and recovering (principle 34)',
      how: 'Instead of throwing away blocked cartridges, the media is cleaned in place by backwashing.',
    },
  ];

  // Feasibility (x, 0-100) and innovation (y, 0-100): our judgement
  const points = [
    { n: '1', label: 'Filtration only', x: 80, y: 15 },
    { n: '2', label: 'Chemical treatment', x: 48, y: 32 },
    { n: '3', label: 'New plant', x: 20, y: 62 },
    { n: '4', label: 'Aeration + settling + backwash', x: 84, y: 55, sel: true },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={5}
        title="Ideate and Screen"
        subtitle="Where our four concepts came from, how we compared them, and why we picked one."
        assignedAuthor="Natalia Tran"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Why these four concepts?</h2>
        <p className="text-slate-700 leading-relaxed">
          We started by listing the basic ways to deal with dissolved iron. Swistock et al. (2025) describe oxidising
          filters, chemical oxidation followed by filtration, and aeration followed by filtration, among other methods.
          Our first two concepts are the filter-only and chemical routes. The third is a
          packaged plant that replaces the whole system. The fourth comes from the approach EWB and Arup prefer for
          this site, aeration followed by filtration, which needs no power or chemicals and very little maintenance
          (EWB, n.d.). Each concept answers the same question in a different way, so the comparison is fair.
        </p>

        <figure className="w-full">
          <ArtefactLabel label="Figure 4" title="Feasibility and Innovation of the Four Concepts" className="mb-2" />
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <svg viewBox="0 0 520 380" className="w-full max-w-2xl mx-auto h-auto" role="img" aria-label="Chart of feasibility against innovation for the four concepts">
              <rect x="50" y="10" width="460" height="320" fill="#F8FAFC" stroke="#CBD5E1" />
              <line x1="280" y1="10" x2="280" y2="330" stroke="#CBD5E1" strokeDasharray="4 4" />
              <line x1="50" y1="170" x2="510" y2="170" stroke="#CBD5E1" strokeDasharray="4 4" />
              <text x="280" y="362" textAnchor="middle" fontSize="13" fill="#475569">Feasibility at Port Stewart (low → high)</text>
              <text x="14" y="170" textAnchor="middle" fontSize="13" fill="#475569" transform="rotate(-90 14 170)">Innovation (low → high)</text>
              {points.map((p) => {
                const cx = 50 + (p.x / 100) * 460;
                const cy = 330 - (p.y / 100) * 320;
                const anchor = p.x > 65 ? 'end' : 'start';
                const dx = p.x > 65 ? -16 : 16;
                return (
                  <g key={p.n}>
                    <circle cx={cx} cy={cy} r="11" fill={p.sel ? '#059669' : '#1C7293'} />
                    <text x={cx} y={cy + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">{p.n}</text>
                    <text x={cx + dx} y={cy + 4} textAnchor={anchor} fontSize="12" fill="#1e293b">{p.label}</text>
                  </g>
                );
              })}
            </svg>
          </div>
          <figcaption className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
            Created by the project team. Positions are the team's judgement, not measurements. Feasibility asks
            whether the concept could be built, run and repaired at Port Stewart. Innovation asks how new the approach
            is compared with what is already used there.
          </figcaption>
        </figure>
        <ArtefactNote
          why="We checked that the four concepts really differ, and whether the more unusual ideas could work at a remote site."
          tells="Concept 3 is more ambitious but the least feasible at a remote site. Concept 4 is the only one that is both highly feasible and more than a simple filter."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
          Theory of Inventive Problem Solving (TRIZ): solving the trade-offs
        </h2>
        <p className="text-slate-700 leading-relaxed">
          TRIZ helps when improving one thing makes another thing worse. We found three trade-offs in this project and
          used TRIZ principles (Mistakeproofing Architecture Engineering and Construction, n.d.) to look for ways
          around them.
        </p>
        <ArtefactLabel label="Table 4" title="TRIZ Contradictions and the Principles We Used" />
        <ScrollHint />
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className="p-3">Contradiction</th>
                <th className="p-3">TRIZ principle</th>
                <th className="p-3">How it appears in our design</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {triz.map((t, i) => (
                <tr key={i} className="align-top">
                  <td className="p-3">{t.contradiction}</td>
                  <td className="p-3 font-semibold text-[#21295C]">{t.principle}</td>
                  <td className="p-3">{t.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. Principle names and numbers follow Mistakeproofing Architecture Engineering and
          Construction (n.d.).
        </p>
        <ArtefactNote
          why="TRIZ gave us a way to look for ideas that avoid a trade-off instead of just choosing the least bad option."
          tells="Three features of Concept 4 (staged treatment, passive aeration and backwashing) each match one of these trade-offs."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">The four concepts</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {concepts.map((c) => (
            <div
              key={c.n}
              className={`rounded-xl border p-4 ${c.selected ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-slate-50'}`}
            >
              <div className="text-xs font-semibold text-[#1C7293]">Concept {c.n}{c.selected ? ' · selected' : ''}</div>
              <h3 className="font-bold text-[#21295C] mt-0.5">{c.name}</h3>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">{c.what}</p>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed"><span className="font-semibold">Good:</span> {c.pro}</p>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed"><span className="font-semibold">Weak:</span> {c.con}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Decision matrix</h2>
        <p className="text-slate-700 leading-relaxed">
          We rated each concept against the criteria using words, not numbers: Poor, Fair, Good or Very good. The
          criteria come from the design requirements on the Define page. We did not add up a score. Instead we looked
          for any Poor rating, because one serious weakness can make a concept unsuitable for a remote site.
        </p>
        <ArtefactLabel label="Table 5" title="Qualitative Decision Matrix for the Four Concepts" />
        <ScrollHint />
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className="p-3">Criterion</th>
                <th className="p-3">1. Filtration only</th>
                <th className="p-3">2. Chemical</th>
                <th className="p-3">3. New plant</th>
                <th className="p-3">4. Aeration + settling + backwash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {criteria.map((c) => (
                <tr key={c.name}>
                  <td className="p-3 font-semibold text-[#21295C]">
                    {c.name}
                    <div className="text-xs font-normal text-slate-500">{c.why}</div>
                  </td>
                  {c.ratings.map((r, i) => (
                    <td key={i} className="p-3">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${chip[r]}`}>{r}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Created by the project team. Ratings are the team's judgement, informed by EWB (n.d.) and Swistock et al.
          (2025). We made them before testing, and they are not measurements.
        </p>
        <ArtefactNote
          why="Every concept is rated against the same criteria, so the comparison can be read and challenged."
          tells="Concepts 1, 2 and 3 each have at least one Poor rating on something that matters a lot at Port Stewart. Concept 4 has none."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Why we chose Concept 4</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed">
          <li>It is the only concept with no Poor rating in Table 5.</li>
          <li>It treats the main problem. Air turns dissolved iron into solid particles that can be settled and filtered.</li>
          <li>It follows the aeration and filtration approach preferred by EWB and Arup for this site (EWB, n.d.).</li>
          <li>It reuses the pump and header tanks, so we expect it to cost less than a new plant. We have not costed a new plant.</li>
          <li>Backwashing lets operators clean the filters without replacing cartridges.</li>
        </ul>
      </section>

      <PagePagination currentPageId="ideate" onNavigate={onNavigate} />
    </div>
  );
};
