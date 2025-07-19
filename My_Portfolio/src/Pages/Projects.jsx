import React, { useState, useRef, useEffect } from 'react';
import project1 from '../assets/557shots_so.png';
import project2 from '../assets/271_1x_shots_so.png';
import project3 from '../assets/pr3.png';
import project4 from '../assets/pr4.png';
import project5 from '../assets/pr5.png';
import project6 from '../assets/pr6.png';
import project7 from '../assets/pr7.png';
import project8 from '../assets/pr8.png';
import './pages.css';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const projectsPerPage = 2;

  const projects = [
    {
      img: project1,
      tags: ['React.js', 'Responsive'],
      title: 'CareNest – Health Assistant App',
      desc: 'An AI-powered baby care app built with React.js. It records a baby’s crying sound and analyzes it using machine learning to detect the reason (e.g., hunger, discomfort). The app includes smooth UI, interactive features, and a fully responsive design.',
      live: 'https://carenestfinal.vercel.app',
      github: 'https://github.com/esraa-abdo3/-Graduation-Project.git',
    },
    {
      img: project2,
      tags: ['React.js', 'Recharts', 'Dashboard', 'Responsive'],
      title: 'Admin Dashboard – User & Data Management',
      desc: 'A responsive admin dashboard built with React.js and Recharts. It lets admins track user data, manage accounts, and view dynamic charts and performance insights easily.',
      live: 'https://carenestfinal.vercel.app',
      github: 'https://github.com/esraa-abdo3/-Graduation-Project/tree/main/src/Dashboard',
    },
    {
      img: project4,
      tags: ['JavaScript', 'Quiz App', 'Authentication', 'Timer', 'Responsive'],
      title: 'English Exam Web App',
      desc: 'A dynamic English exam page built with vanilla JavaScript. Users can sign up or log in, then access a quiz where questions change every time. Includes a timer, question flagging, and a detailed result page showing mistakes. Note: Backend is local and not hosted, so only the landing page works in the demo.',
      live: '*',
      github: 'https://github.com/NouranNoah/FormExam-By-JS.git',
    },
    {
      img: project3,
      tags: ['React.js', 'Stripe', 'Responsive', 'Educational Platform'],
      title: 'EduPlatform – Course Marketplace',
      desc: 'A complete educational platform where users can register, browse, and purchase courses, while instructors can upload, edit, and delete their content. Built using React.js and integrated with Stripe for secure payments. Note: backend is not hosted, so login and course API features might not work in the live demo.',
      live: 'https://rean-e-learning-project.vercel.app',
      github: 'https://github.com/NouranNoah/REAN-E-Learning-Project.git',
    },
    {
      img: project5,
      tags: ['React.js', 'Todo App', 'Dashboard', 'Responsive'],
      title: 'Task Manager – To‑Do App',
      desc: 'A full-featured To‑Do List app built with React.js. Users can sign in, add tasks with titles, start and due dates, mark tasks as done, edit or delete them. Includes a simple dashboard for tracking task status. Note: Backend is local, so login and data saving features won’t work in the live preview.',
      live: 'https://todolist-one-taupe-26.vercel.app/',
      github: 'https://github.com/NouranNoah/to_do_list.git',
    },
    {
      img: project6,
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      title: 'PetCare – Animal Welfare & Adoption Platform',
      desc: 'A creative and smooth-designed pet care platform built with HTML, CSS, and JavaScript. It features sections for veterinary consultations, pet adoption, and an online store for all pet essentials. The UI is clean, responsive, and user-friendly.',
      live: 'https://petcare-amber-nu.vercel.app/',
      github: 'https://github.com/NouranNoah/pet_care.git',
    },
    {
      img: project7,
      tags: ['JavaScript', 'Landing Page', 'Responsive'],
      title: 'Mini Stor Landing Page',
      desc: 'A simple and modern landing page built using vanilla JavaScript. Fully responsive and user-friendly, designed with clean transitions and a smooth UI experience.',
      live: 'https://mini-store--lime.vercel.app/',
      github: 'https://github.com/NouranNoah/MiniStore.git',
    },
    {
      img: project8,
      tags: ['JavaScript', 'Landing Page', 'Dark Mode', 'Responsive'],
      title: 'Dark Mode Landing Page',
      desc: 'A simple and modern landing page with dark mode toggle built using vanilla JavaScript. Fully responsive and user-friendly, designed with clean transitions and a smooth UI experience.',
      live: 'https://nourannoah.github.io/OpenSky',
      github: 'https://github.com/NouranNoah/OpenSky.git',
    },
  ];

  const numOfDots = Math.ceil(projects.length / projectsPerPage);

  const scrollToCard = (dotIndex) => {
    const slider = sliderRef.current;
    const cardWidth = slider.offsetWidth / projectsPerPage;
    slider.scrollTo({ left: dotIndex * cardWidth * projectsPerPage, behavior: 'smooth' });
    setActiveIndex(dotIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % numOfDots;
      scrollToCard(nextIndex);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="projectsSection" id="projects">
      <p className="sectionTag">– My Portfolio</p>
      <h2 className="sectionTitle">
        My <span className="highlight">Latest</span> <span className="highlightDark">Projects</span>
      </h2>

      <div className="sliderDotsWrapper">
        <div className="cardsProjects singleView" ref={sliderRef}>
          {projects.map((project, index) => (
            <div className="projectCard" key={index}>
              <img src={project.img} alt="project" className="projectImage" />
              <div className="projectContent">
                <div className="projectTags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDesc">{project.desc}</p>
                <div className="projectLinks">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dotsContainer">
          {Array.from({ length: numOfDots }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
