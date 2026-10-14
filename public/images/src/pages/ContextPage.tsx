import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ArtefactNote } from '../components/ArtefactNote';
import { DraftBadge } from '../components/DraftBadge';
import { Photo } from '../components/Photo';
import { MONTHS, RAIN } from '../data/rainfall';

interface ContextPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * PAGE 2: CONTEXT
 * New abbreviations defined here: YAC, BOM, AWA, NWGA.
 */
export const ContextPage: React.FC<ContextPageProps> = ({ onNavigate }) => {
  const max = Math.max(...RAIN);

  const pestle = [
    {
      letter: 'P',
      name: 'Political',
      points: [
        'Lama Lama Country is governed through YAC. Any work on Country needs agreement from YAC, the Rangers and Elders (YAC, n.d.-a).',
        'The Australian Government has set aside funding for First Nations water infrastructure, but not for our project (National Water Grid Authority [NWGA], n.d.).',
      ],
    },
    {
      letter: 'E',
      name: 'Economic',
      points: [
        'Port Stewart is remote, so freight and travel add a lot to any project cost (Best Rated Transport, 2026).',
        'Running costs have to stay low, because the community cannot easily pay for chemicals, parts or call-out visits.',
      ],
    },
    {
      letter: 'S',
      name: 'Social',
      points: [
        'The community uses river water for washing, cooking and cleaning, because the rainwater tanks cannot supply enough for these uses (EWB, 2026).',
        'The system must be easy to learn. Some Lama Lama locals are already trained in water testing and maintenance, which is the kind of skill the design builds on (National Indigenous Times, 2024).',
      ],
    },
    {
      letter: 'T',
      name: 'Technological',
      points: [
        'Aeration followed by filtration has removed iron in comparable treatment plants (Hiiob & Karro, 2012).',
        'The site has no mains power, so the design uses the existing pump and passive aeration instead of electrical equipment (EWB, n.d.).',
      ],
    },
    {
      letter: 'L',
      name: 'Legal',
      points: [
        'The ADWG give 0.30 mg/L as the aesthetic guideline value for iron (NHMRC, 2025a).',
        'The Aboriginal Cultural Heritage Act 2003 (Qld) places a duty of care on anyone working on the land, so heritage clearance comes before any digging or slab work (Queensland Government, 2003).',
      ],
    },
    {
      letter: 'E',
      name: 'Environmental',
      points: [
        'Most rain falls between December and April, and cyclones can damage equipment (Figure 2; AWA, 2018; BOM, 2026).',
        'The iron solids that we wash out of the filters must drain away from the river and from the community water supply.',
      ],
    },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={2}
        title="Context: About Lama Lama"
        subtitle="Where Port Stewart is, what the climate is like, and how the water supply got to where it is now."
        assignedAuthor="Tan Dong"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Where is Port Stewart?</h2>
        <p className="text-slate-700 leading-relaxed">
          Port Stewart is on the east coast of Cape York Peninsula, beside Princess Charlotte Bay. It is on Lama Lama
          Country. The Lama Lama people care for this Country, and it is governed through the Yintjingga Aboriginal
          Corporation (YAC; EWB, 2026; YAC, n.d.-b).
        </p>
        <p className="text-slate-700 leading-relaxed">
          Roads to the community can be cut off when creeks and rivers flood, which makes deliveries and repair visits
          difficult (RDA Tropical North, 2023).
        </p>

        <ImagePlaceholder
          figureNumber="Figure 1"
          figureTitle="Map of Lama Lama Country"
          imageFile="figure-1-map.png"
          noteText="Map from YAC (2014). Reproduced to show the Lama Lama Country boundary, Princess Charlotte Bay and the Stewart River."
          altText="Map of Lama Lama Country showing Princess Charlotte Bay and the Stewart River"
        />
        <ArtefactNote
          why="We needed to show where the project is, and who the land belongs to, before talking about the water."
          tells="Port Stewart is far from large towns and sits on Aboriginal-owned land (see the map legend), so any work there has to be agreed with the Traditional Owners."
        />
        <Photo
          file="photo-river.jpg"
          alt="Satellite image of Princess Charlotte Bay on Cape York Peninsula with a brown plume of river water entering the bay"
          figureNumber="Figure 1a"
          title="Princess Charlotte Bay From Space, 9 February 2007"
          narrow
          credit="From River plumes threaten Great Barrier Reef [Satellite image], by the MODIS Rapid Response Team, 2007, NASA Earth Observatory (https://science.nasa.gov/earth/earth-observatory/river-plumes-threaten-great-barrier-reef-7537/). In the public domain. MODIS is the Moderate Resolution Imaging Spectroradiometer, an instrument on a NASA satellite."
        />
        <ArtefactNote
          why="We could not show a photo of the Stewart River itself, so we used a real satellite image of the bay the river flows into."
          tells="After heavy rain, brown river water spreads across Princess Charlotte Bay (MODIS Rapid Response Team, 2007). It shows how much sediment the wet season moves, and why the water supply changes through the year."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Climate: wet and dry seasons</h2>
        <p className="text-slate-700 leading-relaxed">
          Cape York has a strong wet season and dry season. We used long-term rainfall records from the Bureau of
          Meteorology (BOM) station at Lockhart River Airport as a guide for the region. It is on Cape York but it is
          not at Port Stewart, so Port Stewart's own numbers will be different. About 85% of the yearly rain falls
          between December and April (BOM, 2026).
        </p>
        <figure className="w-full">
          <div className="mb-2 text-left">
            <div className="font-bold text-sm text-[#21295C]">Figure 2</div>
            <div className="italic text-sm text-slate-800 font-medium">
              Mean Monthly Rainfall at Lockhart River Airport, 1956–2026
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-end gap-1.5 sm:gap-2 h-56" role="img" aria-label="Bar chart of mean monthly rainfall, highest from December to April">
              {RAIN.map((mm, i) => {
                const wet = i === 11 || i <= 3;
                return (
                  <div key={MONTHS[i]} className="flex-1 flex flex-col items-center justify-end h-full">
                    <span className="text-[10px] sm:text-xs text-slate-600 mb-1">{Math.round(mm)}</span>
                    <div
                      className={`w-full rounded-t ${wet ? 'bg-[#1C7293]' : 'bg-slate-300'}`}
                      style={{ height: `${(mm / max) * 85}%` }}
                    />
                    <span className="text-[10px] sm:text-xs text-slate-500 mt-1">{MONTHS[i]}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#1C7293]" /> Wet season (Dec–Apr)</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-slate-300" /> Dry and in-between months (May–Nov)</span>
              <span>Rainfall in millimetres</span>
            </div>
          </div>
          <figcaption className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
            <span className="italic font-semibold">Note.</span> Data from BOM (2026), Lockhart River Airport (site
            028008), used as a regional guide. The wet and dry labels are our grouping of the monthly totals.
          </figcaption>
        </figure>
        <ArtefactNote
          why="The tutor feedback and our own design both depend on timing. We needed real rainfall data to decide when freight and installation can happen."
          tells="June to October each get less than 60 mm of rain, so that is the safest time for freight and building. December to April is when roads are most likely to be cut."
        />
        <div className="grid sm:grid-cols-2 gap-4 text-slate-700 leading-relaxed">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Dry season (about June–October)</h3>
            <p className="text-sm">
              River levels drop. Each dry season, when the river falls below the bed sand, the community digs an
              improvised pond in the riverbed so that the pump can keep working (EWB, n.d.). Roads are open, so this is
              the time for deliveries.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Wet season (about December–April)</h3>
            <p className="text-sm">
              Heavy rain, flooding and cyclones. Road access can be cut (RDA Tropical North, 2023), so parts and
              technicians cannot get in. Equipment must be built to survive wind and flood.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">How the water supply got here</h2>
        <ol className="space-y-4 border-l-2 border-[#1C7293]/40 pl-5">
          <li>
            <div className="text-xs font-semibold text-[#1C7293]">2006</div>
            <p className="text-slate-700 leading-relaxed">
              A cyclone destroyed the original river intake (Australian Water Association [AWA], 2018). Since then the community has used a diesel pump
              to take water from the river (EWB, n.d.).
            </p>
          </li>
          <li>
            <div className="text-xs font-semibold text-[#1C7293]">2015 onwards</div>
            <p className="text-slate-700 leading-relaxed">
              The engineering company Arup began working with EWB and YAC on a better water
              supply (AWA, 2018; EWB, 2019).
            </p>
          </li>
          <li>
            <div className="text-xs font-semibold text-[#1C7293]">Planned by EWB and Arup</div>
            <p className="text-slate-700 leading-relaxed">
              A new intake below the river bed sands, with solar-powered submersible pumps and a backup diesel
              generator. Arup also designed an iron-removal treatment, and the preferred option is aeration and
              filtration (EWB, n.d.).
            </p>
          </li>
          <li>
            <div className="text-xs font-semibold text-[#1C7293]">Today (the gap we work on)</div>
            <p className="text-slate-700 leading-relaxed">
              The river water still has high dissolved iron, and earlier filters were blocked by it (EWB, 2026). Our
              project is the treatment step, Design Area 6.2.
            </p>
          </li>
        </ol>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
          Political, Economic, Social, Technological, Legal and Environmental (PESTLE) analysis<DraftBadge />
        </h2>
        <p className="text-slate-700 leading-relaxed">
          We used a PESTLE analysis to look at the outside factors that shape our design, before we wrote our
          requirements.
        </p>
        <div className="mb-2 text-left">
          <div className="font-bold text-sm text-[#21295C]">Table 1</div>
          <div className="italic text-sm text-slate-800 font-medium">PESTLE Analysis for Water Treatment at Port Stewart</div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className="p-3 w-40">Factor</th>
                <th className="p-3">What we found</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {pestle.map((row, i) => (
                <tr key={i} className="align-top">
                  <td className="p-3 font-semibold text-[#21295C]">
                    {row.letter} – {row.name}
                  </td>
                  <td className="p-3">
                    <ul className="list-disc pl-5 space-y-1">
                      {row.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ArtefactNote
          why="PESTLE makes us look at more than the technical problem. We wanted to find the legal, cultural and seasonal limits before choosing a design."
          tells="Cultural heritage clearance, low running costs, and building for wet and dry seasons are all requirements, not extras. Each one appears in our design requirements on the Define page."
        />
      </section>

      <PagePagination currentPageId="context" onNavigate={onNavigate} />
    </div>
  );
};
