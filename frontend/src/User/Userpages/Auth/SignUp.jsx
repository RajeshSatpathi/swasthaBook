import React from "react";
import { useForm } from "react-hook-form";
import signupimg from "../../../assets/img/signupimg.png";
import { LuCircleUserRound } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { UserRegistrationAPI } from "../../../Features/UserFeature/AuthFeature/AuthSlice.jsx"
import { ToastContainer, toast } from 'react-toastify';
function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit Handler
  const onSubmit = (data) => {
    // Create FormData for API (file upload)
    const credentials = new FormData();
    credentials.append("name", data.name);
    credentials.append("email", data.email);
    credentials.append("password", data.password);
    credentials.append("profileimg", data.profileimg[0]);

    dispatch(UserRegistrationAPI(credentials)).then((data) => {
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
        navigate("/login")

      }, 3000);
    })

  };

  return (
    <div className="relative p-3 min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#8EF6FB] to-[#9B32EF] overflow-hidden">
      <ToastContainer position="top-center" />
      <div className="mx-auto container flex justify-around flex-wrap-reverse">
        <div className="bg-white shadow-2xl h-132 w-86 rounded-4xl z-30">
          <h3 className="text-center font-semibold mt-8 mb-2">SIGN UP</h3>
          <hr />

          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

            {/* Full Name */}
            <label className="text-sm text-[#1a6e9e] font-semibold">Full Name</label>
            <div className="auth-inputbox flex items-center gap-2">
              <LuCircleUserRound size={22} color="#1a6e9e" />
              <input
                type="text"
                className="border-l p-1 w-full text-sm"
                {...register("name", { required: "Full name is required" })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}

            {/* Email */}
            <label className="text-sm text-[#1a6e9e] font-semibold">Email</label>
            <div className="auth-inputbox flex items-center gap-2">
              <TfiEmail size={22} color="#1a6e9e" />
              <input
                type="email"
                className="border-l p-1 w-full text-sm"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}

            {/* Password */}
            <label className="text-sm text-[#1a6e9e] font-semibold">Password</label>
            <div className="auth-inputbox flex items-center gap-2">
              <RiLockPasswordLine size={22} color="#1a6e9e" />
              <input
                type="password"
                className="border-l p-1 w-full text-sm"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}

            {/* Profile Image */}
            <label className="text-sm text-[#1a6e9e] font-semibold">Profile Image</label>
            <div className="auth-inputbox flex items-center gap-2">
              <LuCircleUserRound size={22} color="#1a6e9e" />
              <input
                type="file"
                className="border-l p-1 w-full text-sm"
                {...register("profileimg", { required: "Image is required" })}
              />
            </div>
            {errors.profileimg && (
              <p className="text-red-500 text-xs">{errors.profileimg.message}</p>
            )}

            <span className="text-sm font-semibold mx-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 underline">
                Login now
              </Link>
            </span>

            <button
              type="submit"
              className="w-full mt-5 bg-gradient-to-br from-[#8EF6FB] to-[#9B32EF]
              p-1.5 rounded-3xl text-sm text-white font-semibold"
            >
              Register Now
            </button>
          </form>
        </div>

        <div className="p-2 text-center">
          <h2 className="text-3xl font-semibold">Welcome to The SwasthaBook</h2>
          <span className="text-gray-800 font-semibold">
            Register yourself before proceed
          </span>
          <img src={signupimg} className="lg:w-130 w-86 animate-pulse" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
