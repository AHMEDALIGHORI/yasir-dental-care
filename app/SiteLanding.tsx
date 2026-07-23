import type { CSSProperties } from "react";
import type { SiteData } from "./site-types";

export function SiteLanding({ data }: { data: SiteData }) {
  const themeStyle = {
    "--ink": data.theme.ink,
    "--muted": data.theme.muted,
    "--paper": data.theme.paper,
    "--surface": data.theme.surface,
    "--primary": data.theme.primary,
    "--primary-dark": data.theme.primaryDark,
    "--accent": data.theme.accent,
    "--line": data.theme.line,
  } as CSSProperties;

  return (
    <main className={`site variant-${data.variant}`} style={themeStyle}>
      <div className="announcement">
        <div className="shell announcement-inner">
          <span>{data.established}</span>
          <a href={data.phoneHref}>Need help today? {data.phoneDisplay}</a>
        </div>
      </div>

      <header className="header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" aria-label={`${data.brand} home`}>
            <span className="brand-mark" aria-hidden="true">{data.mark}</span>
            <span className="brand-copy">
              <strong>{data.brand}</strong>
              <small>{data.specialty}</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">Treatments</a>
            <a href="#doctor">Our doctor</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button-small" href={data.whatsappHref}>Book a visit</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />{data.eyebrow}</p>
            <h1>{data.headline}</h1>
            <p className="hero-intro">{data.intro}</p>
            <div className="hero-actions">
              <a className="button" href={data.whatsappHref}>Request an appointment</a>
              <a className="text-link" href={data.phoneHref}>Call {data.phoneDisplay}<span>↗</span></a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true"><span>5★</span><span>✓</span><span>+</span></div>
              <p><strong>Clear answers. Thoughtful care.</strong><br />A calmer path to a healthier smile.</p>
            </div>
          </div>

          <div className="hero-stage" aria-label={`${data.brand} care highlights`}>
            <div className="stage-glow" />
            <div className="stage-grid" />
            <article className="smile-card">
              <div className="card-topline"><span>Patient-first dentistry</span><span>Karachi</span></div>
              <div className="monogram" aria-hidden="true">{data.mark}</div>
              <p className="card-kicker">{data.specialty}</p>
              <h2>{data.heroCardTitle}</h2>
              <p>{data.heroCardText}</p>
              <div className="card-rule" />
              <div className="card-meta"><span>Comfort</span><span>Clarity</span><span>Confidence</span></div>
            </article>
            <div className="floating-card floating-review"><strong>4.9</strong><span>patient experience</span><div>★★★★★</div></div>
            <div className="floating-card floating-hours"><span className="pulse" /><div><strong>Appointments</strong><small>{data.hours}</small></div></div>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Practice highlights">
        <div className="shell stats-grid">
          {data.stats.map((stat) => (
            <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span />Treatments</p><h2>Everything your smile needs, under one roof.</h2></div>
            <p>From preventive visits to advanced restorative care, every treatment starts with a clear explanation and a plan built around you.</p>
          </div>
          <div className="services-grid">
            {data.services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-top"><span className="service-icon" aria-hidden="true">{service.icon}</span><small>0{index + 1}</small></div>
                <h3>{service.title}</h3><p>{service.description}</p><a href={data.whatsappHref}>Ask about treatment <span>→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section doctor-section" id="doctor">
        <div className="shell doctor-grid">
          <div className="doctor-portrait">
            <div className="portrait-ring" />
            <div className="portrait-initials">{data.doctor.initials}</div>
            <div className="portrait-caption"><span>Lead clinician</span><strong>{data.doctor.name}</strong></div>
          </div>
          <div className="doctor-copy">
            <p className="eyebrow"><span />Meet your dentist</p>
            <h2>Expert care that still feels personal.</h2>
            <h3>{data.doctor.name}</h3><p className="doctor-title">{data.doctor.title}</p>
            <p>{data.doctor.bio}</p>
            <div className="credentials">{data.doctor.credentials.map((item) => <span key={item}>✓ {item}</span>)}</div>
            <a className="text-link" href={data.whatsappHref}>Start a conversation <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell">
          <div className="section-heading centered-heading"><p className="eyebrow"><span />The experience</p><h2>Dentistry designed around real people.</h2><p>No vague promises. Just a thoughtful visit, a transparent plan, and care you can feel good about.</p></div>
          <div className="promise-grid">
            {data.promises.map((promise, index) => (
              <article className="promise" key={promise.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{promise.title}</h3><p>{promise.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell process-grid">
          <div className="process-intro"><p className="eyebrow"><span />Your visit</p><h2>A simple path from concern to confidence.</h2><p>We keep the next step clear at every stage, so you always know what is happening and why.</p></div>
          <div className="process-list">
            {data.process.map((item) => (
              <article className="process-item" key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="shell testimonial-card">
          <div className="quote-mark">“</div>
          <blockquote>{data.testimonial.quote}</blockquote>
          <div className="testimonial-person"><span>{data.testimonial.author.slice(0, 1)}</span><p><strong>{data.testimonial.author}</strong><small>{data.testimonial.detail}</small></p></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div><p className="eyebrow"><span />Good to know</p><h2>Questions before your first visit?</h2><p>Here are the essentials. For anything specific, message the clinic and the team will guide you.</p><a className="button button-outline" href={data.whatsappHref}>Ask us directly</a></div>
          <div className="faq-list">
            {data.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell contact-card">
          <div className="contact-copy"><p className="eyebrow light"><span />Ready when you are</p><h2>Your next confident smile can start today.</h2><p>Tell us what is bothering you. We’ll help you choose the right appointment and explain what to expect.</p><div className="contact-actions"><a className="button button-light" href={data.whatsappHref}>Book on WhatsApp</a><a href={`mailto:${data.email}`}>{data.email}</a></div></div>
          <div className="contact-details"><div><small>Visit</small><strong>{data.address}</strong></div><div><small>Call</small><a href={data.phoneHref}>{data.phoneDisplay}</a></div><div><small>Hours</small><strong>{data.hours}</strong></div></div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid"><a className="brand" href="#top"><span className="brand-mark">{data.mark}</span><span className="brand-copy"><strong>{data.brand}</strong><small>{data.city}</small></span></a><p>Modern, thoughtful dental care built around comfort, clarity, and lasting results.</p><div><a href="#services">Treatments</a><a href="#doctor">Doctor</a><a href="#contact">Contact</a></div></div>
        <div className="shell footer-bottom"><span>© 2026 {data.brand}. Concept redesign.</span><span>Private demonstration website</span></div>
      </footer>

      <a className="mobile-book" href={data.whatsappHref}>Book an appointment <span>→</span></a>
    </main>
  );
}
