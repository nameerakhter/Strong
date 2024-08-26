'use client'
import React, { useState } from 'react'
import Highlighter from './Highlighter'

const Links = ({text, href}:{text:string, href:string}) => {
  const [hover, setHover] = useState(false)
  return (
    <div className='lg:text-xl relative inline-block lg:h-[3rem] md:h-[1rem]' onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
        <a href={href} className='relative z-10 inline-block'>{text}</a>
        {hover && (<Highlighter />)}
        
    </div>
  )
}

export default Links