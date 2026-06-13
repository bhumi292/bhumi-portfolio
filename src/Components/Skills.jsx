function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="bg-gray-100 py-20 px-8">

      <h2 className="text-4xl font-bold text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-5xl mx-auto">

        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white p-6 text-center rounded-lg shadow"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;