import React, { useState } from 'react'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import PaginationUI from '../PaginationUI';

function Doctorcard({ Doctors }) {

    const [currentPage, setCurrentPage] = useState(1);
    const DoctorPerPage = 6;
    const lastIndex = currentPage * DoctorPerPage
    const firstIndex = lastIndex - DoctorPerPage;

    const currentDoctors = Doctors?.slice(firstIndex, lastIndex);

    const totalPage = Math.ceil((Doctors?.length || 0) / DoctorPerPage)

    const nextPage = () => {
        if (currentPage < totalPage) setCurrentPage(prev => prev + 1)
    }
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1)
    }
    return (
        <>
            {
                currentDoctors?.map((doctors) => (
                    <div className="w-full my-5">
                                <div className="    
                        flex flex-col sm:flex-row 
                        overflow-hidden rounded-2xl 
                        bg-white  border border-gray-200 hover:shadow-md transition
                        ">

                            {/* Image */}
                            <div
                                className="
                            w-full sm:w-[40%] lg:w-[30%]
                            h-50 sm:h-auto
                            bg-cover bg-center 
                                "
                         style={{ backgroundImage: `url(${doctors?.doctorimg ||
                             "https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-doctor-symbol-color-png-image_11455718.png"})` }}
                            />

                            {/* Content */}
                            <div className="w-full sm:w-[60%] lg:w-[70%] p-3">

                                {/* Top Badges */}
                                <div className="flex justify-between flex-wrap gap-2">
                                    <button className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                                        {doctors?.DoctorSpecialization}
                                    </button>
                                    <button className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                                        Available
                                    </button>
                                </div>

                                <hr className="my-2 text-gray-200" />

                                {/* Doctor Name */}
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {doctors?.doctorName}
                                </h2>

                                {/* Info Section */}
                                <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">

                                    {/* Left Info */}
                                    <div>
                                        <h2 className="text-gray-600">{doctors?.doctorQualification}</h2>
                                        <span className="text-sm text-gray-500">{doctors?.gender}</span>
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <h2 className="flex items-center gap-2 text-green-800">
                                            <IoLocationOutline size={20} />
                                            <span>{doctors?.clinicId?.userId?.name}</span>
                                        </h2>
                                        <p className="text-gray-600 text-sm leading-5">
                                            {doctors?.clinicId?.place}, {doctors?.clinicId?.city},{" "}
                                            {doctors?.clinicId?.dist}, {doctors?.clinicId?.state} -{" "}
                                            {doctors?.clinicId?.pincode}
                                        </p>
                                        <p>
                                            <span className='text-sm flex items-center gap-2 '> <IoCallOutline />
                                                Contact No - {doctors?.clinicId.primarymobno}</span>
                                        </p>
                                    </div>
                                </div>

                                <hr className="my-3 text-gray-200" />

                                {/* Availability + Button */}
                           <div className="flex flex-col md:flex-row justify-between gap-4">

                                    {/* Availability */}
                                    <div>
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

                                    {/* Button */}
                                    <div className="flex items-end">
                                        <button
                                            className="
                                        w-full md:w-auto
                                        bg-gradient-to-r from-[#035594] to-[#06AED4]
                                        px-6 py-2 text-white rounded-lg
                                        font-medium text-sm
                                      "
                                        >
                                            Book Appointment
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {/* pagination UI  */}
            <PaginationUI prevPage={prevPage} currentPage={currentPage} nextPage={nextPage} />
        </>

    )
}

export default Doctorcard