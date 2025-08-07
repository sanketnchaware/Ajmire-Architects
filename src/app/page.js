import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Work />
    </div>
  );
}
