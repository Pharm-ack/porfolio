import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Oluwashina",
  initials: "PH",
  url: "https://pharmack.vercel.app",
  location: "Nigeria",
  description: "Fullstack Developer",
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
      title: "Jersey Vault",
      href: "https://jersey-vault.vercel.app/",
      //dates: "Sept 2024 - Present",
      active: true,
      description:
        "Jersey Vault is a sleek eCommerce platform for sports enthusiasts, offering a wide range of authentic sports jerseys. With intuitive navigation, responsive design, and secure checkout, it ensures a seamless shopping experience. Customers can explore categories, view detailed product pages, and shop with ease.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Paystack",
        "Shadcn UI",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://jersey-vault.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/jersey.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
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
  ],
} as const;
