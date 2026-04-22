import { Mail, Github } from 'lucide-react'

// ── CONTENT CONSTANTS ─────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'RESEARCH', href: '#research' },
  { label: 'PUBLICATIONS', href: '#publications' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
] as const

const SOCIAL_LINKS = [
  { icon: Mail, href: 'mailto:chiu.roh@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/chiwooroh', label: 'GitHub' },
]

const CARDS = [
  {
    title: 'GENERATIVE AI FOR MOBILITY',
    tag: 'CORE RESEARCH',
    label: 'RESEARCH FOCUS',
    value: 'LLM-DRIVEN TRAJECTORY SYNTHESIS',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
  },
  {
    title: 'PUBLICATION RECORD',
    tag: 'ACADEMIC OUTPUT',
    label: 'HIGHLIGHT',
    value: '4 JOURNALS · 19+ PROCEEDINGS',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
  },
  {
    title: 'FUNDED RESEARCH',
    tag: 'PROJECTS & IMPACT',
    label: 'SCALE',
    value: '$6M+ IN ACTIVE PROJECTS',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
  },
]

const JOURNALS = [
  {
    year: '2026',
    authors: 'Roh, C., & Won, M.',
    title: 'Synthesizing Human Mobility Patterns Using Large Language Models — A Sejong City Case Study',
    venue: 'Journal of Korean Society of Transportation, 45(2)',
  },
  {
    year: '2026',
    authors: 'You, J., Roh, C., Kim, J., Lee, E., & So, J.',
    title: 'A Methodological Framework for Driving Behavior Analysis Based on Real-World Trajectory Data',
    venue: 'International Journal of Highway Engineering, 28(1)',
  },
  {
    year: '2024',
    authors: 'Cho, S., Roh, C., You, S., & So, J.',
    title: 'Comparative Analysis of the 3D Object Detection Performance of LiDAR Sensors for Traffic Monitoring',
    venue: 'International Journal of Highway Engineering, 26(5), 143–150',
  },
  {
    year: '2024',
    authors: 'Kim, H., Kim, J., Lee, S., & Roh, C.',
    title: 'Analysis of Automation Level Characteristics of Autonomous Driving Simulation Research',
    venue: 'Journal of the Korean Society of ITS, 23(6), 366–381',
  },
]

const SELECTED_CONFERENCES = [
  {
    year: '2026',
    title: 'Contextual Modeling of Real-World Driving Behavior with LLMs and Realistic Reproduction in Traffic Simulation',
    venue: 'Transportation Research Board (TRB) 105th Annual Meeting, Washington DC',
    award: false,
  },
  {
    year: '2026',
    title: 'A Hybrid Framework for Traffic Crash Risk Analysis Using Crash Data and Microscopic Simulations',
    venue: 'Transportation Research Board (TRB) 105th Annual Meeting, Washington DC',
    award: false,
  },
  {
    year: '2025',
    title: 'A Hybrid Traffic Crash Risk Analysis Modeling of Crash Data-Driven Analysis and Microscopic Simulations',
    venue: 'IEEE 28th ITSC, Gold Coast, Australia',
    award: false,
  },
  {
    year: '2025',
    title: 'Clustering-Based Aggressive Driving Analysis and LLM-Driven Trajectory Generation',
    venue: 'Suwon ITS Asia-Pacific Forum',
    award: true,
  },
  {
    year: '2025',
    title: 'Personality on the Road: Driving Behavior Analysis and Trajectory Generation with LLMs',
    venue: 'Korean Society of Transportation Spring Conference, Seoul',
    award: true,
  },
  {
    year: '2025',
    title: 'Synthesizing Human Mobility Patterns Using Retrieval-Augmented LLMs: A Sejong City Case Study',
    venue: 'Korean Society of Transportation Fall Conference, Jeju',
    award: false,
  },
]

