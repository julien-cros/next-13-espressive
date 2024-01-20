"use client";

import {useTheme} from "next-themes";
import { use, useEffect, useState } from "react";
import { Switch } from '@headlessui/react'

export function Button() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
	const [enabled, setEnabled] = useState(useTheme().theme === "dark" ? true : false)
	
  useEffect(() => {
		setMounted(true)
  }, [])

	
  if(!mounted) return null
	
	
  return (
    <div className="flex flex-col justify-center items-center ">
			<Switch
      checked={enabled}
      onChange={() => { setTheme(theme === "light" ? "dark" : "light"); setEnabled(!enabled)}}
      className={`${
        enabled ? 'bg-zinc-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
    </div>
  )
};