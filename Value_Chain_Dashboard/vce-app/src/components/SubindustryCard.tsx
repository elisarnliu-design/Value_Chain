import React from "react";
import styles from "./ValueChainDashboard.module.css";
import type { SubIndustry } from "../types/valueChain";

interface SubindustryCardProps {
  subIndustry: SubIndustry;
}

const SubindustryCard: React.FC<SubindustryCardProps> = ({ subIndustry: sub }) => {
  return (
    <div className={styles.subindustryCard}>
      <h3>{sub.name}</h3>

      <div className={styles.leadersSection}>
        <div className={styles.leadersTitle}>Leading Companies</div>
        {sub.leaders.map((leader, idx) => (
          <div key={idx} className={styles.companyItem}>
            <div className={styles.companyName}>
              {idx + 1}. {leader.name} ({leader.ticker}) – {leader.share}%
            </div>
            <ul className={styles.companyStrengths}>
              {leader.strengths.map((strength, sIdx) => (
                <li key={sIdx}>{strength}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {sub.features.length > 0 && (
        <div className={styles.featuresSection}>
          <div className={styles.featuresTitle}>Key Features</div>
          {sub.features.map((feature, idx) => (
            <div key={idx} className={styles.featureItem}>
              <strong>{feature.title}:</strong> {feature.description}
            </div>
          ))}
        </div>
      )}

      {sub.opportunity && (
        <div className={styles.opportunitySection}>
          <div className={styles.sectionLabel}>Opportunity</div>
          <div className={styles.sectionContent}>{sub.opportunity}</div>
        </div>
      )}

      {sub.threat && (
        <div className={styles.threatSection}>
          <div className={styles.sectionLabel}>Threat</div>
          <div className={styles.sectionContent}>{sub.threat}</div>
        </div>
      )}

      {sub.niche && (
        <div className={styles.nicheSection}>
          <div className={styles.nicheTitle}>Niche Winner</div>
          <div className={styles.nicheItem}>
            <strong>Company:</strong> {sub.niche.name} ({sub.niche.ticker}) –{" "}
            {sub.niche.share}% market share
          </div>
          <div className={styles.nicheItem}>
            <strong>Revenue CAGR:</strong> {sub.niche.cagr}%
          </div>
          <div className={styles.nicheItem}>
            <strong>Margins:</strong> {sub.niche.margin}
          </div>
          <div className={styles.nicheItem}>
            <strong>Strategy:</strong> {sub.niche.strategy}
          </div>
          <div className={styles.nicheItem}>
            <strong>Valuation:</strong> {sub.niche.valuation}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubindustryCard;
