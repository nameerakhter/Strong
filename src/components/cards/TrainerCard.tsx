import React from 'react'
import Image from 'next/image'

const TrainerCard = ({ trainerImg, trainerName }: { trainerImg: string, trainerName: string }) => {
  return (
    <div className='flex flex-col items-center h-[21rem] w-[17rem] rounded-2xl   bg-[#1D1D1D]'>

      <div className=' w-full h-full flex flex-col items-center justify-center '>
        <Image
          src={trainerImg}
          alt='tool'
          width={500}
          height={500}
          className='bg-cover rounded-2xl'
        />
        <div className='w-full flex flex-col items-center justify-center'>
          <h1 className='  text-2xl text-nowrap font-extrabold '>{trainerName}</h1>
          <p>Personal Trainer</p>
        </div>


      </div>

      {/* Heading */}
    </div>
  )
}

export default TrainerCard
