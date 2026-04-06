// components/SkillsetSection.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Animate from "@/components/Animate";

import {
  SiHtml5,
  //   SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiGit,
  SiUbuntu,
  SiDocker,
  SiGithub,
  SiNextdotjs,
  SiJquery,
  SiVercel,
  SiRender,
  SiRailway,
  SiPostman,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import {
  TbDatabase,
  TbServer,
  TbTerminal,
  TbCloud,
  TbCode,
} from "react-icons/tb";

const skillData = [
  // === FRONTEND ===
  { icon: SiHtml5 },
//   { icon: SiCss3 },
  { icon: SiJavascript },
  { icon: SiReact },
  { icon: SiNextdotjs },
  { icon: SiJquery },

  // === BACKEND ===
  { icon: SiNodedotjs },
  { icon: SiPhp },
  { icon: SiPython },
  { icon: TbCode },
  { icon: TbServer },

  // === DATABASES ===
  { icon: SiMongodb },
  { icon: SiMysql },
  { icon: SiPostgresql },
  { icon: TbDatabase },
];

const toolUse = [
  { icon: SiGithub },
//   { icon: SiDocker },
  { icon: TbTerminal },

  { icon: SiVercel },
  { icon: SiRender },
  { icon: SiRailway },
  { icon: SiPostman },

  // CV extras (IMPORTANT 🔥)
  { icon: TbCloud }, // for Firebase / hosting
];

export default function SkillsetSection() {
  return (
    <>
      <Card className="w-full max-w-4xl mx-auto mt-12 border-none bg-tranparent  shadow-none">
        <Animate type="fade-up">
          <CardHeader>
            <CardTitle className="md:text-4xl text-2xl font-bold text-center text-purple-600">
              <strong className="text-white">Professional</strong> Skillset
            </CardTitle>
          </CardHeader>
        </Animate>

        <CardContent className="py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center ">
            {skillData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Animate key={index} type="pop" delay={0.2}>
                  <div
                    className="flex flex-col items-center justify-center p-4 
                    w-20 h-20 rounded-full bg-slate-950 border border-gray-600 
                    shadow-md transition hover:scale-105 hover:bg-gray-900/40 duration-200"
                  >
                    <Icon className="text-4xl mb-2 text-white" />
                  </div>
                </Animate>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl mx-auto border-none bg-transparent mb-10 shadow-none">
        <Animate type="fade-up">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center text-purple-600">
              Tools <strong className="text-white">I use</strong>
            </CardTitle>
          </CardHeader>
        </Animate>

        <CardContent className="py-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full">
            {toolUse.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Animate key={index} type="pop" delay={0.2}>
                  <div
                    className="
                    flex flex-col items-center justify-center 
                    p-4  
                    w-20 h-20 sm:w-20 sm:h-20
                    rounded-full 
                    bg-slate-950 border border-gray-600 
                    shadow-md 
                    transition hover:scale-105 hover:bg-gray-900/40 duration-200
                  "
                  >
                    <Icon className="text-3xl sm:text-4xl mb-2 text-white" />
                  </div>
                </Animate>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
