import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import heroBackground from "../../assets/images/Quote.jpg.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal px-4 pt-24 sm:px-6 md:px-16">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full translate-x-0 object-cover object-center sm:translate-x-[3%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/30" />

      <div className="relative z-10 max-w-2xl">
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="font-[family-name:var(--font-display)] text-[2.75rem] font-bold leading-[1.02] tracking-[-0.05em] text-offwhite sm:text-5xl md:text-6xl"
        >
          EVERY STORY DESERVES AN
          <br />
          <span className="text-green">IDENTITY.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-md text-base text-offwhite/70 sm:text-lg"
        >
          We help businesses and personal brands build a stronger presence through content, video and social media.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
        >
          <Button
            variant="primary"
            className="justify-center sm:w-auto"
            onClick={() =>
              document.getElementById("work")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View Our Work
          </Button>
          <Button variant="outline" className="justify-center sm:w-auto">Learn With Us</Button>
        </motion.div>
      </div>
    </section>
  );
}
