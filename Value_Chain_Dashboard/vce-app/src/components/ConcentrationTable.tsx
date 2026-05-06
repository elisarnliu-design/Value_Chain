import React from "react";
import styles from "./ValueChainDashboard.module.css";
import ProbitBadge from "./ProbitBadge";
import type { SubIndustry } from "../types/valueChain";

interface ConcentrationTableProps {
  subIndustries: SubIndustry[];
  onMoreClick: (sub: SubIndustry) => void;
}

const ConcentrationTable: React.FC<ConcentrationTableProps> = ({
  subIndustries,
  onMoreClick,
}) => {
  return (
    <div className={styles.concentrationTable}>
      <table>
        <thead>
          <tr>
            <th>Sub-Industry</th>
            <th>CR4 (%)</th>
            <th>ProBIT (E&amp;S)</th>
            <th>Operating Margin (%)</th>
            <th>CAGR (2023–2026)</th>
            <th>CAGR (2026-2030)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {subIndustries.map((sub, idx) => (
            <tr key={idx}>
              <td>{sub.name}</td>
              <td>{sub.cr4}</td>
              <td>
                <ProbitBadge value={sub.probit} />
              </td>
              <td>{sub.operatingMargin}%</td>
              <td>{sub.cagr}%</td>
              <td>{sub.cagrForward}%</td>
              <td>
                <button
                  className={styles.moreBtn}
                  onClick={() => onMoreClick(sub)}
                >
                  More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConcentrationTable;
