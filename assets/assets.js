import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

const hand_icon_url =
  "https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  hand_icon_url,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "TASA Messenger - Industry Project  ",
    description:
      "A web-based customer care bot creation platform with easy customization and integration. ",
    bgImage: "/work-1.png",
    skills: [
      "Typescript",
      "NodeJS",
      "ReactJs",
      "AWS Lex",
      "RabbitMQ",
      "Tailwind CSS",
      "MongoDB",
      "Docker",
      "Kubernetes",
    ],
    demo: "https://example.com/demo",
    source: "https://tasa.com.my/",
  },
  {
    title: "Tourista - Web Application",
    description:
      "A travel planning and booking web app enabling users to reserve hotels, flights, and tours with real-time updates and a responsive interface.",
    bgImage: "/work-2.png",
    skills: [
      "Firebase",
      "ExpressJs",
      "ReactJs",
      "NodeJs",
      "Cloud Hosting",
      "MongoDB",
    ],
    demo: "https://example.com/demo",
    source: "https://tourista-lk.web.app/",
  },
  {
    title: "E-Passport Booking - Mobile App",
    description:
      "A mobile app for scheduling passport service appointments, offering real-time availability and secure booking management. ",
    bgImage: "/work-2.png",
    skills: ["Java", "RoomDB", "Android Studio"],
    demo: "https://example.com/demo",
    source: "https://github.com/Yasas-Ramod-Thilakarathna/Notice-Board-App",
  },
  {
    title: "Bordima - Renting Mobile Application",
    description:
      "A mobile app that streamlines property rentals, allowing users to browse, contact landlords, and arrange viewings. ",
    bgImage: "/work-2.png",
    skills: ["Java", "Firebase", " Android Studio"],
    demo: "https://example.com/demo",
    source: "https://github.com/Yasas-Ramod-Thilakarathna/Bordima-Android-App",
  },
  {
    title: "Ayurvedic E-Commerce Web - Full Stack Development",
    description:
      "An e-commerce platform for Ayurvedic products, featuring a shopping cart, user reviews, and a secure checkout process. ",
    bgImage: "/work-2.png",
    skills: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "Firebase",
      "CSS",
      "Cloud Hosting",
    ],
    demo: "https://example.com/demo",
    source:
      "https://github.com/Yasas-Ramod-Thilakarathna/DS_PROJECT_ECOM#ayurvedicherbal-collaborative-shopping-platform",
  },
  {
    title: "Construction Management System - Web Application",
    description:
      "A web app for managing construction projects, providing tools for planning, resource allocation, and progress tracking.",
    bgImage: "/work-2.png",
    skills: ["ReactJs", "Spring Boot", "Hibernate", "My SQL"],
    demo: "https://example.com/demo",
    source:
      "https://github.com/Yasas-Ramod-Thilakarathna/Construction-Management-System",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Software Development",
    technologies: [
      {
        category: "Frontend Development",
        items: ["ReactJS", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
      },
      {
        category: "Backend Development",
        items: ["NodeJS", "ExpressJS", "Java", "Python"],
      },
      { category: "Databases", items: ["MySQL", "MongoDB", "Firebase"] },
    ],
  },
  {
    icon: assets.mobile_icon,
    title: "DevOps & Cloud Tech",
    technologies: [
      { category: "Cloud Platforms", items: ["AWS", "Azure"] },
      {
        category: "Containerization & Orchestration",
        items: ["Docker", "Kubernetes"],
      },
      {
        category: " CI/CD & Version Control",
        items: ["GitHub Actions CI/CD", "Git", "GitHub"],
      },
    ],
  },
  {
    icon: assets.mobile_icon,
    title: "Software Testing & QA",
    technologies: [
      { category: "Test Automation", items: ["Selenium", "Jest"] },
      {
        category: "Performance & Security Testing",
        items: ["JMeter", "OWASP ZAP"],
      },
      { category: "API & API Testing", items: ["REST API", "API Testing"] },
    ],
  },
  {
    icon: assets.graphics_icon,
    title: " Project Management & Collaboration",
    technologies: [
      {
        category: "Agile & Scrum Practices",
        items: ["Agile", "Scrum"],
      },
      {
        category: "Project Management Tools",
        items: ["Jira", "Confluence"],
      },
      {
        category: "Development & Design Tools",
        items: ["VS Code", "Figma", "Adobe XD"],
      },
    ],
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bsc. (Hons) in Information Technology (2nd Class)",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const socialIcons = {
  linkedin: {
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10"
      >
        <path
          clipRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          fillRule="evenodd"
        />
      </svg>
    ),
    url: "http://www.linkedin.com/in/yasas-ramod-thilakarathna",
  },
  github: {
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10"
      >
        <path
          clipRule="evenodd"
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          fillRule="evenodd"
        />
      </svg>
    ),
    url: "https://github.com/Yasas-Ramod-Thilakarathna",
  },
  medium: {
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10"
      >
        <path
          clipRule="evenodd"
          d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.974 17.557v-.235l-1.092-1.072c-.096-.073-.144-.194-.124-.313v-7.874c-.02-.119.028-.24.124-.313l1.118-1.072v-.235h-3.869l-2.758 6.88-3.138-6.88h-4.059v.235l1.308 1.575c.128.115.194.285.176.457v6.188c.038.223-.032.451-.189.614l-1.471 1.784v.235h4.17v-.235l-1.471-1.784c-.158-.163-.233-.389-.202-.614v-5.352l3.66 7.985h.425l3.143-7.985v6.365c0 .17 0 .202-.111.313l-1.13 1.098v.235h5.49z"
          fillRule="evenodd"
        />
      </svg>
    ),
    url: "https://medium.com/@yasasramod",
  },
  facebook: {
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10"
      >
        <path
          clipRule="evenodd"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          fillRule="evenodd"
        />
      </svg>
    ),
    url: "https://www.facebook.com",
  },
};
