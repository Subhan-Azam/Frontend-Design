import React from "react";
import Image from "next/image";
import ServiceBtn from "../animatedCircle/serviceBtn/ServiceBtn";

export default function OurServices() {
  return (
    <div className="px-5">
      <div className="my-20 max-w-[1060px] mx-auto">
        <p className="text-red-600">Our Services</p>
        <h1 className="text-2xl font-semibold">Web Development Services for high performance</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-16">
        <div>
          <Image
            src="/assets/computer-2982270_640.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div>
          <ServiceBtn
            title="Web Development Services"
            para="Create custom web apps from scratch or alter an existing system. Develop compelling assets regardless of the backend/frontend complexity."
            heading="E-commerce Development"
            para2="Build an online marketplace or a secure e-payment solution, craft end-to-end e-commerce platforms with complex integrations, and engaging UX."
            heading2="Web App Development"
            para3="End-to-end web app development using------that includes----- , integration, and complete maintenance to create a secure, scalable, and compatible system."
            heading3="Website & Web Portals"
            para4="Develop easy-to-navigate websites and web portals that offer collaboration, robust architecture, and action-oriented workflows."
          />
          <ServiceBtn
            title="Intranet Experience"
            para="Curate dedicated solutions using multiple platform languages like HTML, Java, and CSS3 to create a private and secure network for our clients."
          />
          <ServiceBtn
            title="Website & Web App UX-UI"
            para="Design responsive and visually appealing web assets that adjust well on multiple devices and platforms, including mobile, and achieve quicker results with out-class user experience."
          />
          <ServiceBtn
            title="Web QA & Testing"
            para="Launch a clean and bug-free product as it undergoes rigorous user aggression, software, performance, and security testing done by our dedicated QA teams."
          />
          <ServiceBtn
            title="Team Support & Maintenance"
            heading="Web Support and Evolution"
            para="A dedicated team of experts available 24/7 to rescue & prevent your website from performance issues with regular bug fixes, improvements & upgrades."
            para2="Meet crucial deadlines by extending your existing team or outsourcing an entire team using our top talents, whatever suits your business requirements and budget."
          />
        </div>
      </div>
    </div>
  );
}
