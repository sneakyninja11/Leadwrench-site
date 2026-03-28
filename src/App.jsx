export default function App() {
  const services = [
    {
      title: "Missed Call Text Back",
      desc: "Instantly text back missed HVAC leads so they stop calling the next company on Google.",
    },
    {
      title: "Lead Follow-Up Automation",
      desc: "Automated SMS and email follow-up sequences that keep prospects engaged until they book.",
    },
    {
      title: "Pipeline & Tracking",
      desc: "A simple pipeline that shows every lead, every conversation, and every booked job in one place.",
    },
    {
      title: "Review & Rebooking Systems",
      desc: "Automations that help contractors collect more reviews and turn one-time customers into repeat revenue.",
    },
  ];

  const steps = [
    "A lead calls your business after hours or during a busy period.",
    "Leadwrench instantly follows up with a text and keeps the conversation moving.",
    "The lead is tracked inside your pipeline so nothing slips through the cracks.",
    "Your team books more jobs without adding more manual admin work.",
  ];

  const honestProof = [
    "Serving Norman & OKC",
    "Setup in 7 days",
    "Response in under 60 seconds",
    "Built for local HVAC teams",
  ];

  return (
    <div className="site-shell">
      <div className="site-glow site-glow-one" />
      <div className="site-glow site-glow-two" />

      <header className="hero-wrap">
        <nav className="nav-bar">
          <div>
            <div className="brand-mark">Leadwrench</div>
            <div className="brand-note">HVAC lead follow-up systems</div>
          </div>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#proof">Proof</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <a href="tel:4056624753" className="phone-link">(405) 662-4753</a>
            <a href="#contact" className="button button-light">Book a Demo</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-pill">Built for small HVAC companies</div>
            <div className="local-pill">Locally owned and operated in Norman, Oklahoma</div>

            <h1>Stop losing HVAC leads to missed calls and slow follow-up.</h1>

            <p className="hero-paragraph">
              Leadwrench helps HVAC contractors capture more jobs with missed-call text back,
              automated follow-up, pipeline tracking, and simple reporting that actually makes sense.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Get a Free Demo</a>
              <a href="#services" className="button button-ghost">See What We Set Up</a>
            </div>

            <div className="mini-proof-grid">
              {honestProof.map((item) => (
                <div key={item} className="mini-proof-card">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel hero-panel">
            <div className="status-row">
              <div>
                <div className="tiny-label">What your system can look like</div>
                <h3>HVAC Lead Flow</h3>
              </div>
              <div className="status-pill">Sample System</div>
            </div>

            <div className="timeline-card">
              <div className="timeline-row">
                <span>Missed call detected</span>
                <span className="accent-warm">1 min ago</span>
              </div>
              <p>Automatic text sent to lead right away.</p>
            </div>

            <div className="timeline-card timeline-card-highlight">
              <div className="tiny-label accent-cool">Lead reply</div>
              <p>“Yes, my AC stopped working. Can someone come tomorrow?”</p>
            </div>

            <div className="metric-grid">
              <div className="metric-card">
                <strong>Fast</strong>
                <span>response</span>
              </div>
              <div className="metric-card">
                <strong>Clean</strong>
                <span>pipeline</span>
              </div>
              <div className="metric-card">
                <strong>More</strong>
                <span>booked jobs</span>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section id="services" className="content-section">
          <div className="section-heading">
            <span className="section-kicker">Services</span>
            <h2>What Leadwrench sets up for HVAC companies</h2>
            <p>
              We build practical systems that help small contractors respond faster,
              stay organized, and book more work.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="glass-panel service-card">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className="content-section section-band">
          <div className="section-heading">
            <span className="section-kicker">Social Proof</span>
            <h2>Trusted by HVAC contractors across the Oklahoma City metro area</h2>
            <p>
              We’re currently building out our first case studies and testimonials.
              Once our first client is live, this section will show real results and real feedback.
            </p>
          </div>

          <div className="proof-grid">
            <div className="glass-panel proof-card">
              <h3>Local Focus</h3>
              <p>Serving Norman, Oklahoma City, Moore, Edmond, and nearby HVAC businesses.</p>
            </div>
            <div className="glass-panel proof-card">
              <h3>Fast Setup</h3>
              <p>Lead capture, follow-up, and pipeline systems can be set up quickly and clearly.</p>
            </div>
            <div className="glass-panel proof-card">
              <h3>Built for Trades</h3>
              <p>Simple systems made for real HVAC businesses, not bloated agency fluff.</p>
            </div>
          </div>
        </section>

        <section id="process" className="content-section">
          <div className="two-column-layout">
            <div>
              <span className="section-kicker section-kicker-green">How it works</span>
              <h2>A simple system that keeps leads from slipping away</h2>
              <p className="section-paragraph">
                Most HVAC companies do not need more software chaos. They need a clean process
                that responds fast and keeps every opportunity visible.
              </p>
            </div>

            <div className="stack-list">
              {steps.map((step, index) => (
                <div key={step} className="glass-panel step-card">
                  <div className="step-badge">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="content-section">
          <div className="two-column-layout">
            <div className="glass-panel gradient-panel">
              <span className="section-kicker">Why it matters</span>
              <h2>Every missed lead has a dollar value attached to it.</h2>
              <p>
                When a contractor misses calls after hours or forgets to follow up, that lead usually books somewhere else.
                Leadwrench is designed to help close that gap with fast response and clean tracking.
              </p>
            </div>

            <div className="glass-panel benefit-panel">
              <h3>What you can expect</h3>
              <ul className="benefit-list">
                <li>Faster first-response time for new leads</li>
                <li>A single place to manage conversations and pipeline stages</li>
                <li>More consistency in follow-up without extra admin work</li>
                <li>Clear monthly visibility into leads, bookings, and reviews</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section section-band">
          <div className="contact-layout">
            <div>
              <span className="section-kicker">Contact</span>
              <h2>Book a free demo</h2>
              <p className="section-paragraph">
                Want to see how Leadwrench could work for your HVAC company? Reach out and we’ll walk through your current lead flow and show you where opportunities may be slipping through.
              </p>
              <p className="section-paragraph">
                Phone: <a href="tel:4055555555" className="link-accent">(405) 555-5555</a>
                <br />
                Email: <a href="mailto:77195pittman@gmail.com" className="link-accent">77195pittman@gmail.com</a>
              </p>
            </div>

            <div className="glass-panel form-shell">
              <form
                action="https://formsubmit.co/77195pittman@gmail.com"
                method="POST"
                className="form-stack"
              >
                <input type="hidden" name="_subject" value="New Leadwrench demo request" />
                <input type="hidden" name="_next" value="https://leadwrench-site-s33v.vercel.app/#contact" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="field-group">
                  <label>Name</label>
                  <input name="name" placeholder="Your name" required />
                </div>

                <div className="field-group">
                  <label>Business name</label>
                  <input name="business_name" placeholder="ABC Heating & Air" required />
                </div>

                <div className="field-group">
                  <label>Phone or email</label>
                  <input name="contact" placeholder="you@example.com or (405) 555-5555" required />
                </div>

                <div className="field-group">
                  <label>What do you need help with?</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about missed calls, follow-up, reviews, or pipeline issues..."
                    required
                  />
                </div>

                <div className="consent-box">
                  <label className="consent-label">
                    <input type="checkbox" name="sms_consent" value="I consent to receive SMS messages from Leadwrench." />
                    <span>
                      I consent to receive SMS messages from Leadwrench about demo scheduling,
                      appointment reminders, lead follow-up, and support. Message frequency may vary.
                      Message and data rates may apply. Reply STOP to opt out and HELP for help.
                      Consent is not a condition of purchase.
                    </span>
                  </label>
                </div>

                <button type="submit" className="button button-primary button-full">
                  Request Demo
                </button>

                <p className="form-disclaimer">
                  By submitting this form, you agree to our{" "}
                  <a href="#privacy-policy" className="link-accent">Privacy Policy</a> and{" "}
                  <a href="#terms" className="link-accent">Terms of Service</a>.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section id="privacy-policy" className="content-section">
          <div className="glass-panel policy-panel">
            <span className="section-kicker">Privacy Policy</span>
            <h2>Privacy Policy</h2>
            <div className="policy-copy">
              <p>
                Leadwrench collects information you voluntarily provide through this website,
                including your name, business name, phone number, email address, and message details.
              </p>
              <p>
                We use this information to respond to inquiries, schedule demos, provide support,
                and improve our services.
              </p>
              <p>
                If you opt in to SMS, we may send text messages related to demo scheduling,
                appointment reminders, lead follow-up, and support. Message frequency may vary.
                Message and data rates may apply. Reply STOP to opt out or HELP for help.
              </p>
              <p>
                We may use cookies, analytics, and similar technologies to understand website usage
                and improve site performance.
              </p>
              <p>
                We take reasonable steps to protect the information submitted through this site.
              </p>
              <p>
                You may request to update or delete your information by contacting us at{" "}
                <a href="mailto:77195pittman@gmail.com" className="link-accent">77195pittman@gmail.com</a>.
              </p>
              <p className="policy-strong">
                Mobile opt-in information and consent are never shared with third parties or affiliates for marketing or promotional purposes.
              </p>
            </div>
          </div>
        </section>

        <section id="terms" className="content-section section-band">
          <div className="glass-panel policy-panel">
            <span className="section-kicker">Terms of Service</span>
            <h2>Terms of Service</h2>
            <div className="policy-copy">
              <p>
                By using this website or submitting a form, you agree to be contacted by Leadwrench regarding your inquiry,
                demo scheduling, support, and service-related communications.
              </p>
              <p>
                If you opt in to SMS, you agree to receive text messages from Leadwrench related to demo scheduling,
                appointment reminders, lead follow-up, and support. Message frequency may vary. Message and data rates may apply.
              </p>
              <p>
                You may opt out of SMS at any time by replying STOP. For help, reply HELP or contact{" "}
                <a href="mailto:77195pittman@gmail.com" className="link-accent">77195pittman@gmail.com</a>.
              </p>
              <p>Carriers are not liable for delayed or undelivered messages.</p>
              <p>This website and services are intended for users 18 years of age or older.</p>
              <p>
                Please review our <a href="#privacy-policy" className="link-accent">Privacy Policy</a> for details on how information is collected and used.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <div className="footer-inner-wrap">
          <div><strong>Leadwrench</strong> · HVAC lead follow-up systems</div>
          <div className="footer-links">
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
