import mongoose from "mongoose";
import Project from "../src/models/Project";
import Client from "../src/models/Client";
import Testimonial from "../src/models/Testimonial";
import User from "../src/models/User";
import dotenv from "dotenv";
dotenv.config();

async function seed() {
  await mongoose.connect(process.env["MONGODB_URI"]!);

  await User.create({
    email: "prettyevelyngracecarter@gmail.com",
    firebaseUid: "FIREBASE_USER_UID", 
    role: "admin",
    name: "Evelyn Grace Carter"
  });

  await Client.insertMany([
    {
      name: "Stripe",
      logoUrl: "https://firebase.storage/stripe-bw.png",
      websiteUrl: "https://stripe.com",
      description: "Online payments and APIs"
    },
    {
      name: "Netflix",
      logoUrl: "https://firebase.storage/netflix-bw.png",
      websiteUrl: "https://netflix.com",
      description: "Streaming service"
    },
    {
      name: "Shopify",
      logoUrl: "https://firebase.storage/shopify-bw.png",
      websiteUrl: "https://shopify.com",
      description: "Ecommerce platform"
    },
    {
      name: "Airbnb",
      logoUrl: "https://firebase.storage/airbnb-bw.png",
      websiteUrl: "https://airbnb.com",
      description: "Travel accommodations"
    },
  ]);

  await Testimonial.insertMany([
    {
      authorName: "Jane Doe",
      role: "CTO, Stripe",
      text: "Evelyn delivered a robust full-stack app on-time with excellent scalability.",
      clientUrl: "https://stripe.com"
    },
    {
      authorName: "John Smith",
      role: "Product Lead, Netflix",
      text: "Impressed by her attention to accessibility and performance.",
      clientUrl: "https://netflix.com"
    },
    {
      authorName: "Sara Lee",
      role: "Manager, Shopify",
      text: "Dashboard admin UI is intuitive and easy for our team.",
      clientUrl: "https://shopify.com"
    },
  ]);

  await Project.create({
    title: "Portfolio Platform",
    description: "Production-ready MERN stack portfolio app with admin dashboard, SSR/SSG, Firebase auth/storage and full CRUD.",
    images: ["https://firebase.storage/portfolio-main.png"],
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase"],
    liveUrl: "https://evelyn.carter.dev",
    repoUrl: "https://github.com/hamzaahmedshaikh/evelyn-portfolio",
    category: "Full-Stack",
    featured: true,
    publishedAt: new Date("2023-10-01")
  });

  console.log("Seed complete!");
  process.exit(0);
}
seed();