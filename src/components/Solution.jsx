import { Sprout, IndianRupee, Cpu } from "lucide-react";

export default function Solution() {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center">
          Our Solution
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
          Sere Innovations provides a smart, affordable, and easy-to-use
          incubator system that empowers farmers to hatch eggs on their own,
          reducing dependency on external hatcheries and lowering costs.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4">
              <Sprout className="text-green-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Self-Reliance
            </h3>
            <p className="text-gray-500 mt-2">
              Farmers can hatch eggs independently without relying on
              external suppliers.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4">
              <IndianRupee className="text-green-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Cost Effective
            </h3>
            <p className="text-gray-500 mt-2">
              Reduces operational costs and increases profitability for
              small and medium farmers.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4">
              <Cpu className="text-green-600 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Smart Monitoring
            </h3>
            <p className="text-gray-500 mt-2">
              Automated temperature and humidity control ensures better
              hatching success rates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}