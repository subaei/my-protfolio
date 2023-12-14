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
    git,
    figma,
    xd,
    php,
    laravel,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    thunder,
    trello,
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
      id: "tech",
      title: "Tech",
    },
    {
      id: "portfolio",
      title: "Portfolio",
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
      title: "Mobile Apps Developer",
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
      name: "xd",
      icon: xd,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "laravel",
      icon: laravel,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Green Light Design",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2016 - April 2017",
      points: [
        "Developing and maintaining web applications using Php and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Safemann Engineering",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - Sep 2017",
      points: [
        "Developing and maintaining web applications using Php and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelancer",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2018 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Freelancer",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Subaei proved me wrong.",
      name: "Omer Abbas",
      designation: "CEO",
      company: "Jwan Company",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mo does.",
      name: "Alour Kamel",
      designation: "RAR",
      company: "Ebdaa Bank Sudan",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Subaei optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Mohammed Safe",
      designation: "CEO",
      company: "Safemann Engineering",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ui-kits Ecommerce",
      description:
        "Web-based platform that allows users to shopping online from various providers, providing a convenient and efficient needs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "trpc",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "#",
      source_code_link_2: "#",
      github: true,
      website: false,
    },
    {
      name: "Thunder Ecommerce",
      description:
        "Web-based platform that allow users to shopping online for various of lambs from Moonlmbs Store.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: thunder,
      source_code_link: "#",
      source_code_link_2: "#",
      github: true,
      website: false,
    },
    {
      name: "Trello Clone",
      description:
        "A trello clone with full functional drag & drop, creative and eligent design of images and cards also fonts.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "orange-text-gradient",
        },
        {
          name: "server actions",
          color: "pink-text-gradient",
        },
      ],
      image: trello,
      source_code_link: "#",
      source_code_link_2: "#",
      github: true,
      website: false,
    },
    {
      name: "Modern Bank",
      description:
        "A comprehensive banking template with modren, creative and eligent design of images and cards also fonts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/subaei/modern-bank-ui",
      source_code_link_2: "https://modern-bank-ui-gilt.vercel.app/",
      github: true,
      website: true,
    },
    {
      name: "Ebdaa Bank Sudan",
      description:
        "Web-based platform for Ebdaa bank microfinance, a full website for th bank and thier clients",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "myslql",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "#",
      source_code_link_2: "http://ebdaabanksd.com",
      github: false,
      website: true,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };