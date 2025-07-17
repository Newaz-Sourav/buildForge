import React, { useRef, useState } from 'react'
import { AnimatePresence,motion} from "motion/react"
import { Link } from 'react-router-dom';



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
      
          <Link to={"/"}><img className="h-12 w-14" src="assets/logo2.png" alt="Your Company" /></Link>

        </div>
        

        
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            
             <Link to={"/"}><ul class="rounded-md  px-3 py-2 text-sm font-medium text-slate" aria-current="page">Home</ul></Link>

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
                        

                    className="bg-gray-800 absolute top-15 left-29  p-4 border rounded-md border-2 border-indigo-600 z-50">

                <Link to={"/residential"}><li className='text-white hover:bg-sky-600 px-4 py-2  cursor-pointer rounded-md'>Residential Interior</li></Link>
                <br />
                <li className='text-white hover:bg-sky-600 px-4 py-2  cursor-pointer rounded-md'> Commercial Interior</li>
                <br />
                <li className='text-white hover:bg-sky-600 px-4 py-2 cursor-pointer rounded-md'>Architectural Consultancy</li>
                
                </motion.div>
                ):null}

                </AnimatePresence>

                

                
                </ul>

            <Link to={"/portfolio"}><ul class="rounded-md  px-3 py-2 text-sm font-medium text-slate" aria-current="page">Portfolio</ul></Link>    
            <Link to={"/howwework"}><ul href="#" class="rounded-md  px-3 py-2 text-sm font-medium text-slate" aria-current="page">How we work</ul></Link>
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
            style={{ overflow: "hidden" }}
        
        className="sm:hidden z-50 absolute w-full bg-white" id="mobile-menu">
    
    <div class="space-y-1 px-2 pt-2 pb-3">
      
      <Link to={"/"} class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"><ul  aria-current="page">Home</ul></Link>
      
      <Link to={"/portfolio"} class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"><ul  aria-current="page">Portfolio</ul></Link>

      <div  className="flex flex-col block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
        
        <div className='flex flex-row' onClick={()=>setsmService(!smService)}>
          Services 
        <p>{smService?(<i className="fa-solid fa-angle-up pl-[3px] pt-[6px]"></i>):(<i className="fa-solid fa-angle-down pl-[3px] pt-[6px]"></i>)}</p>
        </div>

       <AnimatePresence>
  {smService && (
    <motion.div
      key="smServiceMenu"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
      className="block rounded-md bg-gray-900 text-base font-medium text-white"
    >
      {/* content wrapper with fade delay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="px-3 py-2"
      >
        <Link to="/residential">
          <div className="text-red-200 pl-4">
            <i className="fa-solid fa-caret-right"></i> Residential Interior
          </div>
        </Link>
        <div className="text-red-200 pl-4">
          <i className="fa-solid fa-caret-right"></i> Commercial Interior
        </div>
        <div className="text-red-200 pl-4">
          <i className="fa-solid fa-caret-right"></i> Architectural Consultancy
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



      </div>




        

      <Link to={"/howwework"} class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"> <ul  aria-current="page">How we work</ul> </Link>
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
