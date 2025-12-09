import user from "../../assets/user.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, ref, onValue, push } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const UserList = () => {
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  const data = useSelector((state) => state.userInfo.value.user);

  console.log(data?.uid, "UID");

  useEffect(() => {
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      let arr = [];

      snapshot.forEach((item) => {
        if (data?.uid !== item.key) {
          arr.push({ ...item.val(), userid: item.key });
        }
      });
      setUserList(arr);
    });
  }, []);
  console.log(userList);

  const handleFriendRequest = (item) => {
    console.log("ok", item);

    push(ref(db, "friendRequest/"), {
      senderName: data.displayName,
      senderId: data.uid,
      receiverName: item.username,
      receiverId: item.userid
    });
  };

  const [filterUserList, setFilterUserList] = useState([])

  const handleSearch = (e) => {
    let arr = []


    if (e.target.value.length == 0) {
      setFilterUserList([])
    } else {
      userList.filter((item) => {
       if(item.username.toLowerCase().includes(e.target.value.toLowerCase())){
        arr.push(item)
        setFilterUserList(arr)
       }
        console.log(item.username.toLowerCase());
      })
    }
  }
  console.log(filterUserList);
  
  return (
    <div className="shadow-lg rounded-lg px-5 py-3 font-primary ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">User List</h3>
        <BsThreeDotsVertical className="text-xl" />
      </div>


      <div>
        <input onChange={handleSearch} type="text" className="border py-2 px-2" />
      </div>

      <div className="px-2 h-[400px] overflow-y-scroll">
        {
          filterUserList.length > 0 ?

           filterUserList.map((user) => (
          <div className="flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]">
            <div className="flex items-center ">
              <img src={user} alt="" />
              <div className="ml-[14px]">
                <h3 className="font-semibold text-[18px]">{user.username}</h3>
                <p className="font-medium text-[14px] text-[#4D4D4D]">
                  {user.email}
                </p>
              </div>
            </div>
            <p
              onClick={() => handleFriendRequest(user)}
              className="font-semibold text-[20px] bg-primary text-white px-4 py-1 rounded"
            >
              +
            </p>
          </div>
        ))
        :
        userList.map((user) => (
          <div className="flex justify-between items-center mt-[17px] border-b-2 border-[#4D4D4D] pb-[13px]">
            <div className="flex items-center ">
              <img src={user} alt="" />
              <div className="ml-[14px]">
                <h3 className="font-semibold text-[18px]">{user.username}</h3>
                <p className="font-medium text-[14px] text-[#4D4D4D]">
                  {user.email}
                </p>
              </div>
            </div>
            <p
              onClick={() => handleFriendRequest(user)}
              className="font-semibold text-[20px] bg-primary text-white px-4 py-1 rounded"
            >
              +
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
