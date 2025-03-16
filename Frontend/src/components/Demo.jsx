import React from 'react'

const Demo = () => {
  return (
    <div className='my-32 py-16 text-4xl bg-[#FFE1E1] flex flex-col justify-center items-center gap-20'>
        <h2 className='text-[#2D3436] montserrat-heading'>Watch the <span className='text-[#F83B3B]'>Demo</span></h2>

        <div className='flex justify-between items-start gap-48'>
            <img src='\images\dashboard.webp' className='w-auto h-96 shadow-xl rounded-2xl'/>
            <div className='flex flex-col'>
                <h3 className='text-[#2D3436] text-2xl montserrat-heading flex flex-col mb-10'>Everything You Need in<span className='text-[#F83B3B]'> One Dashbord</span></h3>

                <div className='flex flex-col open-sans-body text-lg gap-5'>
                    <span className='flex items-center gap-3'><img src='\images\check.png' className='size-6'/>Real-time RSVP tracking</span>
                    <span className='flex items-center gap-3'><img src='\images\check.png' className='size-6'/>Export guest lists to Excel</span>
                    <span className='flex items-center gap-3'><img src='\images\check.png' className='size-6'/>Customizable email templates</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Demo