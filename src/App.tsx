import { Mail, Github } from 'lucide-react'

// ── CONTENT CONSTANTS ─────────────────────────────────────────────────────────

const NAV_ITEMS = ['HOME', 'ABOUT', 'RESEARCH', 'PUBLICATIONS', 'CONTACT'] as const

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

const VIDEOS = {
  hero: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4',
  about:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4',
  cta: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4',
}

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
      className="liquid-glass w-11 h-11 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
    >
      <Icon size={16} className="text-cream relative z-10" />
    </a>
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-background text-cream overflow-x-hidden">
      {/* Texture Overlay — place /texture.png in /public to activate */}
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
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEOS.hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col max-w-content mx-auto px-6 lg:px-16">
          {/* ── Navbar ───────────────────────────────────────────────────── */}
          <header className="flex items-center justify-between pt-8 gap-4">
            {/* Logo / Name */}
            <span className="font-grotesk text-cream text-lg tracking-[0.2em] shrink-0">
              CHIWOO ROH
            </span>

            {/* Center Nav — hidden on mobile */}
            <nav className="liquid-glass hidden md:flex items-center gap-5 px-8 py-3 rounded-full">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-grotesk text-cream/75 hover:text-cream text-xs tracking-[0.2em] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Social Icons — desktop */}
            <div className="hidden md:flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </header>

          {/* ── Hero Heading ─────────────────────────────────────────────── */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            {/* Accent cursive */}
            <p className="font-condiment text-neon text-3xl sm:text-4xl mb-6 leading-none">
              AI & Mobility
            </p>

            <h1 className="font-grotesk text-cream leading-[0.9] tracking-tight">
              <span className="block text-[clamp(2.5rem,8vw,7.5rem)]">MODELING THE LOGIC</span>
              <span className="block text-[clamp(2.5rem,8vw,7.5rem)]">OF HUMAN MOTION.</span>
              <span className="block text-[clamp(1.8rem,5.5vw,5.5rem)] text-cream/60 mt-3">
                AI-DRIVEN INTELLIGENCE
              </span>
              <span className="block text-[clamp(1.8rem,5.5vw,5.5rem)] text-cream/60">
                FOR SMARTER TRANSPORT.
              </span>
            </h1>

            {/* Mobile social */}
            <div className="flex md:hidden items-center gap-3 mt-10">
              {SOCIAL_LINKS.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2: ABOUT / INTRO
      ════════════════════════════════════════════════════════════════════ */}
      <section id="about" className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEOS.about} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/55" />

        <div className="relative z-10 min-h-screen flex flex-col max-w-content mx-auto px-6 lg:px-16 py-24 lg:py-32">
          {/* ── Top Row ──────────────────────────────────────────────────── */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 flex-1">
            {/* Left: Heading + accent */}
            <div className="lg:w-[48%]">
              <h2 className="font-grotesk text-cream leading-[0.9]">
                <span className="block text-[clamp(3rem,8vw,7rem)]">HELLO.</span>
                <span className="block text-[clamp(3rem,8vw,7rem)]">I'M CHIWOO.</span>
              </h2>
              <p className="font-condiment text-neon text-[clamp(2.5rem,5vw,4rem)] mt-4 leading-none">
                Researcher
              </p>
            </div>

            {/* Right: Research statement */}
            <div className="lg:w-[44%] flex items-start lg:pt-6">
              <p className="font-mono text-cream/75 text-sm sm:text-base leading-relaxed uppercase tracking-wide">
                RESEARCHER AT KOREA TRANSPORT INSTITUTE.
                <br />
                <br />
                M.S. IN TRANSPORTATION ENGINEERING,
                <br />
                AJOU UNIVERSITY — ADVISOR: DR. JAEHYUN SO.
                <br />
                <br />
                APPLYING LARGE LANGUAGE MODELS AND
                GENERATIVE AI TO MODEL DRIVING BEHAVIOR,
                SYNTHESIZE HUMAN MOBILITY, AND ADVANCE
                THE INTELLIGENCE OF TRANSPORT SYSTEMS.
              </p>
            </div>
          </div>

          {/* ── Bottom: Keyword cluster ───────────────────────────────────── */}
          <div className="mt-auto pt-16 lg:pt-24">
            <p
              className="font-grotesk text-cream/[0.07] text-base sm:text-xl lg:text-2xl tracking-[0.15em] leading-loose select-none"
            >
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
          SECTION 3: FEATURED WORK GRID
      ════════════════════════════════════════════════════════════════════ */}
      <section id="research" className="bg-background py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-content mx-auto">
          {/* ── Section Header ───────────────────────────────────────────── */}
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
                <span className="font-grotesk text-cream text-lg lg:text-2xl tracking-[0.15em]">
                  VIEW FULL CV
                </span>
                <div className="h-[2px] bg-neon mt-1 w-full transition-opacity group-hover:opacity-70" />
              </a>
            </div>
          </div>

          {/* ── Grid ─────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="liquid-glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Square video */}
                <div className="relative aspect-square overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>

                  {/* Tag pill */}
                  <div className="absolute top-4 left-4 liquid-glass rounded-full px-3 py-1.5 z-10">
                    <span className="font-grotesk text-cream/80 text-[10px] tracking-[0.2em]">
                      {card.tag}
                    </span>
                  </div>

                  {/* Arrow button */}
                  <div className="absolute top-4 right-4 liquid-glass w-9 h-9 rounded-full flex items-center justify-center z-10">
                    <ArrowIcon />
                  </div>
                </div>

                {/* Info bar */}
                <div className="p-5 border-t border-white/5">
                  <h3 className="font-grotesk text-cream text-base lg:text-lg leading-tight mb-3">
                    {card.title}
                  </h3>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-cream/40 text-[10px] tracking-[0.15em] uppercase">
                      {card.label}:
                    </span>
                    <span className="font-mono text-neon text-[10px] tracking-[0.12em] uppercase text-right">
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
          SECTION 4: FINAL CTA / CONTACT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative bg-background">
        <div className="relative">
          {/* Video — native aspect, no object-cover */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          >
            <source src={VIDEOS.cta} type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-background/40 pointer-events-none" />

          {/* ── Text Overlay ─────────────────────────────────────────────── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
            <p className="font-condiment text-neon text-3xl sm:text-4xl lg:text-5xl mb-6 leading-none">
              Let's connect
            </p>
            <h2 className="font-grotesk text-cream leading-[0.9]">
              <span className="block text-[clamp(2rem,5.5vw,5rem)]">FROM DRIVING DATA</span>
              <span className="block text-[clamp(2rem,5.5vw,5rem)]">TO INTELLIGENT SYSTEMS.</span>
              <span className="block text-[clamp(1.5rem,4vw,3.75rem)] text-cream/55 mt-2">
                READ THE WORK.
              </span>
              <span className="block text-[clamp(1.5rem,4vw,3.75rem)] text-cream/55">
                FOLLOW THE RESEARCH.
              </span>
            </h2>
          </div>

          {/* ── Bottom-left social stack ──────────────────────────────────── */}
          <div className="absolute bottom-8 left-6 lg:left-12 flex flex-col gap-3 z-10">
            {SOCIAL_LINKS.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
          </div>

          {/* ── Bottom-right contact info ─────────────────────────────────── */}
          <div className="absolute bottom-8 right-6 lg:right-12 text-right z-10">
            <p className="font-mono text-cream/40 text-xs tracking-widest uppercase">
              chiu.roh@gmail.com
            </p>
            <p className="font-mono text-cream/40 text-xs tracking-widest uppercase mt-1">
              Korea Transport Institute
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
