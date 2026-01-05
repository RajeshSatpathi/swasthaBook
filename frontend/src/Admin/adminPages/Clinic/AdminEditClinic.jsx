import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GETClinicAPI, UpdateClinicAPI } from '../../../Features/AdminFeature/ClinicSlice';
import HeadingBox from '../../../Component/AdminComponent/HeadingBox';
import { FaClinicMedical } from 'react-icons/fa';

import LoadingBtn from '../../../Component/Comon/LoadingBtn';
function AdminEditClinic() {
  const { id } = useParams()
  const { clinics, loading } = useSelector((state) => state.clinics);

  const [viewClinic, setViewClinic] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GETClinicAPI())
  }, [dispatch]);

  useEffect(() => {
    if (clinics?.length) {
      const filterData = clinics.find((item) => item._id === id);
      setViewClinic(filterData || null);
    }
    return () => {
      setViewClinic(null); // clear clinic data on refresh/unmount
    };
  }, [id, clinics]);

  ///// this for update clinic logic code ////

  const [updateClinicData, setUpdateClinicData] = useState({

    name: "",
    email: "",
    place: "",
    city: "",
    dist: "",
    state: "",
    pincode: "",
    primarymobno: "",
    alternatemobno: "",
    profileimg: ""

  })
  useEffect(() => {
    if (viewClinic) {
      setUpdateClinicData({

        name: viewClinic.userId?.name || "",
        email: viewClinic.userId?.email || "",
        place: viewClinic.place || "",
        city: viewClinic.city || "",
        dist: viewClinic.dist || "",
        state: viewClinic.state || "",
        pincode: viewClinic.pincode || "",
        primarymobno: viewClinic.primarymobno || "",
        alternatemobno: viewClinic.alternatemobno || "",
        profileimg: viewClinic.userId?.profileimg || ""
      });
    }
  }, [viewClinic]);

  // handle input data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateClinicData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  //handle file data
  const handleFileChange = (e) => {
    setUpdateClinicData((prev) => ({
      ...prev,
      profileimg: e.target.files[0]
    }));
  };

  // update clinic form 

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(updateClinicData).forEach(([key, value]) => {
      formData.append(key, value);
    })
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    //dispatch update api 
    dispatch(UpdateClinicAPI({ id, formData })).then((data) => {
      alert(data.payload.message)
    })
  }

  return (
    <div>
      <div>
        <HeadingBox
          iconimg={<FaClinicMedical color="white" size={18} />}
          heading="Edit Clinic Details"
        />
        <br />

        <form className="bg-white rounded p-5" onSubmit={handlesubmit}>
          <div className="flex justify-center">
            <img
              src={updateClinicData.profileimg}
              alt="profile"
              className="size-20 rounded-full"
            />
          </div>

          {/* Basic Info */}
          <div className="flex gap-5 mt-5">
            <div className="w-[46%]">
              <label>Clinic ID*</label>
              <input
                value={viewClinic?._id}
                onChange={handleChange}
                type="text"
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full"
              />
            </div>
            <div className="w-[46%]">
              <label>Clinic / Medical Store Name *</label>
              <input
                name='name'
                value={updateClinicData.name}
                onChange={handleChange}
                type="text"
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full"
              />
            </div>

            <div className="w-[46%]">
              <label>Login Email *</label>
              <input
                name='email'
                value={updateClinicData.email}
                onChange={handleChange}
                type="email"
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full"
              />
            </div>


          </div>

          <br />
          <h2 className="text-gray-600 uppercase text-sm font-semibold my-2">
            Clinic Address Information
          </h2>

          {/* Address */}
          <div className="flex gap-5">
            <div className="w-[30%]">
              <label>Place *</label>
              <input
                name='place'
                value={updateClinicData?.place}
                onChange={handleChange}
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
            </div>

            <div className="w-[30%]">
              <label>City *</label>
              <input value={updateClinicData?.city}
                name='city'
                onChange={handleChange}
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
            </div>

            <div className="w-[30%]">
              <label>District *</label>
              <input value={updateClinicData?.dist}
                name='dist'
                onChange={handleChange}
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
            </div>
          </div>

          <br />

          <div className="flex gap-5">
            <div className="w-[30%]">
              <label>State *</label>
              <input value={updateClinicData?.state}
                name='state'
                onChange={handleChange}
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
            </div>

            <div className="w-[30%]">
              <label>Pin Code *</label>
              <input value={updateClinicData?.pincode}
                onChange={handleChange}
                name='pincode'
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
            </div>

            <div className="w-[30%]">
              <label>Primary Mobile No *</label>
              <input value={updateClinicData?.primarymobno}
                name='primarymobno'
                onChange={handleChange}
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
            </div>
          </div>

          <br />

          <div className="flex gap-5">
            <div className="w-[30%]">
              <label>Alternate Mobile No</label>
              <input value={updateClinicData?.alternatemobno}
                name='alternatemobno'
                onChange={handleChange}
                className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
            </div>

            <div className="w-[30%]">
              <label>Upload Banner Image *</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="border border-gray-300 p-1 rounded w-full"
              />
            </div>

          </div>

          <LoadingBtn loading={loading} loadingText="updating" btnText="Edit Clinic" />
        </form>
      </div>
    </div>
  )
}

export default AdminEditClinic