import React from 'react'
import B from "../../assets/img/B.png"
import { MdSpaceDashboard } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import "./sidebar.style.css"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
function Sidebar() {
  const sideBarMenu = [
    {
      id: 1,
      menu: "Dashboard",
      icons: <MdSpaceDashboard size={25} />,
      path: "/Admin-dashboard"
    },
    {
      id: 2,
      menu: "Category",
      icons: <MdCategory size={25} />,
      path: "/Admin-category"
    },
    {
      id: 3,
      menu: "Clinic",
      icons: <FaClinicMedical size={25} />,
      path: "/Admin-clinic"
    },
    {
      id: 4,
      menu: "Doctors",
      icons: <FaUserDoctor size={25} />,
      path: "/Admin-doctors"
    },

    {
      id: 5,
      menu: "Appoitment",
      icons: <GrNotes size={25} />,
      path: "/Admin-appointment"
    },

    {
      id: 6,
      menu: "Notification",
      icons: <IoIosNotifications size={25} />,
      path: "/Admin-notification"
    },
    {
      id: 7,
      menu: "Settings",
      icons: <IoSettingsSharp size={25} />,
      path: "/Admin-settings"
    },
  ]
  const ClinicsideBarMenu = [
    {
      id: 1,
      menu: "Dashboard",
      icons: <MdSpaceDashboard size={25} />,
      path: "/Admin-dashboard"
    },

    {
      id: 2,
      menu: "Doctors",
      icons: <FaUserDoctor size={25} />,
      path: "/Admin-doctors"
    },

    {
      id: 3,
      menu: "Appoitment",
      icons: <GrNotes size={25} />,
      path: "/Admin-appointment"
    },

    {
      id: 4,
      menu: "Notification",
      icons: <IoIosNotifications size={25} />,
      path: "/Admin-notification"
    },
    {
      id: 5,
      menu: "Settings",
      icons: <IoSettingsSharp size={25} />,
      path: "/Admin-settings"
    },
  ]
  const { user } = useSelector((state) => state.auth);


  return (
    <div>
      <div className='w-60 bg-white  h-full'>
        {/* ///////logo //// */}
        <div className='flex justify-center'>
          <img src={B} alt="" className='size-40' />
        </div>
        {/* sidebar link */}
        <div className='p-5 flex flex-col gap-7'>
          {
            user?.role === "clinicadmin" ? (
              <>
                {
                  ClinicsideBarMenu.map((item, index) => (
                    <Link key={index} to={item.path} className='flex justify-between font-semibold  p-2 items-center rounded
               hover:bg-green-200 cursor-pointer glow-on-hover'>
                      <h3 className='body-font text-md'>{item.menu}</h3>
                      <div>{item.icons}</div>
                    </Link>
                  ))
                }
              </>

            ) : (
              <>
                {
                  sideBarMenu.map((item ,index) => (
                    <Link key={index} to={item.path} className='flex justify-between font-semibold  p-2 items-center rounded
               hover:bg-green-200 cursor-pointer glow-on-hover'>
                      <h3 className='body-font text-md'>{item.menu}</h3>
                      <div>{item.icons}</div>
                    </Link>
                  ))
                }
              </>
            )
          }


        </div>
      </div>
    </div >
  )
}

export default Sidebar