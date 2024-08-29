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
        <div className='relative flex items-center justify-center gap-[2rem]'>

          {/* <section className='w-1/4'><PricingCard h1='Lose Weight' p1='Click to join our Weight loss Programs' p2='Achieve sustainable weight loss with our customized programs, designed to help you burn fat and build a healthier, leaner body. Start your journey to a fitter you today' imgSrc="/assets/Trainers/trainer11.png" /></section> */}
          {/* <section className='w-1/4'><PricingCard h1='Building Muscle' p1='Click to join our muscle building plans' p2='Develop strength and define your muscles with tailored programs designed to help you gain lean mass efficiently. click on the button below and start your journey right now. don’t miss this cahnce.' imgSrc='/assets/Trainers/trainer2.png' /></section> */}
          {/* <section className='w-1/4'><PricingCard h1='Training in Home' p1='Click to see our ultimate home plans' p2='Stay fit and strong with our effective home workout plans, requiring minimal equipment. You Can Have Access to a lot of plans by just clicking on learn more!' imgSrc='/assets/Trainers/trainer3.png' /></section> */}
          {/* <section className='w-1/4'><PricingCard h1='Gym Plan' p1='Click, Enter Your Details, Get Your plan!' p2='Maximize your gym sessions with structured plans that guide you towards your fitness goals.' imgSrc='/assets/Trainers/trainer4.png' /></section> */}
          {/**/}

        </div>
      </div>

    </div>
  )
}


export default Plans
