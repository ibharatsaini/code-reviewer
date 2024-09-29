"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export function HeroButton({text,className}:{text:string,className?:string}) {
    const {isSignedIn} = useUser()
    const router = useRouter()
    function handleClick(){
        console.log(`clicked`)
        console.log(isSignedIn)
        if(!isSignedIn) {
          return   router.push('/signin')
        }
        return router.push('/review')
      }
    
    
  return (
    // <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full m-auto mt-10 px-3 py-1"
        as="button"
        className={`${`bg-black text-white text-xs flex items-center space-x-2 ${className}`}`}
        onClick={()=>handleClick()}
      >
        <span>{text}</span>
      </HoverBorderGradient>
    // </div>
  );
}
