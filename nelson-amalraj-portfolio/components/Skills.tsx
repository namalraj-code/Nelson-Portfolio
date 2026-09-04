import Reveal from "./Reveal";
import { skillGroups, education } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-white py-24 dark:bg-ink-900/40">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title mt-4">The toolkit behind the track record.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name} delay={i * 60} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className="card card-hover h-full p-6">
                <h3 className="font-semibold text-ink-900 dark:text-white">{group.name}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-700 transition-colors hover:bg-brass-500/15 hover:text-brass-600 dark:bg-white/[0.06] dark:text-ink-200 dark:hover:bg-brass-400/15 dark:hover:text-brass-400"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={320}>
            <div className="card h-full bg-ink-900 p-6 text-white dark:bg-white dark:text-ink-950">
              <h3 className="font-semibold">Education</h3>
              <ul className="mt-4 space-y-4">
                {education.map((e) => (
                  <li key={e.school}>
                    <p className="text-sm font-medium">{e.degree}</p>
                    <p className="text-sm text-ink-300 dark:text-ink-600">{e.school}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
