import React from 'react';
import bg from "@/public/mobile-bg.jpg"
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex flex-col bg-black text-white'>
      <div className='flex flex-col px-5 gap-5 md:flex-row md:justify-around mt-2'>
        <div className='flex flex-col gap-2 shadow-sm shadow-slate-900 p-2'>
            <p className='text-gray-400 text-xl underline decoration-2 underline-offset-4'>ABOUT</p>
            <ul className='text-md'>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Coporation Information</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 shadow-sm shadow-slate-900 p-2'>
            <p className='text-gray-400 text-xl underline decoration-2 underline-offset-4'>GROUP COMPANIES</p>
            <ul className='text-md'>
                <li>Myntra</li>
                <li>cleartrip</li>
                <li>Shopsy</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 shadow-sm shadow-slate-900 p-2'>
            <p className='text-gray-400 text-xl underline decoration-2 underline-offset-4'>HELP</p>
            <ul className='text-md'>
                <li>Payments</li>
                <li>Shipping</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 shadow-sm shadow-slate-900 p-2'>
            <p className='text-gray-400 text-xl underline decoration-2 underline-offset-4'>CONSUMER POLICY</p>
            <ul className='text-md'>
                <li>Cancellation & Returns</li>
                <li>Terms of use</li>
                <li>Security</li>
                <li>Privacy</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 shadow-sm shadow-slate-900 p-2'>
            <p className='text-gray-400 text-xl underline decoration-2 underline-offset-4'>MAIL US</p>
            <ul className='text-md'>
                <li>Shopping Bazar</li>
                <li>City: Lorem, ipsum dolor.</li>
                <li>Outer ring road</li>
                <li>Punjab: 548972</li>
                <li>Pakistan: Pakistan</li>
                <li>Contact No. +92 300 1234567</li>
            </ul>
            <div className='flex flex-col gap-2'>
                <p className='text-gray-400 text-lg'>Social</p>
                <div className='text-white flex gap-5 text-2xl'>
                    <FaFacebook/>
                    <FaXTwitter />
                    <FaYoutube />
                </div>
            </div>
        </div>
      </div>
      <div className='self-center my-2'>
        &copy; Copyright reserved ! 2024 shopping.com
      </div>
    </div>
  )
}

export default Footer
