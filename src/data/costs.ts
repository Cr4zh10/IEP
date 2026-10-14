/**
 * All cost numbers live here. Totals are calculated, so they always add up.
 * Change a number here and every page that uses it updates.
 */

export interface CostLine {
  item: string;
  detail: string;
  qty: number;
  unit: string;
  rate: number;
  basis: string;
}

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);

// --- Equipment and works (team estimates, see cost page for sources) ---
export const EQUIPMENT = {
  treatment: 8000,
  testing: 1500,
  protection: 5500,
  freight: 5000,
};

// --- Labour: 2 people. Charge-out rates are team assumptions, to be replaced by quotes ---
export const LABOUR: CostLine[] = [
  {
    item: 'Licensed plumber',
    detail: 'Connect pipework to the existing pump and header tanks, install filters, pressure test, train operators. 6 days on site.',
    qty: 60, unit: 'hours', rate: 110,
    basis: 'Team assumption (10 h/day × 6 days)',
  },
  {
    item: 'Commissioning engineer',
    detail: 'Check flow and pressure, test iron before and after treatment, sign off the system, lead operator training. 4 days on site.',
    qty: 32, unit: 'hours', rate: 140,
    basis: 'Team assumption (8 h/day × 4 days). Could be pro bono through EWB/Arup volunteers.',
  },
];

// --- Travel for 2 people: 10 days away (4 travel days + 6 on site), 9 nights ---
export const PEOPLE = 2;
export const DAYS_AWAY = 10;
export const NIGHTS = 9;
export const ACCOM_RATE = 141; // ATO TD 2025/4, general country centre, lowest salary band
export const MEAL_RATE = 34.75 + 39.1 + 66.65; // breakfast + lunch + dinner, TD 2025/4
export const INCIDENTALS_RATE = 24.5; // TD 2025/4
export const VEHICLE_FUEL = 2700; // team assumption: 12 days 4WD hire at ~$180 + fuel
export const FLIGHTS = 600; // team assumption: one return flight to Cairns

export const TRAVEL: CostLine[] = [
  {
    item: 'Accommodation',
    detail: `${NIGHTS} nights for ${PEOPLE} people`,
    qty: NIGHTS * PEOPLE, unit: 'person-nights', rate: ACCOM_RATE,
    basis: 'ATO (2025), TD 2025/4 country-centre rate',
  },
  {
    item: 'Meals and incidentals',
    detail: `${DAYS_AWAY} days for ${PEOPLE} people (breakfast, lunch, dinner and incidentals)`,
    qty: DAYS_AWAY * PEOPLE, unit: 'person-days', rate: MEAL_RATE + INCIDENTALS_RATE,
    basis: 'ATO (2025), TD 2025/4 lowest salary band',
  },
  {
    item: 'Vehicle hire and fuel',
    detail: '4WD from Cairns for 12 days, plus fuel for the unsealed road to Port Stewart',
    qty: 1, unit: 'trip', rate: VEHICLE_FUEL,
    basis: 'Team assumption',
  },
  {
    item: 'Flights',
    detail: 'One return flight to Cairns for the engineer',
    qty: 1, unit: 'return flight', rate: FLIGHTS,
    basis: 'Team assumption',
  },
];

export const lineTotal = (l: CostLine) => Math.round(l.qty * l.rate);
export const LABOUR_TOTAL = sum(LABOUR.map(lineTotal));
export const TRAVEL_TOTAL = sum(TRAVEL.map(lineTotal));
export const LABOUR_AND_TRAVEL = LABOUR_TOTAL + TRAVEL_TOTAL;

export const SUBTOTAL =
  EQUIPMENT.treatment + EQUIPMENT.testing + EQUIPMENT.protection + EQUIPMENT.freight + LABOUR_AND_TRAVEL;

export const CONTINGENCY_LOW = Math.round(SUBTOTAL * 0.2);
export const CONTINGENCY_HIGH = Math.round(SUBTOTAL * 0.25);
export const TOTAL_LOW = SUBTOTAL + CONTINGENCY_LOW;
export const TOTAL_HIGH = SUBTOTAL + CONTINGENCY_HIGH;

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

export const RANGE_LOW = roundTo(TOTAL_LOW, 1000);
export const RANGE_HIGH = roundTo(TOTAL_HIGH, 1000);

export const money = (n: number) => '$' + Math.round(n).toLocaleString('en-AU');
export const RANGE_TEXT = `${money(RANGE_LOW)}–${money(RANGE_HIGH)} AUD`;
