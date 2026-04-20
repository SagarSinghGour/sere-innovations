import { AlertTriangle } from "lucide-react";

export default function Problem() {
  return (
   <section className="bg-green-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          The Problem
        </h2>
        <p className="text-gray-500 mt-3">
          Farmers face multiple challenges in traditional hatching systems
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          
          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <AlertTriangle className="text-red-500 w-6 h-6" />
            <p className="text-gray-700">
              Dependence on external hatcheries
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <AlertTriangle className="text-red-500 w-6 h-6" />
            <p className="text-gray-700">
              Increased cost for small farmers
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <AlertTriangle className="text-red-500 w-6 h-6" />
            <p className="text-gray-700">
              Loss of operational control
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <AlertTriangle className="text-red-500 w-6 h-6" />
            <p className="text-gray-700">
              Real difficulties faced at farm level
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}