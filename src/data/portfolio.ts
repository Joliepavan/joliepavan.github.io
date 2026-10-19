export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  featured: boolean;
  status: 'Em Desenvolvimento' | 'Concluído' | 'Ativo';
  githubUrl?: string;
  liveUrl?: string;
  colSpan?: string; // Para layout estilo Bento Grid (ex: 'md:col-span-2')
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  badge?: string;
}

export const personalInfo = {
  name: "Jolie Lopes Pavan",
  role: "Software Engineering Student @ UFG",
  bio: "Desenvolvedora de Software e Pesquisadora em IA Agêntica e Small Language Models. Apaixonada por criar interfaces modernas, código limpo e arquiteturas eficientes.",
  location: "Goiânia, GO - Brasil",
  availableForWork: true,
  socialLinks: {
    github: "https://github.com/Joliepavan",
    linkedin: "https://linkedin.com/in/jolielopes",
    email: "mailto:jolie@discente.ufg.br"
  }
};

export const projectsData: Project[] = [
  {
    id: "codie",
    title: "Codie",
    tagline: "O 'Wordle / Conexo' para devs com avaliação via IA",
    description: "Jogo de adivinhação de código em inglês com análise sintática, avaliação de respostas via Gemini 2.0 Flash API e geração de badges dinâmicos em SVG para o README do GitHub.",
    tags: ["Next.js", "Tailwind", "Gemini API", "Supabase", "Shiki"],
    featured: true,
    status: "Em Desenvolvimento",
    githubUrl: "https://github.com/Joliepavan/codie",
    colSpan: "md:col-span-2"
  },
  {
    id: "mirrorcheck",
    title: "MirrorCheck",
    tagline: "Treinador de oratória e postura em inglês",
    description: "Plataforma Web e App Mobile com visão computacional para análise de postura, contato visual (MediaPipe) e ritmo de fala (WPM) em apresentações de pitchs.",
    tags: ["React Native (Expo)", "Next.js", "MediaPipe", "TensorFlow.js"],
    featured: true,
    status: "Em Desenvolvimento",
    githubUrl: "https://github.com/Joliepavan/mirrorcheck",
    colSpan: "md:col-span-1"
  },
  {
    id: "tokenizador",
    title: "Tokenizador Comparativo",
    tagline: "Análise visual de subword tokenization",
    description: "Ferramenta client-side via WebAssembly que compara a eficiência de tokenização (Tiktoken, Llama, DeepSeek) entre o inglês e outros idiomas em tempo real.",
    tags: ["Next.js", "WebAssembly", "Tiktoken", "Recharts"],
    featured: true,
    status: "Em Desenvolvimento",
    githubUrl: "https://github.com/Joliepavan/multilingual-tokenizer",
    colSpan: "md:col-span-1"
  },
  {
    id: "sidcc",
    title: "SIDCC",
    tagline: "Dados do Câncer de Colo do Útero",
    description: "Arquitetura e banco de dados relacional voltado para rastreamento epidemiológico e centralização de dados de saúde pública.",
    tags: ["PostgreSQL", "Node.js", "React", "Raw SQL"],
    featured: false,
    status: "Concluído",
    githubUrl: "https://github.com/Joliepavan/sidcc",
    colSpan: "md:col-span-1"
  },
  {
    id: "kroma",
    title: "Kroma Telemetry",
    tagline: "Telemetria para bioreatores",
    description: "Sistema de monitoramento e persistência de dados de sensores para bioreatores com foco em baixa latência e integridade.",
    tags: ["PostgreSQL", "FastAPI", "Python", "TimeSeries"],
    featured: false,
    status: "Concluído",
    githubUrl: "https://github.com/Joliepavan/Kroma",
    colSpan: "md:col-span-1"
  }
];

export const experiencesData: Experience[] = [
  {
    role: "Pesquisadora em IA Agêntica",
    company: "CEIA - Centro de Excelência em Inteligência Artificial",
    period: "2026 - Presente",
    description: "Pesquisa aplicada em Small Language Models (SLMs), fine-tuning e arquiteturas de agentes autônomos.",
    badge: "Pesquisa & IA"
  },
  {
    role: "Google Student Ambassador",
    company: "Google / UFG",
    period: "2026 - Presente",
    description: "Liderança de iniciativas comunitárias e tecnológicas representando a UFG no programa de embaixadores da Google.",
    badge: "Liderança"
  },
  {
    role: "Desenvolvedora de Software",
    company: "Secretaria-Geral de Governo de Goiás (SGG-GO)",
    period: "2026 - Presente",
    description: "Desenvolvimento de sistemas corporativos e soluções para a administração pública do Estado de Goiás."
  },
  {
    role: "Graduação em Engenharia de Software",
    company: "Universidade Federal de Goiás (UFG)",
    period: "4º Semestre (2026)",
    description: "Desenvolvimento de projetos acadêmicos, participação em maratonas de programação e pesquisa."
  }
];
