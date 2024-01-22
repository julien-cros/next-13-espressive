"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { allPosts } from "contentlayer/generated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type TitleProps = {
  post: string;
};

const PrevNextPost = ({ post }: TitleProps) => {
  const postIndex = allPosts.findIndex(({ title }) => title === post);

  const [overLeft, setOverLeft] = React.useState(false);
  const [overRight, setOverRight] = React.useState(false);

  const prevPost = allPosts[postIndex - 1];
  const nextPost = allPosts[postIndex + 1];

  return (
		<>
		<div className="absolute left-0 top-1/2">
		{prevPost?.title && (
          <Link
            href={prevPost.url}
            className="flex flex-row items-center"
            onMouseOver={() => setOverLeft(true)}
            onMouseLeave={() => setOverLeft(false)}
          >
            <motion.div
              className={`flex-row items-center p-10 hidden lg:block`}
              key="prev-post-animation"
              initial={{ opacity: 0, x: -500 }}
              animate={
                overLeft ? { opacity: 1, x: 0 } : { opacity: 0, x: -500 }
              }
              transition={{
                duration: 0.5,
              }}
              exit={{ opacity: 1, x: -300, transition: { duration: 0.5 } }}
            >
              <p>{prevPost.title}</p>
            </motion.div>

            <motion.div
							className="flex flex-row items-center fixed"
							key="prev-post-arrow-animation"
							initial={{ opacity: 0, x: -10 }}
							animate={
								overLeft ? { opacity: 1, x: -20, } : { opacity: 1, x: 0}
							}
							transition={{
								duration: 0.5,
							}}
						>
              <FontAwesomeIcon
                className="h-3 w-3 md:h-5 md:w-5 ml-2 md:ml-5 p-1 justify-center items-center bg-gray-200 dark:bg-zinc-600 bg-opacity-75 rounded-full"
                icon={faArrowLeft}
              />
            </motion.div>
          </Link>
        )}
		</div>

		<div className="absolute right-0 top-1/2 z-10">
		{nextPost?.title && (
          <Link
            href={nextPost.url}
            className="flex flex-row items-center"
            onMouseOver={() => setOverRight(true)}
            onMouseLeave={() => setOverRight(false)}
          >
            <motion.div
              className={`flex flex-row items-center justify-end fixed right-0`}
              key="next-post-arrow-animation"
              initial={{ opacity: 0, x: 10 }}
              animate={
                overRight ? { opacity: 1, x: 20 } : { opacity: 1, x: 0 }
              }
              transition={{
                duration: 0.5,
              }}
            >
              <FontAwesomeIcon
                className="h-3 w-3 md:h-5 md:w-5 mr-2 md:mr-5 p-1 justify-end items-center dark:bg-zinc-600 bg-gray-200 bg-opacity-75 rounded-full"
                icon={faArrowRight}
              />
            </motion.div>

						<motion.div
							className="flex-row items-center p-10 hidden lg:block"
							key="next-post-animation"
							initial={{ opacity: 0, x: 400 }}
							animate={
								overRight ? { opacity: 1, x: 0 } : { opacity: 0, x: 380 }
							}
							transition={{
								duration: 0.5,
							}}
						>
              <p>{nextPost.title}</p>
						</motion.div>
          </Link>
        )}
		</div>
		</>
    //  left side

    // <div className="fixed ">
    //   <div className="">
    //     {prevPost?.title && (
    //       <Link
    //         href={prevPost.url}
    //         className="flex  flex-row items-center"
    //         onMouseOver={() => setOverLeft(true)}
    //         onMouseLeave={() => setOverLeft(false)}
    //       >
    //         <motion.div
    //           className={`flex-row items-center p-10 hidden lg:block`}
    //           key="prev-post-animation"
    //           initial={{ opacity: 0, x: -500 }}
    //           animate={
    //             overLeft ? { opacity: 1, x: 0 } : { opacity: 0, x: -500 }
    //           }
    //           transition={{
    //             duration: 0.5,
    //           }}
    //           exit={{ opacity: 1, x: -300, transition: { duration: 0.5 } }}
    //         >
    //           <p>{prevPost.title}</p>
    //         </motion.div>

    //         <motion.div
		// 					className="flex flex-row items-center fixed"
		// 					key="prev-post-arrow-animation"
		// 					initial={{ opacity: 0, x: -10 }}
		// 					animate={
		// 						overLeft ? { opacity: 1, x: -20, } : { opacity: 1, x: 0}
		// 					}
		// 					transition={{
		// 						duration: 0.5,
		// 					}}
		// 				>
    //           <FontAwesomeIcon
    //             className="h-3 w-3 md:h-5 md:w-5 ml-5 p-1 justify-center items-center bg-gray-200 bg-opacity-75 rounded-full"
    //             icon={faArrowLeft}
    //           />
    //         </motion.div>
    //       </Link>
    //     )}
    //   </div>

    //   {/* right side*/}

    //   <div className="">
    //     {nextPost?.title && (
    //       <Link
    //         href={nextPost.url}
    //         className="flex h-screen flex-row items-center"
    //         onMouseOver={() => setOverRight(true)}
    //         onMouseLeave={() => setOverRight(false)}
    //       >
    //         <motion.div
    //           className={`flex flex-row items-center justify-end absolute right-0`}
    //           key="next-post-arrow-animation"
    //           initial={{ opacity: 0, x: 10 }}
    //           animate={
    //             overRight ? { opacity: 1, x: 20 } : { opacity: 1, x: 0 }
    //           }
    //           transition={{
    //             duration: 0.5,
    //           }}
    //         >
    //           <FontAwesomeIcon
    //             className="h-3 w-3 md:h-5 md:w-5 mr-5 p-1 justify-end items-center bg-gray-200 bg-opacity-75 rounded-full"
    //             icon={faArrowRight}
    //           />
    //         </motion.div>

		// 				<motion.div
		// 					className="flex-row items-center p-10 hidden lg:block"
		// 					key="next-post-animation"
		// 					initial={{ opacity: 0, x: 400 }}
		// 					animate={
		// 						overRight ? { opacity: 1, x: 0 } : { opacity: 0, x: 380 }
		// 					}
		// 					transition={{
		// 						duration: 0.5,
		// 					}}
		// 				>
    //           <p>{nextPost.title}</p>
		// 				</motion.div>
    //       </Link>
    //     )}
    //   </div>
    // </div>

  );
};

export default PrevNextPost;
