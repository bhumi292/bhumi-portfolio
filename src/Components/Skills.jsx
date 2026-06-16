const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST API",
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow p-5 rounded-lg text-center hover:scale-105 duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;