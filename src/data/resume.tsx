import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Oluwashina",
  initials: "PH",
  url: "https://pharmack.vercel.app",
  location: "Nigeria",
  description: "Full Stack Developer",
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
      title: "CozaConnect — COZA Buddy",
      href: "https://www.cozaconnect.com/",
      //dates: "Sept 2024 - Present",
      active: true,
      description:
        "A community engagement platform designed to help users connect, grow, and stay spiritually accountable within the COZA network. With user-centric signup, personal buddy support, and seamless navigation, it makes joining and participating in community life effortless and meaningful.",
      technologies: [
        "Next.js",
        "Shadcn UI",
        "TailwindCSS",
        "Typescript",
        "MongoDB",
        "Prisma",
        "Nodejs",
        "Expressjs",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.cozaconnect.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/coza-buddy.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "CozaConnect - COZA Connect",
      href: "https://ft.cozaconnect.com/",
      //dates: "Sept 2024 - Present",
      active: true,
      description:
        "A community engagement platform designed to help users connect, grow, and stay spiritually accountable within the COZA network. With user-centric signup, personal buddy support, and seamless navigation, it makes joining and participating in community life effortless and meaningful.",
      technologies: [
        "Next.js",
        "Shadcn UI",
        "TailwindCSS",
        "Typescript",
        "Prisma",
        "Nodejs",
        "Expressjs",
        "MongoDB",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://ft.cozaconnect.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/coza-connect.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
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

    // {
    //   title: "Paxify",
    //   href: "https://paxify.org/",
    //   //dates: "June 2024 - June 2024",
    //   active: true,
    //   description:
    //     "Paxify: Your Comprehensive Mental Health Platform. Discover anonymous support, first aid info, therapist connections, and a nurturing community for healing.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "TailwindCSS",
    //     "framer-motion",
    //     "Shadcn UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://paxify.org/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/paxify.jpg",
    //   // video:
    //   //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    // {
    //   title: "Veriscope",
    //   href: "https://www.veriscopedigital.com/",
    //   //dates: "Sept 2024 - Present",
    //   active: true,
    //   description:
    //     "Veriscope help businesses attract, convert, and retain customers with performance-based marketing. Your customers are online. Let's help them find you.",
    //   technologies: [
    //     "Nuxt.js",
    //     "Typescript",
    //     "TailwindCSS",
    //     "Sanity CMS",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://www.veriscopedigital.com/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/veriscope.png",
    //   // video:
    //   //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
  ],
} as const;
