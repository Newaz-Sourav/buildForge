import { div, path } from "motion/react-client";
import Home from "./Components/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Portfolio from "./Components/Portfolio/Portfolio";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

  const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
  },

  {
    path: "/portfolio",
    element:
    
    <div>
      <Navbar></Navbar>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>,
  },

]);


function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
