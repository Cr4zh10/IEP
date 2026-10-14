import React from 'react';
import { STAKEHOLDERS } from '../data/stakeholders';

/**
 * Stakeholder rainbow diagram, drawn as an SVG so it stays sharp on any screen.
 * Sectors show influence (left = most, middle = moderate, right = least).
 * Rings show how much the project affects each stakeholder (inner = most).
 * Based on the rainbow diagram in Chevalier and Buckles (2008).
 */
const CX = 450;
const CY = 470;
const R_OUT = 400;
const R_MID = 290;
const R_IN = 175;
const SECTOR_DEG = 35;

const rad = (d: number) => (d * Math.PI) / 180;
const half = (r: number) => `M ${CX - r} ${CY} A ${r} ${r} 0 0 1 ${CX + r} ${CY} Z`;

export const RainbowDiagram: React.FC = () => {
  const lx = CX - R_OUT * Math.sin(rad(SECTOR_DEG));
  const rx = CX + R_OUT * Math.sin(rad(SECTOR_DEG));
  const ly = CY - R_OUT * Math.cos(rad(SECTOR_DEG));
  const label = 'italic fill-slate-700';

  return (
    <svg
      viewBox="0 0 900 520"
      role="img"
      aria-label="Stakeholder rainbow diagram with eight numbered stakeholders placed by influence and by how much the project affects them. The key below lists each number."
      className="w-full h-auto"
    >
      <title>Stakeholder rainbow diagram for water treatment at Port Stewart</title>
      <path d={half(R_OUT)} fill="#CFE3F0" />
      <path d={half(R_MID)} fill="#9CC7E0" />
      <path d={half(R_IN)} fill="#5AA9D0" />
      <line x1={CX} y1={CY} x2={lx} y2={ly} stroke="#1C7293" strokeWidth="1.5" />
      <line x1={CX} y1={CY} x2={rx} y2={ly} stroke="#1C7293" strokeWidth="1.5" />

      {/* Influence labels */}
      <g fontSize="17" fontWeight="700" fill="#21295C" fontFamily="inherit">
        <text x="150" y="205" textAnchor="end">Most</text>
        <text x="150" y="226" textAnchor="end">influence</text>
        <text x={CX} y="34" textAnchor="middle">Moderate</text>
        <text x={CX} y="55" textAnchor="middle">influence</text>
        <text x="750" y="205" textAnchor="start">Least</text>
        <text x="750" y="226" textAnchor="start">influence</text>
      </g>

      {/* Ring labels under the base line, both sides */}
      <g fontSize="14" fontFamily="inherit" className={label} textAnchor="middle">
        <text x={CX - (R_IN / 2)} y={CY + 24}>Most affected</text>
        <text x={CX - (R_IN + R_MID) / 2} y={CY + 24}>Moderately</text>
        <text x={CX - (R_IN + R_MID) / 2} y={CY + 41}>affected</text>
        <text x={CX - (R_MID + R_OUT) / 2} y={CY + 24}>Least affected</text>
        <text x={CX + (R_IN / 2)} y={CY + 24}>Most affected</text>
        <text x={CX + (R_IN + R_MID) / 2} y={CY + 24}>Moderately</text>
        <text x={CX + (R_IN + R_MID) / 2} y={CY + 41}>affected</text>
        <text x={CX + (R_MID + R_OUT) / 2} y={CY + 24}>Least affected</text>
      </g>

      {/* Stakeholder markers */}
      {STAKEHOLDERS.map((s) => {
        const x = CX + s.r * Math.sin(rad(s.theta));
        const y = CY - s.r * Math.cos(rad(s.theta));
        return (
          <g key={s.n}>
            <circle cx={x} cy={y} r="19" fill="#21295C" stroke="#fff" strokeWidth="3" />
            <text x={x} y={y + 6} textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="inherit">
              {s.n}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
