import React from 'react'

const Button = ({text, w}: {text:string, w?: string}) => {
  return (
    <button className={`bg-[#d90a14] px-[1rem] py-[.5rem] rounded-full text-xl w-${w} `}>{text}</button>
  )
}

export default Button