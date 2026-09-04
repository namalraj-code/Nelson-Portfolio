import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.7a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 text-white sm:px-14 sm:py-20 dark:bg-white dark:text-ink-950">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brass-500/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-400 dark:text-brass-600">Contact</p>
                <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-5xl">
                  Have a program that needs an owner?
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300 dark:text-ink-600">
                  I am open to Director and Senior Director program leadership roles in healthcare, banking, telecom, and other regulated industries. Always glad to compare notes with other portfolio leaders, too.
                </p>
                <a
                  href={`mailto:${profile.email}?subject=Program%20leadership%20conversation`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brass-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-brass-400 hover:shadow-[0_12px_30px_-10px_rgba(212,162,76,0.7)]"
                >
                  Start a conversation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>

              <ul className="space-y-3 lg:col-span-5">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-brass-400/60 hover:bg-white/10 dark:border-ink-200 dark:bg-ink-50 dark:hover:border-brass-500 dark:hover:bg-ink-100"
                    >
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10 text-brass-400 transition-transform duration-300 group-hover:scale-110 dark:bg-white dark:text-brass-600">
                        {c.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wider text-ink-400 dark:text-ink-500">{c.label}</span>
                        <span className="block truncate text-sm font-medium">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
