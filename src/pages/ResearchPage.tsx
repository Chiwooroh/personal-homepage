import { ArrowLeft, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RESEARCH_INTERESTS, AWARDS, EXPERIENCES } from '../constants'

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
          AI & Mobility
        </p>
        <h1 className="font-grotesk text-cream leading-[0.85]">
          <span className="block text-[clamp(4rem,10vw,9rem)]">RESEARCH</span>
          <span className="block text-[clamp(4rem,10vw,9rem)] text-cream/30">PROFILE</span>
        </h1>
      </section>

      <div className="max-w-content mx-auto px-6 lg:px-16 pb-32 space-y-20">

        {/* ── Thesis ────────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">M.S. Thesis</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="liquid-glass rounded-2xl p-8 lg:p-12">
            <p className="font-condiment text-neon text-2xl sm:text-3xl mb-4 leading-none">
              Thesis
            </p>
            <h2 className="font-grotesk text-cream text-xl lg:text-3xl leading-tight mb-6">
              LLM-BASED CONTEXTUAL UNDERSTANDING OF REAL-WORLD DRIVING BEHAVIOR AND REALISTIC REPRODUCTION IN TRAFFIC SIMULATION
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div>
                <p className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase mb-2">Degree</p>
                <p className="font-mono text-cream/80 text-sm lg:text-base">
                  Master of Science in Transportation Engineering
                </p>
              </div>
              <div>
                <p className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase mb-2">Institution</p>
                <p className="font-mono text-cream/80 text-sm lg:text-base">Ajou University, Suwon</p>
              </div>
              <div>
                <p className="font-mono text-cream/30 text-xs tracking-[0.2em] uppercase mb-2">Advisor</p>
                <p className="font-mono text-cream/80 text-sm lg:text-base">Dr. Jaehyun So</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Research Interests ────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">
              Research Interests
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex flex-wrap gap-3">
            {RESEARCH_INTERESTS.map((interest) => (
              <div key={interest} className="liquid-glass rounded-full px-6 py-3">
                <span className="font-mono text-cream/80 text-sm lg:text-base tracking-wide">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Research Experience ───────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">
              Research Experience
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex flex-col gap-6">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-7 lg:p-9">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <p className="font-grotesk text-cream text-xl lg:text-2xl">{exp.role}</p>
                    <p className="font-mono text-neon/70 text-sm lg:text-base mt-1">{exp.org}</p>
                  </div>
                  <span className="liquid-glass rounded-full px-4 py-2 font-mono text-cream/50 text-sm whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-neon mt-1.5 shrink-0">—</span>
                      <span className="font-mono text-cream/70 text-sm lg:text-base leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Awards ────────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">Awards</span>
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-grotesk text-neon text-sm tracking-widest">{AWARDS.length}</span>
          </div>

          <div className="flex flex-col gap-0">
            {AWARDS.map((award, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-7 border-b border-white/[0.06] hover:border-white/20 transition-colors"
              >
                <span className="font-mono text-cream/25 text-sm tracking-widest shrink-0 w-20 pt-1">
                  {award.year}
                </span>
                <div className="flex items-center gap-3 flex-1">
                  <Award size={18} className="text-neon shrink-0" />
                  <div>
                    <p className="font-grotesk text-cream text-lg lg:text-xl">{award.title}</p>
                    <p className="font-mono text-cream/50 text-sm mt-1">{award.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Teaching ──────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">Teaching</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="liquid-glass rounded-2xl p-7">
              <p className="font-grotesk text-neon text-base tracking-widest mb-4">LECTURER</p>
              <p className="font-mono text-cream text-sm lg:text-base leading-relaxed">
                Application of Autonomous Driving Simulation Technology (Practical Training — SUMO)
              </p>
              <p className="font-mono text-cream/40 text-sm mt-2">2024 ITS & Smart Mobility Summer School, Aug. 2024</p>
            </div>

            <div className="liquid-glass rounded-2xl p-7">
              <p className="font-grotesk text-neon text-base tracking-widest mb-4">TEACHING ASSISTANT</p>
              <ul className="space-y-2 font-mono text-cream/70 text-sm lg:text-base">
                {[
                  ['Mobility Seminar I', 'Ajou University', 'Fall 2024'],
                  ['Mobility Data Analytics', 'Ajou University', 'Spring 2024'],
                  ['Highway Capacity Analysis', 'Ajou University', 'Spring 2024'],
                  ['Smart Mobility Service', 'Ajou University', 'Fall 2023'],
                  ['Traffic Study and Data Analytics', 'Ajou University', 'Fall 2023'],
                  ['Unstructured Data Analysis Theory and Practice', 'Hyundai Motor Group', '2023–2024'],
                ].map(([course, org, term]) => (
                  <li key={course} className="flex items-start gap-3">
                    <span className="text-cream/20 shrink-0 mt-0.5">—</span>
                    <span>
                      {course}
                      <span className="text-cream/35"> · {org} · {term}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Skills ────────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-grotesk text-cream/40 text-sm tracking-[0.3em] uppercase">Skills</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: 'Programming', items: ['Python', 'Pandas', 'PyTorch', 'TensorFlow', 'C / C#', 'MATLAB'] },
              { label: 'Tools', items: ['SUMO', 'VISSIM', 'QGIS', 'MS Office'] },
              { label: 'Languages', items: ['Korean (Native)', 'English (Advanced)'] },
            ].map(({ label, items }) => (
              <div key={label} className="liquid-glass rounded-2xl p-6">
                <p className="font-grotesk text-cream/40 text-xs tracking-[0.3em] uppercase mb-4">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="font-mono text-cream/70 text-sm border border-white/10 rounded-lg px-3 py-1.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
