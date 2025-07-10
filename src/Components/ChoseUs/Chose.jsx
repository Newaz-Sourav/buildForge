import React from 'react'
import { Link } from 'react-router-dom'

const Chose = () => {
  return (
    <div>
      
      <div class="bg-slate-800 py-12 px-4 text-center text-white">
  <h2 class="text-3xl font-bold mb-10">Why Choose us</h2>

  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
   
    <div class="bg-[#F9F9F6] p-6 rounded shadow text-center text-gray-800">
      <div class="text-4xl mb-4">🔁</div>
      <p class="font-medium">Flexible Budget &<br />Personalized Taste</p>
    </div>

    
    <div class="bg-[#F9F9F6] p-6 rounded shadow text-center text-gray-800">
      <div class="text-4xl mb-4">👤⚙️</div>
      <p class="font-medium">2-Year Free Service<br />Warranty</p>
    </div>

 
    <div class="bg-[#F9F9F6] p-6 rounded shadow text-center text-gray-800">
      <div class="text-4xl mb-4">😊</div>
      <p class="font-medium">50-Day Move-In<br />Guarantee</p>
    </div>


    <div class="bg-[#F9F9F6] p-6 rounded shadow text-center text-gray-800">
      <div class="text-4xl mb-4">✔️</div>
      <p class="font-medium">Design & Build Quality<br />Checks</p>
    </div>
  </div>


  <Link to={"/booking"}><button class="bg-yellow-300 text-gray-800 font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 transition duration-200">
    Book A Consultation →
  </button></Link>
</div>

    </div>
  )
}

export default Chose
