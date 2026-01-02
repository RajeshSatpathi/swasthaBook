import React, { useEffect } from 'react'
import HeroBanner from '../../../Component/UserComponent/Home/HeroBanner'
import OurServices from '../../../Component/UserComponent/Home/OurServices'
import Category from '../../../Component/UserComponent/Home/Category'
import OurMission from '../../../Component/UserComponent/Home/OurMission'
import Newsletter from '../../../Component/UserComponent/Home/Newsletter'
import AskQuestion from '../../../Component/UserComponent/Home/AskQuestion'
import Blog from '../../../Component/UserComponent/Home/Blog'
import { useDispatch, useSelector } from 'react-redux';
import { GETCategoryAPI } from '../../../Features/AdminFeature/SpecializationSlice';
import { GETdoctorsAPI } from '../../../Features/AdminFeature/DoctorSlice'
import DoctorList from '../../../Component/UserComponent/Home/DoctorList'
function Home() {
  const { specialization } = useSelector((state) => state.specialization);
  const { Doctors } = useSelector((state) => state.Doctors);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GETCategoryAPI())
    dispatch(GETdoctorsAPI())
  }, [dispatch])

  return (
    <div>
      <HeroBanner specialization={specialization} />
      <OurServices />
      <Category specialization={specialization} /><br /><br />
      <DoctorList  Doctors={Doctors}/>
      <OurMission />
      <AskQuestion /><br />
      <Blog />
      <Newsletter />

    </div>
  )
}

export default Home