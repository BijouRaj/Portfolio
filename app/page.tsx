import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="font-sans">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
