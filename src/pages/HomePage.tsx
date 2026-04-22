import { Mail, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CARDS, VIDEOS } from '../constants'

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

function ArrowDiagIcon() {
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

function SocialIcon({ icon: Icon, href, label }: { icon: typeof Mail; href: string; label: string }) {
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

export default function HomePage() {
  return (
    <div className="bg-background text-cream overflow-x-hidden">

      {/* ════════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ════════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative h-screen overflow-hidden rounded-b-[3rem]">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={VIDEOS.hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/50" />

        <div className="relative z-10 h-full flex flex-col max-w-content mx-auto px-6 lg:px-16">
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

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2: ABOUT
      ════════════════════════════════════════════════════════════════ */}
      <section id="about" className="relative min-h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={VIDEOS.about} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/55" />

        <div className="relative z-10 min-h-screen flex flex-col max-w-content mx-auto px-6 lg:px-16 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 flex-1">
            <div className="lg:w-[48%]">
              <h2 className="font-grotesk text-cream leading-[0.9]">
                <span className="block text-[clamp(3.5rem,9vw,8rem)]">HELLO.</span>
                <span className="block text-[clamp(3.5rem,9vw,8rem)]">I'M CHIWOO.</span>
              </h2>
              <p className="font-condiment text-neon text-[clamp(3rem,6vw,5rem)] mt-4 leading-none">
                Researcher
              </p>
            </div>

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

          <div className="mt-auto pt-16 lg:pt-24">
            <p className="font-grotesk text-cream/[0.07] text-lg sm:text-2xl lg:text-3xl tracking-[0.15em] leading-loose select-none">
              LARGE LANGUAGE MODELS&nbsp;&nbsp;/&nbsp;&nbsp;DRIVING BEHAVIOR&nbsp;&nbsp;/&nbsp;&nbsp;
              HUMAN MOBILITY&nbsp;&nbsp;/&nbsp;&nbsp;TRAFFIC SIMULATION&nbsp;&nbsp;/&nbsp;&nbsp;
              GENERATIVE AI&nbsp;&nbsp;/&nbsp;&nbsp;AUTONOMOUS VEHICLES&nbsp;&nbsp;/&nbsp;&nbsp;
              TRAJECTORY SYNTHESIS&nbsp;&nbsp;/&nbsp;&nbsp;TRAFFIC SAFETY&nbsp;&nbsp;/&nbsp;&nbsp;DEEP LEARNING
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3: FEATURED CARDS — click → detail pages
      ════════════════════════════════════════════════════════════════ */}
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
                href="/Chiwoo_Roh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <span className="font-grotesk text-cream text-xl lg:text-2xl tracking-[0.15em]">
                  DOWNLOAD CV
                </span>
                <div className="h-[2px] bg-neon mt-1 w-full transition-opacity group-hover:opacity-70" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CARDS.map((card) => (
              <Link
                key={card.title}
                to={card.href}
                className="liquid-glass rounded-2xl overflow-hidden group block"
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

                  <div className="absolute top-4 right-4 liquid-glass w-10 h-10 rounded-full flex items-center justify-center z-10 group-hover:bg-white/20 transition-colors">
                    <ArrowDiagIcon />
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
              </Link>
            ))}
          </div>

          <p className="font-mono text-cream/30 text-sm text-center mt-8 tracking-widest">
            CLICK ANY CARD TO EXPLORE FULL DETAILS →
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4: AWARDS STRIP
      ════════════════════════════════════════════════════════════════ */}
      <section id="publications" className="bg-background py-16 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { label: 'BEST PAPER', value: '×2', desc: 'ITS Asia-Pacific & Korean Society of Transportation, 2025' },
              { label: 'PUBLICATIONS', value: '23+', desc: '4 Journals · 19 Conference Papers · 4 Under Review' },
              { label: 'TOTAL FUNDING', value: '$9M+', desc: '8 funded projects across government & industry' },
            ].map((stat) => (
              <div key={stat.label} className="liquid-glass rounded-2xl p-8 text-center">
                <p className="font-mono text-cream/40 text-sm tracking-[0.3em] uppercase mb-3">{stat.label}</p>
                <p className="font-grotesk text-cream text-5xl lg:text-6xl mb-3">{stat.value}</p>
                <p className="font-mono text-cream/50 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5: PROJECTS TEASER
      ════════════════════════════════════════════════════════════════ */}
      <section id="projects" className="bg-background py-24 lg:py-32 px-6 lg:px-16 border-t border-white/5">
        <div className="max-w-content mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <h2 className="font-grotesk text-cream leading-[0.85]">
              <span className="block text-[clamp(3rem,7vw,6rem)]">FUNDED</span>
              <span className="font-condiment text-neon text-[clamp(3.5rem,8vw,7rem)] leading-none block -mt-2">
                Projects
              </span>
            </h2>
            <p className="font-mono text-cream/60 text-base lg:text-lg mt-6 max-w-xl leading-relaxed">
              8 RESEARCH PROJECTS ACROSS GOVERNMENT MINISTRIES AND INDUSTRY PARTNERS.
              TOTAL FUNDING EXCEEDING $9M USD OVER THE PAST THREE YEARS.
            </p>
          </div>
          <Link
            to="/projects"
            className="liquid-glass shrink-0 inline-flex items-center gap-4 px-8 py-5 rounded-2xl group hover:bg-white/5 transition-colors"
          >
            <span className="font-grotesk text-cream text-lg tracking-[0.2em]">VIEW ALL PROJECTS</span>
            <ArrowDiagIcon />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6: FINAL CTA
      ════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative bg-background">
        <div className="relative">
          <video autoPlay loop muted playsInline className="w-full h-auto block">
            <source src={VIDEOS.cta} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/40 pointer-events-none" />

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

          <div className="absolute bottom-8 left-6 lg:left-12 flex flex-col gap-3 z-10">
            {SOCIAL_LINKS.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
          </div>

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
