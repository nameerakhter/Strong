import Image from 'next/image';
import React from 'react';

const ToolCard = () => {
  return (
    <div className='flex flex-col items-center h-[20rem] w-[20rem] border rounded-2xl relative  bg-[#1D1D1D]'>
      {/* Backdrop Image */}
      <div className='relative w-[20rem] h-[15rem] '>
        <Image
          src='/assets/Icons/Ellipse 8.png'
          alt='backdrop'
          layout='fill'
          objectFit='cover'
        />
      </div>

      {/* Icon */}
      <div className='absolute pt-[5rem] flex flex-col items-center justify-center w-[10rem] h-[6rem]'>
        <Image
          src='/assets/Icons/bmiCalc.png'
          alt='bmi'
          width={200}
          height={200}
          objectFit='contain'
        />
      </div>

      {/* Heading */}
      <h1 className=' text-3xl font-extrabold '>BMI Calculator</h1>
    </div>
  );
};

export default ToolCard;
