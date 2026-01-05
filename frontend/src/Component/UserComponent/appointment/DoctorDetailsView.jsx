import React from 'react'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
function DoctorDetailsView({viewDoctor}) {
  return (
  
          <div className='lg:w-[35%] w-full bg-white shadow-xl p-2 rounded-2xl  '>
            <div className='flex justify-center '>
              <img src={viewDoctor?.doctorimg || "https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-doctor-symbol-color-png-image_11455718.png"}
                className='size-45 bg-gray-50 shadow relative bottom-12 rounded-full object-cover border border-gray-300' alt="" />

            </div>
            <div className='p-2'>
              <div className='flex justify-between '>
                <span className='text-xs bg-gray-200 font-semibold p-1 rounded-3xl px-4 text-[#035C99]'>{viewDoctor?.DoctorSpecialization}</span>
                <button className='bg-green-400 text-white rounded-3xl text-sm py-1 px-3'>Available</button>
              </div>

              <div className=' flex flex-col '>
                <h2 className='text-lg  body-font font-semibold text-gray-600'>{viewDoctor?.doctorName}</h2>
                <h2 className="text-gray-800 mb-2">{viewDoctor?.doctorQualification}</h2>
                <p className='text-sm text-gray-500'>{viewDoctor?.doctorDesc}</p>

                <div>
                  <h2 className="flex items-center font-semibold gap-2 text-green-800">
                    <IoLocationOutline size={20} />
                    <span>{viewDoctor?.clinicId?.userId?.name}</span>
                  </h2>
                  <p className="text-gray-600 text-sm leading-5">
                    {viewDoctor?.clinicId?.place}, {viewDoctor?.clinicId?.city},{" "}
                    {viewDoctor?.clinicId?.dist}, {viewDoctor?.clinicId?.state} -{" "}
                    {viewDoctor?.clinicId?.pincode}
                  </p>
                  <p>
                    <span className='text-sm flex items-center font-semibold text-shadow-2xs gap-2 '> <IoCallOutline />
                      Contact No - {viewDoctor?.clinicId.primarymobno}</span>
                  </p>
                </div>
                {/* Availability */}
                <div>
                  <h2 className="text-gray-600 text-sm mb-1">
                    Available Day & Timeslot
                  </h2>

                  {viewDoctor?.availability?.map((item, idx) => (
                    <div key={idx} className="flex flex-wrap gap-2 text-sm">
                      <span className="font-medium">{item.day}:</span>
                      {item.timeSlots.map((time, i) => (
                        <span key={i} className="text-gray-600">
                          {time.time}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      
  )
}

export default DoctorDetailsView