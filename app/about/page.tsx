// import Image from "next/image";
import ImageTextSection from '@/components/about/ImageTextSection';
import CenteredIntro from '@/components/about/CenteredIntro';
import ExperienceSection from '@/components/about/ExperienceSection';
import SkillsetSection from '@/components/about/SkillsetSection';


export default function About() {
  return ( 
    <>
      <ImageTextSection />
      <CenteredIntro />
      <ExperienceSection />
      <SkillsetSection />
    </>
  );
}
