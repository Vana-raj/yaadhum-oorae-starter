import { Link, useParams } from "react-router-dom";
import { services } from "../../data/services";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-charcoal px-6 py-24 text-offwhite">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-light">Not Found</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold">Service not found</h1>
          <Link to="/" className="mt-8 inline-flex rounded-full bg-green px-6 py-3 text-sm font-semibold text-charcoal">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-charcoal px-4 py-24 sm:px-6 md:px-16">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-green-light hover:text-green">
          ← Back home
        </Link>

        <div className={`mt-8 rounded-[2rem] border border-offwhite/10 bg-gradient-to-br ${service.accent} p-6 sm:p-10`}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-light">Service</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-offwhite sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-offwhite/75 sm:text-lg">
            {service.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {service.highlights.map((highlight) => (
            <div key={highlight} className="rounded-2xl border border-offwhite/10 bg-offwhite/5 p-5 text-offwhite/80">
              <p className="text-sm font-medium leading-6">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
