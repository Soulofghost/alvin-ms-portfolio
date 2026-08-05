export interface Project {
  id: string;
  title: string;
  category: 'Java / Backend' | 'Full Stack / React' | 'AI Platform' | 'All';
  description: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; icon: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpaOrScore?: string;
  details: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  badge: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  category: 'Hackathons' | 'Projects' | 'Open Source' | 'Leadership' | 'Business Development';
  date: string;
  description: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
  image: string;
}

export const PERSONAL_INFO = {
  name: "Alvin MS",
  initials: "AM",
  title: "Computer Science & AI Student",
  roles: [
    "Computer Science & AI Student",
    "Java Developer",
    "Full Stack Developer",
    "AI Enthusiast",
    "Entrepreneur"
  ],
  tagline: "Building Intelligent Software, AI Solutions, and Modern Digital Experiences.",
  bio: `I am Alvin MS, a Computer Science & Artificial Intelligence student passionate about software engineering, AI, backend development, and full-stack web applications. I enjoy building scalable software, learning modern technologies, and creating impactful digital solutions that solve real-world problems. My mission is to create software that combines innovation, performance, and exceptional user experiences.`,
  location: "Kerala, India",
  availability: "Available for Internships, Freelance Projects, Collaborations & Startup Opportunities",
  email: "alvinms493@gmail.com",
  githubUsername: "Soulofghost",
  githubUrl: "https://github.com/Soulofghost",
  linkedinUrl: "https://www.linkedin.com/in/alvin-ms-b812a836b",
  instagramUrl: "https://www.instagram.com/alvxnmz._",
  discordUrl: "https://discord.gg/cD6yyBWt",
  whatsappUrl: "https://wa.me/?text=Hi%20Alvin",
  telegramUrl: "https://t.me/alvinms",
  twitterUrl: "https://twitter.com/alvinms",
  facebookUrl: "https://facebook.com/alvinms",
  blogUrl: "#blog",
  stats: {
    projectsCompleted: 15,
    technologiesLearned: 20,
    githubRepositories: 25,
    yearsLearning: 3
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      { name: "Java", level: 92, icon: "SiOpenjdk", highlight: true },
      { name: "Python", level: 88, icon: "SiPython", highlight: true },
      { name: "JavaScript", level: 90, icon: "SiJavascript", highlight: true },
      { name: "SQL", level: 85, icon: "SiPostgresql" }
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", level: 95, icon: "SiHtml5" },
      { name: "CSS3", level: 92, icon: "SiCss3" },
      { name: "Tailwind CSS", level: 94, icon: "SiTailwindcss", highlight: true },
      { name: "React", level: 90, icon: "SiReact", highlight: true },
      { name: "Next.js", level: 88, icon: "SiNextdotjs", highlight: true }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Spring Boot", level: 89, icon: "SiSpringboot", highlight: true },
      { name: "Node.js", level: 85, icon: "SiNodedotjs" },
      { name: "Express", level: 84, icon: "SiExpress" },
      { name: "REST APIs", level: 92, icon: "SiPostman" }
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", level: 90, icon: "SiMysql", highlight: true },
      { name: "PostgreSQL", level: 86, icon: "SiPostgresql" },
      { name: "MongoDB", level: 83, icon: "SiMongodb" },
      { name: "Supabase", level: 88, icon: "SiSupabase" }
    ]
  },
  {
    name: "Tools & OS",
    skills: [
      { name: "Git", level: 91, icon: "SiGit" },
      { name: "GitHub", level: 93, icon: "SiGithub", highlight: true },
      { name: "VS Code", level: 95, icon: "SiVisualstudiocode" },
      { name: "IntelliJ IDEA", level: 92, icon: "SiIntellijidea", highlight: true },
      { name: "Figma", level: 82, icon: "SiFigma" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "disaster-management",
    title: "Smart Disaster Management System",
    category: "Java / Backend",
    description: "Enterprise Java Spring Boot platform for real-time disaster alerts, emergency SOS dispatching, relief camp mapping, and volunteer coordination.",
    fullDescription: "A comprehensive disaster response solution built with Java Spring Boot and MySQL. Features live weather emergency alerts, interactive relief camp maps, citizen incident reporting, volunteer task assignment, and an admin dashboard to handle critical crises efficiently.",
    image: "/projects/disaster-management.jpg",
    techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Leaflet Maps", "Bootstrap / CSS"],
    features: [
      "Emergency SOS Dispatching & Victim Help Request Tracking",
      "Real-time Weather & Disaster Alerts Integration",
      "Interactive Relief Camp Management & Capacity Mapping",
      "Role-Based Access Control for Citizens, Volunteers & Admins"
    ],
    githubUrl: "https://github.com/Soulofghost/smart-disaster-management",
    liveUrl: "https://github.com/Soulofghost/smart-disaster-management",
    featured: true
  },
  {
    id: "civic-issue-reporting",
    title: "Smart Civic Issue Reporting System",
    category: "Full Stack / React",
    description: "Modern citizen engagement application built with React & Supabase featuring GPS location tagging, complaint submission, and status updates.",
    fullDescription: "An intuitive web platform empowering citizens to report public infrastructure issues (potholes, streetlights, waste disposal). Integrates geolocation tagging, image uploads via Supabase Storage, real-time ticket progress updates, and authority management tools.",
    image: "/projects/civic-reporting.jpg",
    techStack: ["React", "Supabase", "Tailwind CSS", "GPS Geolocation", "Framer Motion"],
    features: [
      "GPS Tracking for precise issue geotagging",
      "Real-Time Status updates and push notifications",
      "Complaint lifecycle management dashboard",
      "Supabase Auth and media upload storage"
    ],
    githubUrl: "https://github.com/Soulofghost/civic-issue-reporting",
    liveUrl: "https://github.com/Soulofghost/civic-issue-reporting",
    featured: true
  },
  {
    id: "ai-api-platform",
    title: "AI API Marketplace & Governance Platform",
    category: "AI Platform",
    description: "Full-stack AI API hub providing token usage management, API key generation, model orchestration, and developer marketplace.",
    fullDescription: "A high-performance platform designed for developer AI integration. Allows users to register API keys, monitor request quotas, test machine learning inference endpoints, and process token payments securely.",
    image: "/projects/ai-platform.jpg",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "OpenAI / Claude API", "Stripe"],
    features: [
      "Secure JWT & API Key Authentication",
      "Developer Marketplace for custom AI microservices",
      "Token usage analytics & rate limit management",
      "Interactive API Sandbox and Playground"
    ],
    githubUrl: "https://github.com/Soulofghost/ai-api-platform",
    liveUrl: "https://github.com/Soulofghost/ai-api-platform",
    featured: true
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "java-dev",
    title: "Java & Spring Boot Development",
    description: "Building robust, scalable, enterprise-grade backend applications using Java, Spring Boot, Spring Security, Hibernate, and relational databases.",
    icon: "Code",
    highlights: ["Spring Boot Microservices", "RESTful API Architecture", "Database Optimization", "Enterprise Security Integration"]
  },
  {
    id: "web-dev",
    title: "Modern Web Development",
    description: "Designing and developing fast, high-converting, accessible, and futuristic responsive websites using HTML, CSS, Tailwind CSS, and JavaScript.",
    icon: "Layout",
    highlights: ["Responsive UI/UX", "Glassmorphic Aesthetics", "Ultra Fast Performance", "SEO Optimization"]
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Web Applications",
    description: "End-to-end full stack software development using modern React, Next.js, Node.js, Express, and cloud databases (Supabase, MySQL, MongoDB).",
    icon: "Layers",
    highlights: ["Next.js App Router", "State Management", "Authentication & Auth Systems", "Serverless Integration"]
  },
  {
    id: "ai-solutions",
    title: "AI & ML Solutions Integration",
    description: "Integrating modern Artificial Intelligence, Natural Language Processing, LLMs, and computer vision microservices into modern business workflows.",
    icon: "Cpu",
    highlights: ["LLM & Chatbot Integration", "Prompt Engineering & RAG", "Python AI Microservices", "Automated Intelligence Workflows"]
  },
  {
    id: "backend-dev",
    title: "Backend Engineering",
    description: "Crafting scalable server architectures, caching layers, message queues, and high-concurrency database queries.",
    icon: "Server",
    highlights: ["High Concurrency Design", "Caching with Redis / Memory", "Transactional Integrity", "Log Audit Systems"]
  },
  {
    id: "api-dev",
    title: "API Development & Integration",
    description: "Designing clean, well-documented REST APIs, GraphQL endpoints, and WebSockets for seamless client-server communications.",
    icon: "Webhook",
    highlights: ["Swagger / OpenAPI Docs", "OAuth2 & JWT Security", "Rate Limiting & Throttling", "Third-Party Service Webhooks"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024 - Present",
    role: "Business Development Partner",
    company: "TekLearn",
    description: "Driving strategic partnerships, technology initiatives, educational outreach, and tech event management.",
    achievements: [
      "Spearheaded client acquisition and outreach strategies targeting tech institutes and student communities.",
      "Facilitated technology workshops and collaborative coding hackathons for young engineering talent.",
      "Optimized digital marketing pipelines resulting in a 40% growth in participant engagement."
    ],
    technologies: ["Leadership", "Business Strategy", "Tech Workshops", "Project Management", "Digital Marketing"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Mar Baselios Christian College of Engineering and Technology (MBCCET), Peermade",
    period: "2023 - 2027",
    location: "Kerala, India",
    details: [
      "Specialization in Computer Science & Artificial Intelligence.",
      "Active contributor in student tech societies, hackathons, and software clubs.",
      "Focused research on Intelligent Systems, Java Enterprise Frameworks, and Web AI applications."
    ]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "java-cert",
    title: "Java Full Stack Development",
    issuer: "Oracle / Coursera Tech",
    date: "2024",
    credentialId: "CERT-JAVA-9920",
    verifyUrl: "#",
    badge: "Java Master"
  },
  {
    id: "ai-cert",
    title: "Artificial Intelligence & Neural Networks",
    issuer: "DeepLearning.AI",
    date: "2024",
    credentialId: "CERT-AI-4412",
    verifyUrl: "#",
    badge: "AI Specialist"
  },
  {
    id: "react-cert",
    title: "Advanced Next.js & React Architecture",
    issuer: "Meta Frontend Certification",
    date: "2023",
    credentialId: "CERT-META-7801",
    verifyUrl: "#",
    badge: "Frontend Pro"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Smart Disaster Management Launch",
    category: "Projects",
    date: "2024",
    description: "Built and deployed a full-stack Spring Boot disaster response system with emergency SOS and live map tracking.",
    badge: "Flagship Software"
  },
  {
    title: "TekLearn Business Development Milestone",
    category: "Business Development",
    date: "2024",
    description: "Formed key educational partnerships and tech workshop programs as Business Development Partner.",
    badge: "Growth Leader"
  },
  {
    title: "Open Source Tech Contributions",
    category: "Open Source",
    date: "2023 - Present",
    description: "Maintained 25+ public repositories on GitHub (@Soulofghost) showcasing full-stack and Java implementations.",
    badge: "Open Source Dev"
  },
  {
    title: "AI & Innovation Hackathons",
    category: "Hackathons",
    date: "2024",
    description: "Participated in national level AI coding competitions solving public infrastructure and emergency challenges.",
    badge: "Hackathon Competitor"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rahul Nair",
    role: "Senior Software Architect",
    company: "TechNova Solutions",
    content: "Alvin MS demonstrates an extraordinary understanding of backend Java architecture and modern Next.js frontend design. His ability to build complex, scalable systems with incredible visual flair is unmatched.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    name: "Ananya Sharma",
    role: "Lead Product Designer",
    company: "TekLearn Innovations",
    content: "Working with Alvin at TekLearn has been inspiring. He combines deep technical mastery in AI and Java with entrepreneurial drive and exceptional communication skills.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    name: "Dr. K. V. Mathews",
    role: "Head of Computer Science Department",
    company: "MBCCET Peermade",
    content: "Alvin is a standout Computer Science & AI student. His dedication to building high-impact software like the Smart Disaster Management System reflects his commitment to real-world innovation.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "building-disaster-system-spring-boot",
    title: "Architecting a Real-Time Disaster Management System with Java & Spring Boot",
    excerpt: "How I built an enterprise crisis-management application featuring SOS alerts, live relief camp mapping, and role-based volunteer coordination.",
    date: "August 2026",
    readTime: "6 min read",
    category: "Java & Spring Boot",
    tags: ["Java", "Spring Boot", "MySQL", "Architecture"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
    content: `Building software for emergency response requires absolute reliability, zero downtime, and real-time data flow. In this article, I break down how the Smart Disaster Management System was architected using Java Spring Boot, MySQL, and geospatial mappings.`
  },
  {
    id: "integrating-ai-in-modern-web-apps",
    title: "Integrating AI Agents into Next.js Applications with Token Governance",
    excerpt: "A practical guide on adding intelligent natural language chatbots and machine learning API endpoints to Next.js full-stack projects.",
    date: "July 2026",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Next.js", "TypeScript", "LLM"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    content: `Artificial Intelligence is transforming static web apps into dynamic, context-aware assistants. Here is how you can train custom lightweight AI portfolio bots using structured JSON knowledge frames.`
  },
  {
    id: "mastering-glassmorphism-cyberpunk-ui",
    title: "Crafting Award-Winning Glassmorphism & Cyberpunk UI with Tailwind & Framer Motion",
    excerpt: "Design principles, CSS blur tricks, glowing borders, and Framer Motion micro-interactions that will make your portfolio stand out to recruiters.",
    date: "June 2026",
    readTime: "8 min read",
    category: "UI / UX Design",
    tags: ["Tailwind CSS", "Framer Motion", "UI Design", "Aesthetics"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
    content: `Aesthetics matter. In modern web engineering, a sleek, reactive dark-mode interface with smooth particle trails creates an unforgettable impression.`
  }
];

export interface StartupItem {
  id: string;
  name: string;
  status: string;
  role: string;
  industry: string;
  description: string;
  focusPoints: string[];
  techStack: string[];
  progressLabel: string;
  progressPercentage: number;
}

export const STARTUPS: StartupItem[] = [
  {
    id: "nexauron",
    name: "NEXAURON",
    status: "In Progress",
    role: "Founder",
    industry: "FinTech • AI • Software",
    description: "NEXAURON is an early-stage technology startup focused on building innovative software solutions and AI-powered products. The vision is to develop secure, scalable, and user-centric platforms that simplify complex digital experiences.",
    focusPoints: [
      "Research & Development",
      "Product Architecture",
      "MVP Development",
      "Technology Validation",
      "UI/UX Design"
    ],
    techStack: [
      "Java", "Spring Boot", "React", "Next.js", "Node.js",
      "TypeScript", "MySQL", "PostgreSQL", "Artificial Intelligence", "Cloud Technologies"
    ],
    progressLabel: "MVP Development in Progress",
    progressPercentage: 68
  },
  {
    id: "helix",
    name: "HELIX",
    status: "In Progress",
    role: "Co-Founder / Founder",
    industry: "Technology • AI • Software Solutions",
    description: "HELIX is an early-stage technology company focused on building modern software solutions, intelligent applications, and scalable digital products. The company is currently in the planning and development phase with a strong emphasis on innovation and future-ready technologies.",
    focusPoints: [
      "Product Planning",
      "Software Development",
      "AI Research",
      "Full Stack Development",
      "Future SaaS Products"
    ],
    techStack: [
      "Java", "Python", "React", "Next.js", "Node.js",
      "Spring Boot", "Artificial Intelligence", "Cloud Computing", "API Development"
    ],
    progressLabel: "Product Development in Progress",
    progressPercentage: 54
  }
];

export const VENTURES_STATS = [
  { label: "Startups Building", value: "2", icon: "Rocket" },
  { label: "Active Projects", value: "3+", icon: "Laptop" },
  { label: "Technologies", value: "20+", icon: "Brain" },
  { label: "Continuous Learning", value: "Always", icon: "BookOpen" },
  { label: "Startup Stage", value: "Early Stage", icon: "Lightbulb" },
  { label: "Vision", value: "Building impactful technology products.", icon: "Globe" }
];

export const FOUNDER_VISION = "I believe great technology begins with solving real problems. My mission is to build software and AI-driven products that create meaningful impact while continuously learning, innovating, and growing as an entrepreneur.";

export const STATUS_BADGES = [
  "🟢 Startup Active",
  "🟢 Product Development",
  "🟢 MVP In Progress",
  "🟢 Open to Collaborations",
  "🟢 Available for Internships"
];