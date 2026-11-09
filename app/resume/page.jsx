"use client";
import React from 'react';

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education & Certifications</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Meta Front-End Developer Professional Certificate</h4>
            <span>Mar 1, 2023 — Aug 28, 2023</span>
            <p className="timeline-text">
              Earned the Meta Front-End Developer Professional Certificate (Coursera / Meta), demonstrating industry-verified
              proficiency in modern web engineering, JavaScript (ES6+), React.js, web accessibility, responsive UI design,
              and full-cycle version control workflows.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Brilliant Career Secondary School</h4>
            <span>May 2023 - May 2024</span>
            <p className="timeline-text">
              Received a comprehensive secondary education with strong emphasis on mathematics, computer science fundamentals,
              and academic excellence, establishing the logical problem-solving foundations for software engineering.
            </p>
          </li>
          
          <li className="timeline-item">
            <div className="button-container">
              <a className="button" href="https://github.com/HamzaAhmed04/links/raw/main/Coursera%20ZTSMM65WDABK.pdf" target="_blank" rel="noopener noreferrer">
                <ion-icon name="certificate"></ion-icon>
                <span>View Meta Certificate</span>
              </a>
            </div>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Work Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full Stack Web Developer & MERN Engineer</h4>
            <span>2021 — Present</span>
            <p className="timeline-text">
              Architect, develop, and maintain high-performance full-stack web applications and scalable digital solutions
              using React.js, Next.js, Node.js, Express, and MongoDB. Design and consume secure RESTful APIs, engineer dynamic
              interfaces, optimize page speed and SEO/GEO rankings, and implement custom Shopify themes for global clients.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Developer Intern</h4>
            <span>Summer 2022</span>
            <p className="timeline-text">
              Worked as a web developer intern on a team responsible for creating and maintaining web applications using HTML,
              CSS, JavaScript, and React. Collaborated with agile team members to resolve bugs, implement UI features, and maintain
              version control standards via Git and GitHub.
            </p>
          </li>
        </ol>

        <div className="title-wrapper" style={{ marginTop: '30px' }}>
          <div className="icon-box">
            <ion-icon name="person-outline"></ion-icon>
          </div>
          <h3 className="h3">Hire Me</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Let's Work Together</h4>
            <p className="timeline-text">
              I am available for freelance projects, contract engagements, and full-time software engineering roles as a
              Full Stack Web Developer. If you have an exciting product to build or need technical leadership, let's connect.
            </p>
          </li>
          <li className="timeline-item">
            <div className="button-container">
              <a className="button" href="https://drive.google.com/file/d/1RSvropmLMI_MhqCrbkCJBxUwwdWdFKA8/view" target="_blank" rel="noopener noreferrer">
                <span>View Resume</span>
              </a>
            </div>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Full Stack Web Development (MERN)</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">React.js & Next.js</h5>
              <data value="92">92%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '92%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">JavaScript (ES6+) & TypeScript</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Node.js & Express.js REST APIs</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '85%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">MongoDB & Database Architecture</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">HTML5, CSS3 & Tailwind CSS</h5>
              <data value="95">95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '95%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Custom Shopify & E-Commerce</h5>
              <data value="82">82%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '82%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Git, GitHub & CI/CD Pipelines</h5>
              <data value="88">88%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '88%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Technical SEO, GEO & Performance</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
