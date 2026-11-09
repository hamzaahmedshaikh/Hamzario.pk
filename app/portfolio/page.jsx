"use client";
import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Hamza Clinic Hackathon",
    category: "Web-Based Applications",
    image: "/hamza-clinic-img.PNG",
    link: "https://hamza-clinic.vercel.app"
  },
  {
    id: 2,
    title: "Foodie Restaurant Website",
    category: "Web development",
    image: "/foodie-resturant-website.PNG",
    link: "https://hamzaahmedshaikh.github.io/foodie-resturant-website/"
  },
  {
    id: 3,
    title: "E-Commerce Store",
    category: "Web-Based Applications",
    image: "/ecom-web.PNG",
    link: "https://hamzaahmedshaikh.github.io/ecom-web/men.html"
  },
  {
    id: 4,
    title: "Parallax Scrolling",
    category: "Web development",
    image: "https://i.ibb.co/PMD3T7G/Parallax-scroll-animation-1.png",
    link: "https://hamzaahmedshaikh.github.io/scroll/"
  },
  {
    id: 5,
    title: "Bootstrap 5 Navbar",
    category: "Web development",
    image: "https://i.ibb.co/0tfbJMv/Animated-Tab-Bar.png",
    link: "https://hamzaahmedshaikh.github.io/tab-bar/"
  },
  {
    id: 6,
    title: "AI Chess Game",
    category: "Games",
    image: "https://i.ibb.co/NVbybCP/Hamza-Chess-Game.png",
    link: "https://hamzaahmedshaikh.github.io/Chess/"
  },
  {
    id: 7,
    title: "Calculator",
    category: "Web-Based Applications",
    image: "https://i.ibb.co/LtQfCrz/Hamza-Ahmed-Calculator-1.png",
    link: "https://hamzaahmedshaikh.github.io/calculator/"
  },
  {
    id: 8,
    title: "3D Rubik's Cube",
    category: "Games",
    image: "https://i.ibb.co/m0f2mKT/Cube.png",
    link: "https://hamzaahmedshaikh.github.io/Cube/"
  },
  {
    id: 9,
    title: "Tower Blocks",
    category: "Games",
    image: "https://i.ibb.co/4Vg8HbL/Screenshot-20230430-034425.jpg",
    link: "https://hamzaahmedshaikh.github.io/tower-blocks/"
  },
  {
    id: 10,
    title: "Login-Signup Form",
    category: "Web development",
    image: "https://i.ibb.co/Sy9g1tr/Log-In-Sign-Up.png",
    link: "https://hamzaahmedshaikh.github.io/login/"
  },
  {
    id: 11,
    title: "Music Player",
    category: "Web-Based Applications",
    image: "https://i.ibb.co/stjrFrv/Music-Player-Hamza-Ahmed.png",
    link: "https://hamzaahmedshaikh.github.io/music-player/"
  },
  {
    id: 12,
    title: "Student ID Card Generator",
    category: "Web development",
    image: "https://i.ibb.co/1YjnrDc7/Capture.png",
    link: "https://hamzaahmedshaikh.github.io/Student-ID-card/"
  },
  {
    id: 13,
    title: "Food Menu App",
    category: "Web development",
    image: "https://i.ibb.co/Kp9dHsVL/Capture.jpg",
    link: "https://hamzaahmedshaikh.github.io/Food-Menu-App/"
  },
  {
    id: 14,
    title: "Data Cards",
    category: "Web development",
    image: "https://i.ibb.co/VWVMqzFJ/Capture.png",
    link: "https://hamzaahmedshaikh.github.io/Show-Data-In-Cards/"
  },
  {
    id: 15,
    title: "Quiz App",
    category: "Web-Based Applications",
    image: "https://i.ibb.co/LX3fcKbc/Capture.png",
    link: "https://hamzaahmedshaikh.github.io/quiz-web-based-app/"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const categories = ['All', 'Games', 'Web-Based Applications', 'Web development'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  const handleSelect = (category) => {
    setFilter(category);
    setIsSelectOpen(false);
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map(cat => (
            <li className="filter-item" key={cat}>
              <button 
                className={filter === cat ? 'active' : ''} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className={`filter-select ${isSelectOpen ? 'active' : ''}`} onClick={() => setIsSelectOpen(!isSelectOpen)}>
            <div className="select-value">{filter === 'All' ? 'Select category' : filter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          
          <ul className="select-list" style={{ display: isSelectOpen ? 'block' : 'none' }}>
            {categories.map(cat => (
              <li className="select-item" key={cat}>
                <button onClick={() => handleSelect(cat)}>{cat}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map(project => (
            <li className="project-item active" key={project.id}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" width="400" height="250" style={{ objectFit: 'cover' }} />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
