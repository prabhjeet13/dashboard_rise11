import React from 'react'
import { LuUserRound } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa6";
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <div className='p-2 m-2 px-5 w-[11/12] max-w-[1260px] flex items-center justify-between mx-auto'>
            
            <div className='flex items-center gap-2'>
                <img src = {logo} className='h-12'/>
                <p className='font-mono font-bold text-2xl'>Jur</p>
            </div>

            <div className='flex gap-2'>
                <div className='text-lg text-blue-500'>
                    <FaRegBell />
                </div>
                <div className='text-lg text-blue-500'>
                    <LuUserRound />
                </div>
            </div>
    </div>
  )
}

export default Navbar