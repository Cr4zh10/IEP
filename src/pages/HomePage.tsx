import React from 'react';
import { PageId, PAGES } from '../types';
import { PagePagination } from '../components/PagePagination';
import { RANGE_TEXT, RUNNING_ROUNDED, OPERATOR_HOURS_PER_YEAR } from '../data/costs';
import { ArrowRight, ChevronRight, ClipboardList, Droplets, Filter, Wrench } from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: PageId, anchor?: string) => void;
}

const img = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

/** A word or phrase picked out in the summary so the eye lands on it first. */
const Mark: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <mark className="bg-amber-200 text-[#21295C] rounded px-1.5 py-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
    {children}
  </mark>
);

/**
 * PAGE 1: HOME
 * Abbreviations are written out here the first time they appear on the site
 * (EWB, AUD, NHMRC, ADWG, YAC, TMR). After this they are used in short form (APA 7).
 * Each picture here has one credit line, and a click takes the reader to the same artefact on its own page.
 */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const cost = RANGE_TEXT.replace(' AUD', '');

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-br from-[#21295C] via-[#065A82] to-[#1C7293] text-white shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 items-center p-8 sm:p-12">
          <div className="space-y-5">
            <p className="text-sm font-medium text-cyan-200">
              Engineers Without Borders Challenge 2026 · Design Area 6.2 Drinking water quality and treatment
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Stewart River Iron-Removal System
            </h1>
            <p className="text-lg text-cyan-100">Port Stewart, Lama Lama Country, Cape York, Queensland</p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-100">
              <span className="font-semibold text-white">Team:</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Ethan Illidge</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Huy Truong</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Natalia Tran</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Tan Dong</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('context')}
                className="inline-flex items-center gap-2 bg-white text-[#21295C] hover:bg-cyan-50 font-bold px-6 py-3 rounded-xl text-sm shadow-md"
              >
                Start with the context <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('artefacts')}
                className="inline-flex items-center gap-2 bg-[#065A82]/80 hover:bg-[#065A82] text-white font-semibold px-6 py-3 rounded-xl text-sm border border-white/20"
              >
                See every artefact we made
              </button>
            </div>
          </div>

          <figure>
            <button
              type="button"
              onClick={() => onNavigate('prototype', 'figure-6')}
              className="block w-full rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/25 hover:ring-white/50 transition"
              aria-label="Open Figure 6, the concept render, on the Prototype page"
            >
              <img
                src={img('home-concept.jpg')}
                alt="Concept render of the treatment unit under a steel roof: the existing river pump, the Venturi aerator, a 2,000 litre tank and two filters, with the Stewart River behind"
                className="w-full h-auto block"
              />
            </button>
            <figcaption className="mt-2 text-xs text-cyan-100 leading-relaxed">
              <span className="font-semibold text-white">Figure 6.</span> Concept render. Image generated with ChatGPT
              (OpenAI, 2026) from the team's schematic. It is an illustration, not an engineered drawing.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Project summary: the first thing a reader should notice after the title */}
      <section
        aria-labelledby="project-summary"
        className="rounded-3xl bg-white border-2 border-[#1C7293] shadow-xl overflow-hidden"
      >
        <div className="bg-[#1C7293] text-white px-6 sm:px-8 py-3 flex items-center gap-3">
          <ClipboardList size={26} aria-hidden="true" />
          <h2 id="project-summary" className="text-xl sm:text-2xl font-black uppercase tracking-wide">
            Project summary
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 p-6 sm:p-8">
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl leading-snug font-semibold text-[#21295C]">
              This project is Design Area 6.2, Drinking water quality and treatment, of the Engineers Without Borders
              Australia (EWB) Challenge (EWB, 2026). We designed a <Mark>low-maintenance iron treatment unit</Mark> for
              the <Mark>Lama Lama community at Port Stewart</Mark>. It connects to the{' '}
              <Mark>pump and tanks the community already has</Mark>.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-4 items-start rounded-2xl bg-amber-50 border border-amber-200 p-4">
                <span className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <Droplets size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-black text-[#21295C] text-lg">The problem</h3>
                  <p className="text-slate-800 leading-snug">
                    Two bores measured <strong>1.01 and 1.25 mg/L of iron</strong> (Todio, 2026). The guideline value
                    is 0.3 mg/L (National Health and Medical Research Council [NHMRC], 1996).
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start rounded-2xl bg-sky-50 border border-sky-200 p-4">
                <span className="w-12 h-12 rounded-full bg-[#065A82] text-white flex items-center justify-center shrink-0">
                  <Filter size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-black text-[#21295C] text-lg">Our design</h3>
                  <p className="text-slate-800 leading-snug">
                    A Venturi aerator draws in air, a <strong>2,000 L tank</strong> lets the iron settle, and{' '}
                    <strong>two backwashable filters</strong> catch the rest. No chemicals and no powered parts.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                <span className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Wrench size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-black text-[#21295C] text-lg">The cost and the plan</h3>
                  <p className="text-slate-800 leading-snug">
                    About <strong>{cost}</strong> in Australian dollars (AUD) to build and install, and about{' '}
                    <strong>{RUNNING_ROUNDED} a year</strong> to run. We ask the community for permission first and
                    work in the dry season.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#065A82]">The place and the evidence</p>
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3">
                <figure>
                  <button
                    type="button"
                    onClick={() => onNavigate('context', 'figure-1a')}
                    className="block w-full rounded-xl overflow-hidden border border-slate-200 hover:ring-2 hover:ring-[#1C7293] transition"
                    aria-label="Open Figure 1a, the satellite image of Princess Charlotte Bay, on the Context page"
                  >
                    <img
                      src={img('photo-river.jpg')}
                      alt="Satellite image of Princess Charlotte Bay with a brown plume of river water entering the bay"
                      className="w-full h-36 object-cover block"
                    />
                  </button>
                  <figcaption className="mt-1.5 text-xs text-slate-600 leading-snug">
                    <span className="font-semibold text-[#21295C]">Figure 1a.</span> Princess Charlotte Bay from
                    space, by the Moderate Resolution Imaging Spectroradiometer (MODIS) Rapid Response Team, 2007.
                  </figcaption>
                </figure>
                <figure>
                  <button
                    type="button"
                    onClick={() => onNavigate('test-results', 'figure-8')}
                    className="block w-full rounded-xl overflow-hidden border border-slate-200 bg-white hover:ring-2 hover:ring-[#1C7293] transition"
                    aria-label="Open Figure 8, the Venturi velocity simulation, on the Test and Results page"
                  >
                    <img
                      src={img('figure-4-velocity.png')}
                      alt="Simulation of water speeding up through the narrow throat of the Venturi aerator"
                      className="w-full h-36 object-cover object-center block"
                    />
                  </button>
                  <figcaption className="mt-1.5 text-xs text-slate-600 leading-snug">
                    <span className="font-semibold text-[#21295C]">Figure 8.</span> Venturi velocity simulation,
                    created by Ethan Illidge using SimScale (SimScale GmbH, 2026).
                  </figcaption>
                </figure>
              </div>
              <figure>
                <button
                  type="button"
                  onClick={() => onNavigate('test-results', 'figure-9')}
                  className="block w-full rounded-xl overflow-hidden border border-slate-200 bg-white hover:ring-2 hover:ring-[#1C7293] transition"
                  aria-label="Open Figure 9, the chart of iron removal at four plants, on the Test and Results page"
                >
                  <img
                    src={img('figure-5-iron-removal.png')}
                    alt="Bar chart of iron removal at four plants: 92.4, 97.6, 98.0 and 43.3 percent. A dashed line marks the 76 percent needed at Port Stewart. Three bars are above the line and one is below it."
                    className="w-full h-auto block"
                  />
                </button>
                <figcaption className="mt-1.5 text-xs text-slate-600 leading-snug">
                  <span className="font-semibold text-[#21295C]">Figure 9.</span> Iron removal at four plants that
                  aerate and then filter, created by the team using data from Hiiob and Karro (2012).
                </figcaption>
              </figure>
              <p className="text-xs text-slate-600 leading-snug">Select a picture to open it on its own page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this project matters */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Why this project matters</h2>
        <p className="text-slate-700 leading-relaxed">
          Port Stewart is a small community on Lama Lama Country, in eastern Cape York Peninsula (Yintjingga
          Aboriginal Corporation [YAC], n.d.-d). The Challenge forum asks teams to assume about 40 people use the water
          (Todio, 2026). The community pumps its water from the Stewart River. Rainwater tanks can supply drinking
          water, but not enough for the other things the community needs water for (EWB, 2026).
        </p>
        <p className="text-slate-700 leading-relaxed">
          A cyclone destroyed the original river intake in 2006, and the community now uses a diesel pump to take water
          from the river (EWB, n.d.). The water has a lot of dissolved iron (EWB, 2019). Iron stains basins and laundry
          and gives water a metallic taste. The Australian Drinking Water Guidelines (ADWG) set an aesthetic guideline
          value of 0.3 mg/L (NHMRC, 1996). An iron filter installed in 2018 has been bypassed for most of the time
          since (Todio, 2026).
        </p>
        <p className="text-slate-700 leading-relaxed">
          The unit also has to be something the community can look after without specialist technicians. The nearest
          help is a long way off, and wet-season flooding can close roads in Cape York for up to five months a year
          (Queensland Department of Transport and Main Roads [TMR], 2023).
        </p>
      </section>

      {/* Key numbers */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C] mb-4">Key numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-[#065A82]">76%</div>
            <h3 className="font-bold text-[#21295C] mt-1">Minimum iron removal</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              The highest iron reading we have is 1.25 mg/L, from a bore (Todio, 2026). The guideline value is 0.3 mg/L
              (NHMRC, 1996). Going from 1.25 to 0.3 means removing at least 76%.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-[#065A82]">33.3 L/min</div>
            <h3 className="font-bold text-[#21295C] mt-1">Design flow</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              The flow we chose to size the unit and to run the Venturi simulation. It is a design assumption, not a
              measured pump flow.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-[#065A82]">{cost}</div>
            <h3 className="font-bold text-[#21295C] mt-1">Estimated cost to build</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Equipment, freight, labour, two trips and a 20–25% contingency, in AUD. Some prices come from suppliers and
              the rest are our allowances, so the Costs page marks which is which.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-[#065A82]">{RUNNING_ROUNDED} a year</div>
            <h3 className="font-bold text-[#21295C] mt-1">Estimated cost to run</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Test kits, filter media, spare parts and about {OPERATOR_HOURS_PER_YEAR} hours a year of operator time,
              valued at the minimum wage.
            </p>
          </div>
        </div>
      </section>

      {/* How the design works, short */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">How the unit works</h2>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-700 leading-relaxed">
          <li>The existing pump sends river water into the unit.</li>
          <li>
            A Venturi aerator pulls in air. The oxygen turns dissolved iron into solid particles (SUEZ, n.d.).
          </li>
          <li>A 2,000 L tank gives the particles about an hour to settle.</li>
          <li>Two backwashable filters catch what is left, and the treated water goes to the existing tanks.</li>
        </ol>
        <p className="text-sm text-slate-600">
          The reasoning is on the Ideate, Prototype and Test pages. The limits of the pump and the water supply are on
          the Define page.
        </p>
      </section>

      {/* Navigation */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C] mb-1">Pages on this site</h2>
        <p className="text-sm text-slate-600 mb-4">The pages follow the order we worked in.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAGES.filter((p) => p.id !== 'home').map((page) => (
            <button
              key={page.id}
              type="button"
              onClick={() => onNavigate(page.id)}
              className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-[#1C7293] hover:shadow-md text-left transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#1C7293]">Section {page.number}</span>
                <h3 className="font-bold text-[#21295C] mt-0.5">{page.title}</h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{page.description}</p>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#065A82]">
                Open <ChevronRight size={14} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <PagePagination currentPageId="home" onNavigate={onNavigate} />
    </div>
  );
};
