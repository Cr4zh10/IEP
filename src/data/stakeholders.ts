/**
 * Stakeholders for the rainbow diagram (Figure 3).
 * influence: which sector  -> 'most' (left), 'moderate' (middle), 'least' (right)
 * affected:  which ring    -> 'most' (inner), 'moderate' (middle), 'least' (outer)
 * theta: angle from straight up, in degrees (negative = left). r: distance from the centre point.
 * To move a marker, change theta and r. Keep it inside the right sector and ring.
 */
export type Level = 'most' | 'moderate' | 'least';

export interface Stakeholder {
  n: number;
  name: string;
  influence: Level;
  affected: Level;
  theta: number;
  r: number;
  why: string;
}

export const STAKEHOLDERS: Stakeholder[] = [
  {
    n: 1,
    name: 'Elders and the Yintjingga Aboriginal Corporation',
    influence: 'most',
    affected: 'most',
    theta: -72,
    r: 125,
    why: 'Work on Country needs their agreement (YAC, n.d.-a), and they live with the water supply every day.',
  },
  {
    n: 2,
    name: 'Lama Lama Rangers and Geoff, the local technician',
    influence: 'most',
    affected: 'most',
    theta: -53,
    r: 138,
    why: 'Their agreement is also needed (YAC, n.d.-a), and they would run and repair the unit (EWB, 2026).',
  },
  {
    n: 3,
    name: 'Community residents (about 40 people)',
    influence: 'moderate',
    affected: 'most',
    theta: 0,
    r: 95,
    why: 'They drink and use the water, and rainwater alone only covers drinking (EWB, 2026; EWB Challenge, n.d.). They have a say through YAC, so we rated their influence as moderate.',
  },
  {
    n: 4,
    name: 'Arup',
    influence: 'moderate',
    affected: 'moderate',
    theta: -12,
    r: 235,
    why: 'Arup helped plan the new intake and treatment options, and our unit may have to connect to its work (EWB, n.d.).',
  },
  {
    n: 5,
    name: 'Engineers Without Borders Australia',
    influence: 'moderate',
    affected: 'least',
    theta: 10,
    r: 345,
    why: 'EWB wrote the brief and works with the community, but it does not use the water itself.',
  },
  {
    n: 6,
    name: 'Funders (private philanthropy and the National Water Grid Authority)',
    influence: 'most',
    affected: 'least',
    theta: -62,
    r: 345,
    why: 'Without funding the project cannot go ahead, but the funders are not affected by the water quality (NWGA, n.d.).',
  },
  {
    n: 7,
    name: 'Contractors (plumber and engineer)',
    influence: 'least',
    affected: 'moderate',
    theta: 58,
    r: 235,
    why: 'They install the unit and travel in for the work, so wet-season roads and access affect them. They follow the plan and do not decide it.',
  },
  {
    n: 8,
    name: 'Our project team',
    influence: 'least',
    affected: 'least',
    theta: 70,
    r: 345,
    why: 'We design the unit, but the community and funders decide whether it is built.',
  },
];
