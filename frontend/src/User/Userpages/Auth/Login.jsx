import React from "react";
import Mainbg from "../../../assets/img/Mainbg.jpg"
import signupimg from "../../../assets/img/signupimg.png"
import { LuCircleUserRound } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { UserLoginAPI } from "../../../Features/UserFeature/AuthFeature/AuthSlice";
import { ToastContainer, toast } from 'react-toastify';
function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    dispatch(UserLoginAPI(data)).then((data) => {
      toast.success(data.payload.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      })
 
    })
  }

  return (
    <div className="relative p-3 min-h-screen flex items-center justify-center
     bg-gradient-to-br from-[#8EF6FB] to-[#9B32EF] overflow-hidden">
<ToastContainer position="top-center" />
      {/* Background Effects */}
      <div className="absolute top-[-60px] right-[-60px] size-100
       bg-cyan-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-80px] left-[-80px] w-96 h-96
       bg-[#64C9EA] rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Signup Card */}
      <div className="mx-auto container flex justify-around flex-wrap-reverse">
        <div className="bg-white shadow-2xl  w-86 rounded-4xl z-30 ">
          <h3 className="text-center body-font font-semibold mt-8 mb-2">SIGN IN </h3>
          <hr className="text-gray-200" />
          <form action="" className="p-5 " onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label htmlFor="" className="text-sm text-[#1a6e9e] font-semibold body-font">email </label><br />
              <div className="auth-inputbox flex items-center gap-2">
                <TfiEmail size={22} color="#1a6e9e" />
                <input type="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    }
                  })}
                  className="border-l border-gray-300 p-1 w-full text-sm" />

              </div>
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="" className="text-sm text-[#1a6e9e] font-semibold body-font">password </label><br />
              <div className="auth-inputbox flex items-center gap-2">
                <RiLockPasswordLine size={22} color="#1a6e9e" />
                <input type="password"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value: 6,
                      message: "password should be 6 characters"
                    }
                  })}
                  className="border-l border-gray-300 p-1 w-full text-sm" />

              </div>
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message}</p>
              )}
            </div>
            <span className="text-sm font-semibold mx-2">
              don't have an account ? <Link to="/register" className="text-blue-600 underline">register now</Link></span>
            <button className="w-full bg-gradient-to-br mt-5 from-[#8EF6FB] to-[#9B32EF] p-1.5
             rounded-3xl text-sm text-white font-semibold ">Login Now</button>

          </form>

        </div>
        <div className="p-2 text-center">
          <h2 className="body-font text-3xl  font-semibold">Welcome to The SwasthaBook </h2>
          <span className="text-gray-800 font-semibold"> Register yourself Before Procced</span><br />
          <img src={signupimg} className="lg:w-130 w-86" alt="" />
        </div>

      </div>
    </div >
  );
}

export default Login;
