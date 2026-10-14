import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { Figure } from '../components/Figure';
import { ArtefactNote } from '../components/ArtefactNote';
import { MONTHS, RAIN } from '../data/rainfall';

interface ContextPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * PAGE 2: CONTEXT
 * Abbreviations written out here for the first time: BOM, NWGA, CfAT, LLLT, MODIS.
 * (YAC, EWB, TMR, NHMRC and ADWG were written out on the Home page.)
 */
export const ContextPage: React.FC<ContextPageProps> = ({ onNavigate }) => {
  const max = Math.max(...RAIN);

  const pestle: { letter: string; name: string; points: React.ReactNode[] }[] = [
    {
      letter: 'P',
      name: 'Political',
      points: [
        'Land Trusts hold land for Traditional Owners and authorise decisions about what happens on Country. YAC manages projects for the Lama Lama people, and the Lama Lama Land Trust endorses them (YAC, n.d.-b).',
        'The Australian Government has allocated $150 million through the National Water Grid Fund for First Nations water infrastructure. It can pay for construction, including water treatment systems, but proposals must show engagement with the communities and manage cultural heritage impacts (National Water Grid Authority [NWGA], n.d.).',
      ],
    },
    {
      letter: 'E',
      name: 'Economic',
      points: [
        'Port Stewart is remote, so freight and travel add a lot to any project cost. A freight guide says surcharges for remote Cape York can add 30–80% to standard freight rates (Best Rated Transport, 2026).',
        'Running costs have to stay low. The community is small, and chemicals, parts and call-out visits all have to come from far away.',
      ],
    },
    {
      letter: 'S',
      name: 'Social',
      points: [
        'Rainwater covers drinking but not other household uses, so river water has to supply the rest (EWB, 2026).',
        'The unit has to be easy to learn. Some Lama Lama locals are due to be trained in water testing and maintenance for the new rainwater system (Prestipino, 2024), so there are local skills to build on.',
      ],
    },
    {
      letter: 'T',
      name: 'Technological',
      points: [
        'Aeration followed by a filter is a standard way to remove iron (Swistock et al., 2025). In Estonia, three of four plants that aerate and then filter removed more than 90% of their iron, and the fourth removed 43% (Hiiob & Karro, 2012).',
        'The treatment that EWB and Arup recommend for the iron at Port Stewart needs no power or chemicals (EWB, n.d.). Our unit follows that approach and uses the pump flow to draw in air.',
      ],
    },
    {
      letter: 'L',
      name: 'Legal',
      points: [
        'The ADWG give 0.3 mg/L as the aesthetic guideline value for iron (NHMRC, 1996). We use it as our target.',
        <>
          A person who carries out an activity must take all reasonable and practicable measures not to harm Aboriginal
          cultural heritage (<em>Aboriginal Cultural Heritage Act 2003</em> (Qld) s 23). We would agree a heritage
          approach with the Traditional Owners before any digging or slab work.
        </>,
      ],
    },
    {
      letter: 'E',
      name: 'Environmental',
      points: [
        'Most rain falls between December and April (Figure 2), and a cyclone has already destroyed the river intake once (EWB, 2019). Equipment has to be built for wind and flood.',
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
          Port Stewart is in eastern Cape York Peninsula, near Princess Charlotte Bay (Figure 1). It is on Lama
          Lama Country. The Lama Lama people are the Traditional Owners of the land and waters around the bay. YAC is
          their not-for-profit organisation, and it manages projects for the Lama Lama Land Trust (LLLT) and the people
          (YAC, n.d.-c). The Port Stewart Ranger Base is there too (YAC, n.d.-c).
        </p>
        <p className="text-slate-700 leading-relaxed">
          Floods can cut the roads. Wet-season closures can isolate communities in Cape York for up to five months a
          year, which makes deliveries and repair visits hard (TMR, 2023).
        </p>

        <Figure
          number="Figure 1"
          title="Map of Lama Lama Country"
          file="figure-1-map.png"
          alt="Map of Lama Lama Country showing Princess Charlotte Bay, Port Stewart and the Stewart River"
          credit={
            <>
              From <em>Aakurru (Our home)</em> [Map], by Yintjingga Aboriginal Corporation, n.d.-a
              (https://www.lamalama.org.au/country/). The website does not name the map's creator or give a date.
            </>
          }
        />
        <ArtefactNote
          why="Before talking about water, we wanted readers to see where Port Stewart is and whose Country it is."
          tells="The map legend says Aboriginal freehold land is private property owned and managed by Traditional Owners, so any work at Port Stewart has to be agreed with them."
        />

        <p className="text-slate-700 leading-relaxed">
          We could not find a photo of the Stewart River, so Figure 1a shows the bay it runs towards. The National Aeronautics and Space
          Administration (NASA) took the image with its Moderate Resolution Imaging Spectroradiometer (MODIS) on 9
          February 2007, after heavy rain.
        </p>
        <Figure
          number="Figure 1a"
          title="Princess Charlotte Bay From Space, 9 February 2007"
          file="photo-river.jpg"
          narrow
          alt="Satellite image of Princess Charlotte Bay on Cape York Peninsula with a brown plume of river water entering the bay"
          credit={
            <>
              From <em>River plumes threaten Great Barrier Reef</em> [Satellite image], by the MODIS Rapid Response
              Team, NASA Goddard Space Flight Center, 2007, NASA Earth Observatory
              (https://science.nasa.gov/earth/earth-observatory/river-plumes-threaten-great-barrier-reef-7537/). NASA
              images are generally not subject to copyright in the United States (NASA, 2026).
            </>
          }
        />
        <ArtefactNote
          why="We had no photo of the Stewart River itself, so we used a satellite image of the bay."
          tells="After heavy rain in early 2007, rivers carried muddy water into Princess Charlotte Bay (MODIS Rapid Response Team, 2007). It shows how much water the wet season moves. It is not an image of the Stewart River."
        />
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Climate: wet and dry seasons</h2>
        <p className="text-slate-700 leading-relaxed">
          Cape York has a strong wet season and a strong dry season. For rainfall we used the long-term record from the
          Bureau of Meteorology (BOM) station at Lockhart River Airport (BOM, 2026). The station is on Cape York but it
          is not at Port Stewart, so Port Stewart's own numbers will differ. From December to April the station gets
          about 1,740 mm, which is more than 80% of its yearly rainfall.
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
            Created by the team using data from the Bureau of Meteorology (2026) for Lockhart River Airport (site
            028008). The wet and dry groupings are ours.
          </figcaption>
        </figure>
        <ArtefactNote
          why="Freight and building depend on the weather, so we needed real rainfall figures to choose a time window."
          tells="June to October each average less than 60 mm, which makes them the safest months for freight and building. Wet-season road closures run roughly from November to April (Best Rated Transport, 2026)."
        />
        <div className="grid sm:grid-cols-2 gap-4 text-slate-700 leading-relaxed">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Dry season (about June–October)</h3>
            <p className="text-sm">
              River levels drop. Each dry season, when the water falls below the bed sand, the community digs an
              improvised pond in the riverbed (EWB, n.d.). Roads are usually open, so this is the time for deliveries.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <h3 className="font-bold text-[#21295C] mb-1">Wet season (about December–April)</h3>
            <p className="text-sm">
              Heavy rain, flooding and cyclones. Roads can be cut for months (TMR, 2023), so parts and technicians cannot
              get in. Equipment has to survive wind and flood.
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
              A cyclone destroyed the original river intake (EWB, 2019). The community now draws water from the river with
              a diesel pump (EWB, n.d.).
            </p>
          </li>
          <li>
            <div className="text-xs font-semibold text-[#1C7293]">2015 onwards</div>
            <p className="text-slate-700 leading-relaxed">
              The engineering company Arup began giving pro bono engineering support to the project in 2015 (EWB, 2025).
              It designed a new river intake and then a treatment system, working with the Centre for Appropriate
              Technology (CfAT) and the community (EWB, n.d.).
            </p>
          </li>
          <li>
            <div className="text-xs font-semibold text-[#1C7293]">2018</div>
            <p className="text-slate-700 leading-relaxed">
              The Australian Water Association (AWA) reported on Arup's design, which aerates the water so the iron can be
              filtered out, with ultraviolet light for E. coli (AWA, 2018). An iron filter was installed in 2018 and has
              been bypassed for most of the time since (Todio, 2026).
            </p>
          </li>
          <li>
            <div className="text-xs font-semibold text-[#1C7293]">2024 and 2025</div>
            <p className="text-slate-700 leading-relaxed">
              The Yaru Foundation funded the materials for a rainwater system for drinking water, delivered by YAC and the LLLT, with
              training for local people planned (Prestipino, 2024; EWB, 2025).
            </p>
          </li>
          <li>
            <div className="text-xs font-semibold text-[#1C7293]">Planned by EWB and Arup</div>
            <p className="text-slate-700 leading-relaxed">
              A new intake below the river bed sands, with solar-powered submersible pumps and a backup diesel
              generator. For the iron, Arup's design names aeration and filtration as the preferred option (EWB, n.d.).
            </p>
          </li>
          <li>
            <div className="text-xs font-semibold text-[#1C7293]">Today (the gap we work on)</div>
            <p className="text-slate-700 leading-relaxed">
              The water still has a lot of dissolved iron (EWB, 2019), and the 2018 filter is mostly bypassed (Todio,
              2026). Our project is the treatment step, Design Area 6.2.
            </p>
          </li>
        </ol>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
          Political, Economic, Social, Technological, Legal and Environmental (PESTLE) analysis
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
          why="We looked for the legal, cultural and seasonal limits before choosing a design."
          tells="Cultural heritage, low running costs and building for the wet and dry seasons all shape our design requirements on the Define page."
        />
      </section>

      <PagePagination currentPageId="context" onNavigate={onNavigate} />
    </div>
  );
};
