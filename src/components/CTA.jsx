export default function CTA() {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-20 text-center">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Start Your Own Hatchery Today
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Take control of your farming process with a smart, reliable incubator system.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          
          <button className="px-8 py-3 border border-green-600 text-green-700 rounded-xl hover:bg-green-100 transition">
            Enquire Now
          </button>

          <button className="px-8 py-3 border border-green-600 text-green-700 rounded-xl hover:bg-green-100 transition">
            Request a Demo
          </button>

        </div>

        {/* Optional Trust Line */}
        <p className="mt-6 text-sm text-gray-500">
          No commitments. Just explore how it can help your farm.
        </p>

      </div>
    </section>
  );
}