import { color } from "framer-motion";
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
    Salesforce,
    Ecommerce,
    chat,
    Quiz,

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
      title: "JavaScript Developer",
      icon: javascript,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React.js Developer",
      icon: reactjs,
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
    
  ];
  
  const experiences = [
    {
      title: "FULL Stack Developer Intern",
      company_name: "Learn and Build Pvt Ltd. ",
      icon: web,
      iconBg: "#383E56",
      date: "July 2023 - September 2023",
      points: [
        "Developed and maintained full-stack applications using MERN Stack.",
        "Contributed to the creation of innovative solutions for various web apps",
        "Designed and implemented RESTful APIs using Node.js and Express.js to enable seamless communication between the front-end and back-end systems.",
        "Utilized React.js to create responsive and user-friendly interfaces, ensuring optimal user experience across multiple devices."
       ,
      ],
    },
    {
      title: "Salesforce Developer",
      company_name: "SmartInternz",
      icon: Salesforce,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Developed a Salesforce-based web application utilizing Apex and Salesforce tools, enabling efficient tracking of rental and sale properties across multiple cities.",
        "Gained hands-on experience in Salesforce development, including Trailhead completion and proficiency in customizing applications using Apex and Lightning components.",
        "Implemented data modeling, automation, and process builder workflows to optimize business operations within the Salesforce environment.",
        "Enhanced application functionality by creating custom objects, fields, and validation rules, ensuring efficient data management and user experience."
      ],
    },
    

  ];
  
  const testimonials = [
    {
      testimonial:
        "Dedicated and quick to learn, Ajay demonstrates a passion for web development. His enthusiasm for coding is contagious.",
      name: "Aditya Singh",
      designation: "Student",
      company: "PIET",
      image: "./src//assets/student.png",
    },
    {
      testimonial:
        "Impressive problem-solving skills! Ajay tackled complex coding challenges with determination and creativity.",
        name: "Aviraj Rathore",
        designation: "Student",
        company: "SKIT",
      image: "./src//assets/student.png",
    },
    {
      testimonial:
        "Ajay has a knack for turning ideas into functional web apps. His coding projects showcase creativity and innovation.",
      name: "Sadhvi Shukla",
      designation: "Student",
      company: "JECRCU",
      image: "./src//assets/student.png",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Web",
      description:
        "Designed and developed a fully functional e-commerce website using the MERN stack. The platform allows users to browse and purchase products online seamlessly. Key features include a user-friendly interface, product filtering and sorting options, and a responsive design optimized for various devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "blue-text-gradient"
        }
      ],
      image: Ecommerce,
      source_code_link: "https://github.com/rajawatajay/E-Commerce_WebSite",
    },
    {
      name: "i-Chat",
      description:
        "Developed a real-time web chat application designed for seamless communication between users. The platform allows instant messaging with live updates and supports multiple users in a single conversation. The application is optimized for performance and user experience, ensuring smooth and responsive interactions.",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "WebSocket",
          color: "green-text-gradient",
        },
        {
          name: "Socket.IO",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/rajawatajay/ichat-node.js",
    },
    {
      name: "Web Quiz",
      description:
        "Developed an interactive quiz website that allows users to test their knowledge on various topics. The platform features dynamic question rendering, a responsive design, and real-time scoring to enhance the user experience. The quiz website is designed to be intuitive, engaging, and accessible across devices.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Quiz,
      source_code_link: "https://github.com/rajawatajay/Web-Based-Quiz/tree/main/Web%20Based%20Quiz",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };