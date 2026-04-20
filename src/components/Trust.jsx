import { ShieldCheck, Users, MessageCircle, Settings } from "lucide-react";

export default function Trust() {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Why Trust Us?
        </h2>
        <p className="text-gray-500 mt-3">
          Designed with real-world farming challenges in mind — no hype, just practical solutions.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Users className="text-green-600 w-6 h-6" />
            <p className="text-gray-700 font-medium">
              Product built from real farmer needs
            </p>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <MessageCircle className="text-green-600 w-6 h-6" />
            <p className="text-gray-700 font-medium">
              Field-grounded communication and feedback
            </p>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Settings className="text-green-600 w-6 h-6" />
            <p className="text-gray-700 font-medium">
              Practical and simple to operate
            </p>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <ShieldCheck className="text-green-600 w-6 h-6" />
            <p className="text-gray-700 font-medium">
              Focused on building early trust through transparency
            </p>
          </div>

        </div>

        {/* Honest Note */}
        <p className="text-sm text-gray-400 mt-10 italic">
          We believe in honest communication — no exaggerated claims, no fake testimonials.
        </p>

      </div>
    </section>
  );
}