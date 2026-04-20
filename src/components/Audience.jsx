import { Users, Tractor, Briefcase } from "lucide-react";

export default function Audience() {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Who Is This For?
        </h2>
        <p className="text-gray-500 mt-3">
          Designed for individuals and businesses looking to improve efficiency in poultry farming
        </p>

        {/* Audience Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            <Users className="text-green-600 w-8 h-8 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">
              Small Poultry Farmers
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Gain more control over hatching without relying on external systems
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            <Tractor className="text-green-600 w-8 h-8 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">
              Farm Owners
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Improve productivity and manage operations more efficiently
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            <Briefcase className="text-green-600 w-8 h-8 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">
              Rural Entrepreneurs
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Build a sustainable income source with modern farming solutions
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}