"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/" className={`navbar-link ${pathname === '/' ? 'active' : ''}`}>
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/resume" className={`navbar-link ${pathname === '/resume' ? 'active' : ''}`}>
            Resume
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/portfolio" className={`navbar-link ${pathname === '/portfolio' ? 'active' : ''}`}>
            Portfolio
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/contact" className={`navbar-link ${pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
