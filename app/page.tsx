import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 relative bg-grid-white/[0.02] bg-[size:60px_60px]">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        
        <Skills />
        
        <section id="projects" className="min-h-screen bg-gray-800 flex items-center justify-center">
          <div className="text-white text-2xl">Projects Section (Coming Soon)</div>
        </section>
        
        <section id="contact" className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-white text-2xl">Contact Section (Coming Soon)</div>
        </section>
      </div>
    </main>
  );
}
