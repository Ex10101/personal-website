'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Palette, 
  Languages
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML", level: 98 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Server,
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "RESTful API", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 80 },
        { name: "Supabase", level: 85 }
      ]
    },
    {
      title: "Design & Tools",
      icon: Palette,
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "Figma", level: 88 },
        { name: "Photoshop", level: 85 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 }
      ]
    }
  ];

  const languages = [
    { name: "Russian", level: "C2", proficiency: 100 },
    { name: "English", level: "C1", proficiency: 90 },
    { name: "Slovak", level: "B2", proficiency: 75 }
  ];

  return (
    <section id="skills" className="relative py-12 lg:py-16 bg-gradient-to-t from-black/50 via-gray-800/50 to-gray-900/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-600/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-600/30">
              My Skills
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            className="text-base text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences and scalable solutions.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-gray-600/50 hover:-translate-y-1 transition-all duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages Section */}
        <motion.div
          className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
                      <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                <Languages className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Languages</h3>
            <p className="text-sm text-gray-300">Multilingual communication skills</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                className="text-center group hover:-translate-y-1 transition-transform duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30 group-hover:border-gray-500/50 transition-all duration-300">
                  <h4 className="text-base font-semibold text-white mb-2">{language.name}</h4>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-xs font-medium text-purple-400 bg-purple-400/20 px-2 py-1 rounded-full">
                      {language.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-600/50 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.proficiency}%` }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.5 + index * 0.2,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;