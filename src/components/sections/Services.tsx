import { AnimatedSection } from "../ui/AnimatedSection";
import { Button } from "../ui/Button";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Video Editing",
    description: "Long-form videos, YouTube, corporate & promotional content.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Reels & Short-form Content",
    description: "Instagram Reels, YouTube Shorts and social media content.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Motion Graphics",
    description: "Clean animations, titles, transitions and visual storytelling.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Graphic Design",
    description: "Posters, social media creatives and promotional designs.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Thumbnail Design",
    description: "YouTube thumbnails designed for stronger visual impact.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Content Creation Support",
    description:
      "Ongoing creative support for brands, businesses and personal creators.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80",
  },
];

export function Services() {
  return (
    <AnimatedSection id="services" className="bg-offwhite-warm px-6 py-24 text-charcoal md:px-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-dark">
        What We Do
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
        Our Services
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="group overflow-hidden border-t border-charcoal/10 pt-4">
            <div className="aspect-[16/10] overflow-hidden bg-charcoal/10">
              <img
                src={service.image}
                alt={`${service.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <h3 className="mt-4 font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-charcoal/60">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Button variant="primary">Start a Project →</Button>
      </div>
    </AnimatedSection>
  );
}
