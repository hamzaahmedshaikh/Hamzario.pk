import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Evelyn Grace Carter | Full-Stack MERN Developer Portfolio",
  description: "Production-ready portfolio MERN app for Evelyn Grace Carter.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 text-gray-900 ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}