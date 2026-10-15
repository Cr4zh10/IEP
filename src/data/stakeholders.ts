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
    name: 'Elders, the Lama Lama Land Trust and YAC',
    influence: 'most',
    affected: 'most',
    theta: -75,
    r: 110,
    why: 'The Land Trust authorises decisions about what happens on Country and endorses the projects YAC manages. Eight Elders are nominated each year to guide the YAC Board (YAC, n.d.-b).',
  },
  {
    n: 2,
    name: 'Lama Lama Rangers and local operators',
    influence: 'most',
    affected: 'most',
    theta: -52,
    r: 150,
    why: 'In our design they would run and clean the unit, so it has to suit their skills. YAC manages the Lama Lama ranger program (YAC, n.d.-b). Geoff, the persona on our journey map, stands for this group.',
  },
  {
    n: 3,
    name: 'Community residents (about 40 people)',
    influence: 'moderate',
    affected: 'most',
    theta: 0,
    r: 95,
    why: 'They drink and use the water. Rainwater covers drinking but not other household uses (EWB, 2026). The Challenge forum asks teams to assume about 40 people (Todio, 2026), and a news report says the Lama Lama population can double to nearly 100 people in the dry season (Prestipino, 2024). They can take part through YAC community meetings (YAC, n.d.-b), so we rated their influence as moderate.',
  },
  {
    n: 4,
    name: 'Arup',
    influence: 'moderate',
    affected: 'moderate',
    theta: -12,
    r: 235,
    why: 'Arup designed a new river intake and an iron-removal treatment, and our unit may have to connect to its work (EWB, n.d.).',
  },
  {
    n: 5,
    name: 'Engineers Without Borders Australia',
    influence: 'moderate',
    affected: 'least',
    theta: 10,
    r: 345,
    why: 'EWB runs the Challenge and has worked with the community on the water supply, but it does not use the water itself (EWB, 2025).',
  },
  {
    n: 6,
    name: 'Funders (private philanthropy and the National Water Grid Authority)',
    influence: 'most',
    affected: 'least',
    theta: -62,
    r: 345,
    why: 'Without funding the project cannot go ahead, but funders do not use the water. The Yaru Foundation funded the materials for the rainwater system (EWB, 2025), and the National Water Grid Fund has $150 million for First Nations water infrastructure (NWGA, n.d.).',
  },
  {
    n: 7,
    name: 'Contractors (plumber and engineer)',
    influence: 'least',
    affected: 'moderate',
    theta: 58,
    r: 235,
    why: 'They install the unit and travel in for the work, so wet-season road closures affect them (TMR, 2023). They follow the plan and do not decide it.',
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
