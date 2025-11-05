import React from 'react'
import user from "../../assets/user.png"
import { BsThreeDotsVertical } from "react-icons/bs";

const FriendRequest = () => {
    return (
        <div className='shadow-lg rounded-lg px-5 py-3 font-primary mt-10'>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-xl'>Friend  Request</h3>
                <BsThreeDotsVertical className='text-xl' />
            </div>



            <div className='px-2 h-[400px] overflow-y-scroll'>
                <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]'>
                    <div className='flex items-center '>
                        <img src={user} alt="" />
                        <div className='ml-[14px]'>
                            <h3 className='font-semibold text-[18px]'>Friends Reunion</h3>
                            <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
                        </div>
                    </div>
                    <p className='font-semibold text-[20px] bg-primary text-white px-4 py-1 rounded'>Join</p>
                </div>


                <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]'>
                    <div className='flex items-center '>
                        <img src={user} alt="" />
                        <div className='ml-[14px]'>
                            <h3 className='font-semibold text-[18px]'>Friends Reunion</h3>
                            <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
                        </div>
                    </div>
                    <p className='font-semibold text-[20px] bg-primary text-white px-4 py-1 rounded'>Join</p>
                </div>

                <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]'>
                    <div className='flex items-center '>
                        <img src={user} alt="" />
                        <div className='ml-[14px]'>
                            <h3 className='font-semibold text-[18px]'>Friends Reunion</h3>
                            <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
                        </div>
                    </div>
                    <p className='font-semibold text-[20px] bg-primary text-white px-4 py-1 rounded'>Join</p>
                </div>


                <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]'>
                    <div className='flex items-center '>
                        <img src={user} alt="" />
                        <div className='ml-[14px]'>
                            <h3 className='font-semibold text-[18px]'>Friends Reunion</h3>
                            <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
                        </div>
                    </div>
                    <p className='font-semibold text-[20px] bg-primary text-white px-4 py-1 rounded'>Join</p>
                </div>

                <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]'>
                    <div className='flex items-center '>
                        <img src={user} alt="" />
                        <div className='ml-[14px]'>
                            <h3 className='font-semibold text-[18px]'>Friends Reunion</h3>
                            <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
                        </div>
                    </div>
                    <p className='font-semibold text-[20px] bg-primary text-white px-4 py-1 rounded'>Join</p>
                </div>


                <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]'>


                    <div className='flex items-center '>
                        <img src={user} alt="" />
                        <div className='ml-[14px]'>
                            <h3 className='font-semibold text-[18px]'>Friends Reunion</h3>
                            <p className='font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
                        </div>
                    </div>
                    <p className='font-semibold text-[20px] bg-primary text-white px-4 py-1 rounded'>Join</p>
                </div>
            </div>

        </div>
    )
}

export default FriendRequest