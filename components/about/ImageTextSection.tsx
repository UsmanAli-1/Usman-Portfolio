import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "./button";

export default function ImageTextSection() {
    return (
        <Card className="w-full max-w-4xl mx-auto mt-2 bg-transparent border-none shadow-none">

            <CardContent className="p-0 md:p-0 flex flex-col md:flex-row items-center justify-center md:justify-between w-full space-y-4 md:space-y-0">

                {/* === MAIN LAYOUT CONTAINER - ADJUSTED ALIGNMENT === */}
                <div className="
                    mb-13
                    flex flex-col md:flex-row 
                    items-center md:items-start 
                    gap-4 md:gap-8 p-4 w-full
                    md:justify-between
                ">

                    {/* 1. TEXT (LEFT SIDE) */}
                    <div className="w-full md:w-1/2 text-left mb-10 ">
                        <div className="space-y-1">
                            <p className="text-3xl md:text-4xl font-bold mb-0 text-white">Hi There! 👋</p>
                            <h1 className="text-4xl  md:text-5xl font-semibold mt-0 bg-gradient-to-r from-purple-400/70 to-blue-600/90 bg-clip-text text-transparent">I AM USMAN <br></br>ALI</h1>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-semibold mt-2 md:mt-4 bg-gradient-to-r from-purple-400/70 to-blue-600/90 bg-clip-text text-transparent">Software Engineer </h4>
                    </div>

                    {/* 2. IMAGE (RIGHT SIDE) */}
                    <div className="w-55 h-55 md:mr-22 rounded-full shadow-[0_0_40px_10px_rgba(180,0,255,0.4)] 
                    flex items-center justify-center overflow-hidden  mb-25 md:mb-0">
                        <img
                            src="/images/pic.jpg"
                            alt="Usman Ali Profile"
                            className="w-full h-full object-cover rounded-full border border-5"
                        />
                    </div>


                </div>
            </CardContent>
        </Card>
    );
}