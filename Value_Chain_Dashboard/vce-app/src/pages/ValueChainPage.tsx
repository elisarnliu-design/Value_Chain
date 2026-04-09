import { useParams, Link } from "react-router-dom";
import { getIndustryByCode, getGroupFromImCode } from "../data/classification";
import { getValueChain } from "../data/valueChains";
import ValueChainDashboard from "../components/ValueChainDashboard";
import styles from "./ValueChainPage.module.css";

export default function ValueChainPage() {
  const { code } = useParams<{ code: string }>();
  const decodedCode = code ? decodeURIComponent(code) : "";
  const industry = getIndustryByCode(decodedCode);
  const chain = getValueChain(decodedCode);
  const group = getGroupFromImCode(decodedCode);

  return (
    <div className={`${styles.page} ${styles[`theme${group}`]}`}>
      {/* ── Nav bar ── */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.backLink}>
          ← Value Chain Explorer
        </Link>
      </nav>

      {/* ── Header ── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          {industry ? (
            <>
              <div className={styles.meta}>
                <span className={styles.imCode}>{decodedCode}</span>
                <span className={styles.sector}>
                  {industry.sectorId} · {industry.sectorName}
                </span>
              </div>
              <h1 className={styles.title}>{industry.name}</h1>
              <p className={styles.subtitle}>Value Chain Dashboard</p>
            </>
          ) : (
            <h1 className={styles.title}>Industry not found: {decodedCode}</h1>
          )}
        </div>
      </header>

      {/* ── Content ── */}
      {chain ? (
        <ValueChainDashboard chain={chain} group={group} />
      ) : (
        <main className={styles.main}>
          <div className={styles.comingSoon}>
            <div className={styles.comingSoonIcon}>🔬</div>
            <h2 className={styles.comingSoonTitle}>Data Coming Soon</h2>
            <p className={styles.comingSoonText}>
              The value chain analysis for{" "}
              <strong>{industry?.name ?? decodedCode}</strong> (
              {decodedCode}) is being prepared.
            </p>
            <p className={styles.comingSoonText}>
              Use the prompt template to generate this industry's data file and
              add it to <code>src/data/valueChains/</code>.
            </p>
            <Link to="/" className={styles.returnBtn}>
              ← Back to Explorer
            </Link>
          </div>
        </main>
      )}
    </div>
  );
}
