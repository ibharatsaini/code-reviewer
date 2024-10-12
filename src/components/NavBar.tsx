"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 w-full mt-3" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed w-full top-10 text-lg inset-x-0 mx-auto z-50 px-10", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="codeiq">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item='aa'>
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">

          </div>
        </MenuItem> */}
        <div className="flex justify-between gap-4 text-sm items-center">
          <Link href="/review">Reviews</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact</Link>
        </div>
         <SignedOut>
              <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
          </SignedIn>
        
          {/* <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
            </div>
          </MenuItem> */}
      </Menu>
    </div>
  );
}
