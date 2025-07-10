import React from 'react'

const steps = [
  {
    title: "Meet and Greet",
    image: "/assets/meet.png",
    points: [
      {
        heading: "It all begins with a form",
        description:
          "Tell us the story you want to build, and we will take care of the rest. The more we learn about you, the better.",
      },
      {
        heading: "Get Free Consultation",
        description:
          "Our expert will call to understand your needs, share design styles, package details, and relevant case studies. Based on that, we’ll provide layout suggestions and a budget estimate for your dream apartment.",
      },
    ],
  },
  {
    title: "Design Development",
    image: "/assets/get.png",
    points: [
      {
        heading: "Pay the booking amount to seal the deal",
        badge: "MILESTONE",
        description:
          "After paying 5% of the total estimated budget as a token amount, we will initiate the 3D design process for you.",
      },
    ],
  },
  {
    title: "Place Order",
    image: "/assets/cont.png",
    points: [
      {
        heading: "Finalize Your Selections",
        description:
          "Once the design is locked, choose your materials and finalize your preferences.",
      },
      {
        heading: "Approve the Quotation",
        description:
          "We’ll share a detailed quotation. Once approved, we proceed to execution.",
      },
    ],
  },
  {
    title: "Installation Process",
    image: "/assets/install.png",
    points: [
      {
        heading: "Hassle-free Execution",
        description:
          "Our project team ensures timely delivery and seamless installation, with regular updates.",
      },
    ],
  },
  {
    title: "Moving In",
    image: "/assets/move.png",
    points: [
      {
        heading: "Welcome to Your New Space!",
        description:
          "Do a final walkthrough, receive your keys, and move in with confidence and joy.",
      },
    ],
  },
];

const Residential_work = () => {
  return (
    <div className=''>
      
      <section className="py-16 px-4 max-w-7xl mx-auto ">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-start relative"
              >
                {/* Timeline Indicator */}
                <div className="absolute left-4 top-0 bottom-0 hidden md:block w-0.5 bg-yellow-400 z-0 ml-[1.15rem]"></div>
      
                {/* Image */}
                <div className="z-10">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-lg w-full max-w-md mx-auto"
                  />
                </div>
      
                {/* Text */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-4 h-4 rounded-full bg-yellow-400 border-4 border-white shadow-md z-10"></div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {step.points.map((point, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-gray-800">
                          {point.heading}
                          {point.badge && (
                            <span className="ml-2 inline-block text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                              {point.badge}
                            </span>
                          )}
                        </h4>
                        <p className="text-gray-600">{point.description}</p>
                        {i !== step.points.length - 1 && (
                          <hr className="my-4 border-gray-300 w-full" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
    </div>
  )
}

export default Residential_work
