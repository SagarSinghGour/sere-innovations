import { CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Benefits
        </h2>
        <p className="text-gray-600 mt-3">
          Key advantages of using the smart incubator system
        </p>

        {/* Benefits Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          
          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <CheckCircle className="text-green-600 w-6 h-6" />
            <p className="text-gray-700">
              More control for the farmer
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <CheckCircle className="text-green-600 w-6 h-6" />
            <p className="text-gray-700">
              Better independence from hatcheries
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <CheckCircle className="text-green-600 w-6 h-6" />
            <p className="text-gray-700">
              Cost efficiency
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <CheckCircle className="text-green-600 w-6 h-6" />
            <p className="text-gray-700">
              Simpler operations
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition md:col-span-2">
            <CheckCircle className="text-green-600 w-6 h-6" />
            <p className="text-gray-700">
              Increased confidence and income potential
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}