/**
 * All cost numbers live here. Totals are calculated, so they always add up.
 * Change a number here and every page that uses it updates.
 *
 * Where a number comes from:
 *  - SUPPLIER: a price listed on the supplier's web page (checked 14 and 15 October 2026).
 *  - ATO: the ATO reasonable amounts in TD 2025/4 (2025-26, lowest salary band).
 *  - FWC: the National Minimum Wage from 1 July 2026 (Fair Work Commission, 2026).
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

// --- The installation trip: 2 people, 4 travel days + 6 days on site = 10 days away, 9 nights ---
export const PEOPLE = 2;
export const ON_SITE_DAYS = 6;
export const TRAVEL_DAYS = 4;
export const DAYS_AWAY = ON_SITE_DAYS + TRAVEL_DAYS;
export const NIGHTS = DAYS_AWAY - 1;
export const PLUMBER_HOURS_PER_DAY = 10; // TEAM assumption
export const ENGINEER_HOURS_PER_DAY = 8; // TEAM assumption
export const ENGINEER_DAYS = 4; // TEAM assumption: the engineer works four of the six days on site
export const PLUMBER_RATE = 110; // TEAM assumption, inside the $80-$200 range in What's The Damage? (2026)
export const ENGINEER_RATE = 140; // TEAM assumption, no published rate found

// --- Labour: hourly rates are TEAM assumptions, to be replaced by quotes ---
export const LABOUR: CostLine[] = [
  {
    item: 'Licensed plumber',
    detail: `Connect pipework to the existing pump and header tanks, install the filters, pressure test and train operators. ${ON_SITE_DAYS} days on site.`,
    qty: ON_SITE_DAYS * PLUMBER_HOURS_PER_DAY, unit: 'hours', rate: PLUMBER_RATE,
    basis: `Team assumption of ${PLUMBER_HOURS_PER_DAY} hours a day for ${ON_SITE_DAYS} days. The rate is inside the $80–$200 range given for plumbers in Australia (What's The Damage?, 2026).`,
  },
  {
    item: 'Commissioning engineer',
    detail: `Check flow and pressure, test iron before and after treatment, sign off the system and lead operator training. ${ENGINEER_DAYS} days on site.`,
    qty: ENGINEER_DAYS * ENGINEER_HOURS_PER_DAY, unit: 'hours', rate: ENGINEER_RATE,
    basis: `Team assumption of ${ENGINEER_HOURS_PER_DAY} hours a day for ${ENGINEER_DAYS} days. We did not find a published rate for this role.`,
  },
];

// --- Travel ---
export const ACCOM_RATE = 141; // ATO TD 2025/4, other country centres, lowest salary band
export const MEAL_RATE = 31.15 + 35.55 + 61.3; // breakfast + lunch + dinner, ATO TD 2025/4 = $128.00
export const INCIDENTALS_RATE = 24.5; // ATO TD 2025/4
export const VEHICLE_PER_DAY = 270; // TEAM allowance for four-wheel-drive hire and fuel. No quote.
export const VEHICLE_FUEL = VEHICLE_PER_DAY * DAYS_AWAY; // $2,700 for the 10-day trip
export const FLIGHTS = 600; // TEAM allowance for one return flight to Cairns. No quote.
/** What one more day away costs for accommodation, meals and incidentals, for the whole crew. */
export const EXTRA_DAY_COST = PEOPLE * (ACCOM_RATE + MEAL_RATE + INCIDENTALS_RATE);
/** One more day of waiting (for example a closed road): the above plus the vehicle. */
export const EXTRA_DAY_WAITING = EXTRA_DAY_COST + VEHICLE_PER_DAY;
/** One more day of work on site: waiting cost plus the plumber and engineer working a full day. */
export const EXTRA_DAY_WORKING =
  EXTRA_DAY_WAITING + PLUMBER_HOURS_PER_DAY * PLUMBER_RATE + ENGINEER_HOURS_PER_DAY * ENGINEER_RATE;

