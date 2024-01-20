"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full fixed">
      <div className="flex h-full flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">there is nothing here</h2>
        <Link href="/" className="text-2xl font-bold ">Return Home</Link>
      </div>
    </div>
  );
}
