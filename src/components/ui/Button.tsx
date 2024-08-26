import React from 'react'

const Button = ({text, w}: {text:string, w?: string}) => {
  return (
    <button className={`bg-[#d90a14] lg:px-[1rem] lg:py-[.5rem] rounded-full text-xl w-${w} md:text-sm md:px-1 `}>{text}</button>
  )
}

export default Button