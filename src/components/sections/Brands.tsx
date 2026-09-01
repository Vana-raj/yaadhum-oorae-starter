import { AnimatedSection } from "../ui/AnimatedSection";
import logo from "../../assets/images/logo.png";

const brands = ["naturals", "MR. GOLD", "ZEBRONICS", "TIRUCHENDUR", "ak", "YOGA", "FOOD STREET"];

export function Brands() {
  const brandSet = brands.map((brand) => (
    <div
      key={brand}
      className="flex min-w-[150px] items-center gap-3 border-l border-charcoal/15 px-3 first:border-0"
    >
      <img src={logo} alt="" className="h-8 w-12 object-contain" />
      <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-charcoal/65">
        {brand}
      </span>
    </div>
  ));

  return (
    <AnimatedSection className="bg-offwhite px-6 py-12 text-charcoal md:px-16">
      <div className="text-center">
        <p className="relative inline-block font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-gradient-to-r after:from-green-dark/10 after:via-green-dark/40 after:to-green after:content-[''] md:text-3xl">
          <span>Brand That </span>
          <span className="text-[1.1em]">
            Trust Us
          </span>
        </p>
        <h2 className="mt-2 text-sm font-normal leading-6 text-charcoal/65 md:text-base">We work with businesses and personal brands through direct projects and creative collaborations.</h2>
        <div className="brand-marquee mt-8 overflow-hidden" aria-label="Brands and creators we have worked with">
          <div className="brand-marquee-track flex w-max">
            <div className="brand-marquee-group flex shrink-0 items-center gap-8 pr-8">{brandSet}</div>
            <div className="brand-marquee-group flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">{brandSet}</div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
