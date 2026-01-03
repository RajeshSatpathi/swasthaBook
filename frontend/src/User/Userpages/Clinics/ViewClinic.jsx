import React, { useEffect, useState } from 'react'
import clinicBg from "../../../assets/img/clinicBg.jpg"
import HeadingCard from '../../../Component/UserComponent/Home/HeadingCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GETdoctorAPIByClinicIDUsingParams } from '../../../Features/AdminFeature/DoctorSlice'
import { GETClinicAPI } from '../../../Features/AdminFeature/ClinicSlice'
import ClinicDoctorSlider from '../../../Component/UserComponent/ClinicDoctorSlider'

function ViewClinic() {
    const { id } = useParams()
    const { clinics } = useSelector((state) => state.clinics);
    const { Doctors } = useSelector((state) => state.Doctors);
    const [viewClinic, setViewClinic] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GETClinicAPI())
        if (clinics?.length) {
            const filterData = clinics.find((item) => item._id === id);
            setViewClinic(filterData || null);
        }

        dispatch(GETdoctorAPIByClinicIDUsingParams({ id }));

        return () => {
            setViewClinic(null); // clear clinic data on refresh/unmount
        };
    }, [id, clinics, dispatch]);

    return (
        <div>
            <div className='w-full md:h-40  h-auto bg-center bg-cover' style={{
                backgroundImage: `
                  linear-gradient(
                     to bottom,
                     rgba(0, 0, 0, 0.3),
                    rgba(0, 0, 0, 0.3)
                ),
            url(${clinicBg})`
            }}>
                <div className='container mx-auto flex flex-wrap items-center gap-3 relative top-20  '>
                    <img src={viewClinic?.userId?.profileimg} alt="" className='size-40 rounded-full shadow-lg border-5 border-yellow-500' />
                    <div>
                        <h2 className='text-white text-3xl text-shadow-2xs font-semibold'> {viewClinic?.userId?.name}</h2><br />

                        <div>
                            <p className="text-gray-600 mt-2  leading-5">
                                <span className='mx-1'>Place - {viewClinic?.place}</span>,
                                <span className='mx-1'>City - {viewClinic?.city}</span>,<br />
                                <span className='mx-1'>District - {viewClinic?.dist}</span>,
                                <span className='mx-1'>State - {viewClinic?.state}</span>
                                <span className='mx-1'>Pincode - {viewClinic?.pincode}</span><br />
                                <span>Contact No :-</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div><br /><br /> <br />

            {/* /////content///// */}
            <div>
                <HeadingCard
                    heading="Top Doctors"
                    subheading="Highlighting Our Specialized Doctors
"
                />
                <ClinicDoctorSlider Doctors={Doctors} />
                <br />
                <br />



            </div>
        </div>
    )
}

export default ViewClinic