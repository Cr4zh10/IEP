import React, { useState } from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ExternalLink, Copy, Check, Search, BookOpen } from 'lucide-react';

interface ReferencesPageProps {
  onNavigate: (pageId: PageId) => void;
}

interface ReferenceEntry {
  id: string;
  authors: string;
  year: string;
  title: string;
  isStandaloneTitle: boolean; // Standalone work titles (books, reports, software) are italicised in APA 7
  sourceInfo: string;
  retrieved?: string;
  journalItalic?: string;
  volumeItalic?: string;
  issue?: string;
  pages?: string;
  url: string;
  fullCitationText: string;
}

/**
 * ============================================================================
 * PAGE 12: REFERENCES (APA 7th EDITION)
 * ----------------------------------------------------------------------------
 * Strictly alphabetical order, hanging indent (0.5 in / 2rem), journal titles
 * and volume numbers in italics, standalone works in italics, working links.
 * Every in-text citation across the website has an entry here, and every entry
 * is cited at least once in the site text.
 * ============================================================================
 */
export const ReferencesPage: React.FC<ReferencesPageProps> = ({ onNavigate }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const references: ReferenceEntry[] = [
    {
      id: 'awa-2018',
      authors: 'Australian Water Association',
      year: '2018, May 22',
      title: "Here's how Arup helped an Indigenous community with water supply solutions",
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://www.awa.asn.au/resources/latest-news/community/customers/heres-how-arup-helped-an-indigenous-community-with-water-supply-solutions',
      fullCitationText:
        "Australian Water Association. (2018, May 22). Here's how Arup helped an Indigenous community with water supply solutions. https://www.awa.asn.au/resources/latest-news/community/customers/heres-how-arup-helped-an-indigenous-community-with-water-supply-solutions",
    },
    {
      id: 'best-rated-transport-2026',
      authors: 'Best Rated Transport',
      year: '2026',
      title: 'Sending freight to remote Queensland: A practical guide',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://bestratedtransport.com.au/blog/sending-freight-to-remote-queensland-a-practical-guide',
      fullCitationText:
        'Best Rated Transport. (2026). Sending freight to remote Queensland: A practical guide. https://bestratedtransport.com.au/blog/sending-freight-to-remote-queensland-a-practical-guide',
    },
    {
      id: 'clark-tanks-2025',
      authors: 'Clark Tanks',
      year: '2025',
      title: 'Tank and agricultural product brochure',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://clarktanks.com.au/wp-content/uploads/2025/06/CTDalby-Tank-Brochure_2025.pdf',
      fullCitationText:
        'Clark Tanks. (2025). Tank and agricultural product brochure. https://clarktanks.com.au/wp-content/uploads/2025/06/CTDalby-Tank-Brochure_2025.pdf',
    },
    {
      id: 'csiro-2022',
      authors: 'Commonwealth Scientific and Industrial Research Organisation',
      year: '2022',
      title: 'Wastewater treatment for inland, remote, water-stressed regions',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://www.csiro.au/en/news/All/Articles/2022/October/wastewater-treatment-benefits-in-regions',
      fullCitationText:
        'Commonwealth Scientific and Industrial Research Organisation. (2022). Wastewater treatment for inland, remote, water-stressed regions. https://www.csiro.au/en/news/All/Articles/2022/October/wastewater-treatment-benefits-in-regions',
    },
    {
      id: 'ewb-nd',
      authors: 'Engineers Without Borders Australia',
      year: 'n.d.',
      title: 'Infrastructure for water supply: Lama Lama, Queensland',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://ewb.org.au/project/lama-lama-water-supply-project/',
      fullCitationText:
        'Engineers Without Borders Australia. (n.d.). Infrastructure for water supply: Lama Lama, Queensland. https://ewb.org.au/project/lama-lama-water-supply-project/',
    },
    {
      id: 'ewb-2019',
      authors: 'Engineers Without Borders Australia',
      year: '2019, September 4',
      title: 'Lama Lama water supply project',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://ewb.org.au/blog/2019/09/04/lama-lama-water-supply-project/',
      fullCitationText:
        'Engineers Without Borders Australia. (2019, September 4). Lama Lama water supply project. https://ewb.org.au/blog/2019/09/04/lama-lama-water-supply-project/',
    },
    {
      id: 'ewb-2025',
      authors: 'Engineers Without Borders Australia',
      year: '2025, May 14',
      title: 'The power of partnerships: Unlocking access to clean water on Lama Lama Country',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://ewb.org.au/blog/2025/05/14/the-power-of-partnerships-unlocking-access-to-clean-water-on-lama-lama-country/',
      fullCitationText:
        'Engineers Without Borders Australia. (2025, May 14). The power of partnerships: Unlocking access to clean water on Lama Lama Country. https://ewb.org.au/blog/2025/05/14/the-power-of-partnerships-unlocking-access-to-clean-water-on-lama-lama-country/',
    },
    {
      id: 'ewb-2026',
      authors: 'Engineers Without Borders Australia',
      year: '2026',
      title: 'EWB Challenge: Port Stewart, Lama Lama',
      isStandaloneTitle: true,
      sourceInfo: '[Design brief]',
      url: 'https://ewbchallenge.org/challenge/port-stewart-lama-lama/',
      fullCitationText:
        'Engineers Without Borders Australia. (2026). EWB Challenge: Port Stewart, Lama Lama [Design brief]. https://ewbchallenge.org/challenge/port-stewart-lama-lama/',
    },
    {
      id: 'ewb-challenge-nd',
      authors: 'EWB Challenge',
      year: 'n.d.',
      title: 'Water filtration system',
      isStandaloneTitle: true,
      sourceInfo: '[Online forum discussion]',
      retrieved: 'Retrieved October 6, 2026',
      url: 'https://ewbchallenge.org/forums/topic/water-filtration-system/',
      fullCitationText:
        'EWB Challenge. (n.d.). Water filtration system [Online forum discussion]. Retrieved October 6, 2026, from https://ewbchallenge.org/forums/topic/water-filtration-system/',
    },
    {
      id: 'hiiob-karro-2012',
      authors: 'Hiiob, M., & Karro, E.',
      year: '2012',
      title: 'Iron in the Middle Devonian aquifer system and its removal at Võru County water treatment plants, Estonia',
      isStandaloneTitle: false,
      journalItalic: 'Estonian Journal of Earth Sciences',
      volumeItalic: '61',
      issue: '3',
      pages: '181–190',
      sourceInfo: '',
      url: 'https://doi.org/10.3176/earth.2012.3.04',
      fullCitationText:
        'Hiiob, M., & Karro, E. (2012). Iron in the Middle Devonian aquifer system and its removal at Võru County water treatment plants, Estonia. Estonian Journal of Earth Sciences, 61(3), 181–190. https://doi.org/10.3176/earth.2012.3.04',
    },
    {
      id: 'mazzei-nd',
      authors: 'Mazzei Injector Company',
      year: 'n.d.',
      title: 'Performance data and drawings: Venturi injectors',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://mazzei.net/support/performance-data-drawings/',
      fullCitationText:
        'Mazzei Injector Company. (n.d.). Performance data and drawings: Venturi injectors. https://mazzei.net/support/performance-data-drawings/',
    },
    {
      id: 'nhmrc-2025a',
      authors: 'National Health and Medical Research Council',
      year: '2025a',
      title: 'Iron',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/physical-chemical-characteristics/iron',
      fullCitationText:
        'National Health and Medical Research Council. (2025a). Iron. In Australian Drinking Water Guidelines. https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/physical-chemical-characteristics/iron',
    },
    {
      id: 'nhmrc-2025b',
      authors: 'National Health and Medical Research Council',
      year: '2025b',
      title: 'Manganese',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/physical-chemical-characteristics/manganese',
      fullCitationText:
        'National Health and Medical Research Council. (2025b). Manganese. In Australian Drinking Water Guidelines. https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/physical-chemical-characteristics/manganese',
    },
    {
      id: 'nit-2024',
      authors: 'National Indigenous Times',
      year: '2024, October 16',
      title: 'Safe, reliable drinking water coming to remote Queensland communities',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://nit.com.au/16-10-2024/14297/safe-reliable-drinking-water-coming-to-remote-queensland-communities',
      fullCitationText:
        'National Indigenous Times. (2024, October 16). Safe, reliable drinking water coming to remote Queensland communities. https://nit.com.au/16-10-2024/14297/safe-reliable-drinking-water-coming-to-remote-queensland-communities',
    },
    {
      id: 'nwga-2023',
      authors: 'National Water Grid Authority',
      year: '2023, February 13',
      title: 'Closing the Gap: $150 million towards First Nations water security',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://nationalwatergrid.gov.au/node/155',
      fullCitationText:
        'National Water Grid Authority. (2023, February 13). Closing the Gap: $150 million towards First Nations water security. https://nationalwatergrid.gov.au/node/155',
    },
    {
      id: 'openai-2026',
      authors: 'OpenAI',
      year: '2026',
      title: 'ChatGPT',
      isStandaloneTitle: true,
      sourceInfo: '[Generative AI model]',
      url: 'https://chatgpt.com/',
      fullCitationText: 'OpenAI. (2026). ChatGPT [Generative AI model]. https://chatgpt.com/',
    },
    {
      id: 'oz-filter-nd',
      authors: 'Oz Filter Warehouse',
      year: 'n.d.',
      title: 'Alpine Pure Filox backwashable filter',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://www.ozfilterwarehouse.com.au/product/Whole-House-Filox-Backwashable-Filter',
      fullCitationText:
        'Oz Filter Warehouse. (n.d.). Alpine Pure Filox backwashable filter. https://www.ozfilterwarehouse.com.au/product/Whole-House-Filox-Backwashable-Filter',
    },
    {
      id: 'penn-state-2024',
      authors: 'Penn State Extension',
      year: '2024',
      title: 'Iron and manganese in private water systems',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://extension.psu.edu/iron-and-manganese-in-private-water-systems',
      fullCitationText:
        'Penn State Extension. (2024). Iron and manganese in private water systems. https://extension.psu.edu/iron-and-manganese-in-private-water-systems',
    },
    {
      id: 'puretec-nd',
      authors: 'Puretec',
      year: 'n.d.',
      title: 'I-STOP-X40',
      isStandaloneTitle: true,
      sourceInfo: '[Product page]',
      url: 'https://www.puretec.com.au/I-STOP-X40',
      fullCitationText:
        'Puretec. (n.d.). I-STOP-X40 [Product page]. https://www.puretec.com.au/I-STOP-X40',
    },
    {
      id: 'qld-gov-2003',
      authors: 'Queensland Government',
      year: '2003',
      title: 'Aboriginal Cultural Heritage Act 2003 (Qld) s 23',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://www.legislation.qld.gov.au/view/whole/html/speciallabel/bill-2018-070/act-2003-079',
      fullCitationText:
        'Queensland Government. (2003). Aboriginal Cultural Heritage Act 2003 (Qld) s 23. https://www.legislation.qld.gov.au/view/whole/html/speciallabel/bill-2018-070/act-2003-079',
    },
    {
      id: 'qra-2019',
      authors: 'Queensland Reconstruction Authority',
      year: '2019',
      title: 'Cyclone resilient building guidance for Queensland homes',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://www.qra.qld.gov.au/sites/default/files/2019-12/cyclone_resilience_building_guidelines_-_dec19.pdf',
      fullCitationText:
        'Queensland Reconstruction Authority. (2019). Cyclone resilient building guidance for Queensland homes. https://www.qra.qld.gov.au/sites/default/files/2019-12/cyclone_resilience_building_guidelines_-_dec19.pdf',
    },
    {
      id: 'rda-tropical-north-2023',
      authors: 'RDA Tropical North',
      year: '2023',
      title: 'Cape York Region Package: Social, environmental and economic impact assessment',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://www.rdatropicalnorth.org.au/wp-content/uploads/2024/12/RPT-2022.12-CYRP-SEEIA-Report-2023-.pdf',
      fullCitationText:
        'RDA Tropical North. (2023). Cape York Region Package: Social, environmental and economic impact assessment. https://www.rdatropicalnorth.org.au/wp-content/uploads/2024/12/RPT-2022.12-CYRP-SEEIA-Report-2023-.pdf',
    },
    {
      id: 'simscale-2026',
      authors: 'SimScale GmbH',
      year: '2026',
      title: 'SimScale',
      isStandaloneTitle: true,
      sourceInfo: '[Computer software]',
      url: 'https://www.simscale.com/',
      fullCitationText:
        'SimScale GmbH. (2026). SimScale [Computer software]. https://www.simscale.com/',
    },
    {
      id: 'yac-2014',
      authors: 'Yintjingga Aboriginal Corporation',
      year: '2014',
      title: '[Map of Lama Lama Country]',
      isStandaloneTitle: true,
      sourceInfo: '[Map]',
      url: 'https://www.lamalama.org.au/country/',
      fullCitationText:
        'Yintjingga Aboriginal Corporation. (2014). [Map of Lama Lama Country] [Map]. https://www.lamalama.org.au/country/',
    },
    {
      id: 'yac-nd-a',
      authors: 'Yintjingga Aboriginal Corporation',
      year: 'n.d.-a',
      title: 'Governance',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://www.lamalama.org.au/governance/',
      fullCitationText:
        'Yintjingga Aboriginal Corporation. (n.d.-a). Governance. https://www.lamalama.org.au/governance/',
    },
    {
      id: 'yac-nd-b',
      authors: 'Yintjingga Aboriginal Corporation',
      year: 'n.d.-b',
      title: 'Welcome to Lama Lama Country',
      isStandaloneTitle: true,
      sourceInfo: '',
      url: 'https://www.lamalama.org.au/',
      fullCitationText:
        'Yintjingga Aboriginal Corporation. (n.d.-b). Welcome to Lama Lama Country. https://www.lamalama.org.au/',
    },
  ];

  const handleCopy = (citation: string, id: string) => {
    navigator.clipboard.writeText(citation);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredReferences = references.filter(
    (r) =>
      r.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.year.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={12}
        title="References"
        subtitle="Complete alphabetical bibliography formatted according to American Psychological Association (APA) 7th edition referencing standards with hanging indent (0.5 in) and live source hyperlinks."
        assignedAuthor="All Team Members"
        lastUpdated="October 2026"
      />

      {/* Search and Metadata Controls */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search references by author, keyword, or year..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1C7293]"
          />
        </div>

        <div className="text-xs text-slate-500 shrink-0 font-medium">
          Showing {filteredReferences.length} of {references.length} verified APA 7th citations
        </div>
      </section>

      {/* Alphabetical Reference List with Strict APA 7th Hanging Indent */}
      <section className="space-y-4">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-[#21295C] uppercase tracking-wider">
              Bibliographic Entries (Alphabetical A–Z)
            </span>
            <span>Hanging Indent: 0.5 in (2.0 rem)</span>
          </div>

          <div className="space-y-6">
            {filteredReferences.map((ref) => {
              const isCopied = copiedId === ref.id;
              return (
                <article
                  key={ref.id}
                  className="group flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs sm:text-sm text-slate-800 leading-relaxed border-b border-slate-100 last:border-b-0 pb-4 last:pb-0"
                >
                  {/* APA 7th Hanging Indent Container */}
                  <div
                    className="flex-1"
                    style={{ paddingLeft: '2rem', textIndent: '-2rem' }}
                  >
                    <span>{ref.authors.endsWith('.') ? ref.authors : `${ref.authors}.`}</span>{' '}
                    <span>({ref.year}).</span>{' '}
                    {ref.journalItalic ? (
                      <>
                        <span>{ref.title}.</span>{' '}
                        <span className="italic font-medium">{ref.journalItalic}</span>,{' '}
                        <span className="italic font-medium">{ref.volumeItalic}</span>
                        {ref.issue && <span>({ref.issue})</span>}
                        {ref.pages && <span>, {ref.pages}</span>}.{' '}
                      </>
                    ) : ref.isStandaloneTitle ? (
                      <>
                        <span className="italic font-medium">{ref.title}</span>
                        {ref.sourceInfo && <span> {ref.sourceInfo}</span>}.{' '}
                        {ref.retrieved && <span>{ref.retrieved}, from{' '}</span>}
                      </>
                    ) : (
                      <>
                        <span>{ref.title}.</span>{' '}
                        {ref.sourceInfo && (
                          <span className="italic font-medium">{ref.sourceInfo}. </span>
                        )}
                      </>
                    )}
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textIndent: 0 }}
                      className="inline text-[#065A82] hover:text-[#1C7293] hover:underline break-all"
                    >
                      <span>{ref.url}</span>
                      <ExternalLink size={12} className="shrink-0 inline ml-0.5" />
                    </a>
                  </div>

                  <div className="shrink-0 self-start pt-1 pl-8 sm:pl-0">
                    <button
                      type="button"
                      onClick={() => handleCopy(ref.fullCitationText, ref.id)}
                      className="px-2.5 py-1 rounded-lg text-slate-500 hover:text-[#065A82] hover:bg-slate-100 transition-colors flex items-center gap-1 text-xs border border-slate-200"
                      title="Copy APA citation text"
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

            {filteredReferences.length === 0 && (
              <div className="p-8 text-center text-slate-500 text-sm">
                No references match &quot;{searchTerm}&quot;.
              </div>
            )}
          </div>
        </div>
      </section>

      <PagePagination currentPageId="references" onNavigate={onNavigate} />
    </div>
  );
};
