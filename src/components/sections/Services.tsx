import { Link } from "react-router-dom";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Button } from "../ui/Button";
import { services } from "../../data/services";

export function Services() {
  
  return (
    <AnimatedSection id="services" className="bg-offwhite-warm px-6 py-24 text-charcoal md:px-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-dark">
        What We Do
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
        Our Services
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-charcoal/10 bg-white/40 transition duration-300 hover:-translate-y-1 hover:border-green/50 hover:shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/60 to-charcoal/90" />
            <div className={`relative p-5 ${service.accent}`}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-green">
                {index + 1}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-tight text-offwhite">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-offwhite/80">{service.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Button variant="primary">Start a Project →</Button>
      </div>
    </AnimatedSection>
  );
}
