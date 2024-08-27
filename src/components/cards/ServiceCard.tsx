import Image from 'next/image'
import React from 'react'

const ServiceCard = () => {
  return (
    <div className='bg-[#1D1D1D] border rounded-xl w-[20rem] p-[2rem]'>
      <div className=' flex items-center jsutify-center'>
        <div>
          <h1>Lose Weight</h1>
          <p>Click to join our Weight loss Programs</p>
          <p>Acheive Sustainaable wieght loss with your....</p>

        </div>
        <div className=''>
          <Image src="/assets/Trainers/person3.png" alt='demo' width={800} height={800} />
        </div>

      </div>
    </div>
  )
}

export default ServiceCard
