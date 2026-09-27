import { apps } from "@/lib/apps";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav
        aria-label="Progetti"
        className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-3 py-2 md:px-5 rounded-full bg-background/70 backdrop-blur-md border border-surface-variant shadow-lg"
      >
        <a href="#" className="font-bold text-lg text-foreground px-2 shrink-0">
          <span className="md:hidden">DF</span>
          <span className="hidden md:inline">Damiano Falso</span>
        </a>

        <ul className="flex items-center gap-1.5 md:gap-2">
          {apps.map((app) => (
            <li key={app.name}>
              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${app.color} ${app.textColor} flex items-center gap-1.5 px-3 py-2 md:px-4 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95`}
              >
                <app.icon size={16} aria-hidden="true" className="hidden sm:block" />
                {app.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
