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
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Brilliant Career Secondary School</h4>
            <span>May 2023 - May 2024</span>
            <p className="timeline-text">
              I am a 10th-grade student at Brilliant Career School, where I have received an exceptional education.
              The school's dedicated staff have been instrumental in my academic success, providing me with the
              guidance and resources I need to excel. I am excited to continue my educational journey at Brilliant
              Career School and am confident that this institution will help me achieve my goals.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Meta Front-End Developer Professional Certificate</h4>
            <span>Mar 1, 2023 — Aug 28, 2023</span>
            <p className="timeline-text">
              I recently earned the Meta Front-End Developer Professional Certificate, which represents my proficiency
              in front-end web development. During the course, I learned the fundamentals of HTML, CSS, and
              JavaScript, along with responsive design, web accessibility, and user experience design.
              I faced various challenges, but through my persistence and hard work, I overcame them by using online
              resources and seeking help from instructors and peers. This certificate will be a valuable addition to
              my education section on my resume, showcasing my skills and expertise in front-end web development.
            </p>
          </li>
          
          <li className="timeline-item">
            <div className="button-container">
              <a className="button" href="https://github.com/HamzaAhmed04/links/raw/main/Coursera%20ZTSMM65WDABK.pdf" target="_blank" rel="noopener noreferrer">
                <ion-icon name="certificate"></ion-icon>
                <span>Certificate</span>
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
            <h4 className="h4 timeline-item-title">Front-End Developer</h4>
            <span>2021 — Present</span>
            <p className="timeline-text">
              Develop and maintain responsive, dynamic web applications using HTML, CSS, JavaScript, and various
              frameworks and libraries such as React, Angular, and Vue. Collaborate with designers and back-end
              developers to ensure seamless integration of front-end and back-end functionality. Implement best
              practices for accessibility, user experience, and performance optimization.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Developer Intern</h4>
            <span>Summer 2022</span>
            <p className="timeline-text">
              Worked as a front-end web developer intern on a team responsible for creating and maintaining web
              applications using HTML, CSS, JavaScript, and React. Collaborated with team members to identify and
              resolve issues and implement new features. Gained experience with version control using Git and worked
              with Agile methodologies.
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
            <h4 className="h4 timeline-item-title">Lets Work Together</h4>
            <p className="timeline-text">I am available for freelance work as a full-stack web developer. If you have a
              project you'd like to discuss or need help with, please don't hesitate to get in touch.</p>
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
              <h5 className="h5">HTML5 & CSS3</h5>
              <data value="95">95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '95%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">JavaScript (ES6+)</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">React.js / Next.js</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '85%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Node.js & Express.js</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">MongoDB & Mongoose</h5>
              <data value="75">75%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Tailwind CSS</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Git & GitHub</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '85%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Shopify Development</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">RESTful API Development</h5>
              <data value="78">78%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '78%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">UI/UX Design</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '85%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
