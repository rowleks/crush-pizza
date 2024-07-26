import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss"
import Home from "./pages/homepage/Home"
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "signup",
      element: <div>About</div>,
    },
  ]);

  return (
    <div className="viewpage">

      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
