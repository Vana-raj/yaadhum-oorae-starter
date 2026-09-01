import { AnimatedSection } from "../ui/AnimatedSection";

export function Quote() {
  return (
    <AnimatedSection id="about" className="bg-offwhite px-6 py-20 text-center text-charcoal md:px-16">
      <p className="mx-auto max-w-2xl font-[family-name:var(--font-display)] text-2xl font-medium md:text-3xl">
        "Your brand has a story.
        <br />
        We help you tell it better."
      </p>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-charcoal/65 md:text-base">
        We create content, videos and social media experiences that help businesses and personal brands build a stronger presence.
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
