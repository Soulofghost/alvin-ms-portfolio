import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCES, EDUCATION, CERTIFICATES } from './portfolioData';

export const AI_KNOWLEDGE = `
System Identity:
You are "AM-AI", the personal AI assistant for Alvin MS's portfolio. You respond in a professional, ultra-friendly, tech-savvy, and sleek tone.

Profile of Alvin MS:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Roles: ${PERSONAL_INFO.roles.join(', ')}
- Tagline: "${PERSONAL_INFO.tagline}"
- Bio: ${PERSONAL_INFO.bio}
- Location: ${PERSONAL_INFO.location}
- Availability: ${PERSONAL_INFO.availability}
- Email: ${PERSONAL_INFO.email}
- GitHub: ${PERSONAL_INFO.githubUrl} (Username: @${PERSONAL_INFO.githubUsername})
- LinkedIn: ${PERSONAL_INFO.linkedinUrl}
- Instagram: ${PERSONAL_INFO.instagramUrl}

Top Skills:
- Java & Spring Boot (Backend enterprise applications, REST APIs, Microservices, Security)
- Artificial Intelligence & Python (Machine learning, neural networks, natural language processing)
- Full Stack Web Development (Next.js, React, TypeScript, Tailwind CSS, HTML/CSS)
- Databases: MySQL, PostgreSQL, MongoDB, Supabase
- Tools: Git, GitHub, VS Code, IntelliJ IDEA, Figma

Featured Projects:
1. Smart Disaster Management System: Java, Spring Boot, MySQL. Enterprise system for emergency SOS alerts, relief camp mapping, volunteer dispatching.
2. Smart Civic Issue Reporting System: React, Supabase. Geolocation GPS issue tracking, complaint workflow management, real-time updates.
3. AI API Platform & Marketplace: Next.js, Node.js, AI Integration. Token usage management, API key governance, AI developer playground.

Experience & Leadership:
- Business Development Partner at TekLearn (2024 - Present): Managing educational tech outreach, strategic partnerships, student workshops, and growth pipelines.
- B.Tech in Computer Science & Artificial Intelligence student at Mar Baselios Christian College of Engineering and Technology (MBCCET), Peermade (2023 - 2027).

Instructions:
- Keep answers informative, polite, concise (2-4 sentences max), and enthusiastic.
- Highlight Alvin's passion for software engineering, AI, Java development, and startup collaborations.
- If asked how to hire or contact Alvin, suggest sending a message through the Contact Form or emailing ${PERSONAL_INFO.email}.
`;

export function generateAiResponse(userMessage: string): string {
  const query = userMessage.toLowerCase();

  if (query.includes('who is') || query.includes('about') || query.includes('background') || query.includes('bio')) {
    return `Alvin MS is a Computer Science & AI student, Java Developer, Full Stack Engineer, and Entrepreneur based in Kerala, India. He builds scalable enterprise backend applications in Spring Boot as well as modern futuristic web applications!`;
  }

  if (query.includes('skill') || query.includes('java') || query.includes('stack') || query.includes('technolog')) {
    return `Alvin specializes in Java & Spring Boot backend development, Python AI integration, React/Next.js full stack engineering, and databases like MySQL, PostgreSQL, and Supabase.`;
  }

  if (query.includes('project') || query.includes('disaster') || query.includes('civic') || query.includes('work')) {
    return `Alvin's key projects include the Smart Disaster Management System (Java Spring Boot + MySQL), Smart Civic Issue Reporting System (React + Supabase), and an AI API Marketplace Platform. You can explore them in the Projects section!`;
  }

  if (query.includes('hire') || query.includes('contact') || query.includes('email') || query.includes('freelance') || query.includes('intern')) {
    return `Alvin is currently available for Internships, Freelance Projects, Collaborations, and Startup Opportunities! You can reach him directly at ${PERSONAL_INFO.email} or use the Contact section on this page.`;
  }

  if (query.includes('education') || query.includes('college') || query.includes('study') || query.includes('degree')) {
    return `Alvin is pursuing his Bachelor of Technology (B.Tech) in Computer Science & Artificial Intelligence at Mar Baselios Christian College of Engineering and Technology (MBCCET), Peermade (2023-2027).`;
  }

  if (query.includes('experience') || query.includes('teklearn') || query.includes('job') || query.includes('work')) {
    return `Alvin currently serves as Business Development Partner at TekLearn, where he drives strategic tech outreach, organizes coding hackathons, and fosters student tech communities.`;
  }

  if (query.includes('resume') || query.includes('cv')) {
    return `You can view and download Alvin's official resume by clicking the "Download Resume" button in the Hero section or pressing Ctrl+K to open the Command Palette!`;
  }

  return `Thanks for asking! Alvin MS is a Computer Science & AI student skilled in Java Spring Boot, Next.js, and Artificial Intelligence. Feel free to explore the interactive sections or send him a direct message via ${PERSONAL_INFO.email}!`;
}