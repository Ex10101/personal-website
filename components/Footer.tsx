'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:text-blue-500"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:sergey@example.com",
      color: "hover:text-teal-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-foldit text-white mb-1" style={{ fontWeight: 800 }}>
              <span className="text-purple-400">S</span>
              <span className="text-purple-400">D</span>
            </h3>
            <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-400 text-xs">
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>sergeydavidovich12@gmail.com</span>
              </div>
              <span>📍 Bratislava, Slovakia</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/10`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
              >
                <social.icon className="w-3 h-3" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-4 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-gray-400 text-xs mb-2 md:mb-0">
            <span>© {currentYear} Made with</span>
            <Heart className="w-3 h-3 text-red-500 animate-pulse" />
            <span>and</span>
            <span>☕</span>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-gray-300 hover:text-teal-400 transition-colors duration-300 text-xs group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 group-hover:translate-y-[-1px] transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;