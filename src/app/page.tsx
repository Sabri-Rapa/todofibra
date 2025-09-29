import Highlight from "./sections/Highlight";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Features from "./sections/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Highlight />
      <Contact />
    </>
  );
}
