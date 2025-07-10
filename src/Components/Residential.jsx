import React from 'react'
import Residential_work from './Residential_work'
import Portfolio from './Portfolio/Portfolio'
import Quote from './Quote/Quote'

const Residential = () => {
  return (
    <div>
      
      <div className="w-full bg-[url('/assets/res.jpg')] bg-cover bg-center flex items-center justify-center px-4 md:px-8 py-16 md:py-24 ">
  <div className="backdrop-blur-sm bg-slate-500/60 rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 md:gap-16">
    
    {/* Left Content */}
    <div className="w-full lg:flex-1 space-y-6 text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-[#1B1F2B] drop-shadow-sm">
        Feel the Luxury with <br />
        <span className="text-[#1B1F2B]">Uncompromised</span><br />
        <span className="text-[#1B1F2B]">Quality</span>
      </h1>
      <p className="text-lg sm:text-xl text-[#333] font-medium">Residential Interior</p>
      <div className="flex justify-center lg:justify-start">
        <button
        
        onClick={() => {
    document.getElementById("our-approach")?.scrollIntoView({ behavior: "smooth" });
  }}

        className="bg-[#e8be6a] hover:bg-[#d7ad4f] text-black px-6 py-3 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
          Explore
          <span className="text-xl">➜</span>
        </button>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="w-full lg:flex-1 flex items-center justify-center">
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-[40px] md:rounded-[60px] bg-[#dcb672] relative shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/residential.jpg')] bg-cover bg-center rounded-[40px] md:rounded-[60px]"></div>
      </div>
    </div>
  </div>
</div>

{/* ------------------------------------------------------------- */}

<div class="w-full  py-20 px-6 md:px-20">
  <div class="max-w-4xl mx-auto text-center space-y-8">
    

    <div class="space-y-6">
      <h2 class="text-4xl md:text-5xl font-semibold leading-snug text-gray-800">
        Experience the Journey from<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Ideation to Execution
        </span>
      </h2>
      <p class="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
        Take a sneak peek behind the scenes and witness our meticulous work process. From generating innovative ideas to delivering top-notch interiors, we’ve been passionately committed to turning our client’s vision into reality.
      </p>
      
    </div>


    <div class="mt-10 w-full relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-4xl mx-auto">
      <div class="absolute bg-black/20 group-hover:bg-black/0 transition duration-500"></div>
      <iframe
        class="w-full h-64 md:h-96 rounded-2xl z-0"
        src="https://www.youtube.com/embed/4jnzf1yj48M"
        title="YouTube Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

  </div>
</div>

<div id="our-approach" className='flex flex-col justify-center items-center w-full '>
    <h2 className='text-[30px] text-semibold sm:text-[40px] text-gray-900'>Our Approach</h2>
    <span className='text-[10px] sm:text-[15px] text-gray-900'>It’s  easier than  your thinking.</span>
</div>

<Residential_work></Residential_work>

<section className="bg-[#f7f5ef] py-20 px-4 md:px-10">
  <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Interior Solution Packages</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    
    {/* CARD COMPONENT */}
    {[
      {
        title: "Basic",
        subtitle: "Elevate your\nliving standard",
        price: "1,250",
        bg: "#dde0ce",
        features: ["Layout Solution", "3D Design", "Execution"],
        color: "text-[#4e388d]",
        iconBg: "#f1eedf",
        icon: "basic",
      },
      {
        title: "Premium",
        subtitle: "Take your home\nto the next level",
        price: "1,725",
        bg: "#999d76",
        features: ["Layout Solution", "3D Design", "Execution", "Sourcing"],
        color: "text-white",
        iconBg: "#f1eedf",
        icon: "premium",
      },
      {
        title: "Compact Luxury",
        subtitle: "Organize every corner\nof your home",
        price: "2,000",
        bg: "#ec6d54",
        features: ["Layout Solution", "3D Design", "Execution", "Sourcing", "Renovation"],
        color: "text-white",
        iconBg: "#ffe6e0",
        icon: "compact",
      },
      {
        title: "Luxury",
        subtitle: "Treat yourself\nthe way you want",
        price: "2,400",
        bg: "#5f2c4b",
        features: ["We are one call\naway to listen\nyour story"],
        color: "text-white text-center",
        iconBg: "#efe6ef",
        icon: "luxury",
      }
    ].map((pkg, index) => (
      <div key={index} className="bg-white rounded-xl shadow-md flex flex-col items-center overflow-hidden">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mt-6 mb-4`} style={{ backgroundColor: pkg.iconBg }}>
          {/* Placeholder SVG icon */}
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {/* Title + Subtitle */}
        <h3 className="text-xl font-semibold">{pkg.title}</h3>
        <p className="text-sm text-gray-600 text-center whitespace-pre-line px-4 mt-1">{pkg.subtitle}</p>

        {/* Price */}
        <div className="w-full bg-[#e5e5e0] py-3 mt-4 text-center font-semibold text-[#333] rounded-t-[30px]">
          {pkg.price} TK <span className="text-sm font-normal">per sft</span>
        </div>

        {/* Features */}
        <div className={`w-full px-6 py-6 flex-1 ${pkg.color}`} style={{ backgroundColor: pkg.bg }}>
          <ul className="space-y-2 text-sm">
            {pkg.features.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                {pkg.title !== "Luxury" && (
                  <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.485 1.929a1.5 1.5 0 0 1 0 2.122L6.56 11.12a1.5 1.5 0 0 1-2.121 0l-2.829-2.828a1.5 1.5 0 1 1 2.121-2.121l1.768 1.768 6.924-6.929a1.5 1.5 0 0 1 2.122 0z" />
                  </svg>
                )}
                <span className={pkg.title === "Luxury" ? "whitespace-pre-line w-full" : ""}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>



<div   className='flex flex-col justify-center items-center w-full mt-8'>
    <h2 className='text-[30px] text-semibold sm:text-[40px] text-gray-900'>Some Of Our Projects</h2>
    <span className='text-[10px] sm:text-[15px] text-gray-900'>Witness the exceptional transformations we have accomplished in our past projects.</span>
</div>

<Portfolio></Portfolio>

<Quote></Quote>





    </div>
  )
}

export default Residential
