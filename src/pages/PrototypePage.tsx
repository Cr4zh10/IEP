import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Wind, Database, Filter, ArrowRight } from 'lucide-react';

interface PrototypePageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * ============================================================================
 * PAGE 6: PROTOTYPE - TREATMENT SYSTEM DESIGN
 * ----------------------------------------------------------------------------
 * Content:
 * - Flow step diagram:
 *   1. Existing Stewart River pump ($0)
 *   2. Venturi aerator (adds air so dissolved iron turns into solid particles)
 *   3. 1,000 L settling tank (large particles settle out)
 *   4. Two backwashable iron-removal filters (catch the remaining iron)
 *   5. Existing header tanks ($0)
 * - Figure 2: Prototype Treatment Schematic (Drawing by Ethan Illidge)
 * - Concept Render (OpenAI, 2026)
 * - Citations: Mazzei Injector Company (n.d.); Penn State Extension (2024);
 *              Clark Tanks (2025); Oz Filter Warehouse (n.d.); Puretec (n.d.); OpenAI (2026)
 * ============================================================================
 */
export const PrototypePage: React.FC<PrototypePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={6}
        title="Prototype: System Flow and Architecture"
        subtitle="Physical layout, stage-by-stage water treatment train, and passive mechanical engineering specifications."
        assignedAuthor="Ethan Illidge"
        lastUpdated="October 2026"
      />

      {/* Overview Banner */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
          Treatment Train Overview
        </h2>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          The prototype uses an established multi-barrier aeration and filtration process (Penn State Extension, 2024). Water flows continuously from the river through passive venturi aeration, settling, and media filtration, before discharging cleanly into the existing community header tanks (as illustrated in Figure 2).
        </p>
      </section>

      {/* Step Flow Diagram */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h2 className="text-lg sm:text-xl font-bold text-[#21295C]">
            Step-by-Step Treatment Flow Diagram
          </h2>
          <span className="text-xs text-[#065A82] font-semibold bg-[#E2EDF3] px-3 py-1 rounded-full">
            5-Stage Low Maintenance Train
          </span>
        </div>

        {/* Visual Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between relative group hover:border-[#065A82] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-[#21295C] text-white flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Source</span>
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-1">
                Existing Stewart River Pump
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pumps raw water from the riverbed at approximately 33.3 L/min design flow. Reuses existing infrastructure ($0).
              </p>
            </div>
            <div className="hidden md:flex justify-end mt-3 text-slate-300">
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-[#E2EDF3]/60 border border-[#1C7293]/30 flex flex-col justify-between relative group hover:border-[#1C7293] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-[#065A82] text-white flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span className="text-[10px] uppercase font-bold text-[#065A82]">Oxidation</span>
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-1">
                Venturi Aerator
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adds atmospheric air without electricity so dissolved iron turns into solid particles (ferric rust flocs) (Mazzei Injector Company, n.d.).
              </p>
            </div>
            <div className="hidden md:flex justify-end mt-3 text-[#1C7293]">
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between relative group hover:border-[#065A82] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-[#1C7293] text-white flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Settling</span>
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-1">
                1,000 L Settling Tank
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provides holding retention time so large solid iron particles settle out to the conical bottom drain before filtering (Clark Tanks, 2025).
              </p>
            </div>
            <div className="hidden md:flex justify-end mt-3 text-slate-300">
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl bg-[#E2EDF3]/60 border border-[#1C7293]/30 flex flex-col justify-between relative group hover:border-[#1C7293] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-[#065A82] text-white flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span className="text-[10px] uppercase font-bold text-[#065A82]">Polishing</span>
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-1">
                Two Backwashable Filters
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dual Filox media tanks catch remaining fine iron. Cleaned easily with periodic backwashing without tools (Oz Filter Warehouse, n.d.; Puretec, n.d.).
              </p>
            </div>
            <div className="hidden md:flex justify-end mt-3 text-[#1C7293]">
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between relative group hover:border-[#065A82] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-[#21295C] text-white flex items-center justify-center text-xs font-bold">
                  5
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Storage</span>
              </div>
              <h3 className="font-bold text-sm text-[#21295C] mb-1">
                Existing Header Tanks
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stores clean, treated water at elevation for gravity distribution to community taps and buildings ($0).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Figure 2 and Concept Render */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h2 className="text-base font-bold text-[#21295C] mb-1">
            System Schematic Drawing
          </h2>
          <p className="text-xs text-slate-500 mb-3">
            P&ID showing pipe routing, non-return valves, sampling taps, and bypass valves.
          </p>

          <ImagePlaceholder
            figureNumber="Figure 2"
            figureTitle="Prototype Treatment Schematic"
            imageFile="figure-2-schematic.png"
            noteText="Drawing by Ethan Illidge."
            altText="Figure 2. Prototype treatment schematic diagram showing Stewart River pump, venturi aerator, settling tank, and backwashable filters. Drawing by Ethan Illidge."
            heightClass="min-h-[280px]"
          />
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h2 className="text-base font-bold text-[#21295C] mb-1">
            3D Concept Rendering
          </h2>
          <p className="text-xs text-slate-500 mb-3">
            Visual concept model showing compact modular footprint on elevated concrete plinth.
          </p>

          <ImagePlaceholder
            figureTitle="Concept Render of Proposed Treatment System"
            imageFile="concept-render.png"
            noteText="Concept render generated using ChatGPT (OpenAI, 2026)."
            altText="Concept render of proposed Stewart River iron removal treatment system on reinforced slab. (OpenAI, 2026)."
            heightClass="min-h-[280px]"
          />
        </div>
      </section>

      {/* Detailed Technical Component Breakdown */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">
          Detailed Component Specifications
        </h2>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-sm text-[#21295C] flex items-center gap-2 mb-1">
              <Wind size={16} className="text-[#065A82]" />
              <span>Venturi Aerator Operation</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A venturi injector uses the Bernoulli principle: water narrows through a restricted throat, which accelerates the liquid and drops the local static pressure. This vacuum draws atmospheric air directly through a suction port with no motor or electrical connection (Mazzei Injector Company, n.d.).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-sm text-[#21295C] flex items-center gap-2 mb-1">
              <Database size={16} className="text-[#065A82]" />
              <span>1,000 L Settling Tank (Retention & Clarification)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At a pump rate of 33.3 L/min, the 1,000 L food-grade UV-stabilised polyethylene tank provides approximately 30 minutes of hydraulic retention time (Clark Tanks, 2025). This permits heavier oxidised iron flocs to settle to the conical base rather than loading the downstream filter media (Penn State Extension, 2024).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-sm text-[#21295C] flex items-center gap-2 mb-1">
              <Filter size={16} className="text-[#065A82]" />
              <span>Dual Backwashable Media Filter Vessels</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Two parallel or duty/standby Filox catalytic media filter columns are designed to capture the remaining dissolved and colloidal iron and reach the guideline value. Cleaning is accomplished simply by reversing flow (backwashing) into a drainage soakage ditch once or twice per month (Oz Filter Warehouse, n.d.; Puretec, n.d.).
            </p>
          </div>
        </div>
      </section>

      <PagePagination currentPageId="prototype" onNavigate={onNavigate} />
    </div>
  );
};
