import {
  UserCheck,
  Thermometer,
  Droplets,
  RefreshCw,
  IndianRupee,
  Leaf
} from "lucide-react";

export default function Features() {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800">
          Key Features
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">

          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <UserCheck className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Easy to Use</h3>
            <p className="text-gray-500 mt-2">
              No technical expertise required. Simple and user-friendly design.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <Thermometer className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Temperature Control</h3>
            <p className="text-gray-500 mt-2">
              Maintains optimal temperature for successful egg hatching.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <Droplets className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Humidity Control</h3>
            <p className="text-gray-500 mt-2">
              Ensures proper moisture levels inside the incubator.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <RefreshCw className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Automatic Egg Turning</h3>
            <p className="text-gray-500 mt-2">
              Automatically rotates eggs for even development.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <IndianRupee className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Affordable Setup</h3>
            <p className="text-gray-500 mt-2">
              Budget-friendly solution (~₹10,000) for small farmers.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
            <Leaf className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Farmer-Friendly Design</h3>
            <p className="text-gray-500 mt-2">
              Designed specifically for rural and small-scale farmers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}