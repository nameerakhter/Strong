import React from 'react'
import PricingCard from './cards/PricingCard'



const Plans = () => {
  return (
    <div>

      <div className='relative flex flex-col items-center jsutify-center p-[2rem]'>

        <div className='text-4xl p-[2rem] flex items-center jsutify-center gap-3'>
          <h1 className='font-extrabold'>Our</h1>
          <h1 className='text-[#c60811] font-extrabold'>Services</h1>
        </div>
        <p className='pb-[2rem]'>Select the plan that suits your fitness foals and let our expert coaches huide you every step of the way</p>
        <div className='relative flex items-center justify-center gap-[2rem]'>

          <section className='w-1/4'><PricingCard /></section>
          <section className='w-1/4'><PricingCard /></section>
          <section className='w-1/4'><PricingCard /></section>


        </div>
      </div>

    </div>
  )
}


export default Plans
