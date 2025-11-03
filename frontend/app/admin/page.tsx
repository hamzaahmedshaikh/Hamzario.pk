"use client";
import { useState } from "react";
// TODO: Add Firebase Auth, CRUD forms for clients/projects/testimonials

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);

  // Simulated login; replace with Firebase Auth logic
  function fakeLogin() { setAuthed(true); }

  if (!authed) {
    return (
      <main className="max-w-sm mx-auto py-20">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <button
          className="bg-pink text-white px-6 py-2 rounded"
          onClick={fakeLogin}
        >
          Login (Simulated)
        </button>
      </main>
    );
  }
  return (
    <main className="max-w-lg mx-auto py-12">
      <h1 className="text-2xl font-bold mb-6 text-pink">Admin Dashboard</h1>
      <p className="mb-4 text-gray-700">CRUD forms for Projects, Clients, Testimonials go here...</p>
      <div className="border p-4 rounded bg-gray-50">
        <p>For demo: See seed data via API endpoints.</p>
        <ul className="text-xs mt-2">
          <li>GET /api/v1/projects</li>
          <li>GET /api/v1/clients</li>
          <li>GET /api/v1/testimonials</li>
          <li>CRUD available for each via protected POST/PUT/DELETE endpoints.</li>
        </ul>
      </div>
    </main>
  );
}