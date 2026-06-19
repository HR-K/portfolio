const skills = [
  "Linux",
  "Networking",
  "AWS",
  "Google Cloud",
  "Python",
  "Java",
  "SQL",
  "Git",
  "Cybersecurity",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-12 text-4xl font-bold">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full border border-zinc-700 px-5 py-3 hover:border-blue-500"
          >
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
}