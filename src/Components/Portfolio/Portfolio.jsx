import React, { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allProjects = {
  Residential: [
    { id: 1, name: '5375 sft Duplex | Rangpur', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&h=600',loaction:'Rangpur',scope:'Design & Build', date:'2023', imgaray:['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&h=600','assets/duplex1.jpg','assets/duplex2.jpg'] },

    { id: 2, name: '3676 sft Duplex | Bashundhara', image: 'assets/duplex3.jpg',loaction:'Bashundhara',scope:'Design & Build', date:'2023', imgaray:['assets/duplex3.jpg','assets/duplex4.jpg','assets/duplex5.jpg'], },

    { id: 3, name: '3040 sft Flat | Chattogram', image: 'assets/flat1.jpg', loaction:'Chattogram',scope:'Design & Build', date:'2023',imgaray:['assets/flat1.jpg','assets/flat2.jpg','assets/flat3.jpg']  },
    { id: 4, name: '2360 sft Flat | Uttara', image: 'assets/flat4.jpg',loaction:'RangUttarapur',scope:'Design & Build', date:'2023', imgaray:['assets/flat4.jpg','assets/flat5.jpg','assets/flat6.jpg']  },

    { id: 5, name: '1154 sft Flat | Aftabnagar', image: 'assets/flat7.jpg',loaction:'Aftabnagar',scope:'Design & Build', date:'2023', imgaray:['assets/flat7.jpg','assets/flat8.jpg','assets/flat9.jpg']  },

    { id: 6, name: '1461 sft Flat | Mirpur', image: 'assets/flat8.jpg',loaction:'Mirpur',scope:'Design & Build', date:'2023', imgaray:['assets/flat78.jpg','assets/flat9.jpg','assets/flat10.jpg']  },

    { id: 7, name: '1689 sft Flat | Mirpur', image: 'assets/flat11.jpg',loaction:'Mirpur',scope:'Design & Build', date:'2023', imgaray:['assets/flat711.jpg','assets/flat12.jpg','assets/flat13.jpg']  },

    { id: 8, name: '1550 sft Flat | Khilgaon', image: 'assets/flat14.jpg',loaction:'Khilgaon',scope:'Design & Build', date:'2023', imgaray:['assets/flat14.jpg','assets/flat15.jpg','assets/flat16.jpg']  },
  ],
  Commercial: [
    { id: 9, name: 'Sea Resource Group | Chattogram', image: 'assets/cm.png', imgaray:['assets/cm.png','assets/cm2.png','assets/cm3.png'],loaction:'Chattogram',scope:'Design & Build',date:'2023' },

    { id: 10, name: 'Project Engineering Consulting Engineers Ltd.', image: 'assets/cmn.png',imgaray:['assets/cmn.png','assets/cm2.png','assets/cmn4.png'],loaction:'Chattogram',scope:'Design & Build',date:'2023'  },
  ],
  Architectural: [
    { id: 11, name: 'S M Accessories | Sylhet', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&h=400',imgaray:['assets/ar.png','assets/ar2.png','assets/ar3.png'],loaction:'Sylhet',scope:'Design & Build',date:'2023' },

    { id: 12, name: '3D Design | Cox\'s Bazar', image: 'assets/art.png',imgaray:['assets/art.png','assets/art2.png','assets/art3.png'],loaction:'Cox\'s Bazar',scope:'Design & Build',date:'2023' },
  ],
  UnderConstruction: [
    { id: 13, name: 'Duplex Under Construction | Uttara', image: 'assets/ut.png',imgaray:['assets/ut.png','assets/ut2.png','assets/ut3.png'],loaction:'Uttara',scope:'Design & Build',date:'2023' },
    { id: 14, name: 'Flat Under Construction | Rampura', image: 'assets/utc.png',imgaray:['assets/utc.png','assets/utc2.png','assets/utc3.png'],loaction:'Rampura',scope:'Design & Build',date:'2023' },
  ],
};

const categories = ["Residential", "Commercial", "Architectural", "UnderConstruction"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Residential');
  const [open, setOpen] = useState(null);
  const [index,setindex]=useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);

    // কম্পোনেন্ট আনমাউন্ট হলে interval বন্ধ করার জন্য
    return () => clearInterval(interval);
  }, []);

  

  const projects = allProjects[selectedCategory];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {selectedCategory.replace('UnderConstruction','Under Construction')} Projects
          </h2>
          <div className="flex justify-center space-x-6 text-[15px] font-medium text-gray-600 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`pb-1 border-b-2 transition-colors duration-200 ${
                  selectedCategory === cat ? 'border-[#6B3F3F] text-[#6B3F3F]' : 'border-transparent hover:text-[#6B3F3F]'
                }`}
              >
                {cat.replace('UnderConstruction','Under Construction')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              onClick={() => setOpen(proj)}
              className="cursor-pointer group overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rounded-md overflow-hidden border border-gray-200">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-2 text-center text-[15px] text-[#6B3F3F] font-medium">
                {proj.name}
              </p>
            </motion.div>
          ))}
        </div>

       {open && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
    onClick={() => setOpen(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col sm:flex-row items-start gap-8 bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-7xl mx-auto"
    >
     
      <div className="w-full lg:w-1/3 space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {open.name}
        </h2>

        <div>
          <p className="font-semibold text-gray-700">Location</p>
          <p className="text-gray-600">{open.loaction}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">Scope</p>
          <p className="text-gray-600">{open.scope}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">Completion date</p>
          <p className="text-gray-600">{open.date}</p>
        </div>
      </div>

      
      <div className="w-full lg:w-2/3 relative">
  
  <button
  onClick={()=>{
    if(index>0)
    {
      setindex(index-1);
    }
  }}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full shadow"
  >
    
    <i class="fa-solid fa-chevron-left"></i>
  </button>

  <AnimatePresence mode="wait">
    <motion.img
      key={open.imgaray[index]}
      src={open.imgaray[index]}
      alt={open.name}
      className="sm:w-[30rem] sm:h-[17rem] lg:w-[40rem] lg:h-[30rem] xl:w-[50rem] xl:h-[33rem] 2xl:w-[50rem] 2xl:h-[33rem] rounded-lg"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
    />
  </AnimatePresence>

  {/* Image */}
  {/* <img
    src={open.imgaray[index]}
    alt={open.name}
    className="w-full h-full object-cover rounded-lg"
  /> */}

  {/* Right Arrow */}
  <button
  onClick={()=>{
    if(index<2)
    {
      setindex(index+1);
    }
  }}
  className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full shadow "
>
    
    <i class="fa-solid fa-chevron-right"></i>
  </button>
</div>

    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default Portfolio;