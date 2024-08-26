import React from 'react'
import Highlighter from './Highlighter'

const Links = ({text, href}:{text:string, href:string}) => {
  return (
    <div className='text-xl relative inline-block'>
        <a href={href} className='p-2'>{text}</a>
        {/* <div className=' hover:underline bg-gradient-to-r from-[#d80b15] to-[#ce4a17] w-[4rem] h-[1rem]'></div> */}
        <Highlighter />
    </div>
  )
}

export default Links