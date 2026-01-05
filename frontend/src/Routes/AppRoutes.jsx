import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../Component/AdminComponent/AdminLayout/MainLayout'
import AdminDashboard from '../Admin/adminPages/Dashboard/AdminDashboard'
import AdminCategory from '../Admin/adminPages/Category/AdminCategory'
import AdminClinic from '../Admin/adminPages/Clinic/AdminClinic'
import AdminAppointment from '../Admin/adminPages/Appointment/AdminAppointment'
import AddClinic from '../Admin/adminPages/Clinic/AddClinic'
import UserLayout from '../Component/UserComponent/UserLayout'
import Home from "../User/Userpages/Home/Home.jsx"
import About from "../User/Userpages/About/About.jsx"
import Services from "../User/Userpages/Services/Services.jsx"
import Contact from "../User/Userpages/Contact/Contact.jsx"
import Doctors from "../User/Userpages/Doctors/Doctors.jsx"
import Clinic from "../User/Userpages/Clinics/Clinic.jsx"
import Login from '../User/Userpages/Auth/Login.jsx'
import SignUp from '../User/Userpages/Auth/SignUp.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { CheckAuthAPI } from '../Features/UserFeature/AuthFeature/AuthSlice.jsx'
import { MoonLoader } from "react-spinners"
import Myappointment from '../User/Userpages/Appointment/Myappointment.jsx'
import Bookappointment from '../User/Userpages/Appointment/Bookappointment.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import AddDoctors from '../Admin/adminPages/Doctors/AddDoctors.jsx'
import Doctor from '../Admin/adminPages/Doctors/Doctor.jsx'
import AdminProfile from '../Admin/adminPages/AdminProfile/AdminProfile.jsx'
import ViewClinic from '../User/Userpages/Clinics/ViewClinic.jsx'
import AdminEditClinic from '../Admin/adminPages/Clinic/AdminEditClinic.jsx'
function AppRoutes() {
  const { loading, user, isAuthentication } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(CheckAuthAPI())
  }, [dispatch]);
  if (loading) {
    return <div className='flex justify-center items-center  h-screen bg-blue-500 '>
      <MoonLoader
        // visible={true}
        height="100"
        width="100"
        color="white"
        size={100}
      />
    </div>
  }
  return (
    <div>
      <Routes>
        {/* adminlayout routing section  */}
        <Route element={
          <ProtectedRoutes isAuthentication={isAuthentication} user={user}>
            <MainLayout/>
          </ProtectedRoutes>
        }>
          <Route path='/Admin-dashboard' element={<AdminDashboard />} />
          <Route path='/Admin-category' element={<AdminCategory />} />
          <Route path='/Admin-clinic' element={<AdminClinic />} />
          <Route path='/Admin-appointment' element={<AdminAppointment />} />
          <Route path='/Admin-doctors' element={<Doctor />} />
          <Route path='/Admin-addClinic' element={<AddClinic />} />
          <Route path='/Admin-adddoctor' element={<AddDoctors />} />
          <Route path='/Admin-profile' element={<AdminProfile />} />
          <Route path='/Admin/editclinic/:id' element={<AdminEditClinic />} />



        </Route>

        {/* ////user layout section /// */}
        <Route element={
          <ProtectedRoutes isAuthentication={isAuthentication} user={user}>
            <UserLayout/>
          </ProtectedRoutes>
        }>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/clinics' element={< Clinic />} />
          <Route path='/viewclinics/:id' element={< ViewClinic />} />

          <Route path='/login' element={< Login />} />
          <Route path='/register' element={< SignUp />} />
          <Route path='/myappointment' element={< Myappointment />} />
          <Route path='/bookappointment/:id' element={< Bookappointment />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes