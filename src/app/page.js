import About from "@/components/about/About";
import DiscussAboutProject from "@/components/discussAboutProject/DiscussAboutProject";
import Goals from "@/components/goals/goals";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import OurProcess from "@/components/ourProcess/OurProcess";
import OurServices from "@/components/ourServices/OurServices";
// import TellingAboutProject from "@/components/tellingAboutProject2/TellingAboutProject2";
// import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <OurServices />
      <OurProcess/>
      <Goals />
      {/* <Slider/> */}
      {/* <TellingAboutProject/> */}
      <DiscussAboutProject/>
    </>
  );
}
