const projects = [
  {
    title: "React Sound Effect Library",
    description:
      "Responsive music player with play, pause and song navigation features.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    Github: "https://bhumi292.github.io/react-sound-effects-library/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing my skills, projects and frontend development journey.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    Github: "https://bhumi292.github.io/react-sound-effects-library/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-900 text-white py-24 px-6 scroll-mt-14"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-pink-500 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-pink-900 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
  href={project.Github}
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 border border-gray-500 rounded-lg hover:bg-zinc-800"
>
  GitHub
</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;