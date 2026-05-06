import type { ValueChain } from "../../types/valueChain";
import { a2_10Data } from "./a2_10";
import { a2_1010Data } from "./a2_1010";
import { a2_1020Data } from "./a2_1020";
import { a2_1030Data } from "./a2_1030";
import { a2_20Data } from "./a2_20";
import { a2_2010Data } from "./a2_2010";
import { a2_2020Data } from "./a2_2020";
import { a2_30Data } from "./a2_30";
import { a2_3010Data } from "./a2_3010";
import { a2_3020Data } from "./a2_3020";
import { a2_3030Data } from "./a2_3030";
import { a2_40Data } from "./a2_40";
import { a2_50Data } from "./a2_50";
import { a2_5010Data } from "./a2_5010";
import { a2_5020Data } from "./a2_5020";
import { a2_5030Data } from "./a2_5030";
import { a2_5040Data } from "./a2_5040";
import { a2_5050Data } from "./a2_5050";
import { a2_60Data } from "./a2_60";
import { a2_6010Data } from "./a2_6010";
import { a2_6020Data } from "./a2_6020";
import { a2_70Data } from "./a2_70";
import { a2_7010Data } from "./a2_7010";
import { a2_7020Data } from "./a2_7020";
import { a2_7030Data } from "./a2_7030";
import { a2_7040Data } from "./a2_7040";
import { a2_7050Data } from "./a2_7050";
import { a2_80Data } from "./a2_80";
import { a2_90Data } from "./a2_90";
import { footwearData } from "./footwear";
import { restaurantsData } from "./restaurants";
import { semiconductorsData } from "./semiconductors_for_pc";
export const valueChainRegistry: Record<string, ValueChain> = {
  "A2-10": a2_10Data,
  "A2-1010": a2_1010Data,
  "A2-1020": a2_1020Data,
  "A2-1030": a2_1030Data,
  "A2-20": a2_20Data,
  "A2-2010": a2_2010Data,
  "A2-2020": a2_2020Data,
  "A2-30": a2_30Data,
  "A2-3010": a2_3010Data,
  "A2-3020": a2_3020Data,
  "A2-3030": a2_3030Data,
  "A2-40": a2_40Data,
  "A2-50": a2_50Data,
  "A2-5010": a2_5010Data,
  "A2-5020": a2_5020Data,
  "A2-5030": a2_5030Data,
  "A2-5040": a2_5040Data,
  "A2-5050": a2_5050Data,
  "A2-60": a2_60Data,
  "A2-6010": a2_6010Data,
  "A2-6020": a2_6020Data,
  "A2-70": a2_70Data,
  "A2-7010": a2_7010Data,
  "A2-7020": a2_7020Data,
  "A2-7030": a2_7030Data,
  "A2-7040": a2_7040Data,
  "A2-7050": a2_7050Data,
  "A2-80": a2_80Data,
  "A2-90": a2_90Data,
  "C1-1020": footwearData,
  "C2-6010": restaurantsData,
  "F2-10": semiconductorsData,
};

/**
 * Returns the ValueChain for the given IM code, or undefined if not yet loaded.
 */
export function getValueChain(imCode: string): ValueChain | undefined {
  return valueChainRegistry[imCode];
}

/**
 * All IM codes that currently have data available.
 */
export const availableImCodes: string[] = Object.keys(valueChainRegistry);
