import { AnimatedSection } from "../ui/AnimatedSection";

const steps = [
  { number: "01", title: "Understand", description: "We understand the brand, audience and objective." },
  { number: "02", title: "Create", description: "We build the visual direction and content." },
  { number: "03", title: "Refine", description: "We edit, design and polish every detail." },
  { number: "04", title: "Deliver", description: "Final content ready for the platform and audience." },
];

export function Process() {
  return (
    <AnimatedSection id="course" className="bg-offwhite-warm px-6 py-20 text-charcoal md:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-dark">Our Approach</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">Our Proven Process</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && <span className="absolute left-[calc(50%+46px)] top-6 hidden h-px w-[calc(100%-92px)] bg-charcoal/20 md:block" />}
              <div className="relative mx-auto grid h-12 w-12 place-items-center rounded-full bg-green font-semibold text-charcoal">{step.number}</div>
              <h3 className="mt-5 font-semibold">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[180px] text-sm leading-6 text-charcoal/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
