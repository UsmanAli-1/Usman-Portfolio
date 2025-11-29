import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "./button";

export default function ImageTextSection() {
    return (
        <Card className="w-full max-w-4xl mx-auto mt-2 bg-transparent border-none shadow-none">

            <CardContent className="p-0 md:p-0 flex flex-col md:flex-row items-center justify-center md:justify-between w-full space-y-4 md:space-y-0">

                {/* === MAIN LAYOUT CONTAINER - ADJUSTED ALIGNMENT === */}
                <div className="
                    flex flex-col md:flex-row 
                    items-center md:items-start 
                    gap-4 md:gap-8 p-4 w-full
                    md:justify-between
                ">

                    {/* 1. TEXT (LEFT SIDE) */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <div className="space-y-1">
                            <p className="text-4xl font-bold mb-0 text-white">Hi There! 👋</p>
                            <h1 className="text-5xl font-semibold mt-0 bg-gradient-to-r from-purple-400/70 to-blue-600/90 bg-clip-text text-transparent">I AM USMAN <br></br>ALI</h1>
                        </div>
                        <h4 className="text-3xl font-semibold mt-4 bg-gradient-to-r from-purple-400/70 to-blue-600/90 bg-clip-text text-transparent">Software Developer </h4>
                        {/* <Button className="" variant="default">click</Button> */}
                    </div>

                    {/* 2. IMAGE (RIGHT SIDE) */}
                    <div className=" rounded-full shadow-xl shadow-white/15" >
                        <img
                            src="/profile.avif"
                            alt="Usman Ali Profile"
                            className="w-60 max-w-sm rounded-full object-cover "
                        />
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}