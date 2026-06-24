import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import Experience from "@/components/ui/experience";
import Projects from "@/components/ui/projects";
import Contact from "@/components/ui/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}