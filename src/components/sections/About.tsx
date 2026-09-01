import { AnimatedSection } from "../ui/AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about-studio" className="bg-charcoal px-6 py-24 text-offwhite md:px-16">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
        <div className="overflow-hidden rounded-lg border border-offwhite/15 bg-charcoal-soft shadow-2xl shadow-black/20">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/Hq6I-T32ZMY"
              title="Yaadhum Oorae creative studio video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-light">About Yaadhum Oorae</p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight md:text-5xl">
            A small studio with a big feeling for stories.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-offwhite/65">
            Yaadhum Oorae is a creative studio for brands, creators and people with something meaningful to say. We bring editing, design and motion together to make that story feel impossible to scroll past.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-green">
            <span>Video</span>
            <span>Design</span>
            <span>Motion</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
