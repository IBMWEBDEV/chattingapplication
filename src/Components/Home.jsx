import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
    const auth = getAuth();
    const data = useSelector(state => (state.userInfo.value))
    console.log(data);

    const [veryfi,setVeryfi] =  useState(false)

    onAuthStateChanged(auth, (user) => {
  if (user.emailVerified) {
   setVeryfi(true)
  } 
});
    
  return (
    <div>
        {
            veryfi ? <p>HOME</p> : <p>plase veryfi your email</p>
        }
    </div>
  )
}

export default Home