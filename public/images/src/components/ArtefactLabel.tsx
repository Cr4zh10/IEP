import React from 'react';

interface ArtefactLabelProps {
  /** The label, for example "Figure 3" or "Table 7". It also sets the anchor the Artefacts page jumps to. */
  label: string;
  /** Title in Title Case, shown in italics under the label (APA 7). */
  title: string;
  className?: string;
}

/** Turns "Figure 1a" into "figure-1a" and "Table 7" into "table-7". */
export const anchorFor = (label: string) => label.trim().toLowerCase().replace(/\s+/g, '-');

/**
 * The bold label and italic title that sit above every figure and table (APA 7).
 * Each one has an id, so the Artefacts page can scroll straight to it.
 */
export const ArtefactLabel: React.FC<ArtefactLabelProps> = ({ label, title, className = '' }) => (
  <div id={anchorFor(label)} className={`scroll-mt-32 text-left rounded-lg ${className}`}>
    <div className="font-bold text-sm text-[#21295C]">{label}</div>
    <div className="italic text-sm text-slate-800 font-medium">{title}</div>
  </div>
);
