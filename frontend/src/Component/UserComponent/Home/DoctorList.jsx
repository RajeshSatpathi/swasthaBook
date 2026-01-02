import React from 'react'
import HeadingCard from './HeadingCard'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'

function DoctorList({ Doctors }) {
    return (
        <div className='my-7 bg-gray-50 p-2'>
            <HeadingCard
                heading="Top Doctors"
                subheading="Highlighting Our Specialized Doctors"
            /> <br />
            <div className='container mx-auto  my-5  '>
                <div className='flex justify-between gap-3 flex-wrap p-3'>
                    {
                        Doctors?.slice(0, 8).map((doctors) => (
                            <div className='md:w-76 w-full bg-white rounded-2xl  my-4'>
                                <img src={doctors?.doctorimg || "https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-doctor-symbol-color-png-image_11455718.png"} className='w-full h-55 object-cover' alt="" />
                                <div className='p-2'>
                                    <div className='flex justify-between mt-3'>
                                        <span className='text-xs bg-gray-200 font-semibold p-1 rounded-3xl px-4 text-[#035C99]'>{doctors?.DoctorSpecialization}</span>
                                        <button className='bg-green-400 text-white rounded-3xl text-sm py-1 px-3'>Available</button>
                                    </div>

                                    <div>
                                        <h2 className='text-lg  body-font'>{doctors?.doctorName}</h2>
                                        <h2 className="text-gray-600">{doctors?.doctorQualification}</h2>
                                        <div>
                                            <h2 className="flex items-center gap-2 text-green-800">
                                                <IoLocationOutline size={20} />
                                                <span>{doctors?.clinicId?.userId?.name}</span>
                                            </h2>
                                            <p className="text-gray-600 text-xs leading-5">
                                                {doctors?.clinicId?.place}, {doctors?.clinicId?.city},{" "}
                                                {doctors?.clinicId?.dist}, {doctors?.clinicId?.state} -{" "}
                                                {doctors?.clinicId?.pincode}
                                            </p>

                                        </div>
                                    </div>
                                    {/* Availability */}
                                    <div className=''>
                                        <h2 className="text-gray-600 text-sm mb-1">
                                            Available Day & Timeslot
                                        </h2>

                                        {doctors?.availability?.map((item, idx) => (
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

                                    <div className='flex justify-between mt-3'>
                                        <button className='text-xs text-shadow-2xs 
                                         border border-gray-500 p-1.5 rounded-3xl px-4 flex items-center gap-2 cursor-pointer'> <IoCallOutline />    Contact Details</button>
                                        <button className='text-xs text-shadow-2xs 
                                        bg-gradient-to-r from-[#035594] to-[#06AED4]  text-white p-1.5 rounded-3xl px-4  cursor-pointer'>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default DoctorList