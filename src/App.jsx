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
  ]

  const steps = [
    "A lead calls your business after hours or during a busy period.",
    "Leadwrench instantly follows up with a text and keeps the conversation moving.",
    "The lead is tracked inside your pipeline so nothing slips through the cracks.",
    "Your team books more jobs without adding more manual admin work.",
  ]

  const results = [
    "Faster response times",
    "Fewer missed opportunities",
    "More booked estimates and jobs",
    "Clear reporting you can actually understand",
  ]

  return (
    <div className="site">
      <section className="hero">
        <nav className="nav">
          <div>
            <div className="brand">Leadwrench</div>
            <div className="brand-sub">HVAC lead follow-up systems</div>
          </div>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
            <a href="#results">Results</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="btn btn-light">Book a Demo</a>
        </nav>

        <div className="hero-grid">
          <div>
            <div className="badge">Built for small HVAC companies</div>
            <h1>Stop losing HVAC leads to missed calls and slow follow-up.</h1>
            <p className="hero-text">
              Leadwrench helps HVAC contractors capture more jobs with missed-call text back,
              automated follow-up, pipeline tracking, and simple reporting.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Get a Free Demo</a>
              <a href="#services" className="btn btn-secondary">See What We Set Up</a>
            </div>

            <div className="results-grid">
              {results.map((item) => (
                <div key={item} className="result-chip">{item}</div>
              ))}
            </div>
          </div>

          <div className="preview-card">
            <div className="preview-inner">
              <div className="preview-head">
                <div>
                  <p className="muted">Sample Client Snapshot</p>
                  <h3>ABC Heating & Air</h3>
                </div>
                <div className="live-pill">Live System</div>
              </div>

              <div className="preview-box">
                <div className="row-between">
                  <span>Missed call detected</span>
                  <span className="time">1 min ago</span>
                </div>
                <p className="muted">Automatic text sent to lead.</p>
              </div>

              <div className="preview-box preview-highlight">
                <div className="highlight-title">Lead reply</div>
                <p>“Yes, my AC stopped working. Can someone come tomorrow?”</p>
              </div>

              <div className="stat-grid">
                <div className="stat-box">
                  <div className="stat-number">42</div>
                  <div className="stat-label">Leads tracked</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">18</div>
                  <div className="stat-label">Booked jobs</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">9</div>
                  <div className="stat-label">New reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-intro">
          <p className="section-label">Services</p>
          <h2>What Leadwrench sets up for HVAC companies</h2>
          <p>
            We build practical systems that help small contractors respond faster,
            stay organized, and book more work.
          </p>
        </div>

        <div className="card-grid four">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="section section-alt">
        <div className="two-col">
          <div>
            <p className="section-label green">How it works</p>
            <h2>A simple system that keeps leads from slipping away</h2>
            <p>
              Most HVAC companies do not need more software chaos. They need a clean process
              that responds fast and keeps every opportunity visible.
            </p>
          </div>

          <div className="step-list">
            {steps.map((step, index) => (
              <div key={step} className="step-card">
                <div className="step-number">{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="section">
        <div className="two-col">
          <div className="card card-gradient">
            <p className="section-label">Why it matters</p>
            <h2>Every missed lead has a dollar value attached to it.</h2>
            <p>
              When a contractor misses calls after hours or forgets to follow up,
              that lead usually books somewhere else. Leadwrench is designed to help
              fix that gap with fast response and clean tracking.
            </p>
          </div>

          <div className="card">
            <h3>What you can expect</h3>
            <ul className="benefit-list">
              <li>Faster first-response time for new leads</li>
              <li>A single place to manage conversations and pipeline stages</li>
              <li>More consistency in follow-up without adding admin work</li>
              <li>Clearer monthly visibility into leads, bookings, and reviews</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="two-col contact-grid">
          <div>
            <p className="section-label">Contact</p>
            <h2>Book a free demo</h2>
            <p>
              Want to see how Leadwrench could work for your HVAC company? Reach out and
              we’ll walk through your current lead flow and show you where opportunities
              may be slipping through.
            </p>
          </div>

          <div className="card form-card">
            <div className="form-group">
              <label>Name</label>
              <input placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Business name</label>
              <input placeholder="ABC Heating & Air" />
            </div>

            <div className="form-group">
              <label>Phone or email</label>
              <input placeholder="you@example.com" />
            </div>

            <div className="form-group">
              <label>What do you need help with?</label>
              <textarea placeholder="Tell us about missed calls, follow-up, reviews, or pipeline issues..." />
            </div>

            <button className="btn btn-primary full">Request Demo</button>

            <p className="form-note">
              By submitting this form, you agree to be contacted by Leadwrench about your request.
              Message and data rates may apply for SMS. Reply STOP to opt out.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div><strong>Leadwrench</strong> · HVAC lead follow-up systems</div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