const PROJECTS = [
  {
    title: 'AI-Based Individual-Level Mobility Data Synthesizing for Privacy Protection',
    funder: 'Ministry of Land Infrastructure and Transport',
    duration: 'Apr. 2026 – Dec. 2028',
    funding: '$453K USD',
    role: 'Researcher — Korea Transport Institute',
  },
  {
    title: 'Measuring Congestion of Gathering Occasions Using Mobile Phone Location Data',
    funder: 'Ministry of Science and ICT / Korean National Police Agency',
    duration: 'Jul. 2023 – Dec. 2026',
    funding: '$812K USD',
    role: 'Researcher — Korea Transport Institute',
  },
  {
    title: 'Real-Time Open Mobility Service Platform and Industrial Ecosystem',
    funder: 'Ministry of Trade and Industry',
    duration: 'Jun. 2023 – Dec. 2027',
    funding: '$4.8M USD',
    role: 'Researcher — Korea Transport Institute',
  },
  {
    title: 'Hazardous Driving Indicators and Determination Algorithm Based on Big Data',
    funder: 'Hyundai Motor Company',
    duration: 'Jun. 2024 – Jun. 2025',
    funding: '$71K USD',
    role: 'Research Assistant — Ajou University',
  },
  {
    title: 'Validating Autonomous Driving Services in Perspective of Laws and Regulations',
    funder: 'Ministry of Science and ICT',
    duration: 'Jan. 2023 – Dec. 2024',
    funding: '$2.9M USD',
    role: 'Research Assistant — Ajou University',
  },
]

