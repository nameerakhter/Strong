import React from 'react'
import Button from './ui/Button'
import MutedButton from './ui/MutedButton'
import Image from 'next/image'
import Labels from './ui/Labels'

const Hero = () => {
    return (
        <div className='flex items-center justify-center   overflow-hidden'>
            <div className='absolute drop-shadow-3xl rounded-full w-[10rem] h-[20rem] bg-[#482415] blur-2xl -left-20'></div>
            <section className=' relative w-1/2 ml-[2rem]  '>
                <div className='text-wrap pl-[1rem] flex flex-col items-center'>
                    <h2 className='text-2xl'> Achieve Your</h2>
                    <h1 className='text-8xl font-extrabold text-gradient'>Fitness Goals</h1>
                    <h2 className='text-2xl mb-[1rem]'>with the best in Industry</h2>
                    <p>Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?</p>
                </div>

                <div className='flex items-center justify-center w-full'>
                    <section className='w-1/2 '><Button text="Start your journey" w="full" /></section>
                    <section className='w-1/2 drop-shadow-3xl'><MutedButton text="Explore Programs" w="full" /></section>
                </div>


            </section>
            <section className='w-1/2  ml-[2rem] flex items-center justify-center'>
                <Image src="/assets/grp3.png" alt='hero' className='absolute bg-cover bg-center ' width={600} height={700}></Image>
                <Image src="/assets/trainer.png" alt='hero' className='relative bg-cover' width={536} height={609}></Image>
            </section>
        </div>
    )
}

export default Hero