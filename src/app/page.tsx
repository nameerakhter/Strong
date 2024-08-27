import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ServiceCard from "@/components/cards/ServiceCard";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-[#1D1D1D] min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <Services />
 
    </div>
  );
}
