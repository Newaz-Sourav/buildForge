import React from 'react'
import { Link } from 'react-router-dom'

const Quote = () => {
  return (
    <div>
      <div class="bg-gray-100 py-20">
        <div class="container mx-auto px-4 text-center italic">
            <h2 class="text-4xl md:text-5xl  text-gray-800 leading-tight mb-8">Now it's Your Turn to Build Your Desirable Space</h2>
            <Link to={"/booking"}><button class="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-xl inline-flex items-center shadow-md">
                Get A Quote
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </button></Link>
        </div>
    </div>
    </div>
  )
}

export default Quote
