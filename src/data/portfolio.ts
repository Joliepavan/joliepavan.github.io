export type Locale = 'pt' | 'en';

export interface LocalizedString {
  pt: string;
  en: string;
}

export interface ValueCard {
  title: LocalizedString;
  desc: LocalizedString;
}

export interface ExperienceItem {
  role: LocalizedString;
  company: string;
  period: LocalizedString;
  location?: string;
  tag?: string;
  bullets: LocalizedString[];
}

export interface EducationItem {
  degree: LocalizedString;
  institution: string;
  period: string;
  details: LocalizedString;
}

export interface ToolCategory {
  category: LocalizedString;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: LocalizedString;
  description: LocalizedString;
  year: string;
  status: LocalizedString;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const personalInfo = {
  name: "Jolie Lopes Pavan",
  handle: "@joliepavan",
  role: {
    pt: "Estudante de Engenharia de Software @ UFG & Pesquisadora em IA",
    en: "Software Engineering Student @ UFG & AI Researcher"
  },
  location: "Goiânia, GO - Brasil",
  status: {
    pt: "Disponível para novos projetos & pesquisa",
    en: "Available for projects & research"
  },
  tagline: {
    pt: "Construindo soluções com foco em sistemas limpos, Small Language Models e interfaces humanas.",
    en: "Building solutions focused on clean systems, Small Language Models, and human-centered interfaces."
  },
  socialLinks: {
    github: "https://github.com/Joliepavan",
    linkedin: "https://linkedin.com/in/jolielopes",
    email: "jolie@discente.ufg.br"
  }
};

export const aboutData = {
  greeting: {
    pt: "Olá, me chamo Jolie. 👋",
    en: "Hi, I'm Jolie. 👋"
  },
  headline: {
    pt: "Desenvolvedora de software e pesquisadora apaixonada pela intersecção entre algoritmos rigorosos e inteligência artificial prática.",
    en: "Software developer and researcher passionate about the intersection of rigorous algorithms and practical AI."
  },
  paragraphs: [
    {
      pt: "Atualmente curso o 4º período de Engenharia de Software na Universidade Federal de Goiás (UFG). Atuo como pesquisadora no CEIA (Centro de Excelência em Inteligência Artificial), onde investigo Small Language Models (SLMs), fine-tuning supervisionado (SFT) e orquestração de múltiplos agentes autônomos.",
      en: "Currently in my 4th semester of Software Engineering at Universidade Federal de Goiás (UFG). I work as an AI Researcher at CEIA (Center of Excellence in Artificial Intelligence), investigating Small Language Models (SLMs), supervised fine-tuning (SFT), and multi-agent orchestration."
    },
    {
      pt: "Também atuo como Desenvolvedora de Software na Secretaria-Geral de Governo de Goiás (SGG-GO) e represento a comunidade acadêmica como Google Student Ambassador, fomentando eventos técnicos e compartilhamento de conhecimento.",
      en: "I also work as a Software Developer at the General Secretariat of the Government of Goiás (SGG-GO) and represent the academic community as a Google Student Ambassador, organizing tech workshops and knowledge sharing."
    },
    {
      pt: "Acredito na clareza estrutural antes da estética: remover ruídos desnecessários, criar arquiteturas sustentáveis e desenvolver código que resolva problemas reais de forma elegante e escalável.",
      en: "I believe in structural clarity before decoration: eliminating unnecessary noise, building sustainable architectures, and crafting code that solves real problems with elegance and scalability."
    }
  ],
  interestsTitle: {
    pt: "O que estou explorando agora",
    en: "What I'm into right now"
  },
  interests: [
    "Small Language Models (SLMs)",
    "Agentic AI & Multi-Agent Systems",
    "Clean Code & Domain-Driven Design",
    "WebAssembly & Client-side Compute",
    "C / C++ & Low-Level Foundations",
    "Next.js, TypeScript & Modern UI"
  ],
  valuesTitle: {
    pt: "Princípios que guiam meu trabalho",
    en: "The values behind my work"
  },
  values: [
    {
      title: { pt: "Rigor & Arquitetura", en: "Rigor & Architecture" },
      desc: {
        pt: "Priorizo modularidade, tipagem estrita e separação de responsabilidades para sistemas que duram.",
        en: "Prioritizing modularity, strict typing, and separation of concerns for systems built to last."
      }
    },
    {
      title: { pt: "Curiosidade Científica", en: "Scientific Curiosity" },
      desc: {
        pt: "Investigação constante das fronteiras de modelos de linguagem, benchmarks e técnicas de otimização.",
        en: "Constantly exploring the frontiers of language models, benchmarks, and optimization techniques."
      }
    },
    {
      title: { pt: "Adaptabilidade", en: "Adaptability" },
      desc: {
        pt: "Fluência para transitar entre sistemas de baixo nível (C/C++) e aplicações web modernas de ponta a ponta.",
        en: "Ability to fluidly navigate low-level systems (C/C++) and end-to-end modern web applications."
      }
    },
    {
      title: { pt: "Impacto Real", en: "Real-World Impact" },
      desc: {
        pt: "Tecnologia voltada para solucionar problemas concretos na gestão pública e na comunidade acadêmica.",
        en: "Technology crafted to solve concrete challenges in public administration and academia."
      }
    }
  ]
};

export const resumeData = {
  experienceTitle: {
    pt: "Experiência Profissional",
    en: "Work Experience"
  },
  experiences: [
    {
      role: { pt: "Pesquisadora em IA Agêntica", en: "Agentic AI Researcher" },
      company: "CEIA - Centro de Excelência em Inteligência Artificial",
      period: { pt: "2026 - Presente", en: "2026 - Present" },
      location: "Goiânia, GO",
      tag: "Pesquisa & IA",
      bullets: [
        {
          pt: "Pesquisa e experimentação com Small Language Models (SLMs), fine-tuning supervisionado (SFT) e técnicas de alinhamento.",
          en: "Research and benchmarking of Small Language Models (SLMs), supervised fine-tuning (SFT), and alignment methods."
        },
        {
          pt: "Desenvolvimento de pipelines de avaliação e frameworks para sistemas multiagentes autônomos.",
          en: "Developing automated evaluation pipelines and frameworks for autonomous multi-agent systems."
        }
      ]
    },
    {
      role: { pt: "Google Student Ambassador", en: "Google Student Ambassador" },
      company: "Google / UFG",
      period: { pt: "2026 - Presente", en: "2026 - Present" },
      location: "UFG",
      tag: "Liderança",
      bullets: [
        {
          pt: "Representação da UFG perante iniciativas da Google, conduzindo workshops técnicos, maratonas e estudos de IA.",
          en: "Representing UFG in Google initiatives, leading technical workshops, hackathons, and AI study sessions."
        }
      ]
    },
    {
      role: { pt: "Desenvolvedora de Software", en: "Software Developer" },
      company: "Secretaria-Geral de Governo de Goiás (SGG-GO)",
      period: { pt: "2026 - Presente", en: "2026 - Present" },
      location: "Goiânia, GO",
      bullets: [
        {
          pt: "Desenvolvimento e manutenção de sistemas corporativos para modernização da administração pública do Estado de Goiás.",
          en: "Developing and maintaining enterprise systems to modernize public administration workflows for the State of Goiás."
        }
      ]
    }
  ],
  educationTitle: {
    pt: "Formação Acadêmica",
    en: "Education"
  },
  education: [
    {
      degree: {
        pt: "Bacharelado em Engenharia de Software",
        en: "B.S. in Software Engineering"
      },
      institution: "Universidade Federal de Goiás (UFG)",
      period: "2024 - 2028 (4º Semestre)",
      details: {
        pt: "Enfoque em Engenharia de Software, Algoritmos e Estruturas de Dados, Arquitetura de Sistemas e Inteligência Artificial.",
        en: "Focused on Software Engineering, Data Structures & Algorithms, System Architecture, and Artificial Intelligence."
      }
    }
  ],
  toolsTitle: {
    pt: "Tecnologias & Ferramentas",
    en: "Tools & Technologies"
  },
  tools: [
    {
      category: { pt: "Linguagens", en: "Languages" },
      items: ["TypeScript", "JavaScript", "Python", "C", "C++", "Go", "SQL"]
    },
    {
      category: { pt: "Frameworks & Web", en: "Frameworks & Web" },
      items: ["Next.js (App Router)", "React", "Node.js", "FastAPI", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: { pt: "IA, Dados & Infra", en: "AI, Data & Infra" },
      items: ["Gemini API", "PyTorch", "MediaPipe", "PostgreSQL", "Docker", "Git / GitHub Actions"]
    }
  ]
};

export const projectsData: ProjectItem[] = [
  {
    id: "codie",
    title: "Codie",
    tagline: {
      pt: "Jogo de dedução de código avaliado por IA",
      en: "AI-evaluated code deduction game for devs"
    },
    description: {
      pt: "Jogo estilo Wordle/Conexo focado em desenvolvedores com análise sintática em tempo real, avaliação de respostas via Gemini 2.0 Flash API e geração dinâmica de badges SVG para o GitHub.",
      en: "Wordle/Conexo style deduction game for developers with real-time syntax analysis, answer verification via Gemini 2.0 Flash API, and dynamic SVG badges for GitHub profiles."
    },
    year: "2026",
    status: { pt: "Em Desenvolvimento", en: "In Development" },
    tags: ["Next.js", "Gemini API", "Supabase", "Tailwind CSS", "Shiki"],
    githubUrl: "https://github.com/Joliepavan/codie"
  },
  {
    id: "mirrorcheck",
    title: "MirrorCheck",
    tagline: {
      pt: "Treinador de oratória e postura em apresentações",
      en: "Pitch posture and speech delivery trainer"
    },
    description: {
      pt: "Plataforma com visão computacional para análise de postura corporal, contato visual com a câmera (MediaPipe) e ritmo de fala (WPM) para apresentações e pitches em inglês.",
      en: "Computer vision platform analyzing posture, eye contact (MediaPipe), and words-per-minute (WPM) speech pace for technical pitch presentations."
    },
    year: "2026",
    status: { pt: "Em Desenvolvimento", en: "In Development" },
    tags: ["React Native", "Next.js", "MediaPipe", "TensorFlow.js"],
    githubUrl: "https://github.com/Joliepavan/mirrorcheck"
  },
  {
    id: "tokenizador",
    title: "Tokenizador Comparativo",
    tagline: {
      pt: "Análise visual de eficiência de tokenização",
      en: "Visual subword tokenization efficiency benchmark"
    },
    description: {
      pt: "Ferramenta client-side via WebAssembly que compara a eficiência de tokenização (Tiktoken, Llama, DeepSeek) entre o inglês e outros idiomas em tempo real.",
      en: "Client-side WebAssembly tool comparing tokenization efficiency across tokenizers (Tiktoken, Llama, DeepSeek) for multilingual inputs in real time."
    },
    year: "2026",
    status: { pt: "Em Desenvolvimento", en: "In Development" },
    tags: ["WebAssembly", "Next.js", "Tiktoken", "Recharts"],
    githubUrl: "https://github.com/Joliepavan/multilingual-tokenizer"
  },
  {
    id: "sidcc",
    title: "SIDCC",
    tagline: {
      pt: "Plataforma de dados para rastreamento de saúde",
      en: "Health screening and epidemiological data system"
    },
    description: {
      pt: "Arquitetura e banco de dados relacional voltado ao armazenamento, cruzamento e compartilhamento de dados epidemiológicos de rastreamento de câncer de colo de útero.",
      en: "Relational database architecture and platform designed for public health epidemiological tracking and cancer screening data centralization."
    },
    year: "2025",
    status: { pt: "Concluído", en: "Completed" },
    tags: ["PostgreSQL", "Node.js", "React", "Raw SQL"],
    githubUrl: "https://github.com/Joliepavan/sidcc"
  },
  {
    id: "kroma",
    title: "Kroma Telemetry",
    tagline: {
      pt: "Telemetria e persistência para bioreatores",
      en: "Bioreactor telemetry and sensor data persistence"
    },
    description: {
      pt: "Sistema de monitoramento e persistência de dados de sensores para bioreatores laboratoriais com foco em baixa latência e integridade temporal.",
      en: "Monitoring and time-series persistence system for laboratory bioreactor sensors focusing on low latency and data integrity."
    },
    year: "2026",
    status: { pt: "Concluído", en: "Completed" },
    tags: ["FastAPI", "Python", "PostgreSQL", "TimeSeries"],
    githubUrl: "https://github.com/Joliepavan/Kroma"
  }
];

export const contactData = {
  headline: {
    pt: "Vamos conversar?",
    en: "Let's connect."
  },
  subheadline: {
    pt: "Estou sempre aberta a trocar ideias sobre IA, colaborar em projetos de código aberto ou discutir novas oportunidades.",
    en: "I'm always open to discussing AI research, collaborating on open-source projects, or exploring new opportunities."
  },
  email: "jolie@discente.ufg.br",
  location: "Goiânia, GO - Brasil",
  socials: [
    {
      name: "GitHub",
      handle: "github.com/Joliepavan",
      url: "https://github.com/Joliepavan"
    },
    {
      name: "LinkedIn",
      handle: "linkedin.com/in/jolielopes",
      url: "https://linkedin.com/in/jolielopes"
    },
    {
      name: "Email",
      handle: "jolie@discente.ufg.br",
      url: "mailto:jolie@discente.ufg.br"
    }
  ]
};
