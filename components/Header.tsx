"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleQuestion,
  faFolder,
  faEnvelope,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import { faGit, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);


  const pathname = usePathname(); // get current route
  const navItems = [
    { name: "Home", href: "/", icon: faHouse },
    { name: "About", href: "/about", icon: faCircleQuestion },
    { name: "Projects", href: "/projects", icon: faFolder },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center">
      {/* Inner container: 85% width, rounded, shadow */}
      <div className="md:w-[65%] w-[85%] mt-6 p-3.5 flex justify-between items-center bg-gradient-to-r from-blue-900/30 to-pink-900/20 backdrop-blur-md rounded-4xl shadow-lg text-white relative">
        {/* Left: profile image */}
        <div className="flex items-center gap-3">
          <Image
            src="/profile.avif"
            width={36}
            height={36}
            alt="My photo"
            className="rounded-full ml-2"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex items-center gap-2 ml-6 px-1 relative group text-gray-500 `}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ width: 14 }}
                    className={`${isActive ? "text-white" : "text-gray-500 group-hover:text-white"} transition-colors duration-300`}
                  />
                  <span
                    className={`${isActive ? "text-white" : "text-gray-500 group-hover:text-white"} transition-colors duration-300`}
                  >{item.name}</span>

                  {/* Underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-purple-500 transition-all duration-300 
                  ${isActive ? "w-full bg-gradient-to-r from-pink-900/10 to-blue-500/90 " : "w-0 group-hover:w-full bg-gradient-to-r from-pink-900/10 to-blue-500/90   "}`}
                  />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Right icons */}
        <nav className="flex items-center gap-3">
          <Link href="#git" className="px-2 hover:underline">
            <FontAwesomeIcon icon={faGit} style={{ width: 18 }} />
          </Link>
          <Link href="#linkedin" className="px-2 hover:underline">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ width: 14 }} />
          </Link>
          <Link href="#email" className="px-2 hover:underline">
            <FontAwesomeIcon icon={faEnvelope} style={{ width: 14 }} />
          </Link>
          <Link href="#switch" className="px-4 hover:underline">
            <FontAwesomeIcon icon={faMoon} style={{ width: 14 }} />
          </Link>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden text-white text-xl mr-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              style={{ width: 14 }}
            />
          </button>
        </nav>

        {/* Mobile vertical menu */}
        {
          isMenuOpen && (
            <nav
              className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 
             w-[100%] bg-slate-950 text-white flex flex-col items-left py-4 space-y-3 rounded-b-2xl shadow-lg"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <div className={`flex items-center gap-2 ml-4 px-3 relative group  p-2 rounded-md 
                      ${isActive ? "w-71 bg-blue-900/20 " : "w-0 bg-slate-950"}
                      `} >
                      <FontAwesomeIcon
                        icon={item.icon}
                        style={{ width: 14 }}
                        className={`${isActive ? "text-white" : "text-gray-500 group-hover:text-white"} transition-colors duration-300`}
                      />
                      <span
                        className={`${isActive ? "text-white" : "text-gray-500 group-hover:text-white"} transition-colors duration-300`}
                      >{item.name}</span>

                    </div>
                  </Link>
                );
              })}
            </nav>
          )
        }
      </div>
    </header>
  );
}
