const timeline = [
  {
    year: "2021",
    title: "Started B.Tech (CSBS)",
    description:
      "Joined SRKR Engineering College and began building foundations in Computer Science, Business Systems, Programming, and Networking.",
  },

  {
    year: "2023",
    title: "Cloud Computing Intern",
    featured: true,
    description:
      "Worked with AWS services including EC2, S3, ELB, and CloudWatch. Gained hands-on experience in cloud infrastructure deployment and optimization.",
  },

  {
    year: "2024",
    title: "Networking Intern",
    featured: true,
    description:
      "Designed enterprise network architectures using Cisco Packet Tracer, IoT technologies, and network security concepts.",
  },

  {
    year: "2024",
    title: "Event Coordinator — NIPUNA",
    description:
      "Led planning and execution of a national-level technical event with 200+ participants from multiple colleges.",
  },

  {
    year: "2024-25",
    title: "CropOptima Research Project",
    featured: true,
    description:
      "Developed an AI-driven agriculture platform for crop prediction, fertilizer recommendation, and disease detection using Machine Learning and Deep Learning.",
  },

  {
    year: "2025",
    title: "Graduated from SRKR Engineering College",
    description:
      "Completed B.Tech in Computer Science and Business Systems with a CGPA of 7.85.",
  },

  {
    year: "2026",
    title: "Assistant System Engineer @ TCS",
    featured: true,
    description:
      "Joined Tata Consultancy Services and started professional career in enterprise technology and infrastructure.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <h2 className="mb-12 text-4xl font-bold">
        Journey
      </h2>

      <p className="mb-12 max-w-2xl text-zinc-400">
        My progression from engineering student to cloud and
        infrastructure professional through internships,
        leadership experiences, research projects, and industry training.
      </p>

      <div className="relative border-l border-zinc-800">

        {timeline.map((item) => (
          <div
            key={`${item.year}-${item.title}`}
            className="relative mb-12 ml-8"
          >
            <div className="absolute -left-[46px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-500 bg-black">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
            </div>

            <span className="text-sm text-blue-400">
              {item.year}
            </span>

            <div
              className={`mt-3 rounded-2xl p-6 transition hover:border-blue-500 ${
                item.featured
                  ? "border border-blue-500/40 bg-blue-500/5"
                  : "border border-zinc-800 bg-zinc-950"
              }`}
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}