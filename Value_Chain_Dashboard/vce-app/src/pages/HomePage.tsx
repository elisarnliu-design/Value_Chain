import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { gridRows } from "../data/classification";
import type { ClassificationIndustry, ClassificationSubIndustry } from "../types/valueChain";
import styles from "./HomePage.module.css";

const GROUP_LABELS: Record<string, { label: string; subtitle: string }> = {
  A: { label: "A — Advanced", subtitle: "Individuals & Society" },
  C: { label: "C — Core",     subtitle: "Goods & Services" },
  F: { label: "F — Foundation", subtitle: "Infrastructure & Resources" },
};

export default function HomePage() {
  const navigate = useNavigate();
  // Track which sector cells are expanded (showing sub-industries)
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (sectorId: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(sectorId) ? next.delete(sectorId) : next.add(sectorId);
      return next;
    });
  };

  const handleClick = (code: string) => {
    navigate(`/chain/${encodeURIComponent(code)}`);
  };

  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>Value Chains Explorer</h1>
          <p className={styles.subtitle}>
            Select an industry to explore its complete 6-stage value chain —
            concentration metrics, ProBIT analysis, leading companies, and
            investment insights.
          </p>
        </div>
      </header>

      {/* ── Grid ── */}
      <main className={styles.main}>
        {gridRows.map((rowSectors) => {
          const group = rowSectors[0].group;
          const { label, subtitle } = GROUP_LABELS[group];

          return (
            <div key={group} className={styles.rowBlock}>
              {/* Row label strip */}
              <div className={styles.rowLabel}>
                <span className={styles.rowGroupId}>{label}</span>
                <span className={styles.rowGroupSub}>{subtitle}</span>
              </div>

              {/* Four sector cards in this row */}
              <div className={styles.rowCards}>
                {rowSectors.map((sector) => {
                  const isExpanded = expanded.has(sector.id);
                  const totalSubs = sector.industries.reduce(
                    (sum, ind) => sum + (ind.subIndustries?.length ?? 0),
                    0
                  );
                  const hasMore = totalSubs > 0;

                  return (
                    <div key={sector.id} className={styles.card}>
                      {/* Card header */}
                      <div className={styles.cardHeader}>
                        <span className={styles.sectorId}>{sector.id}</span>
                        <span className={styles.sectorName}>{sector.name}</span>
                      </div>

                      {/* Industry + sub-industry list */}
                      <ul className={styles.industryList}>
                        {sector.industries.map((ind: ClassificationIndustry) => (
                          <li key={ind.code} className={styles.industryItem}>
                            {/* Level-2 industry (always visible) */}
                            <button
                              className={styles.industryBtn}
                              onClick={() => handleClick(ind.code)}
                              title={ind.code}
                            >
                              <span className={styles.indCode}>{ind.code}</span>
                              <span className={styles.indName}>{ind.name}</span>
                            </button>

                            {/* Level-3 sub-industries (visible when expanded) */}
                            {isExpanded && ind.subIndustries && ind.subIndustries.length > 0 && (
                              <ul className={styles.subList}>
                                {ind.subIndustries.map((sub: ClassificationSubIndustry) => (
                                  <li key={sub.code}>
                                    <button
                                      className={styles.subBtn}
                                      onClick={() => handleClick(sub.code)}
                                      title={sub.code}
                                    >
                                      <span className={styles.subCode}>{sub.code}</span>
                                      <span className={styles.subName}>{sub.name}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>

                      {/* More / Less toggle */}
                      {hasMore && (
                        <button
                          className={styles.moreBtn}
                          onClick={() => toggle(sector.id)}
                        >
                          {isExpanded
                            ? "▲ Less"
                            : `▼ More (${totalSubs} sub-industries)`}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <p className={styles.footNote}>
          Click any entry to view its complete value chain analysis. ·
          Data: 10-K/10-Q filings, IBISWorld, Mordor Intelligence (2024–2025).
        </p>
      </main>
    </div>
  );
}
