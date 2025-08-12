'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download, Code, User, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Small delay to ensure mobile menu closes first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-2.pdf';
    link.download = 'Sergey_Davidovich_CV.pdf';
    link.click();
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 overflow-hidden ${
        scrolled 
          ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg shadow-gray-900/20' 
          : 'bg-gray-900/50 backdrop-blur-sm shadow-md shadow-gray-900/10'
      }`}
      style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3))'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#" className="text-2xl font-foldit text-white" style={{ fontWeight: 800 }}>
              <span className="text-purple-400">S</span>
              <span className="text-purple-400">D</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-300 cursor-pointer hover:text-purple-400 focus:text-purple-400 focus:outline-purple-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </motion.button>
                );
              })}
              <motion.button
                onClick={handleDownloadCV}
                className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              onTouchEnd={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white p-2 touch-manipulation mobile-nav-button"
              whileTap={{ scale: 0.95 }}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-gray-900/90 backdrop-blur-lg relative z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ touchAction: 'manipulation' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-gray-300 hover:text-purple-400 focus:text-purple-400 focus:outline-purple-500 px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 flex items-center space-x-2 touch-manipulation"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.indexOf(item) * 0.1 }}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    aria-label={`Navigate to ${item.name} section`}
                    role="button"
                    tabIndex={0}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </motion.button>
                );
              })}
              <motion.button
                onClick={handleDownloadCV}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleDownloadCV();
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 flex items-center space-x-2 mt-4 touch-manipulation"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Download size={18} />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
