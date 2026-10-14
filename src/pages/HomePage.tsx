import React from 'react';
import { PageId, PAGES } from '../types';
import { PagePagination } from '../components/PagePagination';
import { Photo } from '../components/Photo';
import { RANGE_TEXT } from '../data/costs';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * PAGE 1: HOME
 * Abbreviations are defined here the first time they appear on the site
 * (EWB, NHMRC, ADWG). After this they are used in short form (APA 7).
 */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-br from-[#21295C] via-[#065A82] to-[#1C7293] text-white p-8 sm:p-12 shadow-xl">
        <div className="max-w-4xl space-y-5">
          <p className="text-sm font-medium text-cyan-200">
            Engineers Without Borders Challenge 2026 · Design Area 6.2 Water quality and treatment
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Stewart River Iron-Removal System
          </h1>
          <p className="text-lg text-cyan-100 leading-relaxed">
            Port Stewart, Lama Lama Country, Cape York, Queensland
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/20 text-base sm:text-lg leading-relaxed">
            <span className="text-cyan-300 font-bold block text-xs uppercase tracking-wider mb-1">
              Project summary
            </span>
            This project is Design Area 6.2 of the Engineers Without Borders Australia (EWB) Challenge. The brief asks
            for a way to improve the quality of the river water used by the Lama Lama community at Port Stewart
            (EWB, 2026). Our answer is a low-maintenance iron treatment unit that connects to the pump and header tanks
            the community already has.
          </div>

          <div className="pt-1 flex flex-wrap items-center gap-3 text-sm text-cyan-100">
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
      </section>

      <Photo
        file="photo-home.jpg"
        alt="A Lama Lama ranger smiling beside the Welcome to Lama Lama Country sign"
        figureNumber="Figure H1"
        title="A Lama Lama ranger at the Welcome to Lama Lama Country sign"
        narrow
        credit="[Team to complete before sharing: photographer and year; where the photo came from, with a web address if online; and who gave permission for it to be used.] The sign was made by the Yintjingga Aboriginal Corporation."
      />

      {/* Why this project matters */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Why this project matters</h2>
        <p className="text-slate-700 leading-relaxed">
          Port Stewart is a small, remote community on Lama Lama Country in Far North Queensland (EWB, 2026). It
          depends on the Stewart River for most of its water. The rainwater tanks can supply drinking water, but not
          enough for everything else the community needs each day (EWB, 2026).
        </p>
        <p className="text-slate-700 leading-relaxed">
          The original river intake was destroyed by a cyclone in 2006. Since then the community has used a diesel pump
          to take water from the river (EWB, n.d.). The water has a lot of dissolved iron. Iron measured at two bores was 1.01 mg/L and 1.25 mg/L (EWB Challenge, n.d.). Iron stains basins and
          laundry and gives water a metallic taste. The National Health and Medical Research Council (NHMRC) sets an
          aesthetic guideline value of 0.30 mg/L in the Australian Drinking Water Guidelines (ADWG; NHMRC, 2025a).
          Earlier treatment attempts at Port Stewart stopped working because iron blocked the filters, and they were
          hard to maintain (EWB, 2026).
        </p>
        <p className="text-slate-700 leading-relaxed">
          So the problem is not only to remove iron. It is to remove iron in a way that the community can look after
          without specialist technicians, because the nearest help is a long drive away on roads that can be cut off in
          the wet season.
        </p>
      </section>

      {/* Key numbers */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C] mb-4">Three numbers to remember</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-[#065A82]">76%</div>
            <h3 className="font-bold text-[#21295C] mt-1">Minimum iron removal</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              The highest iron reading we have is 1.25 mg/L (EWB Challenge, n.d.). We need to get to 0.30 mg/L or less
              (NHMRC, 2025a). That means removing at least 76%.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-[#065A82]">33.3 L/min</div>
            <h3 className="font-bold text-[#21295C] mt-1">Design flow</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              The flow rate we used to size the unit and to run the Venturi simulation. It still needs to be checked
              against the real pump on site.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-[#065A82]">{RANGE_TEXT}</div>
            <h3 className="font-bold text-[#21295C] mt-1">Estimated cost</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Includes equipment, freight, labour, travel and a 20–25% contingency. These are our estimates and need
              supplier quotes.
            </p>
          </div>
        </div>
      </section>

      {/* How the design works, short */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Our design in four lines</h2>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-700 leading-relaxed">
          <li>The existing pump sends river water into our unit.</li>
          <li>A Venturi aerator pulls in air, which turns dissolved iron into solid particles.</li>
          <li>A 1,000 L tank lets the heavy particles settle out.</li>
          <li>Two backwashable filters catch the rest, and clean water flows to the existing header tanks.</li>
        </ol>
        <p className="text-sm text-slate-600">
          The full reasoning is on the Ideate, Prototype and Test pages. The pump and water supply limits are on the
          Define page.
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
