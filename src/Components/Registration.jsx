import React, { useState } from "react";
import img from "../assets/registration.png";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const navigate=useNavigate()
  const auth = getAuth();

  const [show,setShow]=useState(false)

  const [errorEmail,setErrorEmail]=useState("") 
  const [email,setEmail]=useState("")

  const[name,setName]=useState("")
  const[errorName,setErrorName]=useState("")

  const[password,setPassword]=useState("")
  const[errorPassword,setErrorPassword]=useState("")

  const handleEmail = (event) => {
  setEmail(event.target.value)
  console.log(email);
  setErrorEmail("")
}

const handleName = (event) => {
   console.log(name);
  setName(event.target.value)
  setErrorName("")
}


const handlePassword = (event) =>{
  console.log(password);
  setPassword(event.target.value)
  setErrorPassword("")
}
  
const signIn = () =>{
  if (!email) {
   setErrorEmail("please give your email");
  }

  if (!name) {
    setErrorName("please give your name")
  }

  if (!password) {
    setErrorPassword("Right password requerd")
    
  }else{
    if (! /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ .test(password)) {
      setErrorPassword("please give your right password")
    }
  }
if (email && name && password && /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ .test(password)) {
  toast.success("sign in successful")
  createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    console.log(user);
     toast.success("sign in successful")
    setTimeout(() => {
      navigate("/login")
    }, 5000);
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }).finally(()=>{
    setEmail("")
    setName("")
    setPassword("")
  })
}

  
}

  return (
    <div className="flex items-center justify-center bg-white h-screen">
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
// transition={Bounce}
/>
      <div className="flex items-center justify-center w-[1200px]">
        <div className="w-50%flex justify-end">
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
                onChange={handleEmail}
                value={email}
                placeholder="example@email.com"
              />
            </div>
            <div><p>{errorEmail}</p></div>




            <div className="relative mt-[40px]">
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[45px] bg-white px-2 tracking-[2px]">
                Full Name
              </p>
              <input
                className="py-[15px] pl-[65px] pr-[66px] w-[368px] outline-0 font-secondary text-[20px] font-semibold border-[#B8B8CE] border-[3px] rounded-[8px] text-[#11175D]"
                type="text"
                 onChange={handleName}
                  value={name}
                placeholder="Your Full Name"
              />
            </div>
            <div><p>{errorName}</p></div>




            <div className="relative mt-[40px]">
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[45px] bg-white px-2 tracking-[2px]">
                Password
              </p>
              <input
                className="py-[15px] pl-[65px] pr-[66px] w-[368px] outline-0 font-secondary text-[20px] font-semibold border-[#B8B8CE] border-[3px] rounded-[8px] text-[#11175D]"
                type={show ? "text" : "password"} 
                onChange={handlePassword}
                  value={password}
                placeholder="Password"
              />
              <div className="absolute top-[40%] right-[90px]">
                {
                  show ? <FaEye onClick={()=> setShow(!show)} /> : <FaEyeSlash onClick={()=> setShow(!show)} />
                }
              </div>
            </div>
             <div><p>{errorPassword}</p></div>




            <div className="mt-[40px]">
              <button 
              onClick={signIn}
              className="text-[20px] outline-0 w-[368px] bg-[#1E1E1E] rounded-full text-white py-[20px] font-semibold font-secondary cursor-pointer">
                Sign up
              </button>
              
              <p className="mt-[30px] text-[#03014C] text-[16px] font-primary font-normal">
                Already have an account?{" "}
                <Link to="/login">
                <span className="text-[#EA6C00] cursor-pointer">Sign In</span>
                </Link>
              </p>
            </div>



          </div>
        </div>
        <div className="w-50%">
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



