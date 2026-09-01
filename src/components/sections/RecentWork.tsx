import { AnimatedSection } from "../ui/AnimatedSection";

interface WorkItem {
  title: string;
  category: string;
  tone: string;
}

const work: WorkItem[] = [
  { title: "Corporate Film", category: "Video Editing", tone: "from-[#7b8d7c] via-[#25382b] to-[#101b14]" },
  { title: "Product Promo", category: "Video Editing", tone: "from-[#9b7a43] via-[#3e301b] to-[#17120b]" },
  { title: "Travel Reel", category: "Reels", tone: "from-[#5e9ca1] via-[#214b50] to-[#10272a]" },
  { title: "Event Highlights", category: "Video Editing", tone: "from-[#ad806c] via-[#4b2c28] to-[#1c1211]" },
  { title: "YouTube Thumbnail", category: "Graphic Design", tone: "from-[#a33d30] via-[#501817] to-[#1a0a0b]" },
  { title: "Motion Title", category: "After Effects", tone: "from-[#5c4c9d] via-[#211b49] to-[#0d0c1e]" },
  { title: "Social Media Post", category: "Graphic Design", tone: "from-[#a8c77c] via-[#51714b] to-[#1c3022]" },
  { title: "Product Animation", category: "Motion Graphics", tone: "from-[#2f9dce] via-[#17405d] to-[#0b1828]" },
];

export function RecentWork() {
  return (
    <AnimatedSection id="work" className="bg-charcoal px-6 py-24 text-offwhite md:px-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-light">Selected Work</p>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">Our Recent Work</h2>
        <p className="max-w-sm text-sm leading-6 text-offwhite/55">A few frames from the stories we have helped shape.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {work.map((item) => (
          <article key={item.title} className={`group relative aspect-[1.25] overflow-hidden rounded-lg bg-gradient-to-br ${item.tone} p-4 shadow-lg`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.3),transparent_25%),linear-gradient(150deg,transparent_35%,rgba(0,0,0,0.65))] transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/50 text-xs transition-colors group-hover:bg-green group-hover:text-charcoal">▶</div>
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-xs text-offwhite/65">{item.category}</p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
