import React from 'react'
import HeadingCard from './HeadingCard'
import missionimg1 from "../../../assets/img/missionimg1.jpg"
import missionimg23 from "../../../assets/img/missionimg23.jpg"

function OurMission() {
    return (
        <section className='w-full bg-gradient-to-r from-[#000F28] to-[#001b46] p-4'>
            <div className='container mx-auto mt-5 flex flex-wrap justify-around '>
                {/* img section */}
                <div className='flex flex-col gap-4 w-120 '>
                    <img src={missionimg1} alt="" className='xl:w-120  w-full  rounded-2xl' />
                    <div className='flex gap-2 w-full'>
                        <img src={missionimg23} alt="" className='xl:w-60 w-[50%] rounded-2xl' />
                        <img src={missionimg1} alt="" className='xl:w-60  w-[50%] rounded-2xl' />
                    </div>
                </div>
                {/* Content section */}
                <div className=' p-5 md:w-120 xl:w-auto '>
                    <div>
                        <h3 className='bg-blue-600 rounded-2xl   text-white w-35 text-center font-semibold'>
                            Our Mission </h3>
                        <h2 className='text-white text-2xl'>Smart Healthcare, Simplified</h2>
                        <p className='text-white lg:text-2xl text-xl font-semibold mt-3'>
                            Our online doctor information and appointment booking system <br /> connects patients with
                            verified <span className='text-blue-400'>healthcare professionals.</span>
                        </p>
                        <span className='text-sm text-gray-400'>
                            You can explore doctor profiles, check availability, and schedule appointments—all
                             from the comfort of your home.
                            <br />  No long queues. No unnecessary calls. Just simple and secure healthcare access
                        </span>
                        <h2 className='text-yellow-600 font-semibold mt-4 mb-2'>Benefits for Patients</h2>
                        <ul>
                            <li className='ourMission-li'>Access accurate doctor information</li>
                            <li className='ourMission-li'>Manage appointments easily</li>
                            <li className='ourMission-li'>Save time by booking online</li>
                            <li className='ourMission-li'>Choose doctors based on your needs</li>
                        </ul>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default OurMission