import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Workflow } from "@/components/sections/workflow";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Workflow />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
