import React from 'react'
import NumberTicker from '../magicui/number-ticker'

const Labels = ({ text1, text2, text3, colorT1 }: { text1: number, text2: string, text3: string, colorT1: string }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full relative mt-[4rem] md:px-[.5rem] md:mt-0'>
      <div className='flex items-center justify-center md:gap-2'>
        <p className={`text-4xl pr-[1rem] ${colorT1} `}><NumberTicker value={text1} className={`${colorT1} font-extrabold md:text-base md:p-1 lg:text-5xl `} /></p>
        <p className='md:text-xs lg:text-base'>{text2}</p>
      </div>
      <p className='text-sm text-[#6e6868] text-wrap md:text-xs md:text-wrap md:px-1 md:m-1 lg:text-base'>{text3}</p>
      <div className='absolute bg-gradient-to-r from-[#d80b15] to-[#ce4a17] w-[.2rem] h-[5rem]  rounded-full right-0'></div>

    </div>
  )
}
export default Labels

// import React from 'react'

// const Labels = ({text1, text2, text3, colorT1}:{text1:string,text2:string, text3:string,colorT1:string}) => {
//   return (
//     <div className='flex flex-col items-center justify-center w-full relative mt-[4rem]'>
//       <div className='flex items-center justify-center'>
//       <p className={`text-4xl pr-[1rem] ${colorT1} font-extrabold`}>{text1}</p><p>{text2}</p>
//       </div>
//       <p className='text-sm text-[#6e6868]'>{text3}</p>
//       <div className='absolute bg-gradient-to-r from-[#d80b15] to-[#ce4a17] w-[.2rem] h-[5rem]  rounded-full right-0'></div>

//     </div>
//   )
// }
// export default Labels
