import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { IoBagOutline } from "react-icons/io5";
import B from "../../assets/img/B.png"
import { FaSlideshare, FaUserPen, FaUserShield } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux"
import { IoIosArrowDown } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import { UserLogoutAPI } from "../../Features/UserFeature/AuthFeature/AuthSlice";

function UserNavabar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const [profileModal, setProfileModal] = useState(false)
  const navigate = useNavigate()
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-900 font-semibold body-font  hover:text-blue-600"

  return (
    <nav className="bg-white shadow w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="text-xl font-bold text-blue-500 flex items-center">
            <img src={B} className="size-20" alt="" />
            <h2 className="body-font text-2xl text-shadow-2xs">SwasthaBook</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/doctors" className={navLinkClass}>Doctors</NavLink>
            <NavLink to="/clinics" className={navLinkClass}>Clinics</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <div className=" flex">
              {
                user ? (
                  <div className='flex items-center gap-2 cursor-pointer' onClick={() => setProfileModal(!profileModal)}>
                    <img src={user?.profileimg} className="size-10 rounded-full" alt="" />
                    <h2 className='body-font font-light'>{user?.name} </h2>
                    <IoIosArrowDown />
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

                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="flex items-center gap-2  items-center px-5 mx-2 text-sm py-1 rounded-3xl 
             text-white bg-gradient-to-r from-[#0C8DF2] to-[#06AED4] 
             hover:opacity-90 transition"
                    >
                      <IoBagOutline size={15} />
                      <span>Login</span>
                    </NavLink>

                    <NavLink
                      to="/register"
                      className="px-4 flex gap-2 items-center py-1 text-sm bg-gray-800
                 text-white rounded-3xl hover:bg-blue-700"
                    >
                      <FaUserShield />
                      Register
                    </NavLink>
                  </>

                )
              }

            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : <CiMenuFries size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (

        < div
          className={`fixed top-0 left-0 h-full w-86 bg-gradient-to-b from-[#efeff0] to-[#e2e3e4] shadow-lg z-50
              transform transition-transform duration-300 ease-in-out
               ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col px-4 pt-20 space-y-4">
    <div className=" flex">
              {
                user ? (
                  <div className='flex items-center gap-2 cursor-pointer' onClick={() => setProfileModal(!profileModal)}>
                    <img src={user?.profileimg} className="size-10 rounded-full" alt="" />
                    <h2 className='body-font font-light'>{user?.name} </h2>
                    <IoIosArrowDown />
                    {
                      profileModal && (
                        <div className='bg-white p-2 
                              absolute top-15  right-10 rounded border border-gray-100
                               shadow-xl w-30 h-28'>
                          <h2 className='flex items-center gap-2 my-2'>
                            <FaUserPen color='purple' />
                            <span className='body-font'>My Profile</span>
                          </h2>
                          <h2 className='flex items-center gap-2'>
                            <GoSignOut color='green' />
                            <span className='body-font'>Sign out</span>
                          </h2>
                        </div>
                      )
                    }
                  </div>

                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="flex items-center gap-2  items-center px-5 mx-2 text-sm py-1 rounded-3xl 
             text-white bg-gradient-to-r from-[#0C8DF2] to-[#06AED4] 
             hover:opacity-90 transition"
                    >
                      <IoBagOutline size={15} />
                      <span>Login</span>
                    </NavLink>

                    <NavLink
                      to="/register"
                      className="px-4 flex gap-2 items-center py-1 text-sm bg-gray-800
                 text-white rounded-3xl hover:bg-blue-700"
                    >
                      <FaUserShield />
                      Register
                    </NavLink>
                  </>

                )
              }

            </div>
            <NavLink onClick={() => setIsOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/doctors" className={navLinkClass}>Doctors</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/clinics" className={navLinkClass}>Clinics</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>

        

          </div>

        </div>
      )
      }

    </nav >
  )
}

export default UserNavabar
