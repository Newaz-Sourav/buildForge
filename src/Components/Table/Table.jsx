import React from 'react'

const Table = () => {
  return (
    <div>
       <div class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-4">How we are Standing Out</h2>
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">From the Competition</h2>
            <p class="text-lg text-center text-gray-600 mb-12">We focus on adding value to everything we do; see it for yourself.</p>

            <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="grid grid-cols-3 bg-gray-100 border-b border-gray-200">
                    <div class="p-4 font-semibold text-gray-700"></div>
                    <div class="p-4 font-semibold text-white bg-gray-800 text-center">BuildForge Experience</div>
                    <div class="p-4 font-semibold text-gray-700 bg-gray-200 text-center">Typical Experience</div>
                </div>

                <div class="grid grid-cols-3 border-b border-gray-200">
                    <div class="p-4 font-semibold text-gray-700 border-r border-gray-200 flex items-center">Price</div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                               <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>
                                Transparent cost structure and material specification.
                            </li>
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>
                                Flexible budget suggestions
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                30-50% hike between first quote and final cos-
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-3 border-b border-gray-200">
                    <div class="p-4 font-semibold text-gray-700 border-r border-gray-200 flex items-center">Convenience</div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>
                                One-stop service point for all interior and exterior needs.
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                You'll need 30-40 vendors to gather everything.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-3 border-b border-gray-200">
                    <div class="p-4 font-semibold text-gray-700 border-r border-gray-200 flex items-center">Design</div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>

                                Personalized design with 3D visuals.
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                Ordinary design and visuals.
                            </li>
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                Compromised functions and utilities.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-3 border-b border-gray-200">
                    <div class="p-4 font-semibold text-gray-700 border-r border-gray-200 flex items-center">Timelines</div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>

                                50-day move-in(Depends on site condition)
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                Lengthy project period.
                            </li>
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                Surprise delays.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-3 border-b border-gray-200">
                    <div class="p-4 font-semibold text-gray-700 border-r border-gray-200 flex items-center">Communication</div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>


                                We provide a Gantt chart.
                            </li>
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>


                                Regular updates with project tracking.
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                Irregular updates & follow-up.
                            </li>
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                No proper documentation.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-3 border-b border-gray-200">
                    <div class="p-4 font-semibold text-gray-700 border-r border-gray-200 flex items-center">Quality</div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>


                                We use branded materials.
                            </li>
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>


                                50 quality checks.
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                Inferior materials to cut costs.
                            </li>
                            <li class="flex items-start text-gray-700">
                               <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                Less than 20 quality checks.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-3 border-b border-gray-200">
                    <div class="p-4 font-semibold text-gray-700 border-r border-gray-200 flex items-center">After-sales support</div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>


                                Dedicated team for prompt response.
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                Insufficient capability for quick support.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-3">
                    <div class="p-4 font-semibold text-gray-700 border-r border-gray-200 flex items-center">Warranty</div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>


                                1 year hardware guarantee.
                            </li>
                            <li class="flex items-start text-gray-700">
                                <p className="text-green-600 pr-2"><i class="fa-solid fa-check"></i></p>


                                2 years of after-sales service.
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <ul class="space-y-2">
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                Lack of commitment.
                            </li>
                            <li class="flex items-start text-gray-700">
                                <p className="text-red-600 pr-2"><i class="fa-solid fa-xmark"></i></p>
                                No valid warranty policy.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Table
