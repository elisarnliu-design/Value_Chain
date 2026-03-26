// ─── Classification (Industry Selector) ──────────────────────────────────────

/** The three column groups on the landing-page grid */
export type ColumnGroup = "A" | "C" | "F";

export interface ClassificationSector {
  id: string;             // e.g. "A1", "C4", "F2"
  group: ColumnGroup;     // "A" | "C" | "F"
  row: 1 | 2 | 3 | 4;    // grid row (1 = top)
  name: string;           // e.g. "Body", "Transportation", "General Technologies"
  industries: ClassificationIndustry[];
}

export interface ClassificationIndustry {
  code: string;         // e.g. "A1-10", "C4-20", "F2-10"
  name: string;         // e.g. "Drugs", "Land Transport", "Semiconductors"
  parentSector: string; // e.g. "A1"
  subIndustries?: ClassificationSubIndustry[];
}

export interface ClassificationSubIndustry {
  code: string;          // e.g. "A1-1010"
  name: string;          // e.g. "Big Pharma"
  parentIndustry: string; // e.g. "A1-10"
}

// ─── Value Chain Core ─────────────────────────────────────────────────────────

export interface ValueChain {
  code: string;               // e.g. "F2-10"
  name: string;               // e.g. "Semiconductors"
  imCode: string;             // e.g. "F2-10"
  classificationCode: string; // e.g. "F2-10"
  stages: ValueChainStage[];
}

export interface ValueChainStage {
  id:
    | "upstream"
    | "processing"
    | "manufacturing"
    | "distribution"
    | "sales"
    | "customer";
  name: string; // e.g. "Upstream Raw Materials & Components"
  subIndustries: SubIndustry[];
}

// ─── Sub-Industry ─────────────────────────────────────────────────────────────

export interface SubIndustry {
  name: string;
  cr4: number;       // top-4 revenue share %
  probit: ProBIT;    // colour-coded profitability × growth badge
  cagr: number;      // CAGR 2023-2025
  leaders: LeaderCompany[];
  features: Feature[];
  opportunity?: string;
  threat?: string;
  niche?: NicheWinner;
  /** Cross-links to other value chains that share this sub-industry */
  classificationCodes?: string[];
}

// ─── ProBIT ───────────────────────────────────────────────────────────────────

/**
 * Two-letter assessment code:
 *  First letter  = Earnings / Profit  (H = above industry median, L = below)
 *  Second letter = Sales Growth       (H = above industry median, L = below)
 *
 *  HH → green   (high profit + high growth)
 *  HL → teal    (high profit + low  growth)
 *  LH → orange  (low  profit + high growth)
 *  LL → red     (low  profit + low  growth)
 */
export type ProBIT = "HH" | "HL" | "LH" | "LL";

// ─── Leader Company ───────────────────────────────────────────────────────────

export interface LeaderCompany {
  name: string;
  ticker: string;
  share: number;       // market share as a %, e.g. 35
  strengths: string[];
}

// ─── Feature ──────────────────────────────────────────────────────────────────

export interface Feature {
  title: string;
  description: string;
}

// ─── Niche Winner ─────────────────────────────────────────────────────────────

export interface NicheWinner {
  name: string;
  ticker: string;
  share: number;     // typically < 5
  cagr: number;      // typically > 15
  margin: string;    // e.g. ">20%"
  strategy: string;
  valuation: string; // e.g. "P/E 45x"
}

// ─── UI / Filter ──────────────────────────────────────────────────────────────

export type FilterType =
  | "all"
  | "high-concentration"   // CR4 > 60
  | "high-growth"          // CAGR > 10
  | "probit-hh"            // ProBIT === "HH"
  | "leaders"              // CR4 > 50
  | "niches";              // has NicheWinner
