import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
function App() {
  const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration/>,
  },
   {
    path: "/login",
    element: <Login/>,
  },
]);


  return (
    <>
    <RouterProvider router={router} />,
    </>
  )
}

export default App
