import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import HeadingBox from "../../../Component/AdminComponent/HeadingBox";
import { FaClinicMedical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GETCategoryAPI } from "../../../Features/AdminFeature/SpecializationSlice";
import ScheduleField from "../../../Component/AdminComponent/ScheduleField";
import { ADDdoctorAPI } from "../../../Features/AdminFeature/DoctorSlice";
import { ToastContainer, toast } from 'react-toastify';
import { GETClinicAPI, GETClinicByuserIDAPI } from "../../../Features/AdminFeature/ClinicSlice";
function AddDoctors() {
  const { clinics } = useSelector((state) => state.clinics);
  const { user } = useSelector((state) => state.auth);

  const { specialization } = useSelector((state) => state.specialization)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(GETCategoryAPI())
    dispatch(GETClinicByuserIDAPI())
  }, [dispatch])

 
  //  console.log(clinics._id)
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {

      availability: [
        {
          day: "",
          timeSlots: [{ time: "" }]
        }
      ]
    }
  });

 useEffect(() => {
    if (clinics?._id) {
      setValue("clinicId", clinics._id);
    }
  }, [clinics, setValue]);


  const { fields, append } = useFieldArray({
    control,
    name: "availability"
  });

  const onSubmit = (data) => {
    const formData = new FormData()

    formData.append("clinicId", data.clinicId);

    formData.append("doctorName", data.doctorName);
    formData.append("DoctorSpecialization", data.DoctorSpecialization);
    formData.append("gender", data.gender);
    formData.append("doctorQualification", data.doctorQualification);
    formData.append("doctorDesc", data.doctorDesc);
    formData.append("isActive", data.isActive);

    // ✅ OPTIONAL IMAGE
    if (data.doctorimg && data.doctorimg.length > 0) {
      formData.append("doctorimg", data.doctorimg[0]);
    }
    formData.append("availability", JSON.stringify(data.availability));
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    //api call 
    dispatch(ADDdoctorAPI(formData)).then((data) => {
      toast.success(data.payload.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      })
      reset({

        availability: [
          {
            day: "",
            timeSlots: [{ time: "" }]
          }
        ]
      });
    })
  };

  return (
    <div>
      <HeadingBox
        iconimg={<FaClinicMedical color="white" size={18} />}
        heading="Registered Your Doctors"
      />
      <ToastContainer position="top-center" />
      <div className="container mx-auto bg-white rounded mt-5 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* BASIC INFO */}
          <div className="flex gap-4">
            <div className="w-96">
              <label className="text-sm font-semibold">Clinic ID <span className="text-sm  text-red-500">*</span></label>
              <input
              {...register("clinicId", { required: true })}
                className="border border-gray-300 bg-gray-100 p-1 rounded w-full"
              />
              {errors.clinicId && <p className="text-red-500 text-sm">{errors.clinicId.message}</p>}
            </div>

            <div className="w-96">
              <label className="text-sm font-semibold">Doctor Name <span className="text-sm  text-red-500">*</span></label>
              <input
                {...register("doctorName", { required: "name is required" })}
                className="border border-gray-200 p-1 rounded w-full"
              />
              {errors.doctorName && <span className="text-red-500 text-sm">{errors.doctorName.message}</span>}
            </div>

            <div className="w-76">
              <label className="text-sm font-semibold">Specialization <span className="text-sm  text-red-500">*</span></label>
              <select {...register("DoctorSpecialization", { required: "Specialization is required" })}
                className="border border-gray-200 p-1 rounded w-full">
                <option value="">Select</option>
                {
                  specialization?.map((item, index) => (
                    <option key={index} value={item.slug}>{item.name}</option>
                  ))
                }

              </select>
              {errors.DoctorSpecialization && <span className="text-red-500 text-sm">{errors.DoctorSpecialization.message}</span>}
            </div>
          </div>

          <br />

          {/* MORE INFO */}
          <div className="flex gap-4">
            <div className="w-96">
              <label className="text-sm font-semibold">Qualification <span className="text-sm  text-red-500">*</span></label>
              <input
                {...register("doctorQualification", { required: "Qualification is required" })}
                className="border border-gray-200 p-1 rounded w-full"
              />
              {errors.doctorQualification && <span className="text-red-500 text-sm">{errors.doctorQualification.message}</span>}

            </div>

            <div className="w-96">
              <label className="text-sm font-semibold">Gender <span className="text-sm  text-red-500">*</span></label>
              <select {...register("gender", { required: "Gender is required" })}
                className="border border-gray-200 p-1 rounded w-full">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}

            </div>
            <div className="w-75">
              <label className="text-sm font-semibold">Profile Image ( optional )
                <span className="text-sm  text-red-500"></span></label>
              <input type="file" className="border border-gray-200 p-1 rounded w-full" {...register("doctorimg")} />


            </div>
          </div>

          <br />

          <textarea
            {...register("doctorDesc")}
            placeholder="Doctor Description"
            className="border border-gray-200  p-1 rounded w-full"
          />

          <br />
          {/* this is schedule and timeslote section  */}
          <ScheduleField
            fields={fields}
            register={register}
            append={append}
            errors={errors}
          />
          <div className="flex gap-2 mt-2">
            <input type="checkbox"  {...register("isActive")} />
            <span className="text-gray-600 font-semibold">IsActive (Doctor)
              <span className="text-sm  text-red-500">*</span></span>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#02C98D] to-[#0575E6]
               px-6 py-2 rounded text-white font-semibold cursor-pointer"
            >
              Register Doctor
            </button>
          </div>


        </form>
      </div>
    </div>
  );
}

export default AddDoctors;
