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
    <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal px-6 pt-24 md:px-16">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full translate-x-[3%] scale-100 object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/30" />

      <div className="relative z-10 max-w-2xl">
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="font-[family-name:var(--font-display)] text-5xl font-bold leading-tight text-offwhite md:text-6xl"
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
          className="mt-6 max-w-md text-lg text-offwhite/70"
        >
          We turn your brand story into content that connects, engages & sells.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button
            variant="primary"
            onClick={() =>
              document.getElementById("work")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View Our Work
          </Button>
          <Button variant="outline">Learn With Us</Button>
        </motion.div>
      </div>
    </section>
  );
}
