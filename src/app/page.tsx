import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import Plans from "@/components/Plans"

export default function Home() {
  return (
    <div className="bg-[#1D1D1D] min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <Services />
      <Plans />

    </div>
  );
}
