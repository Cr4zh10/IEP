import React, { useState } from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ExternalLink, Copy, Check, Search } from 'lucide-react';

interface ReferencesPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * One reference, set out the APA 7 way.
 *  - Stand-alone works and web pages: the title is italic (titleStyle 'italic').
 *  - Articles and parts of a larger work: the title is plain, and the periodical or parent work is italic.
 *  - Legislation has no author or year: the Act is italic and the jurisdiction follows in brackets.
 */
interface Reference {
  id: string;
  authors?: string;
  year?: string;
  title: string;
  titleStyle: 'italic' | 'plain';
  descriptor?: string;
  parentWork?: string;
  periodical?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  publisher?: string;
  jurisdiction?: string;
  retrieved?: string;
  url: string;
}

/**
 * ============================================================================
 * PAGE 13: REFERENCES (APA 7)
 * Alphabetical order, hanging indent. Entries by the same author go: no date
 * first (n.d.), then by year. Every in-text citation on the site has an entry
 * here, and every entry is cited at least once on the site.
 * Retrieval dates are given for product and statistics pages, because their
 * content changes (prices, climate records).
 * ============================================================================
 */
const REFERENCES: Reference[] = [
  {
    id: 'qld-achact-2003',
    title: 'Aboriginal Cultural Heritage Act 2003',
    jurisdiction: 'Qld',
    titleStyle: 'italic',
    url: 'https://www.legislation.qld.gov.au/view/html/inforce/current/act-2003-079',
  },
  {
    id: 'ato-2025',
    authors: 'Australian Taxation Office',
    year: '2025',
    title: 'Taxation determination TD 2025/4: Income tax: Reasonable travel and overtime meal allowance expense amounts for the 2025–26 income year',
    titleStyle: 'italic',
    url: 'https://www.ato.gov.au/law/view/pdf/pbr/td2025-004.pdf',
  },
  {
    id: 'awa-2018',
    authors: 'Australian Water Association',
    year: '2018, April 23',
    title: 'Here’s how Arup helped an Indigenous community with water supply solutions',
    titleStyle: 'italic',
    url: 'https://www.awa.asn.au/resources/latest-news/community/customers/heres-how-arup-helped-an-indigenous-community-with-water-supply-solutions',
  },
  {
    id: 'best-rated-transport-2026',
    authors: 'Best Rated Transport',
    year: '2026, September 30',
    title: 'Sending freight to remote Queensland: A practical guide',
    titleStyle: 'italic',
    url: 'https://bestratedtransport.com.au/blog/sending-freight-to-remote-queensland-a-practical-guide',
  },
  {
    id: 'britannica-2026',
    authors: 'Britannica Editors',
    year: '2026, June 25',
    title: 'Venturi tube',
    titleStyle: 'plain',
    parentWork: 'Encyclopaedia Britannica',
    url: 'https://www.britannica.com/technology/venturi-tube',
  },
  {
    id: 'bom-2026',
    authors: 'Bureau of Meteorology',
    year: '2026',
    title: 'Climate statistics for Australian locations',
    titleStyle: 'italic',
    descriptor: '[Lockhart River Airport, site 028008]',
    retrieved: 'October 14, 2026',
    url: 'https://www.bom.gov.au/climate/averages/tables/cw_028008.shtml',
  },
  {
    id: 'chevalier-buckles-2008',
    authors: 'Chevalier, J. M., & Buckles, D. J.',
    year: '2008',
    title: 'SAS²: A guide to collaborative inquiry and social engagement',
    titleStyle: 'italic',
    publisher: 'SAGE Publications; International Development Research Centre',
    url: 'https://idl-bnc-idrc.dspacedirect.org/handle/10625/35977',
  },
  {
    id: 'clark-tanks-nd',
    authors: 'Clark Tanks',
    year: 'n.d.',
    title: '2000L round poly water tank',
    titleStyle: 'italic',
    descriptor: '[Product page]',
    retrieved: 'October 14, 2026',
    url: 'https://clarktanks.com.au/products/2000l-round-tank',
  },
  {
    id: 'ewb-nd',
    authors: 'Engineers Without Borders Australia',
    year: 'n.d.',
    title: 'Lama Lama, Queensland',
    titleStyle: 'italic',
    descriptor: '[Project page]',
    url: 'https://ewb.org.au/project/lama-lama-water-supply-project/',
  },
  {
    id: 'ewb-2019',
    authors: 'Engineers Without Borders Australia',
    year: '2019, September 4',
    title: 'Lama Lama water supply project',
    titleStyle: 'italic',
    descriptor: '[Blog post]',
    url: 'https://ewb.org.au/blog/2019/09/04/lama-lama-water-supply-project/',
  },
  {
    id: 'ewb-2025',
    authors: 'Engineers Without Borders Australia',
    year: '2025, May 14',
    title: 'The power of partnerships: Unlocking access to clean water on Lama Lama Country',
    titleStyle: 'italic',
    descriptor: '[Blog post]',
    url: 'https://ewb.org.au/blog/2025/05/14/the-power-of-partnerships-unlocking-access-to-clean-water-on-lama-lama-country/',
  },
  {
    id: 'ewb-2026',
    authors: 'Engineers Without Borders Australia',
    year: '2026',
    title: 'Port Stewart, Lama Lama',
    titleStyle: 'italic',
    descriptor: '[Design brief, login required]',
    publisher: 'EWB Challenge',
    url: 'https://ewbchallenge.org/challenge/port-stewart-lama-lama/',
  },
  {
    id: 'hiiob-karro-2012',
    authors: 'Hiiob, M., & Karro, E.',
    year: '2012',
    title: 'Iron in the Middle Devonian aquifer system and its removal at Võru County water treatment plants, Estonia',
    titleStyle: 'plain',
    periodical: 'Estonian Journal of Earth Sciences',
    volume: '61',
    issue: '3',
    pages: '181–190',
    url: 'https://doi.org/10.3176/earth.2012.3.04',
  },
  {
    id: 'mazzei-nd',
    authors: 'Mazzei Injector Company',
    year: 'n.d.',
    title: 'Venturi injectors',
    titleStyle: 'italic',
    descriptor: '[Product page]',
    url: 'https://mazzei.net/products/venturi-injectors/',
  },
  {
    id: 'mistakeproofing-nd',
    authors: 'Mistakeproofing Architecture Engineering and Construction',
    year: 'n.d.',
    title: 'Info',
    titleStyle: 'italic',
    descriptor: '[Web page listing the 40 TRIZ principles]',
    url: 'https://p2sl-mistakeproofing.berkeley.edu/about/',
  },
  {
    id: 'modis-2007',
    authors: 'MODIS Rapid Response Team',
    year: '2007, March 29',
    title: 'River plumes threaten Great Barrier Reef',
    titleStyle: 'italic',
    descriptor: '[Satellite image]',
    publisher: 'NASA Earth Observatory',
    url: 'https://science.nasa.gov/earth/earth-observatory/river-plumes-threaten-great-barrier-reef-7537/',
  },
  {
    id: 'molloy-2022',
    authors: 'Molloy, F.',
    year: '2022, October 18',
    title: 'Wastewater-treatment for inland, remote, water-stressed regions',
    titleStyle: 'italic',
    publisher: 'CSIRO',
    url: 'https://www.csiro.au/en/news/All/Articles/2022/October/wastewater-treatment-benefits-in-regions',
  },
  {
    id: 'nasa-2026',
    authors: 'National Aeronautics and Space Administration',
    year: '2026, August 13',
    title: 'Guidelines for using NASA images and media',
    titleStyle: 'italic',
    url: 'https://www.nasa.gov/nasa-brand-center/images-and-media/',
  },
  {
    id: 'nhmrc-1996',
    authors: 'National Health and Medical Research Council',
    year: '1996',
    title: 'Iron',
    titleStyle: 'plain',
    parentWork: 'Australian drinking water guidelines',
    url: 'https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/physical-chemical-characteristics/iron',
  },
  {
    id: 'nhmrc-2025',
    authors: 'National Health and Medical Research Council',
    year: '2025',
    title: 'Manganese',
    titleStyle: 'plain',
    parentWork: 'Australian drinking water guidelines',
    url: 'https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/physical-chemical-characteristics/manganese',
  },
  {
    id: 'nwga-nd',
    authors: 'National Water Grid Authority',
    year: 'n.d.',
    title: 'First Nations water',
    titleStyle: 'italic',
    url: 'https://www.nationalwatergrid.gov.au/node/156',
  },
  {
    id: 'nwga-2023',
    authors: 'National Water Grid Authority',
    year: '2023, February 13',
    title: 'Closing the Gap: $150 million towards First Nations water security',
    titleStyle: 'italic',
    url: 'https://nationalwatergrid.gov.au/node/155',
  },
  {
    id: 'nrma-2018',
    authors: 'NRMA',
    year: '2018, April 19',
    title: 'Cairns to Cape York',
    titleStyle: 'italic',
    url: 'https://www.mynrma.com.au/open-road/road-trips/cairns-to-cape-york',
  },
  {
    id: 'openai-2026',
    authors: 'OpenAI',
    year: '2026',
    title: 'ChatGPT',
    titleStyle: 'italic',
    descriptor: '[Large language model]',
    url: 'https://chatgpt.com/',
  },
  {
    id: 'oz-filter-nd',
    authors: 'Oz Filter Warehouse',
    year: 'n.d.',
    title: 'Alpine Pure Filox backwash systems',
    titleStyle: 'italic',
    descriptor: '[Product page]',
    retrieved: 'October 14, 2026',
    url: 'https://www.ozfilterwarehouse.com.au/product/Whole-House-Filox-Backwashable-Filter',
  },
  {
    id: 'prestipino-2024',
    authors: 'Prestipino, D.',
    year: '2024, October 16',
    title: 'Safe, reliable drinking water coming to remote Queensland communities',
    titleStyle: 'plain',
    periodical: 'National Indigenous Times',
    url: 'https://nit.com.au/16-10-2024/14297/safe-reliable-drinking-water-coming-to-remote-queensland-communities',
  },
  {
    id: 'puretec-nd',
    authors: 'Puretec',
    year: 'n.d.',
    title: 'I-STOP-X40',
    titleStyle: 'italic',
    descriptor: '[Product page]',
    retrieved: 'October 14, 2026',
    url: 'https://www.puretec.com.au/I-STOP-X40',
  },
  {
    id: 'tmr-2023',
    authors: 'Queensland Department of Transport and Main Roads',
    year: '2023',
    title: 'Cape York Region Package: Social, environmental and economic impact assessment',
    titleStyle: 'italic',
    descriptor: '[Evaluation report]',
    url: 'https://www.rdatropicalnorth.org.au/wp-content/uploads/2024/12/RPT-2022.12-CYRP-SEEIA-Report-2023-.pdf',
  },
  {
    id: 'qra-2019',
    authors: 'Queensland Reconstruction Authority',
    year: '2019',
    title: 'Cyclone resilient building guidance for Queensland homes',
    titleStyle: 'italic',
    url: 'https://www.qra.qld.gov.au/sites/default/files/2019-12/cyclone_resilience_building_guidelines_-_dec19.pdf',
  },
  {
    id: 'simscale-2026',
    authors: 'SimScale GmbH',
    year: '2026',
    title: 'SimScale',
    titleStyle: 'italic',
    descriptor: '[Computer software]',
    url: 'https://www.simscale.com/',
  },
  {
    id: 'suez-nd',
    authors: 'SUEZ',
    year: 'n.d.',
    title: 'Iron removal',
    titleStyle: 'plain',
    parentWork: 'Water handbook',
    url: 'https://www.suezwaterhandbook.com/processes-and-technologies/drinking-water-treatment/specifics-water-treatment/Iron-removal',
  },
  {
    id: 'swistock-2025',
    authors: 'Swistock, B. R., Sharpe, W. E., & Robillard, P. D.',
    year: '2025, May 29',
    title: 'Iron and manganese in private water systems',
    titleStyle: 'italic',
    publisher: 'Penn State Extension',
    url: 'https://extension.psu.edu/iron-and-manganese-in-private-water-systems',
  },
  {
    id: 'todio-2026',
    authors: 'Todio, E.',
    year: '2026, May 11',
    title: 'Water filtration system',
    titleStyle: 'italic',
    descriptor: '[Online forum post]',
    publisher: 'EWB Challenge',
    url: 'https://ewbchallenge.org/forums/topic/water-filtration-system/',
  },
  {
    id: 'wtd-2026',
    authors: "What's The Damage?",
    year: '2026, October',
    title: 'Plumber hourly rates and call-out fees in Australia',
    titleStyle: 'italic',
    url: 'https://whatsthedamage.com.au/plumber-cost/hourly-rates-and-call-out-fees/',
  },
  {
    id: 'yac-nd-a',
    authors: 'Yintjingga Aboriginal Corporation',
    year: 'n.d.-a',
    title: 'Aakurru (Our home)',
    titleStyle: 'italic',
    descriptor: '[Map]',
    url: 'https://www.lamalama.org.au/country/',
  },
  {
    id: 'yac-nd-b',
    authors: 'Yintjingga Aboriginal Corporation',
    year: 'n.d.-b',
    title: 'Governance',
    titleStyle: 'italic',
    url: 'https://www.lamalama.org.au/governance/',
  },
  {
    id: 'yac-nd-c',
    authors: 'Yintjingga Aboriginal Corporation',
    year: 'n.d.-c',
    title: 'Welcome to Lama Lama Country',
    titleStyle: 'italic',
    url: 'https://www.lamalama.org.au/',
  },
];

