import React, { useEffect } from "react";
import styles from "./ValueChainDashboard.module.css";
import SubindustryCard from "./SubindustryCard";
import type { SubIndustry } from "../types/valueChain";

interface SidePanelProps {
  isOpen: boolean;
  subIndustry: SubIndustry | null;
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, subIndustry, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropActive : ""}`}
        onClick={onClose}
      />
      <div className={`${styles.sidePanel} ${isOpen ? styles.sidePanelActive : ""}`}>
        {subIndustry && (
          <>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>{subIndustry.name}</h2>
              <button className={styles.closeBtn} onClick={onClose}>
                &times;
              </button>
            </div>
            <SubindustryCard subIndustry={subIndustry} />
          </>
        )}
      </div>
    </>
  );
};

export default SidePanel;
