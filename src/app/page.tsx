import Image from "next/image";
import Button from "@/components/ui/Button";
import Highlighter from "@/components/ui/Highlighter";
import MutedButton from "@/components/ui/MutedButton";

export default function Home() {
  return (
    <div className="flex items-center jsutify-center p-[4rem]">
      {/* <Button/> */}
      {/* <Highlighter/> */}
      <MutedButton/>
    </div>
  );
}