export const TRAVEL: CostLine[] = [
  {
    item: 'Accommodation',
    detail: `${NIGHTS} nights for ${PEOPLE} people`,
    qty: NIGHTS * PEOPLE, unit: 'person-nights', rate: ACCOM_RATE,
    basis: 'ATO (2025) rate for other country centres. It stands in for motels on the road and for camping at Port Stewart.',
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
    qty: DAYS_AWAY, unit: 'days', rate: VEHICLE_PER_DAY,
    basis: 'Team allowance of $270 a day. No hire quote yet.',
  },
  {
    item: 'Flights',
    detail: 'One return flight to Cairns for the engineer',
    qty: 1, unit: 'return flight', rate: FLIGHTS,
    basis: 'Team allowance. No fare checked.',
  },
];

// --- The dry-season site visit (one engineer): 4 travel days + 2 days on site = 6 days away, 5 nights ---
// The visit happens before any equipment is bought. It checks the pump and intake, walks the site with YAC
// and supervises the slab pour, so the slab has weeks to cure before the equipment arrives.
export const VISIT_ON_SITE_DAYS = 2;
export const VISIT_DAYS_AWAY = TRAVEL_DAYS + VISIT_ON_SITE_DAYS;
export const VISIT_NIGHTS = VISIT_DAYS_AWAY - 1;

export const VISIT_LABOUR: CostLine = {
  item: 'Commissioning engineer',
  detail: `Walk the site with YAC, check the pump and intake, measure flow and pressure, test iron in the water and supervise the slab pour. ${VISIT_ON_SITE_DAYS} days on site.`,
  qty: VISIT_ON_SITE_DAYS * ENGINEER_HOURS_PER_DAY, unit: 'hours', rate: ENGINEER_RATE,
  basis: `Team assumption of ${ENGINEER_HOURS_PER_DAY} hours a day for ${VISIT_ON_SITE_DAYS} days, at the same rate as Table 8.`,
};

export const VISIT_TRAVEL: CostLine[] = [
  {
    item: 'Accommodation',
    detail: `${VISIT_NIGHTS} nights for 1 person`,
    qty: VISIT_NIGHTS, unit: 'person-nights', rate: ACCOM_RATE,
    basis: 'ATO (2025) rate for other country centres',
  },
  {
    item: 'Meals and incidentals',
    detail: `${VISIT_DAYS_AWAY} days for 1 person`,
    qty: VISIT_DAYS_AWAY, unit: 'person-days', rate: MEAL_RATE + INCIDENTALS_RATE,
    basis: 'ATO (2025) lowest salary band, as in Table 9',
  },
  {
    item: 'Vehicle hire and fuel',
    detail: 'Four-wheel-drive hire from Cairns, plus fuel',
    qty: VISIT_DAYS_AWAY, unit: 'days', rate: VEHICLE_PER_DAY,
    basis: 'Team allowance of $270 a day. No hire quote yet.',
  },
  {
    item: 'Flights',
    detail: 'One return flight to Cairns',
    qty: 1, unit: 'return flight', rate: FLIGHTS,
    basis: 'Team allowance. No fare checked.',
  },
];

export const lineTotal = (l: CostLine) => Math.round(l.qty * l.rate);
export const LABOUR_TOTAL = sum(LABOUR.map(lineTotal));
export const TRAVEL_TOTAL = sum(TRAVEL.map(lineTotal));
export const VISIT_LABOUR_TOTAL = lineTotal(VISIT_LABOUR);
export const VISIT_TRAVEL_TOTAL = sum(VISIT_TRAVEL.map(lineTotal));
export const SITE_VISIT_TOTAL = VISIT_LABOUR_TOTAL + VISIT_TRAVEL_TOTAL;
export const LABOUR_AND_TRAVEL = LABOUR_TOTAL + TRAVEL_TOTAL + SITE_VISIT_TOTAL;

