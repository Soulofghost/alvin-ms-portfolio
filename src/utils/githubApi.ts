export interface GithubStats {
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  bio: string;
  location: string;
  hireable: boolean;
  repos: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
  }[];
}

export async function fetchGithubData(username: string = 'Soulofghost'): Promise<GithubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
    ]);

    if (!userRes.ok) {
      throw new Error(`GitHub user fetch error: ${userRes.statusText}`);
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    return {
      publicRepos: userData.public_repos || 25,
      followers: userData.followers || 12,
      following: userData.following || 18,
      avatarUrl: userData.avatar_url || '/profile.jpg',
      bio: userData.bio || 'Computer Science & AI Student | Java & Full Stack Developer',
      location: userData.location || 'Kerala, India',
      hireable: userData.hireable ?? true,
      repos: Array.isArray(reposData) ? reposData.map((r: any) => ({
        id: r.id,
        name: r.name,
        description: r.description || 'Repository by Alvin MS',
        html_url: r.html_url,
        stargazers_count: r.stargazers_count || 0,
        forks_count: r.forks_count || 0,
        language: r.language || 'Java / TypeScript',
        updated_at: new Date(r.updated_at).toLocaleDateString()
      })) : []
    };
  } catch (error) {
    console.warn("Using fallback GitHub data due to API limits/network:", error);
    return {
      publicRepos: 25,
      followers: 18,
      following: 22,
      avatarUrl: '/profile.jpg',
      bio: 'Computer Science & AI Student | Java & Full Stack Developer',
      location: 'Kerala, India',
      hireable: true,
      repos: [
        {
          id: 1,
          name: 'smart-disaster-management',
          description: 'Java Spring Boot & MySQL platform for disaster emergency alerts & relief camp mapping.',
          html_url: 'https://github.com/Soulofghost/smart-disaster-management',
          stargazers_count: 8,
          forks_count: 3,
          language: 'Java',
          updated_at: '2026-08-01'
        },
        {
          id: 2,
          name: 'civic-issue-reporting',
          description: 'React & Supabase citizen engagement application with GPS geolocation tracking.',
          html_url: 'https://github.com/Soulofghost/civic-issue-reporting',
          stargazers_count: 5,
          forks_count: 2,
          language: 'TypeScript',
          updated_at: '2026-07-28'
        },
        {
          id: 3,
          name: 'ai-api-platform',
          description: 'Full stack Next.js & Node.js AI API marketplace & token governance dashboard.',
          html_url: 'https://github.com/Soulofghost/ai-api-platform',
          stargazers_count: 12,
          forks_count: 4,
          language: 'TypeScript',
          updated_at: '2026-07-20'
        }
      ]
    };
  }
}