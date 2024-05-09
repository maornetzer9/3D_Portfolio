const TingGlobal = `${import.meta.env.VITE_S3_CLOUD_URL}images/Ting-Global.png`;
const RoadProtect = `${import.meta.env.VITE_S3_CLOUD_URL}images/Road-Protect.jpeg`;
const PacMan = `${import.meta.env.VITE_S3_CLOUD_URL}images/gallery/fulls/PacMan-Game.png`;
const TicTacToe = `${import.meta.env.VITE_S3_CLOUD_URL}images/gallery/fulls/Tic-Tac-Toe.png`;
const Ecommerce = `${import.meta.env.VITE_S3_CLOUD_URL}images/gallery/fulls/Landing-Page--Navbar.png`;

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
  vue,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  postMan,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Post Man",
    icon: postMan,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
//   {
    // name: "Three JS",
    // icon: threejs,
//   },
  {
    name: "git",
    icon: git,
  },
//   {
    // name: "figma",
    // icon: figma,
//   },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Angular Developer",
    company_name: "Road Protect ",
    icon: RoadProtect,
    iconBg: "#383E56",
    date: "Sep 2023 - Nov 2023",
    points: 
    [
      "As a FullStack Developer, responsible for backend development, specializing in the design and implementation of RESTful APIs.",
      "Utilized MockServer and JSON Server for efficient mocking of server-side data, enhancing the comfort of frontend development.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborated closely with the frontend team to ensure seamless integration of mocked data into the user interface.",
    ],
  },
  {
    title: "Vue Developer",
    company_name: "Ting Global",
    icon: TingGlobal,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - 2024",
    points: 
    [
      "Spearheaded front-end and back-end development, delivering comprehensive web solutions",
      "Integrated ChatGPT with WhatsApp groups, boosting user engagement through automated interactions.",
      "Developed responsive, Facebook-integrated explanation pages, enhancing user accessibility.",
      "Led the creation and management of Challenges Groups in Telegram, fostering community engagement.",
      "Directed the production team and managed GitHub architecture, streamlining development processes.",
      "Implemented AWS cloud solutions and utilized S3 for asset management, ensuring scalability and efficiency.",
      "Established a collaborative GitHub workflow, enhancing code quality and team coordination.",
    ],
  },
];

const projects = [
  {
    name: "Landing Page",
    description:
      "I developed a dynamic landing page for an E-commerce website aimed at enhancing user engagement and boosting sales. The page serves as the gateway to a rich shopping experience, featuring an intuitive layout, high-performance interactions, and advanced functionalities that streamline the shopping process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: Ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tic Tac Toe",
    description:
      "I engineered a web-based version of Tic-Tac-Toe, bringing a fresh twist to the timeless game with interactive features and a user-friendly interface. This project serves as a showcase of my full-stack development skills, focusing on creating an engaging user experience backed by a reliable server-side logic.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: TicTacToe,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pac-Man",
    description:
      "In a demonstration of both frontend and backend capabilities, I developed a modern rendition of the classic arcade game, Pac-Man. This project was designed not only to echo the nostalgic experience of the original game but also to incorporate enhanced features for user engagement and management.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: PacMan,
    source_code_link: "https://github.com/",
  },
];

const testimonials = [
    //   {
    //     testimonial:
    //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //     name: "Sara Lee",
    //     designation: "CFO",
    //     company: "Acme Co",
    //     image: "https://randomuser.me/api/portraits/women/4.jpg",
    //   },
    //   {
    //     testimonial:
    //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //     name: "Chris Brown",
    //     designation: "COO",
    //     company: "DEF Corp",
    //     image: "https://randomuser.me/api/portraits/men/5.jpg",
    //   },
      {
        testimonial: "I am happy to recommend Maor Netzer for any technical position, after his exceptional specialization at Ting Global. Maor quickly mastered Vue.js, Nuxt.js and AWS, significantly improving our web projects and cloud capabilities. His initiative in system development and server automation tools has significantly improved our operational efficiency.Moreover, Maor excelled in collaboration and team management, and brought a positive spirit and an innovative approach to our work environment. His ability to blend technical skills with strong interpersonal qualities has made him a valuable asset to our team.In conclusion, Maor is a dedicated, technically skilled and versatile team player. His contribution to our company has been significant, and I am confident that he will bring the same level of excellence and innovation to his future endeavors.For more information, please do not hesitate to contact me. Best regards, Sharon Gal-Or Director of Ting Global",
        phone: '055-9721123',
        email : 'galorian1@gmail.com',
        name: "Sharon Gal-or",
        designation: "Director",
        company: "Ting Global",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ];
    
export { services, technologies, experiences, testimonials, projects };
