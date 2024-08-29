import Image from 'next/image'
import React from 'react'
import { MovingBorder } from '../ui/moving-border'

const ServiceCard = ({ h1, p1, p2, imgSrc }: { h1: string, p1: string, p2: string, imgSrc: string }) => {
  return (
    <div className='bg-[#1D1D1D]  rounded-xl flex items-center w-[22rem] h-[20rem]  pl-[1rem]'>
      <section className='w-1/2 h-full'>
        <div className=' flex items-center jsutify-center'>
          <div className='flex flex-col items-start justify-self-auto'>
            <h1 className='text-[#c60811] text-4xl font-extrabold m-[1rem]'>{h1}</h1>
            <p className='text-sm text-white py-[1rem]'>{p1}</p>
            <p className='text-xs text-white'>{p2}</p>
          </div>
        </div>
      </section>
      <section className='w-1/2 h-full'>
        <div className='relative w-full h-full'>
          <Image src={imgSrc} alt="demo" layout="fill" objectFit="cover" className="rounded-xl" />
        </div>

      </section>
    </div>
  )
}

export default ServiceCard
