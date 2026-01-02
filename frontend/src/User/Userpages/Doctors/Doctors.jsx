import React, { useEffect } from 'react'
import DoctorHeading from '../../../Component/UserComponent/Doctors/DoctorHeading'
import { useDispatch, useSelector } from 'react-redux';
import { GETCategoryAPI } from '../../../Features/AdminFeature/SpecializationSlice';
import { IoLocationOutline } from "react-icons/io5";
import { GETdoctorsAPI } from '../../../Features/AdminFeature/DoctorSlice';
import { IoCallOutline } from "react-icons/io5";
import Doctorcard from '../../../Component/UserComponent/Doctors/Doctorcard';
function Doctors() {
  const { specialization } = useSelector((state) => state.specialization);
  const { Doctors } = useSelector((state) => state.Doctors);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GETCategoryAPI())
    dispatch(GETdoctorsAPI())

  }, [dispatch])
  return (
    <div>
      <DoctorHeading specialization={specialization} />
      <div className='container mx-auto flex  p-5 gap-5 my-2 bg-gray-50'>
        {/* filter section code  */}
        <div className='w-[23%] max-sm:hidden h-full rounded-2xl  bg-white shadow p-2'>
          <div className='bg-gray-50 flex justify-between p-3 text-sm'>
            <h2 className='text-gray-800 font-semibold'>Filter</h2>
            <button className='underline'>Clear all </button>
          </div>
          <input type="text" className='border border-gray-200 p-2 w-full' />
          <h2 className='text-gray-800 font-semibold my-2 text-sm'>Specialities</h2>
          <div className='h-86  overflow-scroll'>

            {
              specialization?.map((item) => (
                <div className='mx-2 flex gap-3 my-1'>
                  <input type="checkbox" />
                  <span className='text-sm text-gray-700'>{item.slug}</span>
                </div>
              ))
            }
          </div>
          <hr className='text-gray-300 my-2' />
          {/* gender  */}
          <h2 className='text-gray-800 font-semibold my-2 text-sm'>Gender</h2>
          <div>
            <div className='mx-2 flex gap-3 my-1'>
              <input type="checkbox" />
              <span className='text-sm'>Male</span>
            </div>
            <div className='mx-2 flex gap-3 my-1'>
              <input type="checkbox" />
              <span className='text-sm'>Female</span>
            </div>
          </div>
          <hr className='text-gray-300 my-2' />
          {/* clinic  */}
          <div>
            <h2>Clinics </h2>
            <div className='mx-2 flex gap-3 my-1'>
              <input type="checkbox" />
              <span className='text-sm'>abcd Clinic</span>
            </div>
          </div>
        </div>

        {/* doctors show section  */}

        <div className=' w-full'>
          <div className='my-2 flex justify-between p-2'>
            <h2 className='font-semibold text-lg '>Showing <span className='text-gray-400'>400</span>
              Doctors For you</h2>
            <span className='flex gap-2'>Availability <input type="checkbox" /></span>
          </div>

              <Doctorcard Doctors={Doctors} />

        </div>
      </div>
    </div>
  )
}

export default Doctors