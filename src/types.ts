export type PageId =
  | 'home'
  | 'context'
  | 'empathise'
  | 'define'
  | 'ideate'
  | 'prototype'
  | 'test-results'
  | 'costs'
  | 'implementation'
  | 'recommendations'
  | 'team'
  | 'references';

export interface PageInfo {
  id: PageId;
  title: string;
  shortTitle: string;
  number: number;
  description: string;
}

export const PAGES: PageInfo[] = [
  {
    id: 'home',
    title: 'Home',
    shortTitle: 'Home',
    number: 1,
    description: 'Project overview, key metrics, and quick navigation.',
  },
  {
    id: 'context',
    title: 'Context: About Lama Lama',
    shortTitle: 'Context',
    number: 2,
    description: 'Geography, climate, Stewart River water, and engineering history.',
  },
  {
    id: 'empathise',
    title: 'Empathise: Research & Journey Map',
    shortTitle: 'Empathise',
    number: 3,
    description: 'Desktop research findings and operator Geoff’s journey map.',
  },
  {
    id: 'define',
    title: 'Define: User Needs & Requirements',
    shortTitle: 'Define',
    number: 4,
    description: 'Problem statement, core user needs, and engineering criteria.',
  },
  {
    id: 'ideate',
    title: 'Ideate & Screen',
    shortTitle: 'Ideate',
    number: 5,
    description: 'Concept evaluation, decision matrix, and winning design.',
  },
  {
    id: 'prototype',
    title: 'Prototype: Treatment System Flow',
    shortTitle: 'Prototype',
    number: 6,
    description: 'Step-by-step treatment schematic and component descriptions.',
  },
  {
    id: 'test-results',
    title: 'Test & Results',
    shortTitle: 'Test & Results',
    number: 7,
    description: 'Venturi aeration fluid simulation and iron removal benchmarking.',
  },
  {
    id: 'costs',
    title: 'Costs & Budget',
    shortTitle: 'Costs',
    number: 8,
    description: 'Capital cost estimates, reused infrastructure savings, and funding.',
  },
  {
    id: 'implementation',
    title: 'Implementation & Considerations',
    shortTitle: 'Implementation',
    number: 9,
    description: 'Community partnership, four-step timeline, and site constraints.',
  },
  {
    id: 'recommendations',
    title: 'Recommendations',
    shortTitle: 'Recommendations',
    number: 10,
    description: 'Actionable design advice and future storage capacity guidance.',
  },
  {
    id: 'team',
    title: 'Team',
    shortTitle: 'Team',
    number: 11,
    description: 'Student engineer profiles and editable individual contributions.',
  },
  {
    id: 'references',
    title: 'References',
    shortTitle: 'References',
    number: 12,
    description: 'Complete APA 7th bibliographic references with source links.',
  },
];
