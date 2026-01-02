import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import HeadingBox from "../../../Component/AdminComponent/HeadingBox";
import profile from "../../../assets/img/profile.png"
import { useDispatch, useSelector } from "react-redux";
import { CiLineHeight } from "react-icons/ci";
import { GETClinicAPI, GETClinicByuserIDAPI } from "../../../Features/AdminFeature/ClinicSlice";

const AddClinic = () => {

    const dispatch = useDispatch()
    const { clinics } = useSelector((state) => state.clinics)
    useEffect(() => {
        dispatch(GETClinicByuserIDAPI())
    }, [dispatch]);

    return (
        <div>
            <HeadingBox heading="My Profile Details" />
            <br />

            <form className="bg-white rounded p-5">
                <div className="flex justify-center">
                    <img
                        src={clinics?.userId?.profileimg}
                        alt="profile"
                        className="size-20 rounded-full"
                    />
                </div>

                {/* Basic Info */}
                <div className="flex gap-5 mt-5">
                    <div className="w-[46%]">
                        <label>Clinic ID*</label>
                        <input
                            value={clinics?._id}
                            type="text"
                            className="border bg-gray-100 border-gray-300 p-1 rounded w-full"
                        />
                    </div>
                    <div className="w-[46%]">
                        <label>Clinic / Medical Store Name *</label>
                        <input
                            value={clinics?.userId?.name}
                            type="text"
                            className="border bg-gray-100 border-gray-300 p-1 rounded w-full"
                        />
                    </div>

                    <div className="w-[46%]">
                        <label>Login Email *</label>
                        <input
                            value={clinics?.userId?.email}


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
                            value={clinics?.place}
                            className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
                    </div>

                    <div className="w-[30%]">
                        <label>City *</label>
                        <input value={clinics?.city}
                            className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
                    </div>

                    <div className="w-[30%]">
                        <label>District *</label>
                        <input value={clinics?.dist}
                            className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
                    </div>
                </div>

                <br />

                <div className="flex gap-5">
                    <div className="w-[30%]">
                        <label>State *</label>
                        <input value={clinics?.state}
                            className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
                    </div>

                    <div className="w-[30%]">
                        <label>Pin Code *</label>
                        <input value={clinics?.pincode}
                            className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
                    </div>

                    <div className="w-[30%]">
                        <label>Primary Mobile No *</label>
                        <input value={clinics?.primarymobno}
                            className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
                    </div>
                </div>

                <br />

                <div className="flex gap-5">
                    <div className="w-[30%]">
                        <label>Alternate Mobile No</label>
                        <input value={clinics?.alternatemobno}
                            className="border bg-gray-100 border-gray-300 p-1 rounded w-full" />
                    </div>

                    <div className="w-[30%]">
                        <label>Upload Banner Image *</label>
                        <input
                            type="file"
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                    </div>
                </div>

                <div className="flex justify-center my-5">
                    <button
                        type="button"
                        className="bg-gradient-to-r from-[#02C98D] 
                        to-[#0575E6] p-2 w-32 rounded text-sm text-white font-semibold shadow-md"
                    >
                        Change Profile
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddClinic;
