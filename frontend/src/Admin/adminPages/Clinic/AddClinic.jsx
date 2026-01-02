import React from 'react'
import { useForm } from 'react-hook-form'
import HeadingBox from '../../../Component/AdminComponent/HeadingBox'
import profile from "../../../assets/img/profile.png"
import { useDispatch } from 'react-redux'
import { ADDClinicAPI } from '../../../Features/AdminFeature/ClinicSlice'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
function AddClinic() {

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = (data) => {

        console.log("Form Data:", data)
        // API call here
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("place", data.place);
        formData.append("city", data.city);
        formData.append("dist", data.dist);
        formData.append("state", data.state);
        formData.append("pincode", data.pincode);
        formData.append("primarymobno", data.primarymobno);
        formData.append("alternatemobno", data.alternatemobno);
        formData.append("role", data.role);
        formData.append("profileimg", data.profileimg[0]);
        dispatch(ADDClinicAPI(formData)).then((data) => {
            toast.success(data.payload.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
            setTimeout(() => {
                navigate("/Admin-clinic")

            }, 3000);
        })

    }


    return (
        <div>
            <HeadingBox heading="Add Clinic / Medical Store" />
            <br />
            <ToastContainer position="top-center" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded p-5"
            >
                <div className="flex justify-center">
                    <img src={profile} alt="profile" className="size-20 rounded-full" />
                </div>

                {/* Basic Info */}
                <div className="flex gap-5">
                    <div className="w-[30%]">
                        <label>Clinic / Medical Store Name *</label>
                        <input
                            type="text"
                            {...register("name", { required: "Clinic name is required" })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="w-[30%]">
                        <label>Login Email *</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format"
                                }
                            })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="w-[30%]">
                        <label>Login Password *</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters"
                                }
                            })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
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
                            {...register("place", { required: "Place is required" })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.place && <p className="text-red-500 text-sm">{errors.place.message}</p>}
                    </div>

                    <div className="w-[30%]">
                        <label>City *</label>
                        <input
                            {...register("city", { required: "City is required" })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                    </div>

                    <div className="w-[30%]">
                        <label>District *</label>
                        <input
                            {...register("dist", { required: "District is required" })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.dist && <p className="text-red-500 text-sm">{errors.dist.message}</p>}
                    </div>
                </div>

                <br />

                <div className="flex gap-5">
                    <div className="w-[30%]">
                        <label>State *</label>
                        <input
                            {...register("state", { required: "State is required" })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                    </div>

                    <div className="w-[30%]">
                        <label>Pin Code *</label>
                        <input
                            {...register("pincode", {
                                required: "Pincode is required",
                                pattern: {
                                    value: /^[0-9]{6}$/,
                                    message: "Invalid pincode"
                                }
                            })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
                    </div>

                    <div className="w-[30%]">
                        <label>Primary Mobile No *</label>
                        <input
                            {...register("primarymobno", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Invalid mobile number"
                                }
                            })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.primarymobno && <p className="text-red-500 text-sm">{errors.primarymobno.message}</p>}
                    </div>
                </div>

                <br />

                <div className="flex gap-5">
                    <div className="w-[30%]">
                        <label>Alternate Mobile No</label>
                        <input
                            {...register("alternatemobno")}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                    </div>

                    <div className="w-[30%]">
                        <label>Role *</label>
                        <select
                            {...register("role", { required: "Role is required" })}
                            className="border border-gray-300 p-1 rounded w-full"
                        >
                            <option value="">Select Role</option>
                            <option value="clinicadmin">Clinic Admin</option>
                            <option value="admin">Super Admin</option>
                        </select>
                        {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                    </div>

                    <div className="w-[30%]">
                        <label>Upload Banner Image *</label>
                        <input
                            type="file"
                            {...register("profileimg", { required: "Banner image is required" })}
                            className="border border-gray-300 p-1 rounded w-full"
                        />
                        {errors.profileimg && <p className="text-red-500 text-sm">{errors.profileimg.message}</p>}
                    </div>
                </div>

                <div className="flex justify-center my-5">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#02C98D] to-[#0575E6] p-2 w-32 rounded text-sm text-white font-semibold shadow-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddClinic
