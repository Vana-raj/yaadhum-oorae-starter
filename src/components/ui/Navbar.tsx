const links = [
  { label: "Home", href: "#home" },
  { label: "Course", href: "#course" },
  { label: "Service", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="site-navbar flex items-center justify-between gap-8 bg-charcoal/40 shadow-xl shadow-charcoal/20 backdrop-blur-xl">
        <a href="#home" aria-label="Yaadhum Oorae home" className="flex shrink-0 flex-col gap-1 leading-none">
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.04em] text-green">Yaadhum Oorae</span>
          <span className="whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.34em] text-offwhite/80">Creative Studio</span>
        </a>

        <div className="flex items-center gap-6">
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

        {/* <div className="hidden items-center rounded-full border border-offwhite/15 bg-charcoal-soft p-1 text-[10px] font-bold uppercase tracking-[0.16em] md:flex">
          <span className="rounded-full bg-green px-4 py-2 text-charcoal shadow-[0_0_18px_rgba(20,204,100,0.35)]">Call us</span>
        </div> */}
      </nav>
    </header>
  );
}