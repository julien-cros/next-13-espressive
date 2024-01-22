"use client";

import React, { useEffect, useRef } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";

const Loader = () => {
  const progressTextRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;

    if (progressText != null) {
      animate(parseInt(progressText), 100, {
        duration: 3,
        delay: 0.5,
        onUpdate: (cv) => {
          if (progressTextRef.current != null)
            progressTextRef.current.textContent = cv.toFixed(0);
        },
      });
    }
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="posts-bottom-animation"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 4,
        }}
      >
        <div className="fixed w-full h-full dark:bg-zinc-800 text-black dark:text-zinc-300">
          <div className="w-full flex flex-col justify-center items-center mt-64">
            <p className=" text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem] text-center">
              The Espresso<br/> Universe
            </p>
            <div className="w-1/4 md:w-1/6 h-3 md:h-4 mt-5  justify-center items-center rounded-full border-2 border-black dark:border-slate-100 ">
              <motion.div
                className="h-[8px] md:h-[12px] bg-black dark:bg-slate-100 w-1/4 md:w-1/6 rounded-full"
                key="loading"
                initial={{ opacity: 1, width: "0%" }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                }}
              />
            </div>
            <div className="mt-5 flex flex-row">
              <p ref={progressTextRef}>0</p>
              <p>%</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
