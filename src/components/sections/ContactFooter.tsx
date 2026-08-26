import { Button } from "../ui/Button";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-charcoal text-offwhite">
      <section className="border-b border-offwhite/10 bg-green-dark px-6 py-10 text-charcoal md:px-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-semibold">Have a project in mind?</p>
            <p className="text-lg text-charcoal/75">Let&apos;s create something meaningful.</p>
          </div>
          <Button>Start a Project →</Button>
        </div>
      </section>
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-light">Let&apos;s Work Together</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold">Get In Touch</h2>
            <div className="mt-8 space-y-4 text-sm text-offwhite/70">
              <a className="block transition-colors hover:text-green" href="tel:+919123456789">+91 91234 56789</a>
              <a className="block transition-colors hover:text-green" href="mailto:hello@yaadhumoorae.studio">hello@yaadhumoorae.studio</a>
              <p>Tiruchendur, Tamil Nadu, India</p>
            </div>
            <div className="mt-8 flex gap-4 text-xs font-semibold uppercase tracking-widest text-offwhite/60">
              <a href="#" aria-label="Instagram" className="hover:text-green">Instagram</a>
              <a href="#" aria-label="YouTube" className="hover:text-green">YouTube</a>
              <a href="#" aria-label="Behance" className="hover:text-green">Behance</a>
            </div>
          </div>
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="name">Your name</label>
            <input id="name" name="name" placeholder="Your name" required className="rounded border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-sm outline-none placeholder:text-offwhite/40 focus:border-green" />
            <label className="sr-only" htmlFor="email">Email or phone</label>
            <input id="email" name="email" placeholder="Email / Phone" required className="rounded border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-sm outline-none placeholder:text-offwhite/40 focus:border-green" />
            <label className="sr-only" htmlFor="service">What do you need?</label>
            <select id="service" name="service" defaultValue="" className="rounded border border-offwhite/15 bg-charcoal px-4 py-3 text-sm text-offwhite/70 outline-none focus:border-green sm:col-span-2">
              <option value="" disabled>What do you need?</option>
              <option>Video Editing</option>
              <option>Graphic Design</option>
              <option>Motion Graphics</option>
              <option>Content Support</option>
            </select>
            <label className="sr-only" htmlFor="message">Tell us about your project</label>
            <textarea id="message" name="message" rows={4} placeholder="Tell us about your project..." className="resize-none rounded border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-sm outline-none placeholder:text-offwhite/40 focus:border-green sm:col-span-2" />
            <Button type="submit" className="justify-center sm:w-fit">Submit Enquiry →</Button>
          </form>
        </div>
        <div className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-offwhite/10 pt-6 text-xs text-offwhite/40">
          <span>YAADHUM OORAE · CREATE · EDIT · INSPIRE</span>
          <span>© 2025 Yaadhum Oorae. All rights reserved.</span>
        </div>
      </section>
    </footer>
  );
}
