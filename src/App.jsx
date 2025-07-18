import { div, path } from "motion/react-client";
import Home from "./Components/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Portfolio from "./Components/Portfolio/Portfolio";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Booking from "./Components/Booking/Booking";
import HowWeWork from "./Components/HowWeWork/HowWeWork";
import Residential from "./Components/Residential";

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

  {
    path:"/booking",
    element:
    <div>
      <Navbar></Navbar>
      <Booking></Booking>
      <Footer></Footer>
    </div>
    
  },

   {
    path:"/howwework",
    element:
    <div>
      <Navbar></Navbar>
      <HowWeWork></HowWeWork>
      <Footer></Footer>
    </div>
    
  },

  {
    path: "/residential",
    element:
    
    <div>
      <Navbar></Navbar>
      <Residential></Residential>
      <Footer></Footer>
    </div>,
  }

]);


function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
