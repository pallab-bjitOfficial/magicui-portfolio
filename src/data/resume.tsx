import { Icons } from "@/components/icons";
import { Facebook, FacebookIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Pallab Majumdar",
  initials: "PM",
  location: "Dhaka,Bangladesh",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",
  summary:
    "Motivated Software Engineer with over 1 year of experience at BJIT, demonstrating strong problem-solving skills and a solid foundation in software development. Former competitive programmer with a proven track record in algorithmic challenges, bringing a detail-oriented and efficient approach to coding and project execution. Committed to delivering high-quality software solutions and continuously enhancing technical expertise.",
  avatarUrl: "/pallab.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "MongoDB",
    "Java",
    "C",
    "C++",
    "ExpressJs",
    "NestJs",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "majumdarp79@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pallab99",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pallab-majumdar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: Icons.linkedin,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/pallab.majumdar.99?mibextid=ZbWKwL",
        icon: Icons.facebook,
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

  work: [
    {
      company: "BJIT Group",
      href: "https://bjitgroup.com/",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Software Engineer",
      logoUrl: "https://bjitgroup.com/static/svg/common/bjit-logo2.svg",
      start: "January 2024",
      end: "Present",
      description:
        "Working as a full stack developer here. Involved in developing a home grown product for a full fledge online test platform. The application was built using NextJS, Typescript,SCSS,NodeJs,ExpressJS,MongoDB.",
    },
    {
      company: "BJIT Academy  ",
      href: "https://bjitacademy.com/",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Trainee Software Engineer",
      logoUrl:
        "https://bjitacademy.com/academysite/api/public/images/resource/8R06lKy7UxbrIakqVP41XEoe0V6rbc7zLd1QbvBf.svg",
      start: "August 2023",
      end: "November 2023",
      description:
        "Get hands on experience in building full stack web applications using ReactJS, Typescript, NodeJS, PostgreSQL, MongoDB, ExpressJS . I also learned how to use Docker, AWS,  Git, Github. Developed two full stack web app one is a book management system and another is a online learning platform.",
    },
    {
      company: "6Sense HQ",
      href: "https://6sensehq.com/",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Frontend Developer(Intern)",
      logoUrl: "/6sense.png",
      start: "March 2023",
      end: "May 2023",
      description:
        "Involved in developing a ReactJS based web application for a startup in Dhaka, Bangladesh. The application was built using NextJS, Typescript,Ant Design and Less. The application was designed for a charging solutions for electric vehicles.",
    },
  ],
  education: [
    {
      school: "Bangladesh University of Business and Technology",
      degree: "Bachelor's Degree of Computer Science & Engineering (CSE)",
      logoUrl: "/bubt.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Hamidpur Al-Hera College",
      degree: "Higher Secondary Certificate",
      logoUrl: "/hamidpur.png",
      start: "2016",
      end: "2018",
    },
    {
      school: "Rupdia Welfare Academy",
      degree: "Secondary School Certificate",
      logoUrl: "/rupdia.png",
      start: "2011",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
