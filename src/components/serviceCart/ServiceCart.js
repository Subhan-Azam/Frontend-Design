import React from "react";
import Image from "next/image";

const data = [
  {
    src: "/assets/computer.png.webp",
    title: "WordPress Web Design",
    para: "Uniqueness is what matters to us a lot, every WordPress website designed by us is different from each other.",
  },
  {
    src: "/assets/web-programming-1.png.webp",
    title: "Custom Development",
    para: "Hire our experienced developers for custom plugins, functionalities and theme development for WordPress Development.",
  },
  {
    src: "/assets/shopping-cart.png.webp",
    title: "Shop / Online Store",
    para: "Custom WordPress shop or a WooCommerce powered store, we can create any digital shop on WordPress to",
  },
  {
    src: "/assets/coding.png.webp",
    title: "HTML to WordPress",
    para: "We power your website into top gear right away with our hand-coded, cross-browser compatible",
  },
];

export default function ServiceCart() {
  return (
    <div className="flex justify-center flex-wrap mx-9">
      {data.map((item, index) => (
        <section
          key={index}
          className="text-gray-600 body-font w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
        >
          <div className="shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-xl hover:shadow-gray-400 bg-slate-300 rounded-lg h-[350px] lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={item.src}
              />
              <h1 className="leading-8 font-bold text-2xl">{item.title}</h1>
              <p className="leading-relaxed">{item.para}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
