import Counter from "./Counter";
import { profile, heroStats, trustedBy } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brass-400/20 blur-3xl dark:bg-brass-500/10"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="eyebrow animate-rise" style={{ animationDelay: "0ms" }}>
            {profile.role}
          </p>

          <h1
            className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-ink-900 animate-rise sm:text-5xl md:text-6xl dark:text-white"
            style={{ animationDelay: "90ms" }}
          >
            I turn stalled, nine-figure technology programs into{" "}
            <span className="text-gradient animate-shimmer">shipped products.</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 animate-rise dark:text-ink-300"
            style={{ animationDelay: "180ms" }}
          >
            {profile.subline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-rise" style={{ animationDelay: "270ms" }}>
            <a href="#work" className="btn-primary">
              See the case studies
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              Connect on LinkedIn
            </a>
          </div>

          <div
            className="mt-6 flex items-center gap-2 text-sm text-ink-500 animate-rise dark:text-ink-400"
            style={{ animationDelay: "340ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability} · {profile.location}
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-200/80 animate-rise md:grid-cols-4 dark:border-white/10 dark:bg-white/10" style={{ animationDelay: "420ms" }}>
          {heroStats.map((s) => (
            <div key={s.label} className="group bg-white px-6 py-6 transition-colors duration-300 hover:bg-ink-50 dark:bg-ink-900 dark:hover:bg-ink-800/80">
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">{s.label}</dt>
              <dd className="mt-2 font-serif text-3xl text-ink-900 transition-colors group-hover:text-brass-600 sm:text-4xl dark:text-white dark:group-hover:text-brass-400">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 animate-rise" style={{ animationDelay: "520ms" }}>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">
            Programs delivered for
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {trustedBy.map((name) => (
              <li
                key={name}
                className="font-serif text-lg text-ink-500 transition-colors duration-300 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
