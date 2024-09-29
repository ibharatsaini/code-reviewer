"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";
import ReivewImage from '@/app/images/review.jpg'
export function ImageScroll() {
  return (
    <div className="flex flex-col mt-40">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Code Reviews
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={ReivewImage}
          alt="hero"
        //   height={720}
        //   width={1400}
          className="mx-auto w-full rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
