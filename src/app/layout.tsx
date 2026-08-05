import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Alvin MS | Computer Science & AI Student, Java & Full Stack Developer',
  description:
    'Official portfolio of Alvin MS — Computer Science & Artificial Intelligence student, Java & Spring Boot developer, Full Stack engineer, and Entrepreneur based in Kerala, India. Building intelligent software and digital experiences.',
  keywords: [
    'Alvin MS',
    'Alvin MS Portfolio',
    'Computer Science Student',
    'Artificial Intelligence Engineer',
    'Java Developer',
    'Spring Boot Developer',
    'Full Stack Developer',
    'Kerala Developer',
    'Next.js Portfolio',
    'Soulofghost'
  ],
  authors: [{ name: 'Alvin MS', url: 'https://github.com/Soulofghost' }],
  openGraph: {
    title: 'Alvin MS | Computer Science & AI Student | Portfolio',
    description: 'Building Intelligent Software, AI Solutions, and Modern Digital Experiences.',
    url: 'https://alvinms.vercel.app',
    siteName: 'Alvin MS Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Alvin MS Profile Picture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvin MS | CS & AI Student | Java Developer',
    description: 'Building Intelligent Software, AI Solutions, and Modern Digital Experiences.',
    images: ['/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-[#030712] text-gray-100 antialiased selection:bg-purple-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}