import Quote from '../Quote/Quote'
import React from 'react'

const About = () => {
  return (
    <div>
      
      <div class="bg-[#f8f8f8] py-20 px-4 md:px-0">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-4xl font-medium text-gray-800 mb-6">The Inception</h2>
    <p class="text-gray-600 text-lg leading-relaxed mb-6">
      It’s 2016, and six young minds with different educational backgrounds come together to
      build something meaningful, something that inspires them, cherishes their dreams, and
      creates solvency through creative expression.
    </p>
    <p class="text-gray-600 text-lg leading-relaxed">
      Now, 9 years after the inception of Minimal Limited, we carry a greater vision: to become
      the foremost lifestyle brand, introducing a better way of living for everyone’s dream.
      Minimal is uniquely identified by sensible design thinking and a deep connection to
      heritage and culture. With fewer but more meaningful items, our goal is to make your
      space feel connected and alive—while maintaining balance and harmony.
    </p>
  </div>
</div>
{/* ------------------------------------------------------------------ */}


<div class="bg-white py-20 px-4">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-center text-3xl font-medium text-gray-800 mb-16">The Timeline</h2>

    <div class="relative">
 
      <div class="absolute left-20 top-0 bottom-0 w-px bg-[#c3a89f]"></div>

      
      <div class="flex items-start mb-12">
        <div class="w-20 text-sm font-semibold text-gray-700">2016</div>
        <div class="relative pl-10 flex-1">
          <span class="absolute left-0 top-1 w-3 h-3 bg-[#c3a89f] rounded-full"></span>
          <p class="text-gray-600 leading-relaxed">
            Foundation Day of Minimalism.<br></br>
            We started providing custom-made furniture along with space design solutions.
          </p>
        </div>
      </div>

      
      <div class="flex items-start mb-12">
        <div class="w-20 text-sm font-semibold text-gray-700">2017</div>
        <div class="relative pl-10 flex-1">
          <span class="absolute left-0 top-1 w-3 h-3 bg-[#c3a89f] rounded-full"></span>
          <p class="text-gray-600 leading-relaxed">
            Run production in 2000 square feet own factory<br></br>
            Provide prefabricated interior solutions
          </p>
        </div>
      </div>

      
      <div class="flex items-start mb-12">
        <div class="w-20 text-sm font-semibold text-gray-700">2018</div>
        <div class="relative pl-10 flex-1">
          <span class="absolute left-0 top-1 w-3 h-3 bg-[#c3a89f] rounded-full"></span>
          <p class="text-gray-600 leading-relaxed">
            Minimal was relaunched, incorporating mechanical hardware and technology.<br></br>
            We achieved the status of a National finalist (Top 8) in the Ring Startup Competition.
          </p>
        </div>
      </div>

      
      <div class="flex items-start">
        <div class="w-20 text-sm font-semibold text-gray-700">2025</div>
        <div class="relative pl-10 flex-1">
          <span class="absolute left-0 top-1 w-3 h-3 bg-[#c3a89f] rounded-full"></span>
          <p class="text-gray-600 leading-relaxed">
            Launched Interior Essence and a new Apartment Selection service to cater to evolving lifestyle needs.<br></br>
            Set up a new production facility spanning 17,000 square feet to scale our operations.<br></br>
            Expanded with a stronger, more versatile team across departments.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* -------------------------------------------------------------------------- */}

<div class="bg-[#f8f8f8] py-16 px-4">
  <div class="max-w-6xl mx-auto text-center">
 
    <h2 class="text-2xl md:text-3xl font-medium text-gray-800 mb-12">
      The Market is buzzing <br class="hidden md:block" /> about us
    </h2>


    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
    
      <div class="bg-white p-8 shadow-sm">
        <div class="flex justify-center mb-4">
     
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#704c4c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M12 4a8 8 0 100 16 8 8 0 000-16z" />
          </svg>
        </div>
        <p class="text-gray-800">Having 4 Lakh+ Followers</p>
      </div>

   
      <div class="bg-white p-8 shadow-sm">
        <div class="flex justify-center mb-4">
          
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#704c4c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17.25l6.16 3.73-1.64-7.03L21.5 9.27l-7.19-.62L12 2 9.69 8.65 2.5 9.27l5.98 4.68-1.64 7.03L12 17.25z" />
          </svg>
        </div>
        <p class="text-gray-800">Achieving 4.8 reviews out of 5</p>
      </div>

    
      <div class="bg-white p-8 shadow-sm">
        <div class="flex justify-center mb-4">
         
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#704c4c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p class="text-gray-800">1K+ Successful projects delivered</p>
      </div>

    </div>
  </div>
</div>

<Quote></Quote>



    </div>
  )
}

export default About
