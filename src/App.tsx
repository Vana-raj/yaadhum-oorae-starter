import { Hero } from "./components/sections/Hero";
import { Quote } from "./components/sections/Quote";
import { Services } from "./components/sections/Services";
import { RecentWork } from "./components/sections/RecentWork";
import { Brands } from "./components/sections/Brands";
import { Process } from "./components/sections/Process";
import { ContactFooter } from "./components/sections/ContactFooter";
import { Navbar } from "./components/ui/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Quote />
      <Services />
      <RecentWork />
      <Brands />
      <Process />
      <ContactFooter />
    </main>
  );
}

export default App;
