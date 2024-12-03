import React from 'react'
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import logo from "../public/logo.png";


const HamburgerMenu = ({setBurgerMenu}) => {

  return (
    <div className='hello absolute top-[-22px] left-[-20px] h-screen w-screen'>
        <div className='w-full h-full absolute' style={{background: "rgba(0,0,0,0.4)"}} onClick={() => setBurgerMenu(false)}></div>
        <div className=' w-[320px] h-full bg-white z-10 absolute'>
            <div className='bg-blue-600 text-white flex items-center justify-between p-4'>
                <div className='flex items-center gap-4'>
                    <FaUser />
                    <span className='font-semibold'>Login & Signup</span>
                </div>
                <div>
                    <Image src={logo} className='w-8' alt='logo.png'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HamburgerMenu
