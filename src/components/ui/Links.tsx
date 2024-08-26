import React from 'react'

const Links = ({text, href}:{text:string, href:string}) => {
  return (
    <div className='text-xl'>
        <a href={href}>{text}</a>
    </div>
  )
}

export default Links