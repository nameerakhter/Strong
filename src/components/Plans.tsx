import React from 'react'
import PricingCard from './cards/PricingCard'
import pricingData from '../pricingData.json'

interface PricingData {
  plan: string;
  description: string;
  features: string[];
  price: string;
  currency: string;
}


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

          {pricingData.map((plan: PricingData, index: number) => (
            <section key={index} className='w-1/4'>
              <PricingCard
                plan={plan.plan}
                description={plan.description}
                features={plan.features}
                price={plan.price}
                currency={plan.currency}
              />

            </section>
          ))}


        </div>
      </div>

    </div>
  )
}


export default Plans
