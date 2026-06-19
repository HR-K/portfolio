import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <About />

      <Timeline />

      <Skills />

      <Projects />

    </main>
  );
}