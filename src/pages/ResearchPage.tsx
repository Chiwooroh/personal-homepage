import { ArrowLeft, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { JOURNALS, CONFERENCES, PAPERS_IN_PREP, PATENTS } from '../constants'

function Authors({ text }: { text: string }) {
  const parts = text.split('Roh, C.')
  return (
    <span>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <span className="text-neon font-semibold">Roh, C.</span>}
        </span>
      ))}
    </span>
  )
}

function SectionDivider({ label, count }: { label: string; count: number | string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">{label}</span>
      <div className="flex-1 h-px bg-white/10" />
      <span className="font-grotesk text-neon text-sm tracking-widest">{count}</span>
    </div>
  )
}

export default function ResearchPage() {
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
          Academic output
        </p>
        <h1 className="font-grotesk text-cream leading-[0.85]">
          <span className="block text-[clamp(4rem,10vw,9rem)]">RESEARCH</span>
          <span className="block text-[clamp(4rem,10vw,9rem)] text-cream/30">RECORD</span>
        </h1>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mt-10">
          {[
            { n: JOURNALS.length, label: 'Journals' },
            { n: CONFERENCES.length, label: 'Conference Papers' },
            { n: PAPERS_IN_PREP.length, label: 'Under Review' },
            { n: PATENTS.length, label: 'Patents' },
          ].map(({ n, label }) => (
            <div key={label} className="liquid-glass rounded-2xl px-6 py-4 text-center min-w-[100px]">
              <p className="font-grotesk text-cream text-3xl lg:text-4xl">{n}</p>
              <p className="font-mono text-cream/45 text-xs tracking-widest mt-1 uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 lg:px-16 pb-32 space-y-20">

        {/* ── Journals ──────────────────────────────────────────────── */}
        <div>
          <SectionDivider label="Journals" count={JOURNALS.length} />
          <div className="flex flex-col">
            {JOURNALS.map((pub, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-8 border-b border-white/[0.06] hover:border-white/20 transition-colors"
              >
                <span className="font-mono text-cream/25 text-sm tracking-widest shrink-0 w-12 pt-1">
                  {pub.year}
                </span>
                <div className="flex-1">
                  <p className="font-mono text-cream text-base lg:text-lg leading-snug mb-3">
                    {pub.title}
                  </p>
                  <p className="font-mono text-cream/50 text-sm lg:text-base mb-1">
                    <Authors text={pub.authors} />
                  </p>
                  <p className="font-mono text-neon/60 text-sm tracking-wide italic">{pub.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Conference Papers ──────────────────────────────────────── */}
        <div>
          <SectionDivider label="Conference Proceedings" count={CONFERENCES.length} />
          <div className="flex flex-col">
            {CONFERENCES.map((conf, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-7 border-b border-white/[0.06] hover:border-white/20 transition-colors"
              >
                <span className="font-mono text-cream/25 text-sm tracking-widest shrink-0 w-12 pt-1">
                  {conf.year}
                </span>
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <p className="font-mono text-cream text-base lg:text-lg leading-snug flex-1">
                      {conf.title}
                    </p>
                    {conf.award && (
                      <div className="liquid-glass shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1.5 mt-0.5">
                        <Award size={12} className="text-neon" />
                        <span className="font-grotesk text-neon text-[11px] tracking-widest">
                          BEST PAPER
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="font-mono text-cream/50 text-sm mb-1">
                    <Authors text={conf.authors} />
                  </p>
                  <p className="font-mono text-cream/35 text-sm italic">{conf.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Papers in Preparation ─────────────────────────────────── */}
        <div>
          <SectionDivider label="Under Review" count={PAPERS_IN_PREP.length} />
          <div className="flex flex-col">
            {PAPERS_IN_PREP.map((paper, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-7 border-b border-white/[0.06] hover:border-white/20 transition-colors"
              >
                <span className="font-mono text-cream/25 text-sm tracking-widest shrink-0 w-12 pt-1">
                  {paper.year}
                </span>
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <p className="font-mono text-cream/70 text-base lg:text-lg leading-snug flex-1 italic">
                      {paper.title}
                    </p>
                    <span className="liquid-glass shrink-0 rounded-full px-3 py-1.5 font-grotesk text-cream/40 text-[11px] tracking-widest mt-0.5 whitespace-nowrap">
                      UNDER REVIEW
                    </span>
                  </div>
                  <p className="font-mono text-cream/45 text-sm mb-1">
                    <Authors text={paper.authors} />
                  </p>
                  <p className="font-mono text-cream/30 text-sm italic">{paper.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Patents ───────────────────────────────────────────────── */}
        <div>
          <SectionDivider label="Patents" count={PATENTS.length} />
          <div className="flex flex-col gap-5">
            {PATENTS.map((patent, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-7">
                <p className="font-grotesk text-cream text-base lg:text-xl leading-tight mb-5">
                  {patent.title}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="font-mono text-cream/30 text-xs tracking-widest uppercase mb-1">Application No.</p>
                    <p className="font-mono text-neon text-sm">{patent.number}</p>
                  </div>
                  <div>
                    <p className="font-mono text-cream/30 text-xs tracking-widest uppercase mb-1">Applicant</p>
                    <p className="font-mono text-cream/70 text-sm">{patent.applicant}</p>
                  </div>
                  <div>
                    <p className="font-mono text-cream/30 text-xs tracking-widest uppercase mb-1">Country</p>
                    <p className="font-mono text-cream/70 text-sm">Republic of Korea</p>
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
