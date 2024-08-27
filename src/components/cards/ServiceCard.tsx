import Image from 'next/image'
import React from 'react'

const ServiceCard = () => {
  return (
    <div className='bg-red-500 rounded-xl w-[20rem]'>
      <div className=' flex items-center jsutify-center'>
        <div>
          <h1>Lose Weight</h1>
          <p>Click to join our Weight loss Programs</p>
          <p>Acheive Sustainaable wieght loss with your....</p>

        </div>
        <div className='blur-2xl bg-[#5e0c0f] '>
          <Image src="" alt='' />
        </div>

      </div>
    </div>
  )
}

export default ServiceCard
