"use client";
import React from 'react'
import { Button } from '../ui/moving-border'
import { CardSpotlight } from '../ui/card-spotlight';

const PricingCard = () => {
  return (
    <CardSpotlight>
      <div className='flex flex-col items-center justify-center bg-[#1D1D1D]' >
        <p className='text-sm text-[#cd4e17] pb-[.5rem] '>Package</p>
        <h1 className='text-4xl font-extrabold p-[1rem]'>ProPlan</h1>
        <p>Description</p>
        <p>Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!</p>
        <p>Features</p>
        <div>
          <li>Access to all of our Exercise Videos</li>
          <li>Progress Tracking</li>
          <li>Supportive Online Community</li>
          <li>Advanced personalized workout Plans</li>
          <li>Comprehensive nutrition coaching</li>
          <li>Access to Advanced Analysis</li>
          <li>Body Composition Analysis</li>
        </div>
        <div>
          <h2>99$</h2>
          <p>/USDT</p>
        </div>
        <Button>Choose this Plan</Button>
      </div>

    </CardSpotlight>
  )
}

export default PricingCard
