"use client"
import Image from "next/image";
import logo from "../public/logo.png";
import search from "@/public/search_icon.png";
import { FaChevronDown } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import Link from "next/link";


const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className="bg-white flex flex-col px-5 gap-3 py-2 md:px-5 fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between w-full md:gap-5">
        <div className="flex items-center gap-8">
          <div className="hamburger hello relative">
            <div className="md:hidden" ><FaAlignJustify onClick={() => setBurgerMenu(true)}/></div>
            {burgerMenu ? <HamburgerMenu setBurgerMenu={setBurgerMenu}/> : null }
          </div>
          <Link href={"/"}><div className="logo"><Image className="w-11 cursor-pointer" priority={true} src={logo} alt="logo.png"/></div></Link>
        </div>
        <div className="search flex-1 mx-3 hidden md:block">
        <div className='bg-[#f1f1f1] flex items-center gap-5 rounded-md px-3 py-2'>
             <Image className='w-4' src={search} alt='search'/>
             <input className='bg-transparent flex-1 outline-none placeholder:text-slate-600 text-lg' type="text" placeholder='Search for Products, Brands and More' />
        </div>
      </div>

        <div className='flex items-center md:gap-10'>
          <div className='hover:bg-blue-500 rounded-md hover:text-white'><button className='flex items-center gap-2 px-2 py-2'><FaUser className='w-5' />Login<FaChevronDown className='w-3' /></button></div>
          <div className='hover:bg-blue-500 rounded-md hover:text-red-600'><button className='flex items-center gap-2 px-2 py-2'><FaCartShopping className='w-6' />Cart</button></div>
          <div className='hover:bg-blue-500 rounded-md hover:text-white hidden md:block'><button className='flex items-center gap-2 px-2 py-2'><FaGift />Become a Seller</button></div>
          <div className="hidden md-block"><button className='p-2.5 hover:bg-gray-100 hover:rounded-md border-white border hover:border-gray-300'><FaEllipsisVertical /></button></div>
          <div className="hidden md:block"><button className='p-2.5 hover:bg-gray-100 hover:rounded-md border-white border hover:border-gray-300'><FaEllipsisVertical /></button></div>
        </div>
      </div>
      <div className="search w-full md:hidden">
        <div className='bg-[#f1f1f1] flex items-center gap-5 rounded-md px-3 py-2'>
             <Image className='w-4' src={search} alt='search'/>
             <input className='bg-transparent flex-1 outline-none placeholder:text-slate-600 text-xs font-semibold' type="text" placeholder='Search for Products, Brands and More' />
        </div>
      </div>      

      {/* <div className="logo w-11 cursor-pointer ml-8"><Image src={logo} alt='name'/></div>
        <div className='bg-[rgba(241,242,244)] flex items-center gap-5 h-9 rounded-md px-5 flex-1 mx-10'>
             <Image className='w-5' src={search} alt='search'/>
             <input className='bg-transparent flex-1 outline-none placeholder:text-slate-600' type="text" placeholder='Search for Products, Brands and More' />
        </div>
        <div className='flex items-center gap-10'>
            <div className='hover:bg-blue-500 rounded-md hover:text-white'><button className='flex items-center gap-2 px-2 py-2'><FaUser className='w-5' />Login<FaChevronDown className='w-3' /></button></div>
            <div className='hover:bg-blue-500 rounded-md hover:text-white'><button className='flex items-center gap-2 px-2 py-2'><FaCartShopping className='w-6' />Cart</button></div>
            <div className='hover:bg-blue-500 rounded-md hover:text-white'><button className='flex items-center gap-2 px-2 py-2'><FaGift />Become a Seller</button></div>
            <div><button className='p-2.5 hover:bg-gray-100 hover:rounded-md border-white border hover:border-gray-300'><FaEllipsisVertical /></button></div>
        </div> */}
    </div>
  );
};

export default Navbar;
