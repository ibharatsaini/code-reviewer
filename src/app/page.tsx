import { HeroHighlightDemo } from "@/components/Hero";
import { ImageScroll } from "@/components/ImageScroll";
import { NavbarDemo } from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import { SidebarDemo } from "@/components/Sidebar";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavbarDemo />
      <HeroHighlightDemo />
      <ImageScroll />
      <Pricing />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       </main>
    </div>
  );
}
