import React from 'react'
import Button from './ui/Button'
import MutedButton from './ui/MutedButton'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex items-center justify-center'>
            <section className='w-1/2 ml-[2rem] flex flex-col items-center '>
                <div className='bg-red-500'>
                    <h2 className='text-2xl p-[.5rem]'>Achieve Your</h2>
                    <h1 className='text-4xl font-extrabold p-[.5rem]'>Fitness Goals</h1>
                    <h2 className='text-2xl p-[.5rem]'>with the best in Industry</h2>
                </div>
                <p>Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?</p>
                <div className='flex items-center justify-center'>
                <section className='w-1/2'><Button text="Start your journey" w="full"/></section>
                <section className='w-1/2'><MutedButton text="Explore Programs"w="full"/></section>
                </div>
                

            </section>
            {/* <section className='w-1/2  ml-[2rem] flex items-center justify-center'>
            <Image src="/assets/trainer.png" alt='hero' className='bg-cover' width={536} height={609}></Image>
            </section> */}
        </div>
    )
}

export default Hero