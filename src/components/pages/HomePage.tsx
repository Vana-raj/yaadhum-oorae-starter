import { Hero } from "../sections/Hero";
import { Quote } from "../sections/Quote";
import { Course } from "../sections/Course";
import { Services } from "../sections/Services";
import { RecentWork } from "../sections/RecentWork";
import { Brands } from "../sections/Brands";
import { Process } from "../sections/Process";
import { About } from "../sections/About";
import { ContactFooter } from "../sections/ContactFooter";
import { Navbar } from "../ui/Navbar";

export function HomePage() {
  return (
    <main>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Quote />
      <Brands />
      <Services />
      <Course />
      <RecentWork />
      <Process />
      <About />
      <ContactFooter />
    </main>
  );
}
