function Projects() {

  const projects = [
    {
      id: 1,
      title: "Music App",
      desc: "React music player application."
    },
    {
      id: 2,
      title: "Weather App",
      desc: "Weather API project."
    },
    {
      id: 3,
      title: "Todo App",
      desc: "Task management application."
    }
  ];

  return (
    <section id="projects" className="py-20 px-8">

      <h2 className="text-4xl font-bold text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {projects.map((project) => (

          <div
            key={project.id}
            className="shadow-lg rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {project.desc}
            </p>

            <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded">
              View Project
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;