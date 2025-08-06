'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Database, Globe, Server } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React and Next.js"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Building robust APIs and server-side applications with Node.js and Express"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Working with both SQL and NoSQL databases like PostgreSQL and MongoDB"
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end application development from concept to deployment"
    }
  ];

  return (
    <section id="about" className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-t from-gray-900/50 via-gray-800/50 to-black/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            className="flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform -rotate-3"></div>
              
              {/* Photo container */}
              <motion.div
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
              >
                <div className="relative w-80 sm:w-96 h-[20rem] sm:h-[24rem] lg:h-[28rem] rounded-xl overflow-hidden">
                  <Image
                    src="/about-image.png"
                    alt="Sergey Davidovich - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 384px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4 sm:space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/20 text-purple-400 rounded-full text-xs sm:text-sm font-medium border border-purple-600/30">
                  About Me
                </span>
              </motion.div>

              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Passionate Developer with a{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Vision for Innovation
                </span>
              </motion.h2>

              <motion.div
                className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-base sm:text-lg">
                  Hello! I&apos;m Sergey Davidovich, a passionate full stack developer with a love for creating 
                  digital experiences that make a difference. With expertise spanning both frontend and backend 
                  technologies, I bring ideas to life through clean, efficient code and thoughtful design.
                </p>
                
                <p className="text-sm sm:text-base">
                  My journey in software development has equipped me with a comprehensive skill set in modern 
                  web technologies. I thrive on solving complex problems and turning innovative concepts into 
                  functional, scalable applications that users love to interact with.
                </p>

                <p className="text-sm sm:text-base">
                  When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in continuous learning 
                  and staying ahead of the curve in this ever-evolving field.
                </p>
              </motion.div>
            </div>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="p-3 sm:p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium text-xs sm:text-sm">{item.title}</h4>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;