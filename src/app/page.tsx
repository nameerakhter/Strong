import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import Plans from "@/components/Plans"
import Tools from "@/components/Tools";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="bg-[#1D1D1D] min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <Services />
      <Plans />
      <Tools />
      <Reviews />


    </div>
  );
}
