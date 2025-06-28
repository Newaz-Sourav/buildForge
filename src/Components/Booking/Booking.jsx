import React from 'react'

const Booking = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-12">Contact Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Info Section */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>Ka-6/A, Bashundhara R/A Road, Jagannathpur, Vatara, Dhaka-1229</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>
              <a href="tel:+880248732322" className="hover:underline text-blue-600">
                +88017********
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>
              <a href="mailto:info@minimallimited.com" className="hover:underline text-blue-600">
                info@buildforge.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <p>Sunday to Thursday: 10:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* Right Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
