import { createContext, useContext, useState } from 'react'

const translations = {
  fr: {
    nav: { about: 'À propos', skills: 'Expertise', work: 'Projets', automation: 'Automatisation', contact: 'Contact' },
    hero: {
      role: 'Développeuse Fullstack',
      based: 'Disponible pour de nouveaux projets',
      line1: 'Je conçois des',
      line2: 'expériences web',
      line3: 'vivantes.',
      sub: "Du front interactif aux architectures backend, je transforme des idées en produits élégants et performants.",
      scroll: 'Défiler pour explorer',
    },
    about: {
      label: 'À propos',
      title: 'Le code comme outil de création',
      p1: "Je suis Fabuola, développeuse fullstack passionnée par l'intersection entre design et ingénierie. J'accompagne startups et entreprises dans la création de produits web et mobiles qui marquent.",
      p2: "Au-delà du développement, j'explore le prompting avancé et l'automatisation de workflows — parce qu'un bon produit, c'est aussi des processus intelligents.",
      stats: [
        { n: '5+', l: "années d'expérience" },
        { n: '30+', l: 'projets livrés' },
        { n: '2', l: 'passions : web & 3D' },
      ],
    },
    skills: {
      label: 'Expertise',
      title: 'Ce que je maîtrise',
      groups: [
        { name: 'Frontend', items: ['React', 'Angular', 'Three.js', 'JavaScript'] },
        { name: 'Mobile', items: ['Ionic', 'Progressive Web Apps', 'Capacitor'] },
        { name: 'Backend', items: ['PHP', 'Node.js', 'API REST', 'MySQL'] },
        { name: 'Automatisation', items: ['N8N', 'Prompt Engineering', 'Intégrations API', 'Workflows'] },
      ],
    },
    work: {
      label: 'Projets',
      title: 'Travaux sélectionnés',
      viewLabel: 'Voir le projet',
      projects: [
        { title: 'Configurateur 3D produit', tags: ['Three.js', 'React'], year: '2025', desc: 'Visualisation 3D temps réel pour personnaliser des produits en ligne.' },
        { title: 'Plateforme e-commerce', tags: ['Angular', 'PHP'], year: '2024', desc: 'Marketplace complète avec paiement, gestion de stock et back-office.' },
        { title: 'Application mobile santé', tags: ['Ionic', 'JavaScript'], year: '2024', desc: 'Suivi patient multiplateforme avec synchronisation hors-ligne.' },
        { title: "Hub d'automatisation", tags: ['N8N', 'APIs'], year: '2025', desc: 'Orchestration de workflows connectant CRM, emails et IA générative.' },
      ],
    },
    automation: {
      label: 'Automatisation',
      title: 'Des workflows qui travaillent pour vous',
      p: "Avec N8N et le prompt engineering, je construis des systèmes qui automatisent les tâches répétitives : synchronisation de données, génération de contenu, notifications intelligentes, intégration d'IA dans vos processus métier.",
      items: [
        { t: 'Prompt Engineering', d: "Conception de prompts précis pour exploiter les LLMs au maximum de leur potentiel." },
        { t: 'Workflows N8N', d: 'Automatisations robustes connectant vos outils : CRM, emails, bases de données, APIs.' },
        { t: 'Intégration IA', d: "Injection d'intelligence artificielle dans vos produits et processus existants." },
      ],
    },
    contact: {
      label: 'Contact',
      title1: 'Travaillons',
      title2: 'ensemble',
      p: "Un projet en tête ? Discutons-en autour d'un café — virtuel ou non.",
      cta: 'Écrivez-moi',
      email: 'hello@fabuola.dev',
      rights: 'Tous droits réservés',
    },
    marquee: ['React', 'Angular', 'Three.js', 'Ionic', 'JavaScript', 'PHP', 'N8N', 'Prompting'],
  },
  en: {
    nav: { about: 'About', skills: 'Expertise', work: 'Work', automation: 'Automation', contact: 'Contact' },
    hero: {
      role: 'Fullstack Developer',
      based: 'Available for new projects',
      line1: 'I craft living',
      line2: 'web experiences',
      line3: 'with code.',
      sub: 'From interactive frontends to backend architectures, I turn ideas into elegant, high-performing products.',
      scroll: 'Scroll to explore',
    },
    about: {
      label: 'About',
      title: 'Code as a creative tool',
      p1: "I'm Fabuola, a fullstack developer passionate about the intersection of design and engineering. I help startups and companies build web and mobile products that leave a mark.",
      p2: "Beyond development, I explore advanced prompting and workflow automation — because a great product also means smart processes.",
      stats: [
        { n: '5+', l: 'years of experience' },
        { n: '30+', l: 'projects delivered' },
        { n: '2', l: 'passions: web & 3D' },
      ],
    },
    skills: {
      label: 'Expertise',
      title: 'What I master',
      groups: [
        { name: 'Frontend', items: ['React', 'Angular', 'Three.js', 'JavaScript'] },
        { name: 'Mobile', items: ['Ionic', 'Progressive Web Apps', 'Capacitor'] },
        { name: 'Backend', items: ['PHP', 'Node.js', 'REST APIs', 'MySQL'] },
        { name: 'Automation', items: ['N8N', 'Prompt Engineering', 'API Integrations', 'Workflows'] },
      ],
    },
    work: {
      label: 'Work',
      title: 'Selected projects',
      viewLabel: 'View project',
      projects: [
        { title: '3D Product Configurator', tags: ['Three.js', 'React'], year: '2025', desc: 'Real-time 3D visualization to customize products online.' },
        { title: 'E-commerce Platform', tags: ['Angular', 'PHP'], year: '2024', desc: 'Full marketplace with payments, inventory and back-office.' },
        { title: 'Health Mobile App', tags: ['Ionic', 'JavaScript'], year: '2024', desc: 'Cross-platform patient tracking with offline sync.' },
        { title: 'Automation Hub', tags: ['N8N', 'APIs'], year: '2025', desc: 'Workflow orchestration connecting CRM, emails and generative AI.' },
      ],
    },
    automation: {
      label: 'Automation',
      title: 'Workflows that work for you',
      p: 'With N8N and prompt engineering, I build systems that automate repetitive tasks: data sync, content generation, smart notifications, and AI integration into your business processes.',
      items: [
        { t: 'Prompt Engineering', d: 'Designing precise prompts to unlock the full potential of LLMs.' },
        { t: 'N8N Workflows', d: 'Robust automations connecting your tools: CRM, emails, databases, APIs.' },
        { t: 'AI Integration', d: 'Injecting artificial intelligence into your existing products and processes.' },
      ],
    },
    contact: {
      label: 'Contact',
      title1: "Let's work",
      title2: 'together',
      p: 'Got a project in mind? Let’s talk about it over coffee — virtual or not.',
      cta: 'Write to me',
      email: 'hello@fabuola.dev',
      rights: 'All rights reserved',
    },
    marquee: ['React', 'Angular', 'Three.js', 'Ionic', 'JavaScript', 'PHP', 'N8N', 'Prompting'],
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
