import React from "react";
import NavButton from "../navbutton/NavButton";
import AnimatedCircle from "../animatedCircle/AnimatedCircle";

export default function Header() {
  return (
    // <div className="grid grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:place-items-center lg:px-10 bg-green-500">
    //   <div className="order-2 lg:order-none">
    //     <h1>Full Stack Web Design & Development Service</h1>
    //     <p>
    //       Discover a more sophisticated approach to web development with grade-A
    //       web apps that can transform operations, profitability, and scale for
    //       your business.
    //     </p>
    //     <NavButton />
    //   </div>
    //   <div className="bg-red-500 w-96 h-96 order-1 lg:order-none"></div>
    // </div>
    <div className="relative grid grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:place-items-center lg:px-10 py-10 lg:py-20">
      <div className="order-2 mt-20 lg:order-none text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Full Stack Web Design & Development Service
        </h1>
        <p className="text-lg lg:text-xl mt-4 lg:mt-6">
          Discover a more sophisticated approach to web development with grade-A
          web apps that can transform operations, profitability, and scale for
          your business.
        </p>
        <div className="mt-8 lg:mt-12">
          <NavButton />
        </div>
        <div className="mt-28">
          <p>Trusted by:</p>
          <div className="flex gap-5">
            <div className="bg-green-300 w-16 h-8"></div>
            <div className="bg-yellow-300 w-16 h-8"></div>
            <div className="bg-blue-400 w-16 h-8"></div>
            <div className="bg-gray-500 w-16 h-8"></div>
            <div className="bg-green-300 w-16 h-8"></div>
            <div className="bg-blue-950 w-16 h-8"></div>
          </div>
        </div>
        <div className="absolute top-[43%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 md:absolute md:top-[47%] md:left-[85%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 lg:absolute lg:top-1/2 lg:left-[60%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
          <AnimatedCircle />
        </div>
      </div>
      <div className="bg-red-500 w-full lg:w-96 h-96 order-1 lg:order-none"></div>
    </div>
  );
}
