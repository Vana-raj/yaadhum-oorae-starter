export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  accent: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    slug: "video-editing",
    title: "Video Editing",
    shortDescription: "Sharp storytelling, polished pacing, and visual finishing for every frame.",
    description:
      "We turn raw footage into compelling narratives with strong pacing, clean transitions, and audience-focused storytelling.",
    highlights: [
      "YouTube and long-form editing",
      "Corporate and promotional videos",
      "Color correction and sound polish",
    ],
    accent: "from-[#14cc64]/15 via-[#14cc64]/5 to-transparent",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription: "Strategy, content planning, and performance-focused creative for growing brands.",
    description:
      "From content calendars to campaign creative, we help brands stay visible, relevant, and conversion-ready across social platforms.",
    highlights: [
      "Campaign planning and strategy",
      "Platform-ready content systems",
      "Audience engagement and growth support",
    ],
    accent: "from-[#f2d57f]/20 via-[#14cc64]/5 to-transparent",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    shortDescription: "Creative production that connects brand ideas with authentic visual storytelling.",
    description:
      "We craft creative content that feels premium, natural, and aligned with your brand voice across reels, campaigns, and digital touchpoints.",
    highlights: [
      "Reels, ads, and storytelling content",
      "Brand-consistent visual direction",
      "Concept development and production support",
    ],
    accent: "from-[#ee7d5a]/15 via-[#14cc64]/5 to-transparent",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    shortDescription: "Build a clear identity that makes your personal brand memorable and trusted.",
    description:
      "We help founders, creators, and professionals develop a consistent identity that looks premium and communicates authority with clarity.",
    highlights: [
      "Brand positioning and message clarity",
      "Profile visuals and content direction",
      "Audience trust and authority building",
    ],
    accent: "from-[#8db3ff]/15 via-[#14cc64]/5 to-transparent",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];
