import React, { useEffect } from 'react'
import "../../UserComponent/Home/home.style.css"
import Doctorimg from "../../../assets/img/Doctorimg.png"
import { PiHospitalFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

function HeroBanner({ specialization }) {

  return (
    <div className='bgHero'>
      <div className='container mx-auto  flex justify-between  h-full p-2'>
        <div className=' flex items-center  p-3'>
          <div>
            <div className='p-2  '>
              <h2 className='xl:text-5xl font-semibold bg-gradient-to-r from-blue-600 via-teal-500
             to-green-700 bg-clip-text  text-transparent text-2xl lg:text-left text-center  leading-normal '>
                Discover Health: Find Your Trusted  Doctors Today</h2>
            </div>


            <br />
            <div
              className="
           border border-cyan-500 bg-white p-2 rounded-3xl
             flex flex-col gap-4
          sm:flex-row sm:flex-wrap sm:items-center
          mt-5
            "
            >
              {/* Search */}
              <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
                <PiHospitalFill />
                <input
                  type="text"
                  placeholder="Search Doctors, Clinics"
                  className="
        w-full p-2 outline-none
        sm:border-r sm:border-gray-300
      "
                />
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
                <FaLocationDot />
                <select
                  className="
        w-full p-2 text-sm text-gray-600 outline-none
        sm:border-r sm:border-gray-300
      "
                >
                  <option value="">Choose Location</option>
                </select>
              </div>

              {/* Specialization */}
              <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
                <BiSolidCategory />
                <select
                  className="
        w-full p-2 text-sm text-gray-600 outline-none
        sm:border-r sm:border-gray-300
      "
                >
                  <option value="">Specialization</option>
                  {specialization?.map((item, index) => (
                    <option key={index} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="flex items-center w-full sm:w-auto">
                <input
                  type="date"
                  className="w-full p-2 text-gray-600 outline-none"
                />
              </div>

              {/* Button */}
              <div className="w-full sm:w-auto">
                <button
                  className="
                w-full sm:w-auto  
                bg-gradient-to-b from-[#016AE8] to-[#90E3FE]
               px-6 py-2 text-white rounded-3xl
                  flex items-center justify-center gap-2
                "
                >
                  <CiSearch />
                  Search
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className=' flex items-center  justify-end max-sm:hidden'>
          <div className=''>
            <div className='bg-gradient-to-b from-[#016AE8] to-[#90E3FE] xl:size-80 
             size-40  absolute top-45 xl:right-33 rounded-2xl -rotate-5 '></div>
            <img src={Doctorimg} alt="" className='xl:size-120 size-70 z-20 relative' />
          </div>

        </div>
      </div>

    </div>
  )
}

export default HeroBanner