'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroAnimation from '../public/hero-animation.json';
import Typewriter from 'typewriter-effect';
import { usePerformanceOptimization } from '../hooks/usePerformanceOptimization';

const Hero = () => {
  const { 
    isMobile, 
    prefersReducedMotion, 
    shouldReduceAnimations, 
    getOptimizedMotionProps 
  } = usePerformanceOptimization();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-2.pdf';
    link.download = 'Sergey_Davidovich_CV.pdf';
    link.click();
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-28 pb-28 lg:pb-0 lg:pt-0 flex items-center justify-center relative overflow-visible bg-gradient-to-b from-gray-900/50 via-gray-800/50 to-black/50">
      {/* Background decorative elements - conditionally animated */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-visible">
          <div className={`absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${isMobile ? '' : 'animate-pulse'}`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${isMobile ? '' : 'animate-pulse'}`}></div>
          <div className={`absolute top-40 left-40 w-60 h-60 bg-teal-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${isMobile ? '' : 'animate-pulse'}`}></div>
        </div>
      )}



      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-2"
              >
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white rounded-full text-lg font-bold border-2 border-purple-500/50 shadow-lg shadow-purple-500/25 backdrop-blur-sm">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Typewriter
                  options={{
                    strings: [
                      'Hi, I\'m <span class="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Sergey Davidovich</span>',
                      'Full Stack <span class="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Developer</span>',
                      'Problem <span class="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Solver</span>',
                      'Code <span class="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Enthusiast</span>'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 20,
                  }}
                />
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Passionate full stack developer with expertise in modern web technologies. 
                I create beautiful, functional, and scalable applications that deliver 
                exceptional user experiences.
              </motion.p>
            </div>



            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                onClick={handleDownloadCV}
                className="group cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25"
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                <span>Download CV</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </motion.button>

              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:your.email@example.com"
                  className="p-4 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Lottie Animation - Paused on mobile */}
          <motion.div
            className="flex justify-center"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={prefersReducedMotion ? {} : { duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-1/2 h-1/2">
              <div className="w-full max-w-2xl">
                <Lottie
                  animationData={heroAnimation}
                  loop={!isMobile} // Don't loop on mobile
                  autoplay={!isMobile} // Don't autoplay on mobile
                  className="w-full h-auto"
                  style={{ willChange: 'transform' }}
                  rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice',
                    progressiveLoad: true,
                    hideOnTransparent: true
                  }}
                  // Mobile optimizations - pause animation
                  {...(isMobile && {
                    quality: 'low',
                    initialSegment: [0, 1], // Show only first frame on mobile
                  })}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator - Optimized for mobile */}
      <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? {} : { delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300"
            animate={!prefersReducedMotion && !isMobile ? { y: [0, 10, 0] } : {}}
            transition={!prefersReducedMotion && !isMobile ? { repeat: Infinity, duration: 2 } : {}}
            style={{ willChange: 'transform' }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>

    </section>
  );
};

export default Hero;