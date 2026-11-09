"use client";
import React, { useState } from 'react';

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/PFP.jpg" alt="Hamza Ahmed Shaikh" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Hamza Ahmed Shaikh">Hamza Ahmed Shaikh</h1>
          <p className="title">Mern Stack Web Developer</p>
        </div>
        <button className="info_more-btn" onClick={() => setIsActive(!isActive)} data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:mrhamzahmedshaikh@gmail.com" className="contact-link">mrhamzahmedshaikh@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Instagram</p>
              <a href="https://www.instagram.com/thatshamzaahmed" target="_blank" rel="noopener noreferrer" className="contact-link">@thatshamzaahmed</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2004-08-22">Aug 22, 2004</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Karachi, Pakistan</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/hamzaahmedshaikh" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Hamza Ahmed Shaikh GitHub Profile">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://x.com/hamzariopk" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Hamza Ahmed Shaikh Twitter Profile">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/thatshamzaahmed" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Hamza Ahmed Shaikh Instagram Profile">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://hamzario.pk" className="social-link" aria-label="Hamza Ahmed Shaikh Portfolio Website">
              <ion-icon name="globe-outline"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
