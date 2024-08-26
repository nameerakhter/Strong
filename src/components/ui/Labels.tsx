import React from 'react'

const Labels = ({text1, text2}:{text1:string,text2:string}) => {
  return (

    <button className={`relative border-[#a14219] bg-[#1d1d1d] border-2 px-[1.2rem] py-[.5rem] rounded-3xl m-[1rem]`}>
        <div className='rounded-xl text-xl mb-[.5rem] text-wrap'>{text1}</div>
        <p className='rounded-xl text-xs text-wrap'>{text2}</p>
    </button>
  )
}
export default Labels