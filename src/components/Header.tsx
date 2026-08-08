import { site } from "@/data/content";

export function Header() {
  return (
    <header className="site-nav">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="wrap nav-inner">
        <a href="/" className="brand" aria-label="The Golden Years Express home">
          <span className="brand-mark">GOLDEN YEARS EXPRESS</span>
          <span className="brand-sub">Rat Pack on the Rails</span>
        </a>
        <nav aria-label="On this page" className="nav-scroll">
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="#letter">
                The letter
              </a>
            </li>
            <li>
              <a className="nav-link" href="#support">
                Support
              </a>
            </li>
            <li>
              <a className="nav-link" href="#donate">
                Donate
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a className="nav-phone" href={site.phoneHref}>
          {site.phone}
        </a>
      </div>
    </header>
  );
}
