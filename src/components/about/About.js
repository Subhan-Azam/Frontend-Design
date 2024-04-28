import AboutCard from "../aboutCard/AboutCard";

export default function About() {
  return (
    <div>
      <section class="text-gray-600 body-font bg-blue-950">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <AboutCard num="947 +" para="Projects completed successfully" />
            <AboutCard num="400 +" para="Agile developers & designers" />
            <AboutCard num="5 +" para="Offices across 3 continents" />
            <AboutCard num="100 %" para="Customer success" />
          </div>
        </div>
      </section>
    </div>
  );
}
