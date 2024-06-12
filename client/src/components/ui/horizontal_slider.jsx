'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Stack } from '../layout/stack'
import { cn } from '@/lib/utils'

export const HorizontalSlider = ({ elements }) => {
  const ref = useRef()
  const [selected, setSelected] = useState(0)
  const baseSelectorStyle = 'size-3 border border-green-500 rounded-full'

  useEffect(() => {
    const listNode = ref.current;
    const badgeNode = listNode.querySelectorAll("li")[selected]

    if (badgeNode) {
      badgeNode.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      })
    }
  }, [selected])

  return (
    <Stack noMargins variant="vertical" distribution="" alignment="" className="h-fit gap-5">
      <div className="h-4/5 overflow-x-scroll">
        <ul ref={ref} className="flex gap-5">
          {elements.map((element, index) => (
            <li key={index} className="w-fit h-fit flex-shrink-0">
              {element.element}
            </li>
          ))}
        </ul>
      </div>
      <div className='h-1/5 flex justify-center gap-5'>

        {elements.map((_, index) => (
          <div key={index} className={cn(baseSelectorStyle, selected === index ? 'bg-green-500' : 'bg-white')} onClick={() => setSelected(index)}></div>
        ))}
      </div>
    </Stack>
  )
}