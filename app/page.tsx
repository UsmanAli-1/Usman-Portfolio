// /app/page.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ParticleGlobe from "@/components/ParticleGlobe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,          // Code icon
  faLayerGroup,    // Stack icon
  faGlobe,         // Website / Web icon
  faMobileScreen,  // Mobile icon
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="bg-blob-top-right"></div>
      <div className="bg-blob-bottom-left"></div>

      <div className=" h-1/3 text-center text-white px-4  pb-4 md:pb-0">
        {/* Heading */}
        <div className="text-2xl w-3/5 pt-0  mx-auto font-extrabold text-[#8596FF] md:text-7xl md:mt-20">
          Full Stack Developer
        </div>

        {/* White div */}
        <div className="w-50 max-w-[80%] h-50 mx-auto mt-6 
     md:w-80 md:h-80 md:mt-6 rounded-full overflow-hidden ">
          <ParticleGlobe />
        </div>


        {/* Subtext */}
        <div className="w-[300px] text-base text-white/60 leading-relaxed 
                mx-auto mt-4
                md:w-auto md:text-2xl md:mt-8 md:max-w-3xl">
          Crafting modern web and mobile experiences with MERN, Python, Django, and Flutter
        </div>


        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4 items-center w-full md:flex-row md:justify-center md:gap-6 md:mt-10 md:mb-6">
          {/* View My Work */}
          <Button
            asChild
            variant="secondary"
            className="font-semibold text-md text-black/70 bg-gradient-to-r from-purple-400/50 to-blue-600/90 py-5 w-[315px] md:w-47 
            hover:scale-105 hover:bg-purple-600/80 transition-transform"
          >
            <a href="/projects" className="flex items-center justify-center gap-2">
              View My Work <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </Button>

          {/* Learn More About Me */}
          <Button
            variant="outline"
            className="bg-transparent bg-blur bg-white/5 font-bold text-md border border-gray-300/20 py-5 w-[315px] md:w-60 md:py-5 hover:bg-transparent hover:scale-105 hover:text-white hover:bg-white/7 transition-transform"
          >
            <a href="/about" className="flex items-center justify-center">
              Learn More About Me
            </a>
          </Button>
        </div>
      </div>


      {/* tech stack section  */}
      <section className="w-full py-20 bg-[#020618] text-white relative z-10">
        <div className="w-full px-4 md:px-14 ">

          {/* Heading + Text */}
          <div className="text-center mb-16">

            <h2 className="text-3xl font-bold mb-4 md:text-4xl">Tech Stack</h2>
            <p className="text-white/60 w-5/5 md:max-w-2xl mx-auto ">
              Specialized in building scalable applications across multiple platforms
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="border border-white/20 bg-white/2 rounded-xl p-6 bg-transparent backdrop-blur-sm 
            hover:border-white/40 hover:bg-white/7 hover:scale-105 transition-all duration-300
             ">
              <FontAwesomeIcon icon={faLayerGroup} className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">MERN Stack</h3>
              <p className="text-white/60 text-md font-extralight">Full-stack javascript development with MongoDB , Express, React , and  Node.js.</p>
            </div>

            {/* Card 2 */}
            <div className="border border-white/20 bg-white/2 rounded-xl p-6 bg-transparent backdrop-blur-sm
            hover:border-white/40 hover:bg-white/7 hover:scale-105 transition-all duration-300
             ">
              <FontAwesomeIcon icon={faCode} className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Python & Django</h3>
              <p className="text-white/60 text-md font-extralight">Robust backend solutions with Python and Django framework.</p>
            </div>

            {/* Card 3 */}
            <div className="border border-white/20 bg-white/2 rounded-xl p-6 bg-transparent backdrop-blur-sm 
            hover:border-white/40 hover:bg-white/7 hover:scale-105 transition-all duration-300
            ">
              <FontAwesomeIcon icon={faMobileScreen} className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flutter</h3>
              <p className="text-white/60 text-md font-extralight">Cross-platform mobile application with Flutter.</p>
            </div>

            {/* Card 4 */}
            <div className="border border-white/20 bg-white/2 rounded-xl p-6 bg-transparent backdrop-blur-sm 
            hover:border-white/40 hover:bg-white/7 hover:scale-105 transition-all duration-300
            ">
              <FontAwesomeIcon icon={faGlobe} className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-white/60 text-md font-extralight">Modern , responsive web applications with cutting-edge technologies.</p>
            </div>


          </div>

        </div>
      </section>

      <section className="relative py-25 w-full md:py-33 flex justify-center items-center ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/dots.png"
            alt="Background"
            fill
            className=" object-cover opacity-15"
          />
        </div>

        {/* Card */}
        <div className="relative z-10  mx-4 max-w-3xl w-full p-8 pt-10 bg-[#0E132C] border border-white/10 rounded-2xl shadow-lg text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>

          <p className="text-white/70 mb-10 font-light text-lg">
            Let's collaborate to bring your ideas to life. Whether it's a web application,
            mobile app, or custom software solution, I'm here to help.
          </p>

          {/* Button */}
          <Button variant="secondary" className="py-5 px-4  bg-gradient-to-r from-pink-400/40 to-blue-600/90 rounded-3xl text-lg 
          hover:scale-105 hover:bg-purple-600
          "  >
            <a href="/about" className=" flex gap-3 items-center">
              Get In Touch <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </Button>
        </div>
      </section>

    </>
  );
}
