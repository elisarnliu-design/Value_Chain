import React from "react";
import styles from "./ValueChainDashboard.module.css";
import type { FilterType } from "../types/valueChain";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All Sub-Industries", value: "all" },
  { label: "High Concentration (CR4 >60%)", value: "high-concentration" },
  { label: "High Growth (CAGR >10%)", value: "high-growth" },
  { label: "ProBIT HH Only", value: "probit-hh" },
  { label: "Leaders Focus", value: "leaders" },
  { label: "Niche Winners Only", value: "niches" },
];

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className={styles.filters}>
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          className={`${styles.filterBtn} ${
            activeFilter === filter.value ? styles.filterBtnActive : ""
          }`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
