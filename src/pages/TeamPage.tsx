import React, { useState } from 'react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { User, Edit3, Check, Award, Mail, Sparkles, HelpCircle } from 'lucide-react';

interface TeamPageProps {
  onNavigate: (pageId: PageId) => void;
}

interface MemberData {
  id: string;
  name: string;
  defaultRole: string;
  contribution: string;
  leadSections: string;
}

/**
 * ============================================================================
 * PAGE 11: TEAM
 * ----------------------------------------------------------------------------
 * Team Members:
 * 1. Ethan Illidge
 * 2. Truong Huy
 * 3. Natalia Tran
 * 4. Tan Dong
 *
 * Each card includes editable role / contribution sections that team members
 * can update either directly in code or interactively on page!
 * ============================================================================
 */
export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  const [members, setMembers] = useState<MemberData[]>([
    {
      id: 'ethan',
      name: 'Ethan Illidge',
      defaultRole: 'Prototype, Testing & Testing Result',
      contribution:
        'Responsible for CAD schematic modelling (Figure 2), SimScale computational fluid dynamics (CFD) venturi pressure and velocity simulations, prototype hydraulic flow calculations, and iron-removal technical benchmarking.',
      leadSections: 'Sections 6 (Prototype), 7 (Test & Results)',
    },
    {
      id: 'huy',
      name: 'Huy Truong',
      defaultRole: 'Cost, Implementation, Considerations & Recommendations',
      contribution:
        'Led capital expenditure estimation ($26,000–$40,000 AUD), supplier parts pricing, remote freight logistics, Aboriginal Cultural Heritage Act duty of care, phased implementation timeline, and actionable engineering recommendations.',
      leadSections: 'Sections 3 (Empathise - Co-lead), 8 (Costs), 9 (Implementation), 10 (Recommendations)',
    },
    {
      id: 'natalia',
      name: 'Natalia Tran',
      defaultRole: 'Ideate, Screen & Define',
      contribution:
        'Formulated the engineering problem statement, five core user needs, and prioritized requirements matrix (Table 2); evaluated the four design concepts and structured the weighted multi-criteria decision matrix (scoring Concept 4 at 136/140).',
      leadSections: 'Sections 4 (Define), 5 (Ideate & Screen)',
    },
    {
      id: 'tan',
      name: 'Tan Dong',
      defaultRole: 'Context & Empathise',
      contribution:
        'Researched Port Stewart remote coastal geography and wet/dry season hydrology (Figure 1), synthesized desktop research findings, and constructed the technician user journey map for Geoff across operational stages (Table 1).',
      leadSections: 'Sections 2 (Context), 3 (Empathise)',
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const handleUpdate = (id: string, field: 'defaultRole' | 'contribution', val: string) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: val } : m))
    );
  };

  return (
    <div className="space-y-10">
      <PageHeader
        sectionNumber={11}
        title="Engineering Design Team"
        subtitle="Student project members, individual roles, and modular section contributions."
        assignedAuthor="All Team Members"
        lastUpdated="October 2026"
      />

      {/* Overview Note */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-[#21295C]">
          Collaborative Student Project Structure
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          This project was completed by four university engineering students for the Engineers Without Borders (EWB) Challenge 2026. Each member can add or edit their role and contribution directly in their clearly designated section below.
        </p>
      </section>

      {/* Four Team Member Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map((member) => {
          const isEditing = editingId === member.id;
          return (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#1C7293] transition-all relative group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#E2EDF3] text-[#065A82] flex items-center justify-center font-bold text-lg shadow-xs">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#21295C]">
                        {member.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#1C7293]">
                        {member.leadSections}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setEditingId(isEditing ? null : member.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-[#065A82] hover:bg-slate-100 transition-colors text-xs flex items-center gap-1"
                    title={isEditing ? 'Save role details' : 'Edit role details in preview'}
                  >
                    {isEditing ? (
                      <>
                        <Check size={16} className="text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Done</span>
                      </>
                    ) : (
                      <>
                        <Edit3 size={15} />
                        <span className="hidden sm:inline">Edit</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Role / Contribution Field */}
                <div className="space-y-3 mt-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Role / Title
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={member.defaultRole}
                        onChange={(e) =>
                          handleUpdate(member.id, 'defaultRole', e.target.value)
                        }
                        className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1C7293]"
                      />
                    ) : (
                      <div className="text-sm font-semibold text-[#065A82]">
                        {member.defaultRole || '(Click edit to set role)'}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Role / Contribution
                    </label>
                    {isEditing ? (
                      <textarea
                        rows={4}
                        value={member.contribution}
                        onChange={(e) =>
                          handleUpdate(member.id, 'contribution', e.target.value)
                        }
                        placeholder="Add your individual role and contribution details here..."
                        className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1C7293]"
                      />
                    ) : (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                        {member.contribution || '(No contribution text yet. Click Edit to add content.)'}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>File: <code>src/pages/TeamPage.tsx</code></span>
                <span className="text-[#065A82] font-medium">Ready to edit</span>
              </div>
            </div>
          );
        })}
      </section>

      <PagePagination currentPageId="team" onNavigate={onNavigate} />
    </div>
  );
};
