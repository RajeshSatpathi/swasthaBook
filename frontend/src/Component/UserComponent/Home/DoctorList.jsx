import React from 'react'
import HeadingCard from './HeadingCard'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import {Link} from "react-router-dom"

function DoctorList({ Doctors }) {
    return (
        <div className='my-7 bg-gray-50 p-2'>
            <HeadingCard
                heading="Top Doctors"
                subheading="Highlighting Our Specialized Doctors"
            /> <br />
            <div className='container mx-auto  my-5  '>
                <div className='flex justify-between items-center gap-3 flex-wrap p-3'>
                    {
                        Doctors?.slice(0, 8).map((doctors) => (
                            <div className='md:w-72 w-full bg-white p-2 rounded-2xl hover:shadow-xl my-4'>
                                <div className='flex justify-center'> 
                                <img src={doctors?.doctorimg || "https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-doctor-symbol-color-png-image_11455718.png"} 
                                className='size-28 rounded-full object-cover border border-gray-300' alt="" />

                                </div>
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
                                     

                                        </div>
                                    </div>
                          
                                    <div className='flex justify-center mt-3'>
                                     <Link to={`/bookappointment/${doctors?._id}`} className='text-xs text-shadow-2xs 
                                        bg-gradient-to-r from-[#035594] to-[#06AED4] flex justify-center items-center
                                         gap-3 text-white p-1.5 rounded-3xl px-4 w-30  cursor-pointer'> <IoCallOutline />  Book Now</Link>
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