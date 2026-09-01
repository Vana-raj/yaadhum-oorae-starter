import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Course", href: "#course" },
  { label: "Service", href: "#services" },
  { label: "About", href: "#about-studio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="site-navbar relative flex items-center justify-between gap-4 bg-charcoal/40 shadow-xl shadow-charcoal/20 backdrop-blur-xl">
        <a href="#home" aria-label="Yaadhum Oorae home" className="flex shrink-0 flex-col gap-1 leading-none">
          <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.04em] text-green sm:text-xl">Yaadhum Oorae</span>
          <span className="whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.34em] text-offwhite/80">Creative Studio</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-offwhite/15 bg-charcoal-soft px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-offwhite md:hidden"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap px-1 py-2 text-xs font-semibold text-offwhite/75 transition-colors hover:text-green"
            >
              {link.label}
            </a>
          ))}
        </div>

        {mobileOpen && (
          <div className="absolute inset-x-0 top-full border-t border-offwhite/10 bg-charcoal/95 px-4 pb-4 pt-3 shadow-2xl shadow-charcoal/25 md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded px-2 py-2 text-sm font-medium text-offwhite/80 transition-colors hover:bg-offwhite/5 hover:text-green"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}