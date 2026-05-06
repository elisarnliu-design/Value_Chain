import React, { useState, useCallback } from "react";
import styles from "./ValueChainDashboard.module.css";
import FilterBar from "./FilterBar";
import ConcentrationTable from "./ConcentrationTable";
import SidePanel from "./SidePanel";
import type { ValueChain, SubIndustry, FilterType, ColumnGroup } from "../types/valueChain";

interface ValueChainDashboardProps {
  chain: ValueChain;
  group: ColumnGroup;
}

function filterSubIndustry(sub: SubIndustry, filter: FilterType): boolean {
  switch (filter) {
    case "high-concentration":
      return sub.cr4 >= 60;
    case "high-growth":
      return sub.cagr >= 10;
    case "high-cagr-forward":
      return sub.cagrForward >= 10;
    case "high-operating-margin":
      return sub.operatingMargin > 15;
    case "probit-hh":
      return sub.probit === "HH";
    case "niches":
      return sub.niche !== undefined;
    case "all":
    default:
      return true;
  }
}

const ValueChainDashboard: React.FC<ValueChainDashboardProps> = ({ chain, group }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeSubIndustry, setActiveSubIndustry] = useState<SubIndustry | null>(null);

  const closePanel = useCallback(() => {
    setActiveSubIndustry(null);
  }, []);

  return (
    <div
      className={`${styles.dashboard}${
        group !== "C" ? ` ${styles[`theme${group}`]}` : ""
      }`}
    >
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className={styles.contentWrapper}>
        <div
          className={`${styles.mainContent} ${
            activeSubIndustry ? styles.mainContentPanelOpen : ""
          }`}
        >
          {chain.stages.map((stage) => {
            const visibleSubs = stage.subIndustries.filter((sub) =>
              filterSubIndustry(sub, activeFilter)
            );
            if (visibleSubs.length === 0) return null;
            return (
              <div key={stage.id} className={styles.section}>
                <h2 className={styles.sectionHeader}>{stage.name}</h2>
                <ConcentrationTable
                  subIndustries={visibleSubs}
                  onMoreClick={setActiveSubIndustry}
                />
              </div>
            );
          })}

          <div className={styles.dataSource}>
            Data: Company 10-K/10-Q filings, IBISWorld, Mordor Intelligence,
            Industry Reports (2024-2026). CAGR (2026-2030) and Operating Margin are
            estimates or consensus where marked.
          </div>
        </div>

        <SidePanel
          isOpen={activeSubIndustry !== null}
          subIndustry={activeSubIndustry}
          onClose={closePanel}
        />
      </div>
    </div>
  );
};

export default ValueChainDashboard;
