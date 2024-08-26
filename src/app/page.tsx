import Image from "next/image";
import Button from "@/components/ui/Button";
import Highlighter from "@/components/ui/Highlighter";
import MutedButton from "@/components/ui/MutedButton";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
    </div>
  );
}
