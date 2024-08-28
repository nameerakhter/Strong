import React from 'react'

const Button = ({ text, w }: { text: string, w?: string }) => {
  return (
    <div className={`bg-white rounded-full w-${w}`}>
      <button className={`bg-[#d90a14] lg:px-[1rem] lg:py-[.5rem] rounded-full text-xl w-${w} md:text-sm md:px-1 `}>{text}</button>
    </div>
  )
}

export default Button


// import React from 'react'
// import { Button } from './moving-border'
//
// const Button1 = ({ text, w }: { text: string, w?: string }) => {
//   return (
//     <Button borderRadius="50px" className={`button bg-[#d90a14] lg:px-[1rem] lg:py-[.5rem] rounded-full text-xl w-${w} md:text-sm md:px-1 `}>{text}</Button>
//   )
// }
//
// export default Button1

