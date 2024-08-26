import React from 'react'
import MutedButton from './ui/MutedButton'
import Button from "@/components/ui/Button";
import { VscSearch } from "react-icons/vsc";
import Links from './ui/Links';


const Navbar = () => {
    return (
        <div className='flex items-center justify-center lg:py-[2rem] md:py-[2rem] '>
            <section className='lg:w-1/5 absolute left-0 ml-[1rem] md:w-1/5'>
                <div className='flex items-center gap-2 mb-1'>
                    <div className='bg-red-700 rounded-lg w-[3rem] h-[2rem]'></div>
                    <p className='lg:text-base md:text-sm'>Fit </p><p className='text-[#494646]'>&</p> <p className='text-[#d80b15] text-xl capitalize'>Strong</p>
                </div>
                <p className='lg:text-base md:text-sm'>Transform your body</p>

            </section>
            <div className='bg-[#292626] text-xl p-[.7rem] rounded-xl m-[1rem] md:hidden lg:visible'>
                <VscSearch />
            </div>
            <section className='w-3/5'>
                <div className='flex item-center justify-center lg:gap-[5rem] md:gap-[1rem] '>
                    <div>
                        <Links href='' text="Home" />
                    </div>
                    <div>
                        <Links href='' text="Programs" />

                    </div>
                    <Links href='' text="Coaching" />
                    <Links href='' text="Membership" />
                </div>
            </section>

            <section className='w-1/5 absolute right-0 md:flex items-center justify-center lg:pr-0 md:pr-1'>
                <MutedButton text={"Login"} />
                <Button text={"Signup"} />
            </section>

        </div>
    )
}

export default Navbar