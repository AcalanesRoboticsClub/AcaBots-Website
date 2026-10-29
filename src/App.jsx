import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import {
  events,
  leaders,
  links,
  meetingDays,
  photos,
  sponsorTiers,
} from "./content.js";

const navigation = [
  ["Team", "#team"],
  ["Season", "#season"],
  ["Sponsorship", "#sponsorship"],
  ["Contact", "#contact"],
];

function Arrow() {
  return <ArrowRightIcon size={25} weight="regular" aria-hidden="true" />;
}

function Photo({ photo, sizes }) {
  return (
    <figure className="documentary-photo">
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes={sizes}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
      />
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="AcaBots home"
        onClick={() => setMenuOpen(false)}
      >
        <img
          src="/images/acabots-wordmark.png"
          alt="AcaBots"
          width="1280"
          height="386"
        />
      </a>
      <button
        ref={menuButton}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <XIcon size={23} aria-hidden="true" />
        ) : (
          <ListIcon size={23} aria-hidden="true" />
        )}
        <span>{menuOpen ? "Close" : "Menu"}</span>
      </button>
      <nav
        id="main-navigation"
        className="main-navigation"
        aria-label="Main navigation"
        data-open={menuOpen}
      >
        {navigation.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading">
          <span>Acalanes</span>
          <span>High School’s</span>
          <span>robotics team.</span>
        </h1>
        <p>
          Competing in FIRST Tech Challenge as Team 24689, based in Lafayette,
          California.
        </p>
        <div className="hero-actions">
          <a className="button button-light" href="#team">
            Meet the team <Arrow />
          </a>
          <a className="text-link light-link" href="#sponsorship">
            Sponsorship
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img
          src="/images/club-day-1600.webp"
          srcSet="/images/club-day-800.webp 800w, /images/club-day-1600.webp 1600w"
          sizes="(max-width: 959px) 100vw, 58vw"
          alt="AcaBots students sharing their robot and engineering posters at Acalanes club day."
          width="2226"
          height="1670"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

function MeetsPreview() {
  return (
    <section className="meets-preview" aria-labelledby="planned-meets-heading">
      <div className="meets-preview-heading">
        <p className="eyebrow">2026–27 / BIOBUZZ</p>
        <h2 id="planned-meets-heading">
          <a href="#season">Planned meets</a>
        </h2>
      </div>
      {events.slice(0, 2).map((event) => (
        <a className="meet-preview" href={`#${event.id}`} key={event.id}>
          <time dateTime={event.date}>{event.shortDate}</time>
          <span>{event.previewLabel}</span>
        </a>
      ))}
    </section>
  );
}

function Team() {
  return (
    <section
      className="content-section team-section"
      id="team"
      aria-labelledby="team-heading"
    >
      <div className="section-intro">
        <p className="eyebrow">ACABOTS</p>
        <h2 id="team-heading">Our team</h2>
        <p>
          The 2026–27 team is led by Henry Rosenberg and Carissa Penn. Members
          work on mechanical design, programming, and the planning behind each
          competition.
        </p>
        <a className="inline-action" href="#contact">
          Interested in joining? <Arrow />
        </a>
        <div className="team-recognition">
          <p className="eyebrow">PAST RECOGNITION</p>
          <p>
            <strong>Inspire Award, 2nd Place</strong>
            <br />
            East Bay Hills League Tournament
            <br />
            January 2025 · INTO THE DEEP
          </p>
          <a
            className="text-link"
            href={links.history}
            target="_blank"
            rel="noreferrer"
          >
            View competition history
          </a>
        </div>
      </div>
      <div className="leadership">
        <h3>2026–27 leadership</h3>
        <dl className="leadership-list">
          {leaders.map((leader) => (
            <div key={leader.name}>
              <dt>{leader.role}</dt>
              <dd>{leader.name}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="team-gallery" role="group" aria-label="Team photographs">
        <Photo
          photo={photos.workshop}
          sizes="(max-width: 699px) calc(100vw - 48px), (min-width: 1600px) 448px, calc(29.167vw - 19px)"
        />
        <Photo
          photo={photos.programming}
          sizes="(max-width: 699px) calc(100vw - 48px), (min-width: 1600px) 448px, calc(29.167vw - 19px)"
        />
        <Photo
          photo={photos.groupDemo}
          sizes="(max-width: 699px) calc(100vw - 48px), (min-width: 1600px) 448px, calc(29.167vw - 19px)"
        />
      </div>
    </section>
  );
}

function Season() {
  return (
    <section
      className="season-surface"
      id="season"
      aria-labelledby="season-heading"
    >
      <div className="content-section season-section">
        <div className="section-intro">
          <p className="eyebrow">FIRST TECH CHALLENGE</p>
          <h2 id="season-heading">This season</h2>
          <p className="season-name">2026–27: BIOBUZZ</p>
          <p>
            Our planned competition dates are below. Please check with the team
            before attending, as dates and venues can change.
          </p>
          <a
            className="inline-action"
            href={links.scout}
            target="_blank"
            rel="noreferrer"
          >
            Follow on FTC Scout <Arrow />
          </a>
        </div>
        <ol className="event-list" aria-label="Planned competition calendar">
          {events.map((event) => (
            <li id={event.id} key={event.id}>
              <time dateTime={event.date}>{event.displayDate}</time>
              <div>
                <h3>{event.name}</h3>
                <p>{event.venue}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Sponsorship() {
  return (
    <section
      className="content-section sponsorship-section"
      id="sponsorship"
      aria-labelledby="sponsorship-heading"
    >
      <div className="section-intro sponsorship-copy">
        <p className="eyebrow">SPONSORS & PARTNERS</p>
        <h2 id="sponsorship-heading">Sponsorship</h2>
        <p className="large-copy">
          Support helps cover robot parts, competition costs, and the team’s
          STEM outreach.
        </p>
      </div>
      <div className="recognition-tiers">
        {sponsorTiers.map((tier) => (
          <div
            className={`recognition-tier recognition-tier-${tier.id}`}
            key={tier.id}
          >
            <h3>{tier.label}</h3>
            <ul className="organization-list">
              {tier.sponsors.map((sponsor) => (
                <li key={sponsor.id}>
                  <a
                    className={`organization-link organization-${sponsor.id}`}
                    href={sponsor.website}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${sponsor.name} website (opens in a new tab)`}
                  >
                    <div className="organization-mark">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={sponsor.width}
                        height={sponsor.height}
                        loading="lazy"
                      />
                      {sponsor.wordmark && <span>{sponsor.wordmark}</span>}
                    </div>
                    <span className="organization-domain">
                      {sponsor.domain} <Arrow />
                    </span>
                  </a>
                  {sponsor.note && <p className="organization-note">{sponsor.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="sponsorship-inquiry">
        <p>
          For sponsorship questions or offers of parts and equipment, get in
          touch with Dillon.
        </p>
        <a className="button button-blue" href={links.sponsorEmail}>
          Ask about sponsorship <Arrow />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      className="contact-surface"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="content-section contact-section">
        <div>
          <p className="eyebrow">JOIN ACABOTS</p>
          <h2 id="contact-heading">Come to a meeting.</h2>
          <p>
            Students are welcome at lunch on {meetingDays}. Email for the
            current room and weekend build schedule.
          </p>
          <a className="button button-light" href={links.joinEmail}>
            Get meeting details <Arrow />
          </a>
        </div>
        <div className="contact-details">
          <div>
            <h3>Contact</h3>
            <a className="contact-email" href={links.email}>
              dillon.nagar@gmail.com
            </a>
            <p>Team questions, joining, and sponsorship.</p>
          </div>
          <div>
            <h3>Instagram</h3>
            <a
              className="social-link"
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              @acalanesrobotics <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div id="home" />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <MeetsPreview />
        <Team />
        <Season />
        <Sponsorship />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© 2026 AcaBots</p>
        <p>Acalanes High School · Lafayette, California</p>
        <a href="#home">
          Back to top <Arrow />
        </a>
      </footer>
    </>
  );
}
