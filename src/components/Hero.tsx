"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { HeroButton } from "./HeroButton";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 pt-44 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Supercharge your code reviews with AI-powered insights {" "}
        <Highlight className="text-black dark:text-white">
        for faster, smarter development.

        </Highlight>
        
      </motion.h1>
      <motion.h4 className="text-center mt-6 text-base	 text-slate-500	">
      Instant AI insights to catch bugs, improve quality, and streamline your coding process.
      </motion.h4>
      {/* <div className="flex justify-center items-center gap-6"> */}
      <HeroButton text="Get Started" />
      {/* <HeroButton /> */}


      {/* </div> */}

    </HeroHighlight>
  );
}
