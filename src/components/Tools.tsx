import React from 'react'
import ToolCard from './cards/ToolCard'
import Image from 'next/image'

const Tools = () => {
  return (
    <div className='relative flex flex-col items-center jsutify-center p-[2rem]'>
      <Image src='/assets/service_backdrop.png' alt='backdrop' objectFit='cover' layout='fill' className='z-0' />

      <div className='text-4xl p-[2rem] flex items-center jsutify-center gap-3'>
        <h1 className='font-extrabold'>Our</h1>
        <h1 className='text-[#c60811] font-extrabold'>Fitness Tools</h1>
      </div>
      <p className='text-nowrap pb-[1rem]'>Access a variety of tools to help you reach your fitness goals more effectively</p>
      <div className='relative flex items-center justify-center gap-[2rem]'>
        <section className='w-1/4'><ToolCard toolImg='/assets/Icons/bmiCalc.png' toolName='BMI Calculator' /></section>
        <section className='w-1/4'><ToolCard toolImg='/assets/Icons/goalCalc.png' toolName='Goal Calculator' /></section>
        <section className='w-1/4'><ToolCard toolImg='/assets/Icons/macroCalc.png' toolName='Macro Claculator' /></section>
        <section className='w-1/4'><ToolCard toolImg='/assets/Icons/waterIntakeCalc.png' toolName='WaterIntake Calc' /></section>
      </div>
    </div>





  )
}

export default Tools
