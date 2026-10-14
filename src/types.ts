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
  | 'artefacts'
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
    description: 'Project summary, why it matters, and where to find things.',
  },
  {
    id: 'context',
    title: 'Context: About Lama Lama',
    shortTitle: 'Context',
    number: 2,
    description: 'Place, climate, water supply history, and the outside factors that shape the design.',
  },
  {
    id: 'empathise',
    title: 'Empathise: Research & Journey Map',
    shortTitle: 'Empathise',
    number: 3,
    description: 'Research findings, rainbow diagram and Geoff’s journey map.',
  },
  {
    id: 'define',
    title: 'Define: User Needs & Requirements',
    shortTitle: 'Define',
    number: 4,
    description: 'Problem, design goal, user needs and design requirements.',
  },
  {
    id: 'ideate',
    title: 'Ideate & Screen',
    shortTitle: 'Ideate',
    number: 5,
    description: 'Where the four concepts came from, how we compared them, and why we chose one.',
  },
  {
    id: 'prototype',
    title: 'Prototype: Treatment System Flow',
    shortTitle: 'Prototype',
    number: 6,
    description: 'What our prototype is, and which requirements it tests.',
  },
  {
    id: 'test-results',
    title: 'Test & Results',
    shortTitle: 'Test & Results',
    number: 7,
    description: 'Venturi simulation and comparison with published treatment plants.',
  },
  {
    id: 'costs',
    title: 'Costs & Budget',
    shortTitle: 'Costs',
    number: 8,
    description: 'Cost breakdown, labour and travel detail, and funding sources.',
  },
  {
    id: 'implementation',
    title: 'Implementation & Considerations',
    shortTitle: 'Implementation',
    number: 9,
    description: 'Gantt chart, weather, community partnership and the journey after installation.',
  },
  {
    id: 'recommendations',
    title: 'Recommendations',
    shortTitle: 'Recommendations',
    number: 10,
    description: 'What we recommend, and what should be checked before building.',
  },
  {
    id: 'artefacts',
    title: 'Artefacts: What We Made and Why',
    shortTitle: 'Artefacts',
    number: 11,
    description: 'Every artefact we produced, why we made it and what it shows.',
  },
  {
    id: 'team',
    title: 'Team',
    shortTitle: 'Team',
    number: 12,
    description: 'Who worked on which sections.',
  },
  {
    id: 'references',
    title: 'References',
    shortTitle: 'References',
    number: 13,
    description: 'APA 7th reference list with links, and a list of abbreviations.',
  },
];
