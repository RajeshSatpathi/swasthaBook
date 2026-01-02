import React, { useEffect } from 'react'
import doctorBg from "../../../assets/img/Mainbg.jpg";
import { PiHospitalFill } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidCategory } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';

function DoctorHeading({specialization}) {

    return (
        <div className='w-full  p-3  bg-cover ' style={{ backgroundImage: `url(${doctorBg})` }}>
            <div className='flex container mx-auto justify-center items-center h-full flex-col'>

                <h2 className='text-2xl font-semibold body-font'>Our All Doctor</h2>
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
                            <option value="">Hirbandh</option>
                            <option value="">Supur</option>
                            <option value="">Khatra</option>
                            <option value="">Hatirampur</option>
                            <option value="">Molian</option>
                            <option value="">Bangla</option>
                            <option value="">Bankura</option>
                            <option value="">Raipur</option>




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
    )
}

export default DoctorHeading