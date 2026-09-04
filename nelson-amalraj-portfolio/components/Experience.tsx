"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { experience } from "@/data/portfolio";

const INITIAL_VISIBLE = 5;

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const roles = expanded ? experience : experience.slice(0, INITIAL_VISIBLE);

  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title mt-4">From programmer analyst to portfolio owner.</h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
            Twenty-plus years across Fortune 100 banking, healthcare, telecom, and state government.
          </p>
        </Reveal>

        <ol className="relative mt-14 border-l border-ink-200 dark:border-white/10">
          {roles.map((role, i) => (
            <Reveal as="li" key={`${role.company}-${role.period}`} delay={i * 40} className="group relative pb-12 pl-8 last:pb-0 sm:pl-12">
              <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-ink-50 bg-ink-400 transition-all duration-300 group-hover:scale-125 group-hover:bg-brass-500 dark:border-ink-950 dark:bg-ink-500 dark:group-hover:bg-brass-400" />
              <div className="grid gap-4 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="text-sm font-medium text-ink-500 dark:text-ink-400">{role.period}</p>
                  <p className="mt-1 text-xs text-ink-400 dark:text-ink-500">{role.location}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-semibold text-ink-900 dark:text-white">{role.company}</h3>
                  <p className="mt-0.5 text-sm text-brass-600 dark:text-brass-400">{role.title}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700 dark:text-ink-300">{role.summary}</p>
                  {role.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {role.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                          <span className="mt-[9px] h-1 w-1 flex-none rounded-full bg-ink-400 dark:bg-ink-500" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {experience.length > INITIAL_VISIBLE && (
          <div className="mt-10 pl-8 sm:pl-12">
            <button type="button" onClick={() => setExpanded((v) => !v)} className="btn-secondary">
              {expanded ? "Show fewer roles" : `Show ${experience.length - INITIAL_VISIBLE} earlier roles`}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
