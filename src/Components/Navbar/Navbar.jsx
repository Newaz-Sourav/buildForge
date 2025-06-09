import React, { useRef, useState } from 'react'
import { AnimatePresence,motion} from "motion/react"


const Navbar = () => {

    const [ishover,setishover]=useState(false);
    const [smService,setsmService]=useState(false);
    const[navOpen,setnavOpen]=useState(false);
    const timeref = useRef(null);

    const handleonMouse=()=>
    {
      clearTimeout(timeref.current);
      setishover(true);
    }

     const handleoffMouse=()=>
    {
      timeref.current= setTimeout(()=>{
        setishover(false);
      },2000)
    }
  return (
    <div>
      <nav class="bg-white sm:bg-white">
        
  <div class=" sm:grid place-content-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:h-18 md:h-22 lg:h-26">
    
    <div class="  relative flex h-16 items-center justify-between">

      <button className=' w-6 sm:hidden pl-2' onClick={()=>setnavOpen(!navOpen)}>

        {navOpen?(<i class="fa-solid fa-xmark"></i>):(<i class="fa-solid fa-list fa-lg"></i>)}

        </button>
      
      

      <div class="w-full sm:w-auto flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
       
        <div class=" flex justify-between flex shrink-0 items-center w-auto">
      
          <img class="h-12 w-13" src='assets/logo2.png' alt="Your Company"></img>
        </div>
        

        
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            
            <ul href="#" class="rounded-md  px-3 py-2 text-sm font-medium text-slate" aria-current="page">Home</ul>

            <ul 

            onMouseEnter={handleonMouse}
            onMouseLeave={handleoffMouse}
            
            class="rounded-md px-3 py-2 text-sm font-medium text-slate hover:bg-slate-500 hover:text-white">
                
                <button>Services <i class="fa-solid fa-caret-down"></i></button>

                <AnimatePresence initial={false}>

                {ishover?(

                    <motion.div 

                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        

                    className="bg-gray-800 absolute top-15 left-29  p-4 border rounded-md border-2 border-indigo-600">

                <li className='text-white hover:bg-sky-600 px-4 py-2  cursor-pointer rounded-md'>Residential Interior</li>
                <br />
                <li className='text-white hover:bg-sky-600 px-4 py-2  cursor-pointer rounded-md'> Commercial Interior</li>
                <br />
                <li className='text-white hover:bg-sky-600 px-4 py-2 cursor-pointer rounded-md'>Architectural Consultancy</li>
                
                </motion.div>
                ):null}

                </AnimatePresence>

                

                
                </ul>

                
            <ul href="#" class="rounded-md  px-3 py-2 text-sm font-medium text-slate" aria-current="page">Portfolio</ul>
            <ul href="#" class="rounded-md  px-3 py-2 text-sm font-medium text-slate" aria-current="page">How we work</ul>
            <ul href="#" class="rounded-md  px-3 py-2 text-sm font-medium text-slate" aria-current="page">About</ul>
            <ul href="#" class="rounded-md  px-3 py-2 text-sm font-medium text-slate" aria-current="page">Contact</ul>
          </div>
        </div>
      </div>


      

    </div>
  </div>

        
     <AnimatePresence>  
      {

      navOpen? (

        <motion.div 
        
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
        
        className="sm:hidden" id="mobile-menu">
    
    <div class="space-y-1 px-2 pt-2 pb-3">
      
      <ul class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</ul>
      
      <ul class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Portfolio</ul>


       <AnimatePresence>
  {smService ? (
    <motion.div
      key="service-dropdown"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
    >
      <p
        onClick={() => setsmService(false)}
        className="font-bold text-cyan-100 pl-2 cursor-pointer"
      >
        Services <i className="fa-solid fa-angle-up"></i>
      </p>

      <div className="text-red-200 pl-4"><i className="fa-solid fa-caret-right"></i> Residential Interior</div>
      <div className="text-red-200 pl-4"><i className="fa-solid fa-caret-right"></i> Commercial Interior</div>
      <div className="text-red-200 pl-4"><i className="fa-solid fa-caret-right"></i> Architectural Consultancy</div>
    </motion.div>
  ) : (
    <div
      onClick={() => setsmService(true)}
      className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white cursor-pointer"
    >
      Services <i className="fa-solid fa-angle-down"></i>
    </div>
  )}
</AnimatePresence>


        

      <ul class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">How we work</ul>
      <ul class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">About</ul>
      <ul class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Contact</ul>
    </div>
  </motion.div>
      ) : null
      
    }
    </AnimatePresence> 

  
</nav>

    </div>
  )
}

export default Navbar
