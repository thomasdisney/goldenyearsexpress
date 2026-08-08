import { site } from "@/data/content";

export function StickyCtaBar() {
  return (
    <div className="sticky-cta" role="region" aria-label="Quick contact">
      <a className="btn btn-crimson" href={site.phoneHref}>
        Call {site.phone}
      </a>
      <a className="btn" href="#donate">
        Donate
      </a>
    </div>
  );
}
