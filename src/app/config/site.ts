export const siteConfig = {
  name: "Taki Eddine Rami",
  shortName: "TER",
  tabTitle: "Taki | Web-Dev",
  title: "Taki Eddine Rami — Full-Stack Web Developer",
  description:
    "Full-stack web developer building high-performance websites for businesses worldwide. Custom React, Next.js, and TypeScript solutions with SEO and performance built in.",
  url: import.meta.env.VITE_SITE_URL ?? "https://takirami.dev",
  locale: "en_US",
  email: "takierami.dev@gmail.com",
  githubUsername: "takirami",
  twitterHandle: "@takirami",
  ogImage: "/og-image.png",
  calendlyUrl: "https://calendly.com/voiceharborai/30min",
} as const;

export const routes = [
  { path: "/", title: "Home", description: siteConfig.description },
  {
    path: "/about",
    title: "About",
    description:
      "Learn about Taki Eddine Rami — full-stack developer with 6+ years of experience building modern web applications.",
  },
  {
    path: "/services",
    title: "Services & Pricing",
    description:
      "Web development services from landing pages to full-stack applications. Transparent pricing starting at $399.",
  },
  {
    path: "/projects",
    title: "Projects",
    description:
      "Portfolio of client websites and web applications — law firms, healthcare, SaaS, HVAC, and more.",
  },
  {
    path: "/experience",
    title: "Experience",
    description:
      "Professional experience, education, and certifications in full-stack web development.",
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Get in touch to discuss your website project. Available for freelance and contract work worldwide.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description: "Privacy policy for takirami.dev — how we collect and handle your data.",
  },
] as const;