/** Adds a full stop unless the text already ends in one, or in ? or !. */
const stop = (t: string) => (/[.?!]$/.test(t) ? t : `${t}.`);

/** Plain-text version of an entry, used by the Copy button. */
const plainCitation = (r: Reference): string => {
  const parts: string[] = [];
  if (r.authors) parts.push(`${stop(r.authors)} (${r.year}).`);
  if (r.jurisdiction) {
    parts.push(`${r.title} (${r.jurisdiction}).`);
  } else {
    parts.push(stop(`${r.title}${r.descriptor ? ' ' + r.descriptor : ''}`));
  }
  if (r.parentWork) parts.push(`In ${r.parentWork}.`);
  if (r.periodical) {
    const vol = r.volume ? `, ${r.volume}${r.issue ? `(${r.issue})` : ''}` : '';
    const pg = r.pages ? `, ${r.pages}` : '';
    parts.push(`${r.periodical}${vol}${pg}.`);
  }
  if (r.publisher) parts.push(stop(r.publisher));
  parts.push(r.retrieved ? `Retrieved ${r.retrieved}, from ${r.url}` : r.url);
  return parts.join(' ');
};

const EntryText: React.FC<{ r: Reference }> = ({ r }) => (
  <>
    {r.authors && (
      <>
        {stop(r.authors)} ({r.year}).{' '}
      </>
    )}
    {r.jurisdiction ? (
      <>
        <em>{r.title}</em> ({r.jurisdiction}).{' '}
      </>
    ) : r.titleStyle === 'italic' ? (
      <>
        <em>{r.title}</em>
        {r.descriptor ? ` ${r.descriptor}` : ''}.{' '}
      </>
    ) : (
      <>
        {stop(`${r.title}${r.descriptor ? ' ' + r.descriptor : ''}`)}{' '}
      </>
    )}
    {r.parentWork && (
      <>
        In <em>{r.parentWork}</em>.{' '}
      </>
    )}
    {r.periodical && (
      <>
        <em>{r.periodical}</em>
        {r.volume && (
          <>
            , <em>{r.volume}</em>
            {r.issue ? `(${r.issue})` : ''}
          </>
        )}
        {r.pages ? `, ${r.pages}` : ''}.{' '}
      </>
    )}
    {r.publisher && <>{stop(r.publisher)} </>}
    {r.retrieved && <>Retrieved {r.retrieved}, from </>}
  </>
);

