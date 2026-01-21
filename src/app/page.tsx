import AllCourse from "@/components/AllCourse";
import FaqSection from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {

  

  return (
    <div>
      <HeroSection></HeroSection>
      <AllCourse></AllCourse>
      <Testimonials></Testimonials>
      <FaqSection></FaqSection>
    </div>
  );
}
