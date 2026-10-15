import React from 'react';
import { STAKEHOLDERS } from '../data/stakeholders';

/**
 * Stakeholder rainbow diagram, drawn as an SVG so it stays sharp on any screen.
 * Sectors show influence (left = most, middle = moderate, right = least).
 * Rings show how much the project affects each stakeholder (inner = most).
 * Based on the rainbow diagram in Chevalier and Buckles (2008).
 *
 * The text is set large inside the drawing (viewBox units) so it is still easy to read when the
 * diagram sits next to its key and is only about 600 px wide. On a phone (under 640 px) the drawing is
 * only about 300 px wide, so the words inside it would be too small. There it shows only the wedges and
 * larger numbered markers, and the key and the note on the Empathise page say what each wedge and ring means.
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

  // Centre of each ring band along the base line, measured from the middle.
  const bandIn = R_IN / 2;
  const bandMid = (R_IN + R_MID) / 2;
  const bandOut = (R_MID + R_OUT) / 2;

  return (
    <svg
      viewBox="0 0 900 545"
      role="img"
      aria-label="Stakeholder rainbow diagram with eight numbered stakeholders placed by influence and by how much the project affects them. The key beside the diagram lists each number."
      className="w-full h-auto"
    >
      <title>Stakeholder rainbow diagram for water treatment at Port Stewart</title>
      <path d={half(R_OUT)} fill="#CFE3F0" />
      <path d={half(R_MID)} fill="#9CC7E0" />
      <path d={half(R_IN)} fill="#5AA9D0" />
      <line x1={CX} y1={CY} x2={lx} y2={ly} stroke="#1C7293" strokeWidth="2" />
      <line x1={CX} y1={CY} x2={rx} y2={ly} stroke="#1C7293" strokeWidth="2" />

      {/* Influence labels (hidden on a phone) */}
      <g className="hidden sm:block" fontSize="25" fontWeight="700" fill="#21295C" fontFamily="inherit">
        <text x="148" y="200" textAnchor="end">Most</text>
        <text x="148" y="229" textAnchor="end">influence</text>
        <text x={CX} y="28" textAnchor="middle">Moderate</text>
        <text x={CX} y="57" textAnchor="middle">influence</text>
        <text x="752" y="200" textAnchor="start">Least</text>
        <text x="752" y="229" textAnchor="start">influence</text>
      </g>

      {/* Ring labels under the base line, both sides, two short lines each (hidden on a phone) */}
      <g fontSize="20" fontFamily="inherit" className={`hidden sm:block ${label}`} textAnchor="middle">
        <text x={CX - bandIn} y={CY + 26}>Most</text>
        <text x={CX - bandIn} y={CY + 50}>affected</text>
        <text x={CX - bandMid} y={CY + 26}>Moderately</text>
        <text x={CX - bandMid} y={CY + 50}>affected</text>
        <text x={CX - bandOut} y={CY + 26}>Least</text>
        <text x={CX - bandOut} y={CY + 50}>affected</text>
        <text x={CX + bandIn} y={CY + 26}>Most</text>
        <text x={CX + bandIn} y={CY + 50}>affected</text>
        <text x={CX + bandMid} y={CY + 26}>Moderately</text>
        <text x={CX + bandMid} y={CY + 50}>affected</text>
        <text x={CX + bandOut} y={CY + 26}>Least</text>
        <text x={CX + bandOut} y={CY + 50}>affected</text>
      </g>

      {/* Stakeholder markers: larger on a phone, regular from tablet width */}
      {[
        { cls: 'sm:hidden', r: 30, font: 30, dy: 10 },
        { cls: 'hidden sm:block', r: 23, font: 24, dy: 8 },
      ].map((size) => (
        <g key={size.cls} className={size.cls}>
          {STAKEHOLDERS.map((s) => {
            const x = CX + s.r * Math.sin(rad(s.theta));
            const y = CY - s.r * Math.cos(rad(s.theta));
            return (
              <g key={s.n}>
                <circle cx={x} cy={y} r={size.r} fill="#21295C" stroke="#fff" strokeWidth="3" />
                <text x={x} y={y + size.dy} textAnchor="middle" fontSize={size.font} fontWeight="700" fill="#fff" fontFamily="inherit">
                  {s.n}
                </text>
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
};
