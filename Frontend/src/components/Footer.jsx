import React from 'react'
import { FaXTwitter, FaLinkedin, FaSquareInstagram, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#75D3CF] w-full h-72 px-24 pt-10 pb-5 mt-24 flex flex-col text-[#2D3436]'>
        <div className='flex justify-between items-start'>
            <div className='flex flex-col'>
                <NavLink className='montserrat-heading text-2xl text-[#2D3436] cursor-pointer'>
                    <span className='hover:text-[#F83B3B]'>atithi </span>
                    <span className='hover:text-[#F83B3B]'>bhava</span>
                </NavLink>
                <span className='open-sans-body text-sm pl-5 -mt-[5px] text-[#F2FBFA] '>Welcome guests with ease.</span>
                <div className='flex justify-start items-center gap-5 my-10 text-2xl'>
                    <FaXTwitter className='cursor-pointer'/>
                    <FaLinkedin className='cursor-pointer'/>
                    <FaSquareInstagram className='cursor-pointer'/>
                </div>
            </div>
            <div className='flex justify-around items-start gap-20'>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h3 className='montserrat-heading text-base font-semibold'>Product</h3>
                    <span className='cursor-pointer'>Features</span>
                    <span className='cursor-pointer'>Pricing</span>
                    <span className='cursor-pointer'>Integrations</span>
                </div>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h3 className='montserrat-heading text-base font-semibold'>Company</h3>
                    <span className='cursor-pointer'>About us</span>
                    <span className='cursor-pointer'>Blog</span>
                </div>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h3 className='montserrat-heading text-base font-semibold'>Support</h3>
                    <span className='cursor-pointer'>Help Center</span>
                    <span className='cursor-pointer'>Feedback</span>
                </div>
            </div>
            <div className='flex flex-col justify-between items-start gap-2'>
                <h3 className='montserrat-heading text-base font-semibold'>Contact us</h3>
                <div className='flex justify-between items-center gap-2 cursor-pointer'>
                    <FaPhone className='size-4'/>
                    <span>+91 7301011273</span>
                </div>
                <div className='flex justify-between items-center gap-2 cursor-pointer'>
                    <IoMail className='size-5'/>
                    <span>support.atithibhava@gmail.com</span>
                </div>
            </div>
        </div>
        <div className='w-full h-[1px] bg-[#5E797C] mt-8 mb-3'/>
        <div className='flex justify-between items-center text-[#3E4A4C] open-sans-body font-semibold'>
            <span>Copyright © 2025 atithi bhava. All rights reserved.</span>
            <div className='flex justify-end items-center gap-5'>
                <span className='cursor-pointer'>Terms of Service</span>
                <span className='cursor-pointer'>Privacy Policy</span>
                <span className='cursor-pointer'>Cookie Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer