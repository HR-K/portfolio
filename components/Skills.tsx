const skillGroups = {
  Infrastructure: [
    "Linux",
    "Networking",
  ],


  Programming: [
    "Python",
    "Java",
    "SQL",
  ],

  Tools: [
    "Git",
  ],

  Security: [
    "Cybersecurity",
  ],

  Cloud: [
    "AWS EC2",
    "AWS S3",
    "AWS ELB",
    "CloudWatch",
  ],

  Networking: [
    "Network Protocols",
    "Cisco Packet Tracer",
    "Network Security",
    "IoT Networking",
  ],

  Engineering: [
    "Data Structures",
    "UI/UX Design",
  ],

  Professional: [
    "Leadership",
    "Event Management",
    "Team Collaboration",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-12 text-4xl font-bold">
        Skills
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {Object.entries(skillGroups).map(([category, skills]) => (
          <div
            key={category}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <h3 className="mb-4 text-xl font-semibold">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}