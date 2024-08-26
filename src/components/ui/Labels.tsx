import React from 'react'

const Labels = ({text1, text2, text3, colorT1}:{text1:string,text2:string, text3:string,colorT1:string}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full relative mt-[4rem]'>
      <div className='flex items-center justify-center'>
      <p className={`text-4xl pr-[1rem] ${colorT1} font-extrabold`}>{text1}</p><p>{text2}</p>
      </div>
      <p className='text-sm text-[#6e6868]'>{text3}</p>
      <div className='absolute bg-gradient-to-r from-[#d80b15] to-[#ce4a17] w-[.2rem] h-[5rem]  rounded-full right-0'></div>

    </div>
  )
}
export default Labels