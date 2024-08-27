import React from 'react'
import ServiceCard from './cards/ServiceCard'

const Services = () => {
  return (
    <div className='flex flex-col items-center jsutify-center mt-[2rem] px-[2rem]'>
      <div className='text-4xl p-[2rem] flex items-center jsutify-center gap-3'>
        <h1 className=''>Our</h1>
        <h1 className='text-[#c60811]'>Services</h1>
      </div>
      <div className='flex items-center justify-center gap-[2rem]'>
        <section className='w-1/4'><ServiceCard /></section>
        <section className='w-1/4'><ServiceCard /></section>
        <section className='w-1/4'><ServiceCard /></section>
        <section className='w-1/4'><ServiceCard /></section>


      </div>
    </div>
  )
}

export default Services
