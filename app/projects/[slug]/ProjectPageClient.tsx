'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, ExternalLink, Github, Clock, Users, Star, Expand } from 'lucide-react';
import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Project {
  id: number;
  title: string;
  slug: string;
  date: string;
  duration: string;
  team: string;
  status: string;
  image: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure proper initialization
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const slides = project.images.map((image) => ({
    src: image,
    alt: project.title,
  }));

  return (
    <main className="min-h-screen bg-gray-900 relative bg-grid-white/[0.02] bg-[size:60px_60px]">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-black/70 via-gray-900/40 to-gray-900/30 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -right-16 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-16 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>
            </motion.div>

            {/* Project Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-600/30">
                  {project.status}
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {project.shortDescription}
              </motion.p>

              {/* Project Meta Info */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>{project.team}</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.a
                  href={project.liveUrl}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Demo</span>
                </motion.a>
                
                {project.githubUrl !== "-" && (
                  <motion.a
                    href={project.githubUrl}
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800/50 text-gray-300 rounded-lg font-medium hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source</span>
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Project Images Gallery */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
                Project <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Gallery</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="group relative cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/50">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Expand Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                        <Expand className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Counter */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1} / {project.images.length}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-t from-gray-900/50 via-gray-900/50 to-gray-800/50 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    About This <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Project</span>
                  </h2>
                  <div className="prose prose-gray prose-lg max-w-none">
                    {project.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        viewport={{ once: true, margin: "-50px", amount: 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <Star className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Challenges & Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                  >
                    <h3 className="text-lg font-bold text-white mb-3">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-gray-300 leading-relaxed">
                          • {challenge}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                  >
                    <h3 className="text-lg font-bold text-white mb-3">Key Learnings</h3>
                    <ul className="space-y-2">
                      {project.learnings.map((learning, index) => (
                        <li key={index} className="text-gray-300 leading-relaxed">
                          • {learning}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30"
                >
                  <h3 className="text-lg font-bold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30"
                >
                  <h3 className="text-lg font-bold text-white mb-3">Project Info</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Completed:</span>
                      <span className="text-white">{project.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Team:</span>
                      <span className="text-white">{project.team}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className="text-green-400">{project.status}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Gallery */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "contain",
        }}
      />
    </main>
  );
}