import './globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export const metadata = {
  metadataBase: new URL('https://hamzario.pk'),
  title: {
    default: 'Hamza Ahmed Shaikh (Hamzario) | Expert Full Stack Web Developer & MERN Engineer',
    template: '%s | Hamza Ahmed Shaikh (Hamzario) - Full Stack Web Developer'
  },
  description: 'Welcome to Hamzario. Hamza Ahmed Shaikh is an expert Full Stack Web Developer and MERN Stack Engineer based in Karachi, Pakistan, serving clients globally. Hire Hamza for high-performance React & Next.js web applications, Node.js REST APIs, MongoDB databases, and custom Shopify e-commerce.',
  keywords: [
    'Hamza Ahmed Shaikh',
    'Hamzario',
    'hamzario.pk',
    'hamzariopk',
    'thatshamzaahmed',
    'Full Stack Web Developer',
    'Full Stack Developer Karachi',
    'Full Stack Web Developer Pakistan',
    'Hire Full Stack Developer',
    'MERN Stack Developer',
    'MERN Stack Engineer Pakistan',
    'MERN Stack Developer Karachi',
    'Frontend Web Developer',
    'Backend Web Developer',
    'React Developer Karachi',
    'Next.js Developer Karachi',
    'Node.js Developer Pakistan',
    'Express.js Developer',
    'MongoDB Developer',
    'Shopify Expert Karachi',
    'Shopify Developer Pakistan',
    'UI/UX Designer Karachi',
    'Freelance Web Developer Karachi',
    'Freelance Web Developer Pakistan',
    'Top Web Developer in Pakistan',
    'Best Web Developer in Karachi',
    'Software Engineer Pakistan',
    'JavaScript Developer',
    'TypeScript Developer',
    'Tailwind CSS Developer',
    'Web Development Portfolio',
    'Remote Full Stack Developer',
    'Web Application Engineer'
  ],
  authors: [{ name: 'Hamza Ahmed Shaikh', url: 'https://hamzario.pk' }],
  creator: 'Hamza Ahmed Shaikh',
  publisher: 'Hamza Ahmed Shaikh',
  alternates: {
    canonical: 'https://hamzario.pk/',
  },
  openGraph: {
    title: 'Hamza Ahmed Shaikh (Hamzario) - Full Stack Web Developer Portfolio',
    description: 'Hamza Ahmed Shaikh is an expert Full Stack Web Developer and MERN Stack Engineer from Karachi, Pakistan. Explore interactive web applications, high-performance apps, and hire for freelance or full-time projects.',
    url: 'https://hamzario.pk/',
    siteName: 'Hamzario',
    images: [
      {
        url: 'https://hamzario.pk/PFP.jpg',
        width: 800,
        height: 800,
        alt: 'Hamza Ahmed Shaikh - Full Stack Web Developer & MERN Stack Engineer',
      },
      {
        url: 'https://hamzario.pk/hamza-ahmed-shaikh-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Hamza Ahmed Shaikh Full Stack Developer Workspace',
      }
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Ahmed Shaikh (@hamzariopk) | Full Stack Web Developer',
    description: 'Expert Full Stack Web Developer & MERN Stack Engineer based in Karachi, Pakistan. Specializing in React, Next.js, Node.js, and custom software development.',
    site: '@hamzariopk',
    creator: '@hamzariopk',
    images: ['https://hamzario.pk/PFP.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://hamzario.pk/#person",
        "name": "Hamza Ahmed Shaikh",
        "alternateName": ["Hamzario", "Hamza Ahmed", "hamzariopk", "thatshamzaahmed"],
        "url": "https://hamzario.pk/",
        "image": [
          "https://hamzario.pk/PFP.jpg",
          "https://hamzario.pk/hamza-ahmed-shaikh-1.jpg",
          "https://hamzario.pk/hamza-ahmed-shaikh-frontend-developer.jpg",
          "https://hamzario.pk/hamza-ahmed-shaikh-mern-stack.jpg"
        ],
        "jobTitle": "Full Stack Web Developer & MERN Stack Engineer",
        "email": "mrhamzahmedshaikh@gmail.com",
        "gender": "https://schema.org/Male",
        "nationality": "Pakistani",
        "description": "Hamza Ahmed Shaikh is an expert Full Stack Web Developer and MERN Stack Engineer from Karachi, Pakistan, available for hire globally. Specializes in building modern React, Next.js, Node.js web applications, scalable architectures, and custom e-commerce solutions.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 24.8607,
          "longitude": 67.0011
        },
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "name": "Meta Front-End Developer Professional Certificate",
          "credentialCategory": "Professional Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Meta"
          }
        },
        "knowsAbout": [
          "Full Stack Web Development",
          "MERN Stack Development",
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JavaScript (ES6+)",
          "TypeScript",
          "Shopify Theme Development",
          "RESTful API Development",
          "UI/UX Design",
          "Tailwind CSS",
          "Bootstrap 5",
          "Git & GitHub Actions",
          "SEO Optimization",
          "Geo-Targeting",
          "Web Performance Optimization"
        ],
        "seeks": {
          "@type": "Demand",
          "name": "Freelance Full Stack Web Development Projects, Contract Work, and Full-time Software Engineering Roles"
        },
        "sameAs": [
          "https://github.com/hamzaahmedshaikh",
          "https://x.com/hamzariopk",
          "https://twitter.com/hamzariopk",
          "https://www.instagram.com/thatshamzaahmed",
          "https://hamzario.pk/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://hamzario.pk/#website",
        "url": "https://hamzario.pk/",
        "name": "Hamzario | Hamza Ahmed Shaikh Full Stack Developer",
        "alternateName": ["Hamzario", "Hamzario.pk", "Hamza Ahmed Shaikh Portfolio"],
        "description": "Official personal portfolio and software engineering services website of Hamza Ahmed Shaikh, expert Full Stack Web Developer and MERN Stack Engineer.",
        "publisher": {
          "@id": "https://hamzario.pk/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://hamzario.pk/#service",
        "name": "Hamzario Full Stack Web Development & Software Engineering Services",
        "image": "https://hamzario.pk/PFP.jpg",
        "url": "https://hamzario.pk/",
        "email": "mrhamzahmedshaikh@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 24.8607,
          "longitude": 67.0011
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Pakistan"
          },
          {
            "@type": "Place",
            "name": "Worldwide"
          }
        ],
        "founder": {
          "@id": "https://hamzario.pk/#person"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://hamzario.pk/#projects",
        "name": "Hamza Ahmed Shaikh Portfolio Projects",
        "itemListElement": [
          {
            "@type": "SoftwareApplication",
            "position": 1,
            "name": "Hamza Clinic Hackathon",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "url": "https://hamza-clinic.vercel.app"
          },
          {
            "@type": "SoftwareApplication",
            "position": 2,
            "name": "Foodie Restaurant Website",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Web",
            "url": "https://hamzaahmedshaikh.github.io/foodie-resturant-website/"
          },
          {
            "@type": "SoftwareApplication",
            "position": 3,
            "name": "E-Commerce Store",
            "applicationCategory": "ShoppingApplication",
            "operatingSystem": "Web",
            "url": "https://hamzaahmedshaikh.github.io/ecom-web/men.html"
          },
          {
            "@type": "SoftwareApplication",
            "position": 4,
            "name": "AI Chess Game",
            "applicationCategory": "GameApplication",
            "operatingSystem": "Web",
            "url": "https://hamzaahmedshaikh.github.io/Chess/"
          },
          {
            "@type": "SoftwareApplication",
            "position": 5,
            "name": "Parallax Scrolling",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Web",
            "url": "https://hamzaahmedshaikh.github.io/scroll/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://hamzario.pk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Hamza Ahmed Shaikh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hamza Ahmed Shaikh (also known as Hamzario) is a professional Full Stack Web Developer and MERN Stack Engineer based in Karachi, Pakistan, with over 4 years of experience building modern web applications, custom software solutions, and e-commerce websites for clients worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "What web development services does Hamza Ahmed Shaikh provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hamza provides complete full-stack web development services including React.js and Next.js frontend development, Node.js and Express backend REST API architecture, MongoDB database modeling, custom Shopify theme development, UI/UX design, and SEO/GEO optimization."
            }
          },
          {
            "@type": "Question",
            "name": "What tech stack does Hamza Ahmed Shaikh specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hamza specializes in JavaScript (ES6+), TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, HTML5, CSS3, Tailwind CSS, Bootstrap, Git, GitHub Actions, Vercel, and Shopify Liquid."
            }
          },
          {
            "@type": "Question",
            "name": "How can I hire Hamza Ahmed Shaikh for my project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can hire Hamza directly through the Contact page at https://hamzario.pk/contact, by sending an email to mrhamzahmedshaikh@gmail.com, or through Instagram @thatshamzaahmed and Twitter/X @hamzariopk."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Hamza Ahmed Shaikh located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hamza Ahmed Shaikh is located in Karachi, Sindh, Pakistan, and is available for remote full-stack engineering roles and freelance contracts globally."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://i.ibb.co/Kjjmwd4/my-avatar.png" type="image/x-icon" />
        <link rel="icon" href="/PFP.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/PFP.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="text/plain" href="https://hamzario.pk/llms.txt" title="LLM Knowledge Base" />
        
        {/* Dublin Core Metadata for Semantic & AI Indexing */}
        <meta name="DC.title" content="Hamza Ahmed Shaikh (Hamzario) - Full Stack Web Developer" />
        <meta name="DC.creator" content="Hamza Ahmed Shaikh" />
        <meta name="DC.subject" content="Full Stack Web Development, MERN Stack, React.js, Next.js, Node.js, Portfolio" />
        <meta name="DC.description" content="Official portfolio of Hamza Ahmed Shaikh, expert Full Stack Web Developer and MERN Stack Engineer from Karachi, Pakistan." />
        <meta name="DC.publisher" content="Hamzario" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="World" />

        {/* Geo-Targeting Meta Tags */}
        <meta name="geo.region" content="PK-SD" />
        <meta name="geo.placename" content="Karachi" />
        <meta name="geo.position" content="24.8607;67.0011" />
        <meta name="ICBM" content="24.8607, 67.0011" />
        
        {/* Global SEO, AI & Crawling Directives */}
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#1e1e1f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
