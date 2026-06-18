const projects = [
  {
    title: "Music App",
    description: "React Music Player",
  },
  {
    title: "Weather App",
    description: "Weather API Project",
  },
  {
    title: "Portfolio",
    description: "Personal Portfolio Website",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100 py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="h-48 bg-gray-200 rounded mb-4"></div>

            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Demo
              </button>

              <button className="border px-4 py-2 rounded">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;