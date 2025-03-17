// import React from 'react'

// const Services = () => {
//   return (
//     <div className='my-10 text-4xl flex flex-col justify-center items-center gap-20'>
//         <h2 className='text-[#2D3436] montserrat-heading'>We Provide The Best <span className='text-[#F83B3B]'>Services</span></h2>

//         <div className='flex justify-around gap-10'>
//             <div className='bg-[#D4F3F1] rounded-lg shadow-xl p-5 w-96'>
//                 <div className='flex justify-start items-center gap-3'>
//                     <img src='\images\calendar.png' className='size-10'/>
//                     <span className='montserrat-heading text-xl text-[#237B7E]'>Build Events in Minutes</span>
//                 </div>
//                 <p className='text-base open-sans-body mt-6 ml-12 text-[#516569]'>Set dates, upload cover photos, and add details effortlessly.</p>
//             </div>
//             <div className='bg-[#D4F3F1] rounded-lg shadow-xl p-5 w-96'>
//                 <div className='flex justify-start items-center gap-3'>
//                     <img src='\images\tourist.png' className='size-10'/>
//                     <span className='montserrat-heading text-xl text-[#237B7E]'>Smart Guest Tracking</span>
//                 </div>
//                 <p className='text-base open-sans-body mt-6 ml-12 text-[#516569] font-extrabold'>Import guests via CSV, track RSVPs, and manage dietary needs.</p>
//             </div>
//             <div className='bg-[#D4F3F1] rounded-lg shadow-xl p-5 w-96'>
//                 <div className='flex justify-start items-center gap-3'>
//                     <img src='\images\email.png' className='size-10'/>

//                     <span className='montserrat-heading text-xl text-[#237B7E]'>Auto-Send Invites</span>
//                 </div>
//                 <p className='text-base open-sans-body mt-6 ml-12 text-[#516569]'>Guests RSVP via email or SMS—no app download needed.</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Services;


import React from 'react'
import { FaCalendarAlt, FaUsers, FaEnvelopeOpenText } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaCalendarAlt />,
      title: "Event Scheduling",
      description: "Create and manage events with our intuitive calendar system"
    },
    {
      icon: <FaUsers />,
      title: "Guest Management",
      description: "Track RSVPs and manage guest lists effortlessly"
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Smart Invitations",
      description: "Send automated reminders and updates via email/SMS"
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Our <span className="text-accent">Services</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-accent text-4xl mb-6">
                {service.icon}
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="font-open-sans text-dark/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services