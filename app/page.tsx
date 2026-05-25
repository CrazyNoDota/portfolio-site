import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import StackSection from "@/components/StackSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative isolate">
      <Background />
      <Header />
      <Hero />
      <Marquee />
      <ProjectsGrid />
      <About />
      <StackSection />
      <Footer />
    </main>
  );
}
