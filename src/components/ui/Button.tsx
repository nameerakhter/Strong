import React from 'react'

const Button = ({text}: {text:String}) => {
  return (
    <button className='bg-[#d90a14] px-[1rem] py-[.5rem] rounded-xl text-xl'>{text}</button>
  )
}

export default Button