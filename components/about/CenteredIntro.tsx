import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Ensure CardHeader and CardTitle are imported

export default function CenteredIntroAndJourney() {
    return (
        // 1. Single Root Element (Div to wrap both cards and add vertical spacing)
        <div className="w-full max-w-3xl mx-auto space-y-8 mt-12">

            {/* === CARD 1: Introduction === */}
            <Card className="shadow-xl bg-gray-100/5 backdrop-blur-md border border-gray-700 
                    transition-all duration-300 ease-in-out
                    hover:shadow-lg hover:shadow-white/5 
                    hover:scale-[1.02]
            "  >
                <CardContent className="space-y-4 pt-2">
                    <p className="text-lg text-center text-white font-semibold">
                        Hi Everyone, I am <strong>Usman Ali</strong> from Karachi, Pakistan.
                    </p>
                    <p className="text-lg text-center text-white">
                        I am currently Employed at <strong>Core Digital</strong>.
                    </p>
                    <p className="text-lg text-center text-white">
                        I have completed <strong>Computer Science</strong> from Iqra University at Karachi.
                    </p>
                </CardContent>
            </Card>

            {/* === CARD 2: Professional Journey === */}
            <Card className="shadow-xl bg-gray-100/5 backdrop-blur-md border border-gray-700 
            transition-all duration-300 ease-in-out
                    hover:shadow-lg hover:shadow-white/5 
                    hover:scale-[1.02]
            ">
                <CardHeader className="pb-0">
                    <CardTitle className="text-2xl font-bold text-center text-white">
                        Professional Journey
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 ">
                    <p className="text-lg text-left text-white">
                        As a passionate **Full Stack Developer** with <strong>2 years of professional experience</strong>, I specialize in building robust web and mobile applications.
                        My expertise spans across:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-white text-lg">
                        <li className="text-left">
                            **MERN Stack** (MongoDB, Express.js, React, Node.js)
                        </li>
                        <li className="text-left">
                            **Python with Django**
                        </li>
                        <li className="text-left">
                            **Flutter** for cross-platform mobile development
                        </li>
                    </ul>
                    <p className="text-lg text-left text-white pt-2">
                        I am dedicated to crafting high-performance and scalable solutions, always seeking to leverage modern technologies to solve complex challenges.
                    </p>
                </CardContent>
            </Card>



            <Card className="shadow-xl bg-gray-100/5 backdrop-blur-md border-0 mb-2
                            rounded-tl-none rounded-bl-none rounded-tr-xl rounded-br-xl
                            border-l-8 border-l-white mt-12
                            transition-all duration-300 ease-in-out
                    hover:scale-[1.02]
                ">
                <CardContent className="space-y-2  ">

                    <p className="text-xl italic text-center text-white font-medium">
                        "My canvas is code, my art is innovation, my goal is impact."
                    </p>

                    <p className="text-lg text-right text-white font-semibold ">
                        — Usman
                    </p>

                </CardContent>
            </Card>

        </div>
    );
}