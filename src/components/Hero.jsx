import { motion } from "framer-motion";
import farmerImg from "../assets/young-farmer.jpg";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center px-6">
      
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10"
      >

        {/* LEFT SIDE (TEXT) */}
        <div className="text-center md:text-left max-w-xl">
          
          <motion.p
            variants={fadeUp}
            className="text-green-700 text-sm font-semibold uppercase tracking-wide"
          >
            Sere Innovations
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-green-800 mt-3 leading-tight"
          >
            Smart Egg Incubator
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-gray-700"
          >
            Hatch smarter, not harder — automate temperature, humidity, and egg rotation
            for higher success rates with minimal effort.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex justify-center md:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-green-600 text-green-700 rounded-xl hover:bg-green-100"
            >
              Learn More
            </motion.button>
          </motion.div>

        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.img
  variants={fadeUp}
  src={farmerImg}
  alt="Incubator"
  className="rounded-2xl shadow-xl max-w-md w-full"
/>
      </motion.section>

    </div>
  );
}
