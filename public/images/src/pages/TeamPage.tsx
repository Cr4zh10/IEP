import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';

interface TeamPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * PAGE 12: TEAM
 * To change a role or contribution, edit the text in MEMBERS below.
 */
const MEMBERS = [
  {
    name: 'Ethan Illidge',
    role: 'Prototype and testing',
    sections: 'Sections 6 (Prototype) and 7 (Test and Results)',
    contribution:
      'Drew the treatment schematic, ran the SimScale Venturi simulations, and compared the design with published iron-removal results.',
  },
  {
    name: 'Huy Truong',
    role: 'Costs, implementation and recommendations',
    sections: 'Sections 8 (Costs), 9 (Implementation) and 10 (Recommendations); co-lead on Section 3 (Empathise)',
    contribution:
      'Worked out the cost estimate and funding sources, the implementation timeline and the recommendations.',
  },
  {
    name: 'Natalia Tran',
    role: 'Define and ideate',
    sections: 'Sections 4 (Define) and 5 (Ideate and Screen)',
    contribution:
      'Wrote the problem statement and design requirements, and compared the four design concepts.',
  },
  {
    name: 'Tan Dong',
    role: 'Context and empathise',
    sections: 'Sections 2 (Context) and 3 (Empathise)',
    contribution:
      'Researched the place, climate and water supply history, and built the user journey map for Geoff.',
  },
];

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={12}
        title="Team"
        subtitle="Four university engineering students, working on Design Area 6.2 of the EWB Challenge."
        assignedAuthor="All Team Members"
      />

      <section className="grid md:grid-cols-2 gap-5">
        {MEMBERS.map((m) => (
          <article key={m.name} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-[#21295C] text-white flex items-center justify-center font-bold">
                {m.name.charAt(0)}
              </div>
              <div>
                <h2 className="font-bold text-[#21295C] text-lg leading-tight">{m.name}</h2>
                <p className="text-sm text-slate-600">{m.role}</p>
              </div>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{m.contribution}</p>
            <p className="text-xs text-slate-500 mt-3">{m.sections}</p>
          </article>
        ))}
      </section>

      <PagePagination currentPageId="team" onNavigate={onNavigate} />
    </div>
  );
};
