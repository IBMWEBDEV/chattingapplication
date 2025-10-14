import React from "react";
import img from "../assets/registration.png";

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-white h-screen">
      <div className="flex items-center justify-center w-[1200px]">
        <div className="w-[600px] flex justify-end">
          <div className="mr-[70px]">
            <h1 className="font-bold text-[34px] text-[#11175D] font-secondary">
              Get started with easily register
            </h1>
            <p className="text-[#808080] font-secondary text-[20px] font-normal">
              Free register and you can enjoy it
            </p>
            <div className="relative mt-[40px]">
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[55px] bg-white px-2 tracking-[2px]">
                Email Address
              </p>
              <input
                className="py-[15px] pl-[65px] pr-[66px] w-[368px] outline-0 font-secondary text-[20px] font-semibold border-[#B8B8CE] border-[3px] rounded-[8px] text-[#11175D]"
                type="email"
                placeholder="example@email.com"
              />
            </div>
            <div className="relative mt-[40px]">
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[45px] bg-white px-2 tracking-[2px]">
                Full Name
              </p>
              <input
                className="py-[15px] pl-[65px] pr-[66px] w-[368px] outline-0 font-secondary text-[20px] font-semibold border-[#B8B8CE] border-[3px] rounded-[8px] text-[#11175D]"
                type="text"
                placeholder="Your Full Name"
              />
            </div>
            <div className="relative mt-[40px]">
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[45px] bg-white px-2 tracking-[2px]">
                Password
              </p>
              <input
                className="py-[15px] pl-[65px] pr-[66px] w-[368px] outline-0 font-secondary text-[20px] font-semibold border-[#B8B8CE] border-[3px] rounded-[8px] text-[#11175D]"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mt-[40px]">
              <button className="text-[20px] outline-0 w-[368px] bg-[#1E1E1E] rounded-full text-white py-[20px] font-semibold font-secondary cursor-pointer">
                Sign up
              </button>
              <p className="mt-[30px] text-[#03014C] text-[16px] font-primary font-normal">
                Already have an account?{" "}
                <span className="text-[#EA6C00] cursor-pointer">Sign In</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[600px]">
          <img
            className="h-screen w-full object-cover"
            src={img}
            alt="Register"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;



