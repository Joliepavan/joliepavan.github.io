'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  Briefcase,
  Layers,
  Send,
  ExternalLink,
  Code2,
  Terminal,
  Cpu
} from 'lucide-react';
import {
  Locale,
  personalInfo,
  aboutData,
  resumeData,
  projectsData,
  contactData
} from '@/data/portfolio';

type TabKey = 'about' | 'resume' | 'projects' | 'contact';

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
  const [locale, setLocale] = useState<Locale>('pt');
  const [activeTab, setActiveTab] = useState<TabKey>('about');
  const [copied, setCopied] = useState(false);

  const tabs: { key: TabKey; label: { pt: string; en: string }; icon: React.ReactNode }[] = [
    { key: 'about', label: { pt: 'Sobre', en: 'About' }, icon: <Sparkles className="w-4 h-4" /> },
    { key: 'resume', label: { pt: 'Currículo', en: 'Resume' }, icon: <Briefcase className="w-4 h-4" /> },
    { key: 'projects', label: { pt: 'Projetos', en: 'Projects' }, icon: <Layers className="w-4 h-4" /> },
    { key: 'contact', label: { pt: 'Contato', en: 'Contact Me' }, icon: <Send className="w-4 h-4" /> },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#0b0f19] selection:bg-[#4338ca]/10 selection:text-[#4338ca] pb-24">
      
      {/* Top Bar with Glass Language Toggle */}
      <div className="max-w-3xl mx-auto px-4 pt-6 sm:pt-10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{personalInfo.status[locale]}</span>
        </div>

        {/* Glass Language Toggle */}
        <div className="glass-pill p-1 rounded-full shadow-sm flex items-center gap-1 border border-zinc-200/80">
          <button
            onClick={() => setLocale('pt')}
            className={`relative px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
              locale === 'pt' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-700'
            }`}
          >
            {locale === 'pt' && (
              <motion.div
                layoutId="langPill"
                className="absolute inset-0 bg-white rounded-full shadow-sm"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <span className="relative z-10">PT</span>
          </button>

          <button
            onClick={() => setLocale('en')}
            className={`relative px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
              locale === 'en' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-700'
            }`}
          >
            {locale === 'en' && (
              <motion.div
                layoutId="langPill"
                className="absolute inset-0 bg-white rounded-full shadow-sm"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <span className="relative z-10">EN</span>
          </button>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 pt-6 space-y-6">
        
        {/* PROFILE HEADER CARD (Estilo Tabfolio) */}
        <header className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Monogram Avatar with Tabfolio subtle styling */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/60 border border-indigo-200/60 flex items-center justify-center text-indigo-700 font-bold text-xl tracking-tight shadow-sm">
                JP
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                    {personalInfo.name}
                  </h1>
                </div>
                <p className="text-sm font-medium text-zinc-500">
                  {personalInfo.role[locale]}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-all shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 text-zinc-600 hover:text-sky-600 hover:bg-zinc-50 transition-all shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs flex items-center gap-2 transition-all shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (locale === 'pt' ? 'Copiado!' : 'Copied!') : (locale === 'pt' ? 'Copiar Email' : 'Copy Email')}</span>
              </button>
            </div>
          </div>

          <p className="text-sm text-zinc-600 leading-relaxed pt-1">
            {personalInfo.tagline[locale]}
          </p>
        </header>

        {/* SEGMENTED TAB NAVIGATION (Order: About, Resume, Projects, Contact Me) */}
        <nav className="bg-zinc-200/60 p-1.5 rounded-2xl border border-zinc-200 flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                  isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-zinc-200/60"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.icon}
                  {tab.label[locale]}
                </span>
              </button>
            );
          })}
        </nav>

        {/* TAB CONTENT WITH ANIMATION */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-sm min-h-[460px]">
          <AnimatePresence mode="wait">
            
            {/* 1. ABOUT TAB */}
            {activeTab === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                    {aboutData.greeting[locale]}
                  </h2>
                  <p className="text-sm sm:text-base font-medium text-zinc-700 leading-relaxed">
                    {aboutData.headline[locale]}
                  </p>
                </div>

                <div className="space-y-4 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-6">
                  {aboutData.paragraphs.map((p, idx) => (
                    <p key={idx}>{p[locale]}</p>
                  ))}
                </div>

                {/* What I'm into right now */}
                <div className="space-y-3 pt-2 border-t border-zinc-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {aboutData.interestsTitle[locale]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.interests.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium bg-zinc-50 border border-zinc-200/80 text-zinc-700 rounded-lg hover:border-zinc-300 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* The values behind my work */}
                <div className="space-y-4 pt-2 border-t border-zinc-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {aboutData.valuesTitle[locale]}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {aboutData.values.map((val, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-zinc-50/70 border border-zinc-200/70 space-y-1.5"
                      >
                        <h4 className="text-sm font-bold text-zinc-900">
                          {val.title[locale]}
                        </h4>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                          {val.desc[locale]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. RESUME TAB */}
            {activeTab === 'resume' && (
              <motion.div
                key="resume"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Experiences */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {resumeData.experienceTitle[locale]}
                  </h3>

                  <div className="space-y-4">
                    {resumeData.experiences.map((exp, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-200/70 space-y-3 hover:border-zinc-300 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-zinc-900">
                              {exp.role[locale]}
                            </h4>
                            {exp.tag && (
                              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                                {exp.tag}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono text-zinc-500">
                            {exp.period[locale]}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <span className="font-medium text-zinc-700">{exp.company}</span>
                          {exp.location && <span>• {exp.location}</span>}
                        </div>

                        <ul className="space-y-1.5 pt-1 text-xs text-zinc-600 list-disc list-inside">
                          {exp.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">
                              {b[locale]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-3 pt-2 border-t border-zinc-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {resumeData.educationTitle[locale]}
                  </h3>

                  {resumeData.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-200/70 space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-sm font-bold text-zinc-900">
                          {edu.degree[locale]}
                        </h4>
                        <span className="text-xs font-mono text-zinc-500">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-zinc-700">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {edu.details[locale]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tools & Technologies */}
                <div className="space-y-3 pt-2 border-t border-zinc-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {resumeData.toolsTitle[locale]}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {resumeData.tools.map((cat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-zinc-50/70 border border-zinc-200/70 space-y-2.5"
                      >
                        <h4 className="text-xs font-bold text-zinc-800">
                          {cat.category[locale]}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.items.map((tool, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 text-[11px] font-medium bg-white border border-zinc-200 text-zinc-700 rounded-md shadow-2xs"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. PROJECTS TAB */}
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="group p-5 sm:p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-medium text-zinc-400">
                          {project.year}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200/50">
                          {project.status[locale]}
                        </span>
                      </div>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-400 group-hover:text-zinc-900 transition-colors p-1"
                          title="GitHub"
                        >
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs font-medium text-zinc-500 mt-0.5">
                        {project.tagline[locale]}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {project.description[locale]}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono text-zinc-600 rounded bg-white border border-zinc-200/80 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 4. CONTACT ME TAB */}
            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                    {contactData.headline[locale]}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {contactData.subheadline[locale]}
                  </p>
                </div>

                {/* Email Direct Action Card */}
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Email
                    </span>
                    <p className="text-base font-bold text-zinc-900 font-mono">
                      {contactData.email}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyEmail}
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-200 text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? (locale === 'pt' ? 'Copiado!' : 'Copied!') : (locale === 'pt' ? 'Copiar' : 'Copy')}</span>
                    </button>

                    <a
                      href={`mailto:${contactData.email}`}
                      className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{locale === 'pt' ? 'Enviar Mensagem' : 'Send Message'}</span>
                    </a>
                  </div>
                </div>

                {/* Social Networks Grid */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {locale === 'pt' ? 'Redes & Conexões' : 'Social & Connect'}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 rounded-2xl bg-zinc-50/70 border border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                          <GithubIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-900">GitHub</p>
                          <p className="text-xs text-zinc-500">github.com/Joliepavan</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 rounded-2xl bg-zinc-50/70 border border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white border border-zinc-200 text-sky-600 shadow-2xs">
                          <LinkedinIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-900">LinkedIn</p>
                          <p className="text-xs text-zinc-500">linkedin.com/in/jolielopes</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* FOOTER */}
        <footer className="text-center text-xs text-zinc-400 py-6 space-y-1">
          <p>© 2026 Jolie Lopes Pavan • Goiânia, Brasil</p>
          <p className="text-[11px] text-zinc-400">
            {locale === 'pt' ? 'Inspirado na arquitetura limpa de tabfolio' : 'Inspired by the clean architecture of tabfolio'}
          </p>
        </footer>

      </main>
    </div>
  );
}
