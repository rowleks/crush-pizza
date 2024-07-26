import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss"
import Home from "./pages/homepage/Home"
import Signup from "./pages/signup-page/Signup";
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
  ]);

  return (
    <div className="viewpage">

      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
