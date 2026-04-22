"use client";
import React, { useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');

    window.emailjs
      .sendForm('service_tazwfcc', 'template_m90h3ga', formRef.current, 'g3y8OaZ0HKA5crpSV')
      .then(
        (result) => {
          setSuccessMsg("Message sent successfully!");
          setIsSubmitting(false);
          formRef.current.reset();
        },
        (error) => {
          setErrorMsg("An error occurred, Please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115856.97491717351!2d67.04278454504106!3d24.84606132410313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1683050186981!5m2!1sen!2s"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        {successMsg && <p style={{ color: 'var(--vegas-gold)', marginBottom: '15px' }}>{successMsg}</p>}
        {errorMsg && <p style={{ color: 'red', marginBottom: '15px' }}>{errorMsg}</p>}
        <form className="form" ref={formRef} onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input type="text" name="user_name" className="form-input" placeholder="Full name" required />
            <input type="email" name="user_email" className="form-input" placeholder="Email address" required />
          </div>
          <textarea name="message" className="form-input" placeholder="Your Message" required></textarea>
          <button className="form-btn" type="submit" disabled={isSubmitting}>
            <ion-icon name="paper-plane"></ion-icon>
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>
    </article>
  );
}
