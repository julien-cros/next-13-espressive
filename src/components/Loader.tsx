"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  animate,
	AnimatePresence,
} from "framer-motion";

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
      <div className="fixed w-full h-full">
        <div className="w-full flex flex-col justify-center items-center mt-24 md:mt-28">
          <div className="w-3/4 lg:w-2/3 h-full mt-10">
            <div className="border-t-4 md:border-t-8  border-opacity-0 border-gray-100 w-full h-full">
              <div className="w-full h-10 md:h-20 lg:h-[120px] flex items-center justify-center">
                <p className=" text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem]">
                  The
                </p>
              </div>
              <div className="w-full h-10 md:h-20  lg:h-[120px] border-t-4 md:border-t-8 border-opacity-0 border-gray-100  flex items-center justify-center">
                <p className=" text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem] pr-2">
                  Espresso
                </p>
              </div>
              <div className="w-full h-10 md:h-20  lg:h-[120px] flex items-center justify-center border-t-4 md:border-t-8 border-opacity-0 border-gray-100 ">
                <p className="text-4xl md:text-7xl pt-5 lg:text-9xl font-black lg:tracking-[-0.4rem]">
                  Universe
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 md:w-1/6 h-3 md:h-4 mt-20 justify-center items-center rounded-full border-2 border-black ">
            <motion.div
              className="h-[8px] md:h-[12px] bg-black w-1/4 md:w-1/6 rounded-full"
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
