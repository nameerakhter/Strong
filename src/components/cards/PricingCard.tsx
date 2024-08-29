"use client";
import React from 'react'
import { Button } from '../ui/moving-border'
import { CardSpotlight } from '../ui/card-spotlight';
import pricingData from '../../pricingData.json'

const PricingCard = ({ plan, description, features, price, currency }: { plan: string, description: string, features: string[], price: string, currency: string }) => {
  return (
    <CardSpotlight>
      <div className='flex flex-col items-center justify-center bg-[#1D1D1D] p-[1rem] rounded-xl' >
        <p className='text-sm text-[#cd4e17] pb-[.5rem] '>Package</p>
        <h1 className='text-4xl font-extrabold p-[1rem]'>{plan}</h1>
        <p className='text-sm text-[#cd4e17] pb-[.5rem] '>Description</p>
        <p className='text-wrap pb-[1rem]'>{description}</p>
        <p className='text-sm text-[#cd4e17] pb-[.5rem] '>Features</p>
        <div className='flex flex-col items-start pb-[1rem]'>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </div>
        <div className='flex items-center justify-center p-[1rem] gap-2'>
          <h2 className='font-medium text-4xl'>{price}$</h2>
          <p className='text-[#8b8b8b]'>{currency}</p>
        </div>
        <Button className='bg-[#c60811]'>Choose this Plan</Button>
      </div>

    </CardSpotlight>
  )
}

export default PricingCard
