import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full h-20 px-24 bg-[#75D3CF] flex justify-between items-center text-[#2D3436]'>
      
        <NavLink to='/' className='montserrat-heading text-2xl cursor-pointer'>
          <span className='hover:text-[#F83B3B]'>atithi </span>
          <span className='hover:text-[#F83B3B]'>bhava</span>
        </NavLink>
      
        <div className='flex justify-between gap-5 text-base font-semibold'>
            <NavLink to='/' className='monteserrat-heading text-[#FF6B6B] text-lg cursor-pointer hover:text-[#F83B3B]'>Home</NavLink>
            <NavLink to='about' className='monteserrat-heading text-lg cursor-pointer hover:text-[#F83B3B]'>About us</NavLink>
            <NavLink to='services' className='monteserrat-heading text-lg cursor-pointer hover:text-[#F83B3B]'>Services</NavLink>
            <NavLink to='contact' className='monteserrat-heading text-lg cursor-pointer hover:text-[#F83B3B]'>Contact us</NavLink>
        </div>
        <div className='flex items-center gap-3 text-base font-semibold'>
            <NavLink to='signup' className='w-24 h-10 flex items-center justify-center rounded-full shadow-lg bg-[#FF6B6B] cursor-pointer hover:bg-[#FFA0A0]'>Sign up</NavLink>
            <NavLink to='signin' className='w-24 h-10 flex items-center justify-center rounded-full shadow-lg bg-[#FF6B6B] cursor-pointer hover:bg-[#FFA0A0]'>Sign in</NavLink>
        </div>
    </div>
  )
}

export default Header;