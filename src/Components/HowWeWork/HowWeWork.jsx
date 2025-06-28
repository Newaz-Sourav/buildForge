import { div } from "motion/react-client";
import React from "react";
import { Link } from "react-router-dom";

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

const HowWeWork = () => {

  


  return (
    <div>
     <div className="bg-[#f5f7f1] py-16 px-4 text-center">
      <h2 className="text-4xl font-semibold italic text-gray-800">
        A Hassle-Free<br />Design to Installation Journey
      </h2>
      <Link to={"/booking"}><button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-2 rounded-md text-gray-900 shadow inline-flex items-center gap-2">
        Get A Quote
        <span>→</span>
      </button></Link>

      <div className="bg-white mt-16 py-20 px-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-4 italic">
          Your Desired Interior<br />in 5 Simple Steps
        </h3>
        <p className="text-gray-600 mb-12">
          Thinking of building a new home or workplace?<br />
          Here's how you can get started.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto text-center">
          {[
            { icon: "👋", title: "Meet and Greet" },
            { icon: "🖊️", title: "Design Development" },
            { icon: "📋", title: "Place Order" },
            { icon: "🔧", title: "Installation Process" },
            { icon: "🛏️", title: "Moving In" },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="text-4xl">{step.icon}</div>
              <p className="text-sm font-medium text-gray-700">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

     <section className="py-16 px-4 max-w-7xl mx-auto">
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


    <div class="bg-white text-gray-800">

  <section class="py-16 text-center">
    <h2 class="text-4xl font-bold text-gray-900">The Team</h2>
    <p class="mt-4 text-lg text-gray-600">Get to know the people who will assist you throughout your journey.</p>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
      
      <div class="flex flex-col items-center text-center">
        <img src="https://img.icons8.com/ios-filled/100/000000/architect.png" alt="Project Architect" class="w-20 h-20 mb-4"></img>
        <h3 class="text-xl font-semibold text-gray-900">Project Architect</h3>
        <p class="mt-2 text-gray-600">
          The Design Lead will intimately understand your requirements and lifestyle to ensure your home is a reflection of who you are.
        </p>
      </div>

      
      <div class="flex flex-col items-center text-center">
        <img src="https://img.icons8.com/ios-filled/100/000000/conference-call.png" alt="Deal Owner" class="w-20 h-20 mb-4"></img>
        <h3 class="text-xl font-semibold text-gray-900">Deal Owner</h3>
        <p class="mt-2 text-gray-600">
          The Business Manager oversees the entire process to ensure a smooth sailing journey with us, minimizing any hiccups along the way.
        </p>
      </div>

      
      <div class="flex flex-col items-center text-center">
        <img src="https://img.icons8.com/ios-filled/100/000000/worker-male.png" alt="Project Coordinator" class="w-20 h-20 mb-4"></img>
        <h3 class="text-xl font-semibold text-gray-900">Project Coordinator</h3>
        <p class="mt-2 text-gray-600">
          Your Project Manager is dedicated to ensuring on-site execution is seamless. They make it their mission to deliver your home on time.
        </p>
      </div>
    </div>
  </section>

</div>


    
    </div>

  );
};

export default HowWeWork;
