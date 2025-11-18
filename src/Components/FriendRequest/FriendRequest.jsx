import React, { useEffect, useState } from "react";
import user from "../../assets/user.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, onValue, push, ref } from "firebase/database";
import { useSelector } from "react-redux";
const FriendRequest = () => {
    const data = useSelector((selector) => selector?.userInfo.value?.user)
    console.log(data);
    
  const db = getDatabase();
  const userRef = ref(db, "friendRequest/");
  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    onValue(userRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        console.log(item.val());
        if (data?.uid == item.val().receiverId) {
            arr.push(item.val());
        }
        
      });
      setFriendList(arr);
    });
  }, []);
  console.log(friendList);


  const handleAccept = (item) => {
    console.log(item);
    
     push(ref(db, 'AcceptRequest/'), {
        senderName:item.senderName,
        senderid:item.senderId,
        receiverName:item.receiverName,
        receiverId:item.receiverId,
  });
  }






  return (
    <div className="shadow-lg rounded-lg px-5 py-3 font-primary mt-10">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">Friend Request</h3>
        <BsThreeDotsVertical className="text-xl" />
      </div>

      <div className="px-2 h-[400px] overflow-y-scroll">


        {
            friendList.map((user)=>(
                <div>
          <div className="flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]">
            <div className="flex items-center ">
              <img src={user} alt="" />
              <div className="ml-[14px]">
                <h3 className="font-semibold text-[18px]">{user.senderName}</h3>
                <p className="font-medium text-[14px] text-[#4D4D4D]">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <div>
                <p 
                onClick={()=> handleAccept(user)}
                className="font-semibold text-[20px] cursor-pointer bg-primary text-white px-4 py-1 rounded">
              accept
            </p>
            </div>
          </div>
        </div>
            ))
        }

        

      </div>
    </div>
  );
};

export default FriendRequest;
