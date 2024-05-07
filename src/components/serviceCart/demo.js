import React from "react";
import Image from "next/image";

export default function ServiceCart() {
  const serviceImages = [
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
      para: "Custom WordPress shop or a WooCommerce powered store, we can create any digital shop on WordPress to sell products & services.",
    },
    {
      src: "/assets/coding.png.webp",
      title: "HTML to WordPress",
      para: "We power your website into top gear right away with our hand-coded, cross-browser compatible, W3C validated, pixel perfect HTML to WP theme conversion services",
    },
  ];

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="mx-5 flex flex-wrap flex-col m-4">
            <div class="bg-slate-300 rounded-lg lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                {serviceImages.map((item, i) => {
                  return (
                    <div key={i}>
                      <Image
                        src={item.src}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                      />
                      <h1>{item.heading}</h1>
                      <p class="leading-relaxed">{item.para}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
