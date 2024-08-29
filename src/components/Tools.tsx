import React from 'react'
import ToolCard from './cards/ToolCard'


const Tools = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-center gap-3 p-[1rem]'>
        <h1 className='font-extrabold text-4xl'>Our</h1>
        <h1 className='font-extrabold text-4xl'>Fitness</h1>
        <h1 className='text-[#c60811] font-extrabold text-4xl'>Tools</h1>
      </div>
      <p className='text-nowrap'>Access a variety of tools to help you reach your fitness goals more effectively</p>

      <div className='felx items-center justify-center'>
        <section className='w-1/5'><ToolCard /></section></div>


    </div>
  )
}

export default Tools
