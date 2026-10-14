import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { MapPin, SunMedium, CloudRain, History, Droplets, Info } from 'lucide-react';

interface ContextPageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 2: CONTEXT - ABOUT LAMA LAMA
 * ----------------------------------------------------------------------------
 * Content focus:
 * - Remote coastal area in Far North Queensland.
 * - Strong wet/dry season changes affect water reliability and water quality.
 * - Community relies on Stewart River; rainwater catchment insufficient for domestic needs (EWB, 2026).
 * - Figure 1: Map of Lama Lama Country.
 * - Background: Cyclone destroyed intake in 2006; Arup pro bono with EWB since 2015.
 * ============================================================================
 */
export const ContextPage: React.FC<ContextPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={2}
        title="Context: About Lama Lama"
        subtitle="Geographic setting, seasonal climate challenges, water security, and engineering history at Port Stewart."
        assignedAuthor="Tan Dong"
        lastUpdated="October 2026"
      />

      {/* Overview Card */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-[#065A82] mb-2">
          <MapPin size={24} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Remote Coastal Setting
          </h2>
        </div>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Port Stewart is a remote coastal settlement located on Lama Lama Country in Far North Queensland (as shown in Figure 1). It sits on the eastern coast of the Cape York Peninsula along Princess Charlotte Bay and the Coral Sea. The traditional homelands are cared for by the Lama Lama people and governed through the Yintjingga Aboriginal Corporation (Engineers Without Borders Australia [EWB], 2026; Yintjingga Aboriginal Corporation [YAC], n.d.-b).
        </p>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Because of its remote location, the community is completely off-grid. Access road networks can be cut off during severe weather, making access, deliveries, and technical service visits very challenging (RDA Tropical North, 2023).
        </p>
      </section>

      {/* Figure 1: Map of Lama Lama Country */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-[#21295C] mb-1">
          Geographic Map of the Project Area
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          Shows Lama Lama Country, the coastline of Princess Charlotte Bay, and the Stewart River basin (YAC, 2014).
        </p>

        <ImagePlaceholder
          figureNumber="Figure 1"
          figureTitle="Map of Lama Lama Country"
          imageFile="figure-1-map.png"
          noteText="From Welcome to Lama Lama Country, by Yintjingga Aboriginal Corporation (2014)."
          altText="Figure 1: Map of Lama Lama Country showing traditional lands, Port Stewart, and the Stewart River basin in Far North Queensland."
        />
      </section>

      {/* Wet and Dry Season Dynamics */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 text-amber-600 mb-3">
            <SunMedium size={24} />
            <h3 className="text-lg font-bold text-[#21295C]">
              Dry Season (May – October)
            </h3>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            During the dry season, rainfall is minimal. River levels fall significantly. Water demand remains steady for families, visitors, and ranger operations.
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
            <li>Low river flow concentrates dissolved mineral levels.</li>
            <li>Rainwater tanks dry up and cannot recharge.</li>
            <li>Dry roads allow freight transport, but water availability is constrained (EWB, 2026).</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 text-[#065A82] mb-3">
            <CloudRain size={24} />
            <h3 className="text-lg font-bold text-[#21295C]">
              Wet Season (November – April)
            </h3>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            The monsoonal wet season brings torrential downpours, flooding, and tropical cyclones. Strong wet/dry season changes affect both water reliability and water quality (EWB, 2026).
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
            <li>Road access to Port Stewart is completely cut off by swollen river crossings (RDA Tropical North, 2023).</li>
            <li>High runoff carries sediments and changes raw river water composition.</li>
            <li>Physical infrastructure must withstand high winds, debris, and flood surges.</li>
          </ul>
        </div>
      </section>

      {/* The Water Dilemma: Rainwater vs Stewart River */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-[#065A82]">
          <Droplets size={24} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Stewart River Reliance & Catchment Limits
          </h2>
        </div>
        <div className="p-4 rounded-xl bg-[#E2EDF3]/60 border border-[#1C7293]/20 text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Key finding from EWB design brief:</strong> The community relies on the Stewart River water system. The rainwater catchment system cannot supply enough water for domestic needs other than drinking (EWB, 2026).
        </div>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          While rainwater supplies a portion of potable water when available, all non-potable domestic tasks—such as washing, cooking, showering, hygiene, and community infrastructure maintenance—depend on the Stewart River (EWB, 2026). Therefore, fixing the river water treatment is essential to community wellbeing.
        </p>
      </section>

      {/* Engineering History & Past Challenges */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-[#065A82]">
          <History size={24} className="text-[#1C7293]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
            Water Infrastructure History
          </h2>
        </div>

        <div className="relative pl-6 border-l-2 border-[#1C7293]/40 space-y-8">
          {/* Milestone 1 */}
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-red-500 border-4 border-white shadow"></span>
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              2006 Event
            </span>
            <h3 className="text-base font-bold text-[#21295C] mt-1">
              Cyclone Destruction of River Intake
            </h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              In 2006, a severe tropical cyclone tore through the region and destroyed the original water intake system on the Stewart River (Australian Water Association [AWA], 2018). This disaster cut off the primary domestic supply line and highlighted how vulnerable equipment is to extreme weather events.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#065A82] border-4 border-white shadow"></span>
            <span className="text-xs font-bold text-[#065A82] uppercase tracking-wider">
              2015 – Present
            </span>
            <h3 className="text-base font-bold text-[#21295C] mt-1">
              Arup & EWB Australia Pro Bono Partnership
            </h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Since 2015, engineering consultancy firm Arup has partnered pro bono with Engineers Without Borders Australia and the Yintjingga Aboriginal Corporation (AWA, 2018; EWB, 2019). Their engineers installed a replacement river intake, pipes, and header storage tanks.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1C7293] border-4 border-white shadow"></span>
            <span className="text-xs font-bold text-[#1C7293] uppercase tracking-wider">
              Ongoing Challenge (Design Area 6.2)
            </span>
            <h3 className="text-base font-bold text-[#21295C] mt-1">
              High Dissolved Iron & Filter Fouling
            </h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Although the intake and storage tanks were rebuilt, the raw water contains high dissolved iron (EWB, 2026). Early cartridge-style filtration attempts failed because iron quickly choked the filter pores (fouling). This project specifically addresses that treatment gap.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
          <Info size={18} className="text-[#065A82] shrink-0 mt-0.5" />
          <p>
            <strong>Note for Team:</strong> Tan Dong is the lead author for this section. If you wish to expand details on river hydrology or community population seasonal counts, edit this file directly in <code>/src/pages/ContextPage.tsx</code>.
          </p>
        </div>
      </section>

      <PagePagination currentPageId="context" onNavigate={onNavigate} />
    </div>
  );
};
