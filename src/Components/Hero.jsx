import { motion } from "framer-motion";
import profileImg from "../assets/profile.avif";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
  src={profileImg}
  alt="Bhumi Dolariya"
  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-[0_0_40px_rgba(168,85,247,0.8)]"
/>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
              Bhumi <br />
              Dolariya
            </h1>

            <h2 className="text-gray-300 text-2xl mt-4">
              Frontend Developer
            </h2>

            <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition duration-300">
              Get In Touch
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;