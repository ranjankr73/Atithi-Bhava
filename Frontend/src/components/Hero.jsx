import React from 'react'
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='h-auto py-24 flex justify-evenly items-center'>
        <div className=''>
            <div className='font-bold flex flex-col text-5xl gap-6 montserrat-heading'>
                <span className='text-[#2D3436]'>Plan</span>
                <span className='text-[#2D3436]'>
                    <span className='text-[#F83B3B]'>Unforgettable </span> 
                    Events
                </span>
                <span className='text-[#2D9596]'>Effortlessly.</span>
            </div>
            <div className='open-sans-body text-base my-8 text-[#516569]'>
                <p>Create, invite, and manage guests in one place—</p> 
                <p>so you can focus on celebrating.</p>
            </div>
            <div className='my-16 flex justify-start gap-5 text-base font-semibold'>
                <NavLink to='signin' className='w-44 h-12 rounded-full bg-[#FF6B6B] hover:bg-[#FFA0A0] text-[#2D3436] shadow-lg flex justify-center items-center cursor-pointer'>Start Planning Free</NavLink>
                <NavLink to='demo' className='w-44 h-12 rounded-full bg-[#2D3436] hover:bg-[#3E4A4C] text-[#FF6B6B] hover:text-[#F83B3B] shadow-lg flex justify-center items-center gap-1 cursor-pointer'>Watch Demo <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </NavLink>
            </div>
        </div>
        <div className='w-96'>
            <img src='\images\Neatly Organized Desk Setup.png'/>
        </div>
    </div>
  )
}

export default Hero