export const SUBTOTAL =
  EQUIPMENT.treatment + EQUIPMENT.testing + EQUIPMENT.protection + EQUIPMENT.freight + LABOUR_AND_TRAVEL;

/** Share of the subtotal that is the site visit, as a whole percent. */
export const SITE_VISIT_PERCENT = Math.round((SITE_VISIT_TOTAL / SUBTOTAL) * 100);

/** Share of the subtotal that is labour plus travel (both trips), as a whole percent. */
export const LABOUR_TRAVEL_PERCENT = Math.round((LABOUR_AND_TRAVEL / SUBTOTAL) * 100);

/** Part of the subtotal that traces to a published price or rate: the supplier prices plus the ATO accommodation and meal amounts on both trips. */
export const PUBLISHED_TOTAL =
  TREATMENT_PRICED +
  lineTotal(TRAVEL[0]) +
  lineTotal(TRAVEL[1]) +
  lineTotal(VISIT_TRAVEL[0]) +
  lineTotal(VISIT_TRAVEL[1]);
export const PUBLISHED_PERCENT = Math.round((PUBLISHED_TOTAL / SUBTOTAL) * 100);

export const CONTINGENCY_LOW = Math.round(SUBTOTAL * 0.2);
export const CONTINGENCY_HIGH = Math.round(SUBTOTAL * 0.25);
export const TOTAL_LOW = SUBTOTAL + CONTINGENCY_LOW;
export const TOTAL_HIGH = SUBTOTAL + CONTINGENCY_HIGH;

/** How many extra days the low end of the contingency could pay for, if nothing else used it. */
export const CONTINGENCY_WAITING_DAYS = Math.floor(CONTINGENCY_LOW / EXTRA_DAY_WAITING);
export const CONTINGENCY_WORKING_DAYS = Math.floor(CONTINGENCY_LOW / EXTRA_DAY_WORKING);
/** The same, at the high end of the contingency. */
export const CONTINGENCY_HIGH_WORKING_DAYS = Math.floor(CONTINGENCY_HIGH / EXTRA_DAY_WORKING);
/** Extra days of permission we ask YAC for on top of the planned days on site. Unused days cost nothing. */
export const PERMIT_EXTRA_DAYS = 3;
/** If the engineer stays on site all six days, not just the four costed: two more days of engineer time. */
export const ENGINEER_FULL_STAY_EXTRA = (ON_SITE_DAYS - ENGINEER_DAYS) * ENGINEER_HOURS_PER_DAY * ENGINEER_RATE;
/** If the drive north and the drive back each need one more day: two extra days of waiting cost. */
export const EXTRA_DRIVING_DAYS_COST = 2 * EXTRA_DAY_WAITING;

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

export const RANGE_LOW = roundTo(TOTAL_LOW, 1000);
export const RANGE_HIGH = roundTo(TOTAL_HIGH, 1000);

// --- Running costs after installation (operation and maintenance), per year ---
// The unit has no powered parts and uses no chemicals, so the running costs are test kits,
// filter media, spare parts and the operators' time. The pump is the community's existing one.

