import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';

interface ArtefactsPageProps {
  onNavigate: (pageId: PageId) => void;
}

interface Artefact {
  label: string;
  name: string;
  page: PageId;
  by: string;
  why: string;
  shows: string;
}

/**
 * PAGE 11: ARTEFACT INDEX
 * One row for every artefact on the site. Add a row here when you add a new artefact.
 * No new abbreviations are written out here.
 */
const ARTEFACTS: Artefact[] = [
  { label: 'Figure 1', name: 'Map of Lama Lama Country', page: 'context', by: 'YAC (n.d.-a), selected by the team', why: 'Places the project on the map and shows who owns the land.', shows: 'Port Stewart is remote and on Aboriginal-owned land.' },
  { label: 'Figure 1a', name: 'Princess Charlotte Bay from space', page: 'context', by: 'MODIS Rapid Response Team (2007), selected by the team', why: 'We had no photo of the river, so this shows the bay it flows into.', shows: 'Brown river water spreads across the bay after heavy rain.' },
  { label: 'Figure 2', name: 'Mean monthly rainfall chart', page: 'context', by: 'Project team, using BOM (2026) data', why: 'Shows how strong the wet and dry seasons are.', shows: 'Most rain falls December to April, so freight and building belong in the dry months.' },
  { label: 'Table 1', name: 'PESTLE analysis', page: 'context', by: 'Project team', why: 'Lists the political, economic, social, technological, legal and environmental factors.', shows: 'Cultural heritage, running costs and seasons shape the requirements.' },
  { label: 'Figure 3', name: 'Stakeholder rainbow diagram', page: 'empathise', by: 'Project team, using the format in Chevalier and Buckles (2008)', why: 'Maps who the project affects and who can decide its future, before we wrote requirements.', shows: 'The people most affected are also the ones whose agreement is needed or who will run the unit, so the design must be simple to run and agreed with them first.' },
  { label: 'Table 2', name: "Geoff's journey map today", page: 'empathise', by: 'Tan Dong', why: 'Shows the problem from the operator\'s point of view.', shows: 'Failed repairs and an unreliable supply are the biggest frustrations.' },
  { label: 'Table 3', name: 'Design requirements', page: 'define', by: 'Natalia Tran', why: 'Turns the research into a testable list.', shows: 'Simple operation and iron removal matter most.' },
  { label: 'Figure 4', name: 'Feasibility and innovation chart', page: 'ideate', by: 'Project team', why: 'Checks that the four concepts differ and are workable.', shows: 'Concept 4 is feasible and still more than a basic filter.' },
  { label: 'Table 4', name: 'TRIZ contradictions', page: 'ideate', by: 'Project team', why: 'Looks for ways around trade-offs.', shows: 'Staged treatment, passive aeration and backwashing each solve a trade-off.' },
  { label: 'Table 5', name: 'Decision matrix', page: 'ideate', by: 'Natalia Tran', why: 'Compares the concepts against the same criteria.', shows: 'Only Concept 4 has no Poor rating.' },
  { label: 'Table 6', name: 'Requirements tested by the prototype', page: 'prototype', by: 'Ethan Illidge & Huy Truong', why: 'Says which requirements were actually tested.', shows: 'Two technical risks are tested on paper. The other requirements are design checks only.' },
  { label: 'Figure 5', name: 'Treatment schematic (P&ID)', page: 'prototype', by: 'Ethan Illidge', why: 'Gives one clear drawing of the system.', shows: 'Pipe route, parts, and a footprint of about 4.0 m by 3.0 m.' },
  { label: 'Figure 6', name: 'Concept render', page: 'prototype', by: 'Generated with ChatGPT (OpenAI, 2026) from the team schematic', why: 'Helps people picture the unit.', shows: 'The overall layout. It is an illustration, not an engineered drawing.' },
  { label: 'Figures 7 and 8', name: 'Venturi pressure and velocity simulations', page: 'test-results', by: 'Ethan Illidge, using SimScale (SimScale GmbH, 2026)', why: 'Tests whether the pump flow can pull air in.', shows: 'Water speeds up to 8.17 m/s and pressure drops at the throat.' },
  { label: 'Figure 9', name: 'Iron removal at four published plants', page: 'test-results', by: 'Project team, using data from Hiiob and Karro (2012)', why: 'Checks whether 76% removal is realistic.', shows: 'Three of the four plants removed 92.4–98.0%. The fourth removed 43.3%.' },
  { label: 'Tables 7, 8 and 9', name: 'Cost, labour and travel breakdowns', page: 'costs', by: 'Huy Truong', why: 'Shows where the budget comes from.', shows: 'Labour and travel are about half of the subtotal. About a quarter of the subtotal comes from published prices or rates.' },
  { label: 'Table 10', name: 'Possible funding sources', page: 'costs', by: 'Huy Truong', why: 'Shows how the project could be paid for.', shows: 'Philanthropy and a government grant are possible. Nothing is confirmed.' },
  { label: 'Figure 10', name: 'Gantt chart', page: 'implementation', by: 'Huy Truong', why: 'Plans the order of the work around the seasons.', shows: 'Funding and ordering must be done by about June.' },
  { label: 'Table 11', name: "Geoff's journey map after installation", page: 'implementation', by: 'Project team', why: 'Checks whether the design improves his day.', shows: 'Training and spares matter as much as equipment.' },
];

export const ArtefactsPage: React.FC<ArtefactsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={11}
        title="Artefacts: What We Made and Why"
        subtitle="Every artefact we produced, who made it, why we made it, and what it shows."
        assignedAuthor="All Team Members"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Each artefact also has a "Why we made this" and "What it shows" note on its own page. This list puts them in
          one place, in the order they appear on the site.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[860px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className="p-3 w-28">Label</th>
                <th className="p-3">Artefact</th>
                <th className="p-3">Made by</th>
                <th className="p-3">Why we made it</th>
                <th className="p-3">What it shows</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {ARTEFACTS.map((a) => (
                <tr key={a.label + a.name} className="align-top">
                  <td className="p-3 font-semibold text-[#21295C]">{a.label}</td>
                  <td className="p-3">
                    <button
                      type="button"
                      onClick={() => onNavigate(a.page)}
                      className="text-[#065A82] hover:underline text-left font-medium"
                    >
                      {a.name}
                    </button>
                  </td>
                  <td className="p-3">{a.by}</td>
                  <td className="p-3">{a.why}</td>
                  <td className="p-3">{a.shows}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <PagePagination currentPageId="artefacts" onNavigate={onNavigate} />
    </div>
  );
};
