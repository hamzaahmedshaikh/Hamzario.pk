import './globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Hamzario | Hamza Ahmed Shaikh - Expert Frontend & MERN Stack Developer',
  description: 'Welcome to Hamzario. Hamza Ahmed Shaikh is a highly skilled Frontend Web Developer and MERN Stack Developer. Hire Hamza for stunning web design, React apps, and custom web development.',
  keywords: 'Hamzario, hamzario.pk, Hamza Ahmed Shaikh, hamza frontend web developer, hamza web developer, hamza mern stack developer, hamzario portfolio, hire hamza web developer, hamza react developer, hamza shopify expert, hamza full stack developer, hamza web designer, frontend developer, MERN stack developer, web developer, portfolio, React.js, Next.js, Node.js, Express.js, MongoDB, freelance web developer Pakistan, Karachi web developer, software engineer',
  openGraph: {
    title: 'Hamza Ahmed Shaikh - Frontend Developer Portfolio',
    description: 'Hamza Ahmed Shaikh is a skilled Frontend Developer and MERN Web Developer specializing in creating stunning websites and web applications.',
    url: 'https://hamzario.pk/',
    siteName: 'Hamzario',
    images: [
      {
        url: 'https://hamzario.pk/PFP.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Ahmed Shaikh - Frontend Developer Portfolio',
    description: 'Hamza Ahmed Shaikh is a skilled Frontend Developer and MERN Web Developer specializing in creating stunning websites and web applications.',
    images: ['https://hamzario.pk/PFP.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://i.ibb.co/Kjjmwd4/my-avatar.png" type="icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
        {/* Ionicons */}
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Hamza Ahmed Shaikh",
              "url": "https://hamzario.pk/",
              "image": [
                "https://hamzario.pk/PFP.jpg",
                "https://hamzario.pk/hamza-ahmed-shaikh-1.jpg",
                "https://hamzario.pk/hamza-ahmed-shaikh-frontend-developer.jpg",
                "https://hamzario.pk/hamza-ahmed-shaikh-mern-stack.jpg"
              ],
              "jobTitle": "Expert Frontend Web Developer & MERN Stack Developer",
              "description": "Are you looking to hire a web developer? Hamza Ahmed Shaikh is a highly skilled Frontend Developer, MERN Stack Developer, and Full Stack Web Developer available for hire. Specializing in React, Next.js, Node.js, Shopify, and custom web development.",
              "knowsAbout": [
                "Web Development", "Frontend Development", "MERN Stack", "React.js", "Node.js", "Shopify Development", "Full Stack Development", "UI/UX Design"
              ],
              "seeks": {
                "@type": "Demand",
                "name": "Freelance Web Development Projects and Full-time Web Developer Roles"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressCountry": "Pakistan"
              },
              "sameAs": [
                "https://github.com/hamzaahmedshaikh",
                "https://twitter.com/hamzaahmedshaikh",
                "https://hamzario.pk/",
                "https://www.instagram.com/thatshamzaahmed"
              ]
            })
          }}
        />
      </head>
      <body>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
