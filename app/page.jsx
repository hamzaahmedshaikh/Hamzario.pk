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
          Are you looking to <strong>hire a top-tier web developer</strong> or a <strong>MERN stack developer</strong>? I'm Hamza Ahmed Shaikh, an expert <strong>frontend web developer</strong> and full-stack engineer with over 4 years of experience. I specialize in building visually stunning, high-performance, and responsive web applications using React.js, Next.js, Node.js, and the complete MERN stack. 
          <br /><br />
          If you need to hire a freelance web developer in Karachi, Pakistan, or globally, I offer exceptional custom website design, e-commerce development, and UI/UX solutions. With 2+ years of dedicated Shopify development experience, I seamlessly handle custom theme design and payment integrations. 
          <br /><br />
          My passion for modern technologies ensures I deliver scalable, secure, and SEO-optimized web solutions. Whether you are searching for the best frontend developer, or a client looking to build a startup, let's work together to create something amazing. Contact me to discuss your project needs today.
        </p>
      </section>

      <section className="about-gallery">
        <h3 className="h3 gallery-title article-title">Gallery</h3>
        <ul className="gallery-list has-scrollbar">
          <li className="gallery-item">
            <figure className="gallery-img-box">
              <img src="/hamza-ahmed-shaikh-1.jpg" alt="Hamza Ahmed Shaikh - Expert Frontend Web Developer in Karachi" loading="lazy" />
            </figure>
          </li>
          <li className="gallery-item">
            <figure className="gallery-img-box">
              <img src="/hamza-ahmed-shaikh-frontend-developer.jpg" alt="Hamza Ahmed Shaikh coding as a MERN Stack Web Developer" loading="lazy" />
            </figure>
          </li>
          <li className="gallery-item">
            <figure className="gallery-img-box">
              <img src="/hamza-ahmed-shaikh-mern-stack.jpg" alt="Hamza Ahmed Shaikh - Professional Full Stack Web Developer Workspace" loading="lazy" />
            </figure>
          </li>
        </ul>
      </section>

      <section className="services">
        <h3 className="h3 service-title article-title">What I'm Doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg" alt="Custom Website Design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h3 className="service-item-title">Custom Website Design</h3>
              <p className="service-item-text">
                Your website is often the first impression customers have of your brand. Let us help you make it a great one with custom website design tailored to your brand's unique personality.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-dev.svg" alt="Front-End Web Development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h3 className="service-item-title">Front-End Web Development</h3>
              <p className="service-item-text">
                Specializing in creating interactive and responsive websites using HTML, CSS, JavaScript, React, and Next.js that engage your audience and drive results.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title article-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          <li className="testimonials-item" onClick={() => openModal('John Doe', "I had a great experience working with Hamza as my web developer freelancer. He was professional, responsive, and delivered high-quality work. I highly recommend his skills.", 'https://i.ibb.co/g3ThPWD/avatar-1.png')}>
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src="https://i.ibb.co/g3ThPWD/avatar-1.png" alt="Your photo" width="60" />
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
                <img src="https://i.ibb.co/L9TRtJF/avatar-2.png" alt="Somebody's photo" width="60" />
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
                <img src="https://i.ibb.co/fxSM7Yd/avatar-3.png" alt="Your photo" width="60" />
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
                <img src="https://i.ibb.co/1bvGbDT/avatar-4.png" alt="Your photo" width="60" />
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
