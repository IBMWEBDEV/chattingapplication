import React from 'react'
import profile from '../../assets/profile.png'
import { SlHome } from "react-icons/sl";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { useNavigate } from 'react-router';
import { getAuth, signOut } from "firebase/auth";
const Sidebar = () => {
const auth = getAuth();
const navigate = useNavigate()


    const logout = () =>{
        console.log("done");
        
        signOut(auth).then(() => {
            navigate("/login")
            localStorage.clear()
}).catch((error) => {
  // An error happened.
});
    }


    return (
        <div className='bg-primary font-primary w-[186px] h-[] h-screen  rounded-lg'>
            <div className='flex justify-center '>
                <img className='mt-[38px] ' src={profile} alt="" />
            </div>
            <div className='flex justify-center mt-[38px]  bg-white py-[22px] w-[162px] h-[90px] ml-6 rounded-tl-[20px] rounded-bl-[20px] relative after:content-[""] after:absolute after:w-[8px] after:h-[90px] after:bg-black after:rounded-tl-[25px] after:rounded-bl-[25px] after:top-0 after:right-0 
            after:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] '>
                <SlHome className='text-5xl text-primary mr-8 ' />
            </div>
            <div className=' flex justify-center mt-[57px]'>
                <AiFillMessage className='text-[#C3C3C3] text-5xl' />
            </div>
            <div className='flex justify-center mt-[69px]'>
                <IoSettingsOutline className='text-5xl text-[#FFFFFFB2]' />
            </div>
            <div className='flex justify-center mt-[334px]'>
                <ImExit onClick={logout} className='text-5xl text-[#FFFFFF] cursor-pointer' />
            </div>
            
        </div>
    )
}

export default Sidebar