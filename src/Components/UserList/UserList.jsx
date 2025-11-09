import user from "../../assets/user.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const UserList = () => {
    const db = getDatabase();
    const [userList, setUserList] = useState([])


    useEffect(() => {
        const userRef = ref(db, "users")
        onValue(userRef, (snapshot) => {
            let arr = []

            snapshot.forEach((item) => {
                arr.push(item.val())
            })
            setUserList(arr);
        })
    }, [])
    console.log(userList);

    return (
        <div className='shadow-lg rounded-lg px-5 py-3 font-primary '>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-xl'>User List</h3>
                <BsThreeDotsVertical className='text-xl' />
            </div>



            <div className='px-2 h-[400px] overflow-y-scroll'>
                {
                    userList.map((user)=>(
                        <div className='flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]'>
                    <div className='flex items-center '>
                        <img src={user} alt="" />
                        <div className='ml-[14px]'>
                            <h3 className='font-semibold text-[18px]'>{user.username}</h3>
                            <p className='font-medium text-[14px] text-[#4D4D4D]'>{user.email}</p>
                        </div>
                    </div>
                    <p className='font-semibold text-[20px] bg-primary text-white px-4 py-1 rounded'>+</p>
                </div>

                    ))
                }
                

{/* 
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
                </div> */}
            </div>

        </div>
    )
}

export default UserList