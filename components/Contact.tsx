'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Download } from 'lucide-react';

const Contact = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-2.pdf';
    link.download = 'Sergey_Davidovich_CV.pdf';
    link.click();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sergeydavidovich12@gmail.com",
      link: "mailto:sergeydavidovich12@gmail.com",
      onClick: undefined
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+421 951 877 027",
      link: "tel:+421951877027",
      onClick: undefined
    },
    {
      icon: Download,
      title: "Download CV",
      value: "PDF Format",
      link: "#",
      onClick: handleDownloadCV
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Ex10101",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/sergey-davidovich-2b9b7a246/",
      color: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/sergey_devvv", 
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section id="contact" className="relative py-8 bg-gradient-to-t from-black/20 via-gray-800/30 to-gray-800/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Ready to collaborate? Let&apos;s get in touch.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Details */}
          <motion.div
            className="grid md:grid-cols-3 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={item.onClick || (() => {
                  if (item.link.startsWith('mailto:') || item.link.startsWith('tel:')) {
                    window.location.href = item.link;
                  } else if (item.link !== '#') {
                    window.open(item.link, '_blank');
                  }
                })}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300 mb-2">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-300 text-xs">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/10`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;