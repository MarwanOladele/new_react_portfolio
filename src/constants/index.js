import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  asset7,
  asset3,
  asset4,
  asset5,
  asset6,
  asset1,
  asset2
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Bootstrap",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Sass",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png',
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "CyberFleet",
    icon: 'https://media.licdn.com/dms/image/C4E0BAQHpNRORTbi6Ew/company-logo_200_200/0/1593833668180?e=2147483647&v=beta&t=NuqgctYqNzQCiVZuB9hcbeiWwMthDrTTrbjbA7d4QXc',
    iconBg: "#383E56",
    date: "Jul 2022 - present",
    points: [
      "Developed features that enhance user experience.",
      "Optimized web pages for maximum speed and scalability.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer Apprentice",
    company_name: "TIIDELab",
    icon: 'data:image/jpeg;base64,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',
    iconBg: "#383E56",
    date: "July 2021 - Dec 2021",
    points: [
      "Spent 1300+ hours developing Meditech, a Hospital Management Application in JavaScript, React, and Redux.",
      "Developed skills in remote pair programming, using GitHub, industry-standard Git flows, agile daily standup, and virtual meetings with fellow remote developers.",
      "Introduction to HTML5, CSS3, JavaScript (ES6), and React.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecom App",
    description:
      "An e-commerce application.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "es6",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: asset4,
    source_code_link: "https://github.com/MarwanOladele/e-COM-app",
    deployed_code_link:'https://e-com-app.vercel.app/'
  },
  {
    name: "Restaurant App",
    description:
      "A web application mainly for Restaurants.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "es6",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: asset7,
    source_code_link: "https://github.com/MarwanOladele/restaurant-app",
    deployed_code_link:'https://marwan-restaurantapp.netlify.app/'
  },
  {
    name: "Admin Dasboard",
    description:
      "A web application that provides convenient shortcuts for common management tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "es6",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: asset1,
    source_code_link: "https://github.com/MarwanOladele/admin-dashboard",
    deployed_code_link:'https://marwan-admin-dashboard.netlify.app/'
  },
  {
    name: "Marwan Chat",
    description:
      "A chat application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sass/scss",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: asset5,
    source_code_link: "https://github.com/MarwanOladele/chat_app",
    deployed_code_link:'https://marwan-chat-app.vercel.app'
  },
  {
    name: "Netflix Clone",
    description:
      "A web application clone from Netflix main website",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: asset2,
    source_code_link: "https://github.com/MarwanOladele?tab=repositories",
    deployed_code_link:''
  },
  {
    name: "Weather App",
    description:
      "A web application for checking weather forecast.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: asset6,
    source_code_link: "https://github.com/MarwanOladele/WeatherApp",
    deployed_code_link:'https://marwanweatherapp.netlify.app/'

  },
  {
    name: "Meditech",
    description:
      "A Hospital Management Application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "es6",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: asset3,
    source_code_link: "https://github.com/chrismadufor/Meditech-React",
    deployed_code_link:'https://meditech-react.netlify.app/'
  },
];

export { services, technologies, experiences, testimonials, projects };
