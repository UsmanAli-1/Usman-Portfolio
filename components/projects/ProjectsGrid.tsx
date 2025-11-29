"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ProjectsGrid() {
    const projects = [
        {
            title: "Hire Hunt ",
            description: "A full-stack e-commerce app with Stripe payments. A modern portfolio built with Next.js, Tailwind, and ShadCN.",
            image: "/images/projects/hirehunt.png",
            tech: ["Php", "jQuery", "Html", "Css"],
            link: "https://hirehunt.free.nf/",
        },
        {
            title: "SS Security Services",
            description: "ChatGPT-like AI chatbot with custom training data. A modern portfolio built with Next.js, Tailwind, and ShadCN.",
            image: "/images/projects/ss.png",
            tech: ["Html", "Css", "Javascript", "jQuery"],
            link: "https://ss-securityservices.firebaseapp.com/",
        },
        {
            title: "Bookify",
            description: "ChatGPT-like AI chatbot with custom training data. A modern portfolio built with Next.js, Tailwind, and ShadCN.",
            image: "/images/projects/bookify.png",
            tech: ["Php", "jQuery", "Html", "Css"],
            link: "https://bookify.free.nf/",
        },
        {
            title: "Smart Shuttle Service ",
            description: "A full-stack e-commerce app with Stripe payments. A modern portfolio built with Next.js, Tailwind, and ShadCN.",
            image: "/images/projects/iqra.png",
            tech: ["React", "Flask", "AWS", "Material UI"],
            link: "https://smartshuttleservice.firebaseapp.com",
        },
        {
            title: "Spotify Clone",
            description: "ChatGPT-like AI chatbot with custom training data. A modern portfolio built with Next.js, Tailwind, and ShadCN.",
            image: "/images/projects/spotify.png",
            tech: ["Html", "Css", "Javascript", "Media Query"],
            link: "https://musicplayer-spotify-clone.web.app",
        },
        {
            title: "Image Gallery",
            description: "A modern portfolio built with Next.js, Tailwind, and ShadCN. A modern portfolio built with Next.js, Tailwind, and ShadCN.",
            image: "/images/projects/Gallery.png",
            tech: ["Html", "Css", "Javascript"],
            link: "https://imagegalleryweb.web.app/",
        },
    ];

    return (
        <section className="w-full py-13  backdrop-blur-lg mt-19"
        style={{backgroundImage: " conic-gradient(at top right, #09021aff 0%, #3f1736ff 10%, #100D2F 66%, #020220ff 100%)"

        }}
        >
            <div className="md:w-[92%] w-[90%] mx-auto">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                <CardTitle className="text-white text-lg mt-3">{proj.title}</CardTitle>
                                <CardDescription className="text-gray-300">
                                    {proj.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex flex-wrap gap-2 mt-4">
                                {proj.tech.map((t, idx) => (
                                    <Badge key={idx} variant="secondary" className="bg-white/10 text-white rounded-md hover:bg-white/20">
                                        {t}
                                    </Badge>
                                ))}
                            </CardContent>

                            <CardFooter>
                                <Button asChild className="w-full bg-gradient-to-r from-purple-500/50 to-blue-600/90 hover:bg-purple-700 text-black/60 my-4
                                    transform transformation-all duration-300 hover:scale-105
                                ">
                                    <a href={proj.link} target="_blank">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 ml-2" />
                                        Live Demo</a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
