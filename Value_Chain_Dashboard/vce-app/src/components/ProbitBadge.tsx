import React from "react";
import styles from "./ValueChainDashboard.module.css";
import type { ProBIT } from "../types/valueChain";

interface ProbitBadgeProps {
  value: ProBIT;
}

const probitClassMap: Record<ProBIT, string> = {
  HH: styles.probitHH,
  HL: styles.probitHL,
  LH: styles.probitLH,
  LL: styles.probitLL,
};

const ProbitBadge: React.FC<ProbitBadgeProps> = ({ value }) => {
  const className = `${styles.probitBadge} ${probitClassMap[value] ?? ""}`;
  return <span className={className}>{value}</span>;
};

export default ProbitBadge;
