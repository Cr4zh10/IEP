import React from 'react';
import { SHOW_DRAFT_BADGES } from '../config';

export const DraftBadge: React.FC = () => {
  if (!SHOW_DRAFT_BADGES) return null;
  return (
    <span className="inline-block ml-2 align-middle px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
      Draft: team to confirm
    </span>
  );
};
