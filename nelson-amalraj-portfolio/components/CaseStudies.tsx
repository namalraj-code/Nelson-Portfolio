import Reveal from "./Reveal";
import { caseStudies, otherWork, type CaseStudy } from "@/data/portfolio";

const accentStyles: Record<CaseStudy["accent"], { bar: string; chip: string; metric: string }> = {
  brass: {
    bar: "from-brass-500 to-brass-300",
    chip: "bg-brass-500/10 text-brass-600 dark:text-brass-400",
    metric: "text-brass-600 dark:text-brass-400",
  },
  sky: {
    bar: "from-sky-500 to-sky-300",
    chip: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
    metric: "text-sky-700 dark:text-sky-400",
  },
  emerald: {
    bar: "from-emerald-500 to-emerald-300",
    chip: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    metric: "text-emerald-700 dark:text-emerald-400",
  },
};

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const a = accentStyles[study.accent];
  return (
    <Reveal as="article" className="card card-hover group relative overflow-hidden">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.bar}`} aria-hidden="true" />
      <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-serif text-2xl text-ink-300 dark:text-ink-600">0{index + 1}</span>
            <span className={`rounded-full px-2.5 py-1 font-semibold ${a.chip}`}>{study.tag}</span>
            <span className="text-ink-500 dark:text-ink-400">
              {study.company} · {study.period}
            </span>
          </div>

          <h3 className="mt-4 font-serif text-2xl leading-snug text-ink-900 sm:text-3xl dark:text-white">{study.title}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">{study.summary}</p>

          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">The problem</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700 dark:text-ink-300">{study.challenge}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">What I did</h4>
              <ul className="mt-2 space-y-2.5">
                {study.approach.map((step, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-700 dark:text-ink-300">
                    <span className={`mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r ${a.bar}`} />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">The result</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700 dark:text-ink-300">{study.outcome}</p>
            </div>
          </div>
        </div>

        <aside className="flex flex-col justify-between gap-8 lg:col-span-5 lg:border-l lg:border-ink-200/80 lg:pl-10 dark:lg:border-white/10">
          <dl className="grid grid-cols-2 gap-5">
            {study.metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-ink-50 p-4 transition-colors group-hover:bg-ink-100/70 dark:bg-white/[0.04] dark:group-hover:bg-white/[0.07]">
                <dd className={`font-serif text-3xl leading-none ${a.metric}`}>{m.value}</dd>
                <dt className="mt-2 text-xs leading-snug text-ink-600 dark:text-ink-400">{m.label}</dt>
              </div>
            ))}
          </dl>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">Scope</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {study.stack.map((s) => (
                <li key={s} className="rounded-md border border-ink-200 px-2 py-1 text-xs font-medium text-ink-700 dark:border-white/10 dark:text-ink-300">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Reveal>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="scroll-mt-20 bg-white py-24 dark:bg-ink-900/40">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Featured Case Studies</p>
          <h2 className="section-title mt-4">Three programs, three industries, one playbook.</h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
            Each one arrived with a fixed budget, competing stakeholders, and a date that could not move. Here is how they shipped.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">Also shipped</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {otherWork.map((w) => (
              <div key={w.title} className="card card-hover p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-ink-900 dark:text-white">{w.title}</h3>
                  <span className="flex-none text-xs text-ink-500 dark:text-ink-400">{w.company}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">{w.result}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
