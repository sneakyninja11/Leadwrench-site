export default function App() {
  const services = [
    {
      title: "Missed Call Text Back",
      desc: "Instantly text back missed HVAC leads so they stop calling the next company on Google.",
      icon: "✦",
    },
    {
      title: "Lead Follow-Up Automation",
      desc: "Automated SMS and email follow-up sequences that keep prospects engaged until they book.",
      icon: "↺",
    },
    {
      title: "Pipeline & Tracking",
      desc: "A simple pipeline that shows every lead, every conversation, and every booked job in one place.",
      icon: "▣",
    },
    {
      title: "Review & Rebooking Systems",
      desc: "Automations that help contractors collect more reviews and turn one-time customers into repeat revenue.",
      icon: "★",
    },
  ];

  const steps = [
    "A lead calls your business after hours or during a busy period.",
    "Leadwrench instantly follows up with a text and keeps the conversation moving.",
    "The lead is tracked inside your pipeline so nothing slips through the cracks.",
    "Your team books more jobs without adding more manual admin work.",
  ];

  const results = [
    "Faster response times",
    "Fewer missed opportunities",
    "More booked estimates and jobs",
    "Clear monthly reporting",
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
            <a href="#results">Results</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="button button-light">Book a Demo</a>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-pill">Built for small HVAC companies</div>
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
              {results.map((item) => (
                <div key={item} className="mini-proof-card">{item}</div>
              ))}
            </div>
          </div>

          <div className="glass-panel hero-panel">
            <div className="status-row">
              <div>
                <div className="tiny-label">Sample Client Snapshot</div>
                <h3>ABC Heating & Air</h3>
              </div>
              <div className="status-pill">Live System</div>
            </div>

            <div className="timeline-card">
              <div className="timeline-row">
                <span>Missed call detected</span>
                <span className="accent-warm">1 min ago</span>
              </div>
              <p>Automatic text sent to lead.</p>
            </div>

            <div className="timeline-card timeline-card-highlight">
              <div className="tiny-label accent-cool">Lead reply</div>
              <p>“Yes, my AC stopped working. Can someone come tomorrow?”</p>
            </div>

            <div className="metric-grid">
              <div className="metric-card">
                <strong>42</strong>
                <span>Leads tracked</span>
              </div>
              <div className="metric-card">
                <strong>18</strong>
                <span>Booked jobs</span>
              </div>
              <div className="metric-card">
                <strong>9</strong>
                <span>New reviews</span>
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
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="content-section section-band">
          <div className="two-column-layout">
            <div>
              <span className="section-kicker section-kicker-green">Process</span>
              <h2>A clean system that keeps leads from slipping away</h2>
              <p>
                Most HVAC companies do not need more software chaos. They need a faster response
                process, cleaner visibility, and a workflow that feels easy to run.
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
              <p>
                Want to see how Leadwrench could work for your HVAC company? Reach out and we’ll walk through your current lead flow and show you where opportunities may be slipping through.
              </p>
            </div>

            <div className="glass-panel form-shell">
              <form
                action="https://formsubmit.co/77195pittman@gmail.com"
                method="POST"
                className="form-stack"
              >
                <input type="hidden" name="_subject" value="New Leadwrench demo request" />
                <input type="hidden" name="_next" value="https://leadwrench-site-s33v.vercel.app/" />
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

                <button type="submit" className="button button-primary button-full">
                  Request Demo
                </button>

                <p className="form-disclaimer">
                  By submitting this form, you agree to be contacted by Leadwrench about your request.
                  Message and data rates may apply for SMS. Reply STOP to opt out.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <div className="footer-inner-wrap">
          <div><strong>Leadwrench</strong> · HVAC lead follow-up systems</div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
