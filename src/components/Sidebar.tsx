"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

interface CodeReviews {
  _id: string,
  title: string,
  code: string,
  review: string,
}

export function SidebarDemo() {
  const [title,setTitle] = useState<CodeReviews[] | []>([])
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    fetch('/api/all-reviews').then(async (res)=>{
      const reviews = await res.json()
      setTitle(reviews.data)
    })
  },[])
  console.log(title)
  return (
    // <div
    //   className={cn(
    //     "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-52 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
    //     "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
    //   )}
    // >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/* <> */}
              <BsLayoutTextSidebarReverse onClick={()=>{
                // console.log(open)
                // setOpen(!open)
              }} />
            {/* </> */}
            <div className="mt-8 flex flex-col gap-3">
              {/* {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))} */}
              {
                title && title.map((value: any,index)=>{
                  return <>
                  <h2 className="rounded-sm cursor-pointer bg-gray-100 p-1 truncate border-box text-sm h-6" key={value._id}>{value.title}</h2>
                  </>
                })
              }
            </div>
          </div>
          <div>
            {/* <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            /> */}
            <SignedOut>
              <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </SidebarBody>
      </Sidebar>
    // </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {/* {[...new Array(4)].map((i) => (
            <div
              key={"first" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))} */}
        </div>
        <div className="flex gap-2 flex-1">
          {/* {[...new Array(2)].map((i) => (
            <div
              key={"second" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
