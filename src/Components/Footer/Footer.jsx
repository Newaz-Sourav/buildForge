import React from 'react'

const Footer = () => {

    
  
  return (
    <div>
      
      <div class="bg-gray-800 text-gray-300 py-16 px-4">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

            <div class="col-span-1 md:col-span-2 lg:col-span-1">
                <div class="text-white text-3xl font-semibold mb-4 flex items-center">
                    <img className="h-16 w-14 text-white" src="assets/white_logo.png" alt="" />
                    BuildForge
                </div>
                <p class="text-gray-400 text-sm mb-6">
                    BuildForge is synonymous with sensible design thinking and authenticity in heritage and culture. Our mission is to create a space that is both connected and fresh, achieving balance and harmony through meaningful simplicity.
                </p>
                <div class="flex space-x-3">
                    <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                       <i class="fa-brands fa-facebook-f"></i> </a>
                    <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                        <i class="fa-brands fa-instagram"></i> </a>
                    <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                       <i class="fa-brands fa-linkedin"></i> </a>
                    <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                        <i class="fa-brands fa-youtube"></i> </a>
                </div>
            </div>

            <div>
                <h4 class="text-white text-lg font-semibold mb-4">Our Services</h4>
                <ul class="space-y-3 text-gray-400 text-sm">
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Residential Interior</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Commercial Interior</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Architectural Consultancy</a></li>
                </ul>

                <h4 class="text-white text-lg font-semibold mt-8 mb-4">Resources</h4>
                <ul class="space-y-3 text-gray-400 text-sm">
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Home</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">How we work</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Portfolio</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">About</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Contact</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Refund Policy</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Terms and Conditions</a></li>
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Licenses</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-white text-lg font-semibold mb-4">Contact</h4>
                <ul class="space-y-4 text-gray-400 text-sm">
                    <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-14z" />
                        </svg>
                        Phone: +88017********
                    </li>
                    <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email: sales@buildforgelimited.com
                    </li>
                    <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Ka-6/A, Bashundhara R/A Road, Jagannathpur, Vatara, Dhaka-1229
                    </li>
                </ul>
            </div>
        </div>

        <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
            Copyright © 2025 BuilidForge Limited
        </div>

        <button class="fixed bottom-4 right-4 bg-gray-700 hover:bg-gray-600 text-gray-300 p-3 rounded-full shadow-lg transition-colors duration-200" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    </div>
    </div>
  )
}

export default Footer