// SUPPLIER: Instrument Choice lists the Hanna HI38040 iron test kit (0.0-5.0 mg/L, 0.1 mg/L steps)
// at $185.90 including GST, with reagents for about 100 tests.
export const TEST_KIT_PRICE = 185.9;
export const TESTS_PER_KIT = 100;
export const TEST_KITS_PER_YEAR = 1; // TEAM: about two tests a week
// SUPPLIER: Oz Filter Warehouse lists Filox iron reduction media at $543 including GST per bag (the page says 25 kg
// in the description and 27.2 kg in the unit field, and "price by enquiry only"), so it needs a quote.
export const MEDIA_BAG_PRICE = 543;
// TEAM assumptions: the supplier pages do not say how many bags a filter takes or give a rated life.
export const MEDIA_BAGS_PER_FILTER = 2;
export const MEDIA_LIFE_YEARS = 5;
export const MEDIA_CHANGE_COST = MEDIA_BAG_PRICE * MEDIA_BAGS_PER_FILTER * FILTER_COUNT;
export const MEDIA_PER_YEAR = MEDIA_CHANGE_COST / MEDIA_LIFE_YEARS;
// TEAM allowance: spare seals, a gauge, valve parts, and the freight to bring them to Port Stewart.
export const SPARES_PER_YEAR = 500;
// FWC: the National Minimum Wage from 1 July 2026 (Fair Work Commission, 2026). A floor, not a wage.
export const MIN_WAGE = 26.44;
// TEAM assumptions: one hour a week to backwash, test and walk round the unit, and one hour a month to drain the tank.
export const OPERATOR_HOURS_PER_WEEK = 1;
export const OPERATOR_TANK_HOURS_PER_MONTH = 1;
export const OPERATOR_HOURS_PER_YEAR = OPERATOR_HOURS_PER_WEEK * 52 + OPERATOR_TANK_HOURS_PER_MONTH * 12;

export const TEST_KITS_COST = TEST_KIT_PRICE * TEST_KITS_PER_YEAR;
export const OPERATOR_COST = OPERATOR_HOURS_PER_YEAR * MIN_WAGE;
/** Cash costs a year: test kits, media saved up for, spares. */
export const RUNNING_CASH = TEST_KITS_COST + MEDIA_PER_YEAR + SPARES_PER_YEAR;
/** Cash costs plus the operators' time at the minimum wage. */
export const RUNNING_TOTAL = RUNNING_CASH + OPERATOR_COST;
/** People the Challenge forum says to assume use the water (Todio, 2026). */
export const PEOPLE_SERVED = 40;
export const RUNNING_PER_PERSON = RUNNING_TOTAL / PEOPLE_SERVED;
/** Share of the yearly running cost that is operator time, as a whole percent. */
export const OPERATOR_PERCENT = Math.round((OPERATOR_COST / RUNNING_TOTAL) * 100);
export const RUNNING_TEN_YEARS = RUNNING_TOTAL * 10;

// An outside check-up: one plumber, 2 days on site, same trip pattern as the site visit.
export const CHECKUP_ON_SITE_DAYS = 2;
export const CHECKUP_DAYS_AWAY = TRAVEL_DAYS + CHECKUP_ON_SITE_DAYS;
export const CHECKUP_NIGHTS = CHECKUP_DAYS_AWAY - 1;
export const CHECKUP_LABOUR = CHECKUP_ON_SITE_DAYS * PLUMBER_HOURS_PER_DAY * PLUMBER_RATE;
export const CHECKUP_TRAVEL =
  CHECKUP_NIGHTS * ACCOM_RATE + CHECKUP_DAYS_AWAY * (MEAL_RATE + INCIDENTALS_RATE) + CHECKUP_DAYS_AWAY * VEHICLE_PER_DAY;
export const CHECKUP_COST = Math.round(CHECKUP_LABOUR + CHECKUP_TRAVEL);
/** If an outside check-up is needed every second year. */
export const CHECKUP_PER_YEAR = CHECKUP_COST / 2;
export const RUNNING_WITH_CHECKUPS = RUNNING_TOTAL + CHECKUP_PER_YEAR;

export const money = (n: number) => '$' + Math.round(n).toLocaleString('en-AU');
/** Shows cents only when there are some, so a rate of 152.5 reads $152.50 and is not rounded to $153. */
export const moneyExact = (n: number) =>
  '$' + n.toLocaleString('en-AU', { minimumFractionDigits: n % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 });
export const RANGE_TEXT = `${money(RANGE_LOW)}–${money(RANGE_HIGH)} AUD`;
/** "about $2,800", rounded to the nearest $100 so it does not look more exact than it is. */
export const RUNNING_ROUNDED = money(roundTo(RUNNING_TOTAL, 100));
