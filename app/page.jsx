import Hero from "../sections/Hero";
import About from "../sections/About";
import ClientsCard from "../sections/ClientsCard";
import Goal from "../sections/Goal";
import Services from "../sections/Services";
import Reviews from "../sections/Reviews";
import Contact from "../sections/Contact";
import Blog from "../sections/Blog";
import Subscribe from "../sections/Subscribe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ClientsCard />
      <Goal />
      <Blog />
      <Reviews />
      <Contact />
      <Subscribe />
    </>
  );
}