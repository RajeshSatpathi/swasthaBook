import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa";
function OurServices() {
    const servicesData = [
        {
            text: "Book Appointment",
            bgColor: "#822BD4",
            icon: <SlCalender size={22} color='white' />
        },
        {
            text: "Talks To Doctors",
            bgColor: "#0E82FD",
            icon: <FaUserDoctor size={22} color='white' />
        }, {
            text: "Hospital & Clinics",
            bgColor: "#DD2590",
            icon: <FaRegHospital size={22} color='white' />
        },
        {
            text: "HealthCare",
            bgColor: "#0E82FD",
            icon: <SlCalender size={22} color='white' />
        },
        {
            text: "Medical & Supplies",
            bgColor: "#0E9384",
            icon: <SlCalender size={22} color='white' />
        }
    ]
    return (
        <div className='p-5'>
            <div className='container mx-auto shadow-lg  rounded-lg border border-gray-200
          relative lg:bottom-10 z-30 gap-6  bg-white flex justify-around items-center xl:p-5 p-3 flex-wrap  '>
                {
                    servicesData.map((item) => (
                        <div className='flex flex-col items-center gap-3 lg:w-40 w-full'>
                            <div className={` xl:size-16 size-12 rounded-full flex items-center justify-center`}
                             style={{ backgroundColor: item.bgColor }}>
                                {item.icon}
                            </div>
                            <span className='body-font font-semibold text-gray-600'>{item.text}</span>
                        </div>
                    ))
                }




            </div>
        </div>

    )
}

export default OurServices