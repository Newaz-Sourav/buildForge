import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className="relative sm:static bg-amber-50 w-full h-[20rem] sm:bg-[url('/assets/home.png')] w-full sm:h-[25rem]  md:h-[30rem] lg:h-[34rem] xl:h-[36rem] 2xl:h-[40rem] bg-cover bg-center">

      <div className=" w-full flex flex-col items-center justify-center absolute bottom-[3rem] sm:bottom-[32rem] md:bottom-[26rem] lg:bottom-[23rem] xl:bottom-[19rem]
      2xl:bottom-[16rem]">

        
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-800  sm:text-rose-50 font-medium italic p-2">Life is a Celebration</h1>
        <h4 className="text-lg text-slate-800 sm:text-rose-50 font-medium italic p-2">The start is just a click away</h4>

        <Link to={"/booking"}><button className="bg-amber-200 p-2 rounded-lg">Book a Meeting <i class="fa-solid fa-arrow-right"></i></button></Link>

      </div>

      

      </div>
    </div>
  )
}

export default Hero
