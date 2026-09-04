import Reveal from "./Reveal";
import { about, industries, certifications } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-4">{about.lead}</h2>
        </Reveal>

        <div className="space-y-10 lg:col-span-7">
          <Reveal delay={80}>
            <div className="space-y-5 text-[17px] leading-relaxed text-ink-700 dark:text-ink-300">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="grid gap-4 sm:grid-cols-3">
              {about.principles.map((p) => (
                <div key={p.title} className="card card-hover p-5">
                  <h3 className="font-semibold text-ink-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col gap-6 border-t border-ink-200 pt-8 sm:flex-row sm:gap-12 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">Industries</p>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-800 dark:text-ink-200">
                  {industries.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">Certifications</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {certifications.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-700 transition-colors hover:border-brass-500 hover:text-brass-600 dark:border-white/10 dark:bg-ink-900 dark:text-ink-200 dark:hover:border-brass-400 dark:hover:text-brass-400"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
