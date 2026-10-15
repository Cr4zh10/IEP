import React from 'react';
import { Droplets, Filter, Users } from 'lucide-react';

/**
 * FIGURE 3a: THE WATER SITUATION AT PORT STEWART AT A GLANCE (Define page).
 * Drawn by the website, so the text stays sharp and easy to read on a phone.
 *
 * Every fact in it comes from one source, Todio (2026), the EWB Challenge forum post:
 *  - two bores measured 1.01 mg/L and 1.25 mg/L of iron (the post does not say which bore gave which reading)
 *  - the iron filter installed in 2018 is not in operation and has been bypassed for most of the time since
 *  - teams are asked to assume about 40 people
 * The 0.3 mg/L line is the ADWG iron guideline.
 *
 * To change a number, change it here and check the credit line on the Define page.
 */
const READINGS = [
  { label: 'Bore 1', value: 1.01 },
  { label: 'Bore 2', value: 1.25 },
];
const GUIDELINE = 0.3;
const AXIS_MAX = 1.5;
const TICKS = [0, 0.5, 1, 1.5];
const PEOPLE = 40;

/** Where a value sits along the bars, as a percentage of the full scale. */
const pct = (v: number) => `${(v / AXIS_MAX) * 100}%`;

const ARIA_SUMMARY =
  'Three facts about the water at Port Stewart. ' +
  `Iron: two bores measured ${READINGS[0].value.toFixed(2)} and ${READINGS[1].value.toFixed(2)} milligrams per litre, ` +
  `both above the guideline of ${GUIDELINE} milligrams per litre. ` +
  'Filter: the iron filter installed in 2018 is not in operation and has been bypassed for most of the time since. ' +
  `People: about ${PEOPLE} people.`;

const Panel: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 ${className}`}>{children}</div>
);

const PanelHead: React.FC<{ icon: React.ReactNode; kicker: string; title: string }> = ({ icon, kicker, title }) => (
  <div className="flex items-start gap-3">
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#21295C] text-white"
    >
      {icon}
    </span>
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-[#1C7293]">{kicker}</p>
      <h3 className="text-xl font-bold leading-snug text-[#21295C]">{title}</h3>
    </div>
  </div>
);

const PersonIcon: React.FC = () => (
  <svg viewBox="0 0 20 30" className="h-auto w-full" aria-hidden="true" focusable="false">
    <circle cx="10" cy="6" r="5" fill="#21295C" />
    <path d="M1.5 30 V21 a8.5 8.5 0 0 1 17 0 V30 Z" fill="#21295C" />
  </svg>
);

/** The pipe, the filter that is switched off and the bypass pipe that the water uses instead. */
const BypassDrawing: React.FC = () => (
  <svg
    viewBox="0 0 260 120"
    className="h-auto w-full max-w-[300px]"
    aria-hidden="true"
    focusable="false"
  >
    {/* pipe stubs on the filter line: no water moves here */}
    <path d="M36 86 H72 M188 86 H224" stroke="#CBD5E1" strokeWidth="10" fill="none" />
    {/* the filter */}
    <rect x="72" y="54" width="116" height="62" rx="12" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="3" />
    <path d="M86 76 H174 M86 92 H174" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
    {/* the water: in, around the filter by the bypass, and out */}
    <path
      d="M0 86 H36 V30 H224 V86 H260"
      stroke="#1C7293"
      strokeWidth="10"
      fill="none"
      strokeLinejoin="round"
    />
    <path
      d="M100 23 L108 30 L100 37 M130 23 L138 30 L130 37 M160 23 L168 30 L160 37"
      stroke="#fff"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* "not in operation" sign */}
    <circle cx="130" cy="86" r="19" fill="#fff" stroke="#BE123C" strokeWidth="4" />
    <path d="M116.5 99.5 L143.5 72.5" stroke="#BE123C" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const WaterSituation: React.FC = () => (
  <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-4" role="img" aria-label={ARIA_SUMMARY}>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr]">
      {/* 1. Iron */}
      <Panel className="sm:col-span-2 xl:col-span-1">
        <PanelHead icon={<Droplets size={22} />} kicker="Iron in the water" title="Both bores are above the guideline" />
        <p className="mt-2 text-sm leading-relaxed text-slate-700">Iron measured at two bores, in milligrams per litre.</p>

        <div className="mt-4 grid grid-cols-[3.75rem_1fr] gap-x-3 sm:grid-cols-[4.5rem_1fr]">
          <div className="flex flex-col gap-3 pt-8">
            {READINGS.map((r) => (
              <div key={r.label} className="flex h-12 items-center text-sm font-semibold text-slate-700">
                {r.label}
              </div>
            ))}
          </div>

          <div>
            <div className="relative h-8">
              <span
                className="absolute bottom-1 whitespace-nowrap pl-2 text-sm font-bold text-[#065A82]"
                style={{ left: pct(GUIDELINE) }}
              >
                Guideline {GUIDELINE}
              </span>
            </div>
            <div className="relative flex flex-col gap-3">
              <div
                className="absolute -bottom-2 -top-2 z-10 border-l-2 border-dashed border-[#065A82]"
                style={{ left: pct(GUIDELINE) }}
              />
              {READINGS.map((r) => (
                <div key={r.label} className="relative h-12 rounded-md bg-slate-200/60">
                  <div className="absolute inset-y-0 left-0 flex overflow-hidden rounded-md" style={{ width: pct(r.value) }}>
                    <div className="h-full bg-orange-300" style={{ width: `${(GUIDELINE / r.value) * 100}%` }} />
                    <div className="flex h-full grow items-center justify-end bg-orange-700 pr-2.5 text-lg font-extrabold text-white">
                      {r.value.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-3 h-6 border-t border-slate-300">
              {TICKS.map((t, i) => (
                <span
                  key={t}
                  className={`absolute top-1 text-xs text-slate-600 ${
                    i === 0 ? '' : i === TICKS.length - 1 ? '-translate-x-full' : '-translate-x-1/2'
                  }`}
                  style={{ left: pct(t) }}
                >
                  {t.toFixed(1)}
                </span>
              ))}
            </div>
            <p className="text-center text-xs text-slate-600">Iron (mg/L)</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-700">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-5 rounded-sm bg-orange-300" />
            Up to the ADWG guideline of {GUIDELINE} mg/L
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-5 rounded-sm bg-orange-700" />
            Above the guideline
          </span>
        </div>
      </Panel>

      {/* 2. The filter */}
      <Panel>
        <PanelHead icon={<Filter size={22} />} kicker="The iron filter" title="Installed in 2018, not in operation" />
        <div className="flex flex-1 items-center py-4">
          <BypassDrawing />
        </div>
        <p className="text-sm leading-relaxed text-slate-700">
          It has been bypassed for most of the time since it was installed, so the water goes around it.
        </p>
      </Panel>

      {/* 3. The people */}
      <Panel>
        <PanelHead icon={<Users size={22} />} kicker="Who uses the water" title={`About ${PEOPLE} people`} />
        <div className="flex flex-1 items-center py-4">
          <div className="grid w-full max-w-[280px] grid-cols-10 gap-x-1.5 gap-y-2" aria-hidden="true">
            {Array.from({ length: PEOPLE }, (_, i) => (
              <PersonIcon key={i} />
            ))}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-700">
          The number the EWB Challenge forum asks teams to assume. Each icon is one person.
        </p>
      </Panel>
    </div>
  </div>
);