/** Abbreviations in the order they first appear on the site. */
const ABBREVIATIONS: [string, string][] = [
  ['EWB', 'Engineers Without Borders Australia'],
  ['YAC', 'Yintjingga Aboriginal Corporation'],
  ['ADWG', 'Australian Drinking Water Guidelines'],
  ['NHMRC', 'National Health and Medical Research Council'],
  ['TMR', 'Queensland Department of Transport and Main Roads'],
  ['AUD', 'Australian dollars'],
  ['LLLT', 'Lama Lama Land Trust'],
  ['NASA', 'National Aeronautics and Space Administration'],
  ['MODIS', 'Moderate Resolution Imaging Spectroradiometer'],
  ['BOM', 'Bureau of Meteorology'],
  ['CfAT', 'Centre for Appropriate Technology'],
  ['AWA', 'Australian Water Association'],
  ['PESTLE', 'political, economic, social, technological, legal and environmental'],
  ['NWGA', 'National Water Grid Authority'],
  ['QRA', 'Queensland Reconstruction Authority'],
  ['TRIZ', 'Theory of Inventive Problem Solving'],
  ['CFD', 'computational fluid dynamics'],
  ['P&ID', 'piping and instrumentation diagram'],
  ['GST', 'goods and services tax'],
  ['ATO', 'Australian Taxation Office'],
  ['CSIRO', 'Commonwealth Scientific and Industrial Research Organisation'],
];

