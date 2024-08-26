import React from 'react'

const MutedButton = ({text,w}:{text: string, w?:string}) => {
  return (
    <button className={`border-[#a14219] bg-[#1d1d1d] border-2 px-[1rem] py-[.5rem] rounded-full text-xl m-[1rem] w-${w}`}>
        <div className='rounded-xl'>{text}</div>
    </button>
  )
}

export default MutedButton