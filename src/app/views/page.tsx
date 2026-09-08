import type { Metadata } from "next";
import {
  getPageviewStats,
  SOURCE_LABELS,
  SOURCE_ORDER,
} from "@/lib/pageviews";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Views",
  description: `Pageviews for ${site.name}.`,
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ViewsPage() {
  const stats = await getPageviewStats("gye");
  const total = stats?.total;
  const display =
    total == null ? "—" : total.toLocaleString("en-US");

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="hero-eyebrow">Site stats</p>
          <h1 className="hero-title">Views</h1>
          <p className="hero-lead">
            Total pageviews for this site only — every page load counts once.
          </p>
        </div>
      </header>

      <section className="section">
        <div
          className="wrap"
          style={{ textAlign: "center", maxWidth: "40rem", margin: "0 auto" }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 12vw, 5.5rem)",
              lineHeight: 1,
              letterSpacing: "0.04em",
              margin: "0 0 0.75rem",
            }}
          >
            {display}
          </p>
          <p style={{ fontSize: "1.15rem", margin: 0, opacity: 0.9 }}>
            Pageviews
          </p>
          <p className="section-lead" style={{ marginTop: "1.5rem" }}>
            {stats == null
              ? "Counter is not connected yet. Visits are not being recorded."
              : "This number rises with real traffic to goldenyearsexpress.com (www and apex). It is not a unique-visitor count."}
          </p>

          {stats != null ? (
            <div style={{ marginTop: "2.5rem", textAlign: "left" }}>
              <h2
                className="section-title"
                style={{ fontSize: "1.35rem", marginBottom: "1rem", textAlign: "center" }}
              >
                By source
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                }}
              >
                {SOURCE_ORDER.map((key) => {
                  const n = stats.bySource[key] || 0;
                  return (
                    <li
                      key={key}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "1rem",
                        padding: "0.75rem 1rem",
                        border: "1px solid rgba(201, 162, 39, 0.22)",
                        borderRadius: "10px",
                        background: "rgba(18, 18, 22, 0.85)",
                      }}
                    >
                      <span>{SOURCE_LABELS[key]}</span>
                      <strong style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}>
                        {n.toLocaleString("en-US")}
                      </strong>
                    </li>
                  );
                })}
              </ul>
              <p className="section-lead" style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
                Direct = no referrer. Other = any hostname that is not Google, Facebook, or Instagram.
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
