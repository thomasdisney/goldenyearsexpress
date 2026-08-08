import Image from "next/image";
import { ProtectedEmail } from "@/components/ProtectedEmail";
import {
  heroLead,
  letter,
  site,
  supportOptions,
  trustLine,
} from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Partnership opportunity · Rat Pack Events</p>
            <h1 className="hero-title">THE GOLDEN YEARS EXPRESS</h1>
            <p className="hero-lead">{heroLead}</p>
            <div className="btn-row">
              <a className="btn btn-crimson btn-xl" href={site.phoneHref}>
                Call or text {site.phone}
              </a>
              <a className="btn btn-xl" href="#donate">
                Donate / sponsor
              </a>
            </div>
            <ul className="trust-row">
              {trustLine.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="hero-photo poster-frame">
            <Image
              src={site.poster.src}
              alt={site.poster.alt}
              width={832}
              height={1248}
              priority
              sizes="(max-width: 860px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft" id="letter">
        <div className="wrap letter-layout">
          <div className="section-head">
            <p className="section-eyebrow">From Bob &amp; Sherri-Lynn</p>
            <h2 className="section-title">Partnership Opportunity</h2>
            <p className="section-lead">The Golden Years Express</p>
          </div>

          <article className="letter-card">
            <p className="letter-greeting">{letter.greeting}</p>
            {letter.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}

            <h3 className="letter-subhead">{letter.howItWorksTitle}</h3>
            {letter.howItWorks.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}

            <p>
              Support can take many forms, including:
            </p>
            <ul className="bullet-list" id="support">
              {supportOptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>{letter.audience}</p>
            {letter.closing.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}

            <p className="letter-signoff">{letter.signoff}</p>
            <p className="letter-from">
              {letter.from.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <ProtectedEmail subject={site.emailSubject} />
              <br />
              <a href={site.sibling.url} rel="noopener noreferrer">
                RatPackEvents.com
              </a>
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="donate">
        <div className="wrap">
          <div className="section-head">
            <p className="section-eyebrow">Make it possible</p>
            <h2 className="section-title">Donate or sponsor</h2>
            <p className="section-lead">
              Every contribution helps cover train travel, local shuttles, lodging, and the cost of
              bringing live entertainment into communities with little or no entertainment budget.
            </p>
          </div>
          <div className="donate-grid">
            <a
              className="donate-card"
              href={site.donations.venmo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="donate-eyebrow">Venmo</p>
              <h3>{site.donations.venmo.label}</h3>
              <p className="donate-handle">{site.donations.venmo.handle}</p>
              <span className="donate-cta">Open Venmo →</span>
            </a>
            <a
              className="donate-card"
              href={site.donations.paypal.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="donate-eyebrow">PayPal</p>
              <h3>{site.donations.paypal.label}</h3>
              <p className="donate-handle">Secure PayPal checkout</p>
              <span className="donate-cta">Open PayPal →</span>
            </a>
          </div>
          <p className="donate-note">
            Prefer sponsorship, hotel rooms, shuttles, or introductions?{" "}
            <a href="#contact">Call or email us</a> — any level of help is welcome.
          </p>
        </div>
      </section>

      <section className="section section-soft" id="contact">
        <div className="wrap">
          <div className="cta-band">
            <h2>Join The Golden Years Express</h2>
            <p>
              We would love to talk about partnerships, community stops, or how you can help along
              the route.
            </p>
            <div className="contact-stack">
              <a className="phone-mega" href={site.phoneHref}>
                Call or text {site.phone}
              </a>
              <ProtectedEmail prefix="Email: " subject={site.emailSubject} />
            </div>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a className="btn btn-crimson btn-xl" href={site.phoneHref}>
                Call or text
              </a>
              <ProtectedEmail
                variant="button"
                className="btn-xl"
                subject={site.emailSubject}
              >
                Email us
              </ProtectedEmail>
            </div>
            <p style={{ marginTop: "1.5rem", color: "var(--muted)", fontSize: "0.95rem" }}>
              Looking for public shows or The Dean-O-Holics?{" "}
              <a
                href={site.sibling.url}
                rel="noopener noreferrer"
                style={{ color: "var(--gold-soft)" }}
              >
                Visit {site.sibling.name} →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
