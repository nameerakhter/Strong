import Image from 'next/image'
import TrainerCard from './cards/TrainerCard'
import { BorderBeam } from './magicui/border-beam'

const Trainers = () => {
  return (
    //TODO: Add some animations using framer motion
    <div className='relative flex flex-col items-center jsutify-center p-[2rem]'>
      <Image src='/assets/service_backdrop.png' alt='backdrop' objectFit='cover' layout='fill' className='z-0' />

      <div className='text-4xl p-[2rem] flex items-center jsutify-center gap-3'>
        <h1 className='font-extrabold'>Meet Your</h1>
        <h1 className='text-[#c60811] font-extrabold'>Trainers</h1>
      </div>
      <div className='relative flex items-center justify-center gap-[2rem]'>

        <section className='relative rounded-xl w-1/4'>
          <TrainerCard trainerImg='/assets/Trainers/pt1.png' trainerName='Peter' />
          <BorderBeam size={250} duration={5} delay={9} />
        </section>
        <section className='relative rounded-xl w-1/4'>
          <TrainerCard trainerImg='/assets/Trainers/pt2.png' trainerName='Peter' />
          <BorderBeam size={250} duration={5} delay={9} />
        </section>
        <section className='relative rounded-xl w-1/4'>
          <TrainerCard trainerImg='/assets/Trainers/pt3.png' trainerName='Peter' />
          <BorderBeam size={250} duration={5} delay={9} />
        </section>
        <section className='relative rounded-xl w-1/4'>
          <TrainerCard trainerImg='/assets/Trainers/pt4.png' trainerName='Peter' />
          <BorderBeam size={250} duration={5} delay={9} />
        </section>

      </div>
    </div>

  )
}


export default Trainers
