import React from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { ArtefactNote } from '../components/ArtefactNote';
import { AlertTriangle } from 'lucide-react';

interface DefinePageProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * PAGE 4: DEFINE
 * New abbreviation defined here: QRA.
 */
export const DefinePage: React.FC<DefinePageProps> = ({ onNavigate }) => {
  const needs = [
    {
      n: '1',
      title: 'Safe, acceptable drinking water',
      text: 'Less iron, so less metallic taste and less red staining, and a result at or below the ADWG guideline of 0.30 mg/L (NHMRC, 2025a).',
    },
    {
      n: '2',
      title: 'Simple maintenance',
      text: 'Cleaning must not need specialist technicians, delicate cartridges or chemical mixing (EWB, 2026).',
    },
    {
      n: '3',
      title: 'Reliable performance',
      text: 'The unit should keep treating whatever water the intake delivers, without the filter blocking and shutting down (EWB, 2026).',
    },
    {
      n: '4',
      title: 'Reuse what is already there',
      text: 'Use the existing pump, pipes and header tanks where they work, to avoid cost and waste (EWB, 2026).',
    },
    {
      n: '5',
      title: 'Suits a remote community',
      text: 'It has to survive humidity, salt air, wet seasons and cyclone winds (Queensland Reconstruction Authority [QRA], 2019), and it has to work with the skills available locally.',
    },
  ];

  const reqs = [
    {
      id: 'REQ-01',
      req: 'Remove dissolved iron from the water the intake delivers',
      pri: 'High',
      why: 'Meet 0.30 mg/L. From the highest reading of 1.25 mg/L, this means at least 76% removal (NHMRC, 2025a).',
      check: 'Compare with published treatment plants; test site water on arrival.',
    },
    {
      id: 'REQ-02',
      req: 'Include a simple cleaning (backwashing) system',
      pri: 'High',
      why: 'Iron solids must be flushed out without replacing cartridges (EWB, 2026).',
      check: 'Check the design: operated by valves, no tools.',
    },
    {
      id: 'REQ-03',
      req: 'Reuse the existing pump and header tanks, and be able to connect to a new intake later',
      pri: 'High',
      why: 'Saves cost. The pump is not a fixed part of our design (see the scope box below).',
      check: 'Check pump flow and pressure on site. Venturi simulation at 33.3 L/min.',
    },
    {
      id: 'REQ-04',
      req: 'Minimise maintenance',
      pri: 'High',
      why: 'The unit should work passively, with no daily adjustment, dosing pumps or mixers.',
      check: 'Check the design: no powered parts.',
    },
    {
      id: 'REQ-05',
      req: 'Allow local operator training and maintenance',
      pri: 'High',
      why: 'Rangers and operators should be able to run the unit themselves (EWB, 2026).',
      check: 'Training session and quick guide at handover.',
    },
    {
      id: 'REQ-06',
      req: 'Use corrosion-resistant materials',
      pri: 'Medium',
      why: 'Coastal humidity and salt spray.',
      check: 'Check material selection.',
    },
    {
      id: 'REQ-07',
      req: 'Withstand wet season and cyclone conditions',
      pri: 'Medium',
      why: 'Concrete slab and tie-downs, following QRA (2019) guidance.',
      check: 'Check against QRA guidance; engineer sign-off.',
    },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={4}
        title="Define: User Needs and Requirements"
        subtitle="The problem, our design goal, what the community needs, and the design requirements we will test against."
        assignedAuthor="Natalia Tran"
      />

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Problem statement</h2>
        <p className="text-slate-700 leading-relaxed">
          The design brief says that the Stewart River water supply has naturally high levels of dissolved iron, and
          that earlier treatment systems stopped working because of iron fouling and hard maintenance. The new
          solution has to improve water quality and also be practical, reliable and easy to maintain in a remote
          community (EWB, 2026).
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C] pt-2">Project design goal</h2>
        <p className="text-slate-700 leading-relaxed">
          Our project is Design Area 6.2, Drinking water quality and treatment, of the EWB Challenge (EWB, 2026). Our design
          goal is to create a low-maintenance iron treatment system that improves water quality and avoids the
          maintenance failures of earlier systems.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Five user needs</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {needs.map((n) => (
            <div key={n.n} className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#21295C] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {n.n}
              </div>
              <div>
                <h3 className="font-bold text-[#21295C]">{n.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed mt-1">{n.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-amber-900 flex items-center gap-2">
          <AlertTriangle size={20} /> Scope: we treat water, we do not create it
        </h2>
        <p className="text-slate-800 leading-relaxed">
          One thing a treatment unit cannot do is make water appear. The pump can only deliver water when the river has
          water at the intake. EWB reports that each dry season, when the river falls below the bed sand, the
          community digs an improvised pond in the riverbed to keep pumping (EWB, n.d.). So "water all year round" is
          a supply problem, and our unit cannot solve it on its own.
        </p>
        <p className="text-slate-800 leading-relaxed">
          For that reason our requirement is to treat all the water the intake delivers, and not to guarantee
          year-round supply. We keep the design independent of one particular pump. EWB and Arup have planned a new
          intake below the river bed sands with solar-powered submersible pumps (EWB, n.d.). Our unit is sized for
          33.3 L/min, so if the new intake delivers a similar flow, our unit could be connected to it as well.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Reusing the existing pump is therefore a cost saving for now, not a promise of supply. We recommend checking
          the pump and intake during a dry-season site visit.
        </p>
      </section>

      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#21295C]">Design requirements</h2>
        <p className="text-slate-700 leading-relaxed">
          Each requirement has a way of checking it. The Prototype and Test pages report which ones we were able to
          check and which are still open.
        </p>
        <div className="text-left">
          <div className="font-bold text-sm text-[#21295C]">Table 3</div>
          <div className="italic text-sm text-slate-800 font-medium">Design Requirements, Priority and How Each Is Checked</div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-[#21295C] text-white text-sm">
                <th className="p-3 w-20">No.</th>
                <th className="p-3">Requirement</th>
                <th className="p-3 w-24">Priority</th>
                <th className="p-3">Why</th>
                <th className="p-3">How we check it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {reqs.map((r) => (
                <tr key={r.id} className="align-top">
                  <td className="p-3 font-semibold text-[#21295C]">{r.id}</td>
                  <td className="p-3">{r.req}</td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                        r.pri === 'High' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {r.pri}
                    </span>
                  </td>
                  <td className="p-3">{r.why}</td>
                  <td className="p-3">{r.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600">
          <span className="italic font-semibold">Note.</span> Priorities set by the project team from the design brief
          (EWB, 2026) and the ADWG iron guideline (NHMRC, 2025a).
        </p>
        <ArtefactNote
          why="To turn the research into a short list we can test the design against, and to decide what matters most."
          tells="The five high-priority requirements are about simple operation and iron removal. Structure and materials matter, but they come second to a system the community can run."
        />
      </section>

      <PagePagination currentPageId="define" onNavigate={onNavigate} />
    </div>
  );
};
