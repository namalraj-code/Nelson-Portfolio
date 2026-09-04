import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200/80 py-8 dark:border-white/10">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-ink-500 sm:flex-row dark:text-ink-400">
        <p>
          © {new Date().getFullYear()} {profile.name}. {profile.location}.
        </p>
        <p className="text-xs">PMP · CSM · SAFe · Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
