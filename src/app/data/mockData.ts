import type { 
  Project, 
  Experience, 
  Skill, 
  SocialLink, 
  ProjectOutcome 
} from "../types";

export const profileData = {
  name: "Taki Eddine Rami",
  title: "Full-Stack Web Developer",
  headline: "Building high-performance websites that convert visitors into customers",
  summary: `I specialize in creating modern, fast, and beautiful websites for businesses worldwide. 
    With 6+ years of experience in full-stack development, I combine clean design with powerful 
    functionality to deliver websites that not only look great but drive real business results. 
    From landing pages to complex web applications, I focus on performance, scalability, and 
    user experience that keeps your customers engaged.`,
  location: "Remote • Worldwide",
  email: "takierami.dev@gmail.com",
  phone: "+213554873770",
  phoneSecondary: "+213663104186",
  whatsapp: "https://wa.me/213554873770",
  linkedin: "https://www.linkedin.com/in/taki-eddine-rami-9558062a6/",
  github: "https://github.com/takirami",
  availability: "Open to opportunities",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Whitmore & Rhodes",
    description: "Premium Law Firm for high-stakes legal representation",
    longDescription: `An elegant law firm website for a boutique litigation practice serving corporations and high-net-worth individuals. Emphasizes discretion, experience, and strategic counsel for complex legal matters. Features practice area exploration, attorney profiles, consultation request functionality, and a refined professional aesthetic befitting high-stakes legal representation.`,
    tags: ["React", "Next.js", "Tailwind CSS", "Premium Design"],
    category: "web",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    demo: "https://premium-law-firm-website.netlify.app/",
    featured: true,
    year: 2024,
    technologies: ["React", "Next.js", "Tailwind CSS", "Netlify"],
    achievements: [
      "Elegant boutique law firm branding",
      "Attorney profiles with consultation booking",
      "Premium aesthetic for high-net-worth clientele"
    ]
  },
  {
    id: "2",
    title: "FamilyCare Medical Group",
    description: "Modern Family Medicine Platform with telehealth capabilities",
    longDescription: `A patient-centric healthcare website for a San Francisco family medicine practice combining cutting-edge technology with traditional care values. Features comprehensive service listings for preventive, acute, and pediatric care, provider profiles with credentials, same-day appointment booking, and telehealth options. Highlights 4.9/5 patient satisfaction, 15+ years of service, and HIPAA-compliant privacy standards.`,
    tags: ["Healthcare", "React", "Telehealth", "HIPAA"],
    category: "web",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    demo: "https://next-gen-family-medicine-platform.netlify.app/",
    featured: true,
    year: 2024,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    achievements: [
      "4.9/5 patient satisfaction rating",
      "Same-day appointment and telehealth booking",
      "HIPAA-compliant privacy standards"
    ]
  },
  {
    id: "3",
    title: "Lumora",
    description: "SaaS Infrastructure Platform targeting developers and software teams",
    longDescription: `A sleek SaaS platform website targeting developers and software teams. Promotes an all-in-one infrastructure solution for building, deploying, and scaling modern applications. Features trust metrics of 10,000+ developers, key platform benefits including advanced analytics, bank-grade security, and edge-fast performance. Includes pricing tiers, login/signup flows, and sales contact options.`,
    tags: ["SaaS", "React", "Tailwind CSS", "TypeScript"],
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    demo: "https://lumora-services.netlify.app/",
    featured: true,
    year: 2024,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    achievements: [
      "10,000+ developers trust metric showcase",
      "Complete pricing tier system",
      "Advanced analytics and security features highlight"
    ]
  },
  {
    id: "4",
    title: "HVAC Elite",
    description: "24/7 HVAC Services with real-time dispatch and smart pricing",
    longDescription: `A high-conversion HVAC service website featuring real-time technician dispatch notifications, smart pricing calculators, and 24/7 emergency booking. Showcases complete heating and cooling solutions including repairs, installations, maintenance plans, and indoor air quality services. Built with trust elements like 4.9/5 star ratings, 5000+ happy customers, and brand certifications for major manufacturers.`,
    tags: ["Service Platform", "React", "Real-time", "Booking System"],
    category: "web",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    demo: "https://hvac-elite-services.netlify.app/",
    featured: false,
    year: 2024,
    technologies: ["React", "Tailwind CSS", "Netlify", "TypeScript"],
    achievements: [
      "4.9/5 star ratings with 5000+ happy customers",
      "Real-time technician dispatch system",
      "Smart pricing calculator and 24/7 emergency booking"
    ]
  },
  {
    id: "5",
    title: "Sterling & Associates",
    description: "CPA Accounting Firm Website with 25+ years of experience showcase",
    longDescription: `A professional accounting website designed for a certified CPA firm with 25+ years of experience. Features comprehensive service showcases for tax preparation, bookkeeping, payroll, financial reporting, and business advisory. Built with trust signals including $2.5B+ assets managed statistic and 98% client satisfaction rating. Includes consultation scheduling and industry-specific solutions for SMBs, freelancers, and tech startups.`,
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    category: "web",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    demo: "https://sterling-associates-omega.vercel.app/",
    featured: true,
    year: 2024,
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    achievements: [
      "$2.5B+ assets managed showcase",
      "98% client satisfaction rating",
      "Comprehensive service portfolio with industry-specific solutions"
    ]
  },
  {
    id: "6",
    title: "Luxe Realty",
    description: "Luxury Real Estate Platform with $2.4B+ properties showcase",
    longDescription: `A sophisticated luxury real estate platform showcasing prestigious properties in prime markets including New York, San Francisco, Los Angeles, and Boston. Features comprehensive property search with buy/rent filters, saved property functionality, agent directory, and seller listing tools. Built with impressive trust metrics ($2.4B+ properties sold, 5,000+ clients) and emphasizes curated excellence, market intelligence, and white-glove service for discerning buyers and sellers.`,
    tags: ["Real Estate", "React", "Luxury", "Property Search"],
    category: "web",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    demo: "https://lux-real.netlify.app/",
    featured: false,
    year: 2024,
    technologies: ["React", "Tailwind CSS", "Netlify", "TypeScript"],
    achievements: [
      "$2.4B+ properties sold with 5,000+ clients",
      "Comprehensive property search and filtering",
      "White-glove service for luxury market"
    ]
  },
  {
    id: "7",
    title: "PeakWeb",
    description: "Professional Web Development Agency showcasing modern tech stack",
    longDescription: `A modern web development agency portfolio showcasing expertise in React, React Native, Flutter, Tailwind CSS, and PostgreSQL/Supabase backends. Features an interactive project gallery highlighting cross-platform mobile apps, real-time dashboards, and e-commerce solutions. Includes a detailed service breakdown, client inquiry forms with project type and budget selection, and global contact options.`,
    tags: ["React", "Tailwind CSS", "Portfolio", "Agency"],
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    demo: "https://bejewelled-mochi-423271.netlify.app/",
    featured: true,
    year: 2024,
    technologies: ["React", "Tailwind CSS", "Netlify", "TypeScript"],
    achievements: [
      "Interactive project gallery with modern UI/UX",
      "Comprehensive service offerings showcase",
      "Advanced client inquiry system with budget selection"
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Self-Employed",
    role: "Freelance Web Developer",
    type: "work",
    period: { start: "2020", end: "Present" },
    location: "Remote",
    description: [
      "Building custom web solutions for small-to-medium businesses, specializing in professional service websites with modern React ecosystems",
      "Designed and developed 25+ client websites across legal, healthcare, SaaS, and accounting sectors",
      "Delivered responsive, SEO-optimized sites with 90+ Lighthouse performance scores",
      "Managed end-to-end client relationships from discovery to deployment"
    ],
    achievements: [
      "Sterling & Associates CPA — Modern accounting firm website with service listings, team profiles, and consultation booking",
      "Lumora SaaS Infrastructure — Landing page for developer tools platform featuring pricing tiers and analytics dashboard",
      "Premium Law Firm — Professional legal practice site with practice areas, case studies, and attorney profiles",
      "Family Medicine Platform — Healthcare provider website with patient-focused UX and service information"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Netlify", "Vercel"]
  },
  {
    id: "2",
    company: "Echahid Cheikh Cheikh Larbi Tebessi University",
    role: "Bachelor's degree in Computer Science",
    type: "education",
    period: { start: "2012-08", end: "2016-05" },
    location: "Tebessa, Algeria",
    description: [
      "Focus on Computer Systems and Software Engineering",
      "Senior Project: A highly-customizable web-based client for Azure Bot Services",
      "GPA: 3.25/4.0"
    ],
    achievements: [
      "Built AI-powered log parser for senior project, improving debugging efficiency by 50%",
      "Won Best Hack award at Algeria & Tunisia AI and Cybersecurity Summit Hackathon 2024",
      "Dean's Honor List all semesters"
    ],
    technologies: [],
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&q=80"
  },
  {
    id: "6",
    company: "AWS Solutions Architect Professional",
    role: "Amazon Web Services",
    type: "certification",
    period: { start: "2023-06", end: "2026-06" },
    location: "Online",
    description: [
      "Advanced certification for designing distributed systems on AWS",
      "Validates expertise in migrating complex applications and designing for scale"
    ],
    achievements: [],
    technologies: ["AWS", "Cloud Architecture", "Security", "Networking"],
    link: "https://aws.amazon.com/certification/"
  },
  {
    id: "7",
    company: "Certified Kubernetes Administrator (CKA)",
    role: "Cloud Native Computing Foundation",
    type: "certification",
    period: { start: "2022-11", end: "2025-11" },
    location: "Online",
    description: [
      "Performance-based exam testing Kubernetes administration skills",
      "Covers installation, configuration, and troubleshooting of production clusters"
    ],
    achievements: [],
    technologies: ["Kubernetes", "Docker", "DevOps"],
    link: "https://www.cncf.io/certification/cka/"
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: "1", name: "React", category: "frontend", proficiency: 95, yearsOfExperience: 6, projects: 45 },
  { id: "2", name: "TypeScript", category: "frontend", proficiency: 98, yearsOfExperience: 5, projects: 52 },
  { id: "3", name: "Next.js", category: "frontend", proficiency: 92, yearsOfExperience: 4, projects: 28 },
  { id: "4", name: "Vue.js", category: "frontend", proficiency: 85, yearsOfExperience: 3, projects: 15 },
  { id: "5", name: "WebGL/Three.js", category: "frontend", proficiency: 78, yearsOfExperience: 2, projects: 8 },
  { id: "6", name: "Tailwind CSS", category: "frontend", proficiency: 94, yearsOfExperience: 4, projects: 38 },
  
  // Backend
  { id: "7", name: "Node.js", category: "backend", proficiency: 94, yearsOfExperience: 6, projects: 42 },
  { id: "8", name: "Python", category: "backend", proficiency: 88, yearsOfExperience: 5, projects: 31 },
  { id: "9", name: "Go", category: "backend", proficiency: 82, yearsOfExperience: 3, projects: 18 },
  { id: "10", name: "GraphQL", category: "backend", proficiency: 90, yearsOfExperience: 4, projects: 25 },
  { id: "11", name: "REST APIs", category: "backend", proficiency: 96, yearsOfExperience: 7, projects: 58 },
  
  // Database
  { id: "12", name: "PostgreSQL", category: "database", proficiency: 91, yearsOfExperience: 6, projects: 38 },
  { id: "13", name: "MongoDB", category: "database", proficiency: 86, yearsOfExperience: 5, projects: 27 },
  { id: "14", name: "Redis", category: "database", proficiency: 89, yearsOfExperience: 4, projects: 32 },
  { id: "15", name: "Elasticsearch", category: "database", proficiency: 80, yearsOfExperience: 3, projects: 12 },
  
  // DevOps
  { id: "16", name: "Kubernetes", category: "devops", proficiency: 87, yearsOfExperience: 4, projects: 22 },
  { id: "17", name: "Docker", category: "devops", proficiency: 93, yearsOfExperience: 6, projects: 48 },
  { id: "18", name: "AWS", category: "devops", proficiency: 90, yearsOfExperience: 5, projects: 35 },
  { id: "19", name: "CI/CD", category: "devops", proficiency: 92, yearsOfExperience: 6, projects: 44 },
  { id: "20", name: "Terraform", category: "devops", proficiency: 84, yearsOfExperience: 3, projects: 16 },
  
  // Mobile
  { id: "21", name: "React Native", category: "mobile", proficiency: 83, yearsOfExperience: 3, projects: 11 },
  
  // AI/ML
  { id: "22", name: "TensorFlow", category: "ai", proficiency: 76, yearsOfExperience: 2, projects: 7 },
  { id: "23", name: "PyTorch", category: "ai", proficiency: 72, yearsOfExperience: 2, projects: 5 },
  
  // Blockchain
  { id: "24", name: "Solidity", category: "blockchain", proficiency: 79, yearsOfExperience: 2, projects: 6 },
  { id: "25", name: "Web3.js", category: "blockchain", proficiency: 81, yearsOfExperience: 2, projects: 8 },
  
  // Tools
  { id: "26", name: "Git", category: "tools", proficiency: 97, yearsOfExperience: 8, projects: 100 },
  { id: "27", name: "VS Code", category: "tools", proficiency: 95, yearsOfExperience: 6, projects: 100 },
  { id: "28", name: "Figma", category: "tools", proficiency: 88, yearsOfExperience: 4, projects: 34 },
];

export const socialLinks: SocialLink[] = [
  {
    id: "1",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/taki-eddine-rami-9558062a6/",
    icon: "Linkedin",
    color: "#0A66C2",
    handle: "taki-eddine-rami"
  },
  {
    id: "2",
    platform: "GitHub",
    url: "https://github.com/takirami",
    icon: "Github",
    color: "#ffffff",
    handle: "takirami"
  },
  {
    id: "3",
    platform: "Twitter",
    url: "https://x.com/TakieRami",
    icon: "Twitter",
    color: "#1DA1F2",
    handle: "@TakieRami"
  },
  {
    id: "4",
    platform: "Email",
    url: "mailto:takierami.dev@gmail.com",
    icon: "Mail",
    color: "#EA4335",
    handle: "takierami.dev@gmail.com"
  }
];

export const projectOutcomes: ProjectOutcome[] = [
  {
    id: "1",
    project: "Whitmore & Rhodes",
    industry: "Legal",
    highlight: "Premium boutique law firm presence",
    content:
      "Delivered an elegant litigation practice website with attorney profiles, practice area exploration, and consultation booking — designed for high-net-worth clientele seeking discretion and authority.",
    demo: "https://premium-law-firm-website.netlify.app/",
  },
  {
    id: "2",
    project: "FamilyCare Medical Group",
    industry: "Healthcare",
    highlight: "4.9/5 patient satisfaction showcase",
    content:
      "Built a patient-centric platform with same-day appointment booking, telehealth options, and HIPAA-aware privacy standards for a San Francisco family medicine practice.",
    demo: "https://next-gen-family-medicine-platform.netlify.app/",
  },
  {
    id: "3",
    project: "Sterling & Associates",
    industry: "Accounting",
    highlight: "$2.5B+ assets managed trust signal",
    content:
      "Created a professional CPA firm website with 98% client satisfaction metrics, comprehensive service showcases, and consultation scheduling for SMBs and startups.",
    demo: "https://sterling-associates-omega.vercel.app/",
  },
  {
    id: "4",
    project: "HVAC Elite",
    industry: "Home Services",
    highlight: "5,000+ customers, 4.9★ rating",
    content:
      "High-conversion service site with real-time dispatch notifications, smart pricing calculator, and 24/7 emergency booking — built to turn visitors into booked jobs.",
    demo: "https://hvac-elite-services.netlify.app/",
  },
];