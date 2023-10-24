import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  shopify,
  jobit,
  tripguide,
  threejs,
  typescript,
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
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editing",
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
    name: "Java",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Material UI",
    icon: "https://img.icons8.com/color/452/material-ui.png",
  },
];

const experiences = [
  {
    title: "React.js Project(Frontend)",
    company_name: "Learning Management System",
    icon: "https://cdn3.iconfinder.com/data/icons/knowledge-management-flat-1/64/software-computer-hardware-program-process-system-512.png",
    iconBg: "#383E56",
    date: "August 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React.js Project(Frontend)",
    company_name: "Fiver Clone",
    icon: "https://image.pngaaa.com/695/2410695-middle.png",
    iconBg: "#383E56",
    date: "August 2023 - October 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },

  {
    title: "Java Project",
    company_name: "Luggage Packers Application",
    icon: "https://cdn-icons-png.flaticon.com/512/776/776531.png",
    iconBg: "#E6DEDD",
    date: "Feb 2023 - April 2023",
    points: [
      "Developing and maintaining Mobile applications using Java Programing technologies.",
      "Collaborating with cross-functional to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Project",
    company_name: "Facebook Clone (Frontend)",
    icon: meta,
    iconBg: "#383E56",
    date: "April 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using Html , CSS , JavaScript technologies.",
      "Collaborating with cross-functional to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Web Project",
    company_name: "Ecommerce",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using MERN Stack technologies.",
      "Collaborating with cross-functional to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mukesh Kumar Sah",
    designation: "Software Engineer",
    company: "Aarupadai Veedu Institute Of Technology",
    image:
      "https://media.licdn.com/dms/image/D5603AQEY9EFhwwSnIA/profile-displayphoto-shrink_100_100/0/1691050259067?e=1703721600&v=beta&t=_7oDO_1rpPyh6dAhSZB3isaJSPxMo827VqNh2uR26Pk",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Prince Patel",
    designation: "Software Engineer",
    company: "Aarupadai Veedu Institute Of Technology",
    image:
      "https://media.licdn.com/dms/image/C4D03AQErKsIFg0XZuA/profile-displayphoto-shrink_100_100/0/1653578104734?e=1703721600&v=beta&t=dHPLM-B4_HnxW1Lnw0gkA6RQ9VDqdczhtD8YHhQoX8o",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sonalal Paswan",
    designation: "Software Engineer",
    company: "Aarupadai Veedu Institute Of Technology",
    image:
      "https://media.licdn.com/dms/image/D5635AQEkfWDjcJ0cxw/profile-framedphoto-shrink_100_100/0/1696406319007?e=1698771600&v=beta&t=S-SKtPP5YrBbRQdPpk5VIWTv41tmLNfiSOGzFgm-5Dc",
  },
];

const projects = [
  {
    name: "E-Learning",
    description:
      "Web application that enables users to search Valuable Course, view estimated Price ranges for positions, and locate available Courses based on their current Technical Skills.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "redux/Toolkits",
        color: "green-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/mdjamilakhtar793/Learning-Management-System/",
    website_Link: "https://learning-management-system-sigma.vercel.app/",
  },
  {
    name: "Facebooke Clone",
    description:
      "A comprehensive Social Meadia platform that allows users to Allow to use and Share Contents and  recommendations for popular Information.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mdjamilakhtar793/Facebook-Clone/",
    website_Link: "https://github.com/mdjamilakhtar793/Facebook-Clone/",
  },

  {
    name: "Fiver Clone",
    description:
      "A comprehensive Freelancer platform that allows users to Connect Client, and Build Products, and offers curated recommendations for Good Quality Products.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React-Router-Dom",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png",
    source_code_link: "https://github.com/mdjamilakhtar793/Facebook-Clone/",
    website_Link: "https://github.com/mdjamilakhtar793/Facebook-Clone/",
  },
];

export { services, technologies, experiences, testimonials, projects };
