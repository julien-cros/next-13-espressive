"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";
import { motion }	from "framer-motion";

type RenderProps = {
  code: string;
};

export default function Render({ code }: RenderProps) {

  const MDX = useMDXComponent(code);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-10">
			<motion.div
				className="flex flex-col justify-center items-center z-10"
				key="posts-bottom-animation"
				initial={{ opacity: 0, y: "2%" }}
				animate={{ opacity: 1, y: "0%" }}
				transition={{ duration: 0.5 }}
			>
      <article className="prose lg:prose-lg prose-zinc dark:prose-invert">
        <MDX />
      </article>
			</motion.div>
    </div>
  );
}
