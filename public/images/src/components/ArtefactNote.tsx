import React from 'react';

interface ArtefactNoteProps {
  why: string;
  tells: string;
}

/** Short box under each artefact: why we made it, and what it shows. */
export const ArtefactNote: React.FC<ArtefactNoteProps> = ({ why, tells }) => (
  <div className="mt-3 rounded-xl border border-[#1C7293]/30 bg-[#E2EDF3]/50 px-4 py-3 text-sm text-slate-700 leading-relaxed space-y-1">
    <p>
      <span className="font-bold text-[#21295C]">Why we made this: </span>
      {why}
    </p>
    <p>
      <span className="font-bold text-[#21295C]">What it shows: </span>
      {tells}
    </p>
  </div>
);
