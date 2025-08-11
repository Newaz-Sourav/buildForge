import React from 'react'
import Chose from '../ChoseUs/Chose';
import { Wrench, ShoppingCart, Handshake } from "lucide-react";
import HowWeWork from '../HowWeWork/HowWeWork';

const Commercial = () => {

     const offerings = [
    {
      icon: <Wrench className="w-10 h-10 text-rose-400 mx-auto mb-4" />,
      title: "Design And Build",
      description:
        "Get complete services as well as a transformational design strategy. Our professional team handles everything, so you don’t have to.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-rose-400 mx-auto mb-4" />,
      title: "Source And Procure",
      description:
        "We use a deliberate approach to locate the best products from the best sources nationwide, guaranteeing a custom fit for your interior requirements.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-rose-400 mx-auto mb-4" />,
      title: "General Contracting",
      description:
        "Have you already put a design in place? Leave it to our professionals to successfully replicate and construct it while complying with the design specifications.",
    },
  ];

    const clients = [
  { name: "Akij Plastics", logo: "https://www.minimallimited.com/wp-content/uploads/Akij-Plastic.webp" },
  { name: "Apparel 360", logo: "https://www.minimallimited.com/wp-content/uploads/Apperal360.webp" },
  { name: "Arani Advertising", logo: "https://www.minimallimited.com/wp-content/uploads/Arani.webp" },
  { name: "Louve", logo: "https://www.minimallimited.com/wp-content/uploads/Louve.webp" },
  { name: "Pecel", logo: "https://www.minimallimited.com/wp-content/uploads/Pecel.webp" },
  { name: "ACI", logo: "https://www.minimallimited.com/wp-content/uploads/aci.webp" },
  { name: "TGVS", logo: "https://www.minimallimited.com/wp-content/uploads/tgvs.webp" },
  { name: "Aman Group", logo: "https://www.minimallimited.com/wp-content/uploads/aman-group.webp" },
  { name: "Startup Dhaka", logo: "https://www.minimallimited.com/wp-content/uploads/startup-dhgaka.webp" },
  { name: "Cotton Group", logo: "https://www.minimallimited.com/wp-content/uploads/cotton-group.webp" },
  { name: "Aman Group Duplicate", logo: "https://www.minimallimited.com/wp-content/uploads/aman-group.webp" },
];
  return (
    <div>
      <div className="w-full bg-[url('/assets/res.jpg')] bg-cover bg-center flex items-center justify-center px-4 md:px-8 py-16 md:py-24 ">
  <div className="backdrop-blur-sm bg-slate-500/60 rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 md:gap-16">
    
    {/* Left Content */}
    <div className="w-full lg:flex-1 space-y-6 text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-[#1B1F2B] drop-shadow-sm">
       Hassle-Free Move <br />
        <span className="text-[#1B1F2B]">Into Your New</span><br />
        <span className="text-[#1B1F2B]">Workplace</span>
      </h1>
      <p className="text-lg sm:text-xl text-[#333] font-medium">Commercial Interior</p>
      <div className="flex justify-center lg:justify-start">
        <button
        
        onClick={() => {
    document.getElementById("our-offer")?.scrollIntoView({ behavior: "smooth" });
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

{/* ------------------------------------------------------------------- */}


<section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          Our Valuable Clients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center h-28"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* ------------------------------------------------------------------- */}

    <div class="w-full  py-20 px-6 md:px-20">
  <div class="max-w-4xl mx-auto text-center space-y-8">
    

    <div class="space-y-6">
      <h2 class="text-4xl md:text-5xl font-semibold leading-snug text-gray-800">
        Explore Our Journey from<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Ideation to Execution
        </span>
      </h2>
      <p class="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
        Let’s take a look at what goes on behind the scenes. Discover how we transform excellent designs into the most durable and aesthetically pleasing commercial interiors that you have ever seen.
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

{/* ------------------------------------------------------------------- */}

<section id='our-offer' className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Offerings</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          From a small workplace to a multinational corporation, we are always up for a challenge.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {offerings.map((item, index) => (
            <div key={index} className="text-center px-4">
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

<Chose></Chose>

 <section className="py-12 text-center bg-white">
      <h2 className="text-3xl font-bold mb-8">Serving Every Industry</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        <div className="bg-gray-50 p-8 rounded shadow hover:shadow-lg transition flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-rose-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <h3 className="text-lg font-medium">Workspaces</h3>
        </div>

        <div className="bg-gray-50 p-8 rounded shadow hover:shadow-lg transition flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-rose-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h18v18H3V3z" />
          </svg>
          <h3 className="text-lg font-medium">Industrial Sites</h3>
        </div>

        <div className="bg-gray-50 p-8 rounded shadow hover:shadow-lg transition flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-rose-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l8 4v6a8 8 0 11-16 0V7l8-4z" />
          </svg>
          <h3 className="text-lg font-medium">Institutions</h3>
        </div>

        <div className="bg-gray-50 p-8 rounded shadow hover:shadow-lg transition flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-rose-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M5 21V7m14 14V7M9 21V7m6 14V7" />
          </svg>
          <h3 className="text-lg font-medium">Hospitality</h3>
        </div>

        <div className="bg-gray-50 p-8 rounded shadow hover:shadow-lg transition flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-rose-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v16H4z" />
          </svg>
          <h3 className="text-lg font-medium">Retail</h3>
        </div>

        <div className="bg-gray-50 p-8 rounded shadow hover:shadow-lg transition flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-rose-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 15a4 4 0 118 0 4 4 0 01-8 0zM14 15h6" />
          </svg>
          <h3 className="text-lg font-medium">Recreational</h3>
        </div>

      </div>
    </section>

    <HowWeWork></HowWeWork>


    </div>
  )
}

export default Commercial
