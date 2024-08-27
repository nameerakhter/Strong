import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <div className="bg-[#1D1D1D] min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
    </div>
  );
}
