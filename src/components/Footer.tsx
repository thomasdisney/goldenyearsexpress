import { ProtectedEmail } from "@/components/ProtectedEmail";
import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="brand-mark">THE GOLDEN YEARS EXPRESS</p>
        <p className="brand-sub">{site.tagline}</p>
        <p>
          <ProtectedEmail subject={site.emailSubject} />
          {" · "}
          <a href={site.phoneHref}>{site.phone}</a>
        </p>
        <div className="footer-links">
          <a href={site.sibling.url} rel="noopener noreferrer">
            RatPackEvents.com
          </a>
          <a href={site.deanoholics.url} rel="noopener noreferrer">
            {site.deanoholics.name}
          </a>
        </div>
        <p className="fine">
          © {new Date().getFullYear()} The Golden Years Express · A{" "}
          <a href={site.sibling.url} rel="noopener noreferrer">
            Rat Pack Events
          </a>{" "}
          project
        </p>
      </div>
    </footer>
  );
}
