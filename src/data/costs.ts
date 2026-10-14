/**
 * All cost numbers live here. Totals are calculated, so they always add up.
 * Change a number here and every page that uses it updates.
 *
 * Where a number comes from:
 *  - SUPPLIER: a price listed on the supplier's web page (checked October 2026).
 *  - ATO: the ATO reasonable amounts in TD 2025/4 (2025-26, lowest salary band).
 *  - TEAM: an allowance or assumption set by the project team. It is not a quote.
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

// --- Treatment parts ---
// SUPPLIER: Oz Filter Warehouse lists the Filox MP 940M (manual valve, 25 L/min) at $1,499.
export const FILTER_PRICE = 1499;
export const FILTER_COUNT = 2;
// SUPPLIER: Clark Tanks lists the 2000L Round Tank at $920.
export const TANK_PRICE = 920;
export const TREATMENT_PRICED = FILTER_PRICE * FILTER_COUNT + TANK_PRICE;
// TEAM: the treatment parts line is set at $8,000. What the listed prices do not cover
// (Venturi aerator, pipework, valves, gauges) is an allowance.
export const TREATMENT_BUDGET = 8000;
export const TREATMENT_ALLOWANCE = TREATMENT_BUDGET - TREATMENT_PRICED;

// --- Equipment and works (TEAM allowances unless stated) ---
export const EQUIPMENT = {
  treatment: TREATMENT_BUDGET,
  testing: 1500,
  protection: 5500,
  freight: 5000,
};

// --- Labour: 2 people. Hourly rates are TEAM assumptions, to be replaced by quotes ---
export const LABOUR: CostLine[] = [
  {
    item: 'Licensed plumber',
    detail: 'Connect pipework to the existing pump and header tanks, install the filters, pressure test and train operators. 6 days on site.',
    qty: 60, unit: 'hours', rate: 110,
    basis: "Team assumption of 10 hours a day for 6 days. The rate is inside the $80–$200 range given for plumbers in Australia (What's The Damage?, 2026).",
  },
  {
    item: 'Commissioning engineer',
    detail: 'Check flow and pressure, test iron before and after treatment, sign off the system and lead operator training. 4 days on site.',
    qty: 32, unit: 'hours', rate: 140,
    basis: 'Team assumption of 8 hours a day for 4 days. We did not find a published rate for this role.',
  },
];

// --- Travel for 2 people: 10 days away (4 travel days + 6 on site), 9 nights ---
export const PEOPLE = 2;
export const DAYS_AWAY = 10;
export const NIGHTS = 9;
export const ACCOM_RATE = 141; // ATO TD 2025/4, other country centres, lowest salary band
export const MEAL_RATE = 31.15 + 35.55 + 61.3; // breakfast + lunch + dinner, ATO TD 2025/4 = $128.00
export const INCIDENTALS_RATE = 24.5; // ATO TD 2025/4
export const VEHICLE_FUEL = 2700; // TEAM allowance for four-wheel-drive hire and fuel. No quote.
export const FLIGHTS = 600; // TEAM allowance for one return flight to Cairns. No quote.
/** What one more day away costs for accommodation, meals and incidentals, for the whole crew. */
export const EXTRA_DAY_COST = PEOPLE * (ACCOM_RATE + MEAL_RATE + INCIDENTALS_RATE);

export const TRAVEL: CostLine[] = [
  {
    item: 'Accommodation',
    detail: `${NIGHTS} nights for ${PEOPLE} people`,
    qty: NIGHTS * PEOPLE, unit: 'person-nights', rate: ACCOM_RATE,
    basis: 'ATO (2025) rate for other country centres',
  },
  {
    item: 'Meals and incidentals',
    detail: `${DAYS_AWAY} days for ${PEOPLE} people (breakfast, lunch, dinner and incidentals)`,
    qty: DAYS_AWAY * PEOPLE, unit: 'person-days', rate: MEAL_RATE + INCIDENTALS_RATE,
    basis: 'ATO (2025) lowest salary band: $31.15 + $35.55 + $61.30 for meals, plus $24.50 incidentals',
  },
  {
    item: 'Vehicle hire and fuel',
    detail: 'Four-wheel-drive hire from Cairns for the whole trip, plus fuel',
    qty: 1, unit: 'trip', rate: VEHICLE_FUEL,
    basis: 'Team allowance. No hire quote yet.',
  },
  {
    item: 'Flights',
    detail: 'One return flight to Cairns for the engineer',
    qty: 1, unit: 'return flight', rate: FLIGHTS,
    basis: 'Team allowance. No fare checked.',
  },
];

export const lineTotal = (l: CostLine) => Math.round(l.qty * l.rate);
export const LABOUR_TOTAL = sum(LABOUR.map(lineTotal));
export const TRAVEL_TOTAL = sum(TRAVEL.map(lineTotal));
export const LABOUR_AND_TRAVEL = LABOUR_TOTAL + TRAVEL_TOTAL;

export const SUBTOTAL =
  EQUIPMENT.treatment + EQUIPMENT.testing + EQUIPMENT.protection + EQUIPMENT.freight + LABOUR_AND_TRAVEL;

/** Share of the subtotal that is labour plus travel, as a whole percent. */
export const LABOUR_TRAVEL_PERCENT = Math.round((LABOUR_AND_TRAVEL / SUBTOTAL) * 100);

/** Part of the subtotal that traces to a published price or rate: the supplier prices plus the ATO accommodation and meal amounts. */
export const PUBLISHED_TOTAL = TREATMENT_PRICED + lineTotal(TRAVEL[0]) + lineTotal(TRAVEL[1]);
export const PUBLISHED_PERCENT = Math.round((PUBLISHED_TOTAL / SUBTOTAL) * 100);

export const CONTINGENCY_LOW = Math.round(SUBTOTAL * 0.2);
export const CONTINGENCY_HIGH = Math.round(SUBTOTAL * 0.25);
export const TOTAL_LOW = SUBTOTAL + CONTINGENCY_LOW;
export const TOTAL_HIGH = SUBTOTAL + CONTINGENCY_HIGH;

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

export const RANGE_LOW = roundTo(TOTAL_LOW, 1000);
export const RANGE_HIGH = roundTo(TOTAL_HIGH, 1000);

export const money = (n: number) => '$' + Math.round(n).toLocaleString('en-AU');
/** Shows cents only when there are some, so a rate of 152.5 reads $152.50 and is not rounded to $153. */
export const moneyExact = (n: number) =>
  '$' + n.toLocaleString('en-AU', { minimumFractionDigits: n % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 });
export const RANGE_TEXT = `${money(RANGE_LOW)}–${money(RANGE_HIGH)} AUD`;
