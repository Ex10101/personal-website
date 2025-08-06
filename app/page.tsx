import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 relative bg-grid-white/[0.02] bg-[size:60px_60px]">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
