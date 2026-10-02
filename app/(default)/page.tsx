import Hero from "@/components/sections/hero";
import Proof from "@/components/sections/proof";
import Problem from "@/components/sections/problem";
import BeforeAfter from "@/components/sections/before-after";
import HowItWorks from "@/components/sections/how-it-works";
import Product from "@/components/sections/product";
import Areas from "@/components/sections/areas";
import Plans from "@/components/sections/plans";
import Results from "@/components/sections/results";
import Trust from "@/components/sections/trust";
import About from "@/components/sections/about";
import Partners from "@/components/sections/partners";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import FinalCta from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Problem />
      <BeforeAfter />
      <HowItWorks />
      <Product />
      <Areas />
      <Plans />
      <Results />
      <Trust />
      <About />
      <Partners />
      <Faq />
      <Contact />
      <FinalCta />
    </>
  );
}
