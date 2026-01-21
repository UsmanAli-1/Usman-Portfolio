import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Ensure CardHeader and CardTitle are imported

export default function CenteredIntroAndJourney() {
    return (
        // 1. Single Root Element (Div to wrap both cards and add vertical spacing)
        <div className="w-full max-w-3xl px-4 md:mx-auto space-y-8  lg:mt-12 ">

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
                        A <strong>Computer Science graduate</strong> from Iqra University at Karachi.
                    </p>
                    <p className="text-lg text-center text-white">
                        I am currently seeking new opportunities in the tech industry.
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
                        I am a <strong>Software Engineer</strong> with <strong>6 months of professional experience</strong> and over <strong>one year of hands-on web development experience</strong>, focused on building scalable, end-to-end web applications.
                    </p>

                    <ul className="list-disc pl-8 space-y-2 text-white text-lg">
                        <li className="text-left">
                            **MENN Stack** (MongoDB, Express.js, Next, Node.js)
                        </li>
                        <li className="text-left">
                            **Php & jQuery** for handling backend using php and jQuery
                        </li>
                        <li className="text-left">
                            **Python **
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