import Image from 'next/image'
import React from 'react'

const ServiceCard = ({ h1, p1, p2, imgSrc }: { h1: string, p1: string, p2: string, imgSrc: string }) => {
  return (
    <div className='bg-[#1D1D1D] border rounded-xl w-[20rem]  pl-[2rem]'>
      <div className=' flex items-center jsutify-center'>
        <div>
          <h1>{h1}</h1>
          <p>{p1}</p>
          <p>{p2}</p>

        </div>
        <div className='right-0'>
          <Image src={imgSrc} alt='demo' width={800} height={500} />
        </div>

      </div>
    </div>
  )
}

export default ServiceCard
