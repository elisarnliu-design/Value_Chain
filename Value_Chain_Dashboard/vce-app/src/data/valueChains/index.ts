import type { ValueChain } from "../../types/valueChain";
import { footwearData } from "./footwear";
import { semiconductorsData } from "./semiconductors_for_pc";
import { restaurantsData } from "./restaurants";

export const valueChainRegistry: Record<string, ValueChain> = {
  "C1-1020": footwearData,
  "F2-10": semiconductorsData,
  "C2-6010": restaurantsData,
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