export const ReferencesPage: React.FC<ReferencesPageProps> = ({ onNavigate }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCopy = (r: Reference) => {
    try {
      void navigator.clipboard.writeText(plainCitation(r));
      setCopiedId(r.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      /* clipboard not available: nothing to do */
    }
  };

  const q = searchTerm.toLowerCase();
  const filtered = REFERENCES.filter(
    (r) =>
      (r.authors ?? '').toLowerCase().includes(q) ||
      r.title.toLowerCase().includes(q) ||
      (r.year ?? '').toLowerCase().includes(q),
  );

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={13}
        title="References"
        subtitle="Every source cited on this site, in APA 7 style and alphabetical order."
        assignedAuthor="All Team Members"
      />

      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by author, title or year"
            aria-label="Search the reference list"
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1C7293]"
          />
        </div>
        <div className="text-xs text-slate-500 shrink-0 font-medium">
          Showing {filtered.length} of {REFERENCES.length} references
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Reference list</h2>
        <div className="space-y-5">
          {filtered.map((r) => {
            const isCopied = copiedId === r.id;
            return (
              <article
                key={r.id}
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs sm:text-sm text-slate-800 leading-relaxed border-b border-slate-100 last:border-b-0 pb-4 last:pb-0"
              >
                <div className="flex-1" style={{ paddingLeft: '2rem', textIndent: '-2rem' }}>
                  <EntryText r={r} />
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline text-[#065A82] hover:text-[#1C7293] hover:underline break-all"
                  >
                    {r.url}
                    <ExternalLink size={12} className="shrink-0 inline ml-0.5" aria-hidden="true" />
                  </a>
                </div>
                <div className="shrink-0 self-start pt-1 pl-8 sm:pl-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(r)}
                    className="px-2.5 py-1 rounded-lg text-slate-500 hover:text-[#065A82] hover:bg-slate-100 transition-colors flex items-center gap-1 text-xs border border-slate-200"
                    title="Copy this reference as plain text"
                  >
                    {isCopied ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
          {filtered.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-sm">No references match “{searchTerm}”.</div>
          )}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Abbreviations used on this site</h2>
        <p className="text-sm text-slate-600">
          Each abbreviation is written out in full the first time it appears, and used in short form after that. The
          reference list always uses full names.
        </p>
        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-slate-700">
          {ABBREVIATIONS.map(([a, b]) => (
            <div key={a} className="flex gap-3">
              <dt className="font-semibold text-[#21295C] w-16 shrink-0">{a}</dt>
              <dd>{b}</dd>
            </div>
          ))}
        </dl>
      </section>

      <PagePagination currentPageId="references" onNavigate={onNavigate} />
    </div>
  );
};
