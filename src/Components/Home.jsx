import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import GroupList from './GroupList/GroupList';
import Friends from './Friends/Friends';
import UserList from './UserList/UserList';
import FriendRequest from './FriendRequest/FriendRequest';
import MyGroups from './MyGroups/MyGroups';
import BlockedUsers from './BlockedUsers/BlockedUsers';

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const data = useSelector(state => (state.userInfo.value))
  console.log(data);

  const [veryfi, setVeryfi] = useState(false)
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    if (!data) {
      navigate("/login")
    }
  })



  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVeryfi(true)
    }
    setLoading(false)
  });



  if (loading) {
    return null
  }





  return (
    <div>
      {
        veryfi ?
          <div>
            <div className='flex m-[35px]'>
              <Sidebar active="home " />
              <div className='w-[427px] ml-[43px]'>
                <GroupList />
                <FriendRequest/>
              </div>

              <div className='w-[427px] ml-[43px]'>
                <Friends />
                <MyGroups/>
              </div>

              <div className='w-[427px] ml-[43px]'>
                <UserList />
                <BlockedUsers/>
              </div>


          
                
    

            </div>
          </div>

          :
          <div className='bg-primary h-screen flex justify-center
              items-center text-white font-primary text-center'>
            <div>
              <p className='text-4xl font-bold py-10'>Please veryfy your email</p>
              <Link
                to="/login" className=" bg-white text-black rounded-lg py-2 px-4 font-secondary font-semibold relative cursor-pointer">
                <span className='relative z-[50]'>Go back to login</span>
              </Link>
            </div>
          </div>
      }
    </div>
  )
}

export default Home