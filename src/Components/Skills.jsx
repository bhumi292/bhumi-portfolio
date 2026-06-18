import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Github", icon: <FaGitAlt /> },
  ];

  return (
    <section id="skills" className="bg-black scroll-mt-14 text-white py-40">
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto ">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800 hover:border-pink-500 transition"
          >
            <div className="text-4xl mb-4">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;