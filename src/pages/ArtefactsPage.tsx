import React from 'react';
import { PageId, PAGES } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { anchorFor } from '../components/ArtefactLabel';
import { ArrowUpRight } from 'lucide-react';
import {
  LABOUR,
  LABOUR_TOTAL,
  PUBLISHED_PERCENT,
  RUNNING_ROUNDED,
  SITE_VISIT_TOTAL,
  VISIT_DAYS_AWAY,
  ON_SITE_DAYS,
  money,
} from '../data/costs';

interface ArtefactsPageProps {
  onNavigate: (pageId: PageId, anchor?: string) => void;
}

interface Artefact {
  /** "Figure 3" or "Table 7". The anchor on its page is made from this (figure-3, table-7). */
  label: string;
  name: string;
  page: PageId;
  by: string;
  why: string;
  shows: string;
}

const LABOUR_HOURS = LABOUR.reduce((a, l) => a + l.qty, 0);

/**
 * PAGE 11: ARTEFACT INDEX
 * One card for every artefact on the site, in the order they appear. Each card has a button that jumps
 * to the artefact on its own page (the figure or table label there has the matching id).
 * Add a card here when you add a new artefact, and give it a label that matches the label on its page.
 * No new abbreviations are written out here.
 */
const ARTEFACTS: Artefact[] = [
  { label: 'Figure 1', name: 'Map of Lama Lama Country', page: 'context', by: 'YAC (n.d.-a), selected by the team', why: 'Places the project on the map and shows who owns the land.', shows: 'Port Stewart is remote and on Aboriginal-owned land.' },
  { label: 'Figure 1a', name: 'Princess Charlotte Bay from space', page: 'context', by: 'MODIS Rapid Response Team (2007), selected by the team', why: 'We had no photo of the river, so this shows the bay it flows into.', shows: 'Brown river water spreads across the bay after heavy rain.' },
  { label: 'Figure 2', name: 'Mean monthly rainfall chart', page: 'context', by: 'Project team, using BOM (2026) data', why: 'Shows how strong the wet and dry seasons are.', shows: 'Most rain falls December to April, so freight and building belong in the dry months.' },
  { label: 'Table 1', name: 'PESTLE analysis', page: 'context', by: 'Project team', why: 'Lists the political, economic, social, technological, legal and environmental factors.', shows: 'Cultural heritage, running costs and seasons shape the requirements.' },
  { label: 'Figure 3', name: 'Stakeholder rainbow diagram', page: 'empathise', by: 'Project team, using the format in Chevalier and Buckles (2008)', why: 'Maps who the project affects and who can decide its future, before we wrote requirements.', shows: 'The people most affected are also the ones whose agreement is needed or who will run the unit, so the design must be simple to run and agreed with them first.' },
  { label: 'Table 2', name: "Geoff's journey map today", page: 'empathise', by: 'Tan Dong', why: "Shows the problem from the operator's point of view.", shows: 'Failed repairs and an unreliable supply are the biggest frustrations.' },
  { label: 'Figure 3a', name: 'Water situation at a glance', page: 'define', by: 'Project team, using information from Todio (2026)', why: 'Shows the problem on one picture before we list the needs and requirements.', shows: 'Both iron readings are above the guideline, the 2018 filter is not in operation, and we are designing for about 40 people.' },
  { label: 'Figure 3b', name: 'Aerial photo of a building and a tank', page: 'define', by: 'EWB (2026a), selected by the team', why: 'A real photo helps readers picture the remote setting that the needs come from.', shows: 'A large round tank and a building stand in open bush, with a dirt track and a fenced yard nearby.' },
  { label: 'Table 3', name: 'Design requirements', page: 'define', by: 'Natalia Tran', why: 'Turns the research into a testable list.', shows: 'Simple operation and iron removal matter most.' },
  { label: 'Figure 4', name: 'Feasibility and innovation chart', page: 'ideate', by: 'Project team', why: 'Checks that the four concepts differ and are workable.', shows: 'Concept 4 is feasible and still more than a basic filter.' },
  { label: 'Table 4', name: 'TRIZ contradictions', page: 'ideate', by: 'Project team', why: 'Looks for ways around trade-offs.', shows: 'Staged treatment, passive aeration and backwashing each solve a trade-off.' },
  { label: 'Table 5', name: 'Decision matrix', page: 'ideate', by: 'Natalia Tran', why: 'Compares the concepts against the same criteria.', shows: 'Only Concept 4 has no Poor rating.' },
  { label: 'Table 6', name: 'Requirements tested by the prototype', page: 'prototype', by: 'Ethan Illidge & Huy Truong', why: 'Says which requirements were actually tested.', shows: 'Two technical risks are tested on paper. The other requirements are design checks only.' },
  { label: 'Figure 5', name: 'Treatment schematic (P&ID)', page: 'prototype', by: 'Ethan Illidge', why: 'Gives one clear drawing of the system.', shows: 'Pipe route, parts, and a footprint of about 4.0 m by 3.0 m.' },
  { label: 'Figure 6', name: 'Concept render', page: 'prototype', by: 'Generated with ChatGPT (OpenAI, 2026) from the team schematic', why: 'Helps people picture the unit.', shows: 'The overall layout. It is an illustration, not an engineered drawing.' },
  { label: 'Figure 7', name: 'Venturi pressure simulation', page: 'test-results', by: 'Ethan Illidge, using SimScale (SimScale GmbH, 2026)', why: 'Tests whether the pump flow can pull air in.', shows: 'Pressure is lowest at and just after the throat, where the air port joins.' },
  { label: 'Figure 8', name: 'Venturi velocity simulation', page: 'test-results', by: 'Ethan Illidge, using SimScale (SimScale GmbH, 2026)', why: 'Speed and pressure change together, so this checks how fast the water moves.', shows: 'Water speeds up from 1.13 m/s in the pipe to 8.17 m/s at the throat.' },
  { label: 'Figure 9', name: 'Iron removal at four published plants', page: 'test-results', by: 'Project team, using data from Hiiob and Karro (2012)', why: 'Checks whether 76% removal is realistic.', shows: 'Three of the four plants removed 92.4–98.0%. The fourth removed 43.3%.' },
  { label: 'Table 7', name: 'Cost summary', page: 'costs', by: 'Huy Truong', why: 'Puts every cost in one table and says whether each amount is a published price or our allowance.', shows: `Only about ${PUBLISHED_PERCENT}% of the subtotal comes from published prices or rates. The rest is allowance.` },
  { label: 'Table 8', name: 'Labour cost breakdown', page: 'costs', by: 'Huy Truong', why: 'A single labour figure would hide the hours and roles behind it.', shows: `${money(LABOUR_TOTAL)} for ${LABOUR_HOURS} paid hours, at rates that are our assumptions.` },
  { label: 'Table 9', name: 'Travel, accommodation and food', page: 'costs', by: 'Huy Truong', why: 'Shows what it costs to get two people to Port Stewart and keep them there.', shows: 'Travel costs nearly as much as the labour itself.' },
  { label: 'Table 10', name: 'Site visit before ordering', page: 'costs', by: 'Huy Truong', why: 'Prices the trip that checks the pump and intake and pours the slab before any equipment is bought.', shows: `One engineer, ${VISIT_DAYS_AWAY} days away, costs ${money(SITE_VISIT_TOTAL)}.` },
  { label: 'Table 11', name: 'Yearly running costs', page: 'costs', by: 'Huy Truong', why: 'Shows what it costs each year to keep the unit working after it is built.', shows: `About ${RUNNING_ROUNDED} a year, and most of that is operator time.` },
  { label: 'Table 12', name: 'Possible funding sources', page: 'costs', by: 'Huy Truong', why: 'Shows how the project could be paid for.', shows: 'Philanthropy and a government grant are possible. Nothing is confirmed.' },
  { label: 'Figure 10', name: 'Gantt chart', page: 'implementation', by: 'Huy Truong', why: 'Plans the order of the work around the seasons and the community.', shows: 'Permission, funding and ordering must be done before the install trip in September.' },
  { label: 'Table 13', name: 'Day-by-day plan for both trips', page: 'implementation', by: 'Huy Truong', why: 'Checks that the days we pay for are enough for the work.', shows: `The install trip has ${ON_SITE_DAYS} days on site and no spare day, so any delay is paid from the contingency.` },
  { label: 'Table 14', name: "Geoff's journey map after installation", page: 'implementation', by: 'Project team', why: 'Checks whether the design improves his day.', shows: 'Training and spares matter as much as equipment.' },
];

