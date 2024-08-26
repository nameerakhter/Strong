import React from 'react'

const MutedButton = ({ text, w }: { text: string, w?: string }) => {
  return (
    <button className={`border-[#a14219] bg-[#1d1d1d] border-2 lg:px-[1rem] lg:py-[.5rem] rounded-full text-xl m-[1rem] w-${w} md:text-sm md:px-[.5rem]`}>
      <div className='rounded-xl'>{text}</div>
    </button>
  )
}

export default MutedButton