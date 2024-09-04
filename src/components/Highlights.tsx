import React from 'react'
import Labels from './ui/Labels'

const Highlights = () => {
  return (
    <div className='p-[1rem] flex items-center justify-center md:px-[.2rem]'>
      <section className='w-1/4 flex flex-col items-center justify-center '><Labels colorT1='text-[#d70a14]' text1={96} text2='% Client Satisfaction' text3='Our members love their results and experience' /></section>
      <section className='w-1/4 flex flex-col items-center justify-center '><Labels colorT1='text-[#c94a16]' text1={+5} text2='Years of experience' text3='Trust in our proven track record of transforming' /></section>
      <section className='w-1/4 flex flex-col items-center justify-center '><Labels colorT1='text-[#d70a14]' text1={+800} text2='Active Members' text3='Join our thriving fitness community' /></section>
      <section className='w-1/4 flex flex-col items-center justify-center '><Labels colorT1='text-[#c94a16]' text1={24} text2='hr Support Available' text3='Expert assistance whenever you need it' /></section>

    </div>
  )
}

export default Highlights