const VIDEOS = {
  hero: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4',
  about:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4',
  cta: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4',
}

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 12L12 2M12 2H4M12 2V10"
        stroke="#EFF4FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialIcon({
  icon: Icon,
  href,
  label,
}: {
  icon: typeof Mail
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
    >
      <Icon size={18} className="text-cream relative z-10" />
    </a>
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-background text-cream overflow-x-hidden">
      {/* Texture Overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none w-full h-full"
        style={{
          backgroundImage: 'url(/texture.png)',
          backgroundSize: 'cover',
          mixBlendMode: 'lighten',
          opacity: 0.6,
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative h-screen overflow-hidden rounded-b-[3rem]">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={VIDEOS.hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/50" />

        <div className="relative z-10 h-full flex flex-col max-w-content mx-auto px-6 lg:px-16">
          {/* Navbar */}
          <header className="flex items-center justify-between pt-8 gap-4">
            <span className="font-grotesk text-cream text-xl lg:text-2xl tracking-[0.2em] shrink-0">
              CHIWOO ROH
            </span>

            <nav className="liquid-glass hidden md:flex items-center gap-5 lg:gap-7 px-8 py-3.5 rounded-full">
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-grotesk text-cream/75 hover:text-cream text-sm tracking-[0.18em] transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </header>

          {/* Hero Heading */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <p className="font-condiment text-neon text-4xl sm:text-5xl mb-6 leading-none">
              AI & Mobility
            </p>

            <h1 className="font-grotesk text-cream leading-[0.9] tracking-tight">
              <span className="block text-[clamp(2.8rem,8.5vw,8rem)]">MODELING THE LOGIC</span>
              <span className="block text-[clamp(2.8rem,8.5vw,8rem)]">OF HUMAN MOTION.</span>
              <span className="block text-[clamp(2rem,6vw,6rem)] text-cream/60 mt-3">
                AI-DRIVEN INTELLIGENCE
              </span>
              <span className="block text-[clamp(2rem,6vw,6rem)] text-cream/60">
                FOR SMARTER TRANSPORT.
              </span>
            </h1>

            <div className="flex md:hidden items-center gap-3 mt-10">
              {SOCIAL_LINKS.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2: ABOUT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="about" className="relative min-h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={VIDEOS.about} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/55" />

        <div className="relative z-10 min-h-screen flex flex-col max-w-content mx-auto px-6 lg:px-16 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 flex-1">
            {/* Left */}
            <div className="lg:w-[48%]">
              <h2 className="font-grotesk text-cream leading-[0.9]">
                <span className="block text-[clamp(3.5rem,9vw,8rem)]">HELLO.</span>
                <span className="block text-[clamp(3.5rem,9vw,8rem)]">I'M CHIWOO.</span>
              </h2>
              <p className="font-condiment text-neon text-[clamp(3rem,6vw,5rem)] mt-4 leading-none">
                Researcher
              </p>
            </div>

            {/* Right */}
            <div className="lg:w-[44%] flex items-start lg:pt-8">
              <p className="font-mono text-cream/80 text-base sm:text-lg leading-relaxed uppercase tracking-wide">
                RESEARCHER AT KOREA TRANSPORT INSTITUTE.
                <br /><br />
                M.S. IN TRANSPORTATION ENGINEERING,
                <br />
                AJOU UNIVERSITY — ADVISOR: DR. JAEHYUN SO.
                <br /><br />
                APPLYING LARGE LANGUAGE MODELS AND
                GENERATIVE AI TO MODEL DRIVING BEHAVIOR,
                SYNTHESIZE HUMAN MOBILITY, AND ADVANCE
                THE INTELLIGENCE OF TRANSPORT SYSTEMS.
              </p>
            </div>
          </div>

          {/* Keyword cluster */}
          <div className="mt-auto pt-16 lg:pt-24">
            <p className="font-grotesk text-cream/[0.07] text-lg sm:text-2xl lg:text-3xl tracking-[0.15em] leading-loose select-none">
              LARGE LANGUAGE MODELS&nbsp;&nbsp;/&nbsp;&nbsp;DRIVING BEHAVIOR&nbsp;&nbsp;/&nbsp;&nbsp;
              HUMAN MOBILITY&nbsp;&nbsp;/&nbsp;&nbsp;TRAFFIC SIMULATION&nbsp;&nbsp;/&nbsp;&nbsp;
              GENERATIVE AI&nbsp;&nbsp;/&nbsp;&nbsp;AUTONOMOUS VEHICLES&nbsp;&nbsp;/&nbsp;&nbsp;
              CAUSAL MODELING&nbsp;&nbsp;/&nbsp;&nbsp;TRAJECTORY SYNTHESIS&nbsp;&nbsp;/&nbsp;&nbsp;
              TRAFFIC SAFETY&nbsp;&nbsp;/&nbsp;&nbsp;LiDAR&nbsp;&nbsp;/&nbsp;&nbsp;DEEP LEARNING
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3: FEATURED RESEARCH GRID
      ════════════════════════════════════════════════════════════════════ */}
      <section id="research" className="bg-background py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20">
            <div>
              <h2 className="font-grotesk text-cream leading-[0.85]">
                <span className="block text-[clamp(3rem,7vw,6rem)]">SELECTED</span>
                <span className="font-condiment text-neon text-[clamp(3.5rem,8vw,7rem)] leading-none block">
                  Research
                </span>
              </h2>
            </div>
            <div className="shrink-0">
              <a
                href="https://chiwooroh.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <span className="font-grotesk text-cream text-xl lg:text-2xl tracking-[0.15em]">
                  VIEW FULL CV
                </span>
                <div className="h-[2px] bg-neon mt-1 w-full transition-opacity group-hover:opacity-70" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="liquid-glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <video
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>

                  <div className="absolute top-4 left-4 liquid-glass rounded-full px-4 py-2 z-10">
                    <span className="font-grotesk text-cream/80 text-xs tracking-[0.2em]">
                      {card.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 liquid-glass w-10 h-10 rounded-full flex items-center justify-center z-10">
                    <ArrowIcon />
                  </div>
                </div>

                <div className="p-6 border-t border-white/5">
                  <h3 className="font-grotesk text-cream text-lg lg:text-xl leading-tight mb-4">
                    {card.title}
                  </h3>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-cream/45 text-xs tracking-[0.15em] uppercase">
                      {card.label}:
                    </span>
                    <span className="font-mono text-neon text-xs tracking-[0.12em] uppercase text-right">
                      {card.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4: PUBLICATIONS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="publications" className="bg-background py-24 lg:py-32 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-content mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <h2 className="font-grotesk text-cream leading-[0.85]">
              <span className="block text-[clamp(3rem,7vw,6rem)]">PUBLI</span>
              <span className="font-condiment text-neon text-[clamp(3.5rem,8vw,7rem)] leading-none block -mt-2">
                cations
              </span>
            </h2>
          </div>

          {/* Journals */}
          <div className="mb-16 lg:mb-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">
                Journals
              </span>
              <div className="flex-1 h-px bg-white/10" />
              <span className="font-grotesk text-neon text-sm tracking-widest">
                {JOURNALS.length}
              </span>
            </div>

            <div className="flex flex-col gap-0">
              {JOURNALS.map((pub, i) => (
                <div
                  key={i}
                  className="group flex flex-col sm:flex-row gap-4 sm:gap-8 py-8 border-b border-white/[0.06] hover:border-white/20 transition-colors"
                >
                  <span className="font-mono text-cream/30 text-sm tracking-widest shrink-0 pt-1">
                    {pub.year}
                  </span>
                  <div className="flex-1">
                    <p className="font-mono text-cream text-base lg:text-lg leading-snug mb-2">
                      {pub.title}
                    </p>
                    <p className="font-mono text-cream/45 text-sm lg:text-base">
                      {pub.authors}
                    </p>
                    <p className="font-mono text-neon/70 text-sm mt-1 tracking-wide">
                      {pub.venue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Conference Papers */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">
                Selected Conference Papers
              </span>
              <div className="flex-1 h-px bg-white/10" />
              <span className="font-grotesk text-neon text-sm tracking-widest">
                19+
              </span>
            </div>

            <div className="flex flex-col gap-0">
              {SELECTED_CONFERENCES.map((conf, i) => (
                <div
                  key={i}
                  className="group flex flex-col sm:flex-row gap-4 sm:gap-8 py-7 border-b border-white/[0.06] hover:border-white/20 transition-colors"
                >
                  <span className="font-mono text-cream/30 text-sm tracking-widest shrink-0 pt-1">
                    {conf.year}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <p className="font-mono text-cream text-base lg:text-lg leading-snug flex-1">
                        {conf.title}
                      </p>
                      {conf.award && (
                        <span className="liquid-glass shrink-0 rounded-full px-3 py-1 font-grotesk text-neon text-xs tracking-widest mt-0.5">
                          BEST PAPER
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-cream/45 text-sm lg:text-base mt-2">
                      {conf.venue}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-mono text-cream/25 text-sm mt-8 tracking-widest">
              + 13 ADDITIONAL CONFERENCE PAPERS — SEE FULL CV
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5: PROJECTS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="projects" className="bg-background py-24 lg:py-32 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-content mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20">
            <div>
              <h2 className="font-grotesk text-cream leading-[0.85]">
                <span className="block text-[clamp(3rem,7vw,6rem)]">FUNDED</span>
                <span className="font-condiment text-neon text-[clamp(3.5rem,8vw,7rem)] leading-none block -mt-2">
                  Projects
                </span>
              </h2>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-grotesk text-cream/40 text-sm tracking-[0.2em] uppercase mb-1">Total Funding</p>
              <p className="font-grotesk text-cream text-3xl lg:text-4xl tracking-wider">$9M+ USD</p>
            </div>
          </div>

          {/* Project list */}
          <div className="flex flex-col gap-0">
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-12 py-10 border-b border-white/[0.06] hover:border-white/20 transition-colors"
              >
                {/* Left */}
                <div>
                  <h3 className="font-grotesk text-cream text-xl lg:text-2xl leading-tight mb-4">
                    {proj.title}
                  </h3>
                  <p className="font-mono text-cream/50 text-sm lg:text-base mb-1">
                    {proj.funder}
                  </p>
                  <p className="font-mono text-cream/35 text-sm">
                    {proj.role}
                  </p>
                </div>

                {/* Right */}
                <div className="flex lg:flex-col items-start lg:items-end gap-6 lg:gap-3 lg:text-right">
                  <div>
                    <p className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase mb-1">Duration</p>
                    <p className="font-mono text-cream/70 text-sm lg:text-base">{proj.duration}</p>
                  </div>
                  <div>
                    <p className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase mb-1">Funding</p>
                    <p className="font-grotesk text-neon text-lg lg:text-xl">{proj.funding}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6: FINAL CTA / CONTACT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative bg-background">
        <div className="relative">
          <video autoPlay loop muted playsInline className="w-full h-auto block">
            <source src={VIDEOS.cta} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-background/40 pointer-events-none" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
            <p className="font-condiment text-neon text-4xl sm:text-5xl lg:text-6xl mb-6 leading-none">
              Let's connect
            </p>
            <h2 className="font-grotesk text-cream leading-[0.9]">
              <span className="block text-[clamp(2rem,5.5vw,5rem)]">FROM DRIVING DATA</span>
              <span className="block text-[clamp(2rem,5.5vw,5rem)]">TO INTELLIGENT SYSTEMS.</span>
              <span className="block text-[clamp(1.5rem,4vw,3.75rem)] text-cream/55 mt-3">
                READ THE WORK.
              </span>
              <span className="block text-[clamp(1.5rem,4vw,3.75rem)] text-cream/55">
                FOLLOW THE RESEARCH.
              </span>
            </h2>
          </div>

          {/* Social stack */}
          <div className="absolute bottom-8 left-6 lg:left-12 flex flex-col gap-3 z-10">
            {SOCIAL_LINKS.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
          </div>

          {/* Contact info */}
          <div className="absolute bottom-8 right-6 lg:right-12 text-right z-10">
            <p className="font-mono text-cream/50 text-sm tracking-widest uppercase">
              chiu.roh@gmail.com
            </p>
            <p className="font-mono text-cream/35 text-sm tracking-widest uppercase mt-1">
              Korea Transport Institute
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
