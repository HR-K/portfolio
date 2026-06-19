const timeline = [
  {
    year: "2022",
    title: "B.Tech Computer Science",
    description:
      "Started undergraduate studies in Computer Science and Engineering.",
  },
  {
    year: "2024",
    title: "Cloud Computing Internship",
    description:
      "Gained exposure to cloud technologies and deployment concepts.",
  },
  {
    year: "2024",
    title: "Cybersecurity Internship",
    description:
      "Worked on security concepts, risk awareness and defensive practices.",
  },
  {
    year: "2025",
    title: "CropOptima Project",
    description:
      "Built an AI-powered crop recommendation and disease detection system.",
  },
  {
    year: "2026",
    title: "Assistant System Engineer @ TCS",
    description:
      "Started professional career focusing on enterprise technology.",
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

      <div className="relative border-l border-zinc-800">

        {timeline.map((item) => (
          <div
            key={`${item.year}-${item.title}`}
            className="relative mb-12 ml-8"
          >
            <div className="absolute -left-[41px] h-4 w-4 rounded-full bg-blue-500" />

            <span className="text-sm text-blue-400">
              {item.year}
            </span>

            <h3 className="mt-2 text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}