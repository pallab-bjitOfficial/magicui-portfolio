import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

export const DATA = {
  name: 'Pallab Majumdar',
  initials: 'PM',
  location: 'Dhaka,Bangladesh',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description:
    'Highly Motivated Software Engineer. I love building things and helping people.',
  summary:
    'Motivated Software Engineer with over 1 year of experience at BJIT, demonstrating strong problem-solving skills and a solid foundation in software development. Former competitive programmer with a proven track record in algorithmic challenges, bringing a detail-oriented and efficient approach to coding and project execution. Committed to delivering high-quality software solutions and continuously enhancing technical expertise.',
  avatarUrl: '/pallab.jpg',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Python',
    'Postgres',
    'MongoDB',
    'Java',
    'C',
    'C++',
    'ExpressJs',
    'NestJs',
  ],
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    email: 'majumdarp79@gmail.com',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/pallab99',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/pallab-majumdar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        icon: Icons.linkedin,
        navbar: true,
      },
      Facebook: {
        name: 'Facebook',
        url: 'https://www.facebook.com/pallab.majumdar.99?mibextid=ZbWKwL',
        icon: Icons.facebook,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'BJIT Group',
      href: 'https://bjitgroup.com/',
      badges: [],
      location: 'Dhaka, Bangladesh',
      title: 'Software Engineer',
      logoUrl: 'https://bjitgroup.com/static/svg/common/bjit-logo2.svg',
      start: 'January 2024',
      end: 'Present',
      description:
        'Working as a full stack developer here. Involved in developing a home grown product for a full fledge online test platform. The application was built using NextJS, Typescript,SCSS,NodeJs,ExpressJS,MongoDB.',
    },
    {
      company: 'BJIT Academy  ',
      href: 'https://bjitacademy.com/',
      badges: [],
      location: 'Dhaka, Bangladesh',
      title: 'Trainee Software Engineer',
      logoUrl:
        'https://bjitacademy.com/academysite/api/public/images/resource/8R06lKy7UxbrIakqVP41XEoe0V6rbc7zLd1QbvBf.svg',
      start: 'August 2023',
      end: 'November 2023',
      description:
        'Get hands on experience in building full stack web applications using ReactJS, Typescript, NodeJS, PostgreSQL, MongoDB, ExpressJS . I also learned how to use Docker, AWS,  Git, Github. Developed two full stack web app one is a book management system and another is a online learning platform.',
    },
    {
      company: '6Sense HQ',
      href: 'https://6sensehq.com/',
      badges: [],
      location: 'Dhaka, Bangladesh',
      title: 'Frontend Developer(Intern)',
      logoUrl: '/6sense.png',
      start: 'March 2023',
      end: 'May 2023',
      description:
        'Involved in developing a ReactJS based web application for a startup in Dhaka, Bangladesh. The application was built using NextJS, Typescript,Ant Design and Less. The application was designed for a charging solutions for electric vehicles.',
    },
  ],
  education: [
    {
      school: 'Bangladesh University of Business and Technology',
      degree: "Bachelor's Degree of Computer Science & Engineering (CSE)",
      logoUrl: '/bubt.png',
      start: '2019',
      end: '2023',
    },
    {
      school: 'Hamidpur Al-Hera College',
      degree: 'Higher Secondary Certificate',
      logoUrl: '/hamidpur.png',
      start: '2016',
      end: '2018',
    },
    {
      school: 'Rupdia Welfare Academy',
      degree: 'Secondary School Certificate',
      logoUrl: '/rupdia.png',
      start: '2011',
      end: '2016',
    },
  ],
  projects: [
    {
      title: 'Chat App',
      description:
        'A chat application to chat with your friends.Some of the features are: Real time chat, Group chat,and more.',
      technologies: [
        'Next.js',
        'Typescript',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'TailwindCSS',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Client Code',
          href: 'https://github.com/pallab99/Chat-App-Client',
          icon: <Icons.github className="size-3" />,
        },
        {
          type: 'Server Code',
          href: 'https://github.com/pallab99/Chat-App-Server',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
    },
    {
      title: 'SkillBase',
      description:
        'A full fledge e-learning platform. With all the basic features like: Authentication, Authorization, User Profile, Courses, Quizzes, Forums, video lectures, course evaluation etc.',
      technologies: [
        'React JS',
        'Typescript',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'SASS',
        'Ant Design',
        'AWS',
      ],
      links: [
        {
          type: 'Client Code',
          href: 'https://github.com/pallab99/e-learning-client-personal',
          icon: <Icons.github className="size-3" />,
        },
        {
          type: 'Server Code',
          href: 'https://github.com/pallab99/e-learning-server-personal',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
    },
    {
      title: 'Urban Bazar',
      description:
        'Developed a full fledge e-commerce platform. With all the basic features like: Authentication, Authorization, User Profile, Products, Orders, Shipping, Payment, and more.',
      technologies: [
        'Next.js',
        'Typescript',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'SASS',
        'Ant Design',
      ],
      links: [
        {
          type: 'Client Code',
          href: 'https://github.com/pallab99/E-Commerce-Frontend',
          icon: <Icons.github className="size-3" />,
        },
        {
          type: 'Server Code',
          href: 'https://github.com/pallab99/E-commerce-backend',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
    },
  ],
} as const;
