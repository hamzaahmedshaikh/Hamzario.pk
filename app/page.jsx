"use client";
import React, { useState } from 'react';

export default function About() {
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({ title: '', text: '', img: '' });

  const openModal = (title, text, img) => {
    setModalData({ title, text, img });
    setModalActive(true);
  };

  const closeModal = () => setModalActive(false);

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          Are you looking to <strong>hire an expert Full Stack Web Developer</strong> or a <strong>MERN Stack Developer</strong>? I'm <strong>Hamza Ahmed Shaikh</strong> (also known as <strong>Hamzario</strong>), a professional Full Stack Web Developer and software engineer with over 4+ years of hands-on experience crafting cutting-edge web applications. I specialize in building visually stunning, lightning-fast, and responsive digital products using <strong>React.js, Next.js, Node.js, Express.js, and MongoDB</strong>.
          <br /><br />
          If you are seeking to hire a freelance web developer in Karachi, Pakistan, or work with a remote full stack engineer globally, I deliver complete end-to-end solutions. From custom website design, single-page web applications, and secure RESTful APIs to 2+ years of dedicated <strong>Shopify development</strong>, custom themes, and payment gateway integrations.
          <br /><br />
          My focus is on modern architectural standards: scalable clean code, search engine dominance (SEO & GEO optimization), web accessibility, and AI-ready performance. Whether you are an ambitious startup founder, an established business, or a digital agency, let's collaborate to build an outstanding digital presence.
        </p>
      </section>

      <section className="about-gallery">
        <h3 className="h3 gallery-title article-title">Gallery</h3>
        <ul className="gallery-list has-scrollbar">
          <li className="gallery-item">
            <figure className="gallery-img-box">
              <img src="/hamza-ahmed-shaikh-1.jpg" alt="Hamza Ahmed Shaikh - Full Stack Web Developer Karachi" loading="lazy" />
            </figure>
          </li>
          <li className="gallery-item">
            <figure className="gallery-img-box">
              <img src="/hamza-ahmed-shaikh-frontend-developer.jpg" alt="Hamza Ahmed Shaikh coding as a Full Stack & MERN Developer" loading="lazy" />
            </figure>
          </li>
          <li className="gallery-item">
            <figure className="gallery-img-box">
              <img src="/hamza-ahmed-shaikh-mern-stack.jpg" alt="Hamza Ahmed Shaikh - Full Stack Web Developer Workspace" loading="lazy" />
            </figure>
          </li>
        </ul>
      </section>

      <section className="services">
        <h3 className="h3 service-title article-title">What I'm Doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-dev.svg" alt="Full Stack Web Development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h3 className="service-item-title">Full Stack Web Development</h3>
              <p className="service-item-text">
                Building end-to-end web applications with the MERN stack (MongoDB, Express, React, Node.js) and Next.js, delivering high performance, reliability, and security.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg" alt="Front-End Engineering icon" width="40" />
            </div>
            <div className="service-content-box">
              <h3 className="service-item-title">Front-End Engineering & Next.js</h3>
              <p className="service-item-text">
                Crafting responsive, pixel-perfect user interfaces using modern React, Next.js App Router, Tailwind CSS, and HTML5/CSS3 with smooth interactions and accessibility.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-app.svg" alt="Backend & REST APIs icon" width="40" />
            </div>
            <div className="service-content-box">
              <h3 className="service-item-title">Backend & RESTful API Architecture</h3>
              <p className="service-item-text">
                Architecting robust backend services, microservices, REST APIs, database schemas in MongoDB, and authentication workflows that power seamless web experiences.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-photo.svg" alt="Shopify & E-Commerce icon" width="40" />
            </div>
            <div className="service-content-box">
              <h3 className="service-item-title">Custom Shopify & E-Commerce</h3>
              <p className="service-item-text">
                Designing and customizing Shopify stores, Liquid themes, checkout flows, and payment integrations to boost conversion rates and scale online businesses.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Frequently Asked Questions Section for Search Engines & AI Discovery */}
      <section className="faq-section" style={{ marginTop: '30px' }}>
        <h3 className="h3 article-title" style={{ marginBottom: '20px' }}>Frequently Asked Questions</h3>
        <div className="content-card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <h4 className="h4" style={{ color: 'var(--white-2)', marginBottom: '5px' }}>Who is Hamza Ahmed Shaikh?</h4>
            <p style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-6)' }}>
              Hamza Ahmed Shaikh (Hamzario) is a professional Full Stack Web Developer and MERN Stack Engineer from Karachi, Pakistan, specializing in high-performance web applications, React, Next.js, and Shopify stores.
            </p>
          </div>
          <div>
            <h4 className="h4" style={{ color: 'var(--white-2)', marginBottom: '5px' }}>What services does Hamza Ahmed Shaikh provide?</h4>
            <p style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-6)' }}>
              Hamza provides comprehensive web development services: full-stack MERN web applications, Next.js SSR/SSG sites, RESTful API development, MongoDB database modeling, custom Shopify theme engineering, and technical SEO/GEO optimization.
            </p>
          </div>
          <div>
            <h4 className="h4" style={{ color: 'var(--white-2)', marginBottom: '5px' }}>How can I hire Hamza Ahmed Shaikh?</h4>
            <p style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-6)' }}>
              You can contact Hamza directly via the <a href="/contact" style={{ color: 'var(--vegas-gold)', textDecoration: 'underline' }}>Contact Form</a>, by emailing <a href="mailto:mrhamzahmedshaikh@gmail.com" style={{ color: 'var(--vegas-gold)' }}>mrhamzahmedshaikh@gmail.com</a>, or via Instagram <a href="https://www.instagram.com/thatshamzaahmed" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--vegas-gold)' }}>@thatshamzaahmed</a> and Twitter/X <a href="https://x.com/hamzariopk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--vegas-gold)' }}>@hamzariopk</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title article-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          <li className="testimonials-item" onClick={() => openModal('John Doe', "I had a great experience working with Hamza as my web developer freelancer. He was professional, responsive, and delivered high-quality work. I highly recommend his skills.", 'https://i.ibb.co/g3ThPWD/avatar-1.png')}>
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src="https://i.ibb.co/g3ThPWD/avatar-1.png" alt="John Doe" width="60" />
              </figure>
              <h4 className="h4 testimonials-item-title">John Doe</h4>
              <div className="testimonials-text">
                <p>I had a great experience working with Hamza as my web developer freelancer. He was professional, responsive, and delivered high-quality work. I highly recommend his skills.</p>
              </div>
            </div>
          </li>
          <li className="testimonials-item" onClick={() => openModal('Jane Smith', "I hired Hamza to work on my website and I was impressed by his expertise, attention to detail, and willingness to go above and beyond to ensure my satisfaction. He is a talented web developer and I highly recommend him.", 'https://i.ibb.co/L9TRtJF/avatar-2.png')}>
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src="https://i.ibb.co/L9TRtJF/avatar-2.png" alt="Jane Smith" width="60" />
              </figure>
              <h4 className="h4 testimonials-item-title">Jane Smith</h4>
              <div className="testimonials-text">
                <p>I hired Hamza to work on my website and I was impressed by his expertise, attention to detail, and willingness to go above and beyond to ensure my satisfaction. He is a talented web developer and I highly recommend him.</p>
              </div>
            </div>
          </li>
          <li className="testimonials-item" onClick={() => openModal('Sarah Lee', "Hamza is a fantastic web developer freelancer who is knowledgeable, reliable, and easy to work with. He helped me with various web development tasks and exceeded my expectations every time. I highly recommend him to anyone looking for high-quality web development services.", 'https://i.ibb.co/fxSM7Yd/avatar-3.png')}>
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src="https://i.ibb.co/fxSM7Yd/avatar-3.png" alt="Sarah Lee" width="60" />
              </figure>
              <h4 className="h4 testimonials-item-title">Sarah Lee</h4>
              <div className="testimonials-text">
                <p>Hamza is a fantastic web developer freelancer who is knowledgeable, reliable, and easy to work with. He helped me with various web development tasks and exceeded my expectations every time. I highly recommend him to anyone looking for high-quality web development services.</p>
              </div>
            </div>
          </li>
          <li className="testimonials-item" onClick={() => openModal('Mike Johnson', "Hamza is a highly skilled web developer freelancer who is dedicated, communicative, and delivers top-notch work. He helped me with my website redesign and I couldn't be happier with the results. I would highly recommend him.", 'https://i.ibb.co/1bvGbDT/avatar-4.png')}>
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src="https://i.ibb.co/1bvGbDT/avatar-4.png" alt="Mike Johnson" width="60" />
              </figure>
              <h4 className="h4 testimonials-item-title">Mike Johnson</h4>
              <div className="testimonials-text">
                <p>Hamza is a highly skilled web developer freelancer who is dedicated, communicative, and delivers top-notch work. He helped me with my website redesign and I couldn't be happier with the results. I would highly recommend him.</p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonials Modal */}
      <div className={`modal-container ${modalActive ? 'active' : ''}`}>
        <div className="overlay" onClick={closeModal}></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" onClick={closeModal}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img src={modalData.img} alt={modalData.title} width="80" />
            </figure>
            <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-quote.svg" alt="quote icon" />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title">{modalData.title}</h4>
            <div data-modal-text>
              <p>{modalData.text}</p>
            </div>
          </div>
        </section>
      </div>

      <section className="clients">
        <h3 className="h3 clients-title article-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="https://i.ibb.co/JvLjFj0/logo-1-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="https://i.ibb.co/NTMKs3q/logo-2-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="https://i.ibb.co/6sX8MB5/logo-3-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="https://i.ibb.co/Fg84R43/logo-4-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="https://i.ibb.co/NFHtfsX/logo-5-color.png" alt="client logo" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="https://i.ibb.co/wWY0pdC/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
