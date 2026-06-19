export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-12 text-4xl font-bold">
        Featured Project
      </h2>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

        <h3 className="text-3xl font-bold">
          CropOptima
        </h3>

        <p className="mt-4 text-zinc-400">
          AI-powered crop recommendation and disease
          detection system using machine learning and
          deep learning techniques.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          {[
            "Machine Learning",
            "CNN",
            "LSTM",
            "VGG16",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-600 px-4 py-2"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}