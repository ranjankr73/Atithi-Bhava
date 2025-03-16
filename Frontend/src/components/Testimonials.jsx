import React from 'react'
import TestimonialCard from './TestimonialCard'

const users = [
  {
    name: "Sarah L.",
    title: "Bride",
    image: "/images/Woman with Floral Bouquet.jpeg",
    body: "Atithi Bhava saved my wedding planning! The guest tracker was a lifesaver."
  },
  {
    name: "David R.",
    title: "Corporate Event Planner",
    image: "/images/Professional Portrait of a Man.jpeg",
    body: "Finally, an event tool that's as organized as I am."
  },
  {
    name: "Priya K.",
    title: "Birthday Host",
    image: "/images/Elegant Woman in Traditional Saree.jpeg",
    body: "My guests loved how easy it was to RSVP."
  },
]
const Testimonials = () => {
  return (
    <div className='mb-20 text-4xl flex flex-col justify-center items-center gap-20'>
        <h2 className='text-[#2D3436] montserrat-heading'>What <span className='text-[#F83B3B]'>Users</span> Say!</h2>

        <div className='flex justify-center items-center gap-10'>
          {users.map((user, index) => <TestimonialCard key={index} user={user}/>)}
        </div>
    </div>
  )
}

export default Testimonials;