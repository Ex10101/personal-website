'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ExternalLink, Github } from 'lucide-react';
import { usePerformanceOptimization } from '../hooks/usePerformanceOptimization';

const Projects = () => {
  const { 
    shouldReduceAnimations
  } = usePerformanceOptimization();
  const projects = [
    {
      id: 1,
      title: "Aksioma Tver Clinic",
      slug: "aksioma-tver-clinic",
      date: "July 2025",
      image: "/project2-thumb.png",
      description: "A modern and responsive website with complex content management system for a large clinic in Tver, Russia.",
      technologies: ["Next.js", "TypeScript", "NextAuth", "MongoDB", "TailwindCSS", "Shadcn/UI", "React", "Mongoose", "SEO"],
      githubUrl: "-",
      liveUrl: "https://aksioma-tver.ru"
    },
    {
      id: 2,
      title: "Car Wash City Group",
      slug: "car-wash-city-group",
      date: "April 2025", 
      image: "/project1-thumb.png",
      description: "A modern and responsive website for a largest hand car wash network in Slovakia. With a complex reservation system and admin panel with business automatization functionalities",
      technologies: ["Next.js", "React", "TailwindCSS", "Supabase", "PostgreSQL", "Resend", "Twilio", "React Hook Form", "Zod", "SEO"],
      githubUrl: "-",
      liveUrl: "https://carwashcitygroup.sk"
    },
    {
      id: 3,
      title: "Artroom Design Studio",
      slug: "artroom-design-studio",
      date: "September 2023",
      image: "/project3-thumb.png", 
      description: "A modern and responsive website with content management system for a design studio in Slovakia.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Multer", "Cloudinary", "SEO"],
      githubUrl: "https://github.com/ex10101/artroom-sk",
      liveUrl: "https://artroom-design.com"
    }
  ];

  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-t from-gray-800/50 via-gray-900/50 to-black/50 overflow-hidden">
      {/* Background decorative elements - disabled on mobile */}
      {!shouldReduceAnimations && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-16 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-16 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-600/30">
              My Work
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-0">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-purple-500/50 transform sm:-translate-x-0.5"></div>

          {/* Timeline Dots */}
          {projects.map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              className="absolute left-5 sm:left-1/2 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform -translate-x-0.25 sm:-translate-x-1.75 z-10"
              style={{ 
                top: `${index * 33.33 + 16.67}%`,
                transform: 'translateY(-50%) translateX(-50%)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: index * 0.2 + 0.5,
                duration: 0.6,
                type: "spring",
                stiffness: 200 
              }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-ping opacity-20"></div>
            </motion.div>
          ))}

          {/* Project Cards */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-12 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Project Image */}
                <motion.div
                  className="w-full sm:w-1/2 ml-7 sm:ml-0 pr-4 sm:pr-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 sm:p-3 border border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-300">
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 90vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                        
                        {/* Overlay on hover - hidden on mobile, shown on larger screens */}
                        <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">
                          <div className="flex space-x-4">
                            {project.githubUrl !== "-" && (
                              <motion.a
                                href={project.githubUrl}
                                className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-600/80 transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`View ${project.title} source code`}
                              >
                                <Github className="w-5 h-5" />
                              </motion.a>
                            )}
                            <motion.a
                              href={project.liveUrl}
                              className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-600/80 transition-colors duration-200"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`View ${project.title} live demo`}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div
                  className="sm:w-1/2 space-y-4 sm:space-y-6 ml-12 sm:ml-0 pr-4 sm:pr-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Date */}
                  <div className="flex items-center space-x-2 text-purple-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.date}</span>
                  </div>

                  {/* Title */}
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 max-w-full">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 sm:px-3 bg-gray-800/50 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-700/50 flex-shrink-0"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full">
                    <Link href={`/projects/${project.slug}`}>
                      <motion.div
                        className="inline-flex items-center justify-center space-x-2 px-4 py-3 sm:px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base touch-manipulation w-full sm:w-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Learn More</span>
                      </motion.div>
                    </Link>
                    
                    <motion.a
                      href={project.liveUrl}
                      className="inline-flex items-center justify-center space-x-2 px-4 py-3 sm:px-6 bg-gray-800/50 text-gray-300 rounded-lg font-medium hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200 text-sm sm:text-base touch-manipulation w-full sm:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </motion.a>
                    
                    {project.githubUrl !== "-" && (
                      <motion.a
                        href={project.githubUrl}
                        className="inline-flex items-center justify-center space-x-2 px-4 py-3 sm:px-6 bg-gray-800/50 text-gray-300 rounded-lg font-medium hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200 text-sm sm:text-base touch-manipulation w-full sm:w-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;