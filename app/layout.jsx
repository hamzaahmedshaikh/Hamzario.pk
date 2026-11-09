import './globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export const metadata = {
  metadataBase: new URL('https://hamzario.pk'),
  title: {
    default: 'Hamza Ahmed Shaikh (Hamzario) | Expert Frontend & MERN Stack Web Developer',
    template: '%s | Hamza Ahmed Shaikh (Hamzario)'
  },
  description: 'Welcome to Hamzario. Hamza Ahmed Shaikh is an expert Frontend Web Developer, MERN Stack Developer, and Full Stack Engineer based in Karachi, Pakistan. Hire Hamza for stunning React/Next.js web apps, Shopify stores, and responsive UI/UX.',
  keywords: [
    'Hamzario',
    'hamzario.pk',
    'Hamza Ahmed Shaikh',
    'Hamza Ahmed',
    'hamzariopk',
    'thatshamzaahmed',
    'Frontend Web Developer Karachi',
    'MERN Stack Developer Pakistan',
    'Hire Web Developer Pakistan',
    'React Developer Karachi',
    'Next.js Developer Karachi',
    'Full Stack Web Developer',
    'Shopify Expert Karachi',
    'UI/UX Designer Karachi',
    'Freelance Web Developer Karachi',
    'Top Web Developer in Pakistan',
    'Web Development Portfolio',
    'Software Engineer Pakistan',
    'JavaScript Developer',
    'Tailwind CSS Developer'
  ],
  authors: [{ name: 'Hamza Ahmed Shaikh', url: 'https://hamzario.pk' }],
  creator: 'Hamza Ahmed Shaikh',
  publisher: 'Hamza Ahmed Shaikh',
  alternates: {
    canonical: 'https://hamzario.pk/',
  },
  openGraph: {
    title: 'Hamza Ahmed Shaikh (Hamzario) - Frontend & MERN Stack Developer Portfolio',
    description: 'Hamza Ahmed Shaikh is an expert Frontend Developer and MERN Stack Developer from Karachi, Pakistan. Explore interactive web apps, modern designs, and hire for freelance projects.',
    url: 'https://hamzario.pk/',
    siteName: 'Hamzario',
    images: [
      {
        url: 'https://hamzario.pk/PFP.jpg',
        width: 800,
        height: 800,
        alt: 'Hamza Ahmed Shaikh - Frontend Developer & MERN Stack Developer',
      },
      {
        url: 'https://hamzario.pk/hamza-ahmed-shaikh-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Hamza Ahmed Shaikh Web Developer Workspace',
      }
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Ahmed Shaikh (@hamzariopk) | Frontend & MERN Developer',
    description: 'Expert Frontend & MERN Stack Web Developer based in Karachi, Pakistan. Specializing in React, Next.js, and custom web development.',
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
        "alternateName": ["Hamzario", "Hamza Ahmed", "hamzariopk"],
        "url": "https://hamzario.pk/",
        "image": [
          "https://hamzario.pk/PFP.jpg",
          "https://hamzario.pk/hamza-ahmed-shaikh-1.jpg",
          "https://hamzario.pk/hamza-ahmed-shaikh-frontend-developer.jpg",
          "https://hamzario.pk/hamza-ahmed-shaikh-mern-stack.jpg"
        ],
        "jobTitle": "Expert Frontend Web Developer & MERN Stack Developer",
        "email": "mrhamzahmedshaikh@gmail.com",
        "nationality": "Pakistani",
        "description": "Are you looking to hire a web developer? Hamza Ahmed Shaikh (Hamzario) is a highly skilled Frontend Developer, MERN Stack Developer, and Full Stack Web Developer available for hire. Specializing in React, Next.js, Node.js, Shopify, and custom web development.",
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
        "knowsAbout": [
          "Web Development",
          "Frontend Development",
          "MERN Stack",
          "React.js",
          "Next.js",
          "Node.js",
          "Shopify Development",
          "Full Stack Development",
          "UI/UX Design",
          "JavaScript",
          "SEO Optimization"
        ],
        "seeks": {
          "@type": "Demand",
          "name": "Freelance Web Development Projects and Full-time Web Developer Roles"
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
        "name": "Hamzario | Hamza Ahmed Shaikh Portfolio",
        "description": "Official personal portfolio and freelance services website of Hamza Ahmed Shaikh, expert Frontend and MERN Stack Developer.",
        "publisher": {
          "@id": "https://hamzario.pk/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://hamzario.pk/#service",
        "name": "Hamzario Web Development & Design Services",
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
        
        {/* Geo-Targeting Meta Tags */}
        <meta name="geo.region" content="PK-SD" />
        <meta name="geo.placename" content="Karachi" />
        <meta name="geo.position" content="24.8607;67.0011" />
        <meta name="ICBM" content="24.8607, 67.0011" />
        
        {/* Global SEO & Crawling Directives */}
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
