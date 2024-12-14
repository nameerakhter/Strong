'use client'
import { useState } from 'react'
import MutedButton from './ui/MutedButton'
import Button from "@/components/ui/Button";
import { VscSearch } from "react-icons/vsc";
import Links from './ui/Links';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-row items-center justify-between py-4 px-4 lg:py-6 lg:px-10'>
      <section className='lg:w-1/5 flex items-center mb-4 lg:mb-0'>
        <div className='flex items-center gap-2'>
          <div className='bg-red-700 rounded-lg w-8 h-6'></div>
          <p className='text-lg lg:text-base'>Fit </p><p className='text-[#494646]'>&</p> <p className='text-[#d80b15] text-xl capitalize'>Strong</p>
        </div>
      </section>
      <div className='bg-[#292626] text-xl p-2 rounded-xl mb-4 lg:mb-0'>
        <VscSearch />
      </div>
      <section className='flex items-center justify-center gap-4 w-full lg:w-1/5 mt-4 lg:mt-0'>
        <MutedButton text={"Login"} />
        <Button text={"Signup"} />
      </section>
      <div className='lg:hidden ml-auto'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-xl'>
          ☰
        </button>
        {isOpen && (
          <div className='absolute bg-[#292626] p-4 rounded-lg mt-2'>
            <Links href='' text="Home" />
            <Links href='' text="Programs" />
            <Links href='' text="Coaching" />
            <Links href='' text="Membership" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
