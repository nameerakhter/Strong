import React from 'react'
import MutedButton from './ui/MutedButton'
import Button from "@/components/ui/Button";
import { VscSearch } from "react-icons/vsc";
import Links from './ui/Links';


const Navbar = () => {
    return (
        <div className='flex items-center justify-center py-[2rem]'>
            <section className='w-1/5 absolute left-0 ml-[1rem]'>
                <div  className='flex items-center gap-2 mb-1'>
                <div className='bg-red-700 rounded-lg w-[3rem] h-[2rem]'></div>
                <p>Fit </p><p className='text-[#1d1d1d]'>&</p> <p className='text-[#d80b15] text-xl capitalize'>Strong</p>
                </div>
                <p>Transform your body</p>

            </section>
            <div className='bg-[#292626] text-xl p-[.7rem] rounded-xl m-[1rem]'>
            <VscSearch />
            </div>
            <section className='w-3/5'>
            <div className='flex item-center justify-center gap-[5rem]'>
               <Links href='' text="Home" />
               <Links href='' text="Programs" />
               <Links href='' text="Coaching" />
               <Links href='' text="Membership" />
            </div>
            </section>
            
            <section className='w-1/5 absolute right-0'>
            <MutedButton text={"Login"}/>
            <Button text={"Signup"} />
            </section>
            
        </div>
    )
}

export default Navbar