// import React from 'react'
// import { FaXTwitter, FaLinkedin, FaSquareInstagram, FaPhone } from "react-icons/fa6";
// import { IoMail } from "react-icons/io5";
// import { NavLink } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <div className='bg-[#75D3CF] w-full h-72 px-24 pt-10 pb-5 mt-24 flex flex-col text-[#2D3436]'>
//         <div className='flex justify-between items-start'>
//             <div className='flex flex-col'>
//                 <NavLink to="/" className='montserrat-heading text-2xl text-[#2D3436] cursor-pointer'>
//                     <span className='hover:text-[#F83B3B]'>atithi </span>
//                     <span className='hover:text-[#F83B3B]'>bhava</span>
//                 </NavLink>
//                 <span className='open-sans-body text-sm pl-5 -mt-[5px] text-[#F2FBFA] '>Welcome guests with ease.</span>
//                 <div className='flex justify-start items-center gap-5 my-10 text-2xl'>
//                     <FaXTwitter className='cursor-pointer'/>
//                     <FaLinkedin className='cursor-pointer'/>
//                     <FaSquareInstagram className='cursor-pointer'/>
//                 </div>
//             </div>
//             <div className='flex justify-around items-start gap-20'>
//                 <div className='flex flex-col justify-between items-start gap-2'>
//                     <h3 className='montserrat-heading text-base font-semibold'>Product</h3>
//                     <span className='cursor-pointer'>Features</span>
//                     <span className='cursor-pointer'>Pricing</span>
//                     <span className='cursor-pointer'>Integrations</span>
//                 </div>
//                 <div className='flex flex-col justify-between items-start gap-2'>
//                     <h3 className='montserrat-heading text-base font-semibold'>Company</h3>
//                     <span className='cursor-pointer'>About us</span>
//                     <span className='cursor-pointer'>Blog</span>
//                 </div>
//                 <div className='flex flex-col justify-between items-start gap-2'>
//                     <h3 className='montserrat-heading text-base font-semibold'>Support</h3>
//                     <span className='cursor-pointer'>Help Center</span>
//                     <span className='cursor-pointer'>Feedback</span>
//                 </div>
//             </div>
//             <div className='flex flex-col justify-between items-start gap-2'>
//                 <h3 className='montserrat-heading text-base font-semibold'>Contact us</h3>
//                 <div className='flex justify-between items-center gap-2 cursor-pointer'>
//                     <FaPhone className='size-4'/>
//                     <span>+91 7301011273</span>
//                 </div>
//                 <div className='flex justify-between items-center gap-2 cursor-pointer'>
//                     <IoMail className='size-5'/>
//                     <span>support.atithibhava@gmail.com</span>
//                 </div>
//             </div>
//         </div>
//         <div className='w-full h-[1px] bg-[#5E797C] mt-8 mb-3'/>
//         <div className='flex justify-between items-center text-[#3E4A4C] open-sans-body font-semibold'>
//             <span>Copyright © 2025 atithi bhava. All rights reserved.</span>
//             <div className='flex justify-end items-center gap-5'>
//                 <span className='cursor-pointer'>Terms of Service</span>
//                 <span className='cursor-pointer'>Privacy Policy</span>
//                 <span className='cursor-pointer'>Cookie Policy</span>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary text-dark mt-24">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <NavLink to="/" className="flex items-center group">
              <span className="text-3xl font-bold text-dark font-montserrat tracking-tight">
                atithi
              </span>
              <span className="text-3xl font-bold text-accent font-montserrat tracking-tight">
                bhava
              </span>
            </NavLink>
            <p className="font-open-sans text-dark/80 text-sm leading-relaxed">
              Revolutionizing event management through seamless organization 
              and guest coordination.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="font-open-sans space-y-3">
              <NavLink to="/about" className="block hover:text-accent transition-colors">
                About Us
              </NavLink>
              <NavLink to="/services" className="block hover:text-accent transition-colors">
                Services
              </NavLink>
              <NavLink to="/contact" className="block hover:text-accent transition-colors">
                Contact
              </NavLink>
              <NavLink to="/blog" className="block hover:text-accent transition-colors">
                Blog
              </NavLink>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-lg font-semibold mb-4">Legal</h3>
            <nav className="font-open-sans space-y-3">
              <NavLink to="/privacy" className="block hover:text-accent transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="block hover:text-accent transition-colors">
                Terms of Service
              </NavLink>
              <NavLink to="/security" className="block hover:text-accent transition-colors">
                Security
              </NavLink>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="font-montserrat text-lg font-semibold">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 hover:text-accent transition-colors">
                <FaPhone className="flex-shrink-0" />
                <span>+91 730 101 1273</span>
              </div>
              <div className="flex items-center gap-3 hover:text-accent transition-colors">
                <IoMail className="flex-shrink-0" />
                <span>support@atithibhava.com</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6 text-xl">
              <FaTwitter className="hover:text-accent cursor-pointer transition-colors" />
              <FaLinkedin className="hover:text-accent cursor-pointer transition-colors" />
              <FaInstagram className="hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark/20 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="font-open-sans text-dark/80">
            © {new Date().getFullYear()} Atithi Bhava. All rights reserved.
          </p>
          <div className="flex gap-6">
            <NavLink to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </NavLink>
            <NavLink to="/cookies" className="hover:text-accent transition-colors">
              Cookie Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer