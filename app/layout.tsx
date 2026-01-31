import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import BackgroundDots from "@/components/BackgroundDots";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Usman Ali | Portfolio | Full Stack Developer",
  description: "Portfolio of a Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="antialiased min-h-screen pt-[90px]"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(50, 23, 51, 1) 0.001%, #0a132bff 100%)",
          backgroundAttachment: "fixed",
        }}
      >
        <BackgroundDots />
        <Header />
        {children}

        <a
          href="/Usman-Ali-FullStack_CV.pdf"
          download
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center 
          hover:bg-blue-600/70  z-40 hover:scale-110 duration-300 transition"
          title="Download Resume"
        >
          <FontAwesomeIcon icon={faFileAlt} className="text-white text-md" />
        </a>
      </body>
    </html>
  );
}


