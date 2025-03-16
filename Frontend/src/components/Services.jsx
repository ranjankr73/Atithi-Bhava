import React from 'react'

const Services = () => {
  return (
    <div className='my-10 text-4xl flex flex-col justify-center items-center gap-20'>
        <h2 className='text-[#2D3436] montserrat-heading'>We Provide The Best <span className='text-[#F83B3B]'>Services</span></h2>

        <div className='flex justify-around gap-10'>
            <div className='bg-[#D4F3F1] rounded-lg shadow-xl p-5 w-96'>
                <div className='flex justify-start items-center gap-3'>
                    <img src='\images\calendar.png' className='size-10'/>
                    <span className='montserrat-heading text-xl text-[#237B7E]'>Build Events in Minutes</span>
                </div>
                <p className='text-base open-sans-body mt-6 ml-12 text-[#516569]'>Set dates, upload cover photos, and add details effortlessly.</p>
            </div>
            <div className='bg-[#D4F3F1] rounded-lg shadow-xl p-5 w-96'>
                <div className='flex justify-start items-center gap-3'>
                    <img src='\images\tourist.png' className='size-10'/>
                    <span className='montserrat-heading text-xl text-[#237B7E]'>Smart Guest Tracking</span>
                </div>
                <p className='text-base open-sans-body mt-6 ml-12 text-[#516569] font-extrabold'>Import guests via CSV, track RSVPs, and manage dietary needs.</p>
            </div>
            <div className='bg-[#D4F3F1] rounded-lg shadow-xl p-5 w-96'>
                <div className='flex justify-start items-center gap-3'>
                    <img src='\images\email.png' className='size-10'/>

                    <span className='montserrat-heading text-xl text-[#237B7E]'>Auto-Send Invites</span>
                </div>
                <p className='text-base open-sans-body mt-6 ml-12 text-[#516569]'>Guests RSVP via email or SMS—no app download needed.</p>
            </div>
        </div>
    </div>
  )
}

export default Services;