'use client'
import React, { useState } from 'react'
import Highlighter from './Highlighter'

const Links = ({text, href}:{text:string, href:string}) => {
  const [hover, setHover] = useState(false)
  return (
    <div className='text-xl relative inline-block' onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
        <a href={href} className='relative z-10 inline-block'>{text}</a>
        {hover && (<Highlighter />)}
        
    </div>
  )
}

export default Links