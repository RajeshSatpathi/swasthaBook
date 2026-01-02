import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import profile from "../../assets/img/profile.png"
import { IoIosArrowDown } from "react-icons/io";
import { FaUserPen } from "react-icons/fa6";
import { GoSignOut } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { UserLogoutAPI } from '../../Features/UserFeature/AuthFeature/AuthSlice';
import {useNavigate} from "react-router-dom"
function Navbar() {
  const [profileModal, setProfileModal] = useState(false)
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
    const navigate = useNavigate()

  return (
    <div>
      <div className='h-15 flex items-center justify-between p-2'>
        <div className='flex items-center mx-5 gap-4'>
          <CiMenuFries size={25} />
          <CiSearch size={21} color='gray' />
          <input type="text"
            className='border border-gray-100 rounded-full p-1.5
           outline-none text-gray-500 
           ' placeholder='search...... ' />
        </div>
        {/* Profile section  */}

        <div className='flex items-center gap-3  p-2 mr-7'>
          <div className='flex gap-7 items-center mx-5'>
            <FaRegEnvelope size={20} color='gray' />
            <IoIosNotificationsOutline size={25} color='gray' />
          </div>
          <div>
            <img src={user?.profileimg} alt="" className='rounded-full size-10' />
          </div>
          <div className='flex  items-center gap-4 cursor-pointer' onClick={() => setProfileModal(!profileModal)}>
            <h2 className='body-font font-light hover:text-red-700'>{user?.name} <br />
              <span className='text-sm text-green-600 font-semibold'>{user?.role}</span> </h2>
            <IoIosArrowDown />
          </div>

          {
            profileModal && (
              <div className='bg-white p-2 
          absolute top-15  right-10 rounded border border-gray-100
           shadow-xl w-30 h-28'>
                <h2 className='flex items-center  cursor-pointer gap-2 my-2'>
                  <FaUserPen color='purple' />
                  <span className='body-font' onClick={()=>navigate("/Admin-profile")}>My Profile</span>
                </h2>
                <h2 className='flex items-center cursor-pointer  gap-2'>
                  <GoSignOut color='green' />
                  <span className='body-font'  onClick={() => dispatch(UserLogoutAPI()).then(() => navigate("/login"))}>Sign out</span>
                </h2>
              </div>
            )
          }

        </div>


        {/* Logout section  */}



      </div>
    </div>
  )
}

export default Navbar