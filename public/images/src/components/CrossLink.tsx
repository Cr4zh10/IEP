import React from 'react';
import { PageId } from '../types';

interface CrossLinkProps {
  /** The page that holds the figure or table. */
  page: PageId;
  /** The anchor on that page, for example "table-7". It matches the id that ArtefactLabel gives each figure and table. */
  anchor: string;
  onNavigate: (pageId: PageId, anchor?: string) => void;
  children: React.ReactNode;
}

/** A link inside a sentence that jumps to a figure or table on another page, for example "Table 7". */
export const CrossLink: React.FC<CrossLinkProps> = ({ page, anchor, onNavigate, children }) => (
  <button
    type="button"
    onClick={() => onNavigate(page, anchor)}
    className="inline font-semibold text-[#1C7293] underline decoration-[#1C7293]/40 underline-offset-2 hover:decoration-[#1C7293] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C7293] rounded-sm"
  >
    {children}
  </button>
);
