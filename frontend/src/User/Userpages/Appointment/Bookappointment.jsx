import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { GETdoctorByIDAPI } from "../../../Features/AdminFeature/DoctorSlice"

import DoctorDetailsView from '../../../Component/UserComponent/appointment/DoctorDetailsView';
import HeadingCard from '../../../Component/UserComponent/Home/HeadingCard';
function Bookappointment() {
  const { id } = useParams();
  const { Doctors } = useSelector((state) => state.Doctors);
  const dispath = useDispatch();
  const [viewDoctor, setviewDoctor] = useState(null)
  useEffect(() => {
    dispath(GETdoctorByIDAPI({ id }))
    if (Doctors?.length) {
      const filterData = Doctors.find((item) => item._id === id);
      setviewDoctor(filterData || null);
    }
  }, [id, dispath])

  console.log(viewDoctor)
  return (
    <div className='bg-gray-100 p-5'>
      <div className='container mx-auto p-4 rounded-2xl flex justify-around flex-wrap gap-5 mt-10'>
        {/* ///doctor view //// */}
        <DoctorDetailsView viewDoctor={viewDoctor} />

        {/* //// appointment form//// */}
        <div className='lg:w-[55%] bg-gray-50   rounded-2xl shadow-xl'>
          <div className='bg-blue-950 w-full flex items-center p-2  object-cover rounded-t-2xl'>
            <h2 className='text-white body-font uppercase  text-shadow-2xs'>Appointment Details</h2>
          </div>
          <form action="" className='p-3 mt-6'>
            <div className='flex  justify-evenly text-sm flex-wrap '>
              <div className='md:w-[45%] w-full'>
                <label htmlFor=""><span className='text-red-400 '>*</span>Doctor Name</label><br />
                <input type="text"disabled value={viewDoctor?.doctorName} className='appointment-inputbox bg-gray-100' placeholder='Name' />
              </div>
              <div className='md:w-[45%] w-full'>
                <label htmlFor=""><span className='text-red-400 '>*</span>Clinic Name </label><br />
                <input type="text" disabled className='appointment-inputbox bg-gray-100' value={viewDoctor?.clinicId?.userId?.name} placeholder='Phone' />
                
              </div>
            </div>
            <div className='flex  justify-evenly text-sm flex-wrap mt-5'>
              <div className='md:w-[45%] w-full'>
                <label htmlFor=""><span className='text-red-400 '>*</span>Patient Full Name </label><br />
                <input type="text" className='appointment-inputbox' placeholder='Name' />
              </div>
              <div className='md:w-[45%] w-full'>
                <label htmlFor=""><span className='text-red-400 '>*</span>Phone Number </label><br />
                <input type="text" className='appointment-inputbox' placeholder='Phone' />
                <input type="text" className='' />
              </div>
            </div>
            <div className='flex  justify-evenly text-sm flex-wrap'>
              <div className='md:w-[45%] w-full'>
                <label htmlFor=""><span className='text-red-400 '>*</span>Patient Address </label><br />
                <input type="text" className='appointment-inputbox' placeholder='Vill,PO,district,pincode' />
              </div>
              <div className='md:w-[45%] w-full'>
                <label htmlFor=""><span className='text-red-400 '>*</span>Gender </label><br />
                <select name="" id="" className='appointment-inputbox' >
                  <option value="">select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div className='flex  justify-evenly text-sm flex-wrap mt-3'>
              <div className='md:w-[45%] w-full'>
                <label htmlFor=""><span className='text-red-400 '>*</span>Date of Booking </label><br />
                <input type="date" className='appointment-inputbox' />
              </div>
              <div className='md:w-[45%] w-full'>
                <label htmlFor=""><span className='text-red-400 '>*</span>Patient Age </label><br />
                <input type="number" className='appointment-inputbox' placeholder='your age' />

              </div>
            </div>
            <div className='flex items-center justify-center mt-5'>
              <button className='text-xs text-shadow-2xs 
              bg-gradient-to-r from-[#035594] to-[#06AED4] flex justify-center items-center
              gap-3 text-white p-2 rounded-3xl px-4 w-60  cursor-pointer'>Book Appointment</button>
            </div>
          </form>

        </div>
      </div>
      <HeadingCard
        heading=""
        subheading="Related Doctor"
      />
    </div>
  )
}

export default Bookappointment