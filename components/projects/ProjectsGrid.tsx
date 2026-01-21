"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";



export default function ProjectsGrid() {
    const [openVideo, setOpenVideo] = useState<string | null>(null);


    const projects = [
        {
            title: "Wearify FYP (In Process)",
            description: "A Virtual try-on project , user can signup & signin and get free 120 points , 40 points per image generate , Authentication & Authorization is done ...",
            image: "/images/projects/werify2.png",
            tech: ["MENN", "Shadcn", "Python", "Vercel" , "render"],
            link: "https://wearify-mu.vercel.app/",
            video: null,
        },
        {
            title: "Squad Security ",
            description: "A Squad Security Agency buisness website build on Next.js showcasing their Services , Clients , About , Contact us and handle forms connected to mail... ",
            image: "/images/projects/sq.png",
            tech: ["Next.js", "Shadcn", "Vercel"],
            link: "https://squadsecurity.vercel.app/",
            video: null,
        },
        {
            title: "Hire Hunt ",
            description: "A PHP-based recruitment platform enabling HRs to post jobs and applicants to explore and apply seamlessly. Admin username & password is usman",
            image: "/images/projects/hire.png",
            tech: ["Php", "jQuery", "Html", "Css"],
            link: "https://hirehunt.free.nf/",
            video: null,
        },
        {
            title: "Bookify",
            description: "A book brand website highlighting services, portfolio, and interactive forms using PHP and MySQL. Built with PHP, jQuery, HTML, and CSS..",
            image: "/images/projects/bookify.png",
            tech: ["Php", "jQuery", "Html", "Css"],
            link: "https://bookify.free.nf/",
            video: null,
        },
        {
            title: "SS Security Services",
            description: "A security services website showcasing company work, services, and contact options for potential clients. Built with HTML, CSS, JavaScript, and jQuery.",
            image: "/images/projects/ss.png",
            tech: ["Html", "Css", "Javascript", "jQuery"],
            link: "https://ss-securityservices.firebaseapp.com/",
            video: null,
        },
        {
            title: "Hungrify",
            description: "Ai-Powered Restaurent suggestion web in which you can create your restaurent and our AI suggest you restaurent base on number of persons and budget.",
            image: "/images/projects/hungrify.png",
            tech: ["MERN", "Botpress", "APIs integrate"],
            link: null,
            video: "/images/hungrify.mp4",
        },
        {
            title: "Smart Shuttle Service ",
            description: "A full-stack web app for university shuttle services managing students , drivers, and admin operations. Built with React, Flask, Material-UI, and MariaDB.",
            image: "/images/projects/student-dashboard.png",
            tech: ["React", "Flask", "AWS", "Material UI"],
            link: "https://smartshuttleservice.firebaseapp.com",
            video: null,
        },
        {
            title: "Spotify Clone",
            description: "A responsive Spotify clone project replicating core UI and functionality. Built using HTML, CSS, JavaScript, and media queries.",
            image: "/images/projects/spotify.png",
            tech: ["Html", "Css", "Javascript", "Media Query"],
            link: "https://musicplayer-spotify-clone.web.app",
            video: null,
        },
        {
            title: "Image Gallery",
            description: "responsive image gallery practice project displaying images with modern UI. Built using HTML, CSS, mediaquery, and JavaScript.",
            image: "/images/projects/Gallery.png",
            tech: ["Html", "Css", "Javascript"],
            link: "https://imagegalleryweb.web.app/",
            video: null,
        },

    ];

    return (
        <section className="w-full py-8 md:py-13  backdrop-blur-lg mt-16 md:mt-19"
            style={{
                backgroundImage: " conic-gradient(at top right, #09021aff 0%, #3f1736ff 10%, #100D2F 66%, #020220ff 100%)"
            }}
        >
            <div className="md:w-[92%] w-[90%] mx-auto">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {projects.map((proj, i) => (
                        <Card key={i} className="bg-[#0F172B] backdrop-blur-xl text-white border-white/20 shadow-xl py-0 pb-4 
                         transform transition-all duration-300 hover:-translate-y-4
                        ">

                            {/* Image */}
                            <div className="relative w-full h-47 hover:color-white/20">
                                <Image
                                    src={proj.image}
                                    alt={proj.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute inset-0  hover:bg-black/50 transition-all duration-300 rounded-t-lg"></div>
                            </div>

                            <CardHeader className="min-h-[100px]">
                                <CardTitle className="text-white text-lg ">{proj.title}</CardTitle>
                                <CardDescription className="text-gray-300">
                                    {proj.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex flex-wrap gap-2 ">
                                {proj.tech.map((t, idx) => (
                                    <Badge key={idx} variant="secondary" className="bg-white/10 text-white rounded-md hover:bg-white/20">
                                        {t}
                                    </Badge>
                                ))}
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className="w-full bg-gradient-to-r from-purple-500/60 to-blue-600/90 hover:bg-purple-700 text-black/60 my-2
      transform transition-all duration-300 hover:scale-105"
                                    onClick={() => {
                                        if (proj.link) {
                                            window.open(proj.link, "_blank");
                                        } else if (proj.video) {
                                            setOpenVideo(proj.video);
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 mr-2" />
                                    {proj.link ? "Live Demo" : "Watch Demo"}
                                </Button>
                            </CardFooter>

                        </Card>
                    ))}
                </div>
            </div>
            {openVideo && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
                    <div className="relative w-[90%] top-87 md:top-0 max-w-3xl">
                        <button
                            onClick={() => setOpenVideo(null)}
                            className="absolute -top-4 -right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center"
                        >
                            ✕
                        </button>

                        <video
                            src={openVideo}
                            controls
                            autoPlay
                            className="w-full max-h-[80vh] rounded-lg bg-black"
                        />
                    </div>
                </div>
            )}

        </section>
    );
}
