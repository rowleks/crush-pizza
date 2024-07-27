import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss"
import Home from "./pages/homepage/Home"
import Signup from "./pages/signup-page/Signup";
import Login from "./pages/login-page/Login";
import Cart from "./pages/cartpage/Cart";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "add-cart",
      element: <Cart />,
    },
  ]);

  return (
    <div className="viewpage">

      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
