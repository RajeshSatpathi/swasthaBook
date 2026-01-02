import React from 'react'
import { FaHome } from "react-icons/fa";
import HeadingBox from '../../../Component/AdminComponent/HeadingBox';
function AdminDashboard() {
  const cardData = [
    {
      id: 1,
      title: "Total Clinics",
      total: 20,
      bgColor: "bg-gradient-to-r from-[#FEAF96] to-[#FE8996]"
    }
    ,
    {
      id: 2,
      title: "Total Doctors",
      total: 20,
      bgColor: "bg-gradient-to-r from-[#81C2F6] to-[#3196E7]"
    },
    {
      id: 3,
      title: "Total Appointment",
      total: 20,
      bgColor: "bg-gradient-to-r from-[#7AD8CF] to-[#32D1BA]"
    }
  ]
  return (
    <div>
      {/* heading  */}
      <HeadingBox iconimg={<FaHome color='white' size={18} />} heading="Dashboard"/>
      {/* dashboard card section  */}
      <div className='flex gap-8 my-6 flex-wrap'>
        {
          cardData.map((item) => (

            <div className={`w-86 h-50 rounded flex justify-between ${item.bgColor}`}>

              <div className='flex flex-col gap-5 p-4'>
                <h2 className='text-white body-font font-bold text-xl'>{item.title}</h2>
                <span className='text-white text-4xl body-font'>{item.total}</span>
              </div>

              <img src="https://themewagon.github.io/purple-react/static/media/circle.953c9ca0.svg"
                className='size-50 relative right-0 top-0 left-8'
                alt="" />
            </div>
          ))
        }



      </div>

    </div>
  )
}

export default AdminDashboard