/** The pages that have artefacts, in site order, with their artefacts. */
const GROUPS = PAGES.map((pg) => ({ page: pg, items: ARTEFACTS.filter((a) => a.page === pg.id) })).filter(
  (g) => g.items.length > 0,
);

const groupId = (id: PageId) => `artefacts-on-${id}`;

export const ArtefactsPage: React.FC<ArtefactsPageProps> = ({ onNavigate }) => {
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
          If you forget what an artefact is, find it here and press its button. The site opens the page it sits on,
          scrolls to it and flashes it yellow so you can see where you have landed. Each artefact also has a "Why we
          made this" and "What it shows" note on its own page.
        </p>
        <div className="flex flex-wrap gap-2" role="navigation" aria-label="Jump to a page's artefacts">
          <span className="text-sm font-semibold text-[#21295C] self-center mr-1">Jump to:</span>
          {GROUPS.map((g) => (
            <button
              key={g.page.id}
              type="button"
              onClick={() => jump(groupId(g.page.id))}
              className="px-3 py-1.5 rounded-full text-sm font-semibold bg-[#E2EDF3] text-[#065A82] hover:bg-[#1C7293] hover:text-white transition-colors"
            >
              {g.page.shortTitle} ({g.items.length})
            </button>
          ))}
        </div>
      </section>

      {GROUPS.map((g) => (
        <section key={g.page.id} id={groupId(g.page.id)} className="scroll-mt-32 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#1C7293]/30 pb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
              <span className="text-[#1C7293]">Section {g.page.number}.</span> {g.page.shortTitle}
            </h2>
            <button
              type="button"
              onClick={() => onNavigate(g.page.id)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#065A82] hover:underline"
            >
              Open the {g.page.shortTitle} page <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {g.items.map((a) => (
              <article
                key={a.label}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5 flex flex-col"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block rounded-full bg-[#21295C] text-white text-sm font-bold px-3 py-1">
                    {a.label}
                  </span>
                  <span className="text-xs font-medium text-slate-500">On the {g.page.shortTitle} page</span>
                </div>
                <h3 className="mt-3 font-bold text-lg text-[#21295C] leading-snug">{a.name}</h3>
                <dl className="mt-2 space-y-1.5 text-sm text-slate-700 leading-relaxed grow">
                  <div>
                    <dt className="inline font-semibold text-[#21295C]">Made by: </dt>
                    <dd className="inline">{a.by}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[#21295C]">Why we made it: </dt>
                    <dd className="inline">{a.why}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[#21295C]">What it shows: </dt>
                    <dd className="inline">{a.shows}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={() => onNavigate(a.page, anchorFor(a.label))}
                  className="mt-4 self-start inline-flex items-center gap-2 rounded-xl bg-[#1C7293] hover:bg-[#065A82] text-white font-bold text-sm px-4 py-2.5 shadow-sm transition-colors"
                  aria-label={`Go to ${a.label}, ${a.name}, on the ${g.page.shortTitle} page`}
                >
                  Go to {a.label} <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </section>
      ))}

      <PagePagination currentPageId="artefacts" onNavigate={onNavigate} />
    </div>
  );
};
