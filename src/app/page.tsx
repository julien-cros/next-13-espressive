"use client";

import Loader from "@/components/Loader";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Render from "@/components/Render";
import {Button} from "@/components/ThemeButton";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const [postName, setPostName] = useState("");

  useEffect(() => {
    const isVisited = window.localStorage.getItem("visited");

    if (!isVisited) {
      setLoading(true);
      setTimeout(() => {
        window.localStorage.setItem("visited", "true");
        setLoading(false);
      }, 5000);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          key="posts-bottom-animation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <main className="flex h-full w-full flex-col items-center pb-4 md:pb-10 pt-16 bg-slate-100 dark:bg-zinc-800 text-black dark:text-zinc-300">
            <div className="h-full w-full flex justify-center text-2xl md:text-5xl font-bold">
              <h2 className="">espressive</h2>

            </div>
							<div className="absolute right-10 top-16">
              <Button />
							</div>
            <div className="w-3/4 lg:w-2/3 h-full mt-10">
              <div className="border-t-4 md:border-t-8 border-black dark:border-zinc-300 w-full h-full">
                <div className="w-full h-10 md:h-20 lg:h-[120px] flex items-center ">
                  <p className="text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem]">
                    The
                  </p>
                </div>
                <div className="w-full h-10 md:h-20  lg:h-[120px] border-t-4 md:border-t-8 border-black dark:border-zinc-300  flex items-center justify-end">
                  <p className="text-right text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem] pr-2">
                    Espresso
                  </p>
                </div>
                <div className="w-full h-10 md:h-20 pt-5  lg:h-[120px] flex items-center border-t-4 md:border-t-8 border-black dark:border-zinc-300 ">
                  <p className="text-4xl md:text-7xl lg:text-9xl font-black lg:tracking-[-0.4rem]">
                    Universe
                  </p>
                </div>
                <motion.div
                  key="posts-bottom-animation"
                  initial={{ opacity: 0, y: "5%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div className="gap-4 pt-10 md:pt-36">
                    {allPosts
                      .sort((a, b) => compareDesc(a.createdAt, b.createdAt))
                      .map((p) => (
                        <div
                          key={p.title}
                          className="pt-4 md:p-10 h-36 overflow-y-hidden"
                        >
                          <div
                            className="pl-2 md:pl-10 border-t-2 border-black dark:border-zinc-300"
                            key={p.title}
                          >
                            <div className="grid grid-flow-row-dense grid-cols-3 lg:grid-cols-2">
                              <Link
                                href={p.url}
                                className="col-span-2 lg:col-span-1"
                                onMouseOver={() => {
                                  setDisplay(true);
                                  setPostName(p.title);
                                }}
                                onMouseLeave={() => {
                                  setDisplay(false);
                                  setPostName("");
                                }}
                              >
                                <h2 className="text-md md:text-2xl">
                                  {p.title}
                                </h2>
                                <h3 className=" text-slate-600 text-sm md:text-xl">
                                  {p.updatedAt}
                                </h3>
                              </Link>
                              <AnimatePresence>
                                {display && postName === p.title && (
                                  <motion.div
                                    className={`pl-4 md:pl-10 pr-4 ${
                                      display ? "hidden md:block" : "hidden"
                                    } `}
                                    key="posts-bottom-animation"
                                    initial={{ opacity: 0, y: "2%" }}
                                    animate={{ opacity: 1, y: "0%" }}
                                    transition={{
                                      duration: 0.5,
                                    }}
                                    exit={{ opacity: 0, y: "5%" }}
                                  >
                                    <Render code={p.body.code} />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </main>
        </motion.div>
      )}
    </div>
  );
}
