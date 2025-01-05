
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
  vue,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  postMan,
  tingGlobal,
  roadProtect,
//   pacMan,
  ticTacToe,
  ecommerce,
  sharonGalOr,
  AIShirtModel,
  manageUserSystem,
  CinemaManagementSystem
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "opinion",
    title: "Opinion",
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
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Angular Developer",
    company_name: "Road Protect ",
    icon: roadProtect,
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
    icon: tingGlobal,
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

// TODO: Need to edit the Manage User System.
const projects = [
  {
    name: "E-commerce",
    description:
      "This is a dynamic landing page for an E-commerce website aimed at enhancing user engagement and boosting sales. The page serves as the gateway to a rich shopping experience, featuring an intuitive layout, high-performance interactions, and advanced functionalities that streamline the shopping process.",
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
    image: ecommerce,
    source_code_link: "https://github.com/maornetzer9/E-Commerce.git",
    // web_link: "https://maornetzer9.github.io/E-Commerce",
  },
  {
    name: "Tic Tac Toe",
    description:
      "This web app based on a version of Tic-Tac-Toe, presenting a modern take on this classic game with a sleek, user-friendly interface and interactive features. This project highlights my skills in frontend development, focusing on responsive design and intuitive gameplay that enhances user engagement and showcases my ability to create dynamic web applications.",
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
    image: ticTacToe,
    source_code_link: "https://github.com/maornetzer9/Tic-Tac-Toe.git",
    web_link: "https://tic-tac-toe-ku96.onrender.com",
  },
  {
    name: "Customize Shirt With AI",
    description:
    "This is a web application that enables users to customize T-shirts with unique designs using OpenAI's image generation technology. Users can choose to place a logo or a full-shirt design, applying personal or predefined images. The platform leverages AI to generate and preview designs in real-time, allowing for a personalized and creative user experience.",
    tags: [
      {
        name: "react-vite",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: AIShirtModel,
    source_code_link: "https://github.com/maornetzer9/AI-Customize-T-Shirts-Frontend",
    web_link: "https://ai-customize-t-shirts-frontend.onrender.com",
  },
  {
    name: "Manage User System",
    description:
    "This is a web application that enables users to customize T-shirts with unique designs using OpenAI's image generation technology. Users can choose to place a logo or a full-shirt design, applying personal or predefined images. The platform leverages AI to generate and preview designs in real-time, allowing for a personalized and creative user experience.",
    tags: [
      {
        name: "react-vite",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: manageUserSystem,
    source_code_link: "https://github.com/maornetzer9/Manage-User-System.git",
    web_link: "https://manage-user-system.onrender.com",
  },
  {
    name: "Cinema Management System",
    description:
    "This is a web application for managing movies and subscriptions, integrating external APIs and MongoDB for dynamic data handling. Users can explore and subscribe to movies, while admins manage users and permissions through role-based access. Built with React, Redux, and Node.js, the platform ensures a secure, intuitive, and seamless user experience..",
    tags: [
        {
            name: "react-vite",
            color: "blue-text-gradient",
          },
          {
            name: "redux",
            color: "green-text-gradient",
          },
          {
            name: "node.js",
            color: "pink-text-gradient",
          },
          {
            name: "mongodb",
            color: "pink-text-gradient",
          },
    ],
    image: CinemaManagementSystem,
    source_code_link: "https://github.com/maornetzer9/Movies.git",
    web_link: "https://movies-jps0.onrender.com/",
  },
];

const testimonials = [
      {
        testimonial: "I am happy to recommend Maor Netzer for any technical position, after his exceptional specialization at Ting Global. Maor quickly mastered Vue.js, Nuxt.js and AWS, significantly improving our web projects and cloud capabilities. His initiative in system development and server automation tools has significantly improved our operational efficiency.Moreover, Maor excelled in collaboration and team management, and brought a positive spirit and an innovative approach to our work environment. His ability to blend technical skills with strong interpersonal qualities has made him a valuable asset to our team.In conclusion, Maor is a dedicated, technically skilled and versatile team player. His contribution to our company has been significant, and I am confident that he will bring the same level of excellence and innovation to his future endeavors.For more information, please do not hesitate to contact me. Best regards, Sharon Gal-Or Director of Ting Global",
        phone: '055-9721123',
        email: 'galorian1@gmail.com',
        name: "Sharon Gal-or",
        designation: "Director",
        company: "Ting Global",
        image: sharonGalOr,
      },
];
    
export { services, technologies, experiences, testimonials, projects };
