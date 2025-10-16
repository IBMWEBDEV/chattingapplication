import React from "react";
import login from "../assets/login.png";
import google from "../assets/google.png";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-white h-screen">
      <div className="flex items-center justify-center w-[1200px]">
        <div className="w-[600px] flex justify-end">
          <div className="mr-[180px]">
            <h1 className="font-bold text-[34px] text-[#11175D] font-secondary">
              Login to your account!
            </h1>
            <div className="flex rounded-[8px] gap-[10px] items-center mt-[29px] border-[#03014C]/20 border-2 w-[280px] py-[22px] px-[35px] cursor-pointer">
              <img src={google} alt="Google Login" />
              <p className="text-[13px] font-semibold font-primary text-[#03014C]">
                Login with Google
              </p>
            </div>
            <div className="relative mt-[40px] border-b-[3px] border-[#B8B8CE]">
              <input
                className="py-[15px] pr-[66px] w-[368px] outline-0 font-secondary text-[20px] font-semibold text-[#11175D]"
                type="text"
                placeholder="example@email.com"
              />
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[-12px] bg-white px-2 tracking-[2px]">
                Email Address
              </p>
            </div>
            <div className="relative mt-[40px] border-b-[3px] border-[#B8B8CE]">
              <input
                className="py-[15px] pr-[66px] w-[368px] outline-0 font-secondary text-[20px] font-semibold text-[#11175D]"
                type="password"
                placeholder="Password"
              />
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[-20px] bg-white px-2 tracking-[2px]">
                Password
              </p>
            </div>
            <div className="mt-[40px]">
              <button className="text-[20px] w-[368px] bg-[#1E1E1E] rounded-full text-white py-[20px] font-semibold font-secondary cursor-pointer">
                Login to Continue
              </button>
              <p className="mt-[30px] text-[#03014C] text-[16px] font-primary font-normal">
                Don’t have an account?
                <Link to="/registration">
                <span className="text-[#EA6C00] cursor-pointer">Sign up</span></Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[600px]">
          <img
            className="h-screen w-full object-cover"
            src={login}
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
