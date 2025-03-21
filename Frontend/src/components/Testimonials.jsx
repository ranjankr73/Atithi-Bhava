// import React from 'react'
// import TestimonialCard from './TestimonialCard'

// const users = [
//   {
//     name: "Sarah L.",
//     title: "Bride",
//     image: "/images/Woman with Floral Bouquet.jpeg",
//     body: "Atithi Bhava saved my wedding planning! The guest tracker was a lifesaver."
//   },
//   {
//     name: "David R.",
//     title: "Corporate Event Planner",
//     image: "/images/Professional Portrait of a Man.jpeg",
//     body: "Finally, an event tool that's as organized as I am."
//   },
//   {
//     name: "Priya K.",
//     title: "Birthday Host",
//     image: "/images/Elegant Woman in Traditional Saree.jpeg",
//     body: "My guests loved how easy it was to RSVP."
//   },
// ]
// const Testimonials = () => {
//   return (
//     <div className='mb-20 text-4xl flex flex-col justify-center items-center gap-20'>
//         <h2 className='text-[#2D3436] montserrat-heading'>What <span className='text-[#F83B3B]'>Users</span> Say!</h2>

//         <div className='flex justify-center items-center gap-10'>
//           {users.map((user, index) => <TestimonialCard key={index} user={user}/>)}
//         </div>
//     </div>
//   )
// }

// export default Testimonials;

import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Planner",
      text: "This platform revolutionized how we manage corporate events. Highly recommended!",
      image: "/images/user1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Wedding Coordinator",
      text: "The guest management features saved us countless hours during peak season.",
      image: "/images/user2.jpg"
    },
    {
      name: "Priya Kapoor",
      role: "Marketing Manager",
      text: "Best investment we've made in our event management stack.",
      image: "/images/user3.jpg"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          What Our <span className="text-accent">Clients</span> Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <p className="font-open-sans text-dark/80 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                  <p className="font-open-sans text-sm text-dark/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials