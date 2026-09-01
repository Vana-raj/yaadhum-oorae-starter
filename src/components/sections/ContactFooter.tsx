import { Button } from "../ui/Button";

const whatsappNumber = "919360798002";

function openWhatsApp(message = "Hello, I would like to start a project with Yaadhum Oorae.") {
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-charcoal text-offwhite">
      <section className="border-b border-offwhite/10 bg-green-dark px-6 py-10 text-charcoal md:px-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-semibold">Have a project in mind?</p>
            <p className="text-lg text-charcoal/75">Let&apos;s create something meaningful.</p>
          </div>
          <Button type="button" onClick={() => openWhatsApp()}>Start a Project →</Button>
        </div>
      </section>
      <section className="px-6 py-16 md:px-16">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-light">Let&apos;s Work Together</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold">Get In Touch</h2>
            <div className="mt-8 space-y-4 text-sm text-offwhite/70">
              <a className="block transition-colors hover:text-green" href="tel:+919360798002">+91 93607 98002</a>
              <a className="block transition-colors hover:text-green" href="mailto:hello@yaadhumoorae.studio">hello@yaadhumoorae.studio</a>
              <p>Tiruchendur, Tamil Nadu, India</p>
            </div>
            <div className="mt-8 flex gap-3 text-offwhite/60">
              <a href="https://www.instagram.com/yaadhum_oorae/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram" className="transition-colors hover:text-green">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/6kanth-m-251a252a6/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="transition-colors hover:text-green">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9.3h3.6V21H3.4V9.3Zm5.8 0h3.4v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.2V9.3Z" /></svg>
              </a>
              <a href="https://www.youtube.com/@6kanth" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube" className="transition-colors hover:text-green">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8ZM10 15.8V8.2l6 3.8-6 3.8Z" /></svg>
              </a>
            </div>
          </div>
          <form
            className="grid gap-4 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const name = String(formData.get("name") || "");
              const phone = String(formData.get("phone") || "");
              const service = String(formData.get("service") || "");
              openWhatsApp(`Hello, my name is ${name}. My phone number is ${phone}. I need help with ${service}.`);
            }}
          >
            <label className="sr-only" htmlFor="name">Your name</label>
            <input id="name" name="name" placeholder="Your name" required className="rounded border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-sm outline-none placeholder:text-offwhite/40 focus:border-green" />
            <label className="sr-only" htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" placeholder="Phone number" required className="rounded border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-sm outline-none placeholder:text-offwhite/40 focus:border-green" />
            <label className="sr-only" htmlFor="service">What do you need?</label>
            <select id="service" name="service" defaultValue="" className="rounded border border-offwhite/15 bg-charcoal px-4 py-3 text-sm text-offwhite/70 outline-none focus:border-green sm:col-span-2">
              <option value="" disabled>What do you need?</option>
              <option>Video Editing</option>
              <option>Graphic Design</option>
              <option>Motion Graphics</option>
              <option>Content Support</option>
            </select>
            <Button type="submit" className="justify-center sm:w-fit">Chat on WhatsApp →</Button>
          </form>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-offwhite/10 pt-6 text-xs text-offwhite/40">
          <span>YAADHUM OORAE · CREATE · EDIT · INSPIRE</span>
          <span>© 2025 Yaadhum Oorae. All rights reserved.</span>
        </div>
      </section>
    </footer>
  );
}
