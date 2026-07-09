import Image from "next/image";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  "Training Runs",
  "Running Gear",
  "Coaching & Training Programs",
  "Injury Prevention",
  "Mentorship",
  "Race Entry for Goal Races",
  "Community",
  "Stronger Together",
];

const leadership = [
  { name: "Dan McConnell", title: "President" },
  { name: "Vicky Sullivan", title: "Community Outreach" },
  { name: "Kyle McConnell", title: "Treasurer" },
  { name: "Betsy McConnell", title: "Treasurer" },
  { name: "Vic Agular", title: "Member-at-Large" },
];

const donationAmounts = ["$50", "$100", "$150", "$400", "Custom Donation"];

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Rise to Run homepage">
            <Image
              src="/rise-to-run-logo.png"
              alt="Rise to Run logo"
              width={180}
              height={70}
              className="h-[70px] w-auto object-contain"
              priority
            />
            <span className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-xl">
              Rise to Run
            </span>
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-4 text-sm font-medium text-slate-700 md:flex lg:gap-6">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-emerald-700">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#donate"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Donate
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            Equity in movement
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Removing Barriers. Creating Opportunity.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Helping remove barriers to running by connecting individuals with gear,
            coaching, mentorship, community, and race opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSemERtfz0VDwLvZO0lFYOW8tm-5Lazsmmoirfc9x1fINkdm4g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Apply
            </a>
            <a
              href="#volunteer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Volunteer
            </a>
            <a
              href="#donate"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Donate
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-6 shadow-sm">
          <div className="flex h-full min-h-[420px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4">
            <Image
              src="/milk-run.png"
              alt="Rise to Run community running image"
              width={800}
              height={700}
              className="h-full w-full rounded-[1.4rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-14">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl lg:text-5xl">
              More Than Running
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                At Rise to Run, we believe no one should have to face life&apos;s challenges alone. Through a supportive running community,
                we strive to create a place where individuals can build confidence, develop meaningful connections, and discover the
                positive impact that movement can have on their lives.
              </p>
              <p>
                Whether someone is navigating personal obstacles, mental health challenges, recovery from addiction, financial barriers,
                or simply looking for encouragement and belonging, Rise to Run is committed to fostering an environment where everyone
                is welcomed, supported, and empowered to move forward—one step at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Our mission</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              A welcoming path to running for all ages and abilities.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-600">
            <p>
              Rise to Run exists to help young people and families access the tools,
              confidence, and support needed to participate in running with dignity and joy.
            </p>
            <p>
              We focus on removing practical barriers such as equipment, coaching, entry
              fees, and transportation so more people can experience the benefits of movement.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] sm:p-10 lg:p-14">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Apply for Support</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl lg:text-5xl">
              Running should be for everyone.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Rise to Run helps remove barriers to running by connecting individuals with running gear, proper shoe fitting,
              coaching, mentorship, training opportunities, race entries, and a supportive community.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              If you or someone you know could benefit from these resources, we&apos;d love to hear your story.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: "👟",
                title: "Running Shoes & Gear",
                text: "Receive access to quality running shoes and essential gear when available.",
              },
              {
                icon: "🏃",
                title: "Coaching & Training",
                text: "Personalized training guidance for runners of all experience levels.",
              },
              {
                icon: "🤝",
                title: "Mentorship",
                text: "Connect with experienced runners for encouragement and support.",
              },
              {
                icon: "🏅",
                title: "Race Opportunities",
                text: "Assistance with race registrations for goal races.",
              },
              {
                icon: "❤️",
                title: "Community",
                text: "Become part of an encouraging and inclusive running community.",
              },
              {
                icon: "📈",
                title: "Growth",
                text: "Build confidence, improve your health, and reach your goals.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-950">Who should apply?</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <li>• New runners</li>
              <li>• Youth runners</li>
              <li>• Individuals facing financial barriers</li>
              <li>• Anyone looking for support, mentorship, or access to running opportunities</li>
            </ul>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSemERtfz0VDwLvZO0lFYOW8tm-5Lazsmmoirfc9x1fINkdm4g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-emerald-600 px-6 py-4 text-center text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 sm:w-auto sm:min-w-[280px]"
            >
              Apply for Support
            </a>
          </div>
        </div>
      </section>

      <section id="sponsors" className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Community Partners</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Working together to remove barriers and create opportunity.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
              <Image
                src="/rise-physical-therapy2.png"
                alt="Rise Physical Therapy"
                width={320}
                height={140}
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
              <Image
                src="/delaware-running-company.png"
                alt="Delaware Running Company"
                width={320}
                height={140}
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
            <h3 className="text-2xl font-semibold text-slate-950">Interested in partnering with Rise to Run?</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We&apos;re looking for businesses and organizations that believe everyone deserves the opportunity to run.
              Your support helps provide shoes, race entries, coaching, mentorship, and running gear.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>

      <section id="volunteer" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Leadership</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Board leadership guiding the work.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {leadership.map((person) => (
              <div key={person.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{person.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Donate</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Every dollar helps.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              A gift of $150 provides shoes, fitting, and a race entry for one kid.
            </p>
            <p className="mt-2 text-lg leading-8 text-slate-300">
              A donation of $400 provides shoes, fitting, race entries, and training support for an entire family.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {donationAmounts.map((amount) => (
              <a
                key={amount}
                href="#contact"
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  amount === "$150"
                    ? "bg-emerald-500 text-white hover:bg-emerald-400"
                    : "bg-white/10 text-slate-100 hover:bg-white/20"
                }`}
              >
                {amount}
              </a>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Payment options</p>
            <p className="mt-3 text-lg text-slate-200">
              Reserve space for Zeffy, Stripe, or PayPal.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-slate-900">Rise to Run</p>
            <p className="mt-2 max-w-xl">Removing barriers. Creating opportunity.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#home" className="transition hover:text-emerald-700">Home</a>
            <a href="#about" className="transition hover:text-emerald-700">About</a>
            <a href="#programs" className="transition hover:text-emerald-700">Programs</a>
            <a href="#donate" className="transition hover:text-emerald-700">Donate</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
