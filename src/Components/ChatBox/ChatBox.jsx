import React from 'react'
import user from "../../assets/user.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbTriangleFilled } from "react-icons/tb";
const ChatBox = () => {
    return (
        <div className=' shadow font-primary px-[50px] py-[24px] rounded-2xl'>
            <div className='flex justify-between items-center border-b pb-[30px]'>
                <div className='flex items-center gap-x-[33px]'>
                    <div>
                        <img src={user} alt="" />
                    </div>
                    <div>
                        <h2 className='font-semibold text-2xl'>Swathi</h2>
                        <p>Online</p>
                    </div>
                </div>
                <div>
                    <BsThreeDotsVertical />
                </div>
            </div>




            <div className='py-[56px]'>
                <div className='my-2'>
                    <div className='relative'>
                        <p className='bg-[#F1F1F1] px-[52px] py-[13px] font-medium inline-block rounded-lg'>Hey There !</p>
                        <div className='absolute top-[36px] left-[-8px] '>
                            <TbTriangleFilled className='text-[#F1F1F1]' />
                        </div>
                        <div className='text-[12px] font-medium text-gray-400'>Today, 2:01pm</div>
                    </div>


                </div>



                <div className='my-2'>
                    <div className='relative'>
                        <p className='bg-[#F1F1F1] px-[52px] py-[13px] font-medium inline-block rounded-lg'>How are you doing?</p>
                        <div className='absolute top-[36px] left-[-8px] '>
                            <TbTriangleFilled className='text-[#F1F1F1]' />
                        </div>
                        <div className='text-[12px] font-medium text-gray-400'>Today, 2:02pm</div>
                    </div>
                </div>




                <div className='my-2 text-end'>
                    <div className='relative'>
                        <p className='bg-[#F1F1F1] px-[52px] py-[13px] font-medium bg-primary text-white inline-block rounded-lg'>Hello !</p>
                        <div className='absolute top-[32.5px] right-[-8px] '>
                            <TbTriangleFilled className='text-primary text-xl' />
                        </div>
                        <div className='text-[12px] font-medium text-gray-400'>Today, 2:12pm</div>
                    </div>
                </div>





                <div className='my-2 text-end'>
                    <div className='relative'>
                        <p className='bg-[#F1F1F1] px-[52px] py-[13px] font-medium bg-primary text-white inline-block rounded-lg'>I am good  and hoew about you?</p>
                        <div className='absolute top-[32.5px] right-[-8px] '>
                            <TbTriangleFilled className='text-primary text-xl' />
                        </div>
                        <div className='text-[12px] font-medium text-gray-400'>Today, 2:12pm</div>
                    </div>
                </div>





                <div className='my-2'>
                    <div className='relative'>
                        <p className='bg-[#F1F1F1] px-[52px] py-[13px] font-medium inline-block rounded-lg'>I am doing well. Can we meet up tomorrow?</p>
                        <div className='absolute top-[36px] left-[-8px] '>
                            <TbTriangleFilled className='text-[#F1F1F1]' />
                        </div>
                        <div className='text-[12px] font-medium text-gray-400'>Today, 2:13pm</div>
                    </div>
                </div>








                <div className='my-2 text-end border-b'>
                    <div className='relative'>
                        <p className='bg-[#F1F1F1] px-[52px] py-[13px] font-medium bg-primary text-white inline-block rounded-lg'>Sure!</p>
                        <div className='absolute top-[32.5px] right-[-8px] '>
                            <TbTriangleFilled className='text-primary text-xl' />
                        </div>
                        <div className='text-[12px] font-medium text-gray-400'>Today, 2:14pm</div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default ChatBox