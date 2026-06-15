import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-6"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Bhumi 👋
        </motion.h1>

        <h2 className="text-2xl text-blue-600 font-semibold mb-4">
          Frontend Developer
        </h2>

        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          I build responsive and interactive web applications
          using React.js and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Download CV
          </button>

          <a
            href="#contact"
            className="border border-blue-600 px-6 py-3 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;