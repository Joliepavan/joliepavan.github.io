'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, ArrowUpRight, Brain, Code2, MapPin } from 'lucide-react';
import { personalInfo, projectsData, experiencesData } from '@/data/portfolio';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-300 font-sans relative overflow-hidden">
      
      {/* Luz ambiente / Background Radial Gradient estilo Bryan Szero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Floating Header com vidro fosco */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <nav className="flex items-center justify-between px-6 py-3 rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/10 shadow-2xl">
          <a href="#" className="font-bold tracking-tight text-sm text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            jolie.dev
          </a>
          <div className="flex items-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
            <a href="#experience" className="hover:text-white transition-colors">Trajetória</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-sky-400 transition-colors border border-white/10"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-36 pb-24 space-y-24">
        
        {/* HERO SECTION / SOBRE */}
        <section id="about" className="space-y-6 pt-8 scroll-mt-36">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {personalInfo.role}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Construindo soluções com <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-sky-400">código limpo</span> e Inteligência Artificial.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-2 text-xs font-mono text-zinc-500"
          >
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            <span>{personalInfo.location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg shadow-white/5"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" /> LinkedIn
            </a>
            <a
              href={personalInfo.socialLinks.email}
              className="px-5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </motion.div>
        </section>

        {/* BENTO GRID DE PROJETOS */}
        <section id="projects" className="space-y-8 scroll-mt-28">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Code2 className="w-6 h-6 text-indigo-400" />
              Projetos em Destaque
            </h2>
            <p className="text-zinc-400 text-sm">Laboratório de ideias, plataformas e ferramentas abertas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`group relative p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-500/5 ${project.colSpan || ''}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-indigo-400 font-medium px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                      {project.status}
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 group-hover:text-white transition-colors"
                        title="Ver no GitHub"
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium mt-0.5">{project.tagline}</p>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 rounded bg-white/5 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRAJETÓRIA E ATUAÇÃO */}
        <section id="experience" className="space-y-8 scroll-mt-28">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" />
              Trajetória & Atuação
            </h2>
            <p className="text-zinc-400 text-sm">Pesquisa acadêmica, liderança comunitária e desenvolvimento público.</p>
          </div>

          <div className="space-y-4">
            {experiencesData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/15 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    {exp.badge && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-400">{exp.company}</p>
                  <p className="text-xs text-zinc-500 pt-1">{exp.description}</p>
                </div>
                <div className="text-xs font-mono text-zinc-500 whitespace-nowrap">
                  {exp.period}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Jolie Lopes Pavan. Goiânia, Brasil.</p>
          <div className="flex items-center gap-4">
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a>
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
            <a href={personalInfo.socialLinks.email} className="hover:text-zinc-300 transition-colors">Contato</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
