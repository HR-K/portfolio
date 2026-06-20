const projects = [
  {
    title: "CropOptima",
    description:
      "AI-powered smart agriculture platform for crop prediction, fertilizer recommendation, and crop disease detection using Machine Learning and Deep Learning.",
    tech: ["Machine Learning", "CNN", "LSTM", "VGG16"],
  },

  {
    title: "Enterprise Cloud Load Balancer",
    description:
      "Designed a highly available cloud architecture using AWS EC2, Elastic Load Balancer, and CloudWatch monitoring.",
    tech: ["AWS", "EC2", "ELB", "CloudWatch"],
  },

  {
    title: "Network Security Architecture",
    description:
      "Designed and simulated a secure enterprise network architecture using Cisco Packet Tracer, routing, switching, and network security principles.",
    tech: ["Cisco", "Networking", "Security", "Packet Tracer"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="text-4xl font-bold">
        Projects
      </h2>

      <p className="mt-4 mb-12 max-w-2xl text-zinc-400">
        Projects focused on cloud infrastructure,
        networking, security, and applied AI.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-blue-500"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}