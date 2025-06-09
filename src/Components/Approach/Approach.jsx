import React from 'react'

const Approach = () => {
  return (
    <div>
      <div class="bg-white py-16">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p class="text-lg text-gray-600 mb-8">Our working process in very minimal; see it for yourself.</p>
            <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>

    <div class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Interesting Facts About us</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div class="text-neutral-700 mb-4 text-4xl">
                        <i class="fa-solid fa-face-smile"></i>
                    </div>
                    <p class="text-gray-700 text-lg">We Helped 1,000+ Homes to Create New Memories</p>
                </div>

                <div class="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div class="text-neutral-700 mb-4 text-4xl">
                        <i class="fa-solid fa-person-military-pointing"></i>
                    </div>
                    <p class="text-gray-700 text-lg">Consulted 100+ Corporate Companies</p>
                </div>

                <div class="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div class="text-neutral-700 mb-4 text-4xl">
                        <i class="fa-solid fa-people-group"></i>
                    </div>
                    <p class="text-gray-700 text-lg">100% In-house Team</p>
                </div>

                <div class="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div class="text-neutral-700 mb-4 text-4xl">
                        <i class="fa-solid fa-handshake"></i>
                    </div>
                    <p class="text-gray-700 text-lg">Partnered up with 50+ Premium Brands</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Approach
