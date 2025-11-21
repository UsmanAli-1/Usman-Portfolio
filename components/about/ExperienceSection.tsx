// components/ExperienceSection.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experienceData = [
  {
    title: "Software Developer",
    company: "Techanzy Limited",
    duration: "2023 - Present",
  },
  {
    title: "Freelance Full Stack Dev",
    company: "Various Clients",
    duration: "2022 - 2023",
  },
  {
    title: "Junior Web Developer",
    company: "Tech Solutions Co.",
    duration: "2021 - 2022",
  },
  {
    title: "Intern Web Development",
    company: "University Lab",
    duration: "2020 - 2021",
  },
];

export default function ExperienceSection() {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-12  
    shadow-xl bg-gray-100/5 backdrop-blur-md border border-gray-700
    mb-10
    ">

      <CardHeader>
        <CardTitle className="text-4xl font-bold text-center text-purple-700">
          RROFESSIONAL EXPERIANCE
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* === HORIZONTAL TIMELINE CONTAINER === */}
        <div className="relative overflow-x-auto pb-4 custom-scroll-timeline" >

          {/* --- 2. EXPERIENCE CARDS (Horizontal Flex) --- */}
          <div className="flex flex-nowrap items-center space-x-8 relative 
           ">

            {experienceData.map((exp, index) => (

              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 w-60 md:w-57 pl-2" // w-60/w-72 defines the width of each card
              >

                {/* Experience Card (small card) */}
                <Card className="w-full h-full py-2 gap-0 bg-gray-100/5 backdrop-blur-md border border-gray-500 shadow-xl transition 
                transition-all duration-300 ease-in-out
                hover:scale-[1.04]
                ">
                  <CardHeader className="justify-center">
                    <h3 className={`text-lg font-semibold text-white leading-snug`}>
                      {exp.company}
                    </h3>
                  </CardHeader>
                  <CardHeader className="justify-center ">
                    <p className="text-sm text-gray-400 ">
                      <strong>{exp.duration}</strong>
                    </p>
                  </CardHeader>
                </Card>
              </div>

            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}