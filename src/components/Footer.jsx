export default function Footer() {
  return (
    <footer className="bg-green-50 text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold tracking-wide text-green-800">
            Sere Innovations
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            🌱 Smart solutions for modern farming
          </p>
        </div>

        {/* Contact */}
        <div className="text-center md:text-right">
          <p className="text-gray-700 font-medium">Contact</p>
          <p className="text-gray-600 text-sm hover:text-green-700 transition cursor-pointer">
            info@example.com
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-green-200 pt-4 text-center text-sm text-gray-500">
        © 2026 Sere Innovations. All rights reserved.
      </div>
    </footer>
  );
}