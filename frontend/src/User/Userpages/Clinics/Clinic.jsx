import React from 'react'
import clinicBg from "../../../assets/img/clinicBg.jpg"
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import HeadingCard from '../../../Component/UserComponent/Home/HeadingCard'
function Clinic() {
  return (
    <div className='bg-gray-50'>
          

      <div className='w-full h-60 flex items-center justify-center bg-center bg-cover' style={{
        backgroundImage: `
          linear-gradient(
             to bottom,
             rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
        ),
    url(${clinicBg})`
      }}>
        <div>
          <h2 className='body-font text-white text-3xl font-semibold text-shadow-2xs border p-3'>Our Registered Clinics</h2>
        </div>
      </div>
      <HeadingCard
                heading="Top Specializations"
                subheading="Highlighting the Care & Support"
            />
      {/* /// clinic listing  Section//// */}

      <div className='w-full container mx-auto flex flex-wrap justify-between my-5 '>
   
        <div className='md:w-86 w-full shadow  bg-white rounded-2xl  my-4'>
          <img src={clinicBg} className='w-full h-55 object-cover' alt="" />
          <div className='p-4'>

            <h2 className='text-xl body-font my-2 text-shadow-2xs'>Narenda Pharmacy Store</h2>
            <div>
              <h2 className="flex items-center gap-2 text-green-800">
                <IoLocationOutline size={20} />
                Clinic Communication Address
              </h2>
              <p className="text-gray-600 text-sm leading-5">
                <span className='mx-1'>Place - Supur</span>,
                <span className='mx-1'>City - Supur</span>,
                <span className='mx-1'>District - Bankura</span>,
                <span className='mx-1'>State - West Bengal</span>
                <span className='mx-1'>Pincode - 722121</span>

              </p>

            </div>

            <div className='flex justify-center mt-3'>

              <button className='text-xs text-shadow-2xs 
               bg-gradient-to-r from-[#035594] to-[#06AED4]  text-white p-1.5 rounded-3xl px-4  cursor-pointer'>View Clinic Page</button>
            </div>
          </div>
        </div>
  
      </div>
    </div>

  )
}

export default Clinic