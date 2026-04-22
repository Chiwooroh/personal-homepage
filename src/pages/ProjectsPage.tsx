import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../constants'

const TOTAL_ACTIVE = PROJECTS.filter((p) => p.active).length

export default function ProjectsPage() {
  const activeProjects = PROJECTS.filter((p) => p.active)
  const pastProjects = PROJECTS.filter((p) => !p.active)

  return (
    <div className="bg-background text-cream min-h-screen overflow-x-hidden">

      {/* ── Sticky Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 liquid-glass border-b border-white/5">
        <div className="max-w-content mx-auto px-6 lg:px-16 h-16 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 font-grotesk text-cream/70 hover:text-cream text-sm tracking-[0.2em] transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            CHIWOO ROH
          </Link>

          <a
            href="/Chiwoo_Roh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-grotesk text-neon text-sm tracking-[0.2em] hover:opacity-70 transition-opacity"
          >
            DOWNLOAD CV ↓
          </a>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 pt-20 pb-16 lg:pt-28 lg:pb-24 max-w-content mx-auto">
        <p className="font-condiment text-neon text-4xl sm:text-5xl leading-none mb-4">
          Funded
        </p>
        <h1 className="font-grotesk text-cream leading-[0.85]">
          <span className="block text-[clamp(4rem,10vw,9rem)]">RESEARCH</span>
          <span className="block text-[clamp(4rem,10vw,9rem)] text-cream/30">PROJECTS</span>
        </h1>

        {/* Summary stats */}
        <div className="flex flex-wrap gap-6 mt-10">
          {[
            { n: PROJECTS.length, label: 'Total Projects' },
            { n: TOTAL_ACTIVE, label: 'Currently Active' },
            { n: '$9M+', label: 'Total Funding (USD)' },
          ].map(({ n, label }) => (
            <div key={label} className="liquid-glass rounded-2xl px-6 py-4 text-center min-w-[120px]">
              <p className="font-grotesk text-cream text-3xl lg:text-4xl">{n}</p>
              <p className="font-mono text-cream/45 text-xs tracking-widest mt-1 uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 lg:px-16 pb-32 space-y-20">

        {/* ── Active Projects ────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">
              Active Projects
            </span>
            <div className="flex-1 h-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="font-grotesk text-neon text-sm tracking-widest">{TOTAL_ACTIVE}</span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {activeProjects.map((proj, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-7 lg:p-9">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="font-grotesk text-cream text-xl lg:text-2xl leading-tight flex-1">
                    {proj.title}
                  </h3>
                  <div className="liquid-glass shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                    <span className="font-grotesk text-neon text-xs tracking-widest">ACTIVE</span>
                  </div>
                </div>

                <p className="font-mono text-cream/50 text-sm lg:text-base mb-1">{proj.funder}</p>
                <p className="font-mono text-cream/35 text-sm mb-6 italic">{proj.program}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase mb-1">Duration</p>
                    <p className="font-mono text-cream/70 text-sm">{proj.duration}</p>
                  </div>
                  <div>
                    <p className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase mb-1">Funding</p>
                    <p className="font-grotesk text-neon text-lg">{proj.funding}</p>
                  </div>
                  <div>
                    <p className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase mb-1">Role</p>
                    <p className="font-mono text-cream/70 text-sm">{proj.role}</p>
                  </div>
                  <div>
                    <p className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase mb-1">Affiliation</p>
                    <p className="font-mono text-cream/70 text-sm">{proj.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Past Projects ─────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">
              Completed Projects
            </span>
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-grotesk text-cream/40 text-sm tracking-widest">{pastProjects.length}</span>
          </div>

          <div className="flex flex-col gap-0">
            {pastProjects.map((proj, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-12 py-9 border-b border-white/[0.06] hover:border-white/20 transition-colors"
              >
                <div>
                  <h3 className="font-grotesk text-cream text-lg lg:text-xl leading-tight mb-3">
                    {proj.title}
                  </h3>
                  <p className="font-mono text-cream/50 text-sm lg:text-base mb-1">{proj.funder}</p>
                  <p className="font-mono text-cream/35 text-sm italic">{proj.program}</p>
                  <p className="font-mono text-cream/40 text-sm mt-2">
                    {proj.role} — {proj.affiliation}
                  </p>
                </div>

                <div className="flex lg:flex-col items-start lg:items-end gap-6 lg:gap-3">
                  <div>
                    <p className="font-mono text-cream/25 text-xs tracking-[0.2em] uppercase mb-1">Duration</p>
                    <p className="font-mono text-cream/60 text-sm">{proj.duration}</p>
                  </div>
                  <div>
                    <p className="font-mono text-cream/25 text-xs tracking-[0.2em] uppercase mb-1">Funding</p>
                    <p className="font-grotesk text-cream/60 text-lg lg:text-xl">{proj.funding}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
