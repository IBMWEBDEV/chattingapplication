import React, { useState } from "react";
import login from "../assets/login.png";
import google from "../assets/google.png";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Flip, ToastContainer, toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch } from "react-redux";
import { unserInfo } from "./slicess/userSlices";

const Login = () => {


  const navigate = useNavigate()
  const dispatcs = useDispatch()
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  const [show, setShow] = useState(false)

  const [loder, setLoder] = useState(false)


  const [email, setEmail] = useState()
  const [errorEmail, setErrorEmail] = useState()

  const [password, setPassword] = useState()
  const [errorPassword, setErrorPassword] = useState()


  const handleEmail = (event) => {
    setEmail(event.target.value);
    setErrorEmail("")
  }

  const handlepassword = (event) => {
    setPassword(event.target.value)
    setErrorPassword("")
  }

  const logIn = () => {
    console.log(email);


    if (!email) {
      console.log("Give your email");
      setErrorEmail("Right email requerd")
    } else {
      if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)) {
        setErrorEmail("Please give your right Email")
      }
    }


    if (!password) {
      setErrorPassword("Right password requerd")

    } else {
      if (!/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(password)) {
        setErrorPassword("Give your right passward")
      }
    }


    if (email && password && /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)) {
      setLoder(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user);

          toast.success("Login successfully done")
          dispatcs(unserInfo(user.user))
          localStorage.setItem("userInfo", JSON.stringify(user))
          setTimeout(() => {

            navigate("/home")
          }, 3000);
          setLoder(false)
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Please give your right password and email")
          }
        });
    }

  }

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        toast.success("Login successfull")
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

      });


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
        transition={Flip}
      />
      <div className="flex items-center justify-center w-[1200px]">
        <div className="w-[600px] flex justify-end">
          <div className="mr-[180px]">
            <h1 className="font-bold text-[34px] text-[#11175D] font-secondary">
              Login to your account!
            </h1>


            <div className="flex rounded-[8px] gap-[10px] items-center mt-[29px] border-[#03014C]/20 border-2 w-[280px] py-[22px] px-[35px] cursor-pointer">
              <img onClick={signIn} src={google} alt="Google Login" />
              <p className="text-[13px] font-semibold font-primary text-[#03014C]">
                Login with Google
              </p>
            </div>


            <div className="relative mt-[40px] border-b-[3px] border-[#B8B8CE]">
              <input
                onChange={handleEmail}
                value={email}
                className="py-[15px] pr-[66px] w-[368px] outline-0 font-secondary text-[20px] font-semibold text-[#11175D]"
                type="text"
                placeholder="example@email.com"
              />
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[-12px] bg-white px-2 tracking-[2px]">
                Email Address
              </p>

            </div>
            <p>{errorEmail}</p>


            <div className="relative mt-[40px] border-b-[3px] border-[#B8B8CE]">
              <input
                onChange={handlepassword}
                value={password}
                className="py-[15px] pr-[66px] w-[368px] outline-0 font-secondary text-[20px] font-semibold text-[#11175D]"
                type={show ? "text" : "password"}
                placeholder="Password"
              />
              <p className="text-[#585D8E] text-[13px] font-secondary font-semibold absolute top-[-8px] left-[-20px] bg-white px-2 tracking-[2px]">
                Password
              </p>
              <div className="absolute top-[40%] right-[90px]">
                {
                  show ? <FaEye onClick={() => setShow(!show)} /> : <FaEyeSlash onClick={() => setShow(!show)} />
                }
              </div>
            </div>
            <div><p>{errorPassword}</p></div>



            <div className="mt-[40px]">
              <button
                onClick={logIn}
                className="text-[20px] w-[368px] bg-[#1E1E1E] rounded-full text-white py-[20px] font-semibold font-secondary cursor-pointer">

                <div className="text-center">
                  {
                    loder ?
                      <div className="ml-[40%]">
                        <RotatingLines
                          visible={true}
                          height="30"
                          width="30"
                          color="white"
                          strokeWidth="5"
                          animationDuration="0.75"
                          ariaLabel="rotating-lines-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      </div> : <p> Login to Continue</p>
                  }
                </div>
              </button>
              <p className="text-red-500 ml-[100px] mt-5">
                <Link to={"/forgote"}> Forgot passward</Link>
              </p>
              <p className="mt-[30px] text-[#03014C] text-[16px] font-primary font-normal">
                Don’t have an account?
                <Link to="/">
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
