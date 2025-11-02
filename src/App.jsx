import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import firebaseConfig from "./Components/firebase/firebaseConfig";
// import Forgote from "./Components/Forgote";
import Home from "./Components/Home";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration/>,
  },
   {
    path: "/login",
    element: <Login/>,
  },
   {
    path: "/home",
    element: <Home/>,
  },
  //  {
  //   path: "/forgote",
  //   element: <Forgote/>,
  // },
   
  
]);


  return (
    <>
    <RouterProvider router={router} />,
    </>
  )
}
 
export default App







