import Image from 'next/image';
import React from 'react';

const ToolCard = ({ toolImg, toolName }: { toolImg: string, toolName: string }) => {
  return (
    <div className='flex flex-col items-center h-[18rem] w-[15rem] rounded-2xl relative  bg-[#1D1D1D]'>
      {/* Backdrop Image */}
      <div className='relative w-full h-[15rem] '>
        <Image
          src='/assets/Icons/ellipse yellow.png'
          alt='backdrop'
          width={400}
          height={400}
        />
      </div>

      {/* Icon */}
      <div className='absolute pt-[5rem] flex flex-col items-center justify-center w-[10rem] h-[6rem]'>
        <Image
          src={toolImg}
          alt='tool'
          width={200}
          height={200}
          className='bg-cover relative top-10'
        />
        <h1 className=' pt-[3rem] relative top-10 text-2xl text-nowrap font-extrabold '>{toolName}</h1>
      </div>

      {/* Heading */}
    </div>
  );
};

export default ToolCard;
