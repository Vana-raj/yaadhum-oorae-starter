import { AnimatedSection } from "../ui/AnimatedSection";

const courses = [
  {
    title: "Creative Editing Bootcamp",
    description: "Learn editing workflows, storytelling structure, pacing, and professional finishing techniques.",
    tone: "from-[#7b8d7c] via-[#25382b] to-[#101b14]",
  },
  {
    title: "Social Growth Masterclass",
    description: "Build a content strategy that grows reach, engagement, and brand visibility across platforms.",
    tone: "from-[#9b7a43] via-[#3e301b] to-[#17120b]",
  },
  {
    title: "Brand Storytelling Course",
    description: "Master content direction, narrative framing, and brand identity for creators and founders.",
    tone: "from-[#5e9ca1] via-[#214b50] to-[#10272a]",
  },
];

export function Course() {
  return (
    <AnimatedSection id="course" className="bg-offwhite-warm px-6 py-24 text-charcoal md:px-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-dark">Learning</p>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
          Course
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-green px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal transition hover:bg-green-light"
        >
          Join Link
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.title}
            className={`group relative overflow-hidden rounded-2xl border border-charcoal/10 bg-gradient-to-br ${course.tone} p-5 shadow-lg`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.25),transparent_30%),linear-gradient(150deg,transparent_30%,rgba(0,0,0,0.7))] transition-transform duration-500 group-hover:scale-105" />
            <div className="relative z-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-lg font-bold text-offwhite">
                {courses.indexOf(course) + 1}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-tight text-offwhite">
                {course.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-offwhite/80">{course.description}</p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
