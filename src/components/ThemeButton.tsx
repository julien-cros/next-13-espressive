"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function Button() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <button onClick={() => setTheme('dark')} className={`${theme === "light" ? "block z-10" :  "hidden"}`}>Light Mode</button>
      <button onClick={() => setTheme('light')} className={`${theme === "dark" ? "block z-10" :  "hidden"}`}>Dark Mode</button>
    </div>
  )
};