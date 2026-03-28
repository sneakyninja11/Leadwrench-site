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
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <div>
              <div className="text-2xl font-black tracking-tight">Leadwrench</div>
              <div className="text-xs text-slate-300">HVAC lead follow-up systems</div>
            </div>

            <div className="hidden gap-6 text-sm text-slate-200 md:flex">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#how-it-works" className="hover:text-white">How it works</a>
              <a href="#social-proof" className="hover:text-white">Proof</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <a
                href="tel:4055555555"
                className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
              >
                (405) 555-5555
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:scale-[1.02]"
              >
                Book a Demo
              </a>
            </div>

            <a
              href="#contact"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:scale-[1.02] md:hidden"
            >
              Demo
            </a>
          </nav>

          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                Built for small HVAC companies
              </div>

              <div className="mb-5 max-w-max rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Locally owned and operated in Norman, Oklahoma
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Stop losing HVAC leads to missed calls and slow follow-up.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Leadwrench helps HVAC contractors capture more jobs with missed-call text back,
                automated follow-up, pipeline tracking, and simple reporting through GoHighLevel.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Get a Free Demo
                </a>

                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  See What We Set Up
                </a>
              </div>

              <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-4">
                {honestProof.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-900 p-5 ring-1 ring-white/10">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">What your system can look like</p>
                    <h3 className="text-xl font-bold">HVAC Lead Flow</h3>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-medium text-emerald-300">
                    Sample System
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Missed call detected</span>
                      <span className="text-amber-300">1 min ago</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">
                      Automatic text sent to lead right away.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <div className="text-sm font-medium text-cyan-200">Lead reply</div>
                    <p className="mt-2 text-sm text-slate-100">
                      “Yes, my AC stopped working. Can someone come tomorrow?”
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4 text-center">
                      <div className="text-lg font-black">Fast</div>
                      <div className="text-xs text-slate-400">response</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4 text-center">
                      <div className="text-lg font-black">Clean</div>
                      <div className="text-xs text-slate-400">pipeline</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4 text-center">
                      <div className="text-lg font-black">More</div>
                      <div className="text-xs text-slate-400">booked jobs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            What Leadwrench sets up for HVAC companies
          </h2>
          <p className="mt-4 text-slate-300">
            We build practical systems that help small contractors respond faster,
            stay organized, and book more work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="social-proof" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Social Proof
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Trusted by HVAC contractors across the Oklahoma City metro area
            </h2>
            <p className="mt-4 text-slate-300">
              We’re currently building out our first case studies and testimonials.
              Once our first client is live, this section will show real results and real feedback.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-6">
              <div className="text-sm font-semibold text-cyan-300">Local Focus</div>
              <p className="mt-3 text-slate-300">
                Serving Norman, Oklahoma City, Moore, Edmond, and nearby HVAC businesses.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-6">
              <div className="text-sm font-semibold text-cyan-300">Fast Setup</div>
              <p className="mt-3 text-slate-300">
                Lead capture, follow-up, and pipeline systems can be set up quickly and clearly.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-6">
              <div className="text-sm font-semibold text-cyan-300">Built for Trades</div>
              <p className="mt-3 text-slate-300">
                Simple systems made for real HVAC businesses, not bloated agency fluff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/10 bg-slate-950/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              A simple system that keeps leads from slipping away
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Most HVAC companies do not need more software chaos. They need a clean process
              that responds fast and keeps every opportunity visible.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950">
                  {index + 1}
                </div>
                <p className="pt-1 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Why it matters
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Every missed lead has a dollar value attached to it.
            </h2>
            <p className="mt-4 text-slate-300">
              When a contractor misses calls after hours or forgets to follow up,
              that lead usually books somewhere else. Leadwrench is designed to help fix that gap
              with fast response and clean tracking.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">What you can expect</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                Faster first-response time for new leads
              </li>
              <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                A single place to manage conversations and pipeline stages
              </li>
              <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                More consistency in follow-up without adding admin work
              </li>
              <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                Clearer monthly visibility into leads, bookings, and reviews
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Book a free demo</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Want to see how Leadwrench could work for your HVAC company?
              Reach out and we’ll walk through your current lead flow and show you where
              opportunities may be slipping through.
            </p>

            <div className="mt-8 space-y-3 text-slate-300">
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a href="tel:4055555555" className="text-cyan-300 hover:text-cyan-200">
                  (405) 555-5555
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href="mailto:77195pittman@gmail.com"
                  className="text-cyan-300 hover:text-cyan-200"
                >
                  77195pittman@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20">
            <form
              action="https://formsubmit.co/77195pittman@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New Leadwrench demo request" />
              <input
                type="hidden"
                name="_next"
                value="https://leadwrench-site-s33v.vercel.app/#contact"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input
                  name="name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Business name</label>
                <input
                  name="business_name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
                  placeholder="ABC Heating & Air"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Phone or email</label>
                <input
                  name="contact"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
                  placeholder="you@example.com or (405) 555-5555"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  What do you need help with?
                </label>
                <textarea
                  name="message"
                  className="min-h-[120px] w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                  placeholder="Tell us about missed calls, follow-up, reviews, or pipeline issues..."
                  required
                />
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                  <input
                    type="checkbox"
                    name="sms_consent"
                    value="I consent to receive SMS messages from Leadwrench."
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950"
                  />
                  <span>
                    I consent to receive SMS messages from Leadwrench about demo scheduling,
                    appointment reminders, lead follow-up, and support. Message frequency may vary.
                    Message and data rates may apply. Reply STOP to opt out and HELP for help.
                    Consent is not a condition of purchase.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Request Demo
              </button>

              <p className="text-xs leading-6 text-slate-400">
                By submitting this form, you agree to our{" "}
                <a href="#privacy-policy" className="text-cyan-300 hover:text-cyan-200">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#terms" className="text-cyan-300 hover:text-cyan-200">
                  Terms of Service
                </a>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="privacy-policy" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Privacy Policy
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Privacy Policy</h2>

          <div className="mt-6 space-y-4 text-slate-300">
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
              <a
                href="mailto:77195pittman@gmail.com"
                className="text-cyan-300 hover:text-cyan-200"
              >
                77195pittman@gmail.com
              </a>.
            </p>
            <p className="font-semibold text-white">
              Mobile opt-in information and consent are never shared with third parties or affiliates
              for marketing or promotional purposes.
            </p>
          </div>
        </div>
      </section>

      <section id="terms" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Terms of Service
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Terms of Service</h2>

            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                By using this website or submitting a form, you agree to be contacted by Leadwrench
                regarding your inquiry, demo scheduling, support, and service-related communications.
              </p>
              <p>
                If you opt in to SMS, you agree to receive text messages from Leadwrench related to
                demo scheduling, appointment reminders, lead follow-up, and support.
                Message frequency may vary. Message and data rates may apply.
              </p>
              <p>
                You may opt out of SMS at any time by replying STOP. For help, reply HELP or contact{" "}
                <a
                  href="mailto:77195pittman@gmail.com"
                  className="text-cyan-300 hover:text-cyan-200"
                >
                  77195pittman@gmail.com
                </a>.
              </p>
              <p>Carriers are not liable for delayed or undelivered messages.</p>
              <p>This website and services are intended for users 18 years of age or older.</p>
              <p>
                Please review our{" "}
                <a href="#privacy-policy" className="text-cyan-300 hover:text-cyan-200">
                  Privacy Policy
                </a>{" "}
                for details on how information is collected and used.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-white">Leadwrench</span> · HVAC lead follow-up systems
          </div>
          <div className="flex gap-4">
            <a href="#privacy-policy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
