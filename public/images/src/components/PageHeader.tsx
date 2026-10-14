import React from 'react';

interface PageHeaderProps {
  sectionNumber: number;
  title: string;
  subtitle?: string;
  assignedAuthor?: string;
  lastUpdated?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  sectionNumber,
  title,
  subtitle,
  assignedAuthor,
  lastUpdated = 'October 2026',
}) => {
  return (
    <header className="mb-8 pb-6 border-b border-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E2EDF3] text-[#065A82]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1C7293]"></span>
          Section {sectionNumber}
        </span>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          {assignedAuthor && (
            <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded text-slate-600">
              Page editor: <strong className="text-slate-800">{assignedAuthor}</strong>
            </span>
          )}
          <span>Last updated: {lastUpdated}</span>
        </div>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#21295C] tracking-tight mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 max-w-4xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
};
