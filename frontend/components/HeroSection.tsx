export default function HeroSection() {
  return (
    <section className="py-12 text-center bg-white">
      <h1 className="text-4xl font-bold mb-2 text-pink">Evelyn Grace Carter</h1>
      <h2 className="text-xl font-medium text-gray-700 mb-4">Full-Stack MERN Developer</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-6">
        I’m Evelyn Grace Carter — a Full-Stack MERN Developer building production-grade web apps using HTML5, CSS3, JavaScript (ES6+), React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, Firebase, and React Native. I convert static prototypes into secure, scalable, and accessible full-stack applications, ship RESTful APIs with robust validation, and deploy CI/CD pipelines for reliable production delivery. I prioritize performance, accessibility (WCAG), and reusable component systems.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://x.com/hamzariopk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded bg-pink text-white font-semibold hover:bg-yellow aria-label='Hire Me on X'"
        >
          Hire Me
        </a>
        <a
          href="https://github.com/hamzaahmedshaikh"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded border border-gray-300 text-gray-800 hover:bg-gray-100 aria-label='GitHub Profile'"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}