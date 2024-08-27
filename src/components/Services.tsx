import React from 'react'
import ServiceCard from './cards/ServiceCard'

const Services = () => {
  return (
    <div className='mt-[2rem] px-[2rem]'>
      <div className='flex items-center gap-3'><h1>OUR</h1><h1 className='text-[#c60811]'>Services</h1></div>
      <ServiceCard />

    </div>
  )
}

export default Services
