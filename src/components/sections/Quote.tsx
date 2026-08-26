import { AnimatedSection } from "../ui/AnimatedSection";

export function Quote() {
  return (
    <AnimatedSection id="about" className="bg-offwhite px-6 py-20 text-center text-charcoal md:px-16">
      <p className="mx-auto max-w-2xl font-[family-name:var(--font-display)] text-2xl font-medium md:text-3xl">
        "Every frame has a story.
        <br />
        Our job is to make it worth watching."
      </p>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-green-dark">
        Yaadhum Oorae
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-charcoal/50">
        Create • Edit • Inspire
      </p>
    </AnimatedSection>
  );
}
