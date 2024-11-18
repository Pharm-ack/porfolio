import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Shina",
  initials: "PH",
  url: "https://pharmack.vercel.app",
  location: "Nigeria",
  description:
    "Software developer passionate about crafting seamless user experiences, I focus on delivering modern, clean, and efficient full-stack solutions. Let’s collaborate to transform your digital vision into reality",
  summary:
    "As a passionate software developer, I specialize in building efficient, user-friendly web applications. My experience in web development has provided me with a strong foundation in modern technologies, frameworks, and best practices, allowing me to deliver high-quality solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "Git",
    "Github",
    "Prisma",
    "MongoDB",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "#", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "olumofe6@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pharm-ack",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://ng.linkedin.com/in/oluwashina-olumofe-80ab13201",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/pharm_ack",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Millennium College",
      degree: "ND Pharmacy Tech",
      logoUrl: "/mille.jpg",
      start: "2016",
      end: "2019",
    },
    {
      school: "Fitzzy System Institute",
      degree: "Cetificate in System Engineer",
      logoUrl: "/Fitzzy.jpg",
      start: "2016",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Health Symptom Analyzer",
      href: "https://symptom-analyzer.vercel.app/",
      //dates: "Sept 2024 - Present",
      active: true,
      description:
        "Get instant insights about your health symptoms using advanced artificial intelligence. Fast, accurate, and always available.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Gemini AI",
        "Shadcn UI",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://symptom-analyzer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/healthAi.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    
    {
      title: "CureQuest",
      href: "https://cure-quest-ph.vercel.app/",
      //dates: "June 2024 - June 2024",
      active: true,
      description:
        "CureQuest: A non-profit platform dedicated to funding and promoting medical research. The site features detailed information on research initiatives, latest news updates, donation options, and partnerships with leading medical institutions.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://cure-quest-ph.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/curequest.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "ResumeBuilder",
      href: "https://ph-resume.vercel.app/",
      //dates: "Sept 2024 - Present",
      active: true,
      description:
        "Create professional resumes in minutes, not hours. Stand out from the crowd and land your dream job.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Context Api",
        "Shadcn UI",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://ph-resume.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/resume.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
} as const;
