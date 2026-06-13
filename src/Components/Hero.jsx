function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center"
    >
      <div className="text-center">

        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm Bhumi
        </h1>

        <p className="mt-5 text-xl text-gray-400">
          Frontend Developer
        </p>

        <p className="mt-4 max-w-xl mx-auto text-gray-500">
          I build responsive and modern web applications using
          React, JavaScript and Tailwind CSS.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
          View Projects
        </button>

      </div>
    </section>
  );
}

export default Hero;