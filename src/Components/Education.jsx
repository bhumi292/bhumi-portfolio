function Education() {
  return (
    <section
      id="education"
      className="bg-zinc-900 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="relative border-l-2 border-pink-600">

          <div className="ml-8 mb-12 relative">
            <div className="absolute -left-[41px] top-2 w-4 h-4 bg-pink-600 rounded-full"></div>

            <p className="text-pink-500 font-semibold">
              2024
            </p>

            <h3 className="text-2xl font-bold">
              MCA
            </h3>

            <p className="text-gray-400">
              Master of Computer Applications
            </p>
          </div>

          <div className="ml-8 relative">
            <div className="absolute -left-[41px] top-2 w-4 h-4 bg-pink-600 rounded-full"></div>

            <p className="text-pink-500 font-semibold">
              2021
            </p>

            <h3 className="text-2xl font-bold">
              BCA
            </h3>

            <p className="text-gray-400">
              Bachelor of Computer Applications
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;