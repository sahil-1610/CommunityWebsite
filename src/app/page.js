
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Stats/>
      <Features/>
      <Testimonials/>
      <Gallery/>
      <Team/>
      <Faq/>
      <CTA/>
    </main>
  );
}
