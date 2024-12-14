import React from 'react';
import Button from './ui/Button';
import MutedButton from './ui/MutedButton';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center overflow-hidden relative'>
      {/* Background Shape */}
      <div className='absolute drop-shadow-3xl rounded-full w-[20rem] h-[40rem] bg-[#482415] blur-2xl -left-20 md:w-[10rem] md:h-[20rem]'></div>

      {/* Left Content */}
      <section className='relative w-full md:w-1/2 px-4 md:px-8'>
        <div className='text-wrap flex flex-col items-center md:items-start text-center md:text-left'>
          <h2 className='text-lg md:text-xl lg:text-2xl'> Achieve Your</h2>
          <h1 className='font-extrabold text-gradient text-4xl md:text-5xl lg:text-6xl'>
            Fitness Goals
          </h1>
          <h2 className='mb-4 text-lg md:text-xl lg:text-2xl'>
            with the best in Industry
          </h2>
          <p className='text-sm md:text-base lg:text-lg mb-6'>
            Join the Fitmaker community and transform your fitness journey. Our
            expert coaches and personalized programs are designed to help you
            achieve your goals and exceed your expectations. Ready to make a
            change?
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 w-full'>
            <Button text='Start your journey'  />
            <MutedButton text='Explore Programs'  />
          </div>
        </div>
      </section>

      {/* Right Image */}
      <section className='w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0 relative'>
        <Image
          src='/assets/grp3.png'
          alt='hero'
          className='absolute object-cover w-full max-w-[20rem] md:max-w-[24rem] lg:max-w-[600px]'
          width={600}
          height={700}
        />
        <Image
          src='/assets/trainer.png'
          alt='trainer'
          className='relative object-cover w-full max-w-[20rem] md:max-w-[24rem] lg:max-w-[536px]'
          width={536}
          height={609}
        />
      </section>
    </div>
  );
};

export default Hero;
