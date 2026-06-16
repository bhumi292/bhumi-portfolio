import { motion } from "framer-motion";
import profileImg from "../assets/about.jpg";

function About() {
  return (
    <section
      id="about"
      className="bg-pink-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <img
              src={profileImg}
              alt="Bhumi"
              className="w-72 h-72 rounded-2xl object-cover mx-auto"
            />
          </motion.div>

          {/* Content */}
          <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex-1"
>
  <h3 className="text-3xl font-semibold mb-6">
    Frontend Developer
  </h3>

  <p className="text-gray-300 leading-8 mb-6">
    I completed my MCA in 2024 and have been
    focused on learning modern frontend
    development technologies. I enjoy building
    responsive, user-friendly, and interactive
    web applications.
  </p>

  <p className="text-gray-300 leading-8 mb-8">
    My technical skills include HTML, CSS,
    JavaScript, React.js, Tailwind CSS, Git,
    GitHub, and REST API integration. I am
    continuously improving my skills by building
    real-world projects and exploring modern web
    development practices.
  </p>

  
</motion.div>
        </div>

      </div>
    </section>
  );
}

export default About;