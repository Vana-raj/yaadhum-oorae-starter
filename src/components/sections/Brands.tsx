import { AnimatedSection } from "../ui/AnimatedSection";

const brands = ["naturals", "MR. GOLD", "ZEBRONICS", "TIRUCHENDUR", "ak", "YOGA", "FOOD STREET"];

export function Brands() {
  return (
    <AnimatedSection className="bg-offwhite px-6 py-12 text-charcoal md:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-green-dark">Trusted By</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold md:text-2xl">Brands &amp; Creators We&apos;ve Worked With</h2>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-5 gap-y-6 text-charcoal/65 sm:grid-cols-4 lg:grid-cols-7">
          {brands.map((brand) => (
            <span key={brand} className="border-l border-charcoal/15 px-3 font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide first:border-0 sm:first:border-l lg:first:border-l">{brand}</span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
