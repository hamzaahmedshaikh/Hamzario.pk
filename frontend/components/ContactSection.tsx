"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: any) {
    e.preventDefault();
    setError("");
    setDone(false);
    try {
      const res = await fetch("/api/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) setDone(true);
      else setError("Failed to send. Please try again later.");
    } catch {
      setError("Error occurred.");
    }
  }

  return (
    <section className="py-12 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-pink">Contact</h2>
      <p className="mb-4 text-gray-700">Location: <span className="font-medium">USA, Tennessee</span></p>
      <form className="space-y-4" onSubmit={submit} aria-label="Contact form">
        <input
          className="w-full border rounded px-4 py-2"
          required
          aria-label="Name"
          placeholder="Your Name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        />
        <input
          className="w-full border rounded px-4 py-2"
          required
          type="email"
          aria-label="Email"
          placeholder="Your Email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        />
        <textarea
          className="w-full border rounded px-4 py-2"
          required
          aria-label="Message"
          placeholder="Your Message"
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        />
        <button className="bg-pink text-white px-6 py-2 rounded hover:bg-yellow font-semibold" type="submit">Send</button>
        {done && <div className="text-green-600 mt-2">Thank you! Message sent.</div>}
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
    </section>
  );